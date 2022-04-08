package cn.ibizlab.pms.core.zentao.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;
import java.math.BigInteger;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.zentao.domain.Task;
import cn.ibizlab.pms.core.zentao.filter.TaskSearchContext;
import cn.ibizlab.pms.core.zentao.service.ITaskService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.TaskMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[任务] 服务对象接口实现
 */
@Slf4j
@Service("TaskServiceImpl")
public class TaskServiceImpl extends ServiceImpl<TaskMapper, Task> implements ITaskService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.ITaskTeamService taskteamService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBurnService burnService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITaskEstimateService taskestimateService;

    protected cn.ibizlab.pms.core.zentao.service.ITaskService taskService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IProjectModuleService projectmoduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductPlanService productplanService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IStoryService storyService;

    protected int batchSize = 500;

        @Override
    @Transactional
    public boolean create(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).create(et);
    }

    @Override
    public void createBatch(List<Task> list) {

    }
        @Override
    @Transactional
    public boolean update(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).edit(et);
    }

    @Override
    public void updateBatch(List<Task> list) {

    }
        @Override
    @Transactional
    public boolean remove(Long key) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).delete(key);
    }

    @Override
    public void removeBatch(Collection<Long> idList){
        if (idList != null && !idList.isEmpty()) {
            for (Long id : idList) {
                this.remove(id);
            }
        }
    }
    @Override
    @Transactional
    public Task get(Long key) {
        Task et = getById(key);
        if(et == null){
            et = new Task();
            et.setId(key);
        }
        else {
            et.setTaskteam(taskteamService.selectByRoot(key));
            et.setTaskestimate(taskestimateService.selectByTask(key));
        }
        return et;
    }

    @Override
    public Task getDraft(Task et) {
        fillParentData(et);
        return et;
    }

       @Override
    @Transactional
    public Task activate(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).activate(et);
    }
	
	@Override
    @Transactional
    public boolean activateBatch (List<Task> etList) {
		 for(Task et : etList) {
		   activate(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task assignTo(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).assignTo(et);
    }
	
	@Override
    @Transactional
    public boolean assignToBatch (List<Task> etList) {
		 for(Task et : etList) {
		   assignTo(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task cancel(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).cancel(et);
    }
	
	@Override
    @Transactional
    public boolean cancelBatch (List<Task> etList) {
		 for(Task et : etList) {
		   cancel(et);
		 }
	 	 return true;
    }

    @Override
    public boolean checkKey(Task et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
       @Override
    @Transactional
    public Task close(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).close(et);
    }
	
	@Override
    @Transactional
    public boolean closeBatch (List<Task> etList) {
		 for(Task et : etList) {
		   close(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task confirmStoryChange(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).confirmStoryChange(et);
    }
	
	@Override
    @Transactional
    public boolean confirmStoryChangeBatch (List<Task> etList) {
		 for(Task et : etList) {
		   confirmStoryChange(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Task createCycleTasks(Task et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean createCycleTasksBatch(List<Task> etList) {
        for(Task et : etList) {
            createCycleTasks(et);
        }
        return true;
    }

       @Override
    @Transactional
    public Task deleteEstimate(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).deleteEstimate(et);
    }
	
	@Override
    @Transactional
    public boolean deleteEstimateBatch (List<Task> etList) {
		 for(Task et : etList) {
		   deleteEstimate(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task editEstimate(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).editEstimate(et);
    }
	
	@Override
    @Transactional
    public boolean editEstimateBatch (List<Task> etList) {
		 for(Task et : etList) {
		   editEstimate(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task finish(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).finish(et);
    }
	
	@Override
    @Transactional
    public boolean finishBatch (List<Task> etList) {
		 for(Task et : etList) {
		   finish(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task getNextTeamUser(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).getNextTeamUser(et);
    }
	
	@Override
    @Transactional
    public boolean getNextTeamUserBatch (List<Task> etList) {
		 for(Task et : etList) {
		   getNextTeamUser(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Task getTeamUserLeftActivity(Task et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean getTeamUserLeftActivityBatch(List<Task> etList) {
        for(Task et : etList) {
            getTeamUserLeftActivity(et);
        }
        return true;
    }

    @Override
    @Transactional
    public Task getTeamUserLeftStart(Task et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean getTeamUserLeftStartBatch(List<Task> etList) {
        for(Task et : etList) {
            getTeamUserLeftStart(et);
        }
        return true;
    }

    @Override
    @Transactional
    public Task getUsernames(Task et) {
         return et ;
    }

       @Override
    @Transactional
    public Task linkPlan(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).linkPlan(et);
    }
	
	@Override
    @Transactional
    public boolean linkPlanBatch (List<Task> etList) {
		 for(Task et : etList) {
		   linkPlan(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task otherUpdate(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).otherUpdate(et);
    }
	
	@Override
    @Transactional
    public boolean otherUpdateBatch (List<Task> etList) {
		 for(Task et : etList) {
		   otherUpdate(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task pause(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).pause(et);
    }
	
	@Override
    @Transactional
    public boolean pauseBatch (List<Task> etList) {
		 for(Task et : etList) {
		   pause(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task recordEstimate(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).recordEstimate(et);
    }
	
	@Override
    @Transactional
    public boolean recordEstimateBatch (List<Task> etList) {
		 for(Task et : etList) {
		   recordEstimate(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Task restart(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).restart(et);
    }
	
	@Override
    @Transactional
    public boolean restartBatch (List<Task> etList) {
		 for(Task et : etList) {
		   restart(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public boolean save(Task et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(Task et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<Task> list) {
        list.forEach(item->fillParentData(item));
        List<Task> create = new ArrayList<>();
        List<Task> update = new ArrayList<>();
        for (Task et : list) {
            if (ObjectUtils.isEmpty(et.getId()) || ObjectUtils.isEmpty(getById(et.getId()))) {
                create.add(et);
            } else {
                update.add(et);
            }
        }
        if (create.size() > 0) {
            getProxyService().createBatch(create);
        }
        if (update.size() > 0) {
            getProxyService().updateBatch(update);
        }
        return true;
    }

    @Override
    @Transactional
    public void saveBatch(List<Task> list) {
        list.forEach(item->fillParentData(item));
        List<Task> create = new ArrayList<>();
        List<Task> update = new ArrayList<>();
        for (Task et : list) {
            if (ObjectUtils.isEmpty(et.getId()) || ObjectUtils.isEmpty(getById(et.getId()))) {
                create.add(et);
            } else {
                update.add(et);
            }
        }
        if (create.size() > 0) {
            getProxyService().createBatch(create);
        }
        if (update.size() > 0) {
            getProxyService().updateBatch(update);
        }
    }

      /**
   * 发送消息通知。
   */
	@Override
	public Task sendMessage(Task et) {
 		String pcLinkView = "maindashboardview_link";
  		String mobLinkView = "mobeditview";
  	
  		cn.ibizlab.pms.core.util.message.IMsgService dingTalkMsgService = cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.message.IMsgService.class);
  		if(dingTalkMsgService!=null){
        	dingTalkMsgService.send(et, "任务", pcLinkView, mobLinkView);
		}
	  	return et;
	}

	@Override
    @Transactional
    public boolean sendMessageBatch (List<Task> etList) {
		 for(Task et : etList) {
		   sendMessage(et);
		 }
	 	 return true;
    }
      /**
   * 发送消息前置处理逻辑。
   */
	@Override
	public Task sendMsgPreProcess(Task et) {
	  	Task dbet = this.get(et.getId());
        Map<String,Object> params = et.getExtensionparams();

  		//assignedto has changed
  		if(!cn.ibizlab.pms.core.util.message.MsgDestParser.equalsInValue(dbet.get("assignedto"),et.get("assignedto"))) {
            params.put("assignedToChanged", true);
        }
  		params.put("preassignedto",dbet.get("assignedto"));

        if(!cn.ibizlab.pms.core.util.message.MsgDestParser.equalsInValue(dbet.get("status"),et.get("status"))){
            params.put("prestatus",dbet.get("status"));
        }

	  	//mailto filter duplicated
	  	
	  	return et;
	}

	@Override
    @Transactional
    public boolean sendMsgPreProcessBatch (List<Task> etList) {
		 for(Task et : etList) {
		   sendMsgPreProcess(et);
		 }
	 	 return true;
    }
       @Override
    @Transactional
    public Task start(Task et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TaskHelper.class).start(et);
    }
	
	@Override
    @Transactional
    public boolean startBatch (List<Task> etList) {
		 for(Task et : etList) {
		   start(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Task taskFavorites(Task et) {
         return et ;
    }

    @Override
    @Transactional
    public Task taskForward(Task et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean taskForwardBatch(List<Task> etList) {
        for(Task et : etList) {
            taskForward(et);
        }
        return true;
    }

    @Override
    @Transactional
    public Task taskNFavorites(Task et) {
         return et ;
    }

    @Override
    @Transactional
    public Task updateStoryVersion(Task et) {
         return et ;
    }


	@Override
    public List<Task> selectByModule(Long id) {
        return baseMapper.selectByModule(id);
    }
    @Override
    public void removeByModule(Long id) {
        this.remove(new QueryWrapper<Task>().eq("module",id));
    }

	@Override
    public List<Task> selectByFrombug(Long id) {
        return baseMapper.selectByFrombug(id);
    }
    @Override
    public void removeByFrombug(Long id) {
        this.remove(new QueryWrapper<Task>().eq("frombug",id));
    }

	@Override
    public List<Task> selectByPlan(Long id) {
        return baseMapper.selectByPlan(id);
    }
    @Override
    public void removeByPlan(Long id) {
        this.remove(new QueryWrapper<Task>().eq("plan",id));
    }

	@Override
    public List<Task> selectByProject(Long id) {
        return baseMapper.selectByProject(id);
    }
    @Override
    public void removeByProject(Long id) {
        this.remove(new QueryWrapper<Task>().eq("project",id));
    }

	@Override
    public List<Task> selectByStory(Long id) {
        return baseMapper.selectByStory(id);
    }
    @Override
    public void removeByStory(Long id) {
        this.remove(new QueryWrapper<Task>().eq("story",id));
    }

	@Override
    public List<Task> selectByParent(Long id) {
        return baseMapper.selectByParent(id);
    }
    @Override
    public void removeByParent(Long id) {
        this.remove(new QueryWrapper<Task>().eq("parent",id));
    }


    /**
     * 查询集合 指派给我任务
     */
    @Override
    public Page<Task> searchAssignedToMyTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchAssignedToMyTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 指派给我任务（PC）
     */
    @Override
    public Page<Task> searchAssignedToMyTaskPc(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchAssignedToMyTaskPc(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Bug相关任务
     */
    @Override
    public Page<Task> searchBugTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchBugTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 通过模块查询
     */
    @Override
    public Page<Task> searchByModule(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchByModule(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 子任务
     */
    @Override
    public Page<Task> searchChildTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchChildTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 子任务（树）
     */
    @Override
    public Page<Task> searchChildTaskTree(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchChildTaskTree(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 用户年度完成任务
     */
    @Override
    public Page<Task> searchCurFinishTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchCurFinishTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Task> searchDefault(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DefaultRow
     */
    @Override
    public Page<Task> searchDefaultRow(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchDefaultRow(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 ES批量的导入
     */
    @Override
    public Page<Task> searchESBulk(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchESBulk(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我代理的任务
     */
    @Override
    public Page<Task> searchMyAgentTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyAgentTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我相关的任务
     */
    @Override
    public Page<Task> searchMyAllTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyAllTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我完成的任务（汇报）
     */
    @Override
    public Page<Task> searchMyCompleteTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyCompleteTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我完成的任务（移动端日报）
     */
    @Override
    public Page<Task> searchMyCompleteTaskMobDaily(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyCompleteTaskMobDaily(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我完成的任务（移动端月报）
     */
    @Override
    public Page<Task> searchMyCompleteTaskMobMonthly(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyCompleteTaskMobMonthly(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我完成的任务（月报展示）
     */
    @Override
    public Page<Task> searchMyCompleteTaskMonthlyZS(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyCompleteTaskMonthlyZS(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我完成的任务（汇报）
     */
    @Override
    public Page<Task> searchMyCompleteTaskZS(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyCompleteTaskZS(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的收藏
     */
    @Override
    public Page<Task> searchMyFavorites(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyFavorites(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我计划参与的任务（移动端月报）
     */
    @Override
    public Page<Task> searchMyPlansTaskMobMonthly(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyPlansTaskMobMonthly(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我计划参与的任务（汇报）
     */
    @Override
    public Page<Task> searchMyTomorrowPlanTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyTomorrowPlanTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我计划参与的任务（汇报）
     */
    @Override
    public Page<Task> searchMyTomorrowPlanTaskMobDaily(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchMyTomorrowPlanTaskMobDaily(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 移动端下周计划参与(汇报)
     */
    @Override
    public Page<Task> searchNextWeekCompleteTaskMobZS(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchNextWeekCompleteTaskMobZS(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 本周完成的任务(汇报)
     */
    @Override
    public Page<Task> searchNextWeekCompleteTaskZS(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchNextWeekCompleteTaskZS(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 下周计划完成任务(汇报)
     */
    @Override
    public Page<Task> searchNextWeekPlanCompleteTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchNextWeekPlanCompleteTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 相关任务（计划）
     */
    @Override
    public Page<Task> searchPlanTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchPlanTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目任务（项目立项）
     */
    @Override
    public Page<Task> searchProjectAppTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchProjectAppTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目任务
     */
    @Override
    public Page<Task> searchProjectTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchProjectTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 根任务
     */
    @Override
    public Page<Task> searchRootTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchRootTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 关联计划（当前项目未关联）
     */
    @Override
    public Page<Task> searchTaskLinkPlan(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchTaskLinkPlan(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我本月完成的任务（下拉列表框）
     */
    @Override
    public Page<Task> searchThisMonthCompleteTaskChoice(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchThisMonthCompleteTaskChoice(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 本周完成的任务(汇报)
     */
    @Override
    public Page<Task> searchThisWeekCompleteTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchThisWeekCompleteTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 本周已完成任务(下拉框选择)
     */
    @Override
    public Page<Task> searchThisWeekCompleteTaskChoice(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchThisWeekCompleteTaskChoice(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 移动端本周已完成任务(汇报)
     */
    @Override
    public Page<Task> searchThisWeekCompleteTaskMobZS(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchThisWeekCompleteTaskMobZS(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 本周完成的任务(汇报)
     */
    @Override
    public Page<Task> searchThisWeekCompleteTaskZS(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchThisWeekCompleteTaskZS(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 todo列表查询
     */
    @Override
    public Page<Task> searchTodoListTask(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Task> pages=baseMapper.searchTodoListTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Task>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 任务类型分组
     */
    @Override
    public Page<Map> searchTypeGroup(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Map> pages=baseMapper.searchTypeGroup(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Map>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 任务类型分组（计划）
     */
    @Override
    public Page<Map> searchTypeGroupPlan(TaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Map> pages=baseMapper.searchTypeGroupPlan(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Map>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Task et){
        //实体关系[DER1N_ZT_TASK_IBZ_PROJECTMODULE_MODULE]
        if(!ObjectUtils.isEmpty(et.getModule())){
            cn.ibizlab.pms.core.ibiz.domain.ProjectModule projectmodule=et.getProjectmodule();
            if(ObjectUtils.isEmpty(projectmodule)){
                cn.ibizlab.pms.core.ibiz.domain.ProjectModule majorEntity=projectmoduleService.get(et.getModule());
                et.setProjectmodule(majorEntity);
                projectmodule=majorEntity;
            }
            et.setModulename(projectmodule.getName());
            et.setPath(projectmodule.getPath());
        }
        //实体关系[DER1N_ZT_TASK_ZT_PRODUCTPLAN_PLAN]
        if(!ObjectUtils.isEmpty(et.getPlan())){
            cn.ibizlab.pms.core.zentao.domain.ProductPlan productplan=et.getProductplan();
            if(ObjectUtils.isEmpty(productplan)){
                cn.ibizlab.pms.core.zentao.domain.ProductPlan majorEntity=productplanService.get(et.getPlan());
                et.setProductplan(majorEntity);
                productplan=majorEntity;
            }
            et.setPlanname(productplan.getTitle());
        }
        //实体关系[DER1N_ZT_TASK_ZT_PROJECT_PROJECT]
        if(!ObjectUtils.isEmpty(et.getProject())){
            cn.ibizlab.pms.core.zentao.domain.Project ztproject=et.getZtproject();
            if(ObjectUtils.isEmpty(ztproject)){
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getProject());
                et.setZtproject(majorEntity);
                ztproject=majorEntity;
            }
            et.setProjectname(ztproject.getName());
        }
        //实体关系[DER1N_ZT_TASK_ZT_STORY_STORY]
        if(!ObjectUtils.isEmpty(et.getStory())){
            cn.ibizlab.pms.core.zentao.domain.Story ztstory=et.getZtstory();
            if(ObjectUtils.isEmpty(ztstory)){
                cn.ibizlab.pms.core.zentao.domain.Story majorEntity=storyService.get(et.getStory());
                et.setZtstory(majorEntity);
                ztstory=majorEntity;
            }
            et.setStoryname(ztstory.getTitle());
            et.setProduct(ztstory.getProduct());
            et.setStoryversion(ztstory.getVersion());
            et.setProductname(ztstory.getProductname());
        }
        //实体关系[DER1N__ZT_TASK__ZT_TASK__PARENT]
        if(!ObjectUtils.isEmpty(et.getParent())){
            cn.ibizlab.pms.core.zentao.domain.Task ztparent=et.getZtparent();
            if(ObjectUtils.isEmpty(ztparent)){
                cn.ibizlab.pms.core.zentao.domain.Task majorEntity=taskService.get(et.getParent());
                et.setZtparent(majorEntity);
                ztparent=majorEntity;
            }
            et.setParentname(ztparent.getName());
        }
    }




    @Override
    public List<JSONObject> select(String sql, Map param){
        return this.baseMapper.selectBySQL(sql,param);
    }

    @Override
    @Transactional
    public boolean execute(String sql , Map param){
        if (sql == null || sql.isEmpty()) {
            return false;
        }
        if (sql.toLowerCase().trim().startsWith("insert")) {
            return this.baseMapper.insertBySQL(sql,param);
        }
        if (sql.toLowerCase().trim().startsWith("update")) {
            return this.baseMapper.updateBySQL(sql,param);
        }
        if (sql.toLowerCase().trim().startsWith("delete")) {
            return this.baseMapper.deleteBySQL(sql,param);
        }
        log.warn("暂未支持的SQL语法");
        return true;
    }



    public ITaskService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


