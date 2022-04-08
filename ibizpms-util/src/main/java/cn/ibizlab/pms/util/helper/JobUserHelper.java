package cn.ibizlab.pms.util.helper;

import cn.ibizlab.pms.util.client.IBZUAAFeignClient;
import cn.ibizlab.pms.util.security.AuthenticationInfo;
import cn.ibizlab.pms.util.security.AuthorizationLogin;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;

@Slf4j
@Component
public class JobUserHelper {

    @Autowired
    @Lazy
    private IBZUAAFeignClient uaaFeignClient;

    @Value("${jobs.adminname:admin}")
    private String adminname;

    @Value("${jobs.adminpassword:123456}")
    private String adminpassword;

    @Value("${ibiz.auth.pwencrymode:0}")
    private int pwencrymode;

    @Value("${ibiz.auth.ladp:false}")
    private boolean ladp;

    @Cacheable(value="jobauthenticationinfo")
    public AuthenticationInfo getJobUser() {
        AuthorizationLogin authenticationLogin = new AuthorizationLogin();
        authenticationLogin.setLoginname(adminname);
        String pwd = adminpassword;
        if(!ladp) {
            authenticationLogin.getLoginname();
            if (pwencrymode == 1) {
                pwd = DigestUtils.md5DigestAsHex(pwd.getBytes());
            } else if (pwencrymode == 2) {
                pwd = DigestUtils.md5DigestAsHex(String.format("%1$s||%2$s", authenticationLogin.getUsername(), pwd).getBytes());
            }
        }
        authenticationLogin.setPassword(pwd);
        return uaaFeignClient.v7Login(authenticationLogin);
    }

    @CacheEvict(value="jobauthenticationinfo")
    public void resetJobUser() {

    }
}
