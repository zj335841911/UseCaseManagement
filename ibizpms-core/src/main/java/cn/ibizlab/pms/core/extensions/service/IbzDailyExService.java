package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.report.service.IIbzDailyService;
import cn.ibizlab.pms.core.report.service.impl.IbzDailyServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.helper.ZTBaseHelper;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.google.common.base.Joiner;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.report.domain.IbzDaily;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.sql.Timestamp;
import java.util.*;

/**
 * 实体[日报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbzDailyExService")
public class IbzDailyExService extends IbzDailyServiceImpl {

    @Autowired
    ITaskService iTaskService;

    @Autowired
    IIbzDailyService ibzDailyService;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [CreateUserDaily:定时生成用户日报] 行为扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily createUserDaily(IbzDaily et) {
        return super.createUserDaily(et);
    }

    /**
     * [GetYeaterdayDailyPlansTaskEdit:获取前一天日报计划参与任务（编辑）] 行为扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily getYeaterdayDailyPlansTaskEdit(IbzDaily et) {
        CachedBeanCopier.copy(get(et.getIbzdailyid()), et);
        Timestamp date = et.getDate();
        List<Task> todayDailyCompleteTasks = iTaskService.list(new QueryWrapper<Task>().eq("finishedBy", et.getAccount()).last(" and DATE_FORMAT(finisheddate,'%Y-%m-%d') = DATE_FORMAT('" + date + "','%Y-%m-%d')"));
        String todaytask = et.getTodaytask() == null ? "" : et.getTodaytask();
        String[] todayTaskids = todaytask.split(ZTBaseHelper.MULTIPLE_CHOICE);
        Set<String> ids = new HashSet<>(Arrays.asList(todayTaskids));
        for (Task task : todayDailyCompleteTasks) {
            ids.add(String.valueOf(task.getId()));
        }
        et.setTodaytask(Joiner.on(",").join(ids));
        return et;
    }

    /**
     * [GetYesterdayDailyPlansTask:获取前一天日报计划参与任务（新建）] 行为扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily getYesterdayDailyPlansTask(IbzDaily et) {
        //获取昨天的日报
        List<IbzDaily> list = ibzDailyService.list(new QueryWrapper<IbzDaily>().eq("account", AuthenticationUser.getAuthenticationUser().getUsername()).last(" and DATE_FORMAT(date,'%Y-%m-%d') = DATE_FORMAT(DATE_SUB(NOW(), INTERVAL 1 day),'%Y-%m-%d')"));
        IbzDaily yesterdayIbzDaily = new IbzDaily();
        Set<String> taskIdsSet = new HashSet<>();
        if (list.size() > 0) {
            yesterdayIbzDaily = list.get(0);
            //今日新建日报时预显示的完成任务 包括 昨天计划参与任务 + 今日完成任务 要去重
            //昨天计划参与任务id
            String tomorrowplanstask = yesterdayIbzDaily.getTomorrowplanstask() == null ? "" : yesterdayIbzDaily.getTomorrowplanstask();
            String[] yesterdayDailyTomorrowTaskList = tomorrowplanstask.split(ZTBaseHelper.MULTIPLE_CHOICE);
            taskIdsSet = new HashSet<>(Arrays.asList(yesterdayDailyTomorrowTaskList));
        }
        Timestamp date = et.getDate();
        //今日完成任务
        List<Task> todayDailyCompleteTasks = iTaskService.list(new QueryWrapper<Task>().eq("finishedBy", AuthenticationUser.getAuthenticationUser().getUsername()).last(" and DATE_FORMAT(finisheddate,'%Y-%m-%d') = DATE_FORMAT((case when " + date + " is Null then now() else " + date + " end),'%Y-%m-%d')"));
        for (Task task : todayDailyCompleteTasks) {
            taskIdsSet.add(String.valueOf(task.getId()));
        }
        et.setTodaytask(Joiner.on(",").join(taskIdsSet));
        et.setWorktoday(yesterdayIbzDaily.getPlanstomorrow());

        return et;
    }

    /**
     * [HaveRead:已读] 行为扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily haveRead(IbzDaily et) {
        return super.haveRead(et);
    }

    /**
     * [LinkCompleteTask:关联完成任务] 行为扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily linkCompleteTask(IbzDaily et) {
        return super.linkCompleteTask(et);
    }

    /**
     * [PushUserDaily:定时推送待阅提醒用户日报] 行为扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily pushUserDaily(IbzDaily et) {
        return super.pushUserDaily(et);
    }

    /**
     * [Submit:提交] 行为扩展
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzDaily submit(IbzDaily et) {
        return super.submit(et);
    }
}

