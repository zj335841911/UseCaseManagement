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
import cn.ibizlab.pms.core.ou.domain.IBZEmployee;
import cn.ibizlab.pms.core.ou.service.IIBZEmployeeService;
import cn.ibizlab.pms.core.ou.filter.IBZEmployeeSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"人员" })
@RestController("WebApi-ibzemployee")
@RequestMapping("")
public class IBZEmployeeResource {

    @Autowired
    public IIBZEmployeeService ibzemployeeService;

    @Autowired
    @Lazy
    public IBZEmployeeMapping ibzemployeeMapping;

    @ApiOperation(value = "新建人员", tags = {"人员" },  notes = "新建人员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzemployees")
    public ResponseEntity<IBZEmployeeDTO> create(@Validated @RequestBody IBZEmployeeDTO ibzemployeedto) {
        IBZEmployee domain = ibzemployeeMapping.toDomain(ibzemployeedto);
		ibzemployeeService.create(domain);
        IBZEmployeeDTO dto = ibzemployeeMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "批量新建人员", tags = {"人员" },  notes = "批量新建人员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzemployees/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IBZEmployeeDTO> ibzemployeedtos) {
        ibzemployeeService.createBatch(ibzemployeeMapping.toDomain(ibzemployeedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "更新人员", tags = {"人员" },  notes = "更新人员")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzemployees/{ibzemployee_id}")
    public ResponseEntity<IBZEmployeeDTO> update(@PathVariable("ibzemployee_id") String ibzemployee_id, @RequestBody IBZEmployeeDTO ibzemployeedto) {
		IBZEmployee domain  = ibzemployeeMapping.toDomain(ibzemployeedto);
        domain .setUserid(ibzemployee_id);
		ibzemployeeService.update(domain );
		IBZEmployeeDTO dto = ibzemployeeMapping.toDto(domain );
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "批量更新人员", tags = {"人员" },  notes = "批量更新人员")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzemployees/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IBZEmployeeDTO> ibzemployeedtos) {
        ibzemployeeService.updateBatch(ibzemployeeMapping.toDomain(ibzemployeedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "删除人员", tags = {"人员" },  notes = "删除人员")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzemployees/{ibzemployee_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibzemployee_id") String ibzemployee_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibzemployeeService.remove(ibzemployee_id));
    }

    @ApiOperation(value = "批量删除人员", tags = {"人员" },  notes = "批量删除人员")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzemployees/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        ibzemployeeService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "获取人员", tags = {"人员" },  notes = "获取人员")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzemployees/{ibzemployee_id}")
    public ResponseEntity<IBZEmployeeDTO> get(@PathVariable("ibzemployee_id") String ibzemployee_id) {
        IBZEmployee domain = ibzemployeeService.get(ibzemployee_id);
        IBZEmployeeDTO dto = ibzemployeeMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取人员草稿", tags = {"人员" },  notes = "获取人员草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzemployees/getdraft")
    public ResponseEntity<IBZEmployeeDTO> getDraft() {
        return ResponseEntity.status(HttpStatus.OK).body(ibzemployeeMapping.toDto(ibzemployeeService.getDraft(new IBZEmployee())));
    }

    @ApiOperation(value = "检查人员", tags = {"人员" },  notes = "检查人员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzemployees/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IBZEmployeeDTO ibzemployeedto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzemployeeService.checkKey(ibzemployeeMapping.toDomain(ibzemployeedto)));
    }

    @ApiOperation(value = "保存人员", tags = {"人员" },  notes = "保存人员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzemployees/save")
    public ResponseEntity<Boolean> save(@RequestBody IBZEmployeeDTO ibzemployeedto) {
        return ResponseEntity.status(HttpStatus.OK).body(ibzemployeeService.save(ibzemployeeMapping.toDomain(ibzemployeedto)));
    }

    @ApiOperation(value = "批量保存人员", tags = {"人员" },  notes = "批量保存人员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzemployees/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IBZEmployeeDTO> ibzemployeedtos) {
        ibzemployeeService.saveBatch(ibzemployeeMapping.toDomain(ibzemployeedtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

	@ApiOperation(value = "获取数据集", tags = {"人员" } ,notes = "获取数据集")
    @RequestMapping(method= RequestMethod.GET , value="/ibzemployees/fetchdefault")
	public ResponseEntity<List<IBZEmployeeDTO>> fetchDefault(IBZEmployeeSearchContext context) {
        Page<IBZEmployee> domains = ibzemployeeService.searchDefault(context) ;
        List<IBZEmployeeDTO> list = ibzemployeeMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

	@ApiOperation(value = "查询数据集", tags = {"人员" } ,notes = "查询数据集")
    @RequestMapping(method= RequestMethod.POST , value="/ibzemployees/searchdefault")
	public ResponseEntity<Page<IBZEmployeeDTO>> searchDefault(@RequestBody IBZEmployeeSearchContext context) {
        Page<IBZEmployee> domains = ibzemployeeService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzemployeeMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}


}

