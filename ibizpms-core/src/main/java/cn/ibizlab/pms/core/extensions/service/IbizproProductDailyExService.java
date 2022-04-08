package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.impl.IbizproProductDailyServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.helper.ProductHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TaskEstimateHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper;
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproProductDaily;
import org.bouncycastle.util.Times;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 实体[产品日报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbizproProductDailyExService")
public class IbizproProductDailyExService extends IbizproProductDailyServiceImpl {

    @Autowired
    TaskEstimateHelper taskEstimateHelper;

    @Autowired
    ProductHelper productHelper;

    @Autowired
    TaskHelper taskHelper;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [StatsProductDaily:汇总产品日报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public IbizproProductDaily statsProductDaily(IbizproProductDaily et) {
        return createProductDaily(et, false);
    }

    /**
     * [ManualCreateDaily:手动生成产品日报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public IbizproProductDaily manualCreateDaily(IbizproProductDaily et) {
        return createProductDaily(et, true);
    }

    /**
     * 根据参数isManual来判断是否只生成当前用户昨日的产品日报
     * @param isManual
     * @return
     */
    private IbizproProductDaily createProductDaily(IbizproProductDaily et, Boolean isManual) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date now = new Date();
        Date begin, end, dailyDate;
        if (getDayOfWeek(now) == 1) {
            begin = dateAddDay(now, -3);
        } else {
            begin = dateAddDay(now, -1);
        }
        end = dateAddDay(now, -1);
        dailyDate = begin;
        String dailyDateStr = dateFormat.format(dailyDate);
        String beginStr = dateFormat.format(begin);
        String endStr = dateFormat.format(end);
        List<Product> productList = getProductList(isManual, beginStr, endStr);
        List<IbizproProductDaily> productDailies = new ArrayList<>();
        Timestamp dailyDateStamp = new Timestamp(dailyDate.getTime());
        Timestamp beginStamp = new Timestamp(begin.getTime());
        Timestamp endStamp = new Timestamp(end.getTime());
        for (Product product : productList) {
            this.remove(new QueryWrapper<IbizproProductDaily>().eq("product", product.getId()).last(" and DATE_FORMAT(date, '%Y-%m-%d') = '" + dailyDateStr + "'"));
            IbizproProductDaily productDaily = new IbizproProductDaily();
            productDaily.setIbizproproductdailyname(String.format("%1$s-%2$s的日报" ,product.getName(), dailyDateStr));
            productDaily.setPo(product.getPo());
            productDaily.setProduct(product.getId());
            productDaily.setDate(dailyDateStamp);
            productDaily.setBegin(beginStamp);
            productDaily.setEnd(endStamp);
            String productTasks = getProductTasks(productDaily.getProduct(), beginStr, endStr);
            productDaily.setTasks(productTasks);
            productDaily.setTotalestimates(getTotalEstimates(productTasks, beginStr, endStr));
            productDailies.add(productDaily);
        }
        if (productDailies.size() > 0) {
            this.createBatch(productDailies);
        }
        return et;
    }

    /**
     * 获取给定日期在一周中的第几天
     * @param date
     * @return
     */
    private Integer getDayOfWeek(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return calendar.get(Calendar.DAY_OF_WEEK) - 1;
    }

    /**
     * 日期加减天数运算
     * @param date
     * @param day
     * @return
     */
    private Date dateAddDay(Date date, Integer day){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.DAY_OF_MONTH, day);
        return calendar.getTime();
    }

    /**
     * 获取要生成的日报的产品
     * @param isManual
     * @param beginStr
     * @param endStr
     * @return
     */
    private List<Product> getProductList(Boolean isManual, String beginStr, String endStr) {
        List<Product> productList;
        if (isManual) {
            productList = productHelper.list(new QueryWrapper<Product>().last(String.format(" and SUPPROREPORT = '1' and po = '%1$s' and EXISTS(select 1 from zt_taskestimate t1 left join zt_task t2 on t1.task = t2.id left join zt_story t3 on t2.story = t3.id where t3.product = zt_product.id and t1.date >= '%2$s' and t1.date <= '%3$s')", AuthenticationUser.getAuthenticationUser().getUsername(), beginStr, endStr)));
        } else {
            productList = productHelper.list(new QueryWrapper<Product>().last(String.format(" and SUPPROREPORT = '1' and po is not null and po <> '' and EXISTS(select 1 from zt_taskestimate t1 left join zt_task t2 on t1.task = t2.id left join zt_story t3 on t2.story = t3.id where t3.product = zt_product.id and t1.date >= '%1$s' and t1.date <= '%2$s')", beginStr, endStr)));
        }
        return productList;
    }

    /**
     * 获取产品在日报描述当天的相关项目的相关任务id
     * @param productId
     * @param beginStr
     * @param endStr
     * @return
     */
    private String getProductTasks(Long productId, String beginStr, String endStr) {
        StringBuffer productTasks = new StringBuffer();
        List<Task> taskList = taskHelper.list(new QueryWrapper<Task>().last(String.format(" and exists(select 1 from zt_story t1 where t1.id = zt_task.story and t1.product = %1$d) and exists(select 1 from zt_taskestimate t1 where t1.task = zt_task.id and t1.date >= '%2$s' && t1.date <= '%3$s')", productId, beginStr, endStr)));
        for (Task task : taskList) {
            if (productTasks.length() > 0) {
                productTasks.append(',');
            }
            productTasks.append(task.getId());
        }
        return productTasks.toString();
    }

    /**
     * 获取产品在日报描述当天的相关项目的相关任务所花费的工时
     * @param productTasks
     * @param beginStr
     * @param endStr
     * @return
     */
    private Double getTotalEstimates(String productTasks, String beginStr, String endStr) {
        Double totalEstimates = 0.0D;
        List<TaskEstimate> estimateList = taskEstimateHelper.list(new QueryWrapper<TaskEstimate>().last(String.format(" where FIND_IN_SET(task, '%1$s') and date >= '%2$s' and date <= '%3$s'", productTasks, beginStr, endStr)));
        for (TaskEstimate estimate : estimateList) {
            totalEstimates += estimate.getConsumed();
        }
        return totalEstimates;
    }
}

