package cn.ibizlab.pms.webapi.config;

import cn.ibizlab.pms.util.helper.SecurityWhitelistHandler;
import cn.ibizlab.pms.util.security.AuthenticationEntryPoint;
import cn.ibizlab.pms.util.security.AuthorizationTokenFilter;
import cn.ibizlab.pms.util.service.AuthenticationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.context.annotation.Profile;
import org.springframework.security.web.firewall.StrictHttpFirewall;

/**
 * @author huhai
 */
@Profile("webapi-prod")
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebApiSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationEntryPoint unauthorizedHandler;

    @Autowired
    private AuthenticationUserService userDetailsService;

    /**
     * 自定义基于JWT的安全过滤器
     */
    @Autowired
    AuthorizationTokenFilter authenticationTokenFilter;

    @Value("${ibiz.auth.path:v7/login}")
    private String loginPath;

    @Value("${ibiz.auth.logoutpath:v7/logout}")
    private String logoutPath;

    @Value("${ibiz.file.uploadpath:ibizutil/upload}")
    private String uploadpath;

    @Value("${zentao.file.uploadpath:ibizutilpms/ztupload}")
    private String ztuploadpath;

    @Value("${ibiz.file.downloadpath:ibizutil/download}")
    private String downloadpath;

    @Value("${zentao.file.downloadpath:ibizutilpms/ztdownload}")
    private String ztdownloadpath;

    @Value("${ibiz.file.previewpath:ibizutil/preview}")
    private String previewpath;

    @Value("${ibiz.file.previewopenpath:ibizutilpms/openview}")
    private String previewopenpath;


    // 白名单处理类
    @Autowired
    private SecurityWhitelistHandler whitelistHandler;


    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoderBean());
    }


    @Override
    public void configure(WebSecurity web) throws Exception {
        StrictHttpFirewall firewall = new StrictHttpFirewall();
        //去掉";"黑名单
        firewall.setAllowSemicolon(true);
        //加入自定义的防火墙
        web.httpFirewall(firewall);
        super.configure(web);
    }


    @Bean
    GrantedAuthorityDefaults grantedAuthorityDefaults() {
        // Remove the ROLE_ prefix
        return new GrantedAuthorityDefaults("");
    }

    @Bean
    public PasswordEncoder passwordEncoderBean() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {


        // 对白名单放行。
        whitelistHandler.handle(httpSecurity);
        httpSecurity
                // 禁用 CSRF
                .csrf().disable()

                // 授权异常
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()

                // 不创建会话
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()

                // 过滤请求
                .authorizeRequests()
                .antMatchers(
                        HttpMethod.GET,
                        "/*.html",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js",
                        "/**/*.ico",
                        "/**/assets/**",
                        "/**/css/**",
                        "/**/fonts/**",
                        "/**/js/**",
                        "/**/img/**",
                        "/",
                        "webjars/**",
                        "/swagger-resources/**",
                        "/v2/**"
                ).permitAll()
                // 放行登录请求
                .antMatchers(HttpMethod.POST, "/" + loginPath).permitAll()
                // 放行注销请求
                .antMatchers(HttpMethod.GET, "/" + logoutPath).permitAll()
                // 文件操作
                .antMatchers("/" + downloadpath + "/**").permitAll()
                .antMatchers("/" + ztdownloadpath + "/**").permitAll()
                .antMatchers("/" + uploadpath).permitAll()
                .antMatchers("/" + ztuploadpath).permitAll()
                .antMatchers("/" + previewpath + "/**").permitAll()
                .antMatchers("/" + previewopenpath + "/**").permitAll()
                .antMatchers("/" + "sm" + "/**").permitAll()
                .antMatchers("/" + "abc" + "/**").permitAll()
                .antMatchers("/" + "pdfjs" + "/**").permitAll()
                .antMatchers("/" + "images" + "/**").permitAll()
                .antMatchers("/" + "app/file" + "/**").permitAll()
                //开放ZT API登录接口
                .antMatchers("/ztlogin").permitAll()
                //开放账号名查询接口
                .antMatchers("/ztusers/uaaloginname").permitAll()
                .antMatchers("/uaa/open/dingtalk/auth/**").permitAll()
                .antMatchers("/uaa/open/dingtalk/access_token").permitAll()
                .antMatchers("/uaa/dingtalk/jsapi/sign").permitAll()
                .antMatchers("/recordloginlog").permitAll()
                .antMatchers("/ibizutilpms/ztbatchdownload/**").permitAll()
                .antMatchers("/ibizutilpms/ztfilesbatchdownload/**").permitAll()
                .antMatchers("/ibizutilpms/ztallfilesdownload/**").permitAll()

                // 所有请求都需要认证
                .anyRequest().authenticated()
                // 防止iframe 造成跨域
                .and().headers().frameOptions().disable();

        httpSecurity
                .addFilterBefore(authenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
