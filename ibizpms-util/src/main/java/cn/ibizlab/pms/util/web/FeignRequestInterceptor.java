package cn.ibizlab.pms.util.web;

import cn.ibizlab.pms.util.helper.JobUserHelper;
import cn.ibizlab.pms.util.security.AuthenticationInfo;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

/**
 * feign请求拦截器
 * 拦截所有使用feign发出的请求，附加原始请求Header参数及Token
 */
@Configuration
public class FeignRequestInterceptor implements RequestInterceptor {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    @Lazy
    JobUserHelper jobUserHelper;

    @Override
    public void apply(RequestTemplate requestTemplate) {

        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if(requestAttributes!=null){
            HttpServletRequest request = requestAttributes.getRequest();
            if("/uaa/publickey".equals(request.getRequestURI())){
                return;
            }
            Enumeration<String> headerNames = request.getHeaderNames();
            if (headerNames != null) {
                while (headerNames.hasMoreElements()) {
                    String name = headerNames.nextElement();
                    if(name.equalsIgnoreCase("transfer-encoding"))
                        continue;
                    String values = request.getHeader(name);
                    requestTemplate.header(name, values);
                }
                logger.info("feign interceptor header:{}",requestTemplate);
            }
        }else {
            String token = "";
            try {
                if(!"/v7/login".equals(requestTemplate.url()) && !"/syspssystems/save".equals(requestTemplate.url())) {
                    AuthenticationInfo info = jobUserHelper.getJobUser();
                    token = info.getToken();
                }
            }catch (Exception e) {
                // 清除缓存
                jobUserHelper.resetJobUser();

                if(!"/v7/login".equals(requestTemplate.url()) && !"/syspssystems/save".equals(requestTemplate.url())) {
                    AuthenticationInfo info = jobUserHelper.getJobUser();
                    token = info.getToken();
                }
            }
            if(!StringUtils.isBlank(token)) {
                requestTemplate.header("Authorization", "Bearer " + token);
            }
        }
    }
}