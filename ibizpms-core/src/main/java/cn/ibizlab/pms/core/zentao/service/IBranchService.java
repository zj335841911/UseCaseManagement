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

import cn.ibizlab.pms.core.zentao.domain.Branch;
import cn.ibizlab.pms.core.zentao.filter.BranchSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Branch] 服务对象接口
 */
public interface IBranchService extends IService<Branch> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "产品的分支和平台信息";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "branches";

    boolean create(Branch et);
    void createBatch(List<Branch> list);
    boolean update(Branch et);
    void updateBatch(List<Branch> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    Branch get(Long key);
    Branch getDraft(Branch et);
    boolean checkKey(Branch et);
    boolean save(Branch et);
    void saveBatch(List<Branch> list);
    Branch sort(Branch et);
    boolean sortBatch(List<Branch> etList);
    Page<Branch> searchCurProduct(BranchSearchContext context);
    Page<Branch> searchDefault(BranchSearchContext context);
    List<Branch> selectByProduct(Long id);
    void removeByProduct(Long id);
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


