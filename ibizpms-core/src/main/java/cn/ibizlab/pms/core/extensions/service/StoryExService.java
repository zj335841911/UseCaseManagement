package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.domain.ProductModule;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStory;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProStorySearchContext;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryService;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSDataEntity;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysReqItem;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysReqModule;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSDEFieldService;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSDataEntityService;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSSysReqItemService;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSSysReqModuleService;
import cn.ibizlab.pms.core.util.ibizpro.template.freemarker.story.DeFreemarkerTplHelper;
import cn.ibizlab.pms.core.util.message.SendMessage;
import cn.ibizlab.pms.core.util.zentao.bean.ZTFileItem;
import cn.ibizlab.pms.core.util.zentao.service.IIBZZTFileService;
import cn.ibizlab.pms.core.zentao.domain.ProjectProduct;
import cn.ibizlab.pms.core.zentao.domain.StorySpec;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.filter.FileSearchContext;
import cn.ibizlab.pms.core.zentao.filter.StorySearchContext;
import cn.ibizlab.pms.core.zentao.filter.StorySpecSearchContext;
import cn.ibizlab.pms.core.zentao.service.IFileService;
import cn.ibizlab.pms.core.zentao.service.IProjectProductService;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.core.zentao.service.impl.StoryServiceImpl;
import cn.ibizlab.pms.core.zentao.service.impl.StorySpecServiceImpl;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Story;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.io.*;
import java.util.*;

/**
 * 实体[需求] 自定义服务对象
 */
@Slf4j
@Primary
@Service("StoryExService")
public class StoryExService extends StoryServiceImpl {

    @Autowired
    IIBZProProductService iibzProProductService;

    @Value("${ibiz.story.de.dir:/app/file/pms/story/de/}")
    private String targetDirPath;

    @Autowired
    IPSDataEntityService ipsDataEntityService;

    @Autowired
    IIBZProStoryService iibzProStoryService;

    @Autowired
    IPSSysReqModuleService ipsSysReqModuleService;

    @Autowired
    IPSSysReqItemService ipsSysReqItemService;

    @Autowired
    IPSDEFieldService ipsdeFieldService;

    @Autowired
    StorySpecServiceImpl storySpecService;

    @Autowired
    DeFreemarkerTplHelper deFreemarkerTplHelper;

    @Autowired
    IIBZZTFileService iibzztFileService;

    @Autowired
    private IFileService fileService;

    @Autowired
    IProjectProductService projectProductService;

    @Autowired
    ITaskService taskService;

