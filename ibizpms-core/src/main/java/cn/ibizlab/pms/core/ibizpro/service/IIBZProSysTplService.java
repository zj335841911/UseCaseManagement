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

import cn.ibizlab.pms.core.ibizpro.domain.IBZProSysTpl;
import cn.ibizlab.pms.core.ibizpro.filter.IBZProSysTplSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IBZProSysTpl] 服务对象接口
 */
public interface IIBZProSysTplService extends IService<IBZProSysTpl> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "系统模板";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibzprosystpls";

    boolean create(IBZProSysTpl et);
    void createBatch(List<IBZProSysTpl> list);
    boolean update(IBZProSysTpl et);
    void updateBatch(List<IBZProSysTpl> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    IBZProSysTpl get(String key);
    IBZProSysTpl getDraft(IBZProSysTpl et);
    boolean checkKey(IBZProSysTpl et);
    boolean save(IBZProSysTpl et);
    void saveBatch(List<IBZProSysTpl> list);
    Page<IBZProSysTpl> searchDefault(IBZProSysTplSearchContext context);
    List<IBZProSysTpl> selectByFile(Long id);
    void removeByFile(Long id);
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

    List<IBZProSysTpl> getIbzprosystplByIds(List<String> ids);
    List<IBZProSysTpl> getIbzprosystplByEntities(List<IBZProSysTpl> entities);
}


