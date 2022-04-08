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
import cn.ibizlab.pms.core.ibizpro.domain.IbzproConfig;
import cn.ibizlab.pms.core.ibizpro.service.IIbzproConfigService;
import cn.ibizlab.pms.core.ibizpro.filter.IbzproConfigSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"系统配置表" })
@RestController("WebApi-ibzproconfig")
@RequestMapping("")
public class IbzproConfigResource {

    @Autowired
    public IIbzproConfigService ibzproconfigService;

    @Autowired
    @Lazy
    public IbzproConfigMapping ibzproconfigMapping;

    @PreAuthorize("hasPermission(this.ibzproconfigMapping.toDomain(#ibzproconfigdto),'pms-IbzproConfig-Create')")
    @ApiOperation(value = "新建系统配置表", tags = {"系统配置表" },  notes = "新建系统配置表")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproconfigs")
    public ResponseEntity<IbzproConfigDTO> create(@Validated @RequestBody IbzproConfigDTO ibzproconfigdto) {
        IbzproConfig domain = ibzproconfigMapping.toDomain(ibzproconfigdto);
		ibzproconfigService.create(domain);
        IbzproConfigDTO dto = ibzproconfigMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzproconfigMapping.toDomain(#ibzproconfigdtos),'pms-IbzproConfig-Create')")
    @ApiOperation(value = "批量新建系统配置表", tags = {"系统配置表" },  notes = "批量新建系统配置表")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproconfigs/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IbzproConfigDTO> ibzproconfigdtos) {
        ibzproconfigService.createBatch(ibzproconfigMapping.toDomain(ibzproconfigdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "ibzproconfig" , versionfield = "updatedate")
    @PreAuthorize("hasPermission(this.ibzproconfigService.get(#ibzproconfig_id),'pms-IbzproConfig-Update')")
    @ApiOperation(value = "更新系统配置表", tags = {"系统配置表" },  notes = "更新系统配置表")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzproconfigs/{ibzproconfig_id}")
    public ResponseEntity<IbzproConfigDTO> update(@PathVariable("ibzproconfig_id") String ibzproconfig_id, @RequestBody IbzproConfigDTO ibzproconfigdto) {
		IbzproConfig domain  = ibzproconfigMapping.toDomain(ibzproconfigdto);
        domain .setIbzproconfigid(ibzproconfig_id);
		ibzproconfigService.update(domain );
		IbzproConfigDTO dto = ibzproconfigMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzproconfigService.getIbzproconfigByEntities(this.ibzproconfigMapping.toDomain(#ibzproconfigdtos)),'pms-IbzproConfig-Update')")
    @ApiOperation(value = "批量更新系统配置表", tags = {"系统配置表" },  notes = "批量更新系统配置表")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzproconfigs/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IbzproConfigDTO> ibzproconfigdtos) {
        ibzproconfigService.updateBatch(ibzproconfigMapping.toDomain(ibzproconfigdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.ibzproconfigService.get(#ibzproconfig_id),'pms-IbzproConfig-Remove')")
    @ApiOperation(value = "删除系统配置表", tags = {"系统配置表" },  notes = "删除系统配置表")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzproconfigs/{ibzproconfig_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibzproconfig_id") String ibzproconfig_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibzproconfigService.remove(ibzproconfig_id));
    }

    @PreAuthorize("hasPermission(this.ibzproconfigService.getIbzproconfigByIds(#ids),'pms-IbzproConfig-Remove')")
    @ApiOperation(value = "批量删除系统配置表", tags = {"系统配置表" },  notes = "批量删除系统配置表")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzproconfigs/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        ibzproconfigService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.ibzproconfigMapping.toDomain(returnObject.body),'pms-IbzproConfig-Get')")
    @ApiOperation(value = "获取系统配置表", tags = {"系统配置表" },  notes = "获取系统配置表")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzproconfigs/{ibzproconfig_id}")
    public ResponseEntity<IbzproConfigDTO> get(@PathVariable("ibzproconfig_id") String ibzproconfig_id) {
        IbzproConfig domain = ibzproconfigService.get(ibzproconfig_id);
        IbzproConfigDTO dto = ibzproconfigMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取系统配置表草稿", tags = {"系统配置表" },  notes = "获取系统配置表草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzproconfigs/getdraft")
    public ResponseEntity<IbzproConfigDTO> getDraft(IbzproConfigDTO dto) {
        IbzproConfig domain = ibzproconfigMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(ibzproconfigMapping.toDto(ibzproconfigService.getDraft(domain)));
    }

    @ApiOperation(value = "检查系统配置表", tags = {"系统配置表" },  notes = "检查系统配置表")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproconfigs/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IbzproConfigDTO ibzproconfigdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzproconfigService.checkKey(ibzproconfigMapping.toDomain(ibzproconfigdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzproConfig-GetSystemConfig-all')")
    @ApiOperation(value = "获取系统配置", tags = {"系统配置表" },  notes = "获取系统配置")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzproconfigs/{ibzproconfig_id}/getsystemconfig")
    public ResponseEntity<IbzproConfigDTO> getSystemConfig(@PathVariable("ibzproconfig_id") String ibzproconfig_id, @RequestBody IbzproConfigDTO ibzproconfigdto) {
        IbzproConfig domain = ibzproconfigMapping.toDomain(ibzproconfigdto);
        domain.setIbzproconfigid(ibzproconfig_id);
        domain = ibzproconfigService.getSystemConfig(domain);
        ibzproconfigdto = ibzproconfigMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzproconfigdto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzproConfig-GetSystemConfig-all')")
    @ApiOperation(value = "批量处理[获取系统配置]", tags = {"系统配置表" },  notes = "批量处理[获取系统配置]")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzproconfigs/getsystemconfigbatch")
    public ResponseEntity<Boolean> getSystemConfigBatch(@RequestBody List<IbzproConfigDTO> ibzproconfigdtos) {
        List<IbzproConfig> domains = ibzproconfigMapping.toDomain(ibzproconfigdtos);
        boolean result = ibzproconfigService.getSystemConfigBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasPermission(this.ibzproconfigMapping.toDomain(#ibzproconfigdto),'pms-IbzproConfig-Save')")
    @ApiOperation(value = "保存系统配置表", tags = {"系统配置表" },  notes = "保存系统配置表")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproconfigs/save")
    public ResponseEntity<IbzproConfigDTO> save(@RequestBody IbzproConfigDTO ibzproconfigdto) {
        IbzproConfig domain = ibzproconfigMapping.toDomain(ibzproconfigdto);
        ibzproconfigService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzproconfigMapping.toDto(domain));
    }

    @PreAuthorize("hasPermission(this.ibzproconfigMapping.toDomain(#ibzproconfigdtos),'pms-IbzproConfig-Save')")
    @ApiOperation(value = "批量保存系统配置表", tags = {"系统配置表" },  notes = "批量保存系统配置表")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzproconfigs/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IbzproConfigDTO> ibzproconfigdtos) {
        ibzproconfigService.saveBatch(ibzproconfigMapping.toDomain(ibzproconfigdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzproConfig-searchDefault-all') and hasPermission(#context,'pms-IbzproConfig-Get')")
	@ApiOperation(value = "获取数据集", tags = {"系统配置表" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibzproconfigs/fetchdefault")
	public ResponseEntity<List<IbzproConfigDTO>> fetchDefault(IbzproConfigSearchContext context) {
        Page<IbzproConfig> domains = ibzproconfigService.searchDefault(context) ;
        List<IbzproConfigDTO> list = ibzproconfigMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzproConfig-searchDefault-all') and hasPermission(#context,'pms-IbzproConfig-Get')")
	@ApiOperation(value = "查询数据集", tags = {"系统配置表" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibzproconfigs/searchdefault")
	public ResponseEntity<Page<IbzproConfigDTO>> searchDefault(@RequestBody IbzproConfigSearchContext context) {
        Page<IbzproConfig> domains = ibzproconfigService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzproconfigMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