    final private static String[] EXTS = {"md", "html", "json"};

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    @Override
    public void saveBatch(List<Story> list) {
        if (list.isEmpty() || list.size() == 0) {
            return;
        }

        boolean flag = cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.StoryHelper.class).batchCreate(list);
        if (flag) {
            log.error("需求细分操作成功");
        } else {
            log.error("需求细分失败");
        }
    }

    @Override
    @Transactional
    public Story push(Story et) {
        et = this.get(et.getId());
        ProductModule productModule = et.getIbzproductmodule();

        IBZProProduct ibzProProduct = iibzProProductService.get(et.getProduct());
        if (ibzProProduct == null || ibzProProduct.getIbizid() == null) {
            return et;
        }
        String modlueid = "";
        if (productModule != null) {
            String module = "PMS_" + ibzProProduct.getId() + "_" + productModule.getId();
            PSSysReqModule psSysReqModule = new PSSysReqModule();
            modlueid = ipsSysReqModuleService.getByCodeName(ibzProProduct.getIbizid(), module);
            psSysReqModule.setPssysreqmoduleid(modlueid);
            psSysReqModule.setCodename(module);
            psSysReqModule.setModulesn(String.valueOf(productModule.getId()));
            psSysReqModule.setPssysreqmodulename(productModule.getName());
            psSysReqModule.setOrdervalue(productModule.getOrder());
            if (modlueid == null) {
                ipsSysReqModuleService.create(ibzProProduct.getIbizid(), psSysReqModule);
            } else {
                ipsSysReqModuleService.update(ibzProProduct.getIbizid(), psSysReqModule);
            }
            modlueid = psSysReqModule.getPssysreqmoduleid();
        }

        String story = "PMS_" + ibzProProduct.getId() + "_" + et.getId();
        String storyid = ipsSysReqItemService.getByCodeName(ibzProProduct.getIbizid(), story);
        PSSysReqItem psSysReqItem = new PSSysReqItem();
//        psSysReqItem.
        psSysReqItem.setPssysreqitemname(et.getTitle());
        psSysReqItem.setPssysreqitemid(storyid);
        psSysReqItem.setItemtype("NORMAL");
        psSysReqItem.setPssysreqmoduleid(modlueid);
        psSysReqItem.setCodename(story);
        StorySpecSearchContext context = new StorySpecSearchContext();
        context.setN_story_eq(et.getId());
        context.setN_version_eq(et.getVersion());
        context.setSort("version,desc");
        StorySpec storySpec = storyspecService.searchDefault(context).getContent().get(0);
        psSysReqItem.setReqcontent(storySpec.getSpec());
        if (storyid == null) {
            ipsSysReqItemService.create(ibzProProduct.getIbizid(), psSysReqItem);
        } else {
            ipsSysReqItemService.update(ibzProProduct.getIbizid(), psSysReqItem);
        }

        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public Story syncFromIbiz(Story et) {
        et = this.get(et.getId());
        IBZProProduct ibzProProduct = iibzProProductService.get(et.getProduct());
        if (ibzProProduct == null || ibzProProduct.getIbizid() == null) {
            return et;
        }
        String storycode = "PMS_" + ibzProProduct.getId() + "_" + et.getId();
        String storyid = ipsSysReqItemService.getByCodeName(ibzProProduct.getIbizid(), storycode);
        if (storyid == null) {
            push(et);
        } else {
            List<PSDataEntity> psDataEntityList = ipsDataEntityService.selectByPssysreqitemid(ibzProProduct.getIbizid(), storyid);
            List<IBZProStory> ibzProStoryList = new ArrayList<IBZProStory>();
            for (PSDataEntity psDataEntity : psDataEntityList) {
                psDataEntity.set("preqnum", et.getId());
                psDataEntity.set("preqlink", "#/ibizpms/products/" + et.getProduct() + "/stories/" + et.getId() + "/mainview_link");
                JSONObject dataModel = new JSONObject();
                dataModel.put("item", psDataEntity);
                dataModel.put("itemname", psDataEntity.getCodename());
                dataModel.put("title", psDataEntity.getLogicname());
                dataModel.put("de", psDataEntity);
                long updatedateLong = psDataEntity.getUpdatedate().getTime();
                boolean flag = deFreemarkerTplHelper.generate(dataModel, psDataEntity.getUpdatedate().getTime());

                IBZProStory ibzProStory = new IBZProStory();
                ibzProStory.setProduct(et.getProduct());
                ibzProStory.setIbizSourceobject("sourcenote__dataentity");
                ibzProStory.setSource("iBiz");
                ibzProStory.setPri(1);
                ibzProStory.setSourcenote(psDataEntity.getCodename());
//
                ibzProStory.setSpec(psDataEntity.getMemo());
                ibzProStory.setComment(psDataEntity.getMemo());
                ibzProStory.setTitle(psDataEntity.getLogicname() + "_" + psDataEntity.getCodename());
                ibzProStory.setIbizSourceid(psDataEntity.getCodename());
                ibzProStory.setIbizSourcename(psDataEntity.getPsdataentityname());
                IBZProStorySearchContext ibzProStorySearchContext = new IBZProStorySearchContext();
                ibzProStorySearchContext.setN_product_eq(et.getProduct());
                ibzProStorySearchContext.setN_sourcenote_eq(psDataEntity.getCodename());
                List<IBZProStory> ibzProStories = iibzProStoryService.searchDefault(ibzProStorySearchContext).getContent();
                if (ibzProStories.size() > 0) {
                    ibzProStory.setId(ibzProStories.get(0).getId());
                    Integer version = ibzProStories.get(0).getVersion();
                    String targetFilePath = targetDirPath.replaceAll("\\\\", "/");
                    if (!targetFilePath.isEmpty() && !targetFilePath.endsWith("/")) {
                        targetFilePath += "/";
                    }
                    FileSearchContext fileSearchContext = new FileSearchContext();
                    fileSearchContext.setN_objectid_eq(Long.parseLong(String.valueOf(ibzProStory.getId())));
                    fileSearchContext.setN_extra_eq(String.valueOf(version));
                    fileSearchContext.setN_title_like(dataModel.getString("itemname") + "_" + updatedateLong);
                    if (fileService.searchDefault(fileSearchContext).getContent().size() == 0) {
                        for (String str : EXTS) {
                            String tmpTargetFilePath = targetFilePath + dataModel.getString("itemname") + File.separator + dataModel.getString("itemname") + "_" + updatedateLong + "." + str;
                            File file = new File(tmpTargetFilePath);
                            if (file.exists()) {
                                JSONObject params = new JSONObject();
                                params.put("objecttype", "story");
                                params.put("objectid", ibzProStory.getId());
                                params.put("version", version + 1);
                                ZTFileItem ztFileItem = iibzztFileService.saveFile(file, params);
                                if ("html".equals(str)) {
                                    BufferedReader reader = null;
                                    StringBuffer sbf = new StringBuffer();
                                    try {
                                        reader = new BufferedReader(new FileReader(file));
                                        String tempStr;
                                        while ((tempStr = reader.readLine()) != null) {
                                            sbf.append(tempStr);
                                        }
                                        reader.close();

                                    } catch (IOException e) {
                                        e.printStackTrace();
                                    } finally {
                                        if (reader != null) {
                                            try {
                                                reader.close();
                                            } catch (IOException e1) {
                                                e1.printStackTrace();
                                            }
                                        }
                                    }
                                    ibzProStory.setSpec(sbf.toString());
                                }
                            }

                        }
                    } else {
                        String tmpTargetFilePath = targetFilePath + dataModel.getString("itemname") + "_" + updatedateLong + "." + "html";
                        File file = new File(tmpTargetFilePath);
                        BufferedReader reader = null;
                        StringBuffer sbf = new StringBuffer();
                        try {
                            reader = new BufferedReader(new FileReader(file));
                            String tempStr;
                            while ((tempStr = reader.readLine()) != null) {
                                sbf.append(tempStr);
                            }
                            reader.close();

                        } catch (IOException e) {
                            e.printStackTrace();
                        } finally {
                            if (reader != null) {
                                try {
                                    reader.close();
                                } catch (IOException e1) {
                                    e1.printStackTrace();
                                }
                            }
                        }
                        ibzProStory.setSpec(sbf.toString());
                    }
                    Story story = new Story();
                    CachedBeanCopier.copy(ibzProStory, story);
                    story.setNeednotreview("0");
                    cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.StoryHelper.class).change(story);
                } else {
                    ibzProStoryList.add(ibzProStory);
                }
            }
            if (ibzProStoryList.size() > 0) {
                List<Story> list = new ArrayList<>();
                CachedBeanCopier.copy(ibzProStoryList, list);
                boolean flag = cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.StoryHelper.class).batchCreate(list);
                if (flag) {
                    log.error("需求细分操作成功");
                } else {
                    log.error("需求细分失败");
                }


                for (IBZProStory ibzProStory : ibzProStoryList) {
                    if (ibzProStory.getId() == null) {
                        IBZProStorySearchContext ibzProStorySearchContext = new IBZProStorySearchContext();
                        ibzProStorySearchContext.setN_product_eq(et.getProduct());
                        ibzProStorySearchContext.setN_title_like(ibzProStory.getTitle());

                        List<IBZProStory> ibzProStories = iibzProStoryService.searchDefault(ibzProStorySearchContext).getContent();
                        if (ibzProStories.size() > 0) {
                            ibzProStory.setId(ibzProStories.get(0).getId());
                            ibzProStory.setSpec(ibzProStory.get("Spec11").toString());
                            ibzProStory.setVerify("");

                            Story story = new Story();
                            CachedBeanCopier.copy(ibzProStory, story);
                            story.setNeednotreview("0");
                            cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.StoryHelper.class).change(story);

                        }
                    }
                }
                iibzProStoryService.updateBatch(ibzProStoryList);
            }
        }
        return et;
    }


    /**
     * 自定义行为[AssignTo]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    @SendMessage
    public Story assignTo(Story et) {
        return super.assignTo(et);
    }

    /**
     * 自定义行为[BatchAssignTo]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchAssignTo(Story et) {
        return super.batchAssignTo(et);
    }

    /**
     * 自定义行为[BatchChangeBranch]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeBranch(Story et) {
        return super.batchChangeBranch(et);
    }

    /**
     * 自定义行为[BatchChangeModule]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeModule(Story et) {
        return super.batchChangeModule(et);
    }

    /**
     * 自定义行为[BatchChangePlan]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangePlan(Story et) {
        return super.batchChangePlan(et);
    }

    /**
     * 自定义行为[BatchChangeStage]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchChangeStage(Story et) {
        return super.batchChangeStage(et);
    }

    /**
     * 自定义行为[BatchClose]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchClose(Story et) {
        return super.batchClose(et);
    }

    /**
     * 自定义行为[BatchReview]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story batchReview(Story et) {
        return super.batchReview(et);
    }

    /**
     * 自定义行为[Close]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    @SendMessage
    public Story close(Story et) {
        return super.close(et);
    }

    /**
     * 自定义行为[GetStorySpec]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Story getStorySpec(Story et) {
        StorySpecSearchContext context = new StorySpecSearchContext();
        context.setN_story_eq(et.getId());
        context.setN_version_eq(et.getVersion());
        context.setSort("version,desc");
        List<StorySpec> list = storyspecService.searchDefault(context).getContent();
        if (!list.isEmpty() && list.size() > 0) {
            StorySpec storySpec = storyspecService.searchDefault(context).getContent().get(0);
            et.setSpec(storySpec.getSpec());
            et.setVerify(storySpec.getVerify());
            et.setTitle(storySpec.getTitle());
        }
        return et;
    }

    /**
     * 自定义行为[Review]用户扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    @SendMessage
    public Story review(Story et) {
        return super.review(et);
    }

    /**
     * 预置行为[get]用户扩展
     *
     * @param key
     * @return
     */
    @Override
    @Transactional
    public Story get(Long key) {
        Story et = super.get(key);
        this.getStorySpec(et);
        return et;
    }

    /**
     * 查询集合 任务相关需求
     */
    @Override
    public Page<Story> searchTaskRelatedStory(StorySearchContext context) {
        context.getSelectCond().clear();
        context.setQuery(context.getQuery());
        if (context.getN_module_eq() != null && !String.valueOf(context.getN_module_eq()).equals(0)) {
            context.setN_module_eq(context.getN_module_eq());
        }

        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages = baseMapper.searchTaskRelatedStory(context.getPages(), context, context.getSelectCond());
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    @Override
    @Transactional
    @SendMessage
    public boolean update(Story et) {
        return super.update(et);
    }

    @Override
    @Transactional
    @SendMessage
    public Story activate(Story et) {
        return super.activate(et);
    }

    /**
     * 查询集合 通过模块查询
     */
    @Override
    public Page<Story> searchByModule(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages = baseMapper.searchByModule(context.getPages(), context, context.getSelectCond());
        for (Story story : pages.getRecords()) {
            if (story.getParent() == 0) {
                continue;
            }
            StorySearchContext storySearchContext = new StorySearchContext();
            storySearchContext.setSelectCond(context.getSelectCond().clone());
            storySearchContext.setN_parent_eq(story.getId());
            story.set("items", this.searchDefault(storySearchContext).getContent());
        }
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 数据查询
     */
    @Override
    public Page<Story> searchParentDefault(StorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Story> pages = baseMapper.searchParentDefault(context.getPages(), context, context.getSelectCond());
        for (Story story : pages.getRecords()) {
            if (story.getParent() == 0) {
                continue;
            }
            StorySearchContext storySearchContext = new StorySearchContext();
            storySearchContext.setSelectCond(context.getSelectCond().clone());
            storySearchContext.setN_parent_eq(story.getId());
            story.set("items", this.searchDefault(storySearchContext).getContent());
        }
        return new PageImpl<Story>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    @Override
    @Transactional
    public Story createTasks(Story et) {
        //传入的只有需求的id
        List<Story> storyList = this.list(new QueryWrapper<Story>().eq("id", et.getId()));
        Story story = storyList.get(0);
        Task task = new Task();
        task.setName(story.getTitle());
        task.setModule(story.getModule());
        task.setStory(et.getId());
        task.setStoryversion(story.getVersion());
        task.setType(StaticDict.Task__type.DEVEL.getValue());
        task.setPri(story.getPri());
        task.setStatus(StaticDict.Task__status.WAIT.getValue());
        task.setTaskspecies(StaticDict.TaskSpecies.TEMP.getValue());
        //获取需求描述
        List<StorySpec> storySpecList = storySpecService.list(new QueryWrapper<StorySpec>().eq("story", et.getId()));
        String spec = storySpecList.get(0).getSpec();
        task.setDesc(spec);
        task.setAssignedto(story.getAssignedto());
        //根据需求的product找到对应的project
        List<ProjectProduct> projectProductList = projectProductService.list(new QueryWrapper<ProjectProduct>().eq("product", story.getProduct()));
        //此处暂取第一组project的值 后期调整（pmsee中product和project一对一 不存在一对多的问题）
        ProjectProduct projectProduct = projectProductList.get(0);
        task.setProject(projectProduct.getProject());
        taskService.create(task);
        return et;
    }
}

