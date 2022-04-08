package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.service.impl.PRODUCTTEAMServiceImpl;
import com.alibaba.csp.sentinel.util.StringUtil;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.PRODUCTTEAM;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.util.ObjectUtils;

import java.util.*;

/**
 * 实体[产品团队] 自定义服务对象
 */
@Slf4j
@Primary
@Service("PRODUCTTEAMExService")
public class PRODUCTTEAMExService extends PRODUCTTEAMServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [ProductTeamGuoLv:PmsEe团队管理过滤] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public PRODUCTTEAM productTeamGuoLv(PRODUCTTEAM et) {
        return super.productTeamGuoLv(et);
    }
//    @Override
    public void saveBatch(List<PRODUCTTEAM> list) {
        boolean flag = true;
        List<String> allTeamAccount = new ArrayList<>();
        for (PRODUCTTEAM productteam : list) {
            if (allTeamAccount.contains(productteam.getAccount()) && productteam.getJoin() != null && productteam.getEnd() != null){
                flag = this.jug(list,productteam,flag);
                if (!flag){
                    throw new RuntimeException("同一成员的加盟日期和结束日期不能相同！");
                }
            }
            else {
                allTeamAccount.add(productteam.getAccount());
            }
        }

        List<PRODUCTTEAM> create = new ArrayList<>();
        List<PRODUCTTEAM> update = new ArrayList<>();
        for (PRODUCTTEAM et : list) {
            if (ObjectUtils.isEmpty(et.getId()) || ObjectUtils.isEmpty(getById(et.getId()))) {
                create.add(et);
            } else {
                update.add(et);
            }
        }
        if (create.size() > 0) {
            getProxyService().createBatch(create);
        }
        if (update.size() > 0) {
            getProxyService().updateBatch(update);
        }
    }


    public boolean jug(List<PRODUCTTEAM> list,PRODUCTTEAM team,boolean flag){
        int i = 1;
        for (PRODUCTTEAM productteam : list) {
            if (productteam.getAccount().equals(team.getAccount()) && StringUtils.compare(productteam.getJoin().toString(),team.getJoin().toString()) == 0 && StringUtils.compare(productteam.getEnd().toString(),team.getEnd().toString()) == 0){
                if (i == 1){
                    i++;
                }else {
                    flag = false;
                    break;
                }
            }
        }
        return flag;
    }
}

