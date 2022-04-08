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
import cn.ibizlab.pms.core.zentao.domain.File;
import cn.ibizlab.pms.core.zentao.filter.FileSearchContext;
import cn.ibizlab.pms.core.zentao.service.IFileService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.FileMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[附件] 服务对象接口实现
 */
@Slf4j
@Service("FileServiceImpl")
public class FileServiceImpl extends ServiceImpl<FileMapper, File> implements IFileService {

    @Autowired
    @Lazy
    protected cn.ibizlab.pms.core.ibizpro.service.IIBZProSysTplService ibzprosystplService;

    protected int batchSize = 500;

    @Override
    @Transactional
    public boolean create(File et) {
        if(!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    @Override
    @Transactional
    public void createBatch(List<File> list) {
        this.saveBatch(list, batchSize);
    }

    @Override
    @Transactional
    public boolean update(File et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true).eq("id", et.getId()))) {
            return false;
        }
        CachedBeanCopier.copy(get(et.getId()), et);
        return true;
    }

    @Override
    @Transactional
    public void updateBatch(List<File> list) {
        updateBatchById(list, batchSize);
    }

        @Override
    @Transactional
    public boolean remove(Long key) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.FileHelper.class).delete(key);
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
    public File get(Long key) {
        File et = getById(key);
        if(et == null){
            et = new File();
            et.setId(key);
        }
        else {
        }
        return et;
    }

    @Override
    public File getDraft(File et) {
        return et;
    }

    @Override
    public boolean checkKey(File et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
    @Override
    @Transactional
    public boolean save(File et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(File et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<File> list) {
        List<File> create = new ArrayList<>();
        List<File> update = new ArrayList<>();
        for (File et : list) {
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
    public void saveBatch(List<File> list) {
        List<File> create = new ArrayList<>();
        List<File> update = new ArrayList<>();
        for (File et : list) {
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
    public File updateObjectIDForPmsEe(File et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.FileHelper.class).updateObjectIDForPmsEe(et);
    }
	
	@Override
    @Transactional
    public boolean updateObjectIDForPmsEeBatch (List<File> etList) {
		 for(File et : etList) {
		   updateObjectIDForPmsEe(et);
		 }
	 	 return true;
    }



    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<File> searchDefault(FileSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<File> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<File>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 文件库查询
     */
    @Override
    public Page<File> searchDocLibFile(FileSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<File> pages=baseMapper.searchDocLibFile(context.getPages(),context,context.getSelectCond());
        return new PageImpl<File>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 文件库查询
     */
    @Override
    public Page<File> searchProductDocLibFile(FileSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<File> pages=baseMapper.searchProductDocLibFile(context.getPages(),context,context.getSelectCond());
        return new PageImpl<File>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 动态(根据类型过滤)
     */
    @Override
    public Page<File> searchType(FileSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<File> pages=baseMapper.searchType(context.getPages(),context,context.getSelectCond());
        return new PageImpl<File>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 查询附件
     */
    @Override
    public Page<File> searchTypeNotBySrfparentkey(FileSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<File> pages=baseMapper.searchTypeNotBySrfparentkey(context.getPages(),context,context.getSelectCond());
        return new PageImpl<File>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



    public IFileService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


