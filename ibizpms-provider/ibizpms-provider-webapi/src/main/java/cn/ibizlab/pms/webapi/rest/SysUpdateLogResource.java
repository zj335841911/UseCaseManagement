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
import cn.ibizlab.pms.core.ibiz.domain.SysUpdateLog;
import cn.ibizlab.pms.core.ibiz.service.ISysUpdateLogService;
import cn.ibizlab.pms.core.ibiz.filter.SysUpdateLogSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"更新日志" })
@RestController("WebApi-sysupdatelog")
@RequestMapping("")
public class SysUpdateLogResource {

    @Autowired
    public ISysUpdateLogService sysupdatelogService;

    @Autowired
    @Lazy
    public SysUpdateLogMapping sysupdatelogMapping;

    @PreAuthorize("hasPermission(this.sysupdatelogMapping.toDomain(#sysupdatelogdto),'pms-SysUpdateLog-Create')")
    @ApiOperation(value = "新建更新日志", tags = {"更新日志" },  notes = "新建更新日志")
	@RequestMapping(method = RequestMethod.POST, value = "/sysupdatelogs")
    public ResponseEntity<SysUpdateLogDTO> create(@Validated @RequestBody SysUpdateLogDTO sysupdatelogdto) {
        SysUpdateLog domain = sysupdatelogMapping.toDomain(sysupdatelogdto);
		sysupdatelogService.create(domain);
        SysUpdateLogDTO dto = sysupdatelogMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.sysupdatelogMapping.toDomain(#sysupdatelogdtos),'pms-SysUpdateLog-Create')")
    @ApiOperation(value = "批量新建更新日志", tags = {"更新日志" },  notes = "批量新建更新日志")
	@RequestMapping(method = RequestMethod.POST, value = "/sysupdatelogs/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<SysUpdateLogDTO> sysupdatelogdtos) {
        sysupdatelogService.createBatch(sysupdatelogMapping.toDomain(sysupdatelogdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "sysupdatelog" , versionfield = "updatedate")
    @PreAuthorize("hasPermission(this.sysupdatelogService.get(#sysupdatelog_id),'pms-SysUpdateLog-Update')")
    @ApiOperation(value = "更新更新日志", tags = {"更新日志" },  notes = "更新更新日志")
	@RequestMapping(method = RequestMethod.PUT, value = "/sysupdatelogs/{sysupdatelog_id}")
    public ResponseEntity<SysUpdateLogDTO> update(@PathVariable("sysupdatelog_id") String sysupdatelog_id, @RequestBody SysUpdateLogDTO sysupdatelogdto) {
		SysUpdateLog domain  = sysupdatelogMapping.toDomain(sysupdatelogdto);
        domain .setSysupdatelogid(sysupdatelog_id);
		sysupdatelogService.update(domain );
		SysUpdateLogDTO dto = sysupdatelogMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.sysupdatelogService.getSysupdatelogByEntities(this.sysupdatelogMapping.toDomain(#sysupdatelogdtos)),'pms-SysUpdateLog-Update')")
    @ApiOperation(value = "批量更新更新日志", tags = {"更新日志" },  notes = "批量更新更新日志")
	@RequestMapping(method = RequestMethod.PUT, value = "/sysupdatelogs/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<SysUpdateLogDTO> sysupdatelogdtos) {
        sysupdatelogService.updateBatch(sysupdatelogMapping.toDomain(sysupdatelogdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.sysupdatelogService.get(#sysupdatelog_id),'pms-SysUpdateLog-Remove')")
    @ApiOperation(value = "删除更新日志", tags = {"更新日志" },  notes = "删除更新日志")
	@RequestMapping(method = RequestMethod.DELETE, value = "/sysupdatelogs/{sysupdatelog_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("sysupdatelog_id") String sysupdatelog_id) {
         return ResponseEntity.status(HttpStatus.OK).body(sysupdatelogService.remove(sysupdatelog_id));
    }

    @PreAuthorize("hasPermission(this.sysupdatelogService.getSysupdatelogByIds(#ids),'pms-SysUpdateLog-Remove')")
    @ApiOperation(value = "批量删除更新日志", tags = {"更新日志" },  notes = "批量删除更新日志")
	@RequestMapping(method = RequestMethod.DELETE, value = "/sysupdatelogs/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        sysupdatelogService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.sysupdatelogMapping.toDomain(returnObject.body),'pms-SysUpdateLog-Get')")
    @ApiOperation(value = "获取更新日志", tags = {"更新日志" },  notes = "获取更新日志")
	@RequestMapping(method = RequestMethod.GET, value = "/sysupdatelogs/{sysupdatelog_id}")
    public ResponseEntity<SysUpdateLogDTO> get(@PathVariable("sysupdatelog_id") String sysupdatelog_id) {
        SysUpdateLog domain = sysupdatelogService.get(sysupdatelog_id);
        SysUpdateLogDTO dto = sysupdatelogMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取更新日志草稿", tags = {"更新日志" },  notes = "获取更新日志草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/sysupdatelogs/getdraft")
    public ResponseEntity<SysUpdateLogDTO> getDraft(SysUpdateLogDTO dto) {
        SysUpdateLog domain = sysupdatelogMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(sysupdatelogMapping.toDto(sysupdatelogService.getDraft(domain)));
    }

    @ApiOperation(value = "检查更新日志", tags = {"更新日志" },  notes = "检查更新日志")
	@RequestMapping(method = RequestMethod.POST, value = "/sysupdatelogs/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody SysUpdateLogDTO sysupdatelogdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(sysupdatelogService.checkKey(sysupdatelogMapping.toDomain(sysupdatelogdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SysUpdateLog-GetLastUpdateInfo-all')")
    @ApiOperation(value = "获取最新更新信息", tags = {"更新日志" },  notes = "获取最新更新信息")
	@RequestMapping(method = RequestMethod.PUT, value = "/sysupdatelogs/{sysupdatelog_id}/getlastupdateinfo")
    public ResponseEntity<SysUpdateLogDTO> getLastUpdateInfo(@PathVariable("sysupdatelog_id") String sysupdatelog_id, @RequestBody SysUpdateLogDTO sysupdatelogdto) {
        SysUpdateLog domain = sysupdatelogMapping.toDomain(sysupdatelogdto);
        domain.setSysupdatelogid(sysupdatelog_id);
        domain = sysupdatelogService.getLastUpdateInfo(domain);
        sysupdatelogdto = sysupdatelogMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(sysupdatelogdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SysUpdateLog-GetLastUpdateInfo-all')")
    @ApiOperation(value = "批量处理[获取最新更新信息]", tags = {"更新日志" },  notes = "批量处理[获取最新更新信息]")
	@RequestMapping(method = RequestMethod.PUT, value = "/sysupdatelogs/getlastupdateinfobatch")
    public ResponseEntity<Boolean> getLastUpdateInfoBatch(@RequestBody List<SysUpdateLogDTO> sysupdatelogdtos) {
        List<SysUpdateLog> domains = sysupdatelogMapping.toDomain(sysupdatelogdtos);
        boolean result = sysupdatelogService.getLastUpdateInfoBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasPermission(this.sysupdatelogMapping.toDomain(#sysupdatelogdto),'pms-SysUpdateLog-Save')")
    @ApiOperation(value = "保存更新日志", tags = {"更新日志" },  notes = "保存更新日志")
	@RequestMapping(method = RequestMethod.POST, value = "/sysupdatelogs/save")
    public ResponseEntity<SysUpdateLogDTO> save(@RequestBody SysUpdateLogDTO sysupdatelogdto) {
        SysUpdateLog domain = sysupdatelogMapping.toDomain(sysupdatelogdto);
        sysupdatelogService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(sysupdatelogMapping.toDto(domain));
    }

    @PreAuthorize("hasPermission(this.sysupdatelogMapping.toDomain(#sysupdatelogdtos),'pms-SysUpdateLog-Save')")
    @ApiOperation(value = "批量保存更新日志", tags = {"更新日志" },  notes = "批量保存更新日志")
	@RequestMapping(method = RequestMethod.POST, value = "/sysupdatelogs/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<SysUpdateLogDTO> sysupdatelogdtos) {
        sysupdatelogService.saveBatch(sysupdatelogMapping.toDomain(sysupdatelogdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SysUpdateLog-searchDefault-all') and hasPermission(#context,'pms-SysUpdateLog-Get')")
	@ApiOperation(value = "获取数据集", tags = {"更新日志" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/sysupdatelogs/fetchdefault")
	public ResponseEntity<List<SysUpdateLogDTO>> fetchDefault(SysUpdateLogSearchContext context) {
        Page<SysUpdateLog> domains = sysupdatelogService.searchDefault(context) ;
        List<SysUpdateLogDTO> list = sysupdatelogMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SysUpdateLog-searchDefault-all') and hasPermission(#context,'pms-SysUpdateLog-Get')")
	@ApiOperation(value = "查询数据集", tags = {"更新日志" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/sysupdatelogs/searchdefault")
	public ResponseEntity<Page<SysUpdateLogDTO>> searchDefault(@RequestBody SysUpdateLogSearchContext context) {
        Page<SysUpdateLog> domains = sysupdatelogService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(sysupdatelogMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

