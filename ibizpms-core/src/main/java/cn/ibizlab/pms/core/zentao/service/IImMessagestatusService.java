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

import cn.ibizlab.pms.core.zentao.domain.ImMessagestatus;
import cn.ibizlab.pms.core.zentao.filter.ImMessagestatusSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[ImMessagestatus] 服务对象接口
 */
public interface IImMessagestatusService extends IService<ImMessagestatus> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "ImMessagestatus";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "immessagestatuses";

    boolean create(ImMessagestatus et);
    void createBatch(List<ImMessagestatus> list);
    boolean update(ImMessagestatus et);
    void updateBatch(List<ImMessagestatus> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    ImMessagestatus get(String key);
    ImMessagestatus getDraft(ImMessagestatus et);
    boolean checkKey(ImMessagestatus et);
    boolean save(ImMessagestatus et);
    void saveBatch(List<ImMessagestatus> list);
    Page<ImMessagestatus> searchDefault(ImMessagestatusSearchContext context);
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


