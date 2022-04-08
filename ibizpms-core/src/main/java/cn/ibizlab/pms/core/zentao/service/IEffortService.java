package cn.ibizlab.pms.core.zentao.service;

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

import cn.ibizlab.pms.core.zentao.domain.Effort;
import cn.ibizlab.pms.core.zentao.filter.EffortSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Effort] 服务对象接口
 */
public interface IEffortService extends IService<Effort> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "effort";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "efforts";

    boolean create(Effort et);
    void createBatch(List<Effort> list);
    boolean update(Effort et);
    void updateBatch(List<Effort> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    Effort get(Long key);
    Effort getDraft(Effort et);
    boolean checkKey(Effort et);
    boolean save(Effort et);
    void saveBatch(List<Effort> list);
    Page<Effort> searchDefault(EffortSearchContext context);
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


