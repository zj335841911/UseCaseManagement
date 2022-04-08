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
import cn.ibizlab.pms.core.zentao.domain.Case;
import cn.ibizlab.pms.core.zentao.filter.CaseSearchContext;
import cn.ibizlab.pms.core.zentao.service.ICaseService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.CaseMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[测试用例] 服务对象接口实现
 */
@Slf4j
@Service("CaseServiceImpl")
public class CaseServiceImpl extends ServiceImpl<CaseMapper, Case> implements ICaseService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ICaseStepService casestepService;

    protected cn.ibizlab.pms.core.zentao.service.ICaseService caseService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ISuiteCaseService suitecaseService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestResultService testresultService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestRunService testrunService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBranchService branchService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IModuleService moduleService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IStoryService storyService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestSuiteService testsuiteService;

    protected int batchSize = 500;

        @Override
    @Transactional
    public boolean create(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).create(et);
    }

    @Override
    public void createBatch(List<Case> list) {

    }
        @Override
    @Transactional
    public boolean update(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).edit(et);
    }

    @Override
    public void updateBatch(List<Case> list) {

    }
        @Override
    @Transactional
    public boolean remove(Long key) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).delete(key);
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
    public Case get(Long key) {
        Case et = getById(key);
        if(et == null){
            et = new Case();
            et.setId(key);
        }
        else {
            et.setCasestep(casestepService.selectByIbizcase(key));
        }
        return et;
    }

    @Override
    public Case getDraft(Case et) {
        fillParentData(et);
        return et;
    }

    @Override
    @Transactional
    public Case caseFavorite(Case et) {
         return et ;
    }

    @Override
    @Transactional
    public Case caseNFavorite(Case et) {
         return et ;
    }

    @Override
    public boolean checkKey(Case et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
       @Override
    @Transactional
    public Case confirmChange(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).confirmChange(et);
    }
	
	@Override
    @Transactional
    public boolean confirmChangeBatch (List<Case> etList) {
		 for(Case et : etList) {
		   confirmChange(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Case confirmstorychange(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).confirmstorychange(et);
    }
	
	@Override
    @Transactional
    public boolean confirmstorychangeBatch (List<Case> etList) {
		 for(Case et : etList) {
		   confirmstorychange(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Case getByTestTask(Case et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean getByTestTaskBatch(List<Case> etList) {
        for(Case et : etList) {
            getByTestTask(et);
        }
        return true;
    }

    @Override
    @Transactional
    public Case getTestTaskCntRun(Case et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean getTestTaskCntRunBatch(List<Case> etList) {
        for(Case et : etList) {
            getTestTaskCntRun(et);
        }
        return true;
    }

       @Override
    @Transactional
    public Case linkCase(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).linkCase(et);
    }
	
	@Override
    @Transactional
    public boolean linkCaseBatch (List<Case> etList) {
		 for(Case et : etList) {
		   linkCase(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Case mobLinkCase(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).mobLinkCase(et);
    }
	
	@Override
    @Transactional
    public boolean mobLinkCaseBatch (List<Case> etList) {
		 for(Case et : etList) {
		   mobLinkCase(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Case runCase(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).runCase(et);
    }
	
	@Override
    @Transactional
    public boolean runCaseBatch (List<Case> etList) {
		 for(Case et : etList) {
		   runCase(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Case runCases(Case et) {
         return et ;
    }

    @Override
    @Transactional
    public boolean save(Case et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(Case et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<Case> list) {
        list.forEach(item->fillParentData(item));
        List<Case> create = new ArrayList<>();
        List<Case> update = new ArrayList<>();
        for (Case et : list) {
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
    public void saveBatch(List<Case> list) {
        list.forEach(item->fillParentData(item));
        List<Case> create = new ArrayList<>();
        List<Case> update = new ArrayList<>();
        for (Case et : list) {
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
    public Case testRunCase(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).testRunCase(et);
    }
	
	@Override
    @Transactional
    public boolean testRunCaseBatch (List<Case> etList) {
		 for(Case et : etList) {
		   testRunCase(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Case testRunCases(Case et) {
         return et ;
    }

       @Override
    @Transactional
    public Case testsuitelinkCase(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).testsuitelinkCase(et);
    }
	
	@Override
    @Transactional
    public boolean testsuitelinkCaseBatch (List<Case> etList) {
		 for(Case et : etList) {
		   testsuitelinkCase(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Case unlinkCase(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).unlinkCase(et);
    }
	
	@Override
    @Transactional
    public boolean unlinkCaseBatch (List<Case> etList) {
		 for(Case et : etList) {
		   unlinkCase(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Case unlinkCases(Case et) {
         return et ;
    }

       @Override
    @Transactional
    public Case unlinkSuiteCase(Case et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.CaseHelper.class).unlinkSuiteCase(et);
    }
	
	@Override
    @Transactional
    public boolean unlinkSuiteCaseBatch (List<Case> etList) {
		 for(Case et : etList) {
		   unlinkSuiteCase(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Case unlinkSuiteCases(Case et) {
         return et ;
    }


	@Override
    public List<Case> selectByBranch(Long id) {
        return baseMapper.selectByBranch(id);
    }
    @Override
    public void removeByBranch(Long id) {
        this.remove(new QueryWrapper<Case>().eq("branch",id));
    }

	@Override
    public List<Case> selectByFrombug(Long id) {
        return baseMapper.selectByFrombug(id);
    }
    @Override
    public void removeByFrombug(Long id) {
        this.remove(new QueryWrapper<Case>().eq("frombug",id));
    }

	@Override
    public List<Case> selectByFromcaseid(Long id) {
        return baseMapper.selectByFromcaseid(id);
    }
    @Override
    public void removeByFromcaseid(Long id) {
        this.remove(new QueryWrapper<Case>().eq("fromcaseid",id));
    }

	@Override
    public List<Case> selectByModule(Long id) {
        return baseMapper.selectByModule(id);
    }
    @Override
    public void removeByModule(Long id) {
        this.remove(new QueryWrapper<Case>().eq("module",id));
    }

	@Override
    public List<Case> selectByProduct(Long id) {
        return baseMapper.selectByProduct(id);
    }
    @Override
    public void removeByProduct(Long id) {
        this.remove(new QueryWrapper<Case>().eq("product",id));
    }

	@Override
    public List<Case> selectByStory(Long id) {
        return baseMapper.selectByStory(id);
    }
    @Override
    public void removeByStory(Long id) {
        this.remove(new QueryWrapper<Case>().eq("story",id));
    }

	@Override
    public List<Case> selectByLib(Long id) {
        return baseMapper.selectByLib(id);
    }
    @Override
    public void removeByLib(Long id) {
        this.remove(new QueryWrapper<Case>().eq("lib",id));
    }


    /**
     * 查询集合 批量新建用例
     */
    @Override
    public Page<Case> searchBatchNew(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchBatchNew(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 累计创建的用例
     */
    @Override
    public Page<Case> searchCurOpenedCase(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchCurOpenedCase(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 套件关联用例
     */
    @Override
    public Page<Case> searchCurSuite(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchCurSuite(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试单关联用例
     */
    @Override
    public Page<Case> searchCurTestTask(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchCurTestTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Case> searchDefault(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 ES批量的导入
     */
    @Override
    public Page<Case> searchESBulk(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchESBulk(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试报告关联用例
     */
    @Override
    public Page<Case> searchModuleRePortCase(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchModuleRePortCase(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试报告关联-按模块-条目
     */
    @Override
    public Page<Case> searchModuleRePortCaseEntry(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchModuleRePortCaseEntry(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目报告关联-按模块
     */
    @Override
    public Page<Case> searchModuleRePortCase_Project(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchModuleRePortCase_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的收藏
     */
    @Override
    public Page<Case> searchMyFavorites(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchMyFavorites(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 套件关联用例
     */
    @Override
    public Page<Case> searchNotCurTestSuite(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchNotCurTestSuite(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试单关联用例
     */
    @Override
    public Page<Case> searchNotCurTestTask(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchNotCurTestTask(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试单关联用例（项目关联）
     */
    @Override
    public Page<Case> searchNotCurTestTaskProject(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchNotCurTestTaskProject(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试报告关联用例
     */
    @Override
    public Page<Case> searchRePortCase(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchRePortCase(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试报告关联用例-条目
     */
    @Override
    public Page<Case> searchRePortCaseEntry(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchRePortCaseEntry(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目报告关联用例-关联用例
     */
    @Override
    public Page<Case> searchRePortCase_Project(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchRePortCase_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试报告关联-执行人
     */
    @Override
    public Page<Case> searchRunERRePortCase(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchRunERRePortCase(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试报告关联-执行人-条目
     */
    @Override
    public Page<Case> searchRunERRePortCaseEntry(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchRunERRePortCaseEntry(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目报告关联-执行人
     */
    @Override
    public Page<Case> searchRunERRePortCase_Project(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchRunERRePortCase_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试报告关联用例
     */
    @Override
    public Page<Case> searchRunRePortCase(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchRunRePortCase(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 测试报告关联--执行结果条目
     */
    @Override
    public Page<Case> searchRunRePortCaseEntry(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchRunRePortCaseEntry(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 项目报告关联-执行结果
     */
    @Override
    public Page<Case> searchRunRePortCase_Project(CaseSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Case> pages=baseMapper.searchRunRePortCase_Project(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Case>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(Case et){
        //实体关系[DER1N_ZT_CASE_ZT_CASE_FROMCAEID]
        if(!ObjectUtils.isEmpty(et.getFromcaseid())){
            cn.ibizlab.pms.core.zentao.domain.Case ztfromcase=et.getZtfromcase();
            if(ObjectUtils.isEmpty(ztfromcase)){
                cn.ibizlab.pms.core.zentao.domain.Case majorEntity=caseService.get(et.getFromcaseid());
                et.setZtfromcase(majorEntity);
                ztfromcase=majorEntity;
            }
            et.setFromcaseversion(ztfromcase.getVersion());
        }
        //实体关系[DER1N_ZT_CASE_ZT_MODULE_MODULE]
        if(!ObjectUtils.isEmpty(et.getModule())){
            cn.ibizlab.pms.core.zentao.domain.Module ztmodule=et.getZtmodule();
            if(ObjectUtils.isEmpty(ztmodule)){
                cn.ibizlab.pms.core.zentao.domain.Module majorEntity=moduleService.get(et.getModule());
                et.setZtmodule(majorEntity);
                ztmodule=majorEntity;
            }
            et.setModulename(ztmodule.getName());
        }
        //实体关系[DER1N_ZT_CASE_ZT_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztproduct=et.getZtproduct();
            if(ObjectUtils.isEmpty(ztproduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setZtproduct(majorEntity);
                ztproduct=majorEntity;
            }
            et.setProductname(ztproduct.getName());
        }
        //实体关系[DER1N_ZT_CASE_ZT_STORY_STORY]
        if(!ObjectUtils.isEmpty(et.getStory())){
            cn.ibizlab.pms.core.zentao.domain.Story ztstory=et.getZtstory();
            if(ObjectUtils.isEmpty(ztstory)){
                cn.ibizlab.pms.core.zentao.domain.Story majorEntity=storyService.get(et.getStory());
                et.setZtstory(majorEntity);
                ztstory=majorEntity;
            }
            et.setStoryname(ztstory.getTitle());
            et.setStoryversion(ztstory.getVersion());
        }
        //实体关系[DER1N_ZT_CASE_ZT_TESTSUITE_LIB]
        if(!ObjectUtils.isEmpty(et.getLib())){
            cn.ibizlab.pms.core.zentao.domain.TestSuite zttestsuite=et.getZttestsuite();
            if(ObjectUtils.isEmpty(zttestsuite)){
                cn.ibizlab.pms.core.zentao.domain.TestSuite majorEntity=testsuiteService.get(et.getLib());
                et.setZttestsuite(majorEntity);
                zttestsuite=majorEntity;
            }
            et.setLibname(zttestsuite.getName());
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



    public ICaseService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


