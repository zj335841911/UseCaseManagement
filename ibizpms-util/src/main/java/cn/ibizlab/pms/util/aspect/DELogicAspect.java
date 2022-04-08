package cn.ibizlab.pms.util.aspect;

import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.util.domain.DELogic;
import cn.ibizlab.pms.util.domain.EntityBase;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;
import org.apache.commons.io.IOUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.flowable.bpmn.converter.BpmnXMLConverter;
import org.flowable.bpmn.model.*;
import org.flowable.bpmn.model.Process;
import org.kie.api.KieServices;
import org.kie.api.builder.KieBuilder;
import org.kie.api.builder.KieFileSystem;
import org.kie.api.builder.Message;
import org.kie.api.builder.Results;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.internal.io.ResourceFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * 实体处理逻辑切面（前后附加逻辑、实体行为调用处理逻辑）
 */
@Aspect
@Component
@Slf4j
public class DELogicAspect {

    private static BpmnXMLConverter bpmnXMLConverter = new BpmnXMLConverter();
    private final ExpressionParser parser = new SpelExpressionParser();
    private ConcurrentMap<String, DELogic> deLogicMap = new ConcurrentHashMap<>();
    private static Map<String, Object> validLogic = new HashMap<>();

    /**
     * 执行实体行为附加逻辑、实体行为调用处理逻辑
     *
     * @param point
     * @return
     * @throws Throwable
     */
    @Around("execution(* cn.ibizlab.pms.core.*.service.*.*(..)) && !execution(* cn.ibizlab.pms.core.es.service.*.*(..))")
    public Object executeLogic(ProceedingJoinPoint point) throws Throwable {
        Object args[] = point.getArgs();
        if (ObjectUtils.isEmpty(args) || args.length == 0) {
            return point.proceed();
        }
        Object service = point.getTarget();
        Object arg = args[0];
        String action = point.getSignature().getName();
        EntityBase entity = null;
        if ("remove".equalsIgnoreCase(action) || "get".equalsIgnoreCase(action)) {
            entity = getEntity(service.getClass());
            if(!ObjectUtils.isEmpty(entity)) {
                String id = DEFieldCacheMap.getDEKeyField(entity.getClass());
                if(StringUtils.isEmpty(id)) {
                    log.debug("无法获取实体主键属性[{}]",entity.getClass().getSimpleName());
                    return point.proceed();
                }
                entity.set(id, arg);
            }
        } else if (arg instanceof EntityBase) {
            entity = (EntityBase) arg;
        }
        if (entity != null) {
            executeBeforeLogic(entity, action);
            Object result = point.proceed();
            if("get".equalsIgnoreCase(action) && result instanceof EntityBase){
                entity = (EntityBase) result;
            }
            executeLogic(entity, action);
            executeAfterLogic(entity, action);
            return result;
        }
        return point.proceed();
    }

    /**
     * 前附加逻辑
     *
     * @param entity
     * @param action
     */
    private void executeBeforeLogic(EntityBase entity, String action) {
        Resource bpmnFile = getLocalModel(entity.getClass().getSimpleName(), action, LogicExecMode.BEFORE);
        if (bpmnFile != null && bpmnFile.exists() && isValid(bpmnFile, entity, action)) {
            executeLogic(bpmnFile, entity, action);
        }
    }

    /**
     * 后附加逻辑
     *
     * @param entity
     * @param action
     */
    private void executeAfterLogic(EntityBase entity, String action) {
        Resource bpmnFile = getLocalModel(entity.getClass().getSimpleName(), action, LogicExecMode.AFTER);
        if (bpmnFile != null && bpmnFile.exists() && isValid(bpmnFile, entity, action)) {
            executeLogic(bpmnFile, entity, action);
        }
    }

    /**
     * 实体行为调用处理逻辑
     *
     * @param entity
     * @param action
     */
    private void executeLogic(EntityBase entity, String action) {
        Resource bpmnFile = getLocalModel(entity.getClass().getSimpleName(), action, LogicExecMode.EXEC);
        if (bpmnFile != null && bpmnFile.exists() && isValid(bpmnFile, entity, action)) {
            executeLogic(bpmnFile, entity, action);
        }
    }

