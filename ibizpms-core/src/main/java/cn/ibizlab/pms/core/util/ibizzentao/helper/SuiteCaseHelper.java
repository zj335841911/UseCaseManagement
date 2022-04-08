package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.Case;
import cn.ibizlab.pms.core.zentao.domain.SuiteCase;
import cn.ibizlab.pms.core.zentao.mapper.SuiteCaseMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
/**
 * @author chenxiang
 */
@Component
@Slf4j
public class SuiteCaseHelper extends ZTBaseHelper<SuiteCaseMapper, SuiteCase> {

    @Override
    public boolean hasDeleted() {
        return false;
    }

    @Override
    public boolean hasId() {
        return false;
    }

}
