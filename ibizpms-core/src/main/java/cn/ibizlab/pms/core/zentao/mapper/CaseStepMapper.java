package cn.ibizlab.pms.core.zentao.mapper;

import java.util.List;
import org.apache.ibatis.annotations.*;
import java.util.Map;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import java.util.Map;
import org.apache.ibatis.annotations.Select;
import cn.ibizlab.pms.core.zentao.domain.CaseStep;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.alibaba.fastjson.JSONObject;

public interface CaseStepMapper extends BaseMapper<CaseStep> {

    Page<CaseStep> searchCurTest(IPage page, @Param("srf") CaseStepSearchContext context, @Param("ew") Wrapper<CaseStep> wrapper);
    Page<CaseStep> searchDefault(IPage page, @Param("srf") CaseStepSearchContext context, @Param("ew") Wrapper<CaseStep> wrapper);
    Page<CaseStep> searchDefault1(IPage page, @Param("srf") CaseStepSearchContext context, @Param("ew") Wrapper<CaseStep> wrapper);
    Page<CaseStep> searchMob(IPage page, @Param("srf") CaseStepSearchContext context, @Param("ew") Wrapper<CaseStep> wrapper);
    Page<CaseStep> searchVersion(IPage page, @Param("srf") CaseStepSearchContext context, @Param("ew") Wrapper<CaseStep> wrapper);
    Page<CaseStep> searchVersions(IPage page, @Param("srf") CaseStepSearchContext context, @Param("ew") Wrapper<CaseStep> wrapper);
    @Override
    CaseStep selectById(Serializable id);
    @Override
    int insert(CaseStep entity);
    @Override
    int updateById(@Param(Constants.ENTITY) CaseStep entity);
    @Override
    int update(@Param(Constants.ENTITY) CaseStep entity, @Param("ew") Wrapper<CaseStep> updateWrapper);
    @Override
    int deleteById(Serializable id);
    /**
    * 自定义查询SQL
    * @param sql
    * @return
    */
    @Select("${sql}")
    List<JSONObject> selectBySQL(@Param("sql") String sql, @Param("et")Map param);

    /**
    * 自定义更新SQL
    * @param sql
    * @return
    */
    @Update("${sql}")
    boolean updateBySQL(@Param("sql") String sql, @Param("et")Map param);

    /**
    * 自定义插入SQL
    * @param sql
    * @return
    */
    @Insert("${sql}")
    boolean insertBySQL(@Param("sql") String sql, @Param("et")Map param);

    /**
    * 自定义删除SQL
    * @param sql
    * @return
    */
    @Delete("${sql}")
    boolean deleteBySQL(@Param("sql") String sql, @Param("et")Map param);

    List<CaseStep> selectByIbizcase(@Param("id") Serializable id);

    List<CaseStep> selectByParent(@Param("id") Serializable id);

}
