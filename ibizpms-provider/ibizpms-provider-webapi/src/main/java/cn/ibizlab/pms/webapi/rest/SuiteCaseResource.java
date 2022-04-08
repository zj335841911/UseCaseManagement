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
import cn.ibizlab.pms.core.zentao.domain.SuiteCase;
import cn.ibizlab.pms.core.zentao.service.ISuiteCaseService;
import cn.ibizlab.pms.core.zentao.filter.SuiteCaseSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"套件用例" })
@RestController("WebApi-suitecase")
@RequestMapping("")
public class SuiteCaseResource {

    @Autowired
    public ISuiteCaseService suitecaseService;

    @Autowired
    @Lazy
    public SuiteCaseMapping suitecaseMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-Create-all')")
    @ApiOperation(value = "新建套件用例", tags = {"套件用例" },  notes = "新建套件用例")
	@RequestMapping(method = RequestMethod.POST, value = "/suitecases")
    public ResponseEntity<SuiteCaseDTO> create(@Validated @RequestBody SuiteCaseDTO suitecasedto) {
        SuiteCase domain = suitecaseMapping.toDomain(suitecasedto);
		suitecaseService.create(domain);
        SuiteCaseDTO dto = suitecaseMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-Create-all')")
    @ApiOperation(value = "批量新建套件用例", tags = {"套件用例" },  notes = "批量新建套件用例")
	@RequestMapping(method = RequestMethod.POST, value = "/suitecases/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<SuiteCaseDTO> suitecasedtos) {
        suitecaseService.createBatch(suitecaseMapping.toDomain(suitecasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-Update-all')")
    @ApiOperation(value = "更新套件用例", tags = {"套件用例" },  notes = "更新套件用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/suitecases/{suitecase_id}")
    public ResponseEntity<SuiteCaseDTO> update(@PathVariable("suitecase_id") String suitecase_id, @RequestBody SuiteCaseDTO suitecasedto) {
		SuiteCase domain  = suitecaseMapping.toDomain(suitecasedto);
        domain .setId(suitecase_id);
		suitecaseService.update(domain );
		SuiteCaseDTO dto = suitecaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-Update-all')")
    @ApiOperation(value = "批量更新套件用例", tags = {"套件用例" },  notes = "批量更新套件用例")
	@RequestMapping(method = RequestMethod.PUT, value = "/suitecases/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<SuiteCaseDTO> suitecasedtos) {
        suitecaseService.updateBatch(suitecaseMapping.toDomain(suitecasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-Remove-all')")
    @ApiOperation(value = "删除套件用例", tags = {"套件用例" },  notes = "删除套件用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/suitecases/{suitecase_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("suitecase_id") String suitecase_id) {
         return ResponseEntity.status(HttpStatus.OK).body(suitecaseService.remove(suitecase_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-Remove-all')")
    @ApiOperation(value = "批量删除套件用例", tags = {"套件用例" },  notes = "批量删除套件用例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/suitecases/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        suitecaseService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-Get-all')")
    @ApiOperation(value = "获取套件用例", tags = {"套件用例" },  notes = "获取套件用例")
	@RequestMapping(method = RequestMethod.GET, value = "/suitecases/{suitecase_id}")
    public ResponseEntity<SuiteCaseDTO> get(@PathVariable("suitecase_id") String suitecase_id) {
        SuiteCase domain = suitecaseService.get(suitecase_id);
        SuiteCaseDTO dto = suitecaseMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取套件用例草稿", tags = {"套件用例" },  notes = "获取套件用例草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/suitecases/getdraft")
    public ResponseEntity<SuiteCaseDTO> getDraft(SuiteCaseDTO dto) {
        SuiteCase domain = suitecaseMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(suitecaseMapping.toDto(suitecaseService.getDraft(domain)));
    }

    @ApiOperation(value = "检查套件用例", tags = {"套件用例" },  notes = "检查套件用例")
	@RequestMapping(method = RequestMethod.POST, value = "/suitecases/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody SuiteCaseDTO suitecasedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(suitecaseService.checkKey(suitecaseMapping.toDomain(suitecasedto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-Save-all')")
    @ApiOperation(value = "保存套件用例", tags = {"套件用例" },  notes = "保存套件用例")
	@RequestMapping(method = RequestMethod.POST, value = "/suitecases/save")
    public ResponseEntity<SuiteCaseDTO> save(@RequestBody SuiteCaseDTO suitecasedto) {
        SuiteCase domain = suitecaseMapping.toDomain(suitecasedto);
        suitecaseService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(suitecaseMapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-Save-all')")
    @ApiOperation(value = "批量保存套件用例", tags = {"套件用例" },  notes = "批量保存套件用例")
	@RequestMapping(method = RequestMethod.POST, value = "/suitecases/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<SuiteCaseDTO> suitecasedtos) {
        suitecaseService.saveBatch(suitecaseMapping.toDomain(suitecasedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"套件用例" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/suitecases/fetchdefault")
	public ResponseEntity<List<SuiteCaseDTO>> fetchDefault(SuiteCaseSearchContext context) {
        Page<SuiteCase> domains = suitecaseService.searchDefault(context) ;
        List<SuiteCaseDTO> list = suitecaseMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-SuiteCase-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"套件用例" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/suitecases/searchdefault")
	public ResponseEntity<Page<SuiteCaseDTO>> searchDefault(@RequestBody SuiteCaseSearchContext context) {
        Page<SuiteCase> domains = suitecaseService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(suitecaseMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

