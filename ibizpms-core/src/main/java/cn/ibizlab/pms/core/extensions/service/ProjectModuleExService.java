package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.domain.ProjectModule;
import cn.ibizlab.pms.core.ibiz.filter.ProjectModuleSearchContext;
import cn.ibizlab.pms.core.ibiz.service.impl.ProjectModuleServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.helper.ModuleHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

/**
 * 实体[项目] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ProjectModuleExService")
public class ProjectModuleExService extends ProjectModuleServiceImpl {

    @Autowired
    ModuleHelper moduleHelper;

    /**
     * 查询集合 任务模块
     */
    @Override
    public Page<ProjectModule> searchTaskModules(ProjectModuleSearchContext context) {
        context.setN_root_eq(null);
        context.getSearchCond().clear();
        context.setQuery(context.getQuery());
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProjectModule> pages=baseMapper.searchTaskModules(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProjectModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    @Override
    public boolean remove(Long key) {
        return moduleHelper.delete(key);
    }
}
