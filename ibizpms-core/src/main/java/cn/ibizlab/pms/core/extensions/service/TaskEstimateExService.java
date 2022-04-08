package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.service.ITaskService;
import cn.ibizlab.pms.core.zentao.service.impl.TaskEstimateServiceImpl;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.TaskEstimate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[任务预计] 自定义服务对象
 */
@Slf4j
@Primary
@Service("TaskEstimateExService")
public class TaskEstimateExService extends TaskEstimateServiceImpl {

    @Autowired
    ITaskService taskService;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [PMEvaluation:项目经理评估] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public TaskEstimate pMEvaluation(TaskEstimate et) {
        et.setEvaluationstatus("yes");
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId()))) {
            return et;
        }
        CachedBeanCopier.copy(get(et.getId()), et);
        //汇总成本
        //先通过传入的任务id去获取今天完成的这个任务工时集合
        List<TaskEstimate> taskEstimateList = this.list(new QueryWrapper<TaskEstimate>().eq("task", et.getTask()));
        Double allCost=0d;
        for (TaskEstimate estimate : taskEstimateList) {
            Double evaluationcost = estimate.getEvaluationcost()==null?0d:estimate.getEvaluationcost();
            allCost+=evaluationcost;
        }
        Task task = taskService.get(et.getTask());
        task.setInputcost(allCost);
//        taskService.update(task);
        if(!taskService.update(task,  (Wrapper) task.getUpdateWrapper(true).eq("id", task.getId()))) {
            return et;
        }
        return et;
    }
}