    /**
     * 编译并执行规则（bpmn、drl）
     *
     * @param bpmnFile
     * @param entity
     */
    private void executeLogic(Resource bpmnFile, Object entity, String action) {
        try {
            log.debug("开始执行实体处理逻辑[{}:{}:{}:本地模式]", entity.getClass().getSimpleName(), action, bpmnFile.getFilename());
            String bpmnId = DigestUtils.md5DigestAsHex(bpmnFile.getURL().getPath().getBytes());
            DELogic logic = getDELogic(bpmnFile);
            if (logic == null) {
                return;
            }
            if (deLogicMap.containsKey(bpmnId) && logic.getMd5().equals(deLogicMap.get(bpmnId).getMd5())) {
                logic = deLogicMap.get(bpmnId);
            } else {
                reloadLogic(logic);
                deLogicMap.put(bpmnId, logic);
            }
            KieContainer container = logic.getContainer();
            KieSession kieSession = container.getKieBase().newKieSession();
            Process mainProcess = logic.getProcess();
            //主流程参数
            fillGlobalParam(kieSession, mainProcess, entity);
            //子流程参数
            if (!ObjectUtils.isEmpty(logic.getRefLogic())) {
                for (DELogic subLogic : logic.getRefLogic()) {
                    fillGlobalParam(kieSession, subLogic.getProcess(), entity);
                }
            }
            kieSession.startProcess(mainProcess.getId());
            log.debug("实体处理逻辑[{}:{}:{}:本地模式]执行结束", entity.getClass().getSimpleName(), action, bpmnFile.getFilename());
        } catch (IOException e) {
            log.error("实体处理逻辑[{}:{}:{}:本地模式]发生异常", entity.getClass().getSimpleName(), action, bpmnFile.getFilename());
            throw new BadRequestAlertException("执行实体处理逻辑发生异常" + e.getMessage(), "DELogicAspect", "executeLogic");
        }
    }

    /**
     * 编译规则
     *
     * @param logic
     */
    private void reloadLogic(DELogic logic) throws IOException {
        KieServices kieServices = KieServices.get();
        KieFileSystem kieFileSystem = kieServices.newKieFileSystem();
        for (Resource bpmn : logic.getRefRuleFiles()) {
            kieFileSystem.write(ResourceFactory.newUrlResource(bpmn.getURL()));
        }
        KieBuilder kieBuilder = kieServices.newKieBuilder(kieFileSystem).buildAll();
        Results results = kieBuilder.getResults();
        if (results.hasMessages(Message.Level.ERROR)) {
            throw new BadRequestAlertException(String.format("编译实体处理逻辑 [%s] 发生异常, %s", logic.getName(), results.getMessages()), "DELogicAspect", "reloadLogic");
        }
        KieContainer kieContainer = kieServices.newKieContainer(kieServices.getRepository().getDefaultReleaseId());
        logic.setContainer(kieContainer);
    }

    /**
     * 填充逻辑参数
     *
     * @param kieSession
     * @param process
     * @param entity
     */
    private void fillGlobalParam(KieSession kieSession, Process process, Object entity) {
        Map<String, List<ExtensionElement>> params = process.getExtensionElements();
        for (Map.Entry<String, List<ExtensionElement>> param : params.entrySet()) {
            if ("metaData".equalsIgnoreCase(param.getKey())) {
                List<ExtensionElement> globalParams = param.getValue();
                for (ExtensionElement globalParam : globalParams) {
                    Object value = null;
                    Map<String, List<ExtensionAttribute>> globalParamAttr = globalParam.getAttributes();
                    if (globalParamAttr.containsKey("name") && globalParamAttr.containsKey("type") && globalParamAttr.containsKey("express")) {
                        ExtensionAttribute name = globalParamAttr.get("name").get(0);
                        ExtensionAttribute type = globalParamAttr.get("type").get(0);
                        ExtensionAttribute express = globalParamAttr.get("express").get(0);
                        String express_value = express.getValue();
                        EvaluationContext oldContext = new StandardEvaluationContext();
                        if ("entity".equalsIgnoreCase(type.getValue())) {
                            value = entity;
                        }
                        if (!ObjectUtils.isEmpty(type.getValue()) && ObjectUtils.isEmpty(value)) {
                            Expression oldExp = parser.parseExpression(express_value);
                            value = oldExp.getValue(oldContext);
                        }
                        if ("entity".equalsIgnoreCase(type.getValue()) || "refentity".equalsIgnoreCase(type.getValue())) {
                            kieSession.insert(value);
                        }
                        kieSession.setGlobal(name.getValue(), value);
                    }
                }
            }
        }
    }

