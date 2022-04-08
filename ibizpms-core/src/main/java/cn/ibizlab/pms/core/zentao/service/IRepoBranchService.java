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

import cn.ibizlab.pms.core.zentao.domain.RepoBranch;
import cn.ibizlab.pms.core.zentao.filter.RepoBranchSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[RepoBranch] 服务对象接口
 */
public interface IRepoBranchService extends IService<RepoBranch> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "repobranch";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "repobranches";

    boolean create(RepoBranch et);
    void createBatch(List<RepoBranch> list);
    boolean update(RepoBranch et);
    void updateBatch(List<RepoBranch> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    RepoBranch get(String key);
    RepoBranch getDraft(RepoBranch et);
    boolean checkKey(RepoBranch et);
    boolean save(RepoBranch et);
    void saveBatch(List<RepoBranch> list);
    Page<RepoBranch> searchDefault(RepoBranchSearchContext context);
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


