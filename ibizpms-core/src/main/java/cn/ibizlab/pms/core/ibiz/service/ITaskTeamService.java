package cn.ibizlab.pms.core.ibiz.service;

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

import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
import cn.ibizlab.pms.core.ibiz.filter.TaskTeamSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[TaskTeam] 服务对象接口
 */
public interface ITaskTeamService extends IService<TaskTeam> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "任务团队";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "taskteams";

    boolean create(TaskTeam et);
    void createBatch(List<TaskTeam> list);
    boolean update(TaskTeam et);
    void updateBatch(List<TaskTeam> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    TaskTeam get(Long key);
    TaskTeam getDraft(TaskTeam et);
    boolean checkKey(TaskTeam et);
    boolean save(TaskTeam et);
    void saveBatch(List<TaskTeam> list);
    Page<TaskTeam> searchDefault(TaskTeamSearchContext context);
    List<TaskTeam> selectByRoot(Long id);
    void removeByRoot(Long id);
    void saveByRoot(Long id, List<TaskTeam> list) ;
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


