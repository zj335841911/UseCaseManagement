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
import cn.ibizlab.pms.core.ibiz.domain.IbzTop;
import cn.ibizlab.pms.core.ibiz.service.IIbzTopService;
import cn.ibizlab.pms.core.ibiz.filter.IbzTopSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"置顶" })
@RestController("WebApi-ibztop")
@RequestMapping("")
public class IbzTopResource {

    @Autowired
    public IIbzTopService ibztopService;

    @Autowired
    @Lazy
    public IbzTopMapping ibztopMapping;

    @PreAuthorize("hasPermission(this.ibztopMapping.toDomain(#ibztopdto),'pms-IbzTop-Create')")
    @ApiOperation(value = "新建置顶", tags = {"置顶" },  notes = "新建置顶")
	@RequestMapping(method = RequestMethod.POST, value = "/ibztops")
    public ResponseEntity<IbzTopDTO> create(@Validated @RequestBody IbzTopDTO ibztopdto) {
        IbzTop domain = ibztopMapping.toDomain(ibztopdto);
		ibztopService.create(domain);
        IbzTopDTO dto = ibztopMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibztopMapping.toDomain(#ibztopdtos),'pms-IbzTop-Create')")
    @ApiOperation(value = "批量新建置顶", tags = {"置顶" },  notes = "批量新建置顶")
	@RequestMapping(method = RequestMethod.POST, value = "/ibztops/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IbzTopDTO> ibztopdtos) {
        ibztopService.createBatch(ibztopMapping.toDomain(ibztopdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "ibztop" , versionfield = "updatedate")
    @PreAuthorize("hasPermission(this.ibztopService.get(#ibztop_id),'pms-IbzTop-Update')")
    @ApiOperation(value = "更新置顶", tags = {"置顶" },  notes = "更新置顶")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibztops/{ibztop_id}")
    public ResponseEntity<IbzTopDTO> update(@PathVariable("ibztop_id") String ibztop_id, @RequestBody IbzTopDTO ibztopdto) {
		IbzTop domain  = ibztopMapping.toDomain(ibztopdto);
        domain .setIbztopid(ibztop_id);
		ibztopService.update(domain );
		IbzTopDTO dto = ibztopMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.ibztopService.getIbztopByEntities(this.ibztopMapping.toDomain(#ibztopdtos)),'pms-IbzTop-Update')")
    @ApiOperation(value = "批量更新置顶", tags = {"置顶" },  notes = "批量更新置顶")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibztops/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IbzTopDTO> ibztopdtos) {
        ibztopService.updateBatch(ibztopMapping.toDomain(ibztopdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.ibztopService.get(#ibztop_id),'pms-IbzTop-Remove')")
    @ApiOperation(value = "删除置顶", tags = {"置顶" },  notes = "删除置顶")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibztops/{ibztop_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibztop_id") String ibztop_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibztopService.remove(ibztop_id));
    }

    @PreAuthorize("hasPermission(this.ibztopService.getIbztopByIds(#ids),'pms-IbzTop-Remove')")
    @ApiOperation(value = "批量删除置顶", tags = {"置顶" },  notes = "批量删除置顶")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibztops/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        ibztopService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.ibztopMapping.toDomain(returnObject.body),'pms-IbzTop-Get')")
    @ApiOperation(value = "获取置顶", tags = {"置顶" },  notes = "获取置顶")
	@RequestMapping(method = RequestMethod.GET, value = "/ibztops/{ibztop_id}")
    public ResponseEntity<IbzTopDTO> get(@PathVariable("ibztop_id") String ibztop_id) {
        IbzTop domain = ibztopService.get(ibztop_id);
        IbzTopDTO dto = ibztopMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取置顶草稿", tags = {"置顶" },  notes = "获取置顶草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibztops/getdraft")
    public ResponseEntity<IbzTopDTO> getDraft(IbzTopDTO dto) {
        IbzTop domain = ibztopMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(ibztopMapping.toDto(ibztopService.getDraft(domain)));
    }

    @ApiOperation(value = "检查置顶", tags = {"置顶" },  notes = "检查置顶")
	@RequestMapping(method = RequestMethod.POST, value = "/ibztops/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IbzTopDTO ibztopdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibztopService.checkKey(ibztopMapping.toDomain(ibztopdto)));
    }

    @PreAuthorize("hasPermission(this.ibztopMapping.toDomain(#ibztopdto),'pms-IbzTop-Save')")
    @ApiOperation(value = "保存置顶", tags = {"置顶" },  notes = "保存置顶")
	@RequestMapping(method = RequestMethod.POST, value = "/ibztops/save")
    public ResponseEntity<IbzTopDTO> save(@RequestBody IbzTopDTO ibztopdto) {
        IbzTop domain = ibztopMapping.toDomain(ibztopdto);
        ibztopService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibztopMapping.toDto(domain));
    }

    @PreAuthorize("hasPermission(this.ibztopMapping.toDomain(#ibztopdtos),'pms-IbzTop-Save')")
    @ApiOperation(value = "批量保存置顶", tags = {"置顶" },  notes = "批量保存置顶")
	@RequestMapping(method = RequestMethod.POST, value = "/ibztops/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IbzTopDTO> ibztopdtos) {
        ibztopService.saveBatch(ibztopMapping.toDomain(ibztopdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzTop-searchDefault-all') and hasPermission(#context,'pms-IbzTop-Get')")
	@ApiOperation(value = "获取数据集", tags = {"置顶" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibztops/fetchdefault")
	public ResponseEntity<List<IbzTopDTO>> fetchDefault(IbzTopSearchContext context) {
        Page<IbzTop> domains = ibztopService.searchDefault(context) ;
        List<IbzTopDTO> list = ibztopMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzTop-searchDefault-all') and hasPermission(#context,'pms-IbzTop-Get')")
	@ApiOperation(value = "查询数据集", tags = {"置顶" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibztops/searchdefault")
	public ResponseEntity<Page<IbzTopDTO>> searchDefault(@RequestBody IbzTopSearchContext context) {
        Page<IbzTop> domains = ibztopService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibztopMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

