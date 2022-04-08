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

import cn.ibizlab.pms.core.zentao.domain.Dept;
import cn.ibizlab.pms.core.zentao.filter.DeptSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Dept] 服务对象接口
 */
public interface IDeptService extends IService<Dept> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "部门";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "depts";

    boolean create(Dept et);
    void createBatch(List<Dept> list);
    boolean update(Dept et);
    void updateBatch(List<Dept> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    Dept get(Long key);
    Dept getDraft(Dept et);
    boolean checkKey(Dept et);
    boolean save(Dept et);
    void saveBatch(List<Dept> list);
    Page<Dept> searchDefault(DeptSearchContext context);
    Page<Dept> searchRoot(DeptSearchContext context);
    List<Dept> selectByParent(Long id);
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

}


