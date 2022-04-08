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

import cn.ibizlab.pms.core.zentao.domain.WebHook;
import cn.ibizlab.pms.core.zentao.filter.WebHookSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[WebHook] 服务对象接口
 */
public interface IWebHookService extends IService<WebHook> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "网页钩子";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "webhooks";

    boolean create(WebHook et);
    void createBatch(List<WebHook> list);
    boolean update(WebHook et);
    void updateBatch(List<WebHook> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    WebHook get(Long key);
    WebHook getDraft(WebHook et);
    boolean checkKey(WebHook et);
    boolean save(WebHook et);
    void saveBatch(List<WebHook> list);
    Page<WebHook> searchDefault(WebHookSearchContext context);
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


