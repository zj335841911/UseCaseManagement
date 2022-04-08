package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.report.service.impl.IbzWeeklyServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.google.common.base.Joiner;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.report.domain.IbzWeekly;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 实体[周报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbzWeeklyExService")
public class IbzWeeklyExService extends IbzWeeklyServiceImpl {

    @Autowired
    TaskHelper taskHelper;


    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [CreateEveryWeekReport:定时生成每周周报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly createEveryWeekReport(IbzWeekly et) {
        return super.createEveryWeekReport(et);
    }
    /**
     * [HaveRead:已读] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly haveRead(IbzWeekly et) {
        return super.haveRead(et);
    }
    /**
     * [JugThisWeekCreateWeekly:判断本周是否创建过周报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly jugThisWeekCreateWeekly(IbzWeekly et) {
        Object actioninfo = et.get("actioninfo");

        Date today = new Date();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM");
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(today);
        int week = calendar.get(Calendar.WEEK_OF_MONTH); //第几周
        Calendar c = Calendar.getInstance();
        int weekday = getMondayAndSunday(c,today);

        c.add(Calendar.DAY_OF_MONTH,weekday == 0 ? 0 : (8-weekday));
        Date sunday = c.getTime();
        c.add(Calendar.DAY_OF_MONTH,-6);
        Date monday = c.getTime();
        List<IbzWeekly> list = this.list(new QueryWrapper<IbzWeekly>().eq("account",AuthenticationUser.getAuthenticationUser().getUsername()).last("and DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date"));
        for (IbzWeekly ibzWeekly : list) {
            if (ibzWeekly.getDate().getTime() >= monday.getTime() ){
                throw new RuntimeException(String.format(actioninfo.toString(),AuthenticationUser.getAuthenticationUser().getUsername(),dateFormat.format(today),week));
            }
        }
        return et;
    }
    /**
     * [PushUserWeekly:定时推送待阅提醒用户周报提交] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly pushUserWeekly(IbzWeekly et) {
        return super.pushUserWeekly(et);
    }
    /**
     * [Submit:提交] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzWeekly submit(IbzWeekly et) {
        return super.submit(et);
    }



    public int getMondayAndSunday(Calendar c,Date today){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String strDate = sdf.format(today);
        try {
            today = sdf.parse(strDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        c.setTime(today);
        int weekday = c.get(Calendar.DAY_OF_WEEK);  //今天是周几
        return weekday;
    }

    @Override
    @Transactional
    public IbzWeekly createGetLastWeekPlanAndWork(IbzWeekly et){
//        Date today = new Date();
//        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM");
//        Calendar calendar = Calendar.getInstance();
//        calendar.setTime(today);
//        int week = calendar.get(Calendar.WEEK_OF_MONTH); //第几周
//        Calendar c = Calendar.getInstance();
//        int weekday = getMondayAndSunday(c,today);
//
//        c.add(Calendar.DAY_OF_MONTH,weekday == 0 ? 0 : (8-weekday));
//        Date sunday = c.getTime();
//        c.add(Calendar.DAY_OF_MONTH,-6);
//        Date monday = c.getTime();

        Set<String> taskIdSet = new HashSet<>();
        //本周已完成任务
        List<Task> tasks = taskHelper.list(new QueryWrapper<Task>().eq("deleted","0").eq("finishedBy",AuthenticationUser.getAuthenticationUser().getUsername()).last("and YEARWEEK(date_format(DATE_SUB( finishedDate,INTERVAL 1 DAY),'%Y-%m-%d')) = YEARWEEK(now()) "));

        for (Task t: tasks) {
            taskIdSet.add(t.getId().toString());
        }


        String lastWeekNextWeekPlan = ""; //上周周报计划工作
        //获取上周的周报
        List<IbzWeekly> list = this.list(new QueryWrapper<IbzWeekly>().eq("account",AuthenticationUser.getAuthenticationUser().getUsername()).last(" and YEARWEEK(DATE_FORMAT(DATE_SUB( date,INTERVAL 1 DAY),'%Y-%m-%d')) = YEARWEEK(now())-1")); //YEARWEEK(DATE_FORMAT(DATE_SUB( date,INTERVAL 1 DAY),'%Y-%m-%d'))
        if (list.size() != 0){
            if (list.get(list.size()-1).getNextweektask() != null){
                String[] lastWeekPlanTask = list.get(list.size()-1).getNextweektask().split(","); //上周计划参与任务
                taskIdSet.addAll(Arrays.asList(lastWeekPlanTask));
            }
            lastWeekNextWeekPlan = list.get(list.size()-1).getPlannextweek();
        }
        if (taskIdSet.size() != 0){
            et.setThisweektask(Joiner.on(",").join(taskIdSet));
        }
        if (!"".equals(lastWeekNextWeekPlan)){
            et.setWorkthisweek(lastWeekNextWeekPlan); //将上周周报的下周计划工作填充到新建周报的本周计划工作
        }
        et.setIbzweeklyid(null);
        return et;
    }


    @Override
    @Transactional
    public IbzWeekly editGetLastWeekTaskAndComTask(IbzWeekly et){
        Set<String> taskIdSet = new HashSet<>();
        CachedBeanCopier.copy(get(et.getIbzweeklyid()),et);
        //String tasksId = "";
        if (et.getThisweektask() != null){
            taskIdSet.addAll(Arrays.asList(et.getThisweektask().split(","))); //将周报的已有的完成任务添加到集合，
        }
//        List<IbzWeekly> list = this.list(new QueryWrapper<IbzWeekly>().last("where YEARWEEK(date_format(date,'%Y-%m-%d')) = YEARWEEK(now())-1"));
//        for (IbzWeekly ibzWeekly : list) {
//            if (et.getAccount().equals(ibzWeekly.getAccount())){  //新建是本人上周有周报
//                tasksId += ibzWeekly.getNextweektask();
//            }
//        }
        //查询本周我完成的任务
        List<Task> tasks = taskHelper.list(new QueryWrapper<Task>().eq("deleted","0").eq("finishedBy",et.getAccount()).last("and YEARWEEK(date_format(DATE_SUB( finishedDate,INTERVAL 1 DAY),'%Y-%m-%d')) = YEARWEEK('"+et.getDate()+"') "));
        for (Task t : tasks) {
            taskIdSet.add(t.getId().toString());
        }
        if (taskIdSet.size() != 0){
            et.setThisweektask(Joiner.on(",").join(taskIdSet));
        }
        return et;
    }



}

