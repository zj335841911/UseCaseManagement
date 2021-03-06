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
import cn.ibizlab.pms.core.uaa.domain.SysRole;
import cn.ibizlab.pms.core.uaa.filter.SysRoleSearchContext;
import org.springframework.cloud.openfeign.FeignClient;

/**
 * 实体[SysRole] 服务对象接口
 */
@FeignClient(value = "${ibiz.ref.service.ibzuaa-api:ibzuaa-api}", contextId = "SysRole", fallback = SysRoleFallback.class)
public interface SysRoleFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/sysroles/select")
    Page<SysRole> select();


    @RequestMapping(method = RequestMethod.POST, value = "/sysroles")
    SysRole create(@RequestBody SysRole et);

    @RequestMapping(method = RequestMethod.POST, value = "/sysroles/batch")
    Boolean createBatch(@RequestBody List<SysRole> sysroles);


    @RequestMapping(method = RequestMethod.PUT, value = "/sysroles/{roleid}")
    SysRole update(@PathVariable("roleid") String roleid, @RequestBody SysRole et);

    @RequestMapping(method = RequestMethod.PUT, value = "/sysroles/batch")
    Boolean updateBatch(@RequestBody List<SysRole> sysroles);


    @RequestMapping(method = RequestMethod.DELETE, value = "/sysroles/{roleid}")
    Boolean remove(@PathVariable("roleid") String roleid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/sysroles/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/sysroles/{roleid}")
    SysRole get(@PathVariable("roleid") String roleid);

    @RequestMapping(method = RequestMethod.GET, value = "/sysroles/getbycodename/{roleid}")
    String getByCodeName(@PathVariable("roleid") String codeName);


    @RequestMapping(method = RequestMethod.GET, value = "/sysroles/getdraft")
    SysRole getDraft(SysRole entity);


    @RequestMapping(method = RequestMethod.POST, value = "/sysroles/checkkey")
    Boolean checkKey(@RequestBody SysRole et);


    @RequestMapping(method = RequestMethod.POST, value = "/sysroles/save")
    Object saveEntity(@RequestBody SysRole et);

    default Boolean save(@RequestBody SysRole et) { return saveEntity(et)!=null; }

    @RequestMapping(method = RequestMethod.POST, value = "/sysroles/savebatch")
    Boolean saveBatch(@RequestBody List<SysRole> sysroles);



    @RequestMapping(method = RequestMethod.POST, value = "/sysroles/searchdefault")
    Page<SysRole> searchDefault(@RequestBody SysRoleSearchContext context);


}
