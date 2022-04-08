package cn.ibizlab.pms.webapi.rest;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import com.alibaba.fastjson.JSONObject;
import javax.servlet.ServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.StringUtils;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.validation.annotation.Validated;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproProductDaily;
import cn.ibizlab.pms.core.ibizpro.service.IIbizproProductDailyService;
import cn.ibizlab.pms.core.ibizpro.filter.IbizproProductDailySearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"产品日报" })
@RestController("WebApi-ibizproproductdaily")
@RequestMapping("")
public class IbizproProductDailyResource {

    @Autowired
    public IIbizproProductDailyService ibizproproductdailyService;

    @Autowired
    @Lazy
    public IbizproProductDailyMapping ibizproproductdailyMapping;

    @PreAuthorize("hasPermission(this.ibizproproductdailyMapping.toDomain(#ibizproproductdailydto),'pms-IbizproProductDaily-Create')")
    @ApiOperation(value = "新建产品日报", tags = {"产品日报" },  notes = "新建产品日报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizproproductdailies")
    public ResponseEntity<IbizproProductDailyDTO> create(@Validated @RequestBody IbizproProductDailyDTO ibizproproductdailydto) {
        IbizproProductDaily domain = ibizproproductdailyMapping.toDomain(ibizproproductdailydto);
		ibizproproductdailyService.create(domain);
        IbizproProductDailyDTO dto = ibizproproductdailyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibizproproductdailyMapping.toDomain(#ibizproproductdailydtos),'pms-IbizproProductDaily-Create')")
    @ApiOperation(value = "批量新建产品日报", tags = {"产品日报" },  notes = "批量新建产品日报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizproproductdailies/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IbizproProductDailyDTO> ibizproproductdailydtos) {
        ibizproproductdailyService.createBatch(ibizproproductdailyMapping.toDomain(ibizproproductdailydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "ibizproproductdaily" , versionfield = "updatedate")
    @PreAuthorize("hasPermission(this.ibizproproductdailyService.get(#ibizproproductdaily_id),'pms-IbizproProductDaily-Update')")
    @ApiOperation(value = "更新产品日报", tags = {"产品日报" },  notes = "更新产品日报")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibizproproductdailies/{ibizproproductdaily_id}")
    public ResponseEntity<IbizproProductDailyDTO> update(@PathVariable("ibizproproductdaily_id") Long ibizproproductdaily_id, @RequestBody IbizproProductDailyDTO ibizproproductdailydto) {
		IbizproProductDaily domain  = ibizproproductdailyMapping.toDomain(ibizproproductdailydto);
        domain .setIbizproproductdailyid(ibizproproductdaily_id);
		ibizproproductdailyService.update(domain );
		IbizproProductDailyDTO dto = ibizproproductdailyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibizproproductdailyService.getIbizproproductdailyByEntities(this.ibizproproductdailyMapping.toDomain(#ibizproproductdailydtos)),'pms-IbizproProductDaily-Update')")
    @ApiOperation(value = "批量更新产品日报", tags = {"产品日报" },  notes = "批量更新产品日报")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibizproproductdailies/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IbizproProductDailyDTO> ibizproproductdailydtos) {
        ibizproproductdailyService.updateBatch(ibizproproductdailyMapping.toDomain(ibizproproductdailydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.ibizproproductdailyService.get(#ibizproproductdaily_id),'pms-IbizproProductDaily-Remove')")
    @ApiOperation(value = "删除产品日报", tags = {"产品日报" },  notes = "删除产品日报")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibizproproductdailies/{ibizproproductdaily_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibizproproductdaily_id") Long ibizproproductdaily_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibizproproductdailyService.remove(ibizproproductdaily_id));
    }

    @PreAuthorize("hasPermission(this.ibizproproductdailyService.getIbizproproductdailyByIds(#ids),'pms-IbizproProductDaily-Remove')")
    @ApiOperation(value = "批量删除产品日报", tags = {"产品日报" },  notes = "批量删除产品日报")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibizproproductdailies/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        ibizproproductdailyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.ibizproproductdailyMapping.toDomain(returnObject.body),'pms-IbizproProductDaily-Get')")
    @ApiOperation(value = "获取产品日报", tags = {"产品日报" },  notes = "获取产品日报")
	@RequestMapping(method = RequestMethod.GET, value = "/ibizproproductdailies/{ibizproproductdaily_id}")
    public ResponseEntity<IbizproProductDailyDTO> get(@PathVariable("ibizproproductdaily_id") Long ibizproproductdaily_id) {
        IbizproProductDaily domain = ibizproproductdailyService.get(ibizproproductdaily_id);
        IbizproProductDailyDTO dto = ibizproproductdailyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取产品日报草稿", tags = {"产品日报" },  notes = "获取产品日报草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibizproproductdailies/getdraft")
    public ResponseEntity<IbizproProductDailyDTO> getDraft(IbizproProductDailyDTO dto) {
        IbizproProductDaily domain = ibizproproductdailyMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(ibizproproductdailyMapping.toDto(ibizproproductdailyService.getDraft(domain)));
    }

    @ApiOperation(value = "检查产品日报", tags = {"产品日报" },  notes = "检查产品日报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizproproductdailies/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IbizproProductDailyDTO ibizproproductdailydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibizproproductdailyService.checkKey(ibizproproductdailyMapping.toDomain(ibizproproductdailydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbizproProductDaily-ManualCreateDaily-all')")
    @ApiOperation(value = "手动生成产品日报", tags = {"产品日报" },  notes = "手动生成产品日报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizproproductdailies/{ibizproproductdaily_id}/manualcreatedaily")
    public ResponseEntity<IbizproProductDailyDTO> manualCreateDaily(@PathVariable("ibizproproductdaily_id") Long ibizproproductdaily_id, @RequestBody IbizproProductDailyDTO ibizproproductdailydto) {
        IbizproProductDaily domain = ibizproproductdailyMapping.toDomain(ibizproproductdailydto);
        domain.setIbizproproductdailyid(ibizproproductdaily_id);
        domain = ibizproproductdailyService.manualCreateDaily(domain);
        ibizproproductdailydto = ibizproproductdailyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibizproproductdailydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbizproProductDaily-ManualCreateDaily-all')")
    @ApiOperation(value = "批量处理[手动生成产品日报]", tags = {"产品日报" },  notes = "批量处理[手动生成产品日报]")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizproproductdailies/manualcreatedailybatch")
    public ResponseEntity<Boolean> manualCreateDailyBatch(@RequestBody List<IbizproProductDailyDTO> ibizproproductdailydtos) {
        List<IbizproProductDaily> domains = ibizproproductdailyMapping.toDomain(ibizproproductdailydtos);
        boolean result = ibizproproductdailyService.manualCreateDailyBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasPermission(this.ibizproproductdailyMapping.toDomain(#ibizproproductdailydto),'pms-IbizproProductDaily-Save')")
    @ApiOperation(value = "保存产品日报", tags = {"产品日报" },  notes = "保存产品日报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizproproductdailies/save")
    public ResponseEntity<IbizproProductDailyDTO> save(@RequestBody IbizproProductDailyDTO ibizproproductdailydto) {
        IbizproProductDaily domain = ibizproproductdailyMapping.toDomain(ibizproproductdailydto);
        ibizproproductdailyService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibizproproductdailyMapping.toDto(domain));
    }

    @PreAuthorize("hasPermission(this.ibizproproductdailyMapping.toDomain(#ibizproproductdailydtos),'pms-IbizproProductDaily-Save')")
    @ApiOperation(value = "批量保存产品日报", tags = {"产品日报" },  notes = "批量保存产品日报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizproproductdailies/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IbizproProductDailyDTO> ibizproproductdailydtos) {
        ibizproproductdailyService.saveBatch(ibizproproductdailyMapping.toDomain(ibizproproductdailydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbizproProductDaily-StatsProductDaily-all')")
    @ApiOperation(value = "汇总产品日报", tags = {"产品日报" },  notes = "汇总产品日报")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizproproductdailies/{ibizproproductdaily_id}/statsproductdaily")
    public ResponseEntity<IbizproProductDailyDTO> statsProductDaily(@PathVariable("ibizproproductdaily_id") Long ibizproproductdaily_id, @RequestBody IbizproProductDailyDTO ibizproproductdailydto) {
        IbizproProductDaily domain = ibizproproductdailyMapping.toDomain(ibizproproductdailydto);
        domain.setIbizproproductdailyid(ibizproproductdaily_id);
        domain = ibizproproductdailyService.statsProductDaily(domain);
        ibizproproductdailydto = ibizproproductdailyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibizproproductdailydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbizproProductDaily-StatsProductDaily-all')")
    @ApiOperation(value = "批量处理[汇总产品日报]", tags = {"产品日报" },  notes = "批量处理[汇总产品日报]")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizproproductdailies/statsproductdailybatch")
    public ResponseEntity<Boolean> statsProductDailyBatch(@RequestBody List<IbizproProductDailyDTO> ibizproproductdailydtos) {
        List<IbizproProductDaily> domains = ibizproproductdailyMapping.toDomain(ibizproproductdailydtos);
        boolean result = ibizproproductdailyService.statsProductDailyBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbizproProductDaily-searchDefault-all') and hasPermission(#context,'pms-IbizproProductDaily-Get')")
	@ApiOperation(value = "获取数据集", tags = {"产品日报" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibizproproductdailies/fetchdefault")
	public ResponseEntity<List<IbizproProductDailyDTO>> fetchDefault(IbizproProductDailySearchContext context) {
        Page<IbizproProductDaily> domains = ibizproproductdailyService.searchDefault(context) ;
        List<IbizproProductDailyDTO> list = ibizproproductdailyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbizproProductDaily-searchDefault-all') and hasPermission(#context,'pms-IbizproProductDaily-Get')")
	@ApiOperation(value = "查询数据集", tags = {"产品日报" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibizproproductdailies/searchdefault")
	public ResponseEntity<Page<IbizproProductDailyDTO>> searchDefault(@RequestBody IbizproProductDailySearchContext context) {
        Page<IbizproProductDaily> domains = ibizproproductdailyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibizproproductdailyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbizproProductDaily-searchProductDaily-all') and hasPermission(#context,'pms-IbizproProductDaily-Get')")
	@ApiOperation(value = "获取产品日报", tags = {"产品日报" } ,notes = "获取产品日报")
    @RequestMapping(method= RequestMethod.GET , value="/ibizproproductdailies/fetchproductdaily")
	public ResponseEntity<List<IbizproProductDailyDTO>> fetchProductDaily(IbizproProductDailySearchContext context) {
        Page<IbizproProductDaily> domains = ibizproproductdailyService.searchProductDaily(context) ;
        List<IbizproProductDailyDTO> list = ibizproproductdailyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbizproProductDaily-searchProductDaily-all') and hasPermission(#context,'pms-IbizproProductDaily-Get')")
	@ApiOperation(value = "查询产品日报", tags = {"产品日报" } ,notes = "查询产品日报")
    @RequestMapping(method= RequestMethod.POST , value="/ibizproproductdailies/searchproductdaily")
	public ResponseEntity<Page<IbizproProductDailyDTO>> searchProductDaily(@RequestBody IbizproProductDailySearchContext context) {
        Page<IbizproProductDaily> domains = ibizproproductdailyService.searchProductDaily(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibizproproductdailyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

