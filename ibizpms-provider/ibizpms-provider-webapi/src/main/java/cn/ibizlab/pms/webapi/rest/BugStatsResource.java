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
import cn.ibizlab.pms.core.ibiz.domain.BugStats;
import cn.ibizlab.pms.core.ibiz.service.IBugStatsService;
import cn.ibizlab.pms.core.ibiz.filter.BugStatsSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"Bug统计" })
@RestController("WebApi-bugstats")
@RequestMapping("")
public class BugStatsResource {

    @Autowired
    public IBugStatsService bugstatsService;

    @Autowired
    @Lazy
    public BugStatsMapping bugstatsMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-Create-all')")
    @ApiOperation(value = "新建Bug统计", tags = {"Bug统计" },  notes = "新建Bug统计")
	@RequestMapping(method = RequestMethod.POST, value = "/bugstats")
    public ResponseEntity<BugStatsDTO> create(@Validated @RequestBody BugStatsDTO bugstatsdto) {
        BugStats domain = bugstatsMapping.toDomain(bugstatsdto);
		bugstatsService.create(domain);
        BugStatsDTO dto = bugstatsMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-Create-all')")
    @ApiOperation(value = "批量新建Bug统计", tags = {"Bug统计" },  notes = "批量新建Bug统计")
	@RequestMapping(method = RequestMethod.POST, value = "/bugstats/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<BugStatsDTO> bugstatsdtos) {
        bugstatsService.createBatch(bugstatsMapping.toDomain(bugstatsdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-Update-all')")
    @ApiOperation(value = "更新Bug统计", tags = {"Bug统计" },  notes = "更新Bug统计")
	@RequestMapping(method = RequestMethod.PUT, value = "/bugstats/{bugstats_id}")
    public ResponseEntity<BugStatsDTO> update(@PathVariable("bugstats_id") Long bugstats_id, @RequestBody BugStatsDTO bugstatsdto) {
		BugStats domain  = bugstatsMapping.toDomain(bugstatsdto);
        domain .setId(bugstats_id);
		bugstatsService.update(domain );
		BugStatsDTO dto = bugstatsMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-Update-all')")
    @ApiOperation(value = "批量更新Bug统计", tags = {"Bug统计" },  notes = "批量更新Bug统计")
	@RequestMapping(method = RequestMethod.PUT, value = "/bugstats/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<BugStatsDTO> bugstatsdtos) {
        bugstatsService.updateBatch(bugstatsMapping.toDomain(bugstatsdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-Remove-all')")
    @ApiOperation(value = "删除Bug统计", tags = {"Bug统计" },  notes = "删除Bug统计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/bugstats/{bugstats_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("bugstats_id") Long bugstats_id) {
         return ResponseEntity.status(HttpStatus.OK).body(bugstatsService.remove(bugstats_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-Remove-all')")
    @ApiOperation(value = "批量删除Bug统计", tags = {"Bug统计" },  notes = "批量删除Bug统计")
	@RequestMapping(method = RequestMethod.DELETE, value = "/bugstats/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        bugstatsService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-Get-all')")
    @ApiOperation(value = "获取Bug统计", tags = {"Bug统计" },  notes = "获取Bug统计")
	@RequestMapping(method = RequestMethod.GET, value = "/bugstats/{bugstats_id}")
    public ResponseEntity<BugStatsDTO> get(@PathVariable("bugstats_id") Long bugstats_id) {
        BugStats domain = bugstatsService.get(bugstats_id);
        BugStatsDTO dto = bugstatsMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取Bug统计草稿", tags = {"Bug统计" },  notes = "获取Bug统计草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/bugstats/getdraft")
    public ResponseEntity<BugStatsDTO> getDraft(BugStatsDTO dto) {
        BugStats domain = bugstatsMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(bugstatsMapping.toDto(bugstatsService.getDraft(domain)));
    }

    @ApiOperation(value = "检查Bug统计", tags = {"Bug统计" },  notes = "检查Bug统计")
	@RequestMapping(method = RequestMethod.POST, value = "/bugstats/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody BugStatsDTO bugstatsdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(bugstatsService.checkKey(bugstatsMapping.toDomain(bugstatsdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-Save-all')")
    @ApiOperation(value = "保存Bug统计", tags = {"Bug统计" },  notes = "保存Bug统计")
	@RequestMapping(method = RequestMethod.POST, value = "/bugstats/save")
    public ResponseEntity<BugStatsDTO> save(@RequestBody BugStatsDTO bugstatsdto) {
        BugStats domain = bugstatsMapping.toDomain(bugstatsdto);
        bugstatsService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(bugstatsMapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-Save-all')")
    @ApiOperation(value = "批量保存Bug统计", tags = {"Bug统计" },  notes = "批量保存Bug统计")
	@RequestMapping(method = RequestMethod.POST, value = "/bugstats/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<BugStatsDTO> bugstatsdtos) {
        bugstatsService.saveBatch(bugstatsMapping.toDomain(bugstatsdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchBugCountInResolution-all')")
	@ApiOperation(value = "获取Bug在每个解决方案的Bug数", tags = {"Bug统计" } ,notes = "获取Bug在每个解决方案的Bug数")
    @RequestMapping(method= RequestMethod.GET , value="/bugstats/fetchbugcountinresolution")
	public ResponseEntity<List<BugStatsDTO>> fetchBugCountInResolution(BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchBugCountInResolution(context) ;
        List<BugStatsDTO> list = bugstatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchBugCountInResolution-all')")
	@ApiOperation(value = "查询Bug在每个解决方案的Bug数", tags = {"Bug统计" } ,notes = "查询Bug在每个解决方案的Bug数")
    @RequestMapping(method= RequestMethod.POST , value="/bugstats/searchbugcountinresolution")
	public ResponseEntity<Page<BugStatsDTO>> searchBugCountInResolution(@RequestBody BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchBugCountInResolution(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugstatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchBugResolvedBy-all')")
	@ApiOperation(value = "获取Bug完成表", tags = {"Bug统计" } ,notes = "获取Bug完成表")
    @RequestMapping(method= RequestMethod.GET , value="/bugstats/fetchbugresolvedby")
	public ResponseEntity<List<BugStatsDTO>> fetchBugResolvedBy(BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchBugResolvedBy(context) ;
        List<BugStatsDTO> list = bugstatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchBugResolvedBy-all')")
	@ApiOperation(value = "查询Bug完成表", tags = {"Bug统计" } ,notes = "查询Bug完成表")
    @RequestMapping(method= RequestMethod.POST , value="/bugstats/searchbugresolvedby")
	public ResponseEntity<Page<BugStatsDTO>> searchBugResolvedBy(@RequestBody BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchBugResolvedBy(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugstatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchBugResolvedGird-all')")
	@ApiOperation(value = "获取bug解决汇总表", tags = {"Bug统计" } ,notes = "获取bug解决汇总表")
    @RequestMapping(method= RequestMethod.GET , value="/bugstats/fetchbugresolvedgird")
	public ResponseEntity<List<BugStatsDTO>> fetchBugResolvedGird(BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchBugResolvedGird(context) ;
        List<BugStatsDTO> list = bugstatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchBugResolvedGird-all')")
	@ApiOperation(value = "查询bug解决汇总表", tags = {"Bug统计" } ,notes = "查询bug解决汇总表")
    @RequestMapping(method= RequestMethod.POST , value="/bugstats/searchbugresolvedgird")
	public ResponseEntity<Page<BugStatsDTO>> searchBugResolvedGird(@RequestBody BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchBugResolvedGird(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugstatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchBugassignedTo-all')")
	@ApiOperation(value = "获取Bug指派表", tags = {"Bug统计" } ,notes = "获取Bug指派表")
    @RequestMapping(method= RequestMethod.GET , value="/bugstats/fetchbugassignedto")
	public ResponseEntity<List<BugStatsDTO>> fetchBugassignedTo(BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchBugassignedTo(context) ;
        List<BugStatsDTO> list = bugstatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchBugassignedTo-all')")
	@ApiOperation(value = "查询Bug指派表", tags = {"Bug统计" } ,notes = "查询Bug指派表")
    @RequestMapping(method= RequestMethod.POST , value="/bugstats/searchbugassignedto")
	public ResponseEntity<Page<BugStatsDTO>> searchBugassignedTo(@RequestBody BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchBugassignedTo(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugstatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchDefault-all')")
	@ApiOperation(value = "获取数据集", tags = {"Bug统计" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/bugstats/fetchdefault")
	public ResponseEntity<List<BugStatsDTO>> fetchDefault(BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchDefault(context) ;
        List<BugStatsDTO> list = bugstatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchDefault-all')")
	@ApiOperation(value = "查询数据集", tags = {"Bug统计" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/bugstats/searchdefault")
	public ResponseEntity<Page<BugStatsDTO>> searchDefault(@RequestBody BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugstatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchProductBugResolutionStats-all')")
	@ApiOperation(value = "获取产品Bug解决方案汇总", tags = {"Bug统计" } ,notes = "获取产品Bug解决方案汇总")
    @RequestMapping(method= RequestMethod.GET , value="/bugstats/fetchproductbugresolutionstats")
	public ResponseEntity<List<BugStatsDTO>> fetchProductBugResolutionStats(BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchProductBugResolutionStats(context) ;
        List<BugStatsDTO> list = bugstatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchProductBugResolutionStats-all')")
	@ApiOperation(value = "查询产品Bug解决方案汇总", tags = {"Bug统计" } ,notes = "查询产品Bug解决方案汇总")
    @RequestMapping(method= RequestMethod.POST , value="/bugstats/searchproductbugresolutionstats")
	public ResponseEntity<Page<BugStatsDTO>> searchProductBugResolutionStats(@RequestBody BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchProductBugResolutionStats(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugstatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchProductBugStatusSum-all')")
	@ApiOperation(value = "获取产品Bug状态汇总", tags = {"Bug统计" } ,notes = "获取产品Bug状态汇总")
    @RequestMapping(method= RequestMethod.GET , value="/bugstats/fetchproductbugstatussum")
	public ResponseEntity<List<BugStatsDTO>> fetchProductBugStatusSum(BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchProductBugStatusSum(context) ;
        List<BugStatsDTO> list = bugstatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchProductBugStatusSum-all')")
	@ApiOperation(value = "查询产品Bug状态汇总", tags = {"Bug统计" } ,notes = "查询产品Bug状态汇总")
    @RequestMapping(method= RequestMethod.POST , value="/bugstats/searchproductbugstatussum")
	public ResponseEntity<Page<BugStatsDTO>> searchProductBugStatusSum(@RequestBody BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchProductBugStatusSum(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugstatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchProductCreateBug-all')")
	@ApiOperation(value = "获取产品创建bug占比", tags = {"Bug统计" } ,notes = "获取产品创建bug占比")
    @RequestMapping(method= RequestMethod.GET , value="/bugstats/fetchproductcreatebug")
	public ResponseEntity<List<BugStatsDTO>> fetchProductCreateBug(BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchProductCreateBug(context) ;
        List<BugStatsDTO> list = bugstatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchProductCreateBug-all')")
	@ApiOperation(value = "查询产品创建bug占比", tags = {"Bug统计" } ,notes = "查询产品创建bug占比")
    @RequestMapping(method= RequestMethod.POST , value="/bugstats/searchproductcreatebug")
	public ResponseEntity<Page<BugStatsDTO>> searchProductCreateBug(@RequestBody BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchProductCreateBug(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugstatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchProjectBugStatusCount-all')")
	@ApiOperation(value = "获取项目bug状态统计", tags = {"Bug统计" } ,notes = "获取项目bug状态统计")
    @RequestMapping(method= RequestMethod.GET , value="/bugstats/fetchprojectbugstatuscount")
	public ResponseEntity<List<BugStatsDTO>> fetchProjectBugStatusCount(BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchProjectBugStatusCount(context) ;
        List<BugStatsDTO> list = bugstatsMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-BugStats-searchProjectBugStatusCount-all')")
	@ApiOperation(value = "查询项目bug状态统计", tags = {"Bug统计" } ,notes = "查询项目bug状态统计")
    @RequestMapping(method= RequestMethod.POST , value="/bugstats/searchprojectbugstatuscount")
	public ResponseEntity<Page<BugStatsDTO>> searchProjectBugStatusCount(@RequestBody BugStatsSearchContext context) {
        Page<BugStats> domains = bugstatsService.searchProjectBugStatusCount(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(bugstatsMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

