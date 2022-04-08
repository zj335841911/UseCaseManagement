package cn.ibizlab.pms.core.ou.client;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import cn.ibizlab.pms.core.ou.domain.SysTeamMember;
import cn.ibizlab.pms.core.ou.filter.SysTeamMemberSearchContext;
import org.springframework.cloud.openfeign.FeignClient;

/**
 * 实体[SysTeamMember] 服务对象接口
 */
@FeignClient(value = "${ibiz.ref.service.ibzou-api:ibzou-api}", contextId = "SysTeamMember", fallback = SysTeamMemberFallback.class)
public interface SysTeamMemberFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/systeammembers/select")
    Page<SysTeamMember> select();


    @RequestMapping(method = RequestMethod.POST, value = "/systeammembers")
    SysTeamMember create(@RequestBody SysTeamMember et);

    @RequestMapping(method = RequestMethod.POST, value = "/systeammembers/batch")
    Boolean createBatch(@RequestBody List<SysTeamMember> systeammembers);


    @RequestMapping(method = RequestMethod.PUT, value = "/systeammembers/{teammemberid}")
    SysTeamMember update(@PathVariable("teammemberid") String teammemberid, @RequestBody SysTeamMember et);

    @RequestMapping(method = RequestMethod.PUT, value = "/systeammembers/batch")
    Boolean updateBatch(@RequestBody List<SysTeamMember> systeammembers);


    @RequestMapping(method = RequestMethod.DELETE, value = "/systeammembers/{teammemberid}")
    Boolean remove(@PathVariable("teammemberid") String teammemberid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/systeammembers/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/systeammembers/{teammemberid}")
    SysTeamMember get(@PathVariable("teammemberid") String teammemberid);

    @RequestMapping(method = RequestMethod.GET, value = "/systeammembers/getbycodename/{teammemberid}")
    String getByCodeName(@PathVariable("teammemberid") String codeName);


    @RequestMapping(method = RequestMethod.GET, value = "/systeammembers/getdraft")
    SysTeamMember getDraft(SysTeamMember entity);


    @RequestMapping(method = RequestMethod.POST, value = "/systeammembers/checkkey")
    Boolean checkKey(@RequestBody SysTeamMember et);


    @RequestMapping(method = RequestMethod.POST, value = "/systeammembers/save")
    Object saveEntity(@RequestBody SysTeamMember et);

    default Boolean save(@RequestBody SysTeamMember et) { return saveEntity(et)!=null; }

    @RequestMapping(method = RequestMethod.POST, value = "/systeammembers/savebatch")
    Boolean saveBatch(@RequestBody List<SysTeamMember> systeammembers);



    @RequestMapping(method = RequestMethod.POST, value = "/systeammembers/searchdefault")
    Page<SysTeamMember> searchDefault(@RequestBody SysTeamMemberSearchContext context);


}
