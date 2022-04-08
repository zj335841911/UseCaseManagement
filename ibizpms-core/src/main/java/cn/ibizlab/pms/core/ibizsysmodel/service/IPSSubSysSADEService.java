package cn.ibizlab.pms.core.ibizsysmodel.service;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.pms.core.ibizsysmodel.domain.PSSubSysSADE;
import cn.ibizlab.pms.core.ibizsysmodel.filter.PSSubSysSADESearchContext;


/**
 * 实体[PSSubSysSADE] 服务对象接口
 */
public interface IPSSubSysSADEService {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "外部接口实体";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "pssubsyssades";

    boolean create(PSSubSysSADE et);
    void createBatch(List<PSSubSysSADE> list);
    boolean update(PSSubSysSADE et);
    void updateBatch(List<PSSubSysSADE> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    PSSubSysSADE get(String key);
    PSSubSysSADE getDraft(PSSubSysSADE et);
    boolean checkKey(PSSubSysSADE et);
    boolean save(PSSubSysSADE et);
    void saveBatch(List<PSSubSysSADE> list);
    Page<PSSubSysSADE> searchDefault(PSSubSysSADESearchContext context);
    List<PSSubSysSADE> selectByPssubsysserviceapiid(String pssubsysserviceapiid);
    List<PSSubSysSADE> selectByPssubsysserviceapiid(Collection<String> ids);
    void removeByPssubsysserviceapiid(String pssubsysserviceapiid);

    boolean create(String devSlnSysId , PSSubSysSADE et) ;
    void createBatch(String devSlnSysId, List<PSSubSysSADE> list);
    boolean update(String devSlnSysId, PSSubSysSADE et);
    void updateBatch(String devSlnSysId, List<PSSubSysSADE> list);
    boolean remove(String devSlnSysId, String key);
    void removeBatch(String devSlnSysId , Collection<String> idList) ;
    PSSubSysSADE get(String devSlnSysId , String key);
    String getByCodeName(String devSlnSysId , String codeName);
    PSSubSysSADE getDraft(String devSlnSysId, PSSubSysSADE et);
    boolean checkKey(String devSlnSysId, PSSubSysSADE et);
    boolean save(String devSlnSysId, PSSubSysSADE et);
    void saveBatch(String devSlnSysId, List<PSSubSysSADE> list);
    Page<PSSubSysSADE> searchDefault(String devSlnSysId, PSSubSysSADESearchContext context);
    List<PSSubSysSADE> selectByPssubsysserviceapiid(String devSlnSysId, String pssubsysserviceapiid);
    void removeByPssubsysserviceapiid(String devSlnSysId, String pssubsysserviceapiid);

}



