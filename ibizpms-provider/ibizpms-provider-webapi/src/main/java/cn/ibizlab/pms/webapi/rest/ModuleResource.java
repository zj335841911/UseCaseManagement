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
import cn.ibizlab.pms.core.zentao.domain.Module;
import cn.ibizlab.pms.core.zentao.service.IModuleService;
import cn.ibizlab.pms.core.zentao.filter.ModuleSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"模块" })
@RestController("WebApi-module")
@RequestMapping("")
public class ModuleResource {

    @Autowired
    public IModuleService moduleService;

    @Autowired
    @Lazy
    public ModuleMapping moduleMapping;

    @PreAuthorize("hasPermission(this.moduleMapping.toDomain(#moduledto),'pms-Module-Create')")
    @ApiOperation(value = "新建模块", tags = {"模块" },  notes = "新建模块")
	@RequestMapping(method = RequestMethod.POST, value = "/modules")
    public ResponseEntity<ModuleDTO> create(@Validated @RequestBody ModuleDTO moduledto) {
        Module domain = moduleMapping.toDomain(moduledto);
		moduleService.create(domain);
        ModuleDTO dto = moduleMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.moduleMapping.toDomain(#moduledtos),'pms-Module-Create')")
    @ApiOperation(value = "批量新建模块", tags = {"模块" },  notes = "批量新建模块")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ModuleDTO> moduledtos) {
        moduleService.createBatch(moduleMapping.toDomain(moduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.moduleService.get(#module_id),'pms-Module-Update')")
    @ApiOperation(value = "更新模块", tags = {"模块" },  notes = "更新模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/modules/{module_id}")
    public ResponseEntity<ModuleDTO> update(@PathVariable("module_id") Long module_id, @RequestBody ModuleDTO moduledto) {
		Module domain  = moduleMapping.toDomain(moduledto);
        domain .setId(module_id);
		moduleService.update(domain );
		ModuleDTO dto = moduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.moduleService.getModuleByEntities(this.moduleMapping.toDomain(#moduledtos)),'pms-Module-Update')")
    @ApiOperation(value = "批量更新模块", tags = {"模块" },  notes = "批量更新模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/modules/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ModuleDTO> moduledtos) {
        moduleService.updateBatch(moduleMapping.toDomain(moduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.moduleService.get(#module_id),'pms-Module-Remove')")
    @ApiOperation(value = "删除模块", tags = {"模块" },  notes = "删除模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/modules/{module_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("module_id") Long module_id) {
         return ResponseEntity.status(HttpStatus.OK).body(moduleService.remove(module_id));
    }

    @PreAuthorize("hasPermission(this.moduleService.getModuleByIds(#ids),'pms-Module-Remove')")
    @ApiOperation(value = "批量删除模块", tags = {"模块" },  notes = "批量删除模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/modules/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        moduleService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.moduleMapping.toDomain(returnObject.body),'pms-Module-Get')")
    @ApiOperation(value = "获取模块", tags = {"模块" },  notes = "获取模块")
	@RequestMapping(method = RequestMethod.GET, value = "/modules/{module_id}")
    public ResponseEntity<ModuleDTO> get(@PathVariable("module_id") Long module_id) {
        Module domain = moduleService.get(module_id);
        ModuleDTO dto = moduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取模块草稿", tags = {"模块" },  notes = "获取模块草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/modules/getdraft")
    public ResponseEntity<ModuleDTO> getDraft(ModuleDTO dto) {
        Module domain = moduleMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(moduleMapping.toDto(moduleService.getDraft(domain)));
    }

    @ApiOperation(value = "检查模块", tags = {"模块" },  notes = "检查模块")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ModuleDTO moduledto) {
        return  ResponseEntity.status(HttpStatus.OK).body(moduleService.checkKey(moduleMapping.toDomain(moduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Fix-all')")
    @ApiOperation(value = "重建模块路径", tags = {"模块" },  notes = "重建模块路径")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/{module_id}/fix")
    public ResponseEntity<ModuleDTO> fix(@PathVariable("module_id") Long module_id, @RequestBody ModuleDTO moduledto) {
        Module domain = moduleMapping.toDomain(moduledto);
        domain.setId(module_id);
        domain = moduleService.fix(domain);
        moduledto = moduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(moduledto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-Fix-all')")
    @ApiOperation(value = "批量处理[重建模块路径]", tags = {"模块" },  notes = "批量处理[重建模块路径]")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/fixbatch")
    public ResponseEntity<Boolean> fixBatch(@RequestBody List<ModuleDTO> moduledtos) {
        List<Module> domains = moduleMapping.toDomain(moduledtos);
        boolean result = moduleService.fixBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasPermission(this.moduleMapping.toDomain(#moduledto),'pms-Module-Save')")
    @ApiOperation(value = "保存模块", tags = {"模块" },  notes = "保存模块")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/save")
    public ResponseEntity<ModuleDTO> save(@RequestBody ModuleDTO moduledto) {
        Module domain = moduleMapping.toDomain(moduledto);
        moduleService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(moduleMapping.toDto(domain));
    }

    @PreAuthorize("hasPermission(this.moduleMapping.toDomain(#moduledtos),'pms-Module-Save')")
    @ApiOperation(value = "批量保存模块", tags = {"模块" },  notes = "批量保存模块")
	@RequestMapping(method = RequestMethod.POST, value = "/modules/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ModuleDTO> moduledtos) {
        moduleService.saveBatch(moduleMapping.toDomain(moduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchBugModule-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "获取BugModule", tags = {"模块" } ,notes = "获取BugModule")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchbugmodule")
	public ResponseEntity<List<ModuleDTO>> fetchBugModule(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchBugModule(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchBugModule-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "查询BugModule", tags = {"模块" } ,notes = "查询BugModule")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchbugmodule")
	public ResponseEntity<Page<ModuleDTO>> searchBugModule(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchBugModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchBugModuleCodeList-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "获取数据集", tags = {"模块" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchbugmodulecodelist")
	public ResponseEntity<List<ModuleDTO>> fetchBugModuleCodeList(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchBugModuleCodeList(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchBugModuleCodeList-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "查询数据集", tags = {"模块" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchbugmodulecodelist")
	public ResponseEntity<Page<ModuleDTO>> searchBugModuleCodeList(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchBugModuleCodeList(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchDefault-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "获取DEFAULT", tags = {"模块" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchdefault")
	public ResponseEntity<List<ModuleDTO>> fetchDefault(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchDefault(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchDefault-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "查询DEFAULT", tags = {"模块" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchdefault")
	public ResponseEntity<Page<ModuleDTO>> searchDefault(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchDocModule-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "获取文档目录", tags = {"模块" } ,notes = "获取文档目录")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchdocmodule")
	public ResponseEntity<List<ModuleDTO>> fetchDocModule(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchDocModule(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchDocModule-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "查询文档目录", tags = {"模块" } ,notes = "查询文档目录")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchdocmodule")
	public ResponseEntity<Page<ModuleDTO>> searchDocModule(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchDocModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchLine-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "获取产品线", tags = {"模块" } ,notes = "获取产品线")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchline")
	public ResponseEntity<List<ModuleDTO>> fetchLine(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchLine(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchLine-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "查询产品线", tags = {"模块" } ,notes = "查询产品线")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchline")
	public ResponseEntity<Page<ModuleDTO>> searchLine(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchLine(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchStoryModule-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "获取需求模块", tags = {"模块" } ,notes = "获取需求模块")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchstorymodule")
	public ResponseEntity<List<ModuleDTO>> fetchStoryModule(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchStoryModule(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchStoryModule-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "查询需求模块", tags = {"模块" } ,notes = "查询需求模块")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchstorymodule")
	public ResponseEntity<Page<ModuleDTO>> searchStoryModule(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchStoryModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchTaskModule-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "获取任务模块", tags = {"模块" } ,notes = "获取任务模块")
    @RequestMapping(method= RequestMethod.GET , value="/modules/fetchtaskmodule")
	public ResponseEntity<List<ModuleDTO>> fetchTaskModule(ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchTaskModule(context) ;
        List<ModuleDTO> list = moduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Module-searchTaskModule-all') and hasPermission(#context,'pms-Module-Get')")
	@ApiOperation(value = "查询任务模块", tags = {"模块" } ,notes = "查询任务模块")
    @RequestMapping(method= RequestMethod.POST , value="/modules/searchtaskmodule")
	public ResponseEntity<Page<ModuleDTO>> searchTaskModule(@RequestBody ModuleSearchContext context) {
        Page<Module> domains = moduleService.searchTaskModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(moduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

