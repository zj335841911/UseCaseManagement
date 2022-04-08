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

import cn.ibizlab.pms.core.ibiz.domain.DynaDashboard;
import cn.ibizlab.pms.core.ibiz.filter.DynaDashboardSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[DynaDashboard] 服务对象接口
 */
public interface IDynaDashboardService extends IService<DynaDashboard> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "动态数据看板";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "dynadashboards";

    boolean create(DynaDashboard et);
    void createBatch(List<DynaDashboard> list);
    boolean update(DynaDashboard et);
    void updateBatch(List<DynaDashboard> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    DynaDashboard get(String key);
    DynaDashboard getDraft(DynaDashboard et);
    boolean checkKey(DynaDashboard et);
    boolean save(DynaDashboard et);
    void saveBatch(List<DynaDashboard> list);
    Page<DynaDashboard> searchDefault(DynaDashboardSearchContext context);
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

    List<DynaDashboard> getDynadashboardByIds(List<String> ids);
    List<DynaDashboard> getDynadashboardByEntities(List<DynaDashboard> entities);
}


