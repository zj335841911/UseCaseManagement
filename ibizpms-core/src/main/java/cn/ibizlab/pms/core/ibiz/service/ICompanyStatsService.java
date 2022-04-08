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

import cn.ibizlab.pms.core.ibiz.domain.CompanyStats;
import cn.ibizlab.pms.core.ibiz.filter.CompanyStatsSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[CompanyStats] 服务对象接口
 */
public interface ICompanyStatsService extends IService<CompanyStats> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "公司动态汇总";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "companystats";

    boolean create(CompanyStats et);
    void createBatch(List<CompanyStats> list);
    boolean update(CompanyStats et);
    void updateBatch(List<CompanyStats> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    CompanyStats get(Long key);
    CompanyStats getDraft(CompanyStats et);
    boolean checkKey(CompanyStats et);
    boolean save(CompanyStats et);
    void saveBatch(List<CompanyStats> list);
    Page<CompanyStats> searchCompanyDynamicStats(CompanyStatsSearchContext context);
    Page<CompanyStats> searchDefault(CompanyStatsSearchContext context);
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


