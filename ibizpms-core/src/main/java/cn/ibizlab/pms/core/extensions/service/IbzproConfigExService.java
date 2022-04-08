package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.impl.IbzproConfigServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.alibaba.druid.sql.ast.expr.SQLCaseExpr;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.google.gson.JsonObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IbzproConfig;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[系统配置表] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbzproConfigExService")
public class IbzproConfigExService extends IbzproConfigServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [GetSystemConfig:获取系统配置] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzproConfig getSystemConfig(IbzproConfig et) {
        Map<String,Object> maps = et.getExtensionparams();
        String userId = maps.get("userid").toString();
        String userName = maps.get("username").toString();
        String managementStatus = et.getManagementstatus();

        List<IbzproConfig> list = this.list(new QueryWrapper<IbzproConfig>().eq("createman",userId).eq("Scope", StaticDict.ConfigScope.USER.getValue()).eq("vaild", StaticDict.YesNo.ITEM_1.getValue()).orderByDesc("updatedate"));
        if(list.size() > 0) {
            IbzproConfig config = list.get(0);
            if (!et.getManagementstatus().equals(config.getManagementstatus())){
                config.setManagementstatus(et.getManagementstatus());
                this.update(config);
            }
        }else {
            et.setCreateman(userId);
            et.setCreatedate(ZTDateUtil.now());
            et.setManagementstatus(managementStatus);
            et.setType(StaticDict.ConfigGroup.ITEM.getValue());
            et.setScope(StaticDict.ConfigScope.USER.getValue());
            et.setVaild(StaticDict.YesNo.ITEM_1.getValue());
            et.setIbzproconfigname(userName+"个人配置");
            this.create(et);
        }

        return et;
    }
}

