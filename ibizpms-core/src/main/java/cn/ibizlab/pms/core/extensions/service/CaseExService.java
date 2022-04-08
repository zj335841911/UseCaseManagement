package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.domain.CaseStep;
import cn.ibizlab.pms.core.zentao.domain.File;
import cn.ibizlab.pms.core.zentao.domain.TestRun;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;
import cn.ibizlab.pms.core.zentao.filter.TestRunSearchContext;
import cn.ibizlab.pms.core.zentao.service.IFileService;
import cn.ibizlab.pms.core.zentao.service.impl.CaseServiceImpl;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Case;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.math.BigInteger;
import java.util.*;

/**
 * 实体[测试用例] 自定义服务对象
 */
@Slf4j
@Primary
@Service("CaseExService")
public class CaseExService extends CaseServiceImpl {

    @Autowired
    IFileService iFileService;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }


    /**
     * 行为[Get]用户扩展
     * @param key
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public Case get(Long key) {
        Case et = getById(key);
        if(et==null){
            et=new Case();
            et.setId(key);
        }
        else{
            CaseStepSearchContext context = new CaseStepSearchContext();
            context.setN_case_eq(key);
            context.setN_version_eq(et.getVersion());
            et.setCasestep(casestepService.searchDefault(context).getContent());
        }
        return et;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Case getTestTaskCntRun(Case et) {
        String task = et.getTask();
        et = this.get(et.getId());
        Map<String, Object> parm = new HashMap<>();
        parm.put("case", et.getId());
        parm.put("task", task);
        String failSql = "select t.* from zt_testresult t left join zt_testrun t11 on t.run = t11.id where  t.`case` = #{et.case} and t11.task = #{et.task}  and t.caseResult in('fail','blocked') ";
        String sql = "select t.* from zt_testresult t left join zt_testrun t11 on t.run = t11.id where  t.`case` = #{et.case} and t11.task = #{et.task}  ";
        et.setResultcnt(this.select(sql,parm).size());
        et.setResultfalicnt(this.select(failSql, parm).size());
        //自定义代码
        return et;
    }


}

