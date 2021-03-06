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
import cn.ibizlab.pms.core.ou.domain.SysPost;
import cn.ibizlab.pms.core.ou.filter.SysPostSearchContext;
import org.springframework.cloud.openfeign.FeignClient;

/**
 * 实体[SysPost] 服务对象接口
 */
@FeignClient(value = "${ibiz.ref.service.ibzou-api:ibzou-api}", contextId = "SysPost", fallback = SysPostFallback.class)
public interface SysPostFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/sysposts/select")
    Page<SysPost> select();


    @RequestMapping(method = RequestMethod.POST, value = "/sysposts")
    SysPost create(@RequestBody SysPost et);

    @RequestMapping(method = RequestMethod.POST, value = "/sysposts/batch")
    Boolean createBatch(@RequestBody List<SysPost> sysposts);


    @RequestMapping(method = RequestMethod.PUT, value = "/sysposts/{postid}")
    SysPost update(@PathVariable("postid") String postid, @RequestBody SysPost et);

    @RequestMapping(method = RequestMethod.PUT, value = "/sysposts/batch")
    Boolean updateBatch(@RequestBody List<SysPost> sysposts);


    @RequestMapping(method = RequestMethod.DELETE, value = "/sysposts/{postid}")
    Boolean remove(@PathVariable("postid") String postid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/sysposts/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/sysposts/{postid}")
    SysPost get(@PathVariable("postid") String postid);

    @RequestMapping(method = RequestMethod.GET, value = "/sysposts/getbycodename/{postid}")
    String getByCodeName(@PathVariable("postid") String codeName);


    @RequestMapping(method = RequestMethod.GET, value = "/sysposts/getdraft")
    SysPost getDraft(SysPost entity);


    @RequestMapping(method = RequestMethod.POST, value = "/sysposts/checkkey")
    Boolean checkKey(@RequestBody SysPost et);


    @RequestMapping(method = RequestMethod.POST, value = "/sysposts/save")
    Object saveEntity(@RequestBody SysPost et);

    default Boolean save(@RequestBody SysPost et) { return saveEntity(et)!=null; }

    @RequestMapping(method = RequestMethod.POST, value = "/sysposts/savebatch")
    Boolean saveBatch(@RequestBody List<SysPost> sysposts);



    @RequestMapping(method = RequestMethod.POST, value = "/sysposts/searchdefault")
    Page<SysPost> searchDefault(@RequestBody SysPostSearchContext context);


}
