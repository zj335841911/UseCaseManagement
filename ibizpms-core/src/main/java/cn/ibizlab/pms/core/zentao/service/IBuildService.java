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

import cn.ibizlab.pms.core.zentao.domain.Build;
import cn.ibizlab.pms.core.zentao.filter.BuildSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Build] 服务对象接口
 */
public interface IBuildService extends IService<Build> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "版本";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "builds";

    boolean create(Build et);
    void createBatch(List<Build> list);
    boolean update(Build et);
    void updateBatch(List<Build> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    Build get(Long key);
    Build getDraft(Build et);
    boolean checkKey(Build et);
    Build linkStory(Build et);
    boolean linkStoryBatch(List<Build> etList);
    Build mobProjectBuildCounter(Build et);
    Build oneClickRelease(Build et);
    boolean oneClickReleaseBatch(List<Build> etList);
    boolean save(Build et);
    void saveBatch(List<Build> list);
    Page<Build> searchBugProductBuild(BuildSearchContext context);
    Page<Build> searchCurProduct(BuildSearchContext context);
    Page<Build> searchDefault(BuildSearchContext context);
    Page<Build> searchTestBuild(BuildSearchContext context);
    Page<Build> searchTestRounds(BuildSearchContext context);
    Page<Build> searchUpdateLog(BuildSearchContext context);
    List<Build> selectByBranch(Long id);
    void removeByBranch(Long id);
    List<Build> selectByProduct(Long id);
    void removeByProduct(Long id);
    List<Build> selectByProject(Long id);
    void removeByProject(Long id);
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


