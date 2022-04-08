package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysRunSession;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSSysRunSessionService;
import cn.ibizlab.pms.core.zentao.domain.Release;
import cn.ibizlab.pms.core.zentao.service.impl.BuildServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Build;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import cn.ibizlab.pms.core.zentao.filter.BuildSearchContext;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import java.util.*;

/**
 * 实体[版本] 自定义服务对象
 */
@Slf4j
@Primary
@Service("BuildExService")
public class BuildExService extends BuildServiceImpl {

    @Autowired
    IPSSysRunSessionService psSysRunSessionService;

    @Autowired
    IIBZProProductService iibzProProductService;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[OneClickRelease]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Build oneClickRelease(Build et) {

        PSSysRunSession runSession = new PSSysRunSession();
        // 后台服务体系标识
        runSession.setPssyssfpubid(et.getBackgroundid());
        // 数据标识
        runSession.setPssystemdbcfgid(et.getSqlid());
        // 发布类型
        runSession.setRunmode(et.getReleasetype());
        // 前端应用标识
        runSession.setPssysappid(et.getFrontapplication());

        runSession.setRebuildmode(et.getRebuild());
        et = this.get(et.getId());
        //  Build build = iBuildService.get(et.getBuild());
        IBZProProduct ibzProProduct = iibzProProductService.get(et.getProduct());
        // 已完成需求
//        Map param =new HashMap();
//        param.put("build",et.getBuild());
//        String storys = "select t1.id,t1.title from zt_story t1 where t1.deleted = '0' and FIND_IN_SET ( t1.ID, (SELECT STORIES FROM ZT_BUILD WHERE ID = #{et.build}))";
//        List<JSONObject> jsonObjectList = this.select(storys,param);
//        StringBuilder stringBuilder = new StringBuilder();
//        stringBuilder.append("完成需求\r\n");
//        for(JSONObject jsonObject : jsonObjectList) {
//            stringBuilder.append("[STORY #" + jsonObject.get("id") + "] " + jsonObject.get("title") + "\r\n");
//        }
//        // 解决Bug
//        String bugs = "select t1.id,t1.title from zt_bug t1 where t1.deleted = '0' and FIND_IN_SET ( t1.ID, (SELECT bugs FROM ZT_BUILD WHERE ID = #{et.build}))";
//        List<JSONObject> jsonObjectListbug = this.select(bugs,param);
//        stringBuilder.append("已修复BUG");
//        for(JSONObject jsonObject : jsonObjectListbug) {
//            stringBuilder.append("[BUG #" + jsonObject.get("id") + "] " + jsonObject.get("title") + "\r\n");
//        }
        // 生成Bug

//        runSession.setMemo(stringBuilder.toString());
        runSession.setMemo("测试版本[#"+ et.getId() +"] " + et.getName());
        psSysRunSessionService.create(ibzProProduct.getIbizid(), runSession);
        return super.oneClickRelease(et);
    }

    /**
     * 自定义行为[LinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Build linkStory(Build et) {
        return super.linkStory(et);
    }

    /**
     * 查询集合 Bug产品版本
     */
    @Override
    public Page<Build> searchBugProductBuild(BuildSearchContext context) {
        context.getSelectCond().clear();
        context.setQuery(context.getQuery());
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Build> pages=baseMapper.searchBugProductBuild(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Build>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
}

