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
import cn.ibizlab.pms.core.ibiz.domain.IbzMyTerritory;
import cn.ibizlab.pms.core.ibiz.filter.IbzMyTerritorySearchContext;
import cn.ibizlab.pms.core.ibiz.service.IIbzMyTerritoryService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibiz.mapper.IbzMyTerritoryMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[我的地盘] 服务对象接口实现
 */
@Slf4j
@Service("IbzMyTerritoryServiceImpl")
public class IbzMyTerritoryServiceImpl extends ServiceImpl<IbzMyTerritoryMapper, IbzMyTerritory> implements IIbzMyTerritoryService {


    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IbzMyTerritory et) {
        if(!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<IbzMyTerritory> list) {
        this.saveBatch(list, batchSize);
    }

    @Override
    @Transactional
    public boolean update(IbzMyTerritory et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId()))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<IbzMyTerritory> list) {
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
    public IbzMyTerritory get(Long key) {
        IbzMyTerritory et = getById(key);
        if(et == null){
            et = new IbzMyTerritory();
            et.setId(key);
        }
        else {
        }
        return et;
    }

    @Override
    public IbzMyTerritory getDraft(IbzMyTerritory et) {
        return et;
    }

    @Override
    public boolean checkKey(IbzMyTerritory et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public IbzMyTerritory mobMenuCount(IbzMyTerritory et) {
         return et ;
    }

    @Override
    @Transactional
    public IbzMyTerritory myFavoriteCount(IbzMyTerritory et) {
         return et ;
    }

    @Override
    @Transactional
    public IbzMyTerritory myTerritoryCount(IbzMyTerritory et) {
         return et ;
    }

    @Override
    @Transactional
    public boolean save(IbzMyTerritory et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IbzMyTerritory et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<IbzMyTerritory> list) {
        List<IbzMyTerritory> create = new ArrayList<>();
        List<IbzMyTerritory> update = new ArrayList<>();
        for (IbzMyTerritory et : list) {
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
    public void saveBatch(List<IbzMyTerritory> list) {
        List<IbzMyTerritory> create = new ArrayList<>();
        List<IbzMyTerritory> update = new ArrayList<>();
        for (IbzMyTerritory et : list) {
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
     * 查询集合 DEFAULT
     */
    @Override
    public Page<IbzMyTerritory> searchDefault(IbzMyTerritorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzMyTerritory> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzMyTerritory>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的工作
     */
    @Override
    public Page<IbzMyTerritory> searchMyWork(IbzMyTerritorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzMyTerritory> pages=baseMapper.searchMyWork(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzMyTerritory>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的工作
     */
    @Override
    public Page<IbzMyTerritory> searchMyWorkMob(IbzMyTerritorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzMyTerritory> pages=baseMapper.searchMyWorkMob(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzMyTerritory>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的工作（项目经理）
     */
    @Override
    public Page<IbzMyTerritory> searchMyWorkPm(IbzMyTerritorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzMyTerritory> pages=baseMapper.searchMyWorkPm(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzMyTerritory>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 个人信息-个人贡献
     */
    @Override
    public Page<IbzMyTerritory> searchPersonInfo(IbzMyTerritorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzMyTerritory> pages=baseMapper.searchPersonInfo(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzMyTerritory>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 欢迎
     */
    @Override
    public Page<IbzMyTerritory> searchWelcome(IbzMyTerritorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IbzMyTerritory> pages=baseMapper.searchWelcome(context.getPages(),context,context.getSelectCond());
        return new PageImpl<IbzMyTerritory>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



    public IIbzMyTerritoryService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


