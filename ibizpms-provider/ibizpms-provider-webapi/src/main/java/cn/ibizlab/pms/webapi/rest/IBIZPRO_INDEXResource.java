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
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import cn.ibizlab.pms.core.ibizpro.service.IIBIZPRO_INDEXService;
import cn.ibizlab.pms.core.ibizpro.filter.IBIZPRO_INDEXSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"索引检索" })
@RestController("WebApi-ibizpro_index")
@RequestMapping("")
public class IBIZPRO_INDEXResource {

    @Autowired
    public IIBIZPRO_INDEXService ibizpro_indexService;

    @Autowired
    @Lazy
    public IBIZPRO_INDEXMapping ibizpro_indexMapping;

    @PreAuthorize("hasPermission(this.ibizpro_indexMapping.toDomain(#ibizpro_indexdto),'pms-IBIZPRO_INDEX-Create')")
    @ApiOperation(value = "新建索引检索", tags = {"索引检索" },  notes = "新建索引检索")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizpro_indices")
    public ResponseEntity<IBIZPRO_INDEXDTO> create(@Validated @RequestBody IBIZPRO_INDEXDTO ibizpro_indexdto) {
        IBIZPRO_INDEX domain = ibizpro_indexMapping.toDomain(ibizpro_indexdto);
		ibizpro_indexService.create(domain);
        IBIZPRO_INDEXDTO dto = ibizpro_indexMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibizpro_indexMapping.toDomain(#ibizpro_indexdtos),'pms-IBIZPRO_INDEX-Create')")
    @ApiOperation(value = "批量新建索引检索", tags = {"索引检索" },  notes = "批量新建索引检索")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizpro_indices/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IBIZPRO_INDEXDTO> ibizpro_indexdtos) {
        ibizpro_indexService.createBatch(ibizpro_indexMapping.toDomain(ibizpro_indexdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.ibizpro_indexService.get(#ibizpro_index_id),'pms-IBIZPRO_INDEX-Update')")
    @ApiOperation(value = "更新索引检索", tags = {"索引检索" },  notes = "更新索引检索")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibizpro_indices/{ibizpro_index_id}")
    public ResponseEntity<IBIZPRO_INDEXDTO> update(@PathVariable("ibizpro_index_id") Long ibizpro_index_id, @RequestBody IBIZPRO_INDEXDTO ibizpro_indexdto) {
		IBIZPRO_INDEX domain  = ibizpro_indexMapping.toDomain(ibizpro_indexdto);
        domain .setIndexid(ibizpro_index_id);
		ibizpro_indexService.update(domain );
		IBIZPRO_INDEXDTO dto = ibizpro_indexMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibizpro_indexService.getIbizproIndexByEntities(this.ibizpro_indexMapping.toDomain(#ibizpro_indexdtos)),'pms-IBIZPRO_INDEX-Update')")
    @ApiOperation(value = "批量更新索引检索", tags = {"索引检索" },  notes = "批量更新索引检索")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibizpro_indices/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IBIZPRO_INDEXDTO> ibizpro_indexdtos) {
        ibizpro_indexService.updateBatch(ibizpro_indexMapping.toDomain(ibizpro_indexdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.ibizpro_indexService.get(#ibizpro_index_id),'pms-IBIZPRO_INDEX-Remove')")
    @ApiOperation(value = "删除索引检索", tags = {"索引检索" },  notes = "删除索引检索")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibizpro_indices/{ibizpro_index_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibizpro_index_id") Long ibizpro_index_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibizpro_indexService.remove(ibizpro_index_id));
    }

    @PreAuthorize("hasPermission(this.ibizpro_indexService.getIbizproIndexByIds(#ids),'pms-IBIZPRO_INDEX-Remove')")
    @ApiOperation(value = "批量删除索引检索", tags = {"索引检索" },  notes = "批量删除索引检索")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibizpro_indices/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        ibizpro_indexService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.ibizpro_indexMapping.toDomain(returnObject.body),'pms-IBIZPRO_INDEX-Get')")
    @ApiOperation(value = "获取索引检索", tags = {"索引检索" },  notes = "获取索引检索")
	@RequestMapping(method = RequestMethod.GET, value = "/ibizpro_indices/{ibizpro_index_id}")
    public ResponseEntity<IBIZPRO_INDEXDTO> get(@PathVariable("ibizpro_index_id") Long ibizpro_index_id) {
        IBIZPRO_INDEX domain = ibizpro_indexService.get(ibizpro_index_id);
        IBIZPRO_INDEXDTO dto = ibizpro_indexMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取索引检索草稿", tags = {"索引检索" },  notes = "获取索引检索草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibizpro_indices/getdraft")
    public ResponseEntity<IBIZPRO_INDEXDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(ibizpro_indexMapping.toDto(ibizpro_indexService.getDraft(new IBIZPRO_INDEX())));
    }

    @ApiOperation(value = "检查索引检索", tags = {"索引检索" },  notes = "检查索引检索")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizpro_indices/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IBIZPRO_INDEXDTO ibizpro_indexdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibizpro_indexService.checkKey(ibizpro_indexMapping.toDomain(ibizpro_indexdto)));
    }

    @PreAuthorize("hasPermission(this.ibizpro_indexMapping.toDomain(#ibizpro_indexdto),'pms-IBIZPRO_INDEX-Save')")
    @ApiOperation(value = "保存索引检索", tags = {"索引检索" },  notes = "保存索引检索")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizpro_indices/save")
    public ResponseEntity<Boolean> save(@RequestBody IBIZPRO_INDEXDTO ibizpro_indexdto) {
        return ResponseEntity.status(HttpStatus.OK).body(ibizpro_indexService.save(ibizpro_indexMapping.toDomain(ibizpro_indexdto)));
    }

    @PreAuthorize("hasPermission(this.ibizpro_indexMapping.toDomain(#ibizpro_indexdtos),'pms-IBIZPRO_INDEX-Save')")
    @ApiOperation(value = "批量保存索引检索", tags = {"索引检索" },  notes = "批量保存索引检索")
	@RequestMapping(method = RequestMethod.POST, value = "/ibizpro_indices/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IBIZPRO_INDEXDTO> ibizpro_indexdtos) {
        ibizpro_indexService.saveBatch(ibizpro_indexMapping.toDomain(ibizpro_indexdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBIZPRO_INDEX-searchDefault-all') and hasPermission(#context,'pms-IBIZPRO_INDEX-Get')")
	@ApiOperation(value = "获取数据集", tags = {"索引检索" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibizpro_indices/fetchdefault")
	public ResponseEntity<List<IBIZPRO_INDEXDTO>> fetchDefault(IBIZPRO_INDEXSearchContext context) {
        Page<IBIZPRO_INDEX> domains = ibizpro_indexService.searchDefault(context) ;
        List<IBIZPRO_INDEXDTO> list = ibizpro_indexMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBIZPRO_INDEX-searchDefault-all') and hasPermission(#context,'pms-IBIZPRO_INDEX-Get')")
	@ApiOperation(value = "查询数据集", tags = {"索引检索" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibizpro_indices/searchdefault")
	public ResponseEntity<Page<IBIZPRO_INDEXDTO>> searchDefault(@RequestBody IBIZPRO_INDEXSearchContext context) {
        Page<IBIZPRO_INDEX> domains = ibizpro_indexService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibizpro_indexMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBIZPRO_INDEX-searchIndexDER-all') and hasPermission(#context,'pms-IBIZPRO_INDEX-Get')")
	@ApiOperation(value = "获取数据集2", tags = {"索引检索" } ,notes = "获取数据集2")
    @RequestMapping(method= RequestMethod.GET , value="/ibizpro_indices/fetchindexder")
	public ResponseEntity<List<IBIZPRO_INDEXDTO>> fetchIndexDER(IBIZPRO_INDEXSearchContext context) {
        Page<IBIZPRO_INDEX> domains = ibizpro_indexService.searchIndexDER(context) ;
        List<IBIZPRO_INDEXDTO> list = ibizpro_indexMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IBIZPRO_INDEX-searchIndexDER-all') and hasPermission(#context,'pms-IBIZPRO_INDEX-Get')")
	@ApiOperation(value = "查询数据集2", tags = {"索引检索" } ,notes = "查询数据集2")
    @RequestMapping(method= RequestMethod.POST , value="/ibizpro_indices/searchindexder")
	public ResponseEntity<Page<IBIZPRO_INDEXDTO>> searchIndexDER(@RequestBody IBIZPRO_INDEXSearchContext context) {
        Page<IBIZPRO_INDEX> domains = ibizpro_indexService.searchIndexDER(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibizpro_indexMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}


}

