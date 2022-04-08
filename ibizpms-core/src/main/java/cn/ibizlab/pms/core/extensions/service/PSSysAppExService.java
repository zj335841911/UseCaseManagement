package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysApp;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSysAppSearchContext;
import cn.ibizlab.pms.core.ibizsysmodel.service.impl.PSSysAppServiceImpl;
import cn.ibizlab.pms.core.zentao.service.IBuildService;
import cn.ibizlab.pms.core.zentao.service.IReleaseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Slf4j
@Primary
@Service("PSSysAppExService")
public class PSSysAppExService extends PSSysAppServiceImpl {

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
    public Page<PSSysApp> searchDefault(PSSysAppSearchContext context) {


        Long product = iReleaseService.get(Long.parseLong(context.getParams().get("id").toString())).getProduct();

        Page<PSSysApp> pSSysApps=getPSSysAppFeignClient(iibzProProductService.get(product).getIbizid()).searchDefault(context);
        return pSSysApps;
    }

    /**
     * 查询集合 版本
     */
    @Override
    public Page<PSSysApp> searchBuild(PSSysAppSearchContext context) {
        Long product = iBuildService.get(Long.parseLong(context.getParams().get("id").toString())).getProduct();

        Page<PSSysApp> pSSysApps=getPSSysAppFeignClient(iibzProProductService.get(product).getIbizid()).searchDefault(context);
        return pSSysApps;
    }
}
