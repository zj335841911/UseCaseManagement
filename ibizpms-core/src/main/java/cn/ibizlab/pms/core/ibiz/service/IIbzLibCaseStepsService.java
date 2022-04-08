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

import cn.ibizlab.pms.core.ibiz.domain.IbzLibCaseSteps;
import cn.ibizlab.pms.core.ibiz.filter.IbzLibCaseStepsSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IbzLibCaseSteps] 服务对象接口
 */
public interface IIbzLibCaseStepsService extends IService<IbzLibCaseSteps> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "用例库用例步骤";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibzlibcasesteps";

    boolean create(IbzLibCaseSteps et);
    void createBatch(List<IbzLibCaseSteps> list);
    boolean update(IbzLibCaseSteps et);
    void updateBatch(List<IbzLibCaseSteps> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IbzLibCaseSteps get(Long key);
    IbzLibCaseSteps getDraft(IbzLibCaseSteps et);
    boolean checkKey(IbzLibCaseSteps et);
    boolean save(IbzLibCaseSteps et);
    void saveBatch(List<IbzLibCaseSteps> list);
    Page<IbzLibCaseSteps> searchDefault(IbzLibCaseStepsSearchContext context);
    List<IbzLibCaseSteps> selectByIbizcase(Long id);
    void removeByIbizcase(Long id);
    void saveByIbizcase(Long id, List<IbzLibCaseSteps> list) ;
    List<IbzLibCaseSteps> selectByParent(Long id);
    void removeByParent(Long id);
    void saveByParent(Long id, List<IbzLibCaseSteps> list) ;
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


