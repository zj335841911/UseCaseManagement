package cn.ibizlab.pms.util.client;

import cn.ibizlab.pms.util.security.AuthenticationInfo;
import cn.ibizlab.pms.util.security.AuthorizationLogin;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

/**
 * 实体[PSDevUser] 服务对象接口
 */
//@FeignClient(value = "${ibiz.ref.service.ibizpsadmin-loginapi:ibzuaa-api-ldaptest}", contextId = "PSAdminLogin")
public interface PSSysModelLoginClient {

    @PostMapping(value = "/api/token")
    public AuthenticationInfo login(@Validated @RequestBody AuthorizationLogin authorizationLogin);

}
