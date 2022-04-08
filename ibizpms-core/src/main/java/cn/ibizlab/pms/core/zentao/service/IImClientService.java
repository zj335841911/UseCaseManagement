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

import cn.ibizlab.pms.core.zentao.domain.ImClient;
import cn.ibizlab.pms.core.zentao.filter.ImClientSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[ImClient] 服务对象接口
 */
public interface IImClientService extends IService<ImClient> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "ImClient";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "imclients";

    boolean create(ImClient et);
    void createBatch(List<ImClient> list);
    boolean update(ImClient et);
    void updateBatch(List<ImClient> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    ImClient get(Long key);
    ImClient getDraft(ImClient et);
    boolean checkKey(ImClient et);
    boolean save(ImClient et);
    void saveBatch(List<ImClient> list);
    Page<ImClient> searchDefault(ImClientSearchContext context);
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


