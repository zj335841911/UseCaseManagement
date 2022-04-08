package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.domain.SysUpdateFeatures;
import cn.ibizlab.pms.core.ibiz.service.ISysUpdateFeaturesService;
import cn.ibizlab.pms.core.ibiz.service.impl.SysUpdateLogServiceImpl;
import cn.ibizlab.pms.util.dict.StaticDict;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibiz.domain.SysUpdateLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.util.StringUtils;

import java.util.*;

/**
 * 实体[更新日志] 自定义服务对象
 */
@Slf4j
@Primary
@Service("SysUpdateLogExService")
public class SysUpdateLogExService extends SysUpdateLogServiceImpl {

    @Autowired
    ISysUpdateFeaturesService iSysUpdateFeaturesService;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[GetLastUpdateInfo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public SysUpdateLog getLastUpdateInfo(SysUpdateLog et) {
        List<SysUpdateLog> list = this.list(new QueryWrapper<SysUpdateLog>().eq("LATESTUPDATE", StaticDict.YesNo2.ITEM_1.getValue()).eq("UPDATEBRANCH", StaticDict.SYS_UPDATE_BRANCH.MOB.getValue()).orderByDesc("`update`").last(" LIMIT 0,1 "));
        if(list.size() == 0) {
            return et;
        }
        SysUpdateLog sysUpdateLog = list.get(0);
        List<SysUpdateFeatures> list_10 = iSysUpdateFeaturesService.list(new QueryWrapper<SysUpdateFeatures>().eq("SYS_UPDATE_LOGID", sysUpdateLog.getSysupdatelogid()).eq("type", StaticDict.SYS_UPDATE_LOG_TYPE.ITEM_10.getValue()).orderByAsc("DISPLAYORDER"));
        List<SysUpdateFeatures> list_20 = iSysUpdateFeaturesService.list(new QueryWrapper<SysUpdateFeatures>().eq("SYS_UPDATE_LOGID", sysUpdateLog.getSysupdatelogid()).eq("type", StaticDict.SYS_UPDATE_LOG_TYPE.ITEM_20.getValue()).orderByAsc("DISPLAYORDER"));

        JSONArray jsonArray = new JSONArray();
        JSONObject jsonObject = new JSONObject();
        JSONObject jsonObject_10 = new JSONObject();
        jsonObject_10.put("title", StaticDict.SYS_UPDATE_LOG_TYPE.ITEM_10.getText());
        jsonObject_10.put("items", JSONArray.parseArray(JSON.toJSONString(list_10)));
        jsonArray.add(jsonObject_10);
        JSONObject jsonObject_20 = new JSONObject();
        jsonObject_20.put("title", StaticDict.SYS_UPDATE_LOG_TYPE.ITEM_20.getText());
        jsonObject_20.put("items", JSONArray.parseArray(JSON.toJSONString(list_20)));
        jsonArray.add(jsonObject_20);
        jsonObject.put("updesc", sysUpdateLog.getUpdesc());
        jsonArray.add(jsonObject);
        sysUpdateLog.setUpdesc(jsonArray.toJSONString());
        return sysUpdateLog;
    }
}

