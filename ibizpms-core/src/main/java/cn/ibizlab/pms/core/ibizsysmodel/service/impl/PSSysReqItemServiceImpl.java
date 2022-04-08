package cn.ibizlab.pms.core.ibizsysmodel.service.impl;

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
import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSysReqItem;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSysReqItemSearchContext;
import cn.ibizlab.pms.core.ibizsysmodel.service.IPSSysReqItemService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import cn.ibizlab.pms.core.ibizsysmodel.client.PSSysReqItemFeignClient;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import cn.ibizlab.pms.util.helper.OutsideAccessorUtils;
import org.apache.commons.lang3.StringUtils;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * 实体[系统需求项] 服务对象接口实现
 */
@Slf4j
@Service
public class PSSysReqItemServiceImpl implements IPSSysReqItemService {

//    @Autowired
    PSSysReqItemFeignClient pSSysReqItemFeignClient;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.serviceid:}")
    private String serviceName;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.serviceurl:}")
    private String serviceUrl;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.loginname:loginname}")
    private String loginname;

    @Value("${ibiz.ref.service.ibizpssysmodelapi-sysmodelapi.password:password}")
    private String password;

    public PSSysReqItemFeignClient getPSSysReqItemFeignClient(String devSlnSysId) {
        if (StringUtils.isNotBlank(serviceName)) {
            return OutsideAccessorUtils.buildAccessor(SpringContextHolder.getApplicationContext(), PSSysReqItemFeignClient.class, serviceName, false, serviceName, false, loginname, password, devSlnSysId);
        } else if (StringUtils.isNotBlank(serviceUrl)) {
            return OutsideAccessorUtils.buildAccessorByUrl(SpringContextHolder.getApplicationContext(), PSSysReqItemFeignClient.class, serviceUrl, false, serviceUrl, false, loginname, password, devSlnSysId);
        } else {
            throw new RuntimeException("缺少平台服务配置信息。");
        }
    }


    @Override
    public boolean create(PSSysReqItem et) {
        PSSysReqItem rt = pSSysReqItemFeignClient.create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt, et);
        return true;
    }

    @Override
    public boolean create(String devSlnSysId, PSSysReqItem et) {
        PSSysReqItem rt = getPSSysReqItemFeignClient(devSlnSysId).create(et);
        if (rt == null) {
            return false;
        }
        CachedBeanCopier.copy(rt, et);
        return true;
    }

    public void createBatch(List<PSSysReqItem> list){
        pSSysReqItemFeignClient.createBatch(list) ;
    }

    public void createBatch(String devSlnSysId, List<PSSysReqItem> list){
        getPSSysReqItemFeignClient(devSlnSysId).createBatch(list);
    }

    @Override
    public boolean update(PSSysReqItem et) {
        PSSysReqItem rt = pSSysReqItemFeignClient.update(et.getPssysreqitemid(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt, et);
        return true;

    }

    @Override
    public boolean update(String devSlnSysId, PSSysReqItem et) {
        PSSysReqItem rt = getPSSysReqItemFeignClient(devSlnSysId).update(et.getPssysreqitemid(), et);
        if (rt == null) {
            return false;
        }
        CachedBeanCopier.copy(rt, et);
        return true;
    }

    public void updateBatch(List<PSSysReqItem> list){
        pSSysReqItemFeignClient.updateBatch(list) ;
    }

    public void updateBatch(String devSlnSysId, List<PSSysReqItem> list){
        getPSSysReqItemFeignClient(devSlnSysId).updateBatch(list);
    }

    @Override
    public boolean remove(String pssysreqitemid) {
        boolean result=pSSysReqItemFeignClient.remove(pssysreqitemid) ;
        return result;
    }

    @Override
    public boolean remove(String devSlnSysId, String pssysreqitemid) {
        boolean result = getPSSysReqItemFeignClient(devSlnSysId).remove(pssysreqitemid);
        return result;
    }

    public void removeBatch(Collection<String> idList){
        pSSysReqItemFeignClient.removeBatch(idList);
    }

    public void removeBatch(String devSlnSysId, Collection<String> idList) {
        getPSSysReqItemFeignClient(devSlnSysId).removeBatch(idList);
    }

    @Override
    public PSSysReqItem get(String pssysreqitemid) {
		PSSysReqItem et=pSSysReqItemFeignClient.get(pssysreqitemid);
        if(et==null){
            et=new PSSysReqItem();
            et.setPssysreqitemid(pssysreqitemid);
        }
        else{
        }
        return  et;
    }

    @Override
    public PSSysReqItem get(String devSlnSysId, String pssysreqitemid) {
        PSSysReqItem et = getPSSysReqItemFeignClient(devSlnSysId).get(pssysreqitemid);
        if (et == null) {
            et = new PSSysReqItem();
            et.setPssysreqitemid(pssysreqitemid);
        }
        else {
        }
        return et;
    }

    @Override
    public String getByCodeName(String devSlnSysId, String codeName) {
        return getPSSysReqItemFeignClient(devSlnSysId).getByCodeName(codeName);
    }

    @Override
    public PSSysReqItem getDraft(PSSysReqItem et) {
        et=pSSysReqItemFeignClient.getDraft(et);
        return et;
    }

    @Override
    public PSSysReqItem getDraft(String devSlnSysId, PSSysReqItem et) {
        et = getPSSysReqItemFeignClient(devSlnSysId).getDraft(et);
        return et;
    }

    @Override
    public boolean checkKey(PSSysReqItem et) {
        return pSSysReqItemFeignClient.checkKey(et);
    }

    @Override
    public boolean checkKey(String devSlnSysId, PSSysReqItem et) {
        return getPSSysReqItemFeignClient(devSlnSysId).checkKey(et);
    }

    @Override
    @Transactional
    public boolean save(PSSysReqItem et) {
        boolean result = true;
        Object rt = pSSysReqItemFeignClient.saveEntity(et);
        if(rt == null)
          return false;
        try {
            if (rt instanceof Map) {
                ObjectMapper mapper = new ObjectMapper();
                rt = mapper.readValue(mapper.writeValueAsString(rt), PSSysReqItem.class);
                if (rt != null) {
                    CachedBeanCopier.copy(rt, et);
                }
            } else if (rt instanceof Boolean) {
                result = (boolean) rt;
            }
        } catch (Exception e) {
        }
            return result;
    }


    @Override
    @Transactional
    public boolean save(String devSlnSysId, PSSysReqItem et) {
        if (et.getPssysreqitemid() == null) {
            et.setPssysreqitemid((String)et.getDefaultKey(true));
        }
        if (!getPSSysReqItemFeignClient(devSlnSysId).save(et)) {
            return false;
        }
        return true;
    }

    @Override
    public void saveBatch(List<PSSysReqItem> list) {
        pSSysReqItemFeignClient.saveBatch(list) ;
    }

    @Override
    public void saveBatch(String devSlnSysId, List<PSSysReqItem> list) {
        getPSSysReqItemFeignClient(devSlnSysId).saveBatch(list);
    }



	@Override
    public List<PSSysReqItem> selectByPpssysreqitemid(String pssysreqitemid) {
        PSSysReqItemSearchContext context=new PSSysReqItemSearchContext();
        context.setSize(Integer.MAX_VALUE);
        context.setN_ppssysreqitemid_eq(pssysreqitemid);
        return pSSysReqItemFeignClient.searchDefault(context).getContent();
    }

    @Override
    public List<PSSysReqItem> selectByPpssysreqitemid(String devSlnSysId, String pssysreqitemid) {
        PSSysReqItemSearchContext context = new PSSysReqItemSearchContext();
        context.setSize(Integer.MAX_VALUE);
        context.setN_ppssysreqitemid_eq(pssysreqitemid);
        return getPSSysReqItemFeignClient(devSlnSysId).searchDefault(context).getContent();
    }

    @Override
    public void removeByPpssysreqitemid(Collection<String> ids) {
    }


    @Override
    public void removeByPpssysreqitemid(String pssysreqitemid) {
        Set<String> delIds=new HashSet<String>();
        for(PSSysReqItem before:selectByPpssysreqitemid(pssysreqitemid)){
            delIds.add(before.getPssysreqitemid());
        }
        if(delIds.size()>0)
            this.removeBatch(delIds);
    }

    @Override
    public void removeByPpssysreqitemid(String devSlnSysId, String pssysreqitemid) {
        Set<String> delIds = new HashSet<String>();
        for(PSSysReqItem before:selectByPpssysreqitemid(devSlnSysId, pssysreqitemid)){
            delIds.add(before.getPssysreqitemid());
        }
        if (delIds.size() > 0) {
            this.removeBatch(delIds);
        }
    }

	@Override
    public List<PSSysReqItem> selectByPssysreqmoduleid(String pssysreqmoduleid) {
        PSSysReqItemSearchContext context=new PSSysReqItemSearchContext();
        context.setSize(Integer.MAX_VALUE);
        context.setN_pssysreqmoduleid_eq(pssysreqmoduleid);
        return pSSysReqItemFeignClient.searchDefault(context).getContent();
    }

    @Override
    public List<PSSysReqItem> selectByPssysreqmoduleid(String devSlnSysId, String pssysreqmoduleid) {
        PSSysReqItemSearchContext context = new PSSysReqItemSearchContext();
        context.setSize(Integer.MAX_VALUE);
        context.setN_pssysreqmoduleid_eq(pssysreqmoduleid);
        return getPSSysReqItemFeignClient(devSlnSysId).searchDefault(context).getContent();
    }

    @Override
    public List<PSSysReqItem> selectByPssysreqmoduleid(Collection<String> ids) {
        //暂未支持
        return null;
    }


    @Override
    public void removeByPssysreqmoduleid(String pssysreqmoduleid) {
        Set<String> delIds=new HashSet<String>();
        for(PSSysReqItem before:selectByPssysreqmoduleid(pssysreqmoduleid)){
            delIds.add(before.getPssysreqitemid());
        }
        if(delIds.size()>0)
            this.removeBatch(delIds);
    }

    @Override
    public void removeByPssysreqmoduleid(String devSlnSysId, String pssysreqmoduleid) {
        Set<String> delIds = new HashSet<String>();
        for(PSSysReqItem before:selectByPssysreqmoduleid(devSlnSysId, pssysreqmoduleid)){
            delIds.add(before.getPssysreqitemid());
        }
        if (delIds.size() > 0) {
            this.removeBatch(delIds);
        }
    }



    /**
     * 查询集合 数据集
     */
    @Override
    public Page<PSSysReqItem> searchDefault(PSSysReqItemSearchContext context) {
        Page<PSSysReqItem> pSSysReqItems=pSSysReqItemFeignClient.searchDefault(context);
        return pSSysReqItems;
    }

    @Override
    public Page<PSSysReqItem> searchDefault(String devSlnSysId, PSSysReqItemSearchContext context) {
        Page<PSSysReqItem> pSSysReqItems=getPSSysReqItemFeignClient(devSlnSysId).searchDefault(context);
        return pSSysReqItems;
    }

}


