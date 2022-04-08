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

import cn.ibizlab.pms.core.ibizpro.domain.IbizproProjectWeekly;
import cn.ibizlab.pms.core.ibizpro.filter.IbizproProjectWeeklySearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IbizproProjectWeekly] 服务对象接口
 */
public interface IIbizproProjectWeeklyService extends IService<IbizproProjectWeekly> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "项目周报";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibizproprojectweeklies";

    boolean create(IbizproProjectWeekly et);
    void createBatch(List<IbizproProjectWeekly> list);
    boolean update(IbizproProjectWeekly et);
    void updateBatch(List<IbizproProjectWeekly> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    IbizproProjectWeekly get(String key);
    IbizproProjectWeekly getDraft(IbizproProjectWeekly et);
    boolean checkKey(IbizproProjectWeekly et);
    IbizproProjectWeekly pushSumProjectWeekly(IbizproProjectWeekly et);
    boolean pushSumProjectWeeklyBatch(List<IbizproProjectWeekly> etList);
    boolean save(IbizproProjectWeekly et);
    void saveBatch(List<IbizproProjectWeekly> list);
    Page<IbizproProjectWeekly> searchDefault(IbizproProjectWeeklySearchContext context);
    List<IbizproProjectWeekly> selectByProject(Long id);
    void removeByProject(Long id);
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

    List<IbizproProjectWeekly> getIbizproprojectweeklyByIds(List<String> ids);
    List<IbizproProjectWeekly> getIbizproprojectweeklyByEntities(List<IbizproProjectWeekly> entities);
}


