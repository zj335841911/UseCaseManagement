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

import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_PRODUCTWEEKLY;
import cn.ibizlab.pms.core.ibizpro.filter.IBIZPRO_PRODUCTWEEKLYSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IBIZPRO_PRODUCTWEEKLY] 服务对象接口
 */
public interface IIBIZPRO_PRODUCTWEEKLYService extends IService<IBIZPRO_PRODUCTWEEKLY> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "产品周报";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibizpro_productweeklies";

    boolean create(IBIZPRO_PRODUCTWEEKLY et);
    void createBatch(List<IBIZPRO_PRODUCTWEEKLY> list);
    boolean update(IBIZPRO_PRODUCTWEEKLY et);
    void updateBatch(List<IBIZPRO_PRODUCTWEEKLY> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IBIZPRO_PRODUCTWEEKLY get(Long key);
    IBIZPRO_PRODUCTWEEKLY getDraft(IBIZPRO_PRODUCTWEEKLY et);
    boolean checkKey(IBIZPRO_PRODUCTWEEKLY et);
    IBIZPRO_PRODUCTWEEKLY sUMPRODUCTWEEKLY(IBIZPRO_PRODUCTWEEKLY et);
    boolean sUMPRODUCTWEEKLYBatch(List<IBIZPRO_PRODUCTWEEKLY> etList);
    boolean save(IBIZPRO_PRODUCTWEEKLY et);
    void saveBatch(List<IBIZPRO_PRODUCTWEEKLY> list);
    Page<IBIZPRO_PRODUCTWEEKLY> searchDefault(IBIZPRO_PRODUCTWEEKLYSearchContext context);
    List<IBIZPRO_PRODUCTWEEKLY> selectByProduct(Long id);
    void removeByProduct(Long id);
    /**
     * 自定义查询SQL
     * @param sql  select * from table where id =#{et.param}
     * @param param 参数列表  param.put("param", "1");
     * @return select * from table where id = '1'
     */
    List<JSONObject> select(String sql, Map param);
    /**
     * 自定义SQL
     * @param sql  update table  set name ='test' where id =#{et.param}
     * @param param 参数列表  param.put("param", "1");
     * @return     update table  set name ='test' where id = '1'
     */
    boolean execute(String sql, Map param);

    List<IBIZPRO_PRODUCTWEEKLY> getIbizproProductweeklyByIds(List<Long> ids);
    List<IBIZPRO_PRODUCTWEEKLY> getIbizproProductweeklyByEntities(List<IBIZPRO_PRODUCTWEEKLY> entities);
}


