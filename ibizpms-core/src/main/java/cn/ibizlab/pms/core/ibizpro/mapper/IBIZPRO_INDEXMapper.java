package cn.ibizlab.pms.core.ibizpro.mapper;

import java.util.List;
import org.apache.ibatis.annotations.*;
import java.util.Map;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import java.util.HashMap;
import org.apache.ibatis.annotations.Select;
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import cn.ibizlab.pms.core.ibizpro.filter.IBIZPRO_INDEXSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.alibaba.fastjson.JSONObject;

public interface IBIZPRO_INDEXMapper extends BaseMapper<IBIZPRO_INDEX> {

    Page<IBIZPRO_INDEX> searchDefault(IPage page, @Param("srf") IBIZPRO_INDEXSearchContext context, @Param("ew") Wrapper<IBIZPRO_INDEX> wrapper);
    Page<IBIZPRO_INDEX> searchIndexDER(IPage page, @Param("srf") IBIZPRO_INDEXSearchContext context, @Param("ew") Wrapper<IBIZPRO_INDEX> wrapper);
    @Override
    IBIZPRO_INDEX selectById(Serializable id);
    @Override
    int insert(IBIZPRO_INDEX entity);
    @Override
    int updateById(@Param(Constants.ENTITY) IBIZPRO_INDEX entity);
    @Override
    int update(@Param(Constants.ENTITY) IBIZPRO_INDEX entity, @Param("ew") Wrapper<IBIZPRO_INDEX> updateWrapper);
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

}
