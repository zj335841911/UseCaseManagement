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

import cn.ibizlab.pms.core.zentao.domain.Todo;
import cn.ibizlab.pms.core.zentao.filter.TodoSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Todo] 服务对象接口
 */
public interface ITodoService extends IService<Todo> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "待办";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "todos";

    boolean create(Todo et);
    void createBatch(List<Todo> list);
    boolean update(Todo et);
    void updateBatch(List<Todo> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    Todo get(Long key);
    Todo getDraft(Todo et);
    Todo activate(Todo et);
    boolean activateBatch(List<Todo> etList);
    Todo assignTo(Todo et);
    boolean assignToBatch(List<Todo> etList);
    boolean checkKey(Todo et);
    Todo close(Todo et);
    boolean closeBatch(List<Todo> etList);
    Todo createCycle(Todo et);
    boolean createCycleBatch(List<Todo> etList);
    Todo finish(Todo et);
    boolean finishBatch(List<Todo> etList);
    boolean save(Todo et);
    void saveBatch(List<Todo> list);
    Todo sendMessage(Todo et);
    boolean sendMessageBatch(List<Todo> etList);
    Todo sendMsgPreProcess(Todo et);
    boolean sendMsgPreProcessBatch(List<Todo> etList);
    Page<Todo> searchDefault(TodoSearchContext context);
    Page<Todo> searchMyTodo(TodoSearchContext context);
    Page<Todo> searchMyTodoPc(TodoSearchContext context);
    Page<Todo> searchMyUpcoming(TodoSearchContext context);
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


