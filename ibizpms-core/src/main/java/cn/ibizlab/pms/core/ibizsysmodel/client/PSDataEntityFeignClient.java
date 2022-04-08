package cn.ibizlab.pms.core.ibizsysmodel.client;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSDataEntity;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSDataEntitySearchContext;
import org.springframework.cloud.openfeign.FeignClient;

/**
 * 实体[PSDataEntity] 服务对象接口
 */
//@FeignClient(value = "${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi:ibizpssysmodelapi-sysmodelapi}", contextId = "PSDataEntity", fallback = PSDataEntityFallback.class)
public interface PSDataEntityFeignClient {

    @RequestMapping(method = RequestMethod.GET, value = "/psdataentities/select")
    Page<PSDataEntity> select();


    @RequestMapping(method = RequestMethod.POST, value = "/psdataentities")
    PSDataEntity create(@RequestBody PSDataEntity et);

    @RequestMapping(method = RequestMethod.POST, value = "/psdataentities/batch")
    Boolean createBatch(@RequestBody List<PSDataEntity> psdataentities);


    @RequestMapping(method = RequestMethod.PUT, value = "/psdataentities/{psdataentityid}")
    PSDataEntity update(@PathVariable("psdataentityid") String psdataentityid, @RequestBody PSDataEntity et);

    @RequestMapping(method = RequestMethod.PUT, value = "/psdataentities/batch")
    Boolean updateBatch(@RequestBody List<PSDataEntity> psdataentities);


    @RequestMapping(method = RequestMethod.DELETE, value = "/psdataentities/{psdataentityid}")
    Boolean remove(@PathVariable("psdataentityid") String psdataentityid);

    @RequestMapping(method = RequestMethod.DELETE, value = "/psdataentities/batch}")
    Boolean removeBatch(@RequestBody Collection<String> idList);


    @RequestMapping(method = RequestMethod.GET, value = "/psdataentities/{psdataentityid}")
    PSDataEntity get(@PathVariable("psdataentityid") String psdataentityid);

    @RequestMapping(method = RequestMethod.GET, value = "/psdataentities/getbycodename/{psdataentityid}")
    String getByCodeName(@PathVariable("psdataentityid") String codeName);


    @RequestMapping(method = RequestMethod.GET, value = "/psdataentities/getdraft")
    PSDataEntity getDraft(PSDataEntity entity);


    @RequestMapping(method = RequestMethod.POST, value = "/psdataentities/checkkey")
    Boolean checkKey(@RequestBody PSDataEntity et);


    @RequestMapping(method = RequestMethod.POST, value = "/psdataentities/save")
    Object saveEntity(@RequestBody PSDataEntity et);

    default Boolean save(@RequestBody PSDataEntity et) { return saveEntity(et)!=null; }

    @RequestMapping(method = RequestMethod.POST, value = "/psdataentities/savebatch")
    Boolean saveBatch(@RequestBody List<PSDataEntity> psdataentities);



    @RequestMapping(method = RequestMethod.POST, value = "/psdataentities/searchdefault")
    Page<PSDataEntity> searchDefault(@RequestBody PSDataEntitySearchContext context);


}
