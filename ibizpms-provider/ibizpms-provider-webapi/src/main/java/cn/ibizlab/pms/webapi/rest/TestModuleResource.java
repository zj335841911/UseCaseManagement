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
import cn.ibizlab.pms.core.ibiz.domain.TestModule;
import cn.ibizlab.pms.core.ibiz.service.ITestModuleService;
import cn.ibizlab.pms.core.ibiz.filter.TestModuleSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"测试模块" })
@RestController("WebApi-testmodule")
@RequestMapping("")
public class TestModuleResource {

    @Autowired
    public ITestModuleService testmoduleService;

    @Autowired
    @Lazy
    public TestModuleMapping testmoduleMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Create-all')")
    @ApiOperation(value = "新建测试模块", tags = {"测试模块" },  notes = "新建测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules")
    public ResponseEntity<TestModuleDTO> create(@Validated @RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
		testmoduleService.create(domain);
        TestModuleDTO dto = testmoduleMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Create-all')")
    @ApiOperation(value = "批量新建测试模块", tags = {"测试模块" },  notes = "批量新建测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TestModuleDTO> testmoduledtos) {
        testmoduleService.createBatch(testmoduleMapping.toDomain(testmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Update-all')")
    @ApiOperation(value = "更新测试模块", tags = {"测试模块" },  notes = "更新测试模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/testmodules/{testmodule_id}")
    public ResponseEntity<TestModuleDTO> update(@PathVariable("testmodule_id") Long testmodule_id, @RequestBody TestModuleDTO testmoduledto) {
		TestModule domain  = testmoduleMapping.toDomain(testmoduledto);
        domain .setId(testmodule_id);
		testmoduleService.update(domain );
		TestModuleDTO dto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Update-all')")
    @ApiOperation(value = "批量更新测试模块", tags = {"测试模块" },  notes = "批量更新测试模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/testmodules/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TestModuleDTO> testmoduledtos) {
        testmoduleService.updateBatch(testmoduleMapping.toDomain(testmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Remove-all')")
    @ApiOperation(value = "删除测试模块", tags = {"测试模块" },  notes = "删除测试模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testmodules/{testmodule_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("testmodule_id") Long testmodule_id) {
         return ResponseEntity.status(HttpStatus.OK).body(testmoduleService.remove(testmodule_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Remove-all')")
    @ApiOperation(value = "批量删除测试模块", tags = {"测试模块" },  notes = "批量删除测试模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/testmodules/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        testmoduleService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Get-all')")
    @ApiOperation(value = "获取测试模块", tags = {"测试模块" },  notes = "获取测试模块")
	@RequestMapping(method = RequestMethod.GET, value = "/testmodules/{testmodule_id}")
    public ResponseEntity<TestModuleDTO> get(@PathVariable("testmodule_id") Long testmodule_id) {
        TestModule domain = testmoduleService.get(testmodule_id);
        TestModuleDTO dto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取测试模块草稿", tags = {"测试模块" },  notes = "获取测试模块草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/testmodules/getdraft")
    public ResponseEntity<TestModuleDTO> getDraft(TestModuleDTO dto) {
        TestModule domain = testmoduleMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(testmoduleMapping.toDto(testmoduleService.getDraft(domain)));
    }

    @ApiOperation(value = "检查测试模块", tags = {"测试模块" },  notes = "检查测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TestModuleDTO testmoduledto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testmoduleService.checkKey(testmoduleMapping.toDomain(testmoduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Fix-all')")
    @ApiOperation(value = "重建模块路径", tags = {"测试模块" },  notes = "重建模块路径")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/{testmodule_id}/fix")
    public ResponseEntity<TestModuleDTO> fix(@PathVariable("testmodule_id") Long testmodule_id, @RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
        domain.setId(testmodule_id);
        domain = testmoduleService.fix(domain);
        testmoduledto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testmoduledto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-RemoveModule-all')")
    @ApiOperation(value = "删除模块", tags = {"测试模块" },  notes = "删除模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/testmodules/{testmodule_id}/removemodule")
    public ResponseEntity<TestModuleDTO> removeModule(@PathVariable("testmodule_id") Long testmodule_id, @RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
        domain.setId(testmodule_id);
        domain = testmoduleService.removeModule(domain);
        testmoduledto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testmoduledto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Save-all')")
    @ApiOperation(value = "保存测试模块", tags = {"测试模块" },  notes = "保存测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/save")
    public ResponseEntity<TestModuleDTO> save(@RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
        testmoduleService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testmoduleMapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Save-all')")
    @ApiOperation(value = "批量保存测试模块", tags = {"测试模块" },  notes = "批量保存测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/testmodules/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TestModuleDTO> testmoduledtos) {
        testmoduleService.saveBatch(testmoduleMapping.toDomain(testmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchByPath-all')")
	@ApiOperation(value = "获取BYPATH", tags = {"测试模块" } ,notes = "获取BYPATH")
    @RequestMapping(method= RequestMethod.GET , value="/testmodules/fetchbypath")
	public ResponseEntity<List<TestModuleDTO>> fetchByPath(TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchByPath(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchByPath-all')")
	@ApiOperation(value = "查询BYPATH", tags = {"测试模块" } ,notes = "查询BYPATH")
    @RequestMapping(method= RequestMethod.POST , value="/testmodules/searchbypath")
	public ResponseEntity<Page<TestModuleDTO>> searchByPath(@RequestBody TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchByPath(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"测试模块" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/testmodules/fetchdefault")
	public ResponseEntity<List<TestModuleDTO>> fetchDefault(TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchDefault(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"测试模块" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/testmodules/searchdefault")
	public ResponseEntity<Page<TestModuleDTO>> searchDefault(@RequestBody TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchParentModule-all')")
	@ApiOperation(value = "获取父模块", tags = {"测试模块" } ,notes = "获取父模块")
    @RequestMapping(method= RequestMethod.GET , value="/testmodules/fetchparentmodule")
	public ResponseEntity<List<TestModuleDTO>> fetchParentModule(TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchParentModule(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchParentModule-all')")
	@ApiOperation(value = "查询父模块", tags = {"测试模块" } ,notes = "查询父模块")
    @RequestMapping(method= RequestMethod.POST , value="/testmodules/searchparentmodule")
	public ResponseEntity<Page<TestModuleDTO>> searchParentModule(@RequestBody TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchParentModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchRoot-all')")
	@ApiOperation(value = "获取根模块", tags = {"测试模块" } ,notes = "获取根模块")
    @RequestMapping(method= RequestMethod.GET , value="/testmodules/fetchroot")
	public ResponseEntity<List<TestModuleDTO>> fetchRoot(TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchRoot(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchRoot-all')")
	@ApiOperation(value = "查询根模块", tags = {"测试模块" } ,notes = "查询根模块")
    @RequestMapping(method= RequestMethod.POST , value="/testmodules/searchroot")
	public ResponseEntity<Page<TestModuleDTO>> searchRoot(@RequestBody TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchRoot(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchRoot_NoBranch-all')")
	@ApiOperation(value = "获取根模块_无分支", tags = {"测试模块" } ,notes = "获取根模块_无分支")
    @RequestMapping(method= RequestMethod.GET , value="/testmodules/fetchroot_nobranch")
	public ResponseEntity<List<TestModuleDTO>> fetchRoot_NoBranch(TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchRoot_NoBranch(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchRoot_NoBranch-all')")
	@ApiOperation(value = "查询根模块_无分支", tags = {"测试模块" } ,notes = "查询根模块_无分支")
    @RequestMapping(method= RequestMethod.POST , value="/testmodules/searchroot_nobranch")
	public ResponseEntity<Page<TestModuleDTO>> searchRoot_NoBranch(@RequestBody TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchRoot_NoBranch(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchTestModule-all')")
	@ApiOperation(value = "获取TestModule", tags = {"测试模块" } ,notes = "获取TestModule")
    @RequestMapping(method= RequestMethod.GET , value="/testmodules/fetchtestmodule")
	public ResponseEntity<List<TestModuleDTO>> fetchTestModule(TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchTestModule(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchTestModule-all')")
	@ApiOperation(value = "查询TestModule", tags = {"测试模块" } ,notes = "查询TestModule")
    @RequestMapping(method= RequestMethod.POST , value="/testmodules/searchtestmodule")
	public ResponseEntity<Page<TestModuleDTO>> searchTestModule(@RequestBody TestModuleSearchContext context) {
        Page<TestModule> domains = testmoduleService.searchTestModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Create-all')")
    @ApiOperation(value = "根据产品建立测试模块", tags = {"测试模块" },  notes = "根据产品建立测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testmodules")
    public ResponseEntity<TestModuleDTO> createByProduct(@PathVariable("product_id") Long product_id, @RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
        domain.setRoot(product_id);
		testmoduleService.create(domain);
        TestModuleDTO dto = testmoduleMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Create-all')")
    @ApiOperation(value = "根据产品批量建立测试模块", tags = {"测试模块" },  notes = "根据产品批量建立测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testmodules/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<TestModuleDTO> testmoduledtos) {
        List<TestModule> domainlist=testmoduleMapping.toDomain(testmoduledtos);
        for(TestModule domain:domainlist){
            domain.setRoot(product_id);
        }
        testmoduleService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Update-all')")
    @ApiOperation(value = "根据产品更新测试模块", tags = {"测试模块" },  notes = "根据产品更新测试模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/testmodules/{testmodule_id}")
    public ResponseEntity<TestModuleDTO> updateByProduct(@PathVariable("product_id") Long product_id, @PathVariable("testmodule_id") Long testmodule_id, @RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
        domain.setRoot(product_id);
        domain.setId(testmodule_id);
		testmoduleService.update(domain);
        TestModuleDTO dto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Update-all')")
    @ApiOperation(value = "根据产品批量更新测试模块", tags = {"测试模块" },  notes = "根据产品批量更新测试模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/testmodules/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<TestModuleDTO> testmoduledtos) {
        List<TestModule> domainlist=testmoduleMapping.toDomain(testmoduledtos);
        for(TestModule domain:domainlist){
            domain.setRoot(product_id);
        }
        testmoduleService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Remove-all')")
    @ApiOperation(value = "根据产品删除测试模块", tags = {"测试模块" },  notes = "根据产品删除测试模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/testmodules/{testmodule_id}")
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") Long product_id, @PathVariable("testmodule_id") Long testmodule_id) {
		return ResponseEntity.status(HttpStatus.OK).body(testmoduleService.remove(testmodule_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Remove-all')")
    @ApiOperation(value = "根据产品批量删除测试模块", tags = {"测试模块" },  notes = "根据产品批量删除测试模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/testmodules/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<Long> ids) {
        testmoduleService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Get-all')")
    @ApiOperation(value = "根据产品获取测试模块", tags = {"测试模块" },  notes = "根据产品获取测试模块")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/testmodules/{testmodule_id}")
    public ResponseEntity<TestModuleDTO> getByProduct(@PathVariable("product_id") Long product_id, @PathVariable("testmodule_id") Long testmodule_id) {
        TestModule domain = testmoduleService.get(testmodule_id);
        TestModuleDTO dto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品获取测试模块草稿", tags = {"测试模块" },  notes = "根据产品获取测试模块草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/testmodules/getdraft")
    public ResponseEntity<TestModuleDTO> getDraftByProduct(@PathVariable("product_id") Long product_id, TestModuleDTO dto) {
        TestModule domain = testmoduleMapping.toDomain(dto);
        domain.setRoot(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(testmoduleMapping.toDto(testmoduleService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品检查测试模块", tags = {"测试模块" },  notes = "根据产品检查测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testmodules/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") Long product_id, @RequestBody TestModuleDTO testmoduledto) {
        return  ResponseEntity.status(HttpStatus.OK).body(testmoduleService.checkKey(testmoduleMapping.toDomain(testmoduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Fix-all')")
    @ApiOperation(value = "根据产品测试模块", tags = {"测试模块" },  notes = "根据产品测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testmodules/{testmodule_id}/fix")
    public ResponseEntity<TestModuleDTO> fixByProduct(@PathVariable("product_id") Long product_id, @PathVariable("testmodule_id") Long testmodule_id, @RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
        domain.setRoot(product_id);
        domain = testmoduleService.fix(domain) ;
        testmoduledto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testmoduledto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-RemoveModule-all')")
    @ApiOperation(value = "根据产品测试模块", tags = {"测试模块" },  notes = "根据产品测试模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/testmodules/{testmodule_id}/removemodule")
    public ResponseEntity<TestModuleDTO> removeModuleByProduct(@PathVariable("product_id") Long product_id, @PathVariable("testmodule_id") Long testmodule_id, @RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
        domain.setRoot(product_id);
        domain = testmoduleService.removeModule(domain) ;
        testmoduledto = testmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testmoduledto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Save-all')")
    @ApiOperation(value = "根据产品保存测试模块", tags = {"测试模块" },  notes = "根据产品保存测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testmodules/save")
    public ResponseEntity<TestModuleDTO> saveByProduct(@PathVariable("product_id") Long product_id, @RequestBody TestModuleDTO testmoduledto) {
        TestModule domain = testmoduleMapping.toDomain(testmoduledto);
        domain.setRoot(product_id);
        testmoduleService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(testmoduleMapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-Save-all')")
    @ApiOperation(value = "根据产品批量保存测试模块", tags = {"测试模块" },  notes = "根据产品批量保存测试模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/testmodules/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<TestModuleDTO> testmoduledtos) {
        List<TestModule> domainlist=testmoduleMapping.toDomain(testmoduledtos);
        for(TestModule domain:domainlist){
             domain.setRoot(product_id);
        }
        testmoduleService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchByPath-all')")
	@ApiOperation(value = "根据产品获取BYPATH", tags = {"测试模块" } ,notes = "根据产品获取BYPATH")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/testmodules/fetchbypath")
	public ResponseEntity<List<TestModuleDTO>> fetchTestModuleByPathByProduct(@PathVariable("product_id") Long product_id,TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchByPath(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchByPath-all')")
	@ApiOperation(value = "根据产品查询BYPATH", tags = {"测试模块" } ,notes = "根据产品查询BYPATH")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/testmodules/searchbypath")
	public ResponseEntity<Page<TestModuleDTO>> searchTestModuleByPathByProduct(@PathVariable("product_id") Long product_id, @RequestBody TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchByPath(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchDefault-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"测试模块" } ,notes = "根据产品获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/testmodules/fetchdefault")
	public ResponseEntity<List<TestModuleDTO>> fetchTestModuleDefaultByProduct(@PathVariable("product_id") Long product_id,TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchDefault(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchDefault-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"测试模块" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/testmodules/searchdefault")
	public ResponseEntity<Page<TestModuleDTO>> searchTestModuleDefaultByProduct(@PathVariable("product_id") Long product_id, @RequestBody TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchParentModule-all')")
	@ApiOperation(value = "根据产品获取父模块", tags = {"测试模块" } ,notes = "根据产品获取父模块")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/testmodules/fetchparentmodule")
	public ResponseEntity<List<TestModuleDTO>> fetchTestModuleParentModuleByProduct(@PathVariable("product_id") Long product_id,TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchParentModule(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchParentModule-all')")
	@ApiOperation(value = "根据产品查询父模块", tags = {"测试模块" } ,notes = "根据产品查询父模块")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/testmodules/searchparentmodule")
	public ResponseEntity<Page<TestModuleDTO>> searchTestModuleParentModuleByProduct(@PathVariable("product_id") Long product_id, @RequestBody TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchParentModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchRoot-all')")
	@ApiOperation(value = "根据产品获取根模块", tags = {"测试模块" } ,notes = "根据产品获取根模块")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/testmodules/fetchroot")
	public ResponseEntity<List<TestModuleDTO>> fetchTestModuleRootByProduct(@PathVariable("product_id") Long product_id,TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchRoot(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchRoot-all')")
	@ApiOperation(value = "根据产品查询根模块", tags = {"测试模块" } ,notes = "根据产品查询根模块")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/testmodules/searchroot")
	public ResponseEntity<Page<TestModuleDTO>> searchTestModuleRootByProduct(@PathVariable("product_id") Long product_id, @RequestBody TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchRoot(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchRoot_NoBranch-all')")
	@ApiOperation(value = "根据产品获取根模块_无分支", tags = {"测试模块" } ,notes = "根据产品获取根模块_无分支")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/testmodules/fetchroot_nobranch")
	public ResponseEntity<List<TestModuleDTO>> fetchTestModuleRoot_NoBranchByProduct(@PathVariable("product_id") Long product_id,TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchRoot_NoBranch(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchRoot_NoBranch-all')")
	@ApiOperation(value = "根据产品查询根模块_无分支", tags = {"测试模块" } ,notes = "根据产品查询根模块_无分支")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/testmodules/searchroot_nobranch")
	public ResponseEntity<Page<TestModuleDTO>> searchTestModuleRoot_NoBranchByProduct(@PathVariable("product_id") Long product_id, @RequestBody TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchRoot_NoBranch(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchTestModule-all')")
	@ApiOperation(value = "根据产品获取TestModule", tags = {"测试模块" } ,notes = "根据产品获取TestModule")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/testmodules/fetchtestmodule")
	public ResponseEntity<List<TestModuleDTO>> fetchTestModuleTestModuleByProduct(@PathVariable("product_id") Long product_id,TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchTestModule(context) ;
        List<TestModuleDTO> list = testmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-TestModule-searchTestModule-all')")
	@ApiOperation(value = "根据产品查询TestModule", tags = {"测试模块" } ,notes = "根据产品查询TestModule")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/testmodules/searchtestmodule")
	public ResponseEntity<Page<TestModuleDTO>> searchTestModuleTestModuleByProduct(@PathVariable("product_id") Long product_id, @RequestBody TestModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<TestModule> domains = testmoduleService.searchTestModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(testmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

