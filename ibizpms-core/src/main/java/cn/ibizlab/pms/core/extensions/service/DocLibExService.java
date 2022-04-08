package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.util.ibizzentao.helper.DocLibHelper;
import cn.ibizlab.pms.core.zentao.service.impl.DocLibServiceImpl;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.DocLib;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[文档库] 自定义服务对象
 */
@Slf4j
@Primary
@Service("DocLibExService")
public class DocLibExService extends DocLibServiceImpl {

    @Autowired
    DocLibHelper docLibHelper;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Collect]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public DocLib collect(DocLib et) {
        DocLib docLib = this.get(et.getId());
        String collector = docLib.getCollector();
        if ("".equals(collector) || "/".equals(collector)) {
            collector += ",";
        }
        collector += AuthenticationUser.getAuthenticationUser().getUsername() + ",";
        et.setCollector(collector);
        docLibHelper.updateById(et);

        return super.collect(et);
    }

    /**
     * 自定义行为[UnCollect]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public DocLib unCollect(DocLib et) {
        DocLib docLib = this.get(et.getId());
        String collector = docLib.getCollector();
        collector = collector.replaceFirst(AuthenticationUser.getAuthenticationUser().getUsername() + ",", "");
        if (",".equals(collector)) {
            collector = "";
        }
        et.setCollector(collector);
        docLibHelper.updateById(et);

        return super.unCollect(et);
    }
}

