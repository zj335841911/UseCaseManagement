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

import cn.ibizlab.pms.core.zentao.domain.Module;
import cn.ibizlab.pms.core.zentao.filter.ModuleSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Module] 服务对象接口
 */
public interface IModuleService extends IService<Module> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "模块";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "modules";

    boolean create(Module et);
    void createBatch(List<Module> list);
    boolean update(Module et);
    void updateBatch(List<Module> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    Module get(Long key);
    Module getDraft(Module et);
    boolean checkKey(Module et);
    Module fix(Module et);
    boolean fixBatch(List<Module> etList);
    boolean save(Module et);
    void saveBatch(List<Module> list);
    Page<Module> searchBugModule(ModuleSearchContext context);
    Page<Module> searchBugModuleCodeList(ModuleSearchContext context);
    Page<Module> searchDefault(ModuleSearchContext context);
    Page<Module> searchDocModule(ModuleSearchContext context);
    Page<Module> searchLine(ModuleSearchContext context);
    Page<Module> searchStoryModule(ModuleSearchContext context);
    Page<Module> searchTaskModule(ModuleSearchContext context);
    List<Module> selectByBranch(Long id);
    void removeByBranch(Long id);
    List<Module> selectByParent(Long id);
    void removeByParent(Long id);
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

    List<Module> getModuleByIds(List<Long> ids);
    List<Module> getModuleByEntities(List<Module> entities);
}


