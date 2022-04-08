package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysApp;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysSFPub;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSystemDBCfg;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSysAppSearchContext;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSysSFPubSearchContext;
import cn.ibizlab.pms.core.ibizsysmodel.service.impl.PSSysSFPubServiceImpl;
import cn.ibizlab.pms.core.zentao.service.IBuildService;
import cn.ibizlab.pms.core.zentao.service.IReleaseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Slf4j
@Primary
@Service("PSSysSFPubExService")
public class PSSysSFPubExService extends PSSysSFPubServiceImpl {
    @Autowired
    IIBZProProductService iibzProProductService;

    @Autowired
    IReleaseService iReleaseService;

    @Autowired
    IBuildService iBuildService;

    /**
     * 查询集合 数据集
     */
    @Override
    public Page<PSSysSFPub> searchDefault(PSSysSFPubSearchContext context) {


        Long product = iReleaseService.get(Long.parseLong(context.getParams().get("id").toString())).getProduct();

        Page<PSSysSFPub> psSysSFPubs=getPSSysSFPubFeignClient(iibzProProductService.get(product).getIbizid()).searchDefault(context);
        return psSysSFPubs;
    }

    /**
     * 查询集合 版本
     */
    @Override
    public Page<PSSysSFPub> searchBuild(PSSysSFPubSearchContext context) {
        Long product = iBuildService.get(Long.parseLong(context.getParams().get("id").toString())).getProduct();

        Page<PSSysSFPub> pSSysSFPubs=getPSSysSFPubFeignClient(iibzProProductService.get(product).getIbizid()).searchDefault(context);
        return pSSysSFPubs;
    }
}
