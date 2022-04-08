package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.impl.IbizproProjectWeeklyServiceImpl;
import cn.ibizlab.pms.core.zentao.domain.Project;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.core.zentao.service.IProjectService;
import cn.ibizlab.pms.core.zentao.service.ITaskEstimateService;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproProjectWeekly;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 实体[项目周报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbizproProjectWeeklyExService")
public class IbizproProjectWeeklyExService extends IbizproProjectWeeklyServiceImpl {


    @Autowired
    ITaskEstimateService iTaskEstimateService;

    @Autowired
    ITaskService iTaskService;

    @Autowired
    IProjectService iProjectService;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [PushSumProjectWeekly:定时推送项目周报] 行为扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbizproProjectWeekly pushSumProjectWeekly(IbizproProjectWeekly et) {
        Calendar calendar = Calendar.getInstance();
        Date today = calendar.getTime();
        calendar.setTime(today);
        //获取当前日期是一周的第几天
        int w = calendar.get(Calendar.DAY_OF_WEEK);
        calendar.add(Calendar.DATE, -w);
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        //上周六
        String beginDate = dateFormat.format(calendar.getTime());
        calendar.add(Calendar.DATE, 6);
        //本周五
        String endDate = dateFormat.format(calendar.getTime());
        DateFormat dateFormatYearMonth = new SimpleDateFormat("yyyy-MM");
        String date = dateFormatYearMonth.format(today);
        int week = getWeekAtThisMonth();
        List<IbizproProjectWeekly> ibizproProjectWeeklyList = new ArrayList<>();
        Timestamp timestamp = new Timestamp(today.getTime());
        List<Project> projectList = iProjectService.list(new QueryWrapper<Project>().last(" and SUPPROREPORT = '1' and pm != ''  and EXISTS(select 1 from zt_taskestimate tt left join zt_task t2 on tt.task = t2.id where t2.project = zt_project.id and (DATE_FORMAT(tt.date,'%Y-%m-%d') between DATE_FORMAT('" + beginDate + "','%Y-%m-%d') and DATE_FORMAT('" + endDate + "','%Y-%m-%d')) )"));
        for (Project project : projectList) {
            this.remove(new QueryWrapper<IbizproProjectWeekly>().eq("project", project.getId()).last("and (DATE_FORMAT(date,'%Y-%m-%d') between DATE_FORMAT('" + beginDate + "','%Y-%m-%d') and DATE_FORMAT('" + endDate + "','%Y-%m-%d'))"));
            IbizproProjectWeekly ibizproProjectWeekly = new IbizproProjectWeekly();
            ibizproProjectWeekly.setProject(project.getId());
            ibizproProjectWeekly.setDate(timestamp);
            ibizproProjectWeekly.setPm(project.getPm());
            List<Task> taskList = getTaskList(project.getId(), beginDate, endDate);
            ibizproProjectWeekly.setTasks(getCurTasks(taskList));
            ibizproProjectWeekly.setTotalestimates(getCusrTotalestimates(taskList, beginDate, endDate));
            ibizproProjectWeekly.setProjectweeklyname(project.getName() + "-" + date + "月第" + week + "周的周报");
            ibizproProjectWeekly.setYear(date.substring(0, 4));
            ibizproProjectWeekly.setMonth(date.substring(5));
            ibizproProjectWeekly.setWeek(String.valueOf(week));
            ibizproProjectWeekly.setBegindatestats(beginDate);
            ibizproProjectWeekly.setEnddatestats(endDate);
            ibizproProjectWeeklyList.add(ibizproProjectWeekly);
        }
        if (ibizproProjectWeeklyList.size() > 0) {
            this.createBatch(ibizproProjectWeeklyList);
        }
        return et;
    }

    /**
     * 获取当月第几周
     *
     * @return
     */
    public int getWeekAtThisMonth() {
        Date today = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(today);
        int week = calendar.get(Calendar.WEEK_OF_MONTH);
        return week;
    }


    /**
     * 获取所有的任务
     *
     * @param project
     * @return
     */
    public List<Task> getTaskList(Long project, String beginDate, String endDate) {

        return iTaskService.list(new QueryWrapper<Task>().eq("project", project).last("  and EXISTS(select 1 from zt_taskestimate tt where tt.task = zt_task.id and (DATE_FORMAT(tt.date,'%Y-%m-%d') between DATE_FORMAT('" + beginDate + "','%Y-%m-%d') and DATE_FORMAT('" + endDate + "','%Y-%m-%d')))"));
    }

    /**
     * 获取任务列
     *
     * @param tasklists
     * @return
     */
    public String getCurTasks(List<Task> tasklists) {
        String tasks = "";
        for (Task task : tasklists) {
            if (!"".equals(tasks)) {
                tasks += ",";
            }
            tasks += task.getId();

        }
        return tasks;
    }

    /**
     * 获取所有工时
     *
     * @param tasklists
     * @return
     */
    public Double getCusrTotalestimates(List<Task> tasklists, String beginDate, String endDate) {
        Double totalestimates = 0.0d;
        for (Task task : tasklists) {
            List<TaskEstimate> taskEstimateList = iTaskEstimateService.list(new QueryWrapper<TaskEstimate>().eq("task", task.getId()).last("and (DATE_FORMAT(date,'%Y-%m-%d') between DATE_FORMAT('" + beginDate + "','%Y-%m-%d') and DATE_FORMAT('" + endDate + "','%Y-%m-%d'))"));
            for (TaskEstimate taskEstimate : taskEstimateList) {
                totalestimates += taskEstimate.getConsumed();
            }
        }
        return totalestimates;
    }
}

