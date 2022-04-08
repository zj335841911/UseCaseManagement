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
import cn.ibizlab.pms.core.report.domain.IbzReport;
import cn.ibizlab.pms.core.report.service.IIbzReportService;
import cn.ibizlab.pms.core.report.filter.IbzReportSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"汇报汇总" })
@RestController("WebApi-ibzreport")
@RequestMapping("")
public class IbzReportResource {

    @Autowired
    public IIbzReportService ibzreportService;

    @Autowired
    @Lazy
    public IbzReportMapping ibzreportMapping;

    @PreAuthorize("hasPermission(this.ibzreportMapping.toDomain(#ibzreportdto),'pms-IbzReport-Create')")
    @ApiOperation(value = "新建汇报汇总", tags = {"汇报汇总" },  notes = "新建汇报汇总")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzreports")
    public ResponseEntity<IbzReportDTO> create(@Validated @RequestBody IbzReportDTO ibzreportdto) {
        IbzReport domain = ibzreportMapping.toDomain(ibzreportdto);
		ibzreportService.create(domain);
        IbzReportDTO dto = ibzreportMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzreportMapping.toDomain(#ibzreportdtos),'pms-IbzReport-Create')")
    @ApiOperation(value = "批量新建汇报汇总", tags = {"汇报汇总" },  notes = "批量新建汇报汇总")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzreports/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IbzReportDTO> ibzreportdtos) {
        ibzreportService.createBatch(ibzreportMapping.toDomain(ibzreportdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "ibzreport" , versionfield = "updatedate")
    @PreAuthorize("hasPermission(this.ibzreportService.get(#ibzreport_id),'pms-IbzReport-Update')")
    @ApiOperation(value = "更新汇报汇总", tags = {"汇报汇总" },  notes = "更新汇报汇总")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzreports/{ibzreport_id}")
    public ResponseEntity<IbzReportDTO> update(@PathVariable("ibzreport_id") Long ibzreport_id, @RequestBody IbzReportDTO ibzreportdto) {
		IbzReport domain  = ibzreportMapping.toDomain(ibzreportdto);
        domain .setIbzdailyid(ibzreport_id);
		ibzreportService.update(domain );
		IbzReportDTO dto = ibzreportMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibzreportService.getIbzreportByEntities(this.ibzreportMapping.toDomain(#ibzreportdtos)),'pms-IbzReport-Update')")
    @ApiOperation(value = "批量更新汇报汇总", tags = {"汇报汇总" },  notes = "批量更新汇报汇总")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzreports/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IbzReportDTO> ibzreportdtos) {
        ibzreportService.updateBatch(ibzreportMapping.toDomain(ibzreportdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.ibzreportService.get(#ibzreport_id),'pms-IbzReport-Remove')")
    @ApiOperation(value = "删除汇报汇总", tags = {"汇报汇总" },  notes = "删除汇报汇总")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzreports/{ibzreport_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibzreport_id") Long ibzreport_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibzreportService.remove(ibzreport_id));
    }

    @PreAuthorize("hasPermission(this.ibzreportService.getIbzreportByIds(#ids),'pms-IbzReport-Remove')")
    @ApiOperation(value = "批量删除汇报汇总", tags = {"汇报汇总" },  notes = "批量删除汇报汇总")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzreports/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        ibzreportService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.ibzreportMapping.toDomain(returnObject.body),'pms-IbzReport-Get')")
    @ApiOperation(value = "获取汇报汇总", tags = {"汇报汇总" },  notes = "获取汇报汇总")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzreports/{ibzreport_id}")
    public ResponseEntity<IbzReportDTO> get(@PathVariable("ibzreport_id") Long ibzreport_id) {
        IbzReport domain = ibzreportService.get(ibzreport_id);
        IbzReportDTO dto = ibzreportMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取汇报汇总草稿", tags = {"汇报汇总" },  notes = "获取汇报汇总草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzreports/getdraft")
    public ResponseEntity<IbzReportDTO> getDraft(IbzReportDTO dto) {
        IbzReport domain = ibzreportMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(ibzreportMapping.toDto(ibzreportService.getDraft(domain)));
    }

    @ApiOperation(value = "检查汇报汇总", tags = {"汇报汇总" },  notes = "检查汇报汇总")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzreports/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IbzReportDTO ibzreportdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzreportService.checkKey(ibzreportMapping.toDomain(ibzreportdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzReport-MyReportINotSubmit-all')")
    @ApiOperation(value = "我未提交的（计数器）", tags = {"汇报汇总" },  notes = "我未提交的（计数器）")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzreports/{ibzreport_id}/myreportinotsubmit")
    public ResponseEntity<IbzReportDTO> myReportINotSubmit(@PathVariable("ibzreport_id") Long ibzreport_id, @RequestBody IbzReportDTO ibzreportdto) {
        IbzReport domain = ibzreportMapping.toDomain(ibzreportdto);
        domain.setIbzdailyid(ibzreport_id);
        domain = ibzreportService.myReportINotSubmit(domain);
        ibzreportdto = ibzreportMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzreportdto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzReport-ReportIReceived-all')")
    @ApiOperation(value = "我收到的汇报（计数器）", tags = {"汇报汇总" },  notes = "我收到的汇报（计数器）")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzreports/{ibzreport_id}/reportireceived")
    public ResponseEntity<IbzReportDTO> reportIReceived(@PathVariable("ibzreport_id") Long ibzreport_id, @RequestBody IbzReportDTO ibzreportdto) {
        IbzReport domain = ibzreportMapping.toDomain(ibzreportdto);
        domain.setIbzdailyid(ibzreport_id);
        domain = ibzreportService.reportIReceived(domain);
        ibzreportdto = ibzreportMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzreportdto);
    }

    @PreAuthorize("hasPermission(this.ibzreportMapping.toDomain(#ibzreportdto),'pms-IbzReport-Save')")
    @ApiOperation(value = "保存汇报汇总", tags = {"汇报汇总" },  notes = "保存汇报汇总")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzreports/save")
    public ResponseEntity<IbzReportDTO> save(@RequestBody IbzReportDTO ibzreportdto) {
        IbzReport domain = ibzreportMapping.toDomain(ibzreportdto);
        ibzreportService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzreportMapping.toDto(domain));
    }

    @PreAuthorize("hasPermission(this.ibzreportMapping.toDomain(#ibzreportdtos),'pms-IbzReport-Save')")
    @ApiOperation(value = "批量保存汇报汇总", tags = {"汇报汇总" },  notes = "批量保存汇报汇总")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzreports/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IbzReportDTO> ibzreportdtos) {
        ibzreportService.saveBatch(ibzreportMapping.toDomain(ibzreportdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzReport-searchAllReport-all') and hasPermission(#context,'pms-IbzReport-Get')")
	@ApiOperation(value = "获取汇报汇总", tags = {"汇报汇总" } ,notes = "获取汇报汇总")
    @RequestMapping(method= RequestMethod.GET , value="/ibzreports/fetchallreport")
	public ResponseEntity<List<IbzReportDTO>> fetchAllReport(IbzReportSearchContext context) {
        Page<IbzReport> domains = ibzreportService.searchAllReport(context) ;
        List<IbzReportDTO> list = ibzreportMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzReport-searchAllReport-all') and hasPermission(#context,'pms-IbzReport-Get')")
	@ApiOperation(value = "查询汇报汇总", tags = {"汇报汇总" } ,notes = "查询汇报汇总")
    @RequestMapping(method= RequestMethod.POST , value="/ibzreports/searchallreport")
	public ResponseEntity<Page<IbzReportDTO>> searchAllReport(@RequestBody IbzReportSearchContext context) {
        Page<IbzReport> domains = ibzreportService.searchAllReport(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzreportMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzReport-searchDefault-all') and hasPermission(#context,'pms-IbzReport-Get')")
	@ApiOperation(value = "获取数据集", tags = {"汇报汇总" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibzreports/fetchdefault")
	public ResponseEntity<List<IbzReportDTO>> fetchDefault(IbzReportSearchContext context) {
        Page<IbzReport> domains = ibzreportService.searchDefault(context) ;
        List<IbzReportDTO> list = ibzreportMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzReport-searchDefault-all') and hasPermission(#context,'pms-IbzReport-Get')")
	@ApiOperation(value = "查询数据集", tags = {"汇报汇总" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibzreports/searchdefault")
	public ResponseEntity<Page<IbzReportDTO>> searchDefault(@RequestBody IbzReportSearchContext context) {
        Page<IbzReport> domains = ibzreportService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzreportMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzReport-searchMyReAllReport-all') and hasPermission(#context,'pms-IbzReport-Get')")
	@ApiOperation(value = "获取汇报汇总（我收到的）", tags = {"汇报汇总" } ,notes = "获取汇报汇总（我收到的）")
    @RequestMapping(method= RequestMethod.GET , value="/ibzreports/fetchmyreallreport")
	public ResponseEntity<List<IbzReportDTO>> fetchMyReAllReport(IbzReportSearchContext context) {
        Page<IbzReport> domains = ibzreportService.searchMyReAllReport(context) ;
        List<IbzReportDTO> list = ibzreportMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzReport-searchMyReAllReport-all') and hasPermission(#context,'pms-IbzReport-Get')")
	@ApiOperation(value = "查询汇报汇总（我收到的）", tags = {"汇报汇总" } ,notes = "查询汇报汇总（我收到的）")
    @RequestMapping(method= RequestMethod.POST , value="/ibzreports/searchmyreallreport")
	public ResponseEntity<Page<IbzReportDTO>> searchMyReAllReport(@RequestBody IbzReportSearchContext context) {
        Page<IbzReport> domains = ibzreportService.searchMyReAllReport(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzreportMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

