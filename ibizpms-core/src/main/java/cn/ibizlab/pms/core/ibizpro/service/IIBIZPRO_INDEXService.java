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

import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import cn.ibizlab.pms.core.ibizpro.filter.IBIZPRO_INDEXSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IBIZPRO_INDEX] 服务对象接口
 */
public interface IIBIZPRO_INDEXService extends IService<IBIZPRO_INDEX> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "索引检索";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibizpro_indices";

    boolean create(IBIZPRO_INDEX et);
    void createBatch(List<IBIZPRO_INDEX> list);
    boolean update(IBIZPRO_INDEX et);
    void updateBatch(List<IBIZPRO_INDEX> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IBIZPRO_INDEX get(Long key);
    IBIZPRO_INDEX getDraft(IBIZPRO_INDEX et);
    boolean checkKey(IBIZPRO_INDEX et);
    boolean save(IBIZPRO_INDEX et);
    void saveBatch(List<IBIZPRO_INDEX> list);
    Page<IBIZPRO_INDEX> searchDefault(IBIZPRO_INDEXSearchContext context);
    Page<IBIZPRO_INDEX> searchIndexDER(IBIZPRO_INDEXSearchContext context);
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

    List<IBIZPRO_INDEX> getIbizproIndexByIds(List<Long> ids);
    List<IBIZPRO_INDEX> getIbizproIndexByEntities(List<IBIZPRO_INDEX> entities);
}


