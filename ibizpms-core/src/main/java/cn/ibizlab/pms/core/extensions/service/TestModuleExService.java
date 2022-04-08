package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.domain.TestModule;
import cn.ibizlab.pms.core.ibiz.service.impl.TestModuleServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.helper.ModuleHelper;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Primary
@Service("TestModuleExService")
public class TestModuleExService extends TestModuleServiceImpl {

    @Autowired
    ModuleHelper moduleHelper;

    @Override
    public boolean remove(Long key) {
        return moduleHelper.delete(key);
    }

}
