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
import cn.ibizlab.pms.core.ibiz.domain.IbzTop;
import cn.ibizlab.pms.core.ibiz.filter.IbzTopSearchContext;
import cn.ibizlab.pms.core.ibiz.service.IIbzTopService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.IbzTopMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[置顶] 服务对象接口实现
 */
@Slf4j
@Service("IbzTopServiceImpl")
public class IbzTopServiceImpl extends ServiceImpl<IbzTopMapper, IbzTop> implements IIbzTopService {


    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IbzTop et) {
        if(!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbztopid()), et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<IbzTop> list) {
        this.saveBatch(list, batchSize);
    }

    @Override
    @Transactional
    public boolean update(IbzTop et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true).eq("ibz_topid", et.getIbztopid()))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbztopid()), et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<IbzTop> list) {
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
    public IbzTop get(String key) {
        IbzTop et = getById(key);
        if(et == null){
            et = new IbzTop();
            et.setIbztopid(key);
        }
        else {
        }
        return et;
    }

    @Override
    public IbzTop getDraft(IbzTop et) {
        return et;
    }

    @Override
    public boolean checkKey(IbzTop et) {
        return (!ObjectUtils.isEmpty(et.getIbztopid())) && (!Objects.isNull(this.getById(et.getIbztopid())));
    }
    @Override
    @Transactional
    public boolean save(IbzTop et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IbzTop et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<IbzTop> list) {
        List<IbzTop> create = new ArrayList<>();
        List<IbzTop> update = new ArrayList<>();
        for (IbzTop et : list) {
            if (ObjectUtils.isEmpty(et.getIbztopid()) || ObjectUtils.isEmpty(getById(et.getIbztopid()))) {
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
    public void saveBatch(List<IbzTop> list) {
        List<IbzTop> create = new ArrayList<>();
        List<IbzTop> update = new ArrayList<>();
        for (IbzTop et : list) {
            if (ObjectUtils.isEmpty(et.getIbztopid()) || ObjectUtils.isEmpty(getById(et.getIbztopid()))) {
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
     * 查询集合 数据集
     */
    @Override
    public Page<IbzTop> searchDefault(IbzTopSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzTop> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzTop>(pages.getRecords(), context.getPageable(), pages.getTotal());
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
    public List<IbzTop> getIbztopByIds(List<String> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<IbzTop> getIbztopByEntities(List<IbzTop> entities) {
        List ids =new ArrayList();
        for(IbzTop entity : entities){
            Serializable id=entity.getIbztopid();
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


    public IIbzTopService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


