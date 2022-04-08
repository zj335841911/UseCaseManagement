package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.domain.DocLibModule;
import cn.ibizlab.pms.core.util.ibizzentao.helper.DocHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.DocLibHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.DocLibModuleHelper;
import cn.ibizlab.pms.core.zentao.domain.DocContent;
import cn.ibizlab.pms.core.zentao.domain.DocLib;
import cn.ibizlab.pms.core.zentao.filter.DocSearchContext;
import cn.ibizlab.pms.core.zentao.mapper.DocMapper;
import cn.ibizlab.pms.core.zentao.service.IDocContentService;
import cn.ibizlab.pms.core.zentao.service.impl.DocServiceImpl;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Doc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * @author huwei
 * 实体[文档] 自定义服务对象
 */
@Slf4j
@Primary
@Service("DocExService")
public class DocExService extends DocServiceImpl {

    @Autowired
    IDocContentService docContentService;

    @Autowired
    DocHelper docHelper;

    @Autowired
    DocLibModuleHelper docLibModuleHelper;

    @Autowired
    DocLibHelper docLibHelper;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[ByVersionUpdateContext]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public Doc byVersionUpdateContext(Doc et) {
        List<DocContent> list = docContentService.list(new QueryWrapper<DocContent>().eq("doc", et.getId()).eq("version", et.getVersion()));
        if(list.size() > 0) {
            DocContent docContent = list.get(0);
            et.setContent(docContent.getContent());
            et.setTitle(docContent.getTitle());
        }
        return super.byVersionUpdateContext(et);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Doc get(Long key) {
        Doc et = super.get(key);
        if(et==null){
            et=new Doc();
            et.setId(key);
        }
        else{
            byVersionUpdateContext(et);
        }
        return et;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Doc collect(Doc et) {
        if (StaticDict.DOCQTYPE.DOC.getValue().equals(et.getDocqtype())) {
            String collector = docHelper.get(et.getId()).getCollector();
            if ("".equals(collector) || "/".equals(collector)) {
                collector += ",";
            }
            collector += AuthenticationUser.getAuthenticationUser().getUsername() + ",";
            et.setCollector(collector);
            docHelper.updateById(et);
        }
        else if (StaticDict.DOCQTYPE.MODULE.getValue().equals(et.getDocqtype())) {
            String collector = docLibModuleHelper.get(et.getId()).getCollector();
            if ("".equals(collector) || "/".equals(collector)) {
                collector += ",";
            }
            collector += AuthenticationUser.getAuthenticationUser().getUsername() + ",";
            DocLibModule docLibModule = new DocLibModule();
            docLibModule.setId(et.getId());
            docLibModule.setCollector(collector);
            docLibModuleHelper.updateById(docLibModule);
        }
        else if (StaticDict.DOCQTYPE.DOCLIB.getValue().equals(et.getDocqtype())) {
            String collector = docLibHelper.get(et.getId()).getCollector();
            if ("".equals(collector) || "/".equals(collector)) {
                collector += ",";
            }
            collector += AuthenticationUser.getAuthenticationUser().getUsername() + ",";
            DocLib docLib = new DocLib();
            docLib.setId(et.getId());
            docLib.setCollector(collector);
            docLibHelper.updateById(docLib);
        }

        return super.collect(et);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Doc unCollect(Doc et) {
        if (StaticDict.DOCQTYPE.DOC.getValue().equals(et.getDocqtype())) {
            String collector = docHelper.get(et.getId()).getCollector();
            collector = collector.replaceFirst(AuthenticationUser.getAuthenticationUser().getUsername() + ",", "");
            if (",".equals(collector)) {
                collector = "";
            }
            et.setCollector(collector);
            docHelper.updateById(et);
        }
        else if (StaticDict.DOCQTYPE.MODULE.getValue().equals(et.getDocqtype())) {
            String collector = docLibModuleHelper.get(et.getId()).getCollector();
            collector = collector.replaceFirst(AuthenticationUser.getAuthenticationUser().getUsername() + ",", "");
            if (",".equals(collector)) {
                collector = "";
            }
            DocLibModule docLibModule = new DocLibModule();
            docLibModule.setId(et.getId());
            docLibModule.setCollector(collector);
            docLibModuleHelper.updateById(docLibModule);
        }
        else if (StaticDict.DOCQTYPE.DOCLIB.getValue().equals(et.getDocqtype())) {
            String collector = docLibHelper.get(et.getId()).getCollector();
            collector = collector.replaceFirst(AuthenticationUser.getAuthenticationUser().getUsername() + ",", "");
            if (",".equals(collector)) {
                collector = "";
            }
            DocLib docLib = new DocLib();
            docLib.setId(et.getId());
            docLib.setCollector(collector);
            docLibHelper.updateById(docLib);
        }

        return super.unCollect(et);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Doc onlyCollectDoc(Doc et) {
        String collector = docHelper.get(et.getId()).getCollector();
        if ("".equals(collector) || "/".equals(collector)) {
            collector += ",";
        }
        collector += AuthenticationUser.getAuthenticationUser().getUsername() + ",";
        et.setCollector(collector);
        docHelper.updateById(et);
        return super.onlyCollectDoc(et);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Doc onlyUnCollectDoc(Doc et) {
        String collector = docHelper.get(et.getId()).getCollector();
        collector = collector.replaceFirst(AuthenticationUser.getAuthenticationUser().getUsername() + ",", "");
        if (",".equals(collector)) {
            collector = "";
        }
        et.setCollector(collector);
        docHelper.updateById(et);
        return super.onlyUnCollectDoc(et);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Doc getDocStatus(Doc et) {
        DocSearchContext docSearchContext = new DocSearchContext();

        return this.searchDocStatus(docSearchContext).getContent().get(0);
    }
}

