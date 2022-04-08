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
import cn.ibizlab.pms.core.ibiz.domain.ProductLife;
import cn.ibizlab.pms.core.ibiz.filter.ProductLifeSearchContext;
import cn.ibizlab.pms.core.ibiz.service.IProductLifeService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.ProductLifeMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[产品生命周期] 服务对象接口实现
 */
@Slf4j
@Service("ProductLifeServiceImpl")
public class ProductLifeServiceImpl extends ServiceImpl<ProductLifeMapper, ProductLife> implements IProductLifeService {


    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(ProductLife et) {
        if(!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getProductlifeid()), et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<ProductLife> list) {
        this.saveBatch(list, batchSize);
    }

    @Override
    @Transactional
    public boolean update(ProductLife et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true).eq("ibz_productlifeid", et.getProductlifeid()))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getProductlifeid()), et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<ProductLife> list) {
        updateBatchById(list, batchSize);
    }

    @Override
    @Transactional
    public boolean remove(String key) {
        boolean result = removeById(key);
        return result ;
    }

    @Override
    @Transactional
    public void removeBatch(Collection<String> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public ProductLife get(String key) {
        ProductLife et = getById(key);
        if(et == null){
            et = new ProductLife();
            et.setProductlifeid(key);
        }
        else {
        }
        return et;
    }

    @Override
    public ProductLife getDraft(ProductLife et) {
        return et;
    }

    @Override
    public boolean checkKey(ProductLife et) {
        return (!ObjectUtils.isEmpty(et.getProductlifeid())) && (!Objects.isNull(this.getById(et.getProductlifeid())));
    }
    @Override
    @Transactional
    public boolean save(ProductLife et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(ProductLife et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<ProductLife> list) {
        List<ProductLife> create = new ArrayList<>();
        List<ProductLife> update = new ArrayList<>();
        for (ProductLife et : list) {
            if (ObjectUtils.isEmpty(et.getProductlifeid()) || ObjectUtils.isEmpty(getById(et.getProductlifeid()))) {
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
    public void saveBatch(List<ProductLife> list) {
        List<ProductLife> create = new ArrayList<>();
        List<ProductLife> update = new ArrayList<>();
        for (ProductLife et : list) {
            if (ObjectUtils.isEmpty(et.getProductlifeid()) || ObjectUtils.isEmpty(getById(et.getProductlifeid()))) {
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
     * 查询集合 DEFAULT
     */
    @Override
    public Page<ProductLife> searchDefault(ProductLifeSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductLife> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductLife>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 GetRoadmap
     */
    @Override
    public Page<ProductLife> searchGetRoadmap(ProductLifeSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductLife> pages=baseMapper.searchGetRoadmap(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductLife>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 获取产品路线
     */
    @Override
    public Page<ProductLife> searchGetRoadmapS(ProductLifeSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductLife> pages=baseMapper.searchGetRoadmapS(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductLife>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 RoadMapYear
     */
    @Override
    public Page<ProductLife> searchRoadMapYear(ProductLifeSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductLife> pages=baseMapper.searchRoadMapYear(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductLife>(pages.getRecords(), context.getPageable(), pages.getTotal());
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

    @Override
    public List<ProductLife> getProductlifeByIds(List<String> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<ProductLife> getProductlifeByEntities(List<ProductLife> entities) {
        List ids =new ArrayList();
        for(ProductLife entity : entities){
            Serializable id=entity.getProductlifeid();
            if(!ObjectUtils.isEmpty(id)){
                ids.add(id);
            }
        }
        if(ids.size()>0) {
            return this.listByIds(ids);
        }
        else {
            return entities;
        }
    }


    public IProductLifeService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


