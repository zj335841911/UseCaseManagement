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

import cn.ibizlab.pms.core.ibiz.domain.IbzProjectMember;
import cn.ibizlab.pms.core.ibiz.filter.IbzProjectMemberSearchContext;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 实体[IbzProjectMember] 服务对象接口
 */
public interface IIbzProjectMemberService extends IService<IbzProjectMember> {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "项目相关成员";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibzprojectmembers";

    boolean create(IbzProjectMember et);
    void createBatch(List<IbzProjectMember> list);
    boolean update(IbzProjectMember et);
    void updateBatch(List<IbzProjectMember> list);
    boolean remove(Long key);
    void removeBatch(Collection<Long> idList);
    IbzProjectMember get(Long key);
    IbzProjectMember getDraft(IbzProjectMember et);
    boolean checkKey(IbzProjectMember et);
    boolean save(IbzProjectMember et);
    void saveBatch(List<IbzProjectMember> list);
    Page<IbzProjectMember> searchDefault(IbzProjectMemberSearchContext context);
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


