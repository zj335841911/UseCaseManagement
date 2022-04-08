package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.BurnServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Burn;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[burn] 自定义服务对象
 */
@Slf4j
@Primary
@Service("BurnExService")
public class BurnExService extends BurnServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[ComputeBurn]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Burn computeBurn(Burn et) {
        String deleteTodaySql = "delete from zt_burn where date = DATE_FORMAT( now(), '%Y-%m-%d' )";
        this.execute(deleteTodaySql, null);

        String insertBurnsSql = "INSERT INTO zt_burn SELECT t1.project, 0, DATE_FORMAT( now(), '%Y-%m-%d' ), sum( t1.estimate ) AS estimate, sum( IF ( t1.`status` <> 'closed', t1.`left`, 0 ) ) AS `left`, sum( t1.consumed ) AS consumed FROM zt_task t1 LEFT JOIN zt_project t ON t.id = t1.project WHERE t.`end` >= DATE_FORMAT( now(), '%Y-%m-%d' ) AND t.type <> 'ops' AND t.`status` NOT IN ( 'done', 'closed', 'suspended' ) AND t1.deleted = '0' AND t1.parent >= 0 AND t1.`status` <> 'cancel' GROUP BY t1.project";
        this.execute(insertBurnsSql, null);
        return super.computeBurn(et);
    }
}

