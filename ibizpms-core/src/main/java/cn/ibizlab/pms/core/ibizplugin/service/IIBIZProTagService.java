package cn.ibizlab.pms.core.ibizplugin.service;

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

import cn.ibizlab.pms.core.ibizplugin.domain.IBIZProTag;
import cn.ibizlab.pms.core.ibizplugin.filter.IBIZProTagSearchContext;


/**
 * 实体[IBIZProTag] 服务对象接口
 */
public interface IIBIZProTagService {

    /**
     * 业务实体显示文本名称
     */
    final static String OBJECT_TEXT_NAME = "标签";

    /**
     * 业务实体资源路径名
     */
    final static String OBJECT_SOURCE_PATH = "ibizprotags";

    boolean create(IBIZProTag et);
    void createBatch(List<IBIZProTag> list);
    boolean update(IBIZProTag et);
    void updateBatch(List<IBIZProTag> list);
    boolean remove(String key);
    void removeBatch(Collection<String> idList);
    IBIZProTag get(String key);
    IBIZProTag getDraft(IBIZProTag et);
    boolean checkKey(IBIZProTag et);
    boolean save(IBIZProTag et);
    void saveBatch(List<IBIZProTag> list);
    Page<IBIZProTag> searchDefault(IBIZProTagSearchContext context);


}



