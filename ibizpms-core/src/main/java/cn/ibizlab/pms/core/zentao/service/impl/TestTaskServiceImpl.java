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
import cn.ibizlab.pms.core.zentao.domain.TestTask;
import cn.ibizlab.pms.core.zentao.filter.TestTaskSearchContext;
import cn.ibizlab.pms.core.zentao.service.ITestTaskService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.TestTaskMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[测试版本] 服务对象接口实现
 */
@Slf4j
@Service("TestTaskServiceImpl")
public class TestTaskServiceImpl extends ServiceImpl<TestTaskMapper, TestTask> implements ITestTaskService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBugService bugService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.ITestRunService testrunService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IBuildService buildService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    protected int batchSize = 500;

        @Override
    @Transactional
    public boolean create(TestTask et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TestTaskHelper.class).create(et);
    }

    @Override
    public void createBatch(List<TestTask> list) {

    }
        @Override
    @Transactional
    public boolean update(TestTask et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TestTaskHelper.class).edit(et);
    }

    @Override
    public void updateBatch(List<TestTask> list) {

    }
        @Override
    @Transactional
    public boolean remove(Long key) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TestTaskHelper.class).delete(key);
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
    public TestTask get(Long key) {
        TestTask et = getById(key);
        if(et == null){
            et = new TestTask();
            et.setId(key);
        }
        else {
        }
        return et;
    }

    @Override
    public TestTask getDraft(TestTask et) {
        fillParentData(et);
        return et;
    }

       @Override
    @Transactional
    public TestTask activate(TestTask et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TestTaskHelper.class).activate(et);
    }
	
	@Override
    @Transactional
    public boolean activateBatch (List<TestTask> etList) {
		 for(TestTask et : etList) {
		   activate(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public TestTask block(TestTask et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TestTaskHelper.class).block(et);
    }
	
	@Override
    @Transactional
    public boolean blockBatch (List<TestTask> etList) {
		 for(TestTask et : etList) {
		   block(et);
		 }
	 	 return true;
    }

    @Override
    public boolean checkKey(TestTask et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
       @Override
    @Transactional
    public TestTask close(TestTask et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TestTaskHelper.class).close(et);
    }
	
	@Override
    @Transactional
    public boolean closeBatch (List<TestTask> etList) {
		 for(TestTask et : etList) {
		   close(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public TestTask linkCase(TestTask et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TestTaskHelper.class).linkCase(et);
    }
	
	@Override
    @Transactional
    public boolean linkCaseBatch (List<TestTask> etList) {
		 for(TestTask et : etList) {
		   linkCase(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public TestTask mobTestTaskCounter(TestTask et) {
         return et ;
    }

    @Override
    @Transactional
    public boolean save(TestTask et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(TestTask et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<TestTask> list) {
        list.forEach(item->fillParentData(item));
        List<TestTask> create = new ArrayList<>();
        List<TestTask> update = new ArrayList<>();
        for (TestTask et : list) {
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
    public void saveBatch(List<TestTask> list) {
        list.forEach(item->fillParentData(item));
        List<TestTask> create = new ArrayList<>();
        List<TestTask> update = new ArrayList<>();
        for (TestTask et : list) {
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
    public TestTask start(TestTask et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TestTaskHelper.class).start(et);
    }
	
	@Override
    @Transactional
    public boolean startBatch (List<TestTask> etList) {
		 for(TestTask et : etList) {
		   start(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public TestTask unlinkCase(TestTask et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TestTaskHelper.class).unlinkCase(et);
    }
	
	@Override
    @Transactional
    public boolean unlinkCaseBatch (List<TestTask> etList) {
		 for(TestTask et : etList) {
		   unlinkCase(et);
		 }
	 	 return true;
    }


	@Override
    public List<TestTask> selectByBuild(Long id) {
        return baseMapper.selectByBuild(id);
    }
    @Override
    public void removeByBuild(Long id) {
        this.remove(new QueryWrapper<TestTask>().eq("build",id));
    }

	@Override
    public List<TestTask> selectByProduct(Long id) {
        return baseMapper.selectByProduct(id);
    }
    @Override
    public void removeByProduct(Long id) {
        this.remove(new QueryWrapper<TestTask>().eq("product",id));
    }

	@Override
    public List<TestTask> selectByProject(Long id) {
        return baseMapper.selectByProject(id);
    }
    @Override
    public void removeByProject(Long id) {
        this.remove(new QueryWrapper<TestTask>().eq("project",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<TestTask> searchDefault(TestTaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestTask> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestTask>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的测试单
     */
    @Override
    public Page<TestTask> searchMyTestTaskPc(TestTaskSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestTask> pages=baseMapper.searchMyTestTaskPc(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestTask>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(TestTask et){
        //实体关系[DER1N_ZT_TESTTASK_ZT_BUILD_BUILD]
        if(!ObjectUtils.isEmpty(et.getBuild())){
            cn.ibizlab.pms.core.zentao.domain.Build ztbuild=et.getZtbuild();
            if(ObjectUtils.isEmpty(ztbuild)){
                cn.ibizlab.pms.core.zentao.domain.Build majorEntity=buildService.get(et.getBuild());
                et.setZtbuild(majorEntity);
                ztbuild=majorEntity;
            }
            et.setBuildname(ztbuild.getName());
        }
        //实体关系[DER1N_ZT_TESTTASK_ZT_PRODUCT_PRODUCT]
        if(!ObjectUtils.isEmpty(et.getProduct())){
            cn.ibizlab.pms.core.zentao.domain.Product ztproduct=et.getZtproduct();
            if(ObjectUtils.isEmpty(ztproduct)){
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setZtproduct(majorEntity);
                ztproduct=majorEntity;
            }
            et.setProductname(ztproduct.getName());
        }
        //实体关系[DER1N_ZT_TESTTASK_ZT_PROJECT_PROJECT]
        if(!ObjectUtils.isEmpty(et.getProject())){
            cn.ibizlab.pms.core.zentao.domain.Project ztproject=et.getZtproject();
            if(ObjectUtils.isEmpty(ztproject)){
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getProject());
                et.setZtproject(majorEntity);
                ztproject=majorEntity;
            }
            et.setProjecttname(ztproject.getName());
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


    public ITestTaskService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }

    @Value("${ibiz.syncImportLimit:1000}")
    private int syncImportLimit;

    /**
     * 上传数据检查
     * @param entities
     * @param isIgnoreError
     * @return
     */
    private JSONObject testImportData(List<TestTask> entities,boolean isIgnoreError) {

        JSONObject rs=new JSONObject();
        Set ids=new HashSet<>();
        List<String> errorMsgs = new ArrayList<>();
        List<Integer> errorLines = new ArrayList<>();
        List<TestTask> duplicateKeys=new ArrayList<>();
        String keyField= DEFieldCacheMap.getDEKeyField(TestTask.class);
        if(ObjectUtils.isEmpty(keyField)){
            errorLines.add(1);
            rs.put("rst", 1);
            rs.put("msg", "数据导入失败，未能获取到实体[TestTask]的主键属性");
            rs.put("errorLines", errorLines);
            return rs;
        }
        //主键重复性判断.外键约束判断（上传数据自身的检查/数据库的检查）
        for(int i=0;i<entities.size();i++) {
            TestTask entity = entities.get(i);
            Object id = entity.getId();
            if(ObjectUtils.isEmpty(id)) {
                id = entity.getDefaultKey(true);
                if(ObjectUtils.isEmpty(id)){
                    Integer lineNum = i + 1;
                    errorLines.add(lineNum);
                    errorMsgs.add("第" + lineNum + "行：无法获取当前数据主键。");
                    continue;
                }
                else{
                    entity.setId((Long) id);
                }
            }
            if(!ids.contains(id)){
                ids.add(id);
            }
            else{
                Integer lineNum = i + 1;
                errorLines.add(lineNum);
                errorMsgs.add("第" + lineNum + "行：导入数据之间存在重复数据。");
                if(isIgnoreError){
                    duplicateKeys.add(entity);
                    continue;
                }
                else{
                    break;
                }
            }
            //实体关系[DER1N_ZT_TESTTASK_ZT_BUILD_BUILD]
            if(!ObjectUtils.isEmpty(entity.getBuild())){
                cn.ibizlab.pms.core.zentao.domain.Build fkEntity=new cn.ibizlab.pms.core.zentao.domain.Build();
                fkEntity.setId(entity.getBuild());
                if(!buildService.checkKey(fkEntity)){
                    Integer lineNum = i + 1;
                    errorLines.add(lineNum);
                    errorMsgs.add(String.format("第" + lineNum + "行：[%s]父数据有误。",entity.getBuild()));
                    if(isIgnoreError){
                        entity.setBuild(null);
                        continue;
                    }
                    else{
                       break;
                    }
                }
            }
            if(ObjectUtils.isEmpty(entity.getBuild()) && !ObjectUtils.isEmpty(entity.getBuildname())){
                QueryWrapper<cn.ibizlab.pms.core.zentao.domain.Build> ztbuildWrapper = new QueryWrapper<>();
                ztbuildWrapper.eq("name",entity.getBuildname());
                cn.ibizlab.pms.core.zentao.domain.Build ztbuildEntity = buildService.getOne(ztbuildWrapper,false);
                if(ztbuildEntity == null){
                    Integer lineNum = i + 1;
                    errorLines.add(lineNum);
                    errorMsgs.add("第" + lineNum + "行：未能找到[BuildName : "+entity.getBuildname()+"]对应的外键值。");
                    continue;
                }else{
                    entity.setBuild(ztbuildEntity.getId());
                }
            }
            //实体关系[DER1N_ZT_TESTTASK_ZT_PRODUCT_PRODUCT]
            if(!ObjectUtils.isEmpty(entity.getProduct())){
                cn.ibizlab.pms.core.zentao.domain.Product fkEntity=new cn.ibizlab.pms.core.zentao.domain.Product();
                fkEntity.setId(entity.getProduct());
                if(!productService.checkKey(fkEntity)){
                    Integer lineNum = i + 1;
                    errorLines.add(lineNum);
                    errorMsgs.add(String.format("第" + lineNum + "行：[%s]父数据有误。",entity.getProduct()));
                    if(isIgnoreError){
                        entity.setProduct(null);
                        continue;
                    }
                    else{
                       break;
                    }
                }
            }
            if(ObjectUtils.isEmpty(entity.getProduct()) && !ObjectUtils.isEmpty(entity.getProductname())){
                QueryWrapper<cn.ibizlab.pms.core.zentao.domain.Product> ztproductWrapper = new QueryWrapper<>();
                ztproductWrapper.eq("name",entity.getProductname());
                cn.ibizlab.pms.core.zentao.domain.Product ztproductEntity = productService.getOne(ztproductWrapper,false);
                if(ztproductEntity == null){
                    Integer lineNum = i + 1;
                    errorLines.add(lineNum);
                    errorMsgs.add("第" + lineNum + "行：未能找到[ProductName : "+entity.getProductname()+"]对应的外键值。");
                    continue;
                }else{
                    entity.setProduct(ztproductEntity.getId());
                }
            }
            //实体关系[DER1N_ZT_TESTTASK_ZT_PROJECT_PROJECT]
            if(!ObjectUtils.isEmpty(entity.getProject())){
                cn.ibizlab.pms.core.zentao.domain.Project fkEntity=new cn.ibizlab.pms.core.zentao.domain.Project();
                fkEntity.setId(entity.getProject());
                if(!projectService.checkKey(fkEntity)){
                    Integer lineNum = i + 1;
                    errorLines.add(lineNum);
                    errorMsgs.add(String.format("第" + lineNum + "行：[%s]父数据有误。",entity.getProject()));
                    if(isIgnoreError){
                        entity.setProject(null);
                        continue;
                    }
                    else{
                       break;
                    }
                }
            }
            if(ObjectUtils.isEmpty(entity.getProject()) && !ObjectUtils.isEmpty(entity.getProjecttname())){
                QueryWrapper<cn.ibizlab.pms.core.zentao.domain.Project> ztprojectWrapper = new QueryWrapper<>();
                ztprojectWrapper.eq("name",entity.getProjecttname());
                cn.ibizlab.pms.core.zentao.domain.Project ztprojectEntity = projectService.getOne(ztprojectWrapper,false);
                if(ztprojectEntity == null){
                    Integer lineNum = i + 1;
                    errorLines.add(lineNum);
                    errorMsgs.add("第" + lineNum + "行：未能找到[ProjecttName : "+entity.getProjecttname()+"]对应的外键值。");
                    continue;
                }else{
                    entity.setProject(ztprojectEntity.getId());
                }
            }
        }
        if(duplicateKeys.size()>0){
            for(TestTask duplicateKey:duplicateKeys){
                entities.remove(duplicateKey);
            }
        }
        if (errorMsgs.size() > 0) {
            rs.put("rst", 1);
            rs.put("msg", String.join("<br>", errorMsgs));
            rs.put("errorLines", errorLines);
            return rs;
        }
        rs.put("rst", 0);
        return rs;
    }

    /**
     * 实体数据导入
     * @param entities
     * @param batchSize
     * @param isIgnoreError
     * @return
     */
    @Override
    @Transactional
    public JSONObject importData(List<TestTask> entities, int batchSize ,boolean isIgnoreError) {
        if(entities.size()>syncImportLimit){
            getProxyService().asyncImportData(entities,batchSize,isIgnoreError);
            JSONObject rs=new JSONObject();
            rs.put("rst", 0);
            rs.put("msg",String.format("当前导入数据已超过同步导入数量上限[%s]，系统正在进行异步导入，请稍后!",syncImportLimit));
            rs.put("data",entities);
            return rs;
        }
        else{
            return syncImportData(entities,batchSize,isIgnoreError);
        }
    }

    @Override
    @Transactional
    public void asyncImportData(List<TestTask> entities, int batchSize ,boolean isIgnoreError){
        executeImportData(entities,batchSize,isIgnoreError);
    }

    @Transactional
    public JSONObject syncImportData(List<TestTask> entities, int batchSize ,boolean isIgnoreError){
        return executeImportData(entities,batchSize,isIgnoreError);
    }

    @Transactional
    public JSONObject executeImportData(List<TestTask> entities, int batchSize ,boolean isIgnoreError) {
        JSONObject rs=testImportData(entities,isIgnoreError);
        if(rs.getInteger("rst")==1 && !isIgnoreError) {
            return rs;
        }
        for(int i = 0;i < entities.size();i++) {
            TestTask entity = entities.get(i);
            getProxyService().save(entity);
        }
        rs.put("rst", 0);
        rs.put("data",entities);
        return rs;
    }

}


