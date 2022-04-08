package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.filter.ActionSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.ActionServiceImpl;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Action;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[系统日志] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ActionExService")
public class ActionExService extends ActionServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[EditComment]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Action editComment(Action et) {
        return super.editComment(et);
    }

    /**
     * 查询集合 MobType
     */
    @Override
    public Page<Action> searchMobType(ActionSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Action> pages=baseMapper.searchMobType(context.getPages(),context,context.getSelectCond());
        for(Action action : pages.getRecords()) {
            action.set("item", historyService.selectByAction(action.getId()));
        }
        return new PageImpl<Action>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
}

