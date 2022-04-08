package cn.ibizlab.pms.core.ibizpro.service;

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
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.pms.core.ibizpro.domain.IBZProProduct;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProProductSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IBZProProduct] 服务对象接口
 */
public interface IIBZProProductService extends IService<IBZProProduct> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "平台产品";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibzproproducts";

    boolean create(IBZProProduct et);
    void createBatch(List<IBZProProduct> list);
    boolean update(IBZProProduct et);
    void updateBatch(List<IBZProProduct> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IBZProProduct get(Long key);
    IBZProProduct getDraft(IBZProProduct et);
    boolean checkKey(IBZProProduct et);
    boolean save(IBZProProduct et);
    void saveBatch(List<IBZProProduct> list);
    Page<IBZProProduct> searchDefault(IBZProProductSearchContext context);
    /**
     *自定义查询SQL
     * @param sql  select * from table where id =#{et.param}
     * @param param 参数列表  param.put("param","1");
     * @return select * from table where id = '1'
     */
    List<JSONObject> select(String sql, Map param);
    /**
     *自定义SQL
     * @param sql  update table  set name ='test' where id =#{et.param}
     * @param param 参数列表  param.put("param","1");
     * @return     update table  set name ='test' where id = '1'
     */
    boolean execute(String sql, Map param);

}


