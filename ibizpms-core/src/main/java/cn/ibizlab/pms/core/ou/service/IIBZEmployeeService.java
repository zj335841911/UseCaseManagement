package cn.ibizlab.pms.core.ou.service;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.pms.core.ou.domain.IBZEmployee;
import cn.ibizlab.pms.core.ou.filter.IBZEmployeeSearchContext;


/**
 * 实体[IBZEmployee] 服务对象接口
 */
public interface IIBZEmployeeService{

    boolean create(IBZEmployee et) ;
    void createBatch(List<IBZEmployee> list) ;
    boolean update(IBZEmployee et) ;
    void updateBatch(List<IBZEmployee> list) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    IBZEmployee get(String key) ;
    IBZEmployee getDraft(IBZEmployee et) ;
    boolean checkKey(IBZEmployee et) ;
    boolean save(IBZEmployee et) ;
    void saveBatch(List<IBZEmployee> list) ;
    Page<IBZEmployee> searchDefault(IBZEmployeeSearchContext context) ;


}



