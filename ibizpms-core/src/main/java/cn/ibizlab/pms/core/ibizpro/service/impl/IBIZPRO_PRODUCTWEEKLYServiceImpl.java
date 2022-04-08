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
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_PRODUCTWEEKLY;
import cn.ibizlab.pms.core.ibizpro.filter.IBIZPRO_PRODUCTWEEKLYSearchContext;
import cn.ibizlab.pms.core.ibizpro.service.IIBIZPRO_PRODUCTWEEKLYService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.ibizpro.mapper.IBIZPRO_PRODUCTWEEKLYMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[产品周报] 服务对象接口实现
 */
@Slf4j
@Service("IBIZPRO_PRODUCTWEEKLYServiceImpl")
public class IBIZPRO_PRODUCTWEEKLYServiceImpl extends ServiceImpl<IBIZPRO_PRODUCTWEEKLYMapper, IBIZPRO_PRODUCTWEEKLY> implements IIBIZPRO_PRODUCTWEEKLYService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProductService productService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(IBIZPRO_PRODUCTWEEKLY et) {
        fillParentData(et);
        if (!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbizproProductweeklyid()), et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<IBIZPRO_PRODUCTWEEKLY> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list, batchSize);
    }

    @Override
    @Transactional
    public boolean update(IBIZPRO_PRODUCTWEEKLY et) {
        fillParentData(et);
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("ibizpro_productweeklyid", et.getIbizproProductweeklyid()))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getIbizproProductweeklyid()), et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<IBIZPRO_PRODUCTWEEKLY> list) {
        list.forEach(item->fillParentData(item));
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
    public IBIZPRO_PRODUCTWEEKLY get(Long key) {
        IBIZPRO_PRODUCTWEEKLY et = getById(key);
        if (et == null) {
            et = new IBIZPRO_PRODUCTWEEKLY();
            et.setIbizproProductweeklyid(key);
        }
        else {
        }
        return et;
    }

    @Override
    public IBIZPRO_PRODUCTWEEKLY getDraft(IBIZPRO_PRODUCTWEEKLY et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(IBIZPRO_PRODUCTWEEKLY et) {
        return (!ObjectUtils.isEmpty(et.getIbizproProductweeklyid())) && (!Objects.isNull(this.getById(et.getIbizproProductweeklyid())));
    }
    @Override
    @Transactional
    public IBIZPRO_PRODUCTWEEKLY sUMPRODUCTWEEKLY(IBIZPRO_PRODUCTWEEKLY et) {
        //自定义代码
        return et;
    }
   @Override
    @Transactional
    public boolean sUMPRODUCTWEEKLYBatch(List<IBIZPRO_PRODUCTWEEKLY> etList) {
        for(IBIZPRO_PRODUCTWEEKLY et : etList) {
            sUMPRODUCTWEEKLY(et);
        }
        return true;
    }

    @Override
    @Transactional
    public boolean save(IBIZPRO_PRODUCTWEEKLY et) {
        if (!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(IBIZPRO_PRODUCTWEEKLY et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<IBIZPRO_PRODUCTWEEKLY> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list, batchSize);
        return true;
    }

    @Override
    @Transactional
    public void saveBatch(List<IBIZPRO_PRODUCTWEEKLY> list) {
        list.forEach(item -> fillParentData(item));
        saveOrUpdateBatch(list, batchSize);
    }


    @Override
    public List<IBIZPRO_PRODUCTWEEKLY> selectByProduct(Long id) {
        return baseMapper.selectByProduct(id);
    }
    @Override
    public void removeByProduct(Long id) {
        this.remove(new QueryWrapper<IBIZPRO_PRODUCTWEEKLY>().eq("product", id));
    }


    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IBIZPRO_PRODUCTWEEKLY> searchDefault(IBIZPRO_PRODUCTWEEKLYSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<IBIZPRO_PRODUCTWEEKLY> pages=baseMapper.searchDefault(context.getPages(), context, context.getSelectCond());
        return new PageImpl<IBIZPRO_PRODUCTWEEKLY>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(IBIZPRO_PRODUCTWEEKLY et){
        //实体关系[DER1N_IBIZPRO_PRODUCTWEEKLY_ZT_PRODUCT_PRODUCT]
        if (!ObjectUtils.isEmpty(et.getProduct())) {
            cn.ibizlab.pms.core.zentao.domain.Product productweekly=et.getProductweekly();
            if (ObjectUtils.isEmpty(productweekly)) {
                cn.ibizlab.pms.core.zentao.domain.Product majorEntity=productService.get(et.getProduct());
                et.setProductweekly(majorEntity);
                productweekly = majorEntity;
            }
            et.setProductname(productweekly.getName());
        }
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
    public List<IBIZPRO_PRODUCTWEEKLY> getIbizproProductweeklyByIds(List<Long> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<IBIZPRO_PRODUCTWEEKLY> getIbizproProductweeklyByEntities(List<IBIZPRO_PRODUCTWEEKLY> entities) {
        List ids =new ArrayList();
        for(IBIZPRO_PRODUCTWEEKLY entity : entities){
            Serializable id=entity.getIbizproProductweeklyid();
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




