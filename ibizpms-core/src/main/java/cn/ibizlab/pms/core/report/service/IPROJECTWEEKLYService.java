package cn.ibizlab.pms.core.report.service;

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

import cn.ibizlab.pms.core.report.domain.PROJECTWEEKLY;
import cn.ibizlab.pms.core.report.filter.PROJECTWEEKLYSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[PROJECTWEEKLY] 服务对象接口
 */
public interface IPROJECTWEEKLYService extends IService<PROJECTWEEKLY> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "项目周报";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "projectweeklies";

    boolean create(PROJECTWEEKLY et);
    void createBatch(List<PROJECTWEEKLY> list);
    boolean update(PROJECTWEEKLY et);
    void updateBatch(List<PROJECTWEEKLY> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    PROJECTWEEKLY get(String key);
    PROJECTWEEKLY getDraft(PROJECTWEEKLY et);
    boolean checkKey(PROJECTWEEKLY et);
    boolean save(PROJECTWEEKLY et);
    void saveBatch(List<PROJECTWEEKLY> list);
    Page<PROJECTWEEKLY> searchDefault(PROJECTWEEKLYSearchContext context);
    List<PROJECTWEEKLY> selectByProject(Long id);
    void removeByProject(Long id);
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

    List<PROJECTWEEKLY> getProjectweeklyByIds(List<String> ids);
    List<PROJECTWEEKLY> getProjectweeklyByEntities(List<PROJECTWEEKLY> entities);
}


