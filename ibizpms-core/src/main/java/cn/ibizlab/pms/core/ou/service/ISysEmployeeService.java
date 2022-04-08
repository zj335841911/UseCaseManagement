package cn.ibizlab.pms.core.ou.service;

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

import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;


/**
 * 实体[SysEmployee] 服务对象接口
 */
public interface ISysEmployeeService {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "人员";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "sysemployees";

    boolean create(SysEmployee et);
    void createBatch(List<SysEmployee> list);
    boolean update(SysEmployee et);
    void updateBatch(List<SysEmployee> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    SysEmployee get(String key);
    SysEmployee getDraft(SysEmployee et);
    boolean checkKey(SysEmployee et);
    boolean save(SysEmployee et);
    void saveBatch(List<SysEmployee> list);
    Page<SysEmployee> searchBugUser(SysEmployeeSearchContext context);
    Page<SysEmployee> searchContActList(SysEmployeeSearchContext context);
    Page<SysEmployee> searchDefault(SysEmployeeSearchContext context);
    Page<SysEmployee> searchProductTeamM(SysEmployeeSearchContext context);
    Page<SysEmployee> searchProjectTeamM(SysEmployeeSearchContext context);
    Page<SysEmployee> searchProjectTeamMProduct(SysEmployeeSearchContext context);
    Page<SysEmployee> searchProjectTeamTaskUserTemp(SysEmployeeSearchContext context);
    Page<SysEmployee> searchProjectTeamUser(SysEmployeeSearchContext context);
    Page<SysEmployee> searchProjectTeamUserTask(SysEmployeeSearchContext context);
    Page<SysEmployee> searchProjectteamPk(SysEmployeeSearchContext context);
    Page<SysEmployee> searchStoryProductTeamPK(SysEmployeeSearchContext context);
    Page<SysEmployee> searchTaskMTeam(SysEmployeeSearchContext context);
    Page<SysEmployee> searchTaskTeam(SysEmployeeSearchContext context);
    List<SysEmployee> selectByMdeptid(String deptid);
    void resetByMdeptid(String deptid);
    void resetByMdeptid(Collection<String> ids);
    void removeByMdeptid(String deptid);
    List<SysEmployee> selectByOrgid(String orgid);
    void resetByOrgid(String orgid);
    void resetByOrgid(Collection<String> ids);
    void removeByOrgid(String orgid);


}



