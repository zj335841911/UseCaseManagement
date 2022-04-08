package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.service.impl.IbizproProductMonthlyServiceImpl;
import cn.ibizlab.pms.core.util.ibizzentao.helper.ProductHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TaskEstimateHelper;
import cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper;
import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IbizproProductMonthly;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 实体[产品月报] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbizproProductMonthlyExService")
public class IbizproProductMonthlyExService extends IbizproProductMonthlyServiceImpl {

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

    /**
     * [StatsProductMonthly:汇总产品月报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public IbizproProductMonthly statsProductMonthly(IbizproProductMonthly et) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM");
        Date monthlyDate = dateAddMonth(new Date(), -1);
        String monthlyDateStr = dateFormat.format(monthlyDate);
        List<Product> productList = productHelper.list(new QueryWrapper<Product>().last(" and SUPPROREPORT = '1' and po is not null and po <> '' and EXISTS(select 1 from zt_taskestimate t1 left join zt_task t2 on t1.task = t2.id left join zt_story t3 on t2.story = t3.id where t3.product = zt_product.id and DATE_FORMAT(t1.date, '%Y-%m') = '" + monthlyDateStr + "')"));
        createProductMonthly(productList, monthlyDateStr, new Timestamp(monthlyDate.getTime()));
        return et;
    }

    /**
     * [StatsProductMonthly:手动生成产品月报] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public IbizproProductMonthly manualCreateMonthly(IbizproProductMonthly et) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM");
        Date monthlyDate = new Date();
        if (!isLastDayOfMonth(monthlyDate)) {
            monthlyDate = dateAddMonth(monthlyDate, -1);
        }
        String monthlyDateStr = dateFormat.format(monthlyDate);
        List<Product> productList = productHelper.list(new QueryWrapper<Product>().last(" and SUPPROREPORT = '1' and po = '" + AuthenticationUser.getAuthenticationUser().getUsername() + "' and EXISTS(select 1 from zt_taskestimate t1 left join zt_task t2 on t1.task = t2.id left join zt_story t3 on t2.story = t3.id where t3.product = zt_product.id and DATE_FORMAT(t1.date, '%Y-%m') = '" + monthlyDateStr + "')"));
        createProductMonthly(productList, monthlyDateStr, new Timestamp(monthlyDate.getTime()));
        return et;
    }

    /**
     * 根据产品列表和日期生成对应的产品月报
     * @param productList
     * @param monthlyDateStr
     * @param monthlyDateStamp
     * @return
     */
    private Boolean createProductMonthly(List<Product> productList, String monthlyDateStr, Timestamp monthlyDateStamp) {
        List<IbizproProductMonthly> productMonthlies = new ArrayList<>();
        for (Product product : productList) {
            this.remove(new QueryWrapper<IbizproProductMonthly>().eq("product", product.getId()).eq("`Year_month`", monthlyDateStr));
            IbizproProductMonthly productMonthly = new IbizproProductMonthly();
            productMonthly.setIbizproproductmonthlyname(String.format("%1$s-%2$s的月报" ,product.getName(), monthlyDateStr));
            productMonthly.setProduct(product.getId());
            productMonthly.setDate(monthlyDateStamp);
            productMonthly.setYearmonth(monthlyDateStr);
            String productTasks = getProductTasks(productMonthly.getProduct(), monthlyDateStr);
            productMonthly.setTasks(productTasks);
            productMonthly.setTotalestimates(getTotalEstimates(productTasks, monthlyDateStr));
            productMonthlies.add(productMonthly);
        }
        if (productMonthlies.size() > 0) {
            this.createBatch(productMonthlies);
        }
        return true;
    }

    /**
     * 日期加减月数运算
     * @param date
     * @param month
     * @return
     */
    private Date dateAddMonth(Date date, Integer month) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.MONTH, month);
        return calendar.getTime();
    }

    /**
     * 判断所给日期是否是当月的最后一天
     * @param date
     * @return
     */
    private Boolean isLastDayOfMonth(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return calendar.get(Calendar.DAY_OF_MONTH) == calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
    }

    /**
     * 获取产品在月报描述当月的相关项目的相关任务id
     * @param productId
     * @param monthlyDateStr
     * @return
     */
    private String getProductTasks(Long productId, String monthlyDateStr) {
        StringBuffer productTasks = new StringBuffer();
        List<Task> taskList = taskHelper.list(new QueryWrapper<Task>().last(" and exists(select 1 from zt_story t1 where t1.id = zt_task.story and t1.product = " + productId + ") and exists(select 1 from zt_taskestimate t1 where t1.task = zt_task.id and DATE_FORMAT(t1.date, '%Y-%m') = '" + monthlyDateStr + "')"));
        for (Task task : taskList) {
            if (productTasks.length() > 0) {
                productTasks.append(',');
            }
            productTasks.append(task.getId());
        }
        return productTasks.toString();
    }

    /**
     * 获取产品在月报描述当月的相关项目的相关任务所花费的工时
     * @param productTasks
     * @param monthlyDateStr
     * @return
     */
    private Double getTotalEstimates(String productTasks, String monthlyDateStr) {
        Double totalEstimates = 0.0D;
        List<TaskEstimate> estimateList = taskEstimateHelper.list(new QueryWrapper<TaskEstimate>().last(" where FIND_IN_SET(task, '" + productTasks + "') and DATE_FORMAT(date, '%Y-%m') = '" + monthlyDateStr + "'"));
        for (TaskEstimate estimate : estimateList) {
            totalEstimates += estimate.getConsumed();
        }
        return totalEstimates;
    }
}

