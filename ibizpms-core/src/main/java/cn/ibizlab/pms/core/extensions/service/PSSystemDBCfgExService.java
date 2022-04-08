package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysApp;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSystemDBCfg;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSysAppSearchContext;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSystemDBCfgSearchContext;
import cn.ibizlab.pms.core.ibizsysmodel.service.impl.PSSystemDBCfgServiceImpl;
import cn.ibizlab.pms.core.zentao.service.IBuildService;
import cn.ibizlab.pms.core.zentao.service.IReleaseService;
import liquibase.pro.packaged.A;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Slf4j
@Primary
@Service("PSSystemDBCfgExService")
public class PSSystemDBCfgExService extends PSSystemDBCfgServiceImpl {
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
    public Page<PSSystemDBCfg> searchDefault(PSSystemDBCfgSearchContext context) {


        Long product = iReleaseService.get(Long.parseLong(context.getParams().get("id").toString())).getProduct();

        Page<PSSystemDBCfg> psSystemDBCfgs=getPSSystemDBCfgFeignClient(iibzProProductService.get(product).getIbizid()).searchDefault(context);
        return psSystemDBCfgs;
    }

    /**
     * 查询集合 版本
     */
    @Override
    public Page<PSSystemDBCfg> searchBuild(PSSystemDBCfgSearchContext context) {
        Long product = iBuildService.get(Long.parseLong(context.getParams().get("id").toString())).getProduct();

        Page<PSSystemDBCfg> psSystemDBCfgs=getPSSystemDBCfgFeignClient(iibzProProductService.get(product).getIbizid()).searchDefault(context);
        return psSystemDBCfgs;
    }
}
