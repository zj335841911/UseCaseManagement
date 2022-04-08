package cn.ibizlab.pms.core.util.zentao.job;

import cn.ibizlab.pms.core.zentao.domain.Dept;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.service.ICompanyService;
import cn.ibizlab.pms.core.zentao.service.IDeptService;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.util.client.IBZOUFeignClient;
import com.alibaba.fastjson.JSONObject;
import liquibase.pro.packaged.A;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;

import java.io.InputStream;
import java.util.Date;
import java.util.List;

/**
 * 同步账户。
 */
@Slf4j
@Component
@ConditionalOnProperty( name = "ibiz.enablePermissionValid", havingValue = "true")
@ConditionalOnExpression("'${spring.application.name}'.startsWith('pms-webapi')")
public class OUSyncJob implements ApplicationRunner {
    @Autowired
    IUserService userService;
    @Value("${pms.batchsync.ou:false}")
    private boolean batchUpdate;
    @Override
    public void run(ApplicationArguments args) throws Exception {
        if(batchUpdate) {
            this.syncAccount();
        }
    }
    public void syncAccount(){
        try {
            userService.syncAccount(new User());
        }
        catch (Exception ex) {
            ex.printStackTrace();
            log.error(String.format("向[OU]同步用户资源失败，请检查[OU]服务是否正常! [%s]",ex));
        }
    }
}
