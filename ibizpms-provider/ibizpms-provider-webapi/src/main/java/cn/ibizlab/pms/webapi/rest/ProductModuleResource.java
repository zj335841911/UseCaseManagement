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
import cn.ibizlab.pms.core.ibiz.domain.ProductModule;
import cn.ibizlab.pms.core.ibiz.service.IProductModuleService;
import cn.ibizlab.pms.core.ibiz.filter.ProductModuleSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"需求模块" })
@RestController("WebApi-productmodule")
@RequestMapping("")
public class ProductModuleResource {

    @Autowired
    public IProductModuleService productmoduleService;

    @Autowired
    @Lazy
    public ProductModuleMapping productmoduleMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Create-all')")
    @ApiOperation(value = "新建需求模块", tags = {"需求模块" },  notes = "新建需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/productmodules")
    public ResponseEntity<ProductModuleDTO> create(@Validated @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
		productmoduleService.create(domain);
        ProductModuleDTO dto = productmoduleMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Create-all')")
    @ApiOperation(value = "批量新建需求模块", tags = {"需求模块" },  notes = "批量新建需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/productmodules/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProductModuleDTO> productmoduledtos) {
        productmoduleService.createBatch(productmoduleMapping.toDomain(productmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Update-all')")
    @ApiOperation(value = "更新需求模块", tags = {"需求模块" },  notes = "更新需求模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/productmodules/{productmodule_id}")
    public ResponseEntity<ProductModuleDTO> update(@PathVariable("productmodule_id") Long productmodule_id, @RequestBody ProductModuleDTO productmoduledto) {
		ProductModule domain  = productmoduleMapping.toDomain(productmoduledto);
        domain .setId(productmodule_id);
		productmoduleService.update(domain );
		ProductModuleDTO dto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Update-all')")
    @ApiOperation(value = "批量更新需求模块", tags = {"需求模块" },  notes = "批量更新需求模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/productmodules/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProductModuleDTO> productmoduledtos) {
        productmoduleService.updateBatch(productmoduleMapping.toDomain(productmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Remove-all')")
    @ApiOperation(value = "删除需求模块", tags = {"需求模块" },  notes = "删除需求模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productmodules/{productmodule_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("productmodule_id") Long productmodule_id) {
         return ResponseEntity.status(HttpStatus.OK).body(productmoduleService.remove(productmodule_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Remove-all')")
    @ApiOperation(value = "批量删除需求模块", tags = {"需求模块" },  notes = "批量删除需求模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productmodules/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        productmoduleService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Get-all')")
    @ApiOperation(value = "获取需求模块", tags = {"需求模块" },  notes = "获取需求模块")
	@RequestMapping(method = RequestMethod.GET, value = "/productmodules/{productmodule_id}")
    public ResponseEntity<ProductModuleDTO> get(@PathVariable("productmodule_id") Long productmodule_id) {
        ProductModule domain = productmoduleService.get(productmodule_id);
        ProductModuleDTO dto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取需求模块草稿", tags = {"需求模块" },  notes = "获取需求模块草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/productmodules/getdraft")
    public ResponseEntity<ProductModuleDTO> getDraft(ProductModuleDTO dto) {
        ProductModule domain = productmoduleMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduleMapping.toDto(productmoduleService.getDraft(domain)));
    }

    @ApiOperation(value = "检查需求模块", tags = {"需求模块" },  notes = "检查需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/productmodules/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProductModuleDTO productmoduledto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productmoduleService.checkKey(productmoduleMapping.toDomain(productmoduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Fix-all')")
    @ApiOperation(value = "重建模块路径", tags = {"需求模块" },  notes = "重建模块路径")
	@RequestMapping(method = RequestMethod.POST, value = "/productmodules/{productmodule_id}/fix")
    public ResponseEntity<ProductModuleDTO> fix(@PathVariable("productmodule_id") Long productmodule_id, @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        domain.setId(productmodule_id);
        domain = productmoduleService.fix(domain);
        productmoduledto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduledto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-RemoveModule-all')")
    @ApiOperation(value = "删除模块", tags = {"需求模块" },  notes = "删除模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/productmodules/{productmodule_id}/removemodule")
    public ResponseEntity<ProductModuleDTO> removeModule(@PathVariable("productmodule_id") Long productmodule_id, @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        domain.setId(productmodule_id);
        domain = productmoduleService.removeModule(domain);
        productmoduledto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduledto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Save-all')")
    @ApiOperation(value = "保存需求模块", tags = {"需求模块" },  notes = "保存需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/productmodules/save")
    public ResponseEntity<ProductModuleDTO> save(@RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        productmoduleService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduleMapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Save-all')")
    @ApiOperation(value = "批量保存需求模块", tags = {"需求模块" },  notes = "批量保存需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/productmodules/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProductModuleDTO> productmoduledtos) {
        productmoduleService.saveBatch(productmoduleMapping.toDomain(productmoduledtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-SyncFromIBIZ-all')")
    @ApiOperation(value = "同步Ibz平台模块", tags = {"需求模块" },  notes = "同步Ibz平台模块")
	@RequestMapping(method = RequestMethod.POST, value = "/productmodules/{productmodule_id}/syncfromibiz")
    public ResponseEntity<ProductModuleDTO> syncFromIBIZ(@PathVariable("productmodule_id") Long productmodule_id, @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        domain.setId(productmodule_id);
        domain = productmoduleService.syncFromIBIZ(domain);
        productmoduledto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduledto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-SyncFromIBIZ-all')")
    @ApiOperation(value = "批量处理[同步Ibz平台模块]", tags = {"需求模块" },  notes = "批量处理[同步Ibz平台模块]")
	@RequestMapping(method = RequestMethod.POST, value = "/productmodules/syncfromibizbatch")
    public ResponseEntity<Boolean> syncFromIBIZBatch(@RequestBody List<ProductModuleDTO> productmoduledtos) {
        List<ProductModule> domains = productmoduleMapping.toDomain(productmoduledtos);
        boolean result = productmoduleService.syncFromIBIZBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchByPath-all')")
	@ApiOperation(value = "获取BYPATH", tags = {"需求模块" } ,notes = "获取BYPATH")
    @RequestMapping(method= RequestMethod.GET , value="/productmodules/fetchbypath")
	public ResponseEntity<List<ProductModuleDTO>> fetchByPath(ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchByPath(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchByPath-all')")
	@ApiOperation(value = "查询BYPATH", tags = {"需求模块" } ,notes = "查询BYPATH")
    @RequestMapping(method= RequestMethod.POST , value="/productmodules/searchbypath")
	public ResponseEntity<Page<ProductModuleDTO>> searchByPath(@RequestBody ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchByPath(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"需求模块" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/productmodules/fetchdefault")
	public ResponseEntity<List<ProductModuleDTO>> fetchDefault(ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchDefault(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"需求模块" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/productmodules/searchdefault")
	public ResponseEntity<Page<ProductModuleDTO>> searchDefault(@RequestBody ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchParentModule-all')")
	@ApiOperation(value = "获取父模块", tags = {"需求模块" } ,notes = "获取父模块")
    @RequestMapping(method= RequestMethod.GET , value="/productmodules/fetchparentmodule")
	public ResponseEntity<List<ProductModuleDTO>> fetchParentModule(ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchParentModule(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchParentModule-all')")
	@ApiOperation(value = "查询父模块", tags = {"需求模块" } ,notes = "查询父模块")
    @RequestMapping(method= RequestMethod.POST , value="/productmodules/searchparentmodule")
	public ResponseEntity<Page<ProductModuleDTO>> searchParentModule(@RequestBody ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchParentModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchRoot-all')")
	@ApiOperation(value = "获取根模块", tags = {"需求模块" } ,notes = "获取根模块")
    @RequestMapping(method= RequestMethod.GET , value="/productmodules/fetchroot")
	public ResponseEntity<List<ProductModuleDTO>> fetchRoot(ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchRoot(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchRoot-all')")
	@ApiOperation(value = "查询根模块", tags = {"需求模块" } ,notes = "查询根模块")
    @RequestMapping(method= RequestMethod.POST , value="/productmodules/searchroot")
	public ResponseEntity<Page<ProductModuleDTO>> searchRoot(@RequestBody ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchRoot(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchRoot_NoBranch-all')")
	@ApiOperation(value = "获取根模块_无分支", tags = {"需求模块" } ,notes = "获取根模块_无分支")
    @RequestMapping(method= RequestMethod.GET , value="/productmodules/fetchroot_nobranch")
	public ResponseEntity<List<ProductModuleDTO>> fetchRoot_NoBranch(ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchRoot_NoBranch(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchRoot_NoBranch-all')")
	@ApiOperation(value = "查询根模块_无分支", tags = {"需求模块" } ,notes = "查询根模块_无分支")
    @RequestMapping(method= RequestMethod.POST , value="/productmodules/searchroot_nobranch")
	public ResponseEntity<Page<ProductModuleDTO>> searchRoot_NoBranch(@RequestBody ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchRoot_NoBranch(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchStoryModule-all')")
	@ApiOperation(value = "获取StoryModule", tags = {"需求模块" } ,notes = "获取StoryModule")
    @RequestMapping(method= RequestMethod.GET , value="/productmodules/fetchstorymodule")
	public ResponseEntity<List<ProductModuleDTO>> fetchStoryModule(ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchStoryModule(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchStoryModule-all')")
	@ApiOperation(value = "查询StoryModule", tags = {"需求模块" } ,notes = "查询StoryModule")
    @RequestMapping(method= RequestMethod.POST , value="/productmodules/searchstorymodule")
	public ResponseEntity<Page<ProductModuleDTO>> searchStoryModule(@RequestBody ProductModuleSearchContext context) {
        Page<ProductModule> domains = productmoduleService.searchStoryModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Create-all')")
    @ApiOperation(value = "根据产品建立需求模块", tags = {"需求模块" },  notes = "根据产品建立需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productmodules")
    public ResponseEntity<ProductModuleDTO> createByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        domain.setRoot(product_id);
		productmoduleService.create(domain);
        ProductModuleDTO dto = productmoduleMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Create-all')")
    @ApiOperation(value = "根据产品批量建立需求模块", tags = {"需求模块" },  notes = "根据产品批量建立需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productmodules/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<ProductModuleDTO> productmoduledtos) {
        List<ProductModule> domainlist=productmoduleMapping.toDomain(productmoduledtos);
        for(ProductModule domain:domainlist){
            domain.setRoot(product_id);
        }
        productmoduleService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Update-all')")
    @ApiOperation(value = "根据产品更新需求模块", tags = {"需求模块" },  notes = "根据产品更新需求模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productmodules/{productmodule_id}")
    public ResponseEntity<ProductModuleDTO> updateByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productmodule_id") Long productmodule_id, @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        domain.setRoot(product_id);
        domain.setId(productmodule_id);
		productmoduleService.update(domain);
        ProductModuleDTO dto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Update-all')")
    @ApiOperation(value = "根据产品批量更新需求模块", tags = {"需求模块" },  notes = "根据产品批量更新需求模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productmodules/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<ProductModuleDTO> productmoduledtos) {
        List<ProductModule> domainlist=productmoduleMapping.toDomain(productmoduledtos);
        for(ProductModule domain:domainlist){
            domain.setRoot(product_id);
        }
        productmoduleService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Remove-all')")
    @ApiOperation(value = "根据产品删除需求模块", tags = {"需求模块" },  notes = "根据产品删除需求模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productmodules/{productmodule_id}")
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productmodule_id") Long productmodule_id) {
		return ResponseEntity.status(HttpStatus.OK).body(productmoduleService.remove(productmodule_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Remove-all')")
    @ApiOperation(value = "根据产品批量删除需求模块", tags = {"需求模块" },  notes = "根据产品批量删除需求模块")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/productmodules/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<Long> ids) {
        productmoduleService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Get-all')")
    @ApiOperation(value = "根据产品获取需求模块", tags = {"需求模块" },  notes = "根据产品获取需求模块")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productmodules/{productmodule_id}")
    public ResponseEntity<ProductModuleDTO> getByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productmodule_id") Long productmodule_id) {
        ProductModule domain = productmoduleService.get(productmodule_id);
        ProductModuleDTO dto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品获取需求模块草稿", tags = {"需求模块" },  notes = "根据产品获取需求模块草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/productmodules/getdraft")
    public ResponseEntity<ProductModuleDTO> getDraftByProduct(@PathVariable("product_id") Long product_id, ProductModuleDTO dto) {
        ProductModule domain = productmoduleMapping.toDomain(dto);
        domain.setRoot(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduleMapping.toDto(productmoduleService.getDraft(domain)));
    }

    @ApiOperation(value = "根据产品检查需求模块", tags = {"需求模块" },  notes = "根据产品检查需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productmodules/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductModuleDTO productmoduledto) {
        return  ResponseEntity.status(HttpStatus.OK).body(productmoduleService.checkKey(productmoduleMapping.toDomain(productmoduledto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Fix-all')")
    @ApiOperation(value = "根据产品需求模块", tags = {"需求模块" },  notes = "根据产品需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productmodules/{productmodule_id}/fix")
    public ResponseEntity<ProductModuleDTO> fixByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productmodule_id") Long productmodule_id, @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        domain.setRoot(product_id);
        domain = productmoduleService.fix(domain) ;
        productmoduledto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduledto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-RemoveModule-all')")
    @ApiOperation(value = "根据产品需求模块", tags = {"需求模块" },  notes = "根据产品需求模块")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/productmodules/{productmodule_id}/removemodule")
    public ResponseEntity<ProductModuleDTO> removeModuleByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productmodule_id") Long productmodule_id, @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        domain.setRoot(product_id);
        domain = productmoduleService.removeModule(domain) ;
        productmoduledto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduledto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Save-all')")
    @ApiOperation(value = "根据产品保存需求模块", tags = {"需求模块" },  notes = "根据产品保存需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productmodules/save")
    public ResponseEntity<ProductModuleDTO> saveByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        domain.setRoot(product_id);
        productmoduleService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduleMapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-Save-all')")
    @ApiOperation(value = "根据产品批量保存需求模块", tags = {"需求模块" },  notes = "根据产品批量保存需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productmodules/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<ProductModuleDTO> productmoduledtos) {
        List<ProductModule> domainlist=productmoduleMapping.toDomain(productmoduledtos);
        for(ProductModule domain:domainlist){
             domain.setRoot(product_id);
        }
        productmoduleService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-SyncFromIBIZ-all')")
    @ApiOperation(value = "根据产品需求模块", tags = {"需求模块" },  notes = "根据产品需求模块")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productmodules/{productmodule_id}/syncfromibiz")
    public ResponseEntity<ProductModuleDTO> syncFromIBIZByProduct(@PathVariable("product_id") Long product_id, @PathVariable("productmodule_id") Long productmodule_id, @RequestBody ProductModuleDTO productmoduledto) {
        ProductModule domain = productmoduleMapping.toDomain(productmoduledto);
        domain.setRoot(product_id);
        domain = productmoduleService.syncFromIBIZ(domain) ;
        productmoduledto = productmoduleMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(productmoduledto);
    }
    @ApiOperation(value = "批量处理[根据产品需求模块]", tags = {"需求模块" },  notes = "批量处理[根据产品需求模块]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/productmodules/syncfromibizbatch")
    public ResponseEntity<Boolean> syncFromIBIZByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<ProductModuleDTO> productmoduledtos) {
        List<ProductModule> domains = productmoduleMapping.toDomain(productmoduledtos);
        boolean result = productmoduleService.syncFromIBIZBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchByPath-all')")
	@ApiOperation(value = "根据产品获取BYPATH", tags = {"需求模块" } ,notes = "根据产品获取BYPATH")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productmodules/fetchbypath")
	public ResponseEntity<List<ProductModuleDTO>> fetchProductModuleByPathByProduct(@PathVariable("product_id") Long product_id,ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchByPath(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchByPath-all')")
	@ApiOperation(value = "根据产品查询BYPATH", tags = {"需求模块" } ,notes = "根据产品查询BYPATH")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productmodules/searchbypath")
	public ResponseEntity<Page<ProductModuleDTO>> searchProductModuleByPathByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchByPath(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchDefault-all')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"需求模块" } ,notes = "根据产品获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productmodules/fetchdefault")
	public ResponseEntity<List<ProductModuleDTO>> fetchProductModuleDefaultByProduct(@PathVariable("product_id") Long product_id,ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchDefault(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchDefault-all')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"需求模块" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productmodules/searchdefault")
	public ResponseEntity<Page<ProductModuleDTO>> searchProductModuleDefaultByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchParentModule-all')")
	@ApiOperation(value = "根据产品获取父模块", tags = {"需求模块" } ,notes = "根据产品获取父模块")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productmodules/fetchparentmodule")
	public ResponseEntity<List<ProductModuleDTO>> fetchProductModuleParentModuleByProduct(@PathVariable("product_id") Long product_id,ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchParentModule(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchParentModule-all')")
	@ApiOperation(value = "根据产品查询父模块", tags = {"需求模块" } ,notes = "根据产品查询父模块")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productmodules/searchparentmodule")
	public ResponseEntity<Page<ProductModuleDTO>> searchProductModuleParentModuleByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchParentModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchRoot-all')")
	@ApiOperation(value = "根据产品获取根模块", tags = {"需求模块" } ,notes = "根据产品获取根模块")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productmodules/fetchroot")
	public ResponseEntity<List<ProductModuleDTO>> fetchProductModuleRootByProduct(@PathVariable("product_id") Long product_id,ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchRoot(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchRoot-all')")
	@ApiOperation(value = "根据产品查询根模块", tags = {"需求模块" } ,notes = "根据产品查询根模块")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productmodules/searchroot")
	public ResponseEntity<Page<ProductModuleDTO>> searchProductModuleRootByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchRoot(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchRoot_NoBranch-all')")
	@ApiOperation(value = "根据产品获取根模块_无分支", tags = {"需求模块" } ,notes = "根据产品获取根模块_无分支")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productmodules/fetchroot_nobranch")
	public ResponseEntity<List<ProductModuleDTO>> fetchProductModuleRoot_NoBranchByProduct(@PathVariable("product_id") Long product_id,ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchRoot_NoBranch(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchRoot_NoBranch-all')")
	@ApiOperation(value = "根据产品查询根模块_无分支", tags = {"需求模块" } ,notes = "根据产品查询根模块_无分支")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productmodules/searchroot_nobranch")
	public ResponseEntity<Page<ProductModuleDTO>> searchProductModuleRoot_NoBranchByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchRoot_NoBranch(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchStoryModule-all')")
	@ApiOperation(value = "根据产品获取StoryModule", tags = {"需求模块" } ,notes = "根据产品获取StoryModule")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/productmodules/fetchstorymodule")
	public ResponseEntity<List<ProductModuleDTO>> fetchProductModuleStoryModuleByProduct(@PathVariable("product_id") Long product_id,ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchStoryModule(context) ;
        List<ProductModuleDTO> list = productmoduleMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-ProductModule-searchStoryModule-all')")
	@ApiOperation(value = "根据产品查询StoryModule", tags = {"需求模块" } ,notes = "根据产品查询StoryModule")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/productmodules/searchstorymodule")
	public ResponseEntity<Page<ProductModuleDTO>> searchProductModuleStoryModuleByProduct(@PathVariable("product_id") Long product_id, @RequestBody ProductModuleSearchContext context) {
        context.setN_root_eq(product_id);
        Page<ProductModule> domains = productmoduleService.searchStoryModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(productmoduleMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

