package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ou.client.SysEmployeeFeignClient;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import cn.ibizlab.pms.core.util.ibizzentao.helper.ActionHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TodoHelper;
import cn.ibizlab.pms.core.util.message.SendMessage;
import cn.ibizlab.pms.core.zentao.service.impl.TodoServiceImpl;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Todo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.lang.reflect.Field;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

/**
 * 实体[待办事宜表] 自定义服务对象
 */
@Slf4j
@Primary
@Service("TodoExService")
public class TodoExService extends TodoServiceImpl {

    @Autowired
    ActionHelper actionHelper;

    @Autowired
    TodoHelper todoHelper;
//    @Autowired
//    SysEmployeeFeignClient sysEmployeeFeignClient;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Activate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo activate(Todo et) {
        return super.activate(et);
    }
    /**
     * 自定义行为[AssignTo]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo assignTo(Todo et) {
        return super.assignTo(et);
    }
    /**
     * 自定义行为[Close]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo close(Todo et) {
        return super.close(et);
    }
    /**
     * 自定义行为[Finish]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Todo finish(Todo et) {
        return super.finish(et);
    }

    @Override
    @Transactional
    public Todo get(Long key) {
        Todo et = getById(key);
        if(et==null){
            et=new Todo();
            et.setId(key);
        }
        else{

            if(et.getType() != null && StaticDict.TypeAll.CYCLE.getValue().equals(et.getType()) && et.getConfig() != null && !"".equals(et.getConfig())) {
                JSONObject jsonObject = JSONObject.parseObject(et.getConfig());
                et.setConfigType(jsonObject.getString("type"));
                et.setConfigBeforedays(jsonObject.getInteger("beforeDays"));
                et.setConfigEnd(jsonObject.getTimestamp("end"));
                et.setConfigDay(0);
                if(StaticDict.CycleType.DAY.getValue().equals(et.getConfigType())) {
                    et.setConfigDay(jsonObject.getInteger("day"));
                }else if(StaticDict.CycleType.WEEK.getValue().equals(et.getConfigType())) {
                    et.setConfigWeek(jsonObject.getString("week"));
                }else if(StaticDict.CycleType.MONTH.getValue().equals(et.getConfigType())) {
                    et.setConfigMonth(jsonObject.getString("month"));
                }
            }
        }

        return et;
    }

    @Override
    @Transactional
    public Todo createCycle(Todo et) {
        List<Todo> todoList = this.list(new QueryWrapper<Todo>().eq("cycle", 1));

        for (Todo todo : todoList) {
            todoHelper.createByCycle(todo);
        }
        return super.createCycle(et);
    }

}

