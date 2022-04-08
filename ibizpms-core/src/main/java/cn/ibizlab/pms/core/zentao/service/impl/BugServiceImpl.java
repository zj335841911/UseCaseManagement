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
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.filter.BugSearchContext;
import cn.ibizlab.pms.core.zentao.service.IBugService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.BugMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[Bug] 服务对象接口实现
 */
@Slf4j
@Service("BugServiceImpl")
public class BugServiceImpl extends ServiceImpl<BugMapper, Bug> implements IBugService {


    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ICaseService caseService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IStoryService storyService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITaskService taskService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IEntryService entryService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IModuleService moduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductPlanService productplanService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IRepoService repoService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestTaskService testtaskService;

    protected int batchSize = 500;

        @Override
    @Transactional
    public boolean create(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).create(et);
    }

    @Override
    public void createBatch(List<Bug> list) {

    }
        @Override
    @Transactional
    public boolean update(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).edit(et);
    }

    @Override
    public void updateBatch(List<Bug> list) {

    }
        @Override
    @Transactional
    public boolean remove(Long key) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).delete(key);
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
    public Bug get(Long key) {
        Bug et = getById(key);
        if(et == null){
            et = new Bug();
            et.setId(key);
        }
        else {
        }
        return et;
    }

    @Override
    public Bug getDraft(Bug et) {
        fillParentData(et);
        return et;
    }

       @Override
    @Transactional
    public Bug activate(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).activate(et);
    }
	
	@Override
    @Transactional
    public boolean activateBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   activate(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug assignTo(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).assignTo(et);
    }
	
	@Override
    @Transactional
    public boolean assignToBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   assignTo(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug batchUnlinkBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).batchUnlinkBug(et);
    }
	
	@Override
    @Transactional
    public boolean batchUnlinkBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   batchUnlinkBug(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Bug bugFavorites(Bug et) {
         return et ;
    }

    @Override
    @Transactional
    public Bug bugNFavorites(Bug et) {
         return et ;
    }

       @Override
    @Transactional
    public Bug buildBatchUnlinkBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).buildBatchUnlinkBug(et);
    }
	
	@Override
    @Transactional
    public boolean buildBatchUnlinkBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   buildBatchUnlinkBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug buildLinkBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).buildLinkBug(et);
    }
	
	@Override
    @Transactional
    public boolean buildLinkBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   buildLinkBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug buildUnlinkBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).buildUnlinkBug(et);
    }
	
	@Override
    @Transactional
    public boolean buildUnlinkBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   buildUnlinkBug(et);
		 }
	 	 return true;
    }

    @Override
    public boolean checkKey(Bug et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
       @Override
    @Transactional
    public Bug close(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).close(et);
    }
	
	@Override
    @Transactional
    public boolean closeBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   close(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug confirm(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).confirm(et);
    }
	
	@Override
    @Transactional
    public boolean confirmBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   confirm(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug linkBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).linkBug(et);
    }
	
	@Override
    @Transactional
    public boolean linkBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   linkBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug releaaseBatchUnlinkBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).releaaseBatchUnlinkBug(et);
    }
	
	@Override
    @Transactional
    public boolean releaaseBatchUnlinkBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   releaaseBatchUnlinkBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug releaseLinkBugbyBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).releaseLinkBugbyBug(et);
    }
	
	@Override
    @Transactional
    public boolean releaseLinkBugbyBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   releaseLinkBugbyBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug releaseLinkBugbyLeftBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).releaseLinkBugbyLeftBug(et);
    }
	
	@Override
    @Transactional
    public boolean releaseLinkBugbyLeftBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   releaseLinkBugbyLeftBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug releaseUnLinkBugbyLeftBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).releaseUnLinkBugbyLeftBug(et);
    }
	
	@Override
    @Transactional
    public boolean releaseUnLinkBugbyLeftBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   releaseUnLinkBugbyLeftBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug releaseUnlinkBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).releaseUnlinkBug(et);
    }
	
	@Override
    @Transactional
    public boolean releaseUnlinkBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   releaseUnlinkBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug resolve(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).resolve(et);
    }
	
	@Override
    @Transactional
    public boolean resolveBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   resolve(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public boolean save(Bug et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(Bug et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<Bug> list) {
        list.forEach(item->fillParentData(item));
        List<Bug> create = new ArrayList<>();
        List<Bug> update = new ArrayList<>();
        for (Bug et : list) {
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
    public void saveBatch(List<Bug> list) {
        list.forEach(item->fillParentData(item));
        List<Bug> create = new ArrayList<>();
        List<Bug> update = new ArrayList<>();
        for (Bug et : list) {
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
	public Bug sendMessage(Bug et) {
 		String pcLinkView = "maindashboardview_link";
  		String mobLinkView = "mobeditview";
  	
  		cn.ibizlab.pms.core.util.message.IMsgService dingTalkMsgService = cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.message.IMsgService.class);
  		if(dingTalkMsgService!=null){
        	dingTalkMsgService.send(et, "Bug", pcLinkView, mobLinkView);
		}
	  	return et;
	}

	@Override
    @Transactional
    public boolean sendMessageBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   sendMessage(et);
		 }
	 	 return true;
    }
      /**
   * 发送消息前置处理逻辑。
   */
	@Override
	public Bug sendMsgPreProcess(Bug et) {
	  	Bug dbet = this.get(et.getId());
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
    public boolean sendMsgPreProcessBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   sendMsgPreProcess(et);
		 }
	 	 return true;
    }
       @Override
    @Transactional
    public Bug toStory(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).toStory(et);
    }
	
	@Override
    @Transactional
    public boolean toStoryBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   toStory(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Bug unlinkBug(Bug et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BugHelper.class).unlinkBug(et);
    }
	
	@Override
    @Transactional
    public boolean unlinkBugBatch (List<Bug> etList) {
		 for(Bug et : etList) {
		   unlinkBug(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Bug updateStoryVersion(Bug et) {
         return et ;
    }


	@Override
    public List<Bug> selectByBranch(Long id) {
        return baseMapper.selectByBranch(id);
    }
    @Override
    public void removeByBranch(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("branch",id));
    }

	@Override
    public List<Bug> selectByDuplicatebug(Long id) {
        return baseMapper.selectByDuplicatebug(id);
    }
    @Override
    public void removeByDuplicatebug(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("duplicatebug",id));
    }

	@Override
    public List<Bug> selectByIbizcase(Long id) {
        return baseMapper.selectByIbizcase(id);
    }
    @Override
    public void removeByIbizcase(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("case",id));
    }

	@Override
    public List<Bug> selectByEntry(Long id) {
        return baseMapper.selectByEntry(id);
    }
    @Override
    public void removeByEntry(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("entry",id));
    }

	@Override
    public List<Bug> selectByModule(Long id) {
        return baseMapper.selectByModule(id);
    }
    @Override
    public void removeByModule(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("module",id));
    }

	@Override
    public List<Bug> selectByPlan(Long id) {
        return baseMapper.selectByPlan(id);
    }
    @Override
    public void removeByPlan(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("plan",id));
    }

	@Override
    public List<Bug> selectByProduct(Long id) {
        return baseMapper.selectByProduct(id);
    }
    @Override
    public void removeByProduct(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("product",id));
    }

	@Override
    public List<Bug> selectByProject(Long id) {
        return baseMapper.selectByProject(id);
    }
    @Override
    public void removeByProject(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("project",id));
    }

	@Override
    public List<Bug> selectByRepo(Long id) {
        return baseMapper.selectByRepo(id);
    }
    @Override
    public void removeByRepo(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("repo",id));
    }

	@Override
    public List<Bug> selectByStory(Long id) {
        return baseMapper.selectByStory(id);
    }
    @Override
    public void removeByStory(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("story",id));
    }

	@Override
    public List<Bug> selectByTostory(Long id) {
        return baseMapper.selectByTostory(id);
    }
    @Override
    public void removeByTostory(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("tostory",id));
    }

	@Override
    public List<Bug> selectByTask(Long id) {
        return baseMapper.selectByTask(id);
    }
    @Override
    public void removeByTask(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("task",id));
    }

	@Override
    public List<Bug> selectByTotask(Long id) {
        return baseMapper.selectByTotask(id);
    }
    @Override
    public void removeByTotask(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("totask",id));
    }

	@Override
    public List<Bug> selectByTesttask(Long id) {
        return baseMapper.selectByTesttask(id);
    }
    @Override
    public void removeByTesttask(Long id) {
        this.remove(new QueryWrapper<Bug>().eq("testtask",id));
    }


    /**
     * 查询集合 指派给我Bug
     */
    @Override
    public Page<Bug> searchAssignedToMyBug(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchAssignedToMyBug(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 指派给我Bug（PC）
     */
    @Override
    public Page<Bug> searchAssignedToMyBugPc(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchAssignedToMyBugPc(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 版本关联bug(遗留的)
     */
    @Override
    public Page<Bug> searchBugsByBuild(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBugsByBuild(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 版本关联Bug（已解决）
     */
    @Override
    public Page<Bug> searchBuildBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 版本可关联的已解决的Bugs集合
     */
    @Override
    public Page<Bug> searchBuildLinkResolvedBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildLinkResolvedBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 版本关联Bug（已解决）
     */
    @Override
    public Page<Bug> searchBuildOpenBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildOpenBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug
     */
    @Override
    public Page<Bug> searchBuildProduceBug(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBug(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug
     */
    @Override
    public Page<Bug> searchBuildProduceBugModule(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugModule(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug-创建者分布(项目)
     */
    @Override
    public Page<Bug> searchBuildProduceBugModule_Project(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugModule_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug-创建分类
     */
    @Override
    public Page<Bug> searchBuildProduceBugOpenedBy(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugOpenedBy(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug-创建者分布(项目)
     */
    @Override
    public Page<Bug> searchBuildProduceBugOpenedBy_Project(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugOpenedBy_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug（已解决）
     */
    @Override
    public Page<Bug> searchBuildProduceBugRES(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugRES(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug-解决者分布
     */
    @Override
    public Page<Bug> searchBuildProduceBugRESOLVEDBY(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugRESOLVEDBY(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug-解决者分布(项目)
     */
    @Override
    public Page<Bug> searchBuildProduceBugRESOLVEDBY_Project(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugRESOLVEDBY_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug-解决方案分布(项目)
     */
    @Override
    public Page<Bug> searchBuildProduceBugResolution_Project(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugResolution_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug-严重程度分布(项目)
     */
    @Override
    public Page<Bug> searchBuildProduceBugSeverity_Project(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugSeverity_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug-状态分布(项目)
     */
    @Override
    public Page<Bug> searchBuildProduceBugStatus_Project(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugStatus_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 Build产生的Bug-类型分布(项目)
     */
    @Override
    public Page<Bug> searchBuildProduceBugType_Project(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchBuildProduceBugType_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 当前用户解决的Bug
     */
    @Override
    public Page<Bug> searchCurUserResolve(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchCurUserResolve(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Bug> searchDefault(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 ES批量的导入
     */
    @Override
    public Page<Bug> searchESBulk(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchESBulk(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我代理的Bug
     */
    @Override
    public Page<Bug> searchMyAgentBug(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchMyAgentBug(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 累计创建的Bug数
     */
    @Override
    public Page<Bug> searchMyCurOpenedBug(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchMyCurOpenedBug(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的收藏
     */
    @Override
    public Page<Bug> searchMyFavorites(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchMyFavorites(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 计划关联bug（去除已关联）
     */
    @Override
    public Page<Bug> searchNotCurPlanLinkBug(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchNotCurPlanLinkBug(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 遗留得Bug(项目)
     */
    @Override
    public Page<Bug> searchProjectBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchProjectBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 发布关联Bug（已解决）
     */
    @Override
    public Page<Bug> searchReleaseBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchReleaseBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 发布关联Bug（已解决）
     */
    @Override
    public Page<Bug> searchReleaseLeftBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchReleaseLeftBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 发布可关联的bug（遗留）
     */
    @Override
    public Page<Bug> searchReleaseLinkableLeftBug(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchReleaseLinkableLeftBug(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 发布可关联的bug（已解决）
     */
    @Override
    public Page<Bug> searchReleaseLinkableResolvedBug(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchReleaseLinkableResolvedBug(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 发布关联Bug（未解决）
     */
    @Override
    public Page<Bug> searchReportBugs(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchReportBugs(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 任务相关bug
     */
    @Override
    public Page<Bug> searchTaskRelatedBug(BugSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Bug> pages=baseMapper.searchTaskRelatedBug(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Bug>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Bug et){
        //实体关系[DER1N_ZT_BUG_ZT_BRANCH_BRANCH]
        if(!ObjectUtils.isEmpty(et.getBranch())){
            cn.ibizlab.pms.core.zentao.domain.Branch ztrranch=et.getZtrranch();
            if(ObjectUtils.isEmpty(ztrranch)){
                cn.ibizlab.pms.core.zentao.domain.Branch majorEntity=branchService.get(et.getBranch());
                et.setZtrranch(majorEntity);
                ztrranch=majorEntity;
            }
            et.setBranchname(ztrranch.getName());
        }
        //实体关系[DER1N_ZT_BUG_ZT_CASE_CASEID]
        if(!ObjectUtils.isEmpty(et.getIbizcase())){
            cn.ibizlab.pms.core.zentao.domain.Case ztcase=et.getZtcase();
            if(ObjectUtils.isEmpty(ztcase)){
                cn.ibizlab.pms.core.zentao.domain.Case majorEntity=caseService.get(et.getIbizcase());
                et.setZtcase(majorEntity);
                ztcase=majorEntity;
            }
            et.setCasename(ztcase.getTitle());
            et.setCaseversion(ztcase.getVersion());
        }
        //实体关系[DER1N_ZT_BUG_ZT_MODULE_MODULE]
        if(!ObjectUtils.isEmpty(et.getModule())){
            cn.ibizlab.pms.core.zentao.domain.Module ztmodule=et.getZtmodule();
            if(ObjectUtils.isEmpty(ztmodule)){
                cn.ibizlab.pms.core.zentao.domain.Module majorEntity=moduleService.get(et.getModule());
                et.setZtmodule(majorEntity);
                ztmodule=majorEntity;
            }
            et.setModulename(ztmodule.getName());
        }
        //实体关系[DER1N_ZT_BUG_ZT_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztproduct=et.getZtproduct();
            if(ObjectUtils.isEmpty(ztproduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setZtproduct(majorEntity);
                ztproduct=majorEntity;
            }
            et.setProductname(ztproduct.getName());
        }
        //实体关系[DER1N_ZT_BUG_ZT_PROJECT_PROJECT]
        if(!ObjectUtils.isEmpty(et.getProject())){
            cn.ibizlab.pms.core.zentao.domain.Project ztproject=et.getZtproject();
            if(ObjectUtils.isEmpty(ztproject)){
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getProject());
                et.setZtproject(majorEntity);
                ztproject=majorEntity;
            }
            et.setProjectname(ztproject.getName());
        }
        //实体关系[DER1N_ZT_BUG_ZT_REPO_REPO]
        if(!ObjectUtils.isEmpty(et.getRepo())){
            cn.ibizlab.pms.core.zentao.domain.Repo ztrepo=et.getZtrepo();
            if(ObjectUtils.isEmpty(ztrepo)){
                cn.ibizlab.pms.core.zentao.domain.Repo majorEntity=repoService.get(et.getRepo());
                et.setZtrepo(majorEntity);
                ztrepo=majorEntity;
            }
            et.setRepotype(ztrepo.getScm());
        }
        //实体关系[DER1N_ZT_BUG_ZT_STORY_STORY]
        if(!ObjectUtils.isEmpty(et.getStory())){
            cn.ibizlab.pms.core.zentao.domain.Story ztstory=et.getZtstory();
            if(ObjectUtils.isEmpty(ztstory)){
                cn.ibizlab.pms.core.zentao.domain.Story majorEntity=storyService.get(et.getStory());
                et.setZtstory(majorEntity);
                ztstory=majorEntity;
            }
            et.setStoryname(ztstory.getTitle());
            // 父关系等价
            et.setProduct(ztstory.getProduct());
            et.setProductname(ztstory.getProductname());
        }
        //实体关系[DER1N_ZT_BUG_ZT_TASK_TASK]
        if(!ObjectUtils.isEmpty(et.getTask())){
            cn.ibizlab.pms.core.zentao.domain.Task zttask=et.getZttask();
            if(ObjectUtils.isEmpty(zttask)){
                cn.ibizlab.pms.core.zentao.domain.Task majorEntity=taskService.get(et.getTask());
                et.setZttask(majorEntity);
                zttask=majorEntity;
            }
            et.setTaskname(zttask.getName());
            // 父关系等价
            et.setProject(zttask.getProject());
            et.setProjectname(zttask.getProjectname());
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



    public IBugService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


