package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.service.impl.ProductModuleServiceImpl;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct;
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStoryModule;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProStoryModuleSearchContext;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProProductService;
import cn.ibizlab.pms.core.ibizpro.service.IIBZProStoryModuleService;
//import cn.ibizlab.pms.util.ibizsysmodel.domain.PSModule;
//import cn.ibizlab.pms.util.ibizsysmodel.filter.PSModuleSearchContext;
//import cn.ibizlab.pms.util.ibizsysmodel.service.IPSModuleService;
import cn.ibizlab.pms.core.util.ibizzentao.helper.ModuleHelper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.ProductModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[需求模块] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ProductModuleExService")
public class ProductModuleExService extends ProductModuleServiceImpl {

//    @Autowired
//    IPSModuleService ipsModuleService;

    @Autowired
    IIBZProProductService iibzProProductService;

    @Autowired
    IIBZProStoryModuleService iIBZProStoryModuleService;

    @Autowired
    ModuleHelper moduleHelper;


    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    @Override
    public boolean remove(Long key) {
        return moduleHelper.delete(key);
    }

    /**
     * 自定义行为[SyncFromIBIZ]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProductModule syncFromIBIZ(ProductModule et) {
//        IBZProProduct ibzProProduct =  iibzProProductService.get(Long.parseLong(String.valueOf(et.getRoot())));
//        Page<PSModule> psModules = ipsModuleService.searchDefault(ibzProProduct.getIbizid(),new PSModuleSearchContext());
//        List<IBZProStoryModule> createList = new ArrayList<>();
//        List<IBZProStoryModule> updateList = new ArrayList<>();
//        for(PSModule psModule : psModules) {
//            IBZProStoryModuleSearchContext ibzProStoryModuleSearchContext = new IBZProStoryModuleSearchContext();
//            ibzProStoryModuleSearchContext.setN_ibiz_id_eq(psModule.getPsmoduleid());
//            Page<IBZProStoryModule>  ibzProStoryModules = iIBZProStoryModuleService.searchDefault(ibzProStoryModuleSearchContext);
//            IBZProStoryModule ibzProStoryModule = new IBZProStoryModule();
//            ibzProStoryModule.setName(psModule.getPsmodulename());
//            ibzProStoryModule.setIbizshort(psModule.getPsmodulename());
//            ibzProStoryModule.setDeleted("0");
//            ibzProStoryModule.setIbizid(psModule.getPsmoduleid());
//            if(ibzProStoryModules.getContent().size() > 0) {
//                ibzProStoryModule.setId(ibzProStoryModules.getContent().get(0).getId());
//                iIBZProStoryModuleService.update(ibzProStoryModule);
//            }else {
//                ibzProStoryModule.setRoot(Long.parseLong(String.valueOf(et.getRoot())));
//                ibzProStoryModule.setType("story");
//                ibzProStoryModule.setOwner("");
//                ibzProStoryModule.setCollector("/");
//                ibzProStoryModule.setIbizStorytype("iBizSysModule");
//                iIBZProStoryModuleService.create(ibzProStoryModule);
//            }
//        }
        return super.syncFromIBIZ(et);
    }


}

