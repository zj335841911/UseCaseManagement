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
import cn.ibizlab.pms.core.zentao.domain.ProductPlan;
import cn.ibizlab.pms.core.zentao.filter.ProductPlanSearchContext;
import cn.ibizlab.pms.core.zentao.service.IProductPlanService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.ProductPlanMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[产品计划] 服务对象接口实现
 */
@Slf4j
@Service("ProductPlanServiceImpl")
public class ProductPlanServiceImpl extends ServiceImpl<ProductPlanMapper, ProductPlan> implements IProductPlanService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectProductService projectproductService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITaskService taskService;

    protected cn.ibizlab.pms.core.zentao.service.IProductPlanService productplanService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;

    protected int batchSize = 500;

        @Override
    @Transactional
    public boolean create(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).create(et);
    }

    @Override
    public void createBatch(List<ProductPlan> list) {

    }
        @Override
    @Transactional
    public boolean update(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).edit(et);
    }

    @Override
    public void updateBatch(List<ProductPlan> list) {

    }
        @Override
    @Transactional
    public boolean remove(Long key) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).delete(key);
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
    public ProductPlan get(Long key) {
        ProductPlan et = getById(key);
        if(et == null){
            et = new ProductPlan();
            et.setId(key);
        }
        else {
        }
        return et;
    }

    @Override
    public ProductPlan getDraft(ProductPlan et) {
        fillParentData(et);
        return et;
    }

       @Override
    @Transactional
    public ProductPlan batchUnlinkBug(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).batchUnlinkBug(et);
    }
	
	@Override
    @Transactional
    public boolean batchUnlinkBugBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   batchUnlinkBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan batchUnlinkStory(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).batchUnlinkStory(et);
    }
	
	@Override
    @Transactional
    public boolean batchUnlinkStoryBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   batchUnlinkStory(et);
		 }
	 	 return true;
    }

    @Override
    public boolean checkKey(ProductPlan et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
       @Override
    @Transactional
    public ProductPlan eeActivePlan(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).eeActivePlan(et);
    }
	
	@Override
    @Transactional
    public boolean eeActivePlanBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   eeActivePlan(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan eeCancelPlan(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).eeCancelPlan(et);
    }
	
	@Override
    @Transactional
    public boolean eeCancelPlanBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   eeCancelPlan(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan eeClosePlan(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).eeClosePlan(et);
    }
	
	@Override
    @Transactional
    public boolean eeClosePlanBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   eeClosePlan(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan eeFinishPlan(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).eeFinishPlan(et);
    }
	
	@Override
    @Transactional
    public boolean eeFinishPlanBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   eeFinishPlan(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan eePausePlan(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).eePausePlan(et);
    }
	
	@Override
    @Transactional
    public boolean eePausePlanBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   eePausePlan(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan eeRestartPlan(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).eeRestartPlan(et);
    }
	
	@Override
    @Transactional
    public boolean eeRestartPlanBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   eeRestartPlan(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan eeStartPlan(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).eeStartPlan(et);
    }
	
	@Override
    @Transactional
    public boolean eeStartPlanBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   eeStartPlan(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public ProductPlan getOldPlanName(ProductPlan et) {
         return et ;
    }

    @Override
    @Transactional
    public ProductPlan importPlanTemplet(ProductPlan et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean importPlanTempletBatch(List<ProductPlan> etList) {
        for(ProductPlan et : etList) {
            importPlanTemplet(et);
        }
        return true;
    }

       @Override
    @Transactional
    public ProductPlan linkBug(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).linkBug(et);
    }
	
	@Override
    @Transactional
    public boolean linkBugBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   linkBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan linkStory(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).linkStory(et);
    }
	
	@Override
    @Transactional
    public boolean linkStoryBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   linkStory(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan linkTask(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).linkTask(et);
    }
	
	@Override
    @Transactional
    public boolean linkTaskBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   linkTask(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public ProductPlan mobProductPlanCounter(ProductPlan et) {
         return et ;
    }

    @Override
    @Transactional
    public boolean save(ProductPlan et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(ProductPlan et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<ProductPlan> list) {
        list.forEach(item->fillParentData(item));
        List<ProductPlan> create = new ArrayList<>();
        List<ProductPlan> update = new ArrayList<>();
        for (ProductPlan et : list) {
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
    public void saveBatch(List<ProductPlan> list) {
        list.forEach(item->fillParentData(item));
        List<ProductPlan> create = new ArrayList<>();
        List<ProductPlan> update = new ArrayList<>();
        for (ProductPlan et : list) {
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

       @Override
    @Transactional
    public ProductPlan unlinkBug(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).unlinkBug(et);
    }
	
	@Override
    @Transactional
    public boolean unlinkBugBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   unlinkBug(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public ProductPlan unlinkStory(ProductPlan et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.ProductPlanHelper.class).unlinkStory(et);
    }
	
	@Override
    @Transactional
    public boolean unlinkStoryBatch (List<ProductPlan> etList) {
		 for(ProductPlan et : etList) {
		   unlinkStory(et);
		 }
	 	 return true;
    }


	@Override
    public List<ProductPlan> selectByBranch(Long id) {
        return baseMapper.selectByBranch(id);
    }
    @Override
    public void removeByBranch(Long id) {
        this.remove(new QueryWrapper<ProductPlan>().eq("branch",id));
    }

	@Override
    public List<ProductPlan> selectByProduct(Long id) {
        return baseMapper.selectByProduct(id);
    }
    @Override
    public void removeByProduct(Long id) {
        this.remove(new QueryWrapper<ProductPlan>().eq("product",id));
    }

	@Override
    public List<ProductPlan> selectByParent(Long id) {
        return baseMapper.selectByParent(id);
    }
    @Override
    public void removeByParent(Long id) {
        this.remove(new QueryWrapper<ProductPlan>().eq("parent",id));
    }


    /**
     * 查询集合 子计划
     */
    @Override
    public Page<ProductPlan> searchChildPlan(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchChildPlan(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 CurProductPlan
     */
    @Override
    public Page<ProductPlan> searchCurProductPlan(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchCurProductPlan(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<ProductPlan> searchDefault(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 默认查询
     */
    @Override
    public Page<ProductPlan> searchDefaultParent(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchDefaultParent(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 计划（代码表）
     */
    @Override
    public Page<ProductPlan> searchPlanCodeList(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchPlanCodeList(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目计划任务（项目管理-项目计划）
     */
    @Override
    public Page<ProductPlan> searchPlanTasks(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchPlanTasks(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目立项
     */
    @Override
    public Page<ProductPlan> searchProjectApp(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchProjectApp(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目计划列表
     */
    @Override
    public Page<ProductPlan> searchProjectPlan(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchProjectPlan(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 跟计划
     */
    @Override
    public Page<ProductPlan> searchRootPlan(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchRootPlan(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 任务计划
     */
    @Override
    public Page<ProductPlan> searchTaskPlan(ProductPlanSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductPlan> pages=baseMapper.searchTaskPlan(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductPlan>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(ProductPlan et){
        //实体关系[DER1N__ZT_PRODUCTPLAN__ZT_PRODUCTPLAN__PARENT]
        if(!ObjectUtils.isEmpty(et.getParent())){
            cn.ibizlab.pms.core.zentao.domain.ProductPlan ibizparent=et.getIbizparent();
            if(ObjectUtils.isEmpty(ibizparent)){
                cn.ibizlab.pms.core.zentao.domain.ProductPlan majorEntity=productplanService.get(et.getParent());
                et.setIbizparent(majorEntity);
                ibizparent=majorEntity;
            }
            et.setParentname(ibizparent.getTitle());
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



    public IProductPlanService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


