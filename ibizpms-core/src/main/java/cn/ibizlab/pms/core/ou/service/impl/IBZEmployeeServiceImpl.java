package cn.ibizlab.pms.core.ou.service.impl;

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
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.ou.domain.IBZEmployee;
import cn.ibizlab.pms.core.ou.filter.IBZEmployeeSearchContext;
import cn.ibizlab.pms.core.ou.service.IIBZEmployeeService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import cn.ibizlab.pms.core.ou.client.IBZEmployeeFeignClient;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import cn.ibizlab.pms.util.helper.OutsideAccessorUtils;
import org.apache.commons.lang3.StringUtils;

/**
 * 实体[人员] 服务对象接口实现
 */
@Slf4j
@Service
public class IBZEmployeeServiceImpl implements IIBZEmployeeService {

    @Autowired
    IBZEmployeeFeignClient iBZEmployeeFeignClient;
    


    @Override
    public boolean create(IBZEmployee et) {
        IBZEmployee rt = iBZEmployeeFeignClient.create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;
    }


    public void createBatch(List<IBZEmployee> list){
        iBZEmployeeFeignClient.createBatch(list) ;
    }


    @Override
    public boolean update(IBZEmployee et) {
        IBZEmployee rt = iBZEmployeeFeignClient.update(et.getUserid(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;

    }


    public void updateBatch(List<IBZEmployee> list){
        iBZEmployeeFeignClient.updateBatch(list) ;
    }


    @Override
    public boolean remove(String userid) {
        boolean result=iBZEmployeeFeignClient.remove(userid) ;
        return result;
    }


    public void removeBatch(Collection<String> idList){
        iBZEmployeeFeignClient.removeBatch(idList);
    }


    @Override
    public IBZEmployee get(String userid) {
		IBZEmployee et=iBZEmployeeFeignClient.get(userid);
        if(et==null){
            et=new IBZEmployee();
            et.setUserid(userid);
        }
        else{
        }
        return  et;
    }


    @Override
    public IBZEmployee getDraft(IBZEmployee et) {
        et=iBZEmployeeFeignClient.getDraft();
        return et;
    }


    @Override
    public boolean checkKey(IBZEmployee et) {
        return iBZEmployeeFeignClient.checkKey(et);
    }


    @Override
    @Transactional
    public boolean save(IBZEmployee et) {
        if(et.getUserid()==null) et.setUserid((String)et.getDefaultKey(true));
        if(!iBZEmployeeFeignClient.save(et))
            return false;
        return true;
    }


    @Override
    public void saveBatch(List<IBZEmployee> list) {
        iBZEmployeeFeignClient.saveBatch(list) ;
    }






    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IBZEmployee> searchDefault(IBZEmployeeSearchContext context) {
        Page<IBZEmployee> iBZEmployees=iBZEmployeeFeignClient.searchDefault(context);
        return iBZEmployees;
    }




}



