package cn.ibizlab.pms.core.uaa.client;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import cn.ibizlab.pms.core.uaa.domain.SysUser;
import cn.ibizlab.pms.core.uaa.filter.SysUserSearchContext;
import org.springframework.cloud.openfeign.FeignClient;

/**
 * 实体[SysUser] 服务对象接口
 */
@FeignClient(value = "${ibiz.ref.service.ibzuaa-api:ibzuaa-api}", contextId = "SysUser", fallback = SysUserFallback.class)
public interface SysUserFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/sysusers/select")
    Page<SysUser> select();


    @RequestMapping(method = RequestMethod.POST, value = "/sysusers")
    SysUser create(@RequestBody SysUser et);

    @RequestMapping(method = RequestMethod.POST, value = "/sysusers/batch")
    Boolean createBatch(@RequestBody List<SysUser> sysusers);


    @RequestMapping(method = RequestMethod.PUT, value = "/sysusers/{userid}")
    SysUser update(@PathVariable("userid") String userid, @RequestBody SysUser et);

    @RequestMapping(method = RequestMethod.PUT, value = "/sysusers/batch")
    Boolean updateBatch(@RequestBody List<SysUser> sysusers);


    @RequestMapping(method = RequestMethod.DELETE, value = "/sysusers/{userid}")
    Boolean remove(@PathVariable("userid") String userid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/sysusers/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/sysusers/{userid}")
    SysUser get(@PathVariable("userid") String userid);

    @RequestMapping(method = RequestMethod.GET, value = "/sysusers/getbycodename/{userid}")
    String getByCodeName(@PathVariable("userid") String codeName);


    @RequestMapping(method = RequestMethod.GET, value = "/sysusers/getdraft")
    SysUser getDraft(SysUser entity);


    @RequestMapping(method = RequestMethod.POST, value = "/sysusers/{userid}/changepwd")
    SysUser changePwd(@PathVariable("userid") String userid, @RequestBody SysUser et);


    @RequestMapping(method = RequestMethod.POST, value = "/sysusers/checkkey")
    Boolean checkKey(@RequestBody SysUser et);


    @RequestMapping(method = RequestMethod.POST, value = "/sysusers/save")
    Object saveEntity(@RequestBody SysUser et);

    default Boolean save(@RequestBody SysUser et) { return saveEntity(et)!=null; }

    @RequestMapping(method = RequestMethod.POST, value = "/sysusers/savebatch")
    Boolean saveBatch(@RequestBody List<SysUser> sysusers);



    @RequestMapping(method = RequestMethod.POST, value = "/sysusers/searchdefault")
    Page<SysUser> searchDefault(@RequestBody SysUserSearchContext context);


}
