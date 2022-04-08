package cn.ibizlab.pms.util.web;

import cn.ibizlab.pms.util.client.PSSysModelLoginClient;
import cn.ibizlab.pms.util.helper.OutsideAccessorUtils;
import cn.ibizlab.pms.util.security.*;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Enumeration;

/**
 * PSAdmin Token
 */
//@Configuration
public class PSSysModelRequestInterceptor implements RequestInterceptor {

    private ApplicationContext applicationContext;
    private PSSysModelLoginClient psSysModelLoginClient;

    private String authServiceTag;
    private String authUser;
    private String authPassword;
    private String proxyUser;
    private String devSlnSysId;
    private String token;

    private SimpleTokenUtil authTokenUtil = new SimpleTokenUtil();
    private final Logger logger = LoggerFactory.getLogger(getClass());

    public PSSysModelRequestInterceptor(ApplicationContext applicationContext, String authServiceTag, boolean https, String authUser, String authPassword, String devSlnSysId) {
        this.authServiceTag = authServiceTag;
        this.authUser = authUser;
        this.authPassword = authPassword;
        this.devSlnSysId = devSlnSysId;
        this.applicationContext = applicationContext;
        String strSecret = applicationContext.getEnvironment().getProperty("ibiz.jwt.secret","ibzsecret");
        authTokenUtil.setSecret(strSecret);
        this.psSysModelLoginClient = OutsideAccessorUtils.buildAccessor(applicationContext, PSSysModelLoginClient.class, https, authServiceTag);
    }

    public PSSysModelRequestInterceptor(ApplicationContext applicationContext, String url, String authUser, String authPassword, String devSlnSysId) {
        this.authServiceTag = url;
        this.authUser = authUser;
        this.authPassword = authPassword;
        this.devSlnSysId = devSlnSysId;
        this.applicationContext = applicationContext;
        String strSecret = applicationContext.getEnvironment().getProperty("ibiz.jwt.secret","ibzsecret");
        authTokenUtil.setSecret(strSecret);
        this.psSysModelLoginClient = OutsideAccessorUtils.buildAccessorByUrl(applicationContext, PSSysModelLoginClient.class, false, url);
    }

    @Override
    public void apply(RequestTemplate requestTemplate) {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            Enumeration<String> headerNames = request.getHeaderNames();
            requestTemplate.header("Authorization", "Bearer " + getToken());
        }
    }


    public String getToken() {
        if (StringUtils.isNotBlank(this.token)) {
            if (authTokenUtil.getExpirationDateFromToken(this.token).after(new Date())) {
                return this.token;
            }
        }
        AuthorizationLogin login = new AuthorizationLogin();
        login.setLoginname(authUser);
        login.setPassword(authPassword);
        login.setDevslnsysid(devSlnSysId);

        //当前用户对应的平台用户账户
        Authentication curUser = SecurityContextHolder.getContext().getAuthentication() ;
        login.setProxyloginname("misaka");

        AuthenticationInfo info = psSysModelLoginClient.login(login);
        this.token = info.getToken();
        return this.token;
    }

}