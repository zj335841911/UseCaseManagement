package cn.ibizlab.pms.core.ibiz.service.impl;

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
import cn.ibizlab.pms.core.ibiz.domain.IbzLibModule;
import cn.ibizlab.pms.core.ibiz.filter.IbzLibModuleSearchContext;
import cn.ibizlab.pms.core.ibiz.service.IIbzLibModuleService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.IbzLibModuleMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[用例库模块] 服务对象接口实现
 */
@Slf4j
@Service("IbzLibModuleServiceImpl")
public class IbzLibModuleServiceImpl extends ServiceImpl<IbzLibModuleMapper, IbzLibModule> implements IIbzLibModuleService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IIbzCaseService ibzcaseService;

    protected cn.ibizlab.pms.core.ibiz.service.IIbzLibModuleService ibzlibmoduleService = this;
    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibiz.service.IIbzLibService ibzlibService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IbzLibModule et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<IbzLibModule> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list, batchSize);
    }

    @Override
    @Transactional
    public boolean update(IbzLibModule et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId()))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<IbzLibModule> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list, batchSize);
    }

    @Override
    @Transactional
    public boolean remove(Long key) {
        boolean result = removeById(key);
        return result ;
    }

    @Override
    @Transactional
    public void removeBatch(Collection<Long> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public IbzLibModule get(Long key) {
        IbzLibModule et = getById(key);
        if(et == null){
            et = new IbzLibModule();
            et.setId(key);
        }
        else {
        }
        return et;
    }

    @Override
    public IbzLibModule getDraft(IbzLibModule et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(IbzLibModule et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(IbzLibModule et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IbzLibModule et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<IbzLibModule> list) {
        list.forEach(item->fillParentData(item));
        List<IbzLibModule> create = new ArrayList<>();
        List<IbzLibModule> update = new ArrayList<>();
        for (IbzLibModule et : list) {
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
    public void saveBatch(List<IbzLibModule> list) {
        list.forEach(item->fillParentData(item));
        List<IbzLibModule> create = new ArrayList<>();
        List<IbzLibModule> update = new ArrayList<>();
        for (IbzLibModule et : list) {
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
    public List<IbzLibModule> selectByParent(Long id) {
        return baseMapper.selectByParent(id);
    }
    @Override
    public void removeByParent(Long id) {
        this.remove(new QueryWrapper<IbzLibModule>().eq("parent",id));
    }

	@Override
    public List<IbzLibModule> selectByRoot(Long id) {
        return baseMapper.selectByRoot(id);
    }
    @Override
    public void removeByRoot(Long id) {
        this.remove(new QueryWrapper<IbzLibModule>().eq("root",id));
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<IbzLibModule> searchDefault(IbzLibModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzLibModule> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzLibModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 无枝叶
     */
    @Override
    public Page<IbzLibModule> searchRoot_NoBranch(IbzLibModuleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzLibModule> pages=baseMapper.searchRoot_NoBranch(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzLibModule>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(IbzLibModule et){
        //实体关系[DER1N_IBZ_LIBMODULE_IBZ_LIBMODULE_PARENT]
        if(!ObjectUtils.isEmpty(et.getParent())){
            cn.ibizlab.pms.core.ibiz.domain.IbzLibModule parentmodule=et.getParentmodule();
            if(ObjectUtils.isEmpty(parentmodule)){
                cn.ibizlab.pms.core.ibiz.domain.IbzLibModule majorEntity=ibzlibmoduleService.get(et.getParent());
                et.setParentmodule(majorEntity);
                parentmodule=majorEntity;
            }
            et.setParentname(parentmodule.getName());
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



    public IIbzLibModuleService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


