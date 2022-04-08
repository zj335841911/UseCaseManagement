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

import cn.ibizlab.pms.core.zentao.domain.Team;
import cn.ibizlab.pms.core.zentao.filter.TeamSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[Team] 服务对象接口
 */
public interface ITeamService extends IService<Team> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "群组";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "teams";

    boolean create(Team et);
    void createBatch(List<Team> list);
    boolean update(Team et);
    void updateBatch(List<Team> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    Team get(Long key);
    Team getDraft(Team et);
    boolean checkKey(Team et);
    Team managePorjectMembers(Team et);
    boolean managePorjectMembersBatch(List<Team> etList);
    boolean save(Team et);
    void saveBatch(List<Team> list);
    Team unlinkPorjectMember(Team et);
    boolean unlinkPorjectMemberBatch(List<Team> etList);
    Page<Team> searchDefault(TeamSearchContext context);
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


