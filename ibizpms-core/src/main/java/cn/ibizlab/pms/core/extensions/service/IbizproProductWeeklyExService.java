package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.impl.IbizproProductWeeklyServiceImpl;
import cn.ibizlab.pms.core.report.domain.IbzWeekly;
import cn.ibizlab.pms.core.util.ibizzentao.common.ZTDateUtil;
import cn.ibizlab.pms.core.util.ibizzentao.helper.IbzWeeklyHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.ProductHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TaskEstimateHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper;
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.netflix.discovery.converters.Auto;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproProductWeekly;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 实体[产品周报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbizproProductWeeklyExService")
public class IbizproProductWeeklyExService extends IbizproProductWeeklyServiceImpl {

    @Autowired
    ProductHelper productHelper;
    @Autowired
    TaskHelper taskHelper;
    @Autowired
    TaskEstimateHelper taskEstimateHelper;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }



    public int getDayOfWeek(Calendar c,Date today){
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


    /**
     * [SumProductWeekly:统计产品周报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbizproProductWeekly sumProductWeekly(IbizproProductWeekly et) {
        //计算统计范围，周六周日统计上周六到本周五，周一到周五统计上周六到本周五
        Calendar calendar = Calendar.getInstance();
        Date date = new Date();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        int weekday = getDayOfWeek(calendar,date);  //今天是周几
        String beginDate;
        String endDate;
        if (weekday == 1){
            //周日
            calendar.add(Calendar.DATE,-8);
            beginDate = dateFormat.format(calendar.getTime());
            calendar.add(Calendar.DATE,6);
            endDate = dateFormat.format(calendar.getTime());
        }else {
            //周一到周六
            calendar.add(Calendar.DATE,weekday*(-1));
            beginDate = dateFormat.format(calendar.getTime());
            calendar.add(Calendar.DATE,6);
            endDate = dateFormat.format(calendar.getTime());
        }


        Map<String,Object> map = et.getExtensionparams();
        Object isAuto = map.get("isauto");
        List<Product> productList;
        if (!"No".equals(isAuto)) {
            //定时器生成周报
            productList = productHelper.list(new QueryWrapper<Product>().last("and supproreport = '1' and po is not null and po <> '' and EXISTS(select * from zt_taskestimate tt left join zt_task t2  on tt.task = t2.id LEFT JOIN zt_story t3 on t3.id = t2.story where t3.product = zt_product.id and  tt.date >= '" + beginDate + "' and tt.date <= '" + endDate + "') "));
        }
        else {
            //产品经理点击生成周报
            productList = productHelper.list(new QueryWrapper<Product>().last("and supproreport = '1' and po = '"+ AuthenticationUser.getAuthenticationUser().getUsername() +"' and po <> '' and EXISTS(select * from zt_taskestimate tt left join zt_task t2  on tt.task = t2.id LEFT JOIN zt_story t3 on t3.id = t2.story where t3.product = zt_product.id and  tt.date >= '" + beginDate + "' and tt.date <= '" + endDate + "') "));
        }
        for (Product product : productList) {
            this.remove(new QueryWrapper<IbizproProductWeekly>().last("where product = '" + product.getId() + "' and date >= '" + beginDate + "' and date <= '" + endDate + "'"));
            DateFormat dateMonthFormat = new SimpleDateFormat("yyyy-MM");
            IbizproProductWeekly productWeekly = new IbizproProductWeekly();
            List<Task> taskList = getProductTask(product, beginDate, endDate);
            String tasksId = getTasksId(taskList);
            productWeekly.setBegindatestats(beginDate);
            productWeekly.setEnddatestats(endDate);
            productWeekly.setTasks(getTasksId(taskList));
            productWeekly.setProduct(product.getId());
            productWeekly.setPo(product.getPo());
            productWeekly.setDate(ZTDateUtil.now());
            productWeekly.setIbizproproductweeklyname(String.format("%1$s-%2$s-第%3$s周产品周报", product.getName(),dateMonthFormat.format(date), getWhichWeek()));
            productWeekly.setTotalestimates(getTotalConSumed(tasksId, beginDate, endDate));
            this.create(productWeekly);
        }
        return et;
    }

    //获取任务总消耗工时
    public double getTotalConSumed(String tasksId,String beginDate,String endDate){
        List<TaskEstimate> taskEstimates = taskEstimateHelper.list(new QueryWrapper<TaskEstimate>().last("where find_in_set(zt_TaskEstimate.task,'"+tasksId+"') and  zt_TaskEstimate.date >= '"+beginDate+"' and zt_TaskEstimate.date <= '"+endDate+"'"));
        double consumed = 0d;
        for (TaskEstimate taskEs : taskEstimates) {
            consumed += taskEs.getConsumed();
        }
        return consumed;
    }


    //获取当前是第几周
    public int getWhichWeek(){
        Date now = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(now);
        return calendar.get(Calendar.WEEK_OF_MONTH);
    }

    public List<Task> getProductTask(Product et,String beginDate,String endDate){
        return taskHelper.list(new QueryWrapper<Task>().last(" and (SELECT t1.id from zt_product t1 LEFT JOIN zt_story t2 on t2.product = t1.id where t2.id = zt_task.story)  = '"+et.getId()+"' and parent >= 0 and EXISTS(select 1 from zt_taskestimate tt where tt.task = zt_task.id and  tt.date >= '"+beginDate+"' and tt.date <= '"+endDate+"')"));

    }

    public String getTasksId(List<Task> tasks){
        String tasksId = "";
        for (Task task : tasks) {
            if (tasksId.length() >0 ){
                tasksId += ",";
            }
            tasksId += task.getId();
        }
        return tasksId;
    }
}

