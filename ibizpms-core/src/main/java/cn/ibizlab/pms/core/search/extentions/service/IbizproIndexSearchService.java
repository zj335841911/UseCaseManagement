package cn.ibizlab.pms.core.search.extentions.service;

import cn.ibizlab.pms.core.ibizpro.domain.IbizproIndex;
import org.springframework.data.domain.Page;

public interface IbizproIndexSearchService {
    String INDEX ="ibizproindex";
    String TYPE ="_doc";
    Page<IbizproIndex> search(String hitKey, int page, int size);
}