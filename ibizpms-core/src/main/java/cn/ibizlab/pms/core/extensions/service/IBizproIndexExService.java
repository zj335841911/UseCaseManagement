package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.domain.IbizproIndex;
import cn.ibizlab.pms.core.ibizpro.filter.IbizproIndexSearchContext;
import cn.ibizlab.pms.core.ibizpro.service.impl.IbizproIndexServiceImpl;
import cn.ibizlab.pms.core.search.extentions.service.IbizproIndexSearchService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Slf4j
@Primary
@Service("IBizproIndexExService")
@ConditionalOnBean(IbizproIndexSearchService.class)
public class IBizproIndexExService extends IbizproIndexServiceImpl {
    @Autowired
    IbizproIndexSearchService ibizproIndexSearchService;

    @Override
    public Page<IbizproIndex> searchESquery(IbizproIndexSearchContext context) {
        String hitkey= context.query;

        Page<IbizproIndex> page = ibizproIndexSearchService.search(hitkey,context.getPage(),context.getSize());
        return page;
    }

}
