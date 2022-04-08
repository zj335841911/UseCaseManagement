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

import cn.ibizlab.pms.core.ibiz.domain.IbzAgent;
import cn.ibizlab.pms.core.ibiz.filter.IbzAgentSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IbzAgent] 服务对象接口
 */
public interface IIbzAgentService extends IService<IbzAgent> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "代理";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibzagents";

    boolean create(IbzAgent et);
    void createBatch(List<IbzAgent> list);
    boolean update(IbzAgent et);
    void updateBatch(List<IbzAgent> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IbzAgent get(Long key);
    IbzAgent getDraft(IbzAgent et);
    boolean checkKey(IbzAgent et);
    boolean save(IbzAgent et);
    void saveBatch(List<IbzAgent> list);
    Page<IbzAgent> searchDefault(IbzAgentSearchContext context);
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

    List<IbzAgent> getIbzagentByIds(List<Long> ids);
    List<IbzAgent> getIbzagentByEntities(List<IbzAgent> entities);
}


