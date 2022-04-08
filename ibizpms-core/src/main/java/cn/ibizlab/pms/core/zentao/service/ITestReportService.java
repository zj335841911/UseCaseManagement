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

import cn.ibizlab.pms.core.zentao.domain.TestReport;
import cn.ibizlab.pms.core.zentao.filter.TestReportSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[TestReport] 服务对象接口
 */
public interface ITestReportService extends IService<TestReport> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "测试报告";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "testreports";

    boolean create(TestReport et);
    void createBatch(List<TestReport> list);
    boolean update(TestReport et);
    void updateBatch(List<TestReport> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    TestReport get(Long key);
    TestReport getDraft(TestReport et);
    boolean checkKey(TestReport et);
    TestReport getInfoTaskOvByTime(TestReport et);
    TestReport getInfoTestTask(TestReport et);
    TestReport getInfoTestTaskOvProject(TestReport et);
    TestReport getInfoTestTaskProject(TestReport et);
    TestReport getInfoTestTaskR(TestReport et);
    TestReport getInfoTestTaskS(TestReport et);
    TestReport getTestReportBasicInfo(TestReport et);
    TestReport getTestReportProject(TestReport et);
    boolean save(TestReport et);
    void saveBatch(List<TestReport> list);
    Page<TestReport> searchDefault(TestReportSearchContext context);
    List<TestReport> selectByProduct(Long id);
    void removeByProduct(Long id);
    List<TestReport> selectByProject(Long id);
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


