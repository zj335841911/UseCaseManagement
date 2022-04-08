package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.service.impl.ProjectTeamServiceImpl;
import cn.ibizlab.pms.core.zentao.domain.Project;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.ProjectTeam;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[项目团队] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ProjectTeamExService")
public class ProjectTeamExService extends ProjectTeamServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    @Override
    public void saveBatch(List<ProjectTeam> list) {
        if(list.isEmpty() || list.size() == 0) {
            return;
        }
        Project project = new Project();
        project.setId(list.get(0).getRoot());
        project.setProjectteam(list);
        cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProjectHelper.class).manageMembers(project);
    }

    /**
     * 自定义行为[GetUserRole]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public ProjectTeam getUserRole(ProjectTeam et) {
        return super.getUserRole(et);
    }


}

