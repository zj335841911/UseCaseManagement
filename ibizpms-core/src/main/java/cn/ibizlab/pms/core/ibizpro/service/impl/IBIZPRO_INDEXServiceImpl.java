package cn.ibizlab.pms.core.ibizpro.service.impl;

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
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
import cn.ibizlab.pms.core.ibizpro.filter.IBIZPRO_INDEXSearchContext;
import cn.ibizlab.pms.core.ibizpro.service.IIBIZPRO_INDEXService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibizpro.mapper.IBIZPRO_INDEXMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[索引检索] 服务对象接口实现
 */
@Slf4j
@Service("IBIZPRO_INDEXServiceImpl")
public class IBIZPRO_INDEXServiceImpl extends ServiceImpl<IBIZPRO_INDEXMapper, IBIZPRO_INDEX> implements IIBIZPRO_INDEXService {


    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IBIZPRO_INDEX et) {
        if (!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIndexid()), et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<IBIZPRO_INDEX> list) {
        this.saveBatch(list, batchSize);
    }

    @Override
    @Transactional
    public boolean update(IBIZPRO_INDEX et) {
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("indexid", et.getIndexid()))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIndexid()), et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<IBIZPRO_INDEX> list) {
        updateBatchById(list, batchSize);
    }

    @Override
    @Transactional
    public boolean remove(Long key) {
        boolean result = removeById(key);
        return result;
    }

    @Override
    @Transactional
    public void removeBatch(Collection<Long> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public IBIZPRO_INDEX get(Long key) {
        IBIZPRO_INDEX et = getById(key);
        if (et == null) {
            et = new IBIZPRO_INDEX();
            et.setIndexid(key);
        }
        else {
        }
        return et;
    }

    @Override
    public IBIZPRO_INDEX getDraft(IBIZPRO_INDEX et) {
        return et;
    }

    @Override
    public boolean checkKey(IBIZPRO_INDEX et) {
        return (!ObjectUtils.isEmpty(et.getIndexid())) && (!Objects.isNull(this.getById(et.getIndexid())));
    }
    @Override
    @Transactional
    public boolean save(IBIZPRO_INDEX et) {
        if (!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IBIZPRO_INDEX et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<IBIZPRO_INDEX> list) {
        saveOrUpdateBatch(list, batchSize);
        return true;
    }

    @Override
    @Transactional
    public void saveBatch(List<IBIZPRO_INDEX> list) {
        saveOrUpdateBatch(list, batchSize);
    }



    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IBIZPRO_INDEX> searchDefault(IBIZPRO_INDEXSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IBIZPRO_INDEX> pages=baseMapper.searchDefault(context.getPages(), context, context.getSelectCond());
        return new PageImpl<IBIZPRO_INDEX>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 数据集2
     */
    @Override
    public Page<IBIZPRO_INDEX> searchIndexDER(IBIZPRO_INDEXSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IBIZPRO_INDEX> pages=baseMapper.searchIndexDER(context.getPages(), context, context.getSelectCond());
        return new PageImpl<IBIZPRO_INDEX>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }







    @Override
    public List<JSONObject> select(String sql, Map param) {
        return this.baseMapper.selectBySQL(sql, param);
    }

    @Override
    @Transactional
    public boolean execute(String sql, Map param) {
        if (sql == null || sql.isEmpty()) {
            return false;
        }
        if (sql.toLowerCase().trim().startsWith("insert")) {
            return this.baseMapper.insertBySQL(sql, param);
        }
        if (sql.toLowerCase().trim().startsWith("update")) {
            return this.baseMapper.updateBySQL(sql, param);
        }
        if (sql.toLowerCase().trim().startsWith("delete")) {
            return this.baseMapper.deleteBySQL(sql, param);
        }
        log.warn("暂未支持的SQL语法");
        return true;
    }

    @Override
    public List<IBIZPRO_INDEX> getIbizproIndexByIds(List<Long> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<IBIZPRO_INDEX> getIbizproIndexByEntities(List<IBIZPRO_INDEX> entities) {
        List ids =new ArrayList();
        for(IBIZPRO_INDEX entity : entities){
            Serializable id=entity.getIndexid();
            if (!ObjectUtils.isEmpty(id)) {
                ids.add(id);
            }
        }
        if (ids.size() > 0) {
            return this.listByIds(ids);
        }
        else {
            return entities;
        }
    }




}




