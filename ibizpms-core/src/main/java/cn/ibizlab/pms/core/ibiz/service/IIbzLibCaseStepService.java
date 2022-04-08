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

import cn.ibizlab.pms.core.ibiz.domain.IbzLibCaseStep;
import cn.ibizlab.pms.core.ibiz.filter.IbzLibCaseStepSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IbzLibCaseStep] 服务对象接口
 */
public interface IIbzLibCaseStepService extends IService<IbzLibCaseStep> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "用例库用例步骤";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibzlibcasesteps";

    boolean create(IbzLibCaseStep et);
    void createBatch(List<IbzLibCaseStep> list);
    boolean update(IbzLibCaseStep et);
    void updateBatch(List<IbzLibCaseStep> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IbzLibCaseStep get(Long key);
    IbzLibCaseStep getDraft(IbzLibCaseStep et);
    boolean checkKey(IbzLibCaseStep et);
    boolean save(IbzLibCaseStep et);
    void saveBatch(List<IbzLibCaseStep> list);
    Page<IbzLibCaseStep> searchDefault(IbzLibCaseStepSearchContext context);
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


