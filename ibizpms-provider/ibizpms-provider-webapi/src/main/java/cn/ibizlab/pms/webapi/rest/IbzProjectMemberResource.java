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
import cn.ibizlab.pms.core.ibiz.domain.IbzProjectMember;
import cn.ibizlab.pms.core.ibiz.service.IIbzProjectMemberService;
import cn.ibizlab.pms.core.ibiz.filter.IbzProjectMemberSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"项目相关成员" })
@RestController("WebApi-ibzprojectmember")
@RequestMapping("")
public class IbzProjectMemberResource {

    @Autowired
    public IIbzProjectMemberService ibzprojectmemberService;

    @Autowired
    @Lazy
    public IbzProjectMemberMapping ibzprojectmemberMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-Create-all')")
    @ApiOperation(value = "新建项目相关成员", tags = {"项目相关成员" },  notes = "新建项目相关成员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprojectmembers")
    public ResponseEntity<IbzProjectMemberDTO> create(@Validated @RequestBody IbzProjectMemberDTO ibzprojectmemberdto) {
        IbzProjectMember domain = ibzprojectmemberMapping.toDomain(ibzprojectmemberdto);
		ibzprojectmemberService.create(domain);
        IbzProjectMemberDTO dto = ibzprojectmemberMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-Create-all')")
    @ApiOperation(value = "批量新建项目相关成员", tags = {"项目相关成员" },  notes = "批量新建项目相关成员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprojectmembers/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<IbzProjectMemberDTO> ibzprojectmemberdtos) {
        ibzprojectmemberService.createBatch(ibzprojectmemberMapping.toDomain(ibzprojectmemberdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-Update-all')")
    @ApiOperation(value = "更新项目相关成员", tags = {"项目相关成员" },  notes = "更新项目相关成员")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzprojectmembers/{ibzprojectmember_id}")
    public ResponseEntity<IbzProjectMemberDTO> update(@PathVariable("ibzprojectmember_id") Long ibzprojectmember_id, @RequestBody IbzProjectMemberDTO ibzprojectmemberdto) {
		IbzProjectMember domain  = ibzprojectmemberMapping.toDomain(ibzprojectmemberdto);
        domain .setId(ibzprojectmember_id);
		ibzprojectmemberService.update(domain );
		IbzProjectMemberDTO dto = ibzprojectmemberMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-Update-all')")
    @ApiOperation(value = "批量更新项目相关成员", tags = {"项目相关成员" },  notes = "批量更新项目相关成员")
	@RequestMapping(method = RequestMethod.PUT, value = "/ibzprojectmembers/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<IbzProjectMemberDTO> ibzprojectmemberdtos) {
        ibzprojectmemberService.updateBatch(ibzprojectmemberMapping.toDomain(ibzprojectmemberdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-Remove-all')")
    @ApiOperation(value = "删除项目相关成员", tags = {"项目相关成员" },  notes = "删除项目相关成员")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzprojectmembers/{ibzprojectmember_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("ibzprojectmember_id") Long ibzprojectmember_id) {
         return ResponseEntity.status(HttpStatus.OK).body(ibzprojectmemberService.remove(ibzprojectmember_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-Remove-all')")
    @ApiOperation(value = "批量删除项目相关成员", tags = {"项目相关成员" },  notes = "批量删除项目相关成员")
	@RequestMapping(method = RequestMethod.DELETE, value = "/ibzprojectmembers/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        ibzprojectmemberService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-Get-all')")
    @ApiOperation(value = "获取项目相关成员", tags = {"项目相关成员" },  notes = "获取项目相关成员")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzprojectmembers/{ibzprojectmember_id}")
    public ResponseEntity<IbzProjectMemberDTO> get(@PathVariable("ibzprojectmember_id") Long ibzprojectmember_id) {
        IbzProjectMember domain = ibzprojectmemberService.get(ibzprojectmember_id);
        IbzProjectMemberDTO dto = ibzprojectmemberMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取项目相关成员草稿", tags = {"项目相关成员" },  notes = "获取项目相关成员草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzprojectmembers/getdraft")
    public ResponseEntity<IbzProjectMemberDTO> getDraft(IbzProjectMemberDTO dto) {
        IbzProjectMember domain = ibzprojectmemberMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(ibzprojectmemberMapping.toDto(ibzprojectmemberService.getDraft(domain)));
    }

    @ApiOperation(value = "检查项目相关成员", tags = {"项目相关成员" },  notes = "检查项目相关成员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprojectmembers/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody IbzProjectMemberDTO ibzprojectmemberdto) {
        return  ResponseEntity.status(HttpStatus.OK).body(ibzprojectmemberService.checkKey(ibzprojectmemberMapping.toDomain(ibzprojectmemberdto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-Save-all')")
    @ApiOperation(value = "保存项目相关成员", tags = {"项目相关成员" },  notes = "保存项目相关成员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprojectmembers/save")
    public ResponseEntity<IbzProjectMemberDTO> save(@RequestBody IbzProjectMemberDTO ibzprojectmemberdto) {
        IbzProjectMember domain = ibzprojectmemberMapping.toDomain(ibzprojectmemberdto);
        ibzprojectmemberService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzprojectmemberMapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-Save-all')")
    @ApiOperation(value = "批量保存项目相关成员", tags = {"项目相关成员" },  notes = "批量保存项目相关成员")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzprojectmembers/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<IbzProjectMemberDTO> ibzprojectmemberdtos) {
        ibzprojectmemberService.saveBatch(ibzprojectmemberMapping.toDomain(ibzprojectmemberdtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"项目相关成员" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/ibzprojectmembers/fetchdefault")
	public ResponseEntity<List<IbzProjectMemberDTO>> fetchDefault(IbzProjectMemberSearchContext context) {
        Page<IbzProjectMember> domains = ibzprojectmemberService.searchDefault(context) ;
        List<IbzProjectMemberDTO> list = ibzprojectmemberMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbzProjectMember-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"项目相关成员" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/ibzprojectmembers/searchdefault")
	public ResponseEntity<Page<IbzProjectMemberDTO>> searchDefault(@RequestBody IbzProjectMemberSearchContext context) {
        Page<IbzProjectMember> domains = ibzprojectmemberService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(ibzprojectmemberMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

