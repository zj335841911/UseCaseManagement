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
import cn.ibizlab.pms.core.zentao.domain.Build;
import cn.ibizlab.pms.core.zentao.filter.BuildSearchContext;
import cn.ibizlab.pms.core.zentao.service.IBuildService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.BuildMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[版本] 服务对象接口实现
 */
@Slf4j
@Service("BuildServiceImpl")
public class BuildServiceImpl extends ServiceImpl<BuildMapper, Build> implements IBuildService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IReleaseService releaseService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestTaskService testtaskService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    protected int batchSize = 500;

        @Override
    @Transactional
    public boolean create(Build et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BuildHelper.class).create(et);
    }

    @Override
    public void createBatch(List<Build> list) {

    }
        @Override
    @Transactional
    public boolean update(Build et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BuildHelper.class).edit(et);
    }

    @Override
    public void updateBatch(List<Build> list) {

    }
        @Override
    @Transactional
    public boolean remove(Long key) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BuildHelper.class).delete(key);
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
    public Build get(Long key) {
        Build et = getById(key);
        if(et == null){
            et = new Build();
            et.setId(key);
        }
        else {
        }
        return et;
    }

    @Override
    public Build getDraft(Build et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(Build et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
       @Override
    @Transactional
    public Build linkStory(Build et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.BuildHelper.class).linkStory(et);
    }
	
	@Override
    @Transactional
    public boolean linkStoryBatch (List<Build> etList) {
		 for(Build et : etList) {
		   linkStory(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Build mobProjectBuildCounter(Build et) {
         return et ;
    }

    @Override
    @Transactional
    public Build oneClickRelease(Build et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean oneClickReleaseBatch(List<Build> etList) {
        for(Build et : etList) {
            oneClickRelease(et);
        }
        return true;
    }

    @Override
    @Transactional
    public boolean save(Build et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(Build et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<Build> list) {
        list.forEach(item->fillParentData(item));
        List<Build> create = new ArrayList<>();
        List<Build> update = new ArrayList<>();
        for (Build et : list) {
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
    public void saveBatch(List<Build> list) {
        list.forEach(item->fillParentData(item));
        List<Build> create = new ArrayList<>();
        List<Build> update = new ArrayList<>();
        for (Build et : list) {
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
    public List<Build> selectByBranch(Long id) {
        return baseMapper.selectByBranch(id);
    }
    @Override
    public void removeByBranch(Long id) {
        this.remove(new QueryWrapper<Build>().eq("branch",id));
    }

	@Override
    public List<Build> selectByProduct(Long id) {
        return baseMapper.selectByProduct(id);
    }
    @Override
    public void removeByProduct(Long id) {
        this.remove(new QueryWrapper<Build>().eq("product",id));
    }

	@Override
    public List<Build> selectByProject(Long id) {
        return baseMapper.selectByProject(id);
    }
    @Override
    public void removeByProject(Long id) {
        this.remove(new QueryWrapper<Build>().eq("project",id));
    }


    /**
     * 查询集合 Bug产品版本
     */
    @Override
    public Page<Build> searchBugProductBuild(BuildSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Build> pages=baseMapper.searchBugProductBuild(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Build>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 产品版本
     */
    @Override
    public Page<Build> searchCurProduct(BuildSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Build> pages=baseMapper.searchCurProduct(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Build>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Build> searchDefault(BuildSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Build> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Build>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试版本
     */
    @Override
    public Page<Build> searchTestBuild(BuildSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Build> pages=baseMapper.searchTestBuild(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Build>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试轮次
     */
    @Override
    public Page<Build> searchTestRounds(BuildSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Build> pages=baseMapper.searchTestRounds(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Build>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 更新日志
     */
    @Override
    public Page<Build> searchUpdateLog(BuildSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Build> pages=baseMapper.searchUpdateLog(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Build>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Build et){
        //实体关系[DER1N_ZT_BUILD_ZT_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztproduct=et.getZtproduct();
            if(ObjectUtils.isEmpty(ztproduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setZtproduct(majorEntity);
                ztproduct=majorEntity;
            }
            et.setProductname(ztproduct.getName());
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



    public IBuildService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


