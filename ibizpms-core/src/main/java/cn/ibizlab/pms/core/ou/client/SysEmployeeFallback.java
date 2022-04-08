package cn.ibizlab.pms.core.ou.client;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import org.springframework.stereotype.Component;

/**
 * 实体[SysEmployee] 服务对象接口
 */
@Component
public class SysEmployeeFallback implements SysEmployeeFeignClient {

    public Page<SysEmployee> select() {
        return null;
    }

    public SysEmployee create(SysEmployee et) {
        return null;
    }
    public Boolean createBatch(List<SysEmployee> sysemployees) {
        return false;
    }

    public SysEmployee update(String userid, SysEmployee et) {
        return null;
    }
    public Boolean updateBatch(List<SysEmployee> sysemployees) {
        return false;
    }


    public Boolean remove(String userid) {
        return false;
    }
    public Boolean removeBatch(Collection<String> idList) {
        return false;
    }

    public SysEmployee get(String userid) {
        return null;
    }


    public String getByCodeName(String codeName) {
            return null;
    }


    public SysEmployee getDraft(SysEmployee entity){
        return null;
    }



    public Boolean checkKey(SysEmployee et) {
        return false;
    }


    public Object saveEntity(SysEmployee et) {
        return null;
    }
    public Boolean save(SysEmployee et) {
        return false;
    }
    public Boolean saveBatch(List<SysEmployee> sysemployees) {
        return false;
    }

    public Page<SysEmployee> searchBugUser(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchContActList(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchDefault(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchProductTeamM(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchProjectTeamM(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchProjectTeamMProduct(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchProjectTeamTaskUserTemp(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchProjectTeamUser(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchProjectTeamUserTask(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchProjectteamPk(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchStoryProductTeamPK(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchTaskMTeam(SysEmployeeSearchContext context) {
        return null;
    }


    public Page<SysEmployee> searchTaskTeam(SysEmployeeSearchContext context) {
        return null;
    }


}
