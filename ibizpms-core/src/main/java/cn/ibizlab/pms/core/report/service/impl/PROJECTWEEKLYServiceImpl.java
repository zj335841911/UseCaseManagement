package cn.ibizlab.pms.core.report.service.impl;

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
import cn.ibizlab.pms.core.report.domain.PROJECTWEEKLY;
import cn.ibizlab.pms.core.report.filter.PROJECTWEEKLYSearchContext;
import cn.ibizlab.pms.core.report.service.IPROJECTWEEKLYService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.report.mapper.PROJECTWEEKLYMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[项目周报] 服务对象接口实现
 */
@Slf4j
@Service("PROJECTWEEKLYServiceImpl")
public class PROJECTWEEKLYServiceImpl extends ServiceImpl<PROJECTWEEKLYMapper, PROJECTWEEKLY> implements IPROJECTWEEKLYService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.zentao.service.IProjectService projectService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(PROJECTWEEKLY et) {
        fillParentData(et);
        if (!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getProjectweeklyid()), et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<PROJECTWEEKLY> list) {
        list.forEach(item->fillParentData(item));
        this.saveBatch(list, batchSize);
    }

    @Override
    @Transactional
    public boolean update(PROJECTWEEKLY et) {
        fillParentData(et);
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("ibzpro_projectweeklyid", et.getProjectweeklyid()))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getProjectweeklyid()), et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<PROJECTWEEKLY> list) {
        list.forEach(item->fillParentData(item));
        updateBatchById(list, batchSize);
    }

    @Override
    @Transactional
    public boolean remove(String key) {
        boolean result = removeById(key);
        return result;
    }

    @Override
    @Transactional
    public void removeBatch(Collection<String> idList) {
        removeByIds(idList);
    }

    @Override
    @Transactional
    public PROJECTWEEKLY get(String key) {
        PROJECTWEEKLY et = getById(key);
        if (et == null) {
            et = new PROJECTWEEKLY();
            et.setProjectweeklyid(key);
        }
        else {
        }
        return et;
    }

    @Override
    public PROJECTWEEKLY getDraft(PROJECTWEEKLY et) {
        fillParentData(et);
        return et;
    }

    @Override
    public boolean checkKey(PROJECTWEEKLY et) {
        return (!ObjectUtils.isEmpty(et.getProjectweeklyid())) && (!Objects.isNull(this.getById(et.getProjectweeklyid())));
    }
    @Override
    @Transactional
    public boolean save(PROJECTWEEKLY et) {
        if (!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(PROJECTWEEKLY et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? this.update(et) : this.create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<PROJECTWEEKLY> list) {
        list.forEach(item->fillParentData(item));
        saveOrUpdateBatch(list, batchSize);
        return true;
    }

    @Override
    @Transactional
    public void saveBatch(List<PROJECTWEEKLY> list) {
        list.forEach(item -> fillParentData(item));
        saveOrUpdateBatch(list, batchSize);
    }


    @Override
    public List<PROJECTWEEKLY> selectByProject(Long id) {
        return baseMapper.selectByProject(id);
    }
    @Override
    public void removeByProject(Long id) {
        this.remove(new QueryWrapper<PROJECTWEEKLY>().eq("project", id));
    }


    /**
     * 查询集合 数据集
     */
    @Override
    public Page<PROJECTWEEKLY> searchDefault(PROJECTWEEKLYSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<PROJECTWEEKLY> pages=baseMapper.searchDefault(context.getPages(), context, context.getSelectCond());
        return new PageImpl<PROJECTWEEKLY>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }



    /**
     * 为当前实体填充父数据（外键值文本、外键值附加数据）
     * @param et
     */
    private void fillParentData(PROJECTWEEKLY et){
        //实体关系[DER1N_IBZPRO_PROJECTWEEKLY_ZT_PROJECT_PROJECT]
        if (!ObjectUtils.isEmpty(et.getProject())) {
            cn.ibizlab.pms.core.zentao.domain.Project ztproject=et.getZtproject();
            if (ObjectUtils.isEmpty(ztproject)) {
                cn.ibizlab.pms.core.zentao.domain.Project majorEntity=projectService.get(et.getProject());
                et.setZtproject(majorEntity);
                ztproject = majorEntity;
            }
            et.setProjectname(ztproject.getName());
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
    public List<PROJECTWEEKLY> getProjectweeklyByIds(List<String> ids) {
         return this.listByIds(ids);
    }

    @Override
    public List<PROJECTWEEKLY> getProjectweeklyByEntities(List<PROJECTWEEKLY> entities) {
        List ids =new ArrayList();
        for(PROJECTWEEKLY entity : entities){
            Serializable id=entity.getProjectweeklyid();
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




