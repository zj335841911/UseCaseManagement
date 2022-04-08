package cn.ibizlab.pms.util.job;

import cn.ibizlab.pms.util.client.IBZUAAFeignClient;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSONArray;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;
import java.io.InputStream;
import java.util.*;

/**
 * 权限：向uaa同步当前系统菜单、权限资源任务类
 */
@Slf4j
@Component
@ConditionalOnProperty( name = "ibiz.enablePermissionValid", havingValue = "true")
@ConditionalOnExpression("'${spring.application.name}'.startsWith('pms-webapi')")
public class PermissionSyncJob implements ApplicationRunner {

    @Autowired
    @Lazy
    private IBZUAAFeignClient client;

    @Value("${ibiz.systemid:pms}")
    private String systemId;
    
    @Value("${ibiz.systemname:pms}")
    private String systemName;



    @Override
    public void run(ApplicationArguments args) {
        try {
            Thread.sleep(10000);
            InputStream permission= this.getClass().getResourceAsStream("/permission/systemResource.json"); //获取当前系统所有实体资源能力
            String permissionResult = IOUtils.toString(permission,"UTF-8");
            JSONObject system= new JSONObject();
            system.put("pssystemid",systemId);
            system.put("pssystemname",systemName);
            system.put("sysstructure",JSONObject.parseObject(permissionResult));
            system.put("md5check",DigestUtils.md5DigestAsHex(permissionResult.getBytes()));
            Long start = new Date().getTime();
            if(client.syncSysAuthority(system)){
                log.info("向[UAA]同步系统资源成功");
            }else{
                log.error("向[UAA]同步系统资源失败");
            }
            Long end = new Date().getTime();
            log.info("同步权限资源耗时：{}ms",end-start);
        }
        catch (Exception ex) {
            log.error(String.format("向[UAA]同步系统资源失败，请检查[UAA]服务是否正常! [%s]",ex));
        }


    }
}