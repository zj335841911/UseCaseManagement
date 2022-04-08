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

import cn.ibizlab.pms.core.ibizpro.domain.IbzproProjectUserTask;
import cn.ibizlab.pms.core.ibizpro.filter.IbzproProjectUserTaskSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IbzproProjectUserTask] 服务对象接口
 */
public interface IIbzproProjectUserTaskService extends IService<IbzproProjectUserTask> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "项目汇报用户任务";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibzproprojectusertasks";

    boolean create(IbzproProjectUserTask et);
    void createBatch(List<IbzproProjectUserTask> list);
    boolean update(IbzproProjectUserTask et);
    void updateBatch(List<IbzproProjectUserTask> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IbzproProjectUserTask get(Long key);
    IbzproProjectUserTask getDraft(IbzproProjectUserTask et);
    boolean checkKey(IbzproProjectUserTask et);
    boolean save(IbzproProjectUserTask et);
    void saveBatch(List<IbzproProjectUserTask> list);
    Page<IbzproProjectUserTask> searchDefault(IbzproProjectUserTaskSearchContext context);
    Page<IbzproProjectUserTask> searchProjectDailyTask(IbzproProjectUserTaskSearchContext context);
    Page<IbzproProjectUserTask> searchProjectMonthlyTask(IbzproProjectUserTaskSearchContext context);
    Page<IbzproProjectUserTask> searchProjectWeeklyTask(IbzproProjectUserTaskSearchContext context);
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


