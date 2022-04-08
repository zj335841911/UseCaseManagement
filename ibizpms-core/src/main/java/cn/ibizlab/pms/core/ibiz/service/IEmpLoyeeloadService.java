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

import cn.ibizlab.pms.core.ibiz.domain.EmpLoyeeload;
import cn.ibizlab.pms.core.ibiz.filter.EmpLoyeeloadSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[EmpLoyeeload] 服务对象接口
 */
public interface IEmpLoyeeloadService extends IService<EmpLoyeeload> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "员工负载表";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "employeeloads";

    boolean create(EmpLoyeeload et);
    void createBatch(List<EmpLoyeeload> list);
    boolean update(EmpLoyeeload et);
    void updateBatch(List<EmpLoyeeload> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    EmpLoyeeload get(Long key);
    EmpLoyeeload getDraft(EmpLoyeeload et);
    boolean checkKey(EmpLoyeeload et);
    boolean save(EmpLoyeeload et);
    void saveBatch(List<EmpLoyeeload> list);
    Page<EmpLoyeeload> searchDefault(EmpLoyeeloadSearchContext context);
    Page<EmpLoyeeload> searchGETWOERKLOAD(EmpLoyeeloadSearchContext context);
    List<EmpLoyeeload> selectByProject(Long id);
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


