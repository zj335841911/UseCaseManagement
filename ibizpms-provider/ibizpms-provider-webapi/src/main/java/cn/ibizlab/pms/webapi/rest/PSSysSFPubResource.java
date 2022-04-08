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
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysSFPub;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSSysSFPubService;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSysSFPubSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"后台服务架构" })
@RestController("WebApi-pssyssfpub")
@RequestMapping("")
public class PSSysSFPubResource {

    @Autowired
    public IPSSysSFPubService pssyssfpubService;

    @Autowired
    @Lazy
    public PSSysSFPubMapping pssyssfpubMapping;

    @PreAuthorize("hasPermission(this.pssyssfpubMapping.toDomain(#pssyssfpubdto),'pms-PSSysSFPub-Create')")
    @ApiOperation(value = "新建后台服务架构", tags = {"后台服务架构" },  notes = "新建后台服务架构")
	@RequestMapping(method = RequestMethod.POST, value = "/pssyssfpubs")
    public ResponseEntity<PSSysSFPubDTO> create(@Validated @RequestBody PSSysSFPubDTO pssyssfpubdto) {
        PSSysSFPub domain = pssyssfpubMapping.toDomain(pssyssfpubdto);
		pssyssfpubService.create(domain);
        PSSysSFPubDTO dto = pssyssfpubMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.pssyssfpubMapping.toDomain(#pssyssfpubdtos),'pms-PSSysSFPub-Create')")
    @ApiOperation(value = "批量新建后台服务架构", tags = {"后台服务架构" },  notes = "批量新建后台服务架构")
	@RequestMapping(method = RequestMethod.POST, value = "/pssyssfpubs/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<PSSysSFPubDTO> pssyssfpubdtos) {
        pssyssfpubService.createBatch(pssyssfpubMapping.toDomain(pssyssfpubdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "pssyssfpub" , versionfield = "updatedate")
    @PreAuthorize("hasPermission(this.pssyssfpubService.get(#pssyssfpub_id),'pms-PSSysSFPub-Update')")
    @ApiOperation(value = "更新后台服务架构", tags = {"后台服务架构" },  notes = "更新后台服务架构")
	@RequestMapping(method = RequestMethod.PUT, value = "/pssyssfpubs/{pssyssfpub_id}")
    public ResponseEntity<PSSysSFPubDTO> update(@PathVariable("pssyssfpub_id") String pssyssfpub_id, @RequestBody PSSysSFPubDTO pssyssfpubdto) {
		PSSysSFPub domain  = pssyssfpubMapping.toDomain(pssyssfpubdto);
        domain .setPssyssfpubid(pssyssfpub_id);
		pssyssfpubService.update(domain );
		PSSysSFPubDTO dto = pssyssfpubMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.pssyssfpubService.getPssyssfpubByEntities(this.pssyssfpubMapping.toDomain(#pssyssfpubdtos)),'pms-PSSysSFPub-Update')")
    @ApiOperation(value = "批量更新后台服务架构", tags = {"后台服务架构" },  notes = "批量更新后台服务架构")
	@RequestMapping(method = RequestMethod.PUT, value = "/pssyssfpubs/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<PSSysSFPubDTO> pssyssfpubdtos) {
        pssyssfpubService.updateBatch(pssyssfpubMapping.toDomain(pssyssfpubdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.pssyssfpubService.get(#pssyssfpub_id),'pms-PSSysSFPub-Remove')")
    @ApiOperation(value = "删除后台服务架构", tags = {"后台服务架构" },  notes = "删除后台服务架构")
	@RequestMapping(method = RequestMethod.DELETE, value = "/pssyssfpubs/{pssyssfpub_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("pssyssfpub_id") String pssyssfpub_id) {
         return ResponseEntity.status(HttpStatus.OK).body(pssyssfpubService.remove(pssyssfpub_id));
    }

    @PreAuthorize("hasPermission(this.pssyssfpubService.getPssyssfpubByIds(#ids),'pms-PSSysSFPub-Remove')")
    @ApiOperation(value = "批量删除后台服务架构", tags = {"后台服务架构" },  notes = "批量删除后台服务架构")
	@RequestMapping(method = RequestMethod.DELETE, value = "/pssyssfpubs/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        pssyssfpubService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.pssyssfpubMapping.toDomain(returnObject.body),'pms-PSSysSFPub-Get')")
    @ApiOperation(value = "获取后台服务架构", tags = {"后台服务架构" },  notes = "获取后台服务架构")
	@RequestMapping(method = RequestMethod.GET, value = "/pssyssfpubs/{pssyssfpub_id}")
    public ResponseEntity<PSSysSFPubDTO> get(@PathVariable("pssyssfpub_id") String pssyssfpub_id) {
        PSSysSFPub domain = pssyssfpubService.get(pssyssfpub_id);
        PSSysSFPubDTO dto = pssyssfpubMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取后台服务架构草稿", tags = {"后台服务架构" },  notes = "获取后台服务架构草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/pssyssfpubs/getdraft")
    public ResponseEntity<PSSysSFPubDTO> getDraft(PSSysSFPubDTO dto) {
        PSSysSFPub domain = pssyssfpubMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(pssyssfpubMapping.toDto(pssyssfpubService.getDraft(domain)));
    }

    @ApiOperation(value = "检查后台服务架构", tags = {"后台服务架构" },  notes = "检查后台服务架构")
	@RequestMapping(method = RequestMethod.POST, value = "/pssyssfpubs/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody PSSysSFPubDTO pssyssfpubdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(pssyssfpubService.checkKey(pssyssfpubMapping.toDomain(pssyssfpubdto)));
    }

    @PreAuthorize("hasPermission(this.pssyssfpubMapping.toDomain(#pssyssfpubdto),'pms-PSSysSFPub-Save')")
    @ApiOperation(value = "保存后台服务架构", tags = {"后台服务架构" },  notes = "保存后台服务架构")
	@RequestMapping(method = RequestMethod.POST, value = "/pssyssfpubs/save")
    public ResponseEntity<PSSysSFPubDTO> save(@RequestBody PSSysSFPubDTO pssyssfpubdto) {
        PSSysSFPub domain = pssyssfpubMapping.toDomain(pssyssfpubdto);
        pssyssfpubService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(pssyssfpubMapping.toDto(domain));
    }

    @PreAuthorize("hasPermission(this.pssyssfpubMapping.toDomain(#pssyssfpubdtos),'pms-PSSysSFPub-Save')")
    @ApiOperation(value = "批量保存后台服务架构", tags = {"后台服务架构" },  notes = "批量保存后台服务架构")
	@RequestMapping(method = RequestMethod.POST, value = "/pssyssfpubs/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<PSSysSFPubDTO> pssyssfpubdtos) {
        pssyssfpubService.saveBatch(pssyssfpubMapping.toDomain(pssyssfpubdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PSSysSFPub-searchBuild-all') and hasPermission(#context,'pms-PSSysSFPub-Get')")
	@ApiOperation(value = "获取版本", tags = {"后台服务架构" } ,notes = "获取版本")
    @RequestMapping(method= RequestMethod.GET , value="/pssyssfpubs/fetchbuild")
	public ResponseEntity<List<PSSysSFPubDTO>> fetchBuild(PSSysSFPubSearchContext context) {
        Page<PSSysSFPub> domains = pssyssfpubService.searchBuild(context) ;
        List<PSSysSFPubDTO> list = pssyssfpubMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PSSysSFPub-searchBuild-all') and hasPermission(#context,'pms-PSSysSFPub-Get')")
	@ApiOperation(value = "查询版本", tags = {"后台服务架构" } ,notes = "查询版本")
    @RequestMapping(method= RequestMethod.POST , value="/pssyssfpubs/searchbuild")
	public ResponseEntity<Page<PSSysSFPubDTO>> searchBuild(@RequestBody PSSysSFPubSearchContext context) {
        Page<PSSysSFPub> domains = pssyssfpubService.searchBuild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(pssyssfpubMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PSSysSFPub-searchDefault-all') and hasPermission(#context,'pms-PSSysSFPub-Get')")
	@ApiOperation(value = "获取数据集", tags = {"后台服务架构" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/pssyssfpubs/fetchdefault")
	public ResponseEntity<List<PSSysSFPubDTO>> fetchDefault(PSSysSFPubSearchContext context) {
        Page<PSSysSFPub> domains = pssyssfpubService.searchDefault(context) ;
        List<PSSysSFPubDTO> list = pssyssfpubMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-PSSysSFPub-searchDefault-all') and hasPermission(#context,'pms-PSSysSFPub-Get')")
	@ApiOperation(value = "查询数据集", tags = {"后台服务架构" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/pssyssfpubs/searchdefault")
	public ResponseEntity<Page<PSSysSFPubDTO>> searchDefault(@RequestBody PSSysSFPubSearchContext context) {
        Page<PSSysSFPub> domains = pssyssfpubService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(pssyssfpubMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

