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
import cn.ibizlab.pms.core.ou.domain.IBZEmployee;
import cn.ibizlab.pms.core.ou.filter.IBZEmployeeSearchContext;
import org.springframework.cloud.openfeign.FeignClient;

/**
 * 实体[IBZEmployee] 服务对象接口
 */
@FeignClient(value = "${ibiz.ref.service.ibzou-api:ibzou-api}", contextId = "IBZEmployee", fallback = IBZEmployeeFallback.class)
public interface IBZEmployeeFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/ibzemployees/select")
    Page<IBZEmployee> select();


    @RequestMapping(method = RequestMethod.POST, value = "/ibzemployees")
    IBZEmployee create(@RequestBody IBZEmployee ibzemployee);

    @RequestMapping(method = RequestMethod.POST, value = "/ibzemployees/batch")
    Boolean createBatch(@RequestBody List<IBZEmployee> ibzemployees);


    @RequestMapping(method = RequestMethod.PUT, value = "/ibzemployees/{userid}")
    IBZEmployee update(@PathVariable("userid") String userid,@RequestBody IBZEmployee ibzemployee);

    @RequestMapping(method = RequestMethod.PUT, value = "/ibzemployees/batch")
    Boolean updateBatch(@RequestBody List<IBZEmployee> ibzemployees);


    @RequestMapping(method = RequestMethod.DELETE, value = "/ibzemployees/{userid}")
    Boolean remove(@PathVariable("userid") String userid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/ibzemployees/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/ibzemployees/{userid}")
    IBZEmployee get(@PathVariable("userid") String userid);

    @RequestMapping(method = RequestMethod.GET, value = "/ibzemployees/getbycodename/{userid}")
    String getByCodeName(@PathVariable("userid") String codeName);


    @RequestMapping(method = RequestMethod.GET, value = "/ibzemployees/getdraft")
    IBZEmployee getDraft();


    @RequestMapping(method = RequestMethod.POST, value = "/ibzemployees/checkkey")
    Boolean checkKey(@RequestBody IBZEmployee ibzemployee);


    @RequestMapping(method = RequestMethod.POST, value = "/ibzemployees/save")
    Boolean save(@RequestBody IBZEmployee ibzemployee);

    @RequestMapping(method = RequestMethod.POST, value = "/ibzemployees/savebatch")
    Boolean saveBatch(@RequestBody List<IBZEmployee> ibzemployees);



    @RequestMapping(method = RequestMethod.POST, value = "/ibzemployees/searchdefault")
    Page<IBZEmployee> searchDefault(@RequestBody IBZEmployeeSearchContext context);


}