    /**
     * 获取逻辑配置
     *
     * @param bpmnFile
     * @return
     */
    private DELogic getDELogic(Resource bpmnFile) {
        DELogic logic = null;
        XMLStreamReader reader = null;
        InputStream bpmn = null;
        try {
            if (bpmnFile.exists()) {
                XMLInputFactory factory = XMLInputFactory.newInstance();
                bpmn = bpmnFile.getInputStream();
                reader = factory.createXMLStreamReader(bpmn);
                BpmnModel model = bpmnXMLConverter.convertToBpmnModel(reader);
                Process mainProcess = model.getMainProcess();
                if (mainProcess == null) {
                    return null;
                }
                log.debug("正在加载 BPMN:{}", bpmnFile.getURL().getPath());
                List<DELogic> refLogics = new ArrayList<>();
                List<Resource> refFiles = new ArrayList<>();
                //自己 bpmn 及 drl
                refFiles.add(bpmnFile);
                Resource drlFile = getDrl(bpmnFile);
                if (drlFile != null && drlFile.exists()) {
                    refFiles.add(drlFile);
                    log.debug("正在加载 DRL:{}", drlFile.getURL().getPath());
                }
                //子 bpmn 及 drl
                if (!ObjectUtils.isEmpty(model.getMainProcess()) && !ObjectUtils.isEmpty(model.getMainProcess().getFlowElementMap())) {
                    model.getMainProcess().getFlowElementMap().values().forEach(item -> {
                        if (item instanceof CallActivity) {
                            CallActivity subBpmn = (CallActivity) item;
                            String bpmnFileName = subBpmn.getName();
                            Resource subBpmnFile = getSubBpmn(bpmnFileName);
                            DELogic refLogic = getDELogic(subBpmnFile);
                            if (refLogic != null) {
                                refLogics.add(refLogic);
                                if (!ObjectUtils.isEmpty(refLogic.getRefRuleFiles())) {
                                    refFiles.addAll(refLogic.getRefRuleFiles());
                                }
                            }
                        }
                    });
                }
                logic = new DELogic();
                logic.setId(mainProcess.getId());
                logic.setName(mainProcess.getName());
                logic.setProcess(mainProcess);
                logic.setRefLogic(refLogics);
                logic.setRefRuleFiles(refFiles);
                logic.setMd5(getMd5(refFiles));
            }
        } catch (Exception e) {
            log.error("执行处理逻辑失败" + e);
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
                if (bpmn != null) {
                    bpmn.close();
                }
            } catch (Exception e) {
                log.error("执行处理逻辑失败" + e);
            }
        }
        return logic;
    }

    /**
     * 获取实体
     *
     * @param service
     * @return
     */
    private EntityBase getEntity(Class service) {
        Method[] methods = service.getDeclaredMethods();
        for (Method method : methods) {
            for (Class cls : method.getParameterTypes()) {
                try {
                    Object arg = cls.newInstance();
                    if (arg instanceof EntityBase) {
                        return (EntityBase) arg;
                    }
                } catch (Exception e) {
                }
            }
        }
        if (!ObjectUtils.isEmpty(service.getSuperclass()) && !service.getSuperclass().getName().equals(Object.class.getName())) {
            return getEntity(service.getSuperclass());
        }
        log.error("获取实体信息失败，未能在[{}]中找到参数为实体类对象的行为，如create.update等", service.getSimpleName());
        return null;
    }

    /**
     * 获取bpmn md5
     *
     * @param subFiles
     * @return
     */
    private String getMd5(List<Resource> subFiles) {
        try {
            StringBuffer buffer = new StringBuffer();
            for (Resource file : subFiles) {
                InputStream bpmnFile = null;
                try {
                    bpmnFile = file.getInputStream();
                    if (!ObjectUtils.isEmpty(bpmnFile)) {
                        String strBpmn = IOUtils.toString(bpmnFile, "UTF-8");
                        buffer.append(strBpmn);
                    }
                } catch (Exception e) {
                    log.error("处理逻辑版本检查失败" + e);
                } finally {
                    if (bpmnFile != null) {
                        bpmnFile.close();
                    }
                }
            }
            if (!StringUtils.isEmpty(buffer.toString())) {
                return DigestUtils.md5DigestAsHex(buffer.toString().getBytes());
            } else {
                return null;
            }
        } catch (Exception e) {
            log.error("处理逻辑版本检查失败" + e);
            return null;
        }
    }

    /**
     * 本地逻辑
     *
     * @param entity
     * @param action
     * @param logicExecMode
     * @return
     */
    private Resource getLocalModel(String entity, String action, LogicExecMode logicExecMode) {
        return new ClassPathResource("rules" + File.separator + entity + File.separator + action.toLowerCase() + File.separator + logicExecMode.text + ".bpmn");
    }

    /**
     * 处理逻辑 bpmn
     *
     * @param logicName
     * @return
     */
    private Resource getSubBpmn(String logicName) {
        return new ClassPathResource(String.format("rules/%s", logicName));
    }

    /**
     * 处理逻辑 drl
     *
     * @param bpmn
     * @return
     */
    private Resource getDrl(Resource bpmn) {
        String filePath = ((ClassPathResource) bpmn).getPath();
        filePath = filePath.endsWith("RuleFlow.bpmn") ? filePath.replace("RuleFlow.bpmn", "Rule.drl") : filePath.replace(".bpmn", ".drl");
        return new ClassPathResource(filePath);
    }

    /**
     * 逻辑是否有效
     *
     * @param bpmn
     * @param entity
     * @param action
     * @return
     */
    private boolean isValid(Resource bpmn, Object entity, Object action) {
        String logicId = String.format("%s%s%s", entity.getClass().getSimpleName(), action, bpmn.getFilename()).toLowerCase();
        if (validLogic.containsKey(logicId)) {
            return true;
        } else {
            return false;
        }
    }

    static {
        validLogic.put("actioncreatebefore.bpmn", 1);
        validLogic.put("actioncommentexec.bpmn", 1);
        validLogic.put("bugcreateafter.bpmn", 1);
        validLogic.put("bugremoveafter.bpmn", 1);
        validLogic.put("buggetdraftafter.bpmn", 1);
        validLogic.put("bugactivateafter.bpmn", 1);
        validLogic.put("bugassigntoafter.bpmn", 1);
        validLogic.put("bugassigntoafter.bpmn", 1);
        validLogic.put("bugbugfavoritesexec.bpmn", 1);
        validLogic.put("bugbugnfavoritesexec.bpmn", 1);
        validLogic.put("bugcloseafter.bpmn", 1);
        validLogic.put("bugconfirmafter.bpmn", 1);
        validLogic.put("bugresolveafter.bpmn", 1);
        validLogic.put("bugtostoryafter.bpmn", 1);
        validLogic.put("bugupdatestoryversionexec.bpmn", 1);
        validLogic.put("buildmobprojectbuildcounterexec.bpmn", 1);
        validLogic.put("casecasefavoriteexec.bpmn", 1);
        validLogic.put("casecasenfavoriteexec.bpmn", 1);
        validLogic.put("caseruncasesexec.bpmn", 1);
        validLogic.put("casetestruncasesexec.bpmn", 1);
        validLogic.put("caseunlinkcasesexec.bpmn", 1);
        validLogic.put("caseunlinksuitecasesexec.bpmn", 1);
        validLogic.put("docgetafter.bpmn", 1);
        validLogic.put("doclibgetafter.bpmn", 1);
        validLogic.put("doclibmodulecreateafter.bpmn", 1);
        validLogic.put("doclibmoduleupdateafter.bpmn", 1);
        validLogic.put("doclibmodulegetafter.bpmn", 1);
        validLogic.put("doclibmoduledoclibmodulenfavoriteexec.bpmn", 1);
        validLogic.put("doclibmoduledoclibmodulefavoriteexec.bpmn", 1);
        validLogic.put("doclibmodulefixexec.bpmn", 1);
        validLogic.put("ibzprostorymodulecreateafter.bpmn", 1);
        validLogic.put("ibzprostorymoduleupdateafter.bpmn", 1);
        validLogic.put("ibzlibmodulecreateafter.bpmn", 1);
        validLogic.put("ibzlibmoduleupdateafter.bpmn", 1);
        validLogic.put("ibzmyterritorymobmenucountexec.bpmn", 1);
        validLogic.put("ibzmyterritorymyfavoritecountexec.bpmn", 1);
        validLogic.put("ibzmyterritorymyterritorycountexec.bpmn", 1);
        validLogic.put("ibzreportmyreportinotsubmitexec.bpmn", 1);
        validLogic.put("ibzreportreportireceivedexec.bpmn", 1);
        validLogic.put("productcancelproducttopexec.bpmn", 1);
        validLogic.put("productmobproductcounterexec.bpmn", 1);
        validLogic.put("productmobproducttestcounterexec.bpmn", 1);
        validLogic.put("productproducttopexec.bpmn", 1);
        validLogic.put("productmodulecreateafter.bpmn", 1);
        validLogic.put("productmoduleupdateafter.bpmn", 1);
        validLogic.put("productmodulefixexec.bpmn", 1);
        validLogic.put("productmoduleremovemoduleexec.bpmn", 1);
        validLogic.put("productplangetafter.bpmn", 1);
        validLogic.put("productplangetdraftafter.bpmn", 1);
        validLogic.put("productplangetoldplannameexec.bpmn", 1);
        validLogic.put("productplanmobproductplancounterexec.bpmn", 1);
        validLogic.put("productstatsgetafter.bpmn", 1);
        validLogic.put("projectgetafter.bpmn", 1);
        validLogic.put("projectcancelprojecttopexec.bpmn", 1);
        validLogic.put("projectmobprojectcountexec.bpmn", 1);
        validLogic.put("projectprojecttaskqcntexec.bpmn", 1);
        validLogic.put("projectprojecttopexec.bpmn", 1);
        validLogic.put("projectmodulecreateafter.bpmn", 1);
        validLogic.put("projectmoduleupdateafter.bpmn", 1);
        validLogic.put("projectmodulefixexec.bpmn", 1);
        validLogic.put("projectmoduleremovemoduleexec.bpmn", 1);
        validLogic.put("projectstatsprojectqualitysumexec.bpmn", 1);
        validLogic.put("projectteamgetdraftafter.bpmn", 1);
        validLogic.put("releasemobreleasecounterexec.bpmn", 1);
        validLogic.put("storygetafter.bpmn", 1);
        validLogic.put("storybuildunlinkstorysexec.bpmn", 1);
        validLogic.put("storygetstoryspecsexec.bpmn", 1);
        validLogic.put("storyprojectunlinkstorysexec.bpmn", 1);
        validLogic.put("storystoryfavoritesexec.bpmn", 1);
        validLogic.put("storystorynfavoritesexec.bpmn", 1);
        validLogic.put("sysupdatelogcreateafter.bpmn", 1);
        validLogic.put("taskgetafter.bpmn", 1);
        validLogic.put("taskgetdraftafter.bpmn", 1);
        validLogic.put("taskgetusernamesexec.bpmn", 1);
        validLogic.put("tasktaskfavoritesexec.bpmn", 1);
        validLogic.put("tasktasknfavoritesexec.bpmn", 1);
        validLogic.put("taskupdatestoryversionexec.bpmn", 1);
        validLogic.put("testmodulecreateafter.bpmn", 1);
        validLogic.put("testmoduleupdateafter.bpmn", 1);
        validLogic.put("testmodulefixexec.bpmn", 1);
        validLogic.put("testmoduleremovemoduleexec.bpmn", 1);
        validLogic.put("testreportgetinfotaskovbytimeexec.bpmn", 1);
        validLogic.put("testreportgetinfotesttaskexec.bpmn", 1);
        validLogic.put("testreportgetinfotesttaskovprojectexec.bpmn", 1);
        validLogic.put("testreportgetinfotesttaskprojectexec.bpmn", 1);
        validLogic.put("testreportgetinfotesttaskrexec.bpmn", 1);
        validLogic.put("testreportgetinfotesttasksexec.bpmn", 1);
        validLogic.put("testreportgettestreportbasicinfoexec.bpmn", 1);
        validLogic.put("testreportgettestreportprojectexec.bpmn", 1);
        validLogic.put("testsuitemobtestsuitecountexec.bpmn", 1);
        validLogic.put("testtaskgetdraftafter.bpmn", 1);
        validLogic.put("testtaskmobtesttaskcounterexec.bpmn", 1);
        validLogic.put("todogetafter.bpmn", 1);
        validLogic.put("todogetafter.bpmn", 1);
        validLogic.put("useryearworkstatsgetdevinfomationexec.bpmn", 1);
        validLogic.put("useryearworkstatsgetpoinfomationexec.bpmn", 1);
        validLogic.put("useryearworkstatsgetqainfomationexec.bpmn", 1);
        validLogic.put("useryearworkstatsgetuseryearactionafter.bpmn", 1);
        validLogic.put("useryearworkstatsupdatetitlebyyearafter.bpmn", 1);
    }

     public enum LogicExecMode {
        /**
         * 前附加逻辑
         */
        BEFORE("0", "before"),
        /**
         * 后附加逻辑
         */
        AFTER("1", "after"),
        /**
         *
         */
        EXEC("2", "exec");

        LogicExecMode(String value, String text) {
            this.value = value;
            this.text = text;
        }

        private String value;
        private String text;
    }
}

