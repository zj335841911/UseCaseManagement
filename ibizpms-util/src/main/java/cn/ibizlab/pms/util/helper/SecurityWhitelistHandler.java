package cn.ibizlab.pms.util.helper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Slf4j
@Component
public class SecurityWhitelistHandler {

    private static final String WHITELIST_FILE_PATH = "/security/whitelist.txt";
     public HttpSecurity handle(HttpSecurity http) throws Exception {
        try {
            String[] whitelist = readfromFile(WHITELIST_FILE_PATH);//加载serviceAPI中无认证模式对应的链接。
            if(whitelist ==null || whitelist.length==0){
                return http;
            }
            log.info("添加的白名单："+ Arrays.asList(whitelist));
            return http
                    .authorizeRequests()
                    .antMatchers(whitelist)
                    .permitAll()
                    .and();
        } catch (Exception e) {
            log.info("白名单加载失败。");
        }
        return http;
    }

    private String[] readfromFile(String path) {
        try (
				InputStream in = this.getClass().getResourceAsStream(path);
				BufferedReader bf = new BufferedReader(new InputStreamReader(in));
        ) {
            String line = null;
            List<String> list = new ArrayList<>();
            while ((line = bf.readLine()) != null) {
                list.add(line);
            }
            String[] whitelist = list.toArray(new String[list.size()]);
            return whitelist;
        } catch (Exception e) {
            log.info("白名单文件入读失败。");
        }
        return new String[0];
    }

    public boolean include(String urlPath){
         List<String> whiteList = Arrays.asList(readfromFile(WHITELIST_FILE_PATH));
         for(String urlpattern: whiteList){
             if(urlPath.startsWith(urlpattern))
                return true;
         }
         return false;
    }
}

