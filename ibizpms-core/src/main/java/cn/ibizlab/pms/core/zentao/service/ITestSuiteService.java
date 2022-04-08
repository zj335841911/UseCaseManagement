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

import cn.ibizlab.pms.core.zentao.domain.TestSuite;
import cn.ibizlab.pms.core.zentao.filter.TestSuiteSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[TestSuite] 服务对象接口
 */
public interface ITestSuiteService extends IService<TestSuite> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "测试套件";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "testsuites";

    boolean create(TestSuite et);
    void createBatch(List<TestSuite> list);
    boolean update(TestSuite et);
    void updateBatch(List<TestSuite> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    TestSuite get(Long key);
    TestSuite getDraft(TestSuite et);
    boolean checkKey(TestSuite et);
    TestSuite mobTestSuiteCount(TestSuite et);
    boolean save(TestSuite et);
    void saveBatch(List<TestSuite> list);
    Page<TestSuite> searchDefault(TestSuiteSearchContext context);
    Page<TestSuite> searchPublicTestSuite(TestSuiteSearchContext context);
    List<TestSuite> selectByProduct(Long id);
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


