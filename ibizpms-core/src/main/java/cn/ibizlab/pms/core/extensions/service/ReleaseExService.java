package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysRunSession;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSSysRunSessionService;
import cn.ibizlab.pms.core.zentao.domain.Build;
import cn.ibizlab.pms.core.zentao.service.IBuildService;
import cn.ibizlab.pms.core.zentao.service.IFileService;
import cn.ibizlab.pms.core.zentao.service.impl.ReleaseServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Release;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[发布] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ReleaseExService")
public class ReleaseExService extends ReleaseServiceImpl {

    @Autowired
    IPSSysRunSessionService psSysRunSessionService;

    @Autowired
    IIBZProProductService iibzProProductService;

    @Autowired
    private IFileService fileService;


    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }


    /**
     * 自定义行为[Activate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release activate(Release et) {
        return super.activate(et);
    }
    /**
     * 自定义行为[BatchUnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release batchUnlinkBug(Release et) {
        return super.batchUnlinkBug(et);
    }
    /**
     * 自定义行为[ChangeStatus]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release changeStatus(Release et) {
        return super.changeStatus(et);
    }
    /**
     * 自定义行为[LinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release linkBug(Release et) {
        return super.linkBug(et);
    }
    /**
     * 自定义行为[LinkBugbyBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release linkBugbyBug(Release et) {
        return super.linkBugbyBug(et);
    }
    /**
     * 自定义行为[LinkBugbyLeftBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release linkBugbyLeftBug(Release et) {
        return super.linkBugbyLeftBug(et);
    }
    /**
     * 自定义行为[LinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release linkStory(Release et) {
        return super.linkStory(et);
    }
    /**
     * 自定义行为[OneClickRelease]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release oneClickRelease(Release et) {

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
        IBZProProduct ibzProProduct = iibzProProductService.get(et.getProduct());
        runSession.setMemo("正式版本[#"+ et.getId() +"] " + et.getName());
        psSysRunSessionService.create(ibzProProduct.getIbizid(), runSession);
        return super.oneClickRelease(et);
    }
    /**
     * 自定义行为[Terminate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release terminate(Release et) {
        return super.terminate(et);
    }
    /**
     * 自定义行为[UnlinkBug]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Release unlinkBug(Release et) {
        return super.unlinkBug(et);
    }
}

