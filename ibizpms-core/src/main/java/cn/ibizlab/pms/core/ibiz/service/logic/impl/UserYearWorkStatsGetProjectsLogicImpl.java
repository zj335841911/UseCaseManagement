package cn.ibizlab.pms.core.ibiz.service.logic.impl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.KieContainer;

import cn.ibizlab.pms.core.ibiz.service.logic.IUserYearWorkStatsGetProjectsLogic;
import cn.ibizlab.pms.core.ibiz.domain.UserYearWorkStats;

/**
 * 关系型数据实体[GetProjects] 对象
 */
@Slf4j
@Service
public class UserYearWorkStatsGetProjectsLogicImpl implements IUserYearWorkStatsGetProjectsLogic{

    @Autowired
    private KieContainer kieContainer;


    @Autowired
    private cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService iBzSysDefaultService;

    public cn.ibizlab.pms.core.ibiz.service.IUserYearWorkStatsService getIBzSysDefaultService() {
        return this.iBzSysDefaultService;
    }

    public void execute(UserYearWorkStats et){

          KieSession kieSession = null;
        try{
           kieSession=kieContainer.newKieSession();
           kieSession.insert(et); 
           kieSession.setGlobal("useryearworkstatsgetprojectsdefault",et);
           kieSession.setGlobal("iBzSysUseryearworkstatsDefaultService",iBzSysDefaultService);
           kieSession.setGlobal("curuser", cn.ibizlab.pms.util.security.AuthenticationUser.getAuthenticationUser());
           kieSession.startProcess("cn.ibizlab.pms.core.ibiz.service.logic.useryearworkstatsgetprojects");

        }catch(Exception e){
            throw new RuntimeException("执行[获取研发人员相关数据]处理逻辑发生异常"+e);
        }finally {
            if(kieSession!=null)
            kieSession.destroy();
        }
    }

}
