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

import cn.ibizlab.pms.core.ou.domain.SysTeamMember;
import cn.ibizlab.pms.core.ou.filter.SysTeamMemberSearchContext;


/**
 * 实体[SysTeamMember] 服务对象接口
 */
public interface ISysTeamMemberService {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "组成员";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "systeammembers";

    boolean create(SysTeamMember et);
    void createBatch(List<SysTeamMember> list);
    boolean update(SysTeamMember et);
    void updateBatch(List<SysTeamMember> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    SysTeamMember get(String key);
    SysTeamMember getDraft(SysTeamMember et);
    boolean checkKey(SysTeamMember et);
    boolean save(SysTeamMember et);
    void saveBatch(List<SysTeamMember> list);
    Page<SysTeamMember> searchDefault(SysTeamMemberSearchContext context);
    List<SysTeamMember> selectByUserid(String userid);
    void removeByUserid(String userid);
    List<SysTeamMember> selectByPostid(String postid);
    void removeByPostid(String postid);
    List<SysTeamMember> selectByTeamid(String teamid);
    void removeByTeamid(String teamid);


}



