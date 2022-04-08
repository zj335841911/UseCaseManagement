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
import cn.ibizlab.pms.core.ibiz.domain.IbiLogin;
import cn.ibizlab.pms.core.ibiz.service.IIbiLoginService;
import cn.ibizlab.pms.core.ibiz.filter.IbiLoginSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"实体" })
@RestController("WebApi-ibzlogin")
@RequestMapping("")
public class IbzLoginResource {

    @Autowired
    public IIbiLoginService ibiloginService;

    @Autowired
    @Lazy
    public IbzLoginMapping ibzloginMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbiLogin-GetUser-all')")
    @ApiOperation(value = "获取ZT账户登录信息", tags = {"实体" },  notes = "获取ZT账户登录信息")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzlogins/{ibzlogin_id}/getuser")
    public ResponseEntity<IbzLoginDTO> getUser(@PathVariable("ibzlogin_id") Long ibzlogin_id, @RequestBody IbzLoginDTO ibzlogindto) {
        IbiLogin domain = ibzloginMapping.toDomain(ibzlogindto);
        domain.setId(ibzlogin_id);
        domain = ibiloginService.getUser(domain);
        ibzlogindto = ibzloginMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzlogindto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbiLogin-GetUser-all')")
    @ApiOperation(value = "批量处理[获取ZT账户登录信息]", tags = {"实体" },  notes = "批量处理[获取ZT账户登录信息]")
	@RequestMapping(method = RequestMethod.GET, value = "/ibzlogins/getuserbatch")
    public ResponseEntity<Boolean> getUserBatch(@RequestBody List<IbzLoginDTO> ibzlogindtos) {
        List<IbiLogin> domains = ibzloginMapping.toDomain(ibzlogindtos);
        boolean result = ibiloginService.getUserBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbiLogin-Ztlogin-all')")
    @ApiOperation(value = "ZT登录", tags = {"实体" },  notes = "ZT登录")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlogins/{ibzlogin_id}/ztlogin")
    public ResponseEntity<IbzLoginDTO> ztlogin(@PathVariable("ibzlogin_id") Long ibzlogin_id, @RequestBody IbzLoginDTO ibzlogindto) {
        IbiLogin domain = ibzloginMapping.toDomain(ibzlogindto);
        domain.setId(ibzlogin_id);
        domain = ibiloginService.ztlogin(domain);
        ibzlogindto = ibzloginMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(ibzlogindto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-IbiLogin-Ztlogin-all')")
    @ApiOperation(value = "批量处理[ZT登录]", tags = {"实体" },  notes = "批量处理[ZT登录]")
	@RequestMapping(method = RequestMethod.POST, value = "/ibzlogins/ztloginbatch")
    public ResponseEntity<Boolean> ztloginBatch(@RequestBody List<IbzLoginDTO> ibzlogindtos) {
        List<IbiLogin> domains = ibzloginMapping.toDomain(ibzlogindtos);
        boolean result = ibiloginService.ztloginBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }



}

