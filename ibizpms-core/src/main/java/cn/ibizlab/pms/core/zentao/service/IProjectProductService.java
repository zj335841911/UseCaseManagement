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

import cn.ibizlab.pms.core.zentao.domain.ProjectProduct;
import cn.ibizlab.pms.core.zentao.filter.ProjectProductSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[ProjectProduct] 服务对象接口
 */
public interface IProjectProductService extends IService<ProjectProduct> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "项目产品";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "projectproducts";

    boolean create(ProjectProduct et);
    void createBatch(List<ProjectProduct> list);
    boolean update(ProjectProduct et);
    void updateBatch(List<ProjectProduct> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    ProjectProduct get(String key);
    ProjectProduct getDraft(ProjectProduct et);
    boolean checkKey(ProjectProduct et);
    boolean save(ProjectProduct et);
    void saveBatch(List<ProjectProduct> list);
    Page<ProjectProduct> searchDefault(ProjectProductSearchContext context);
    Page<ProjectProduct> searchRelationPlan(ProjectProductSearchContext context);
    List<ProjectProduct> selectByBranch(Long id);
    void removeByBranch(Long id);
    List<ProjectProduct> selectByPlan(Long id);
    void removeByPlan(Long id);
    List<ProjectProduct> selectByProduct(Long id);
    void removeByProduct(Long id);
    List<ProjectProduct> selectByProject(Long id);
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


