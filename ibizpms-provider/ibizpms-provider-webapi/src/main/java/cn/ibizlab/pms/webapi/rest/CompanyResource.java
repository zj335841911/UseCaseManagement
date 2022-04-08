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
import cn.ibizlab.pms.core.zentao.domain.Company;
import cn.ibizlab.pms.core.zentao.service.ICompanyService;
import cn.ibizlab.pms.core.zentao.filter.CompanySearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"公司" })
@RestController("WebApi-company")
@RequestMapping("")
public class CompanyResource {

    @Autowired
    public ICompanyService companyService;

    @Autowired
    @Lazy
    public CompanyMapping companyMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-Create-all')")
    @ApiOperation(value = "新建公司", tags = {"公司" },  notes = "新建公司")
	@RequestMapping(method = RequestMethod.POST, value = "/companies")
    public ResponseEntity<CompanyDTO> create(@Validated @RequestBody CompanyDTO companydto) {
        Company domain = companyMapping.toDomain(companydto);
		companyService.create(domain);
        CompanyDTO dto = companyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-Create-all')")
    @ApiOperation(value = "批量新建公司", tags = {"公司" },  notes = "批量新建公司")
	@RequestMapping(method = RequestMethod.POST, value = "/companies/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CompanyDTO> companydtos) {
        companyService.createBatch(companyMapping.toDomain(companydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-Update-all')")
    @ApiOperation(value = "更新公司", tags = {"公司" },  notes = "更新公司")
	@RequestMapping(method = RequestMethod.PUT, value = "/companies/{company_id}")
    public ResponseEntity<CompanyDTO> update(@PathVariable("company_id") Long company_id, @RequestBody CompanyDTO companydto) {
		Company domain  = companyMapping.toDomain(companydto);
        domain .setId(company_id);
		companyService.update(domain );
		CompanyDTO dto = companyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-Update-all')")
    @ApiOperation(value = "批量更新公司", tags = {"公司" },  notes = "批量更新公司")
	@RequestMapping(method = RequestMethod.PUT, value = "/companies/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CompanyDTO> companydtos) {
        companyService.updateBatch(companyMapping.toDomain(companydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-Remove-all')")
    @ApiOperation(value = "删除公司", tags = {"公司" },  notes = "删除公司")
	@RequestMapping(method = RequestMethod.DELETE, value = "/companies/{company_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("company_id") Long company_id) {
         return ResponseEntity.status(HttpStatus.OK).body(companyService.remove(company_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-Remove-all')")
    @ApiOperation(value = "批量删除公司", tags = {"公司" },  notes = "批量删除公司")
	@RequestMapping(method = RequestMethod.DELETE, value = "/companies/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        companyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-Get-all')")
    @ApiOperation(value = "获取公司", tags = {"公司" },  notes = "获取公司")
	@RequestMapping(method = RequestMethod.GET, value = "/companies/{company_id}")
    public ResponseEntity<CompanyDTO> get(@PathVariable("company_id") Long company_id) {
        Company domain = companyService.get(company_id);
        CompanyDTO dto = companyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取公司草稿", tags = {"公司" },  notes = "获取公司草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/companies/getdraft")
    public ResponseEntity<CompanyDTO> getDraft(CompanyDTO dto) {
        Company domain = companyMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(companyMapping.toDto(companyService.getDraft(domain)));
    }

    @ApiOperation(value = "检查公司", tags = {"公司" },  notes = "检查公司")
	@RequestMapping(method = RequestMethod.POST, value = "/companies/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CompanyDTO companydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(companyService.checkKey(companyMapping.toDomain(companydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-Save-all')")
    @ApiOperation(value = "保存公司", tags = {"公司" },  notes = "保存公司")
	@RequestMapping(method = RequestMethod.POST, value = "/companies/save")
    public ResponseEntity<CompanyDTO> save(@RequestBody CompanyDTO companydto) {
        Company domain = companyMapping.toDomain(companydto);
        companyService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(companyMapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-Save-all')")
    @ApiOperation(value = "批量保存公司", tags = {"公司" },  notes = "批量保存公司")
	@RequestMapping(method = RequestMethod.POST, value = "/companies/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CompanyDTO> companydtos) {
        companyService.saveBatch(companyMapping.toDomain(companydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"公司" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/companies/fetchdefault")
	public ResponseEntity<List<CompanyDTO>> fetchDefault(CompanySearchContext context) {
        Page<Company> domains = companyService.searchDefault(context) ;
        List<CompanyDTO> list = companyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Company-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"公司" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/companies/searchdefault")
	public ResponseEntity<Page<CompanyDTO>> searchDefault(@RequestBody CompanySearchContext context) {
        Page<Company> domains = companyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(companyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

