package cn.ibizlab.pms.core.uaa.service;

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

import cn.ibizlab.pms.core.uaa.domain.SysRole;
import cn.ibizlab.pms.core.uaa.filter.SysRoleSearchContext;


/**
 * 实体[SysRole] 服务对象接口
 */
public interface ISysRoleService {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "系统角色";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "sysroles";

    boolean create(SysRole et);
    void createBatch(List<SysRole> list);
    boolean update(SysRole et);
    void updateBatch(List<SysRole> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    SysRole get(String key);
    SysRole getDraft(SysRole et);
    boolean checkKey(SysRole et);
    boolean save(SysRole et);
    void saveBatch(List<SysRole> list);
    Page<SysRole> searchDefault(SysRoleSearchContext context);
    List<SysRole> selectByProleid(String roleid);
    void removeByProleid(String roleid);


}



