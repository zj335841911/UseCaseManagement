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
import cn.ibizlab.pms.core.zentao.domain.Todo;
import cn.ibizlab.pms.core.zentao.filter.TodoSearchContext;
import cn.ibizlab.pms.core.zentao.service.ITodoService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import cn.ibizlab.pms.core.zentao.mapper.TodoMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;

/**
 * 实体[待办] 服务对象接口实现
 */
@Slf4j
@Service("TodoServiceImpl")
public class TodoServiceImpl extends ServiceImpl<TodoMapper, Todo> implements ITodoService {


    protected int batchSize = 500;

        @Override
    @Transactional
    public boolean create(Todo et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TodoHelper.class).create(et);
    }

    @Override
    public void createBatch(List<Todo> list) {

    }
        @Override
    @Transactional
    public boolean update(Todo et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TodoHelper.class).edit(et);
    }

    @Override
    public void updateBatch(List<Todo> list) {

    }
        @Override
    @Transactional
    public boolean remove(Long key) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TodoHelper.class).delete(key);
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
    public Todo get(Long key) {
        Todo et = getById(key);
        if(et == null){
            et = new Todo();
            et.setId(key);
        }
        else {
        }
        return et;
    }

    @Override
    public Todo getDraft(Todo et) {
        return et;
    }

       @Override
    @Transactional
    public Todo activate(Todo et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TodoHelper.class).activate(et);
    }
	
	@Override
    @Transactional
    public boolean activateBatch (List<Todo> etList) {
		 for(Todo et : etList) {
		   activate(et);
		 }
	 	 return true;
    }

       @Override
    @Transactional
    public Todo assignTo(Todo et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TodoHelper.class).assignTo(et);
    }
	
	@Override
    @Transactional
    public boolean assignToBatch (List<Todo> etList) {
		 for(Todo et : etList) {
		   assignTo(et);
		 }
	 	 return true;
    }

    @Override
    public boolean checkKey(Todo et) {
        return (!ObjectUtils.isEmpty(et.getId())) && (!Objects.isNull(this.getById(et.getId())));
    }
       @Override
    @Transactional
    public Todo close(Todo et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TodoHelper.class).close(et);
    }
	
	@Override
    @Transactional
    public boolean closeBatch (List<Todo> etList) {
		 for(Todo et : etList) {
		   close(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public Todo createCycle(Todo et) {
        //自定义代码
        return et;
    }

    @Override
    @Transactional
    public boolean createCycleBatch(List<Todo> etList) {
        for(Todo et : etList) {
            createCycle(et);
        }
        return true;
    }

       @Override
    @Transactional
    public Todo finish(Todo et) {
  			return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.ibizzentao.helper.TodoHelper.class).finish(et);
    }
	
	@Override
    @Transactional
    public boolean finishBatch (List<Todo> etList) {
		 for(Todo et : etList) {
		   finish(et);
		 }
	 	 return true;
    }

    @Override
    @Transactional
    public boolean save(Todo et) {
        if(!saveOrUpdate(et)) {
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean saveOrUpdate(Todo et) {
        if (null == et) {
            return false;
        } else {
            return checkKey(et) ? getProxyService().update(et) : getProxyService().create(et);
        }
    }

    @Override
    @Transactional
    public boolean saveBatch(Collection<Todo> list) {
        List<Todo> create = new ArrayList<>();
        List<Todo> update = new ArrayList<>();
        for (Todo et : list) {
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
    public void saveBatch(List<Todo> list) {
        List<Todo> create = new ArrayList<>();
        List<Todo> update = new ArrayList<>();
        for (Todo et : list) {
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
   * 发送消息通知。
   */
	@Override
	public Todo sendMessage(Todo et) {
 		String pcLinkView = "dashboardview_link";
  		String mobLinkView = "mobeditview";
  	
  		cn.ibizlab.pms.core.util.message.IMsgService dingTalkMsgService = cn.ibizlab.pms.util.security.SpringContextHolder.getBean(cn.ibizlab.pms.core.util.message.IMsgService.class);
  		if(dingTalkMsgService!=null){
        	dingTalkMsgService.send(et, "待办", pcLinkView, mobLinkView);
		}
	  	return et;
	}

	@Override
    @Transactional
    public boolean sendMessageBatch (List<Todo> etList) {
		 for(Todo et : etList) {
		   sendMessage(et);
		 }
	 	 return true;
    }
      /**
   * 发送消息前置处理逻辑。
   */
	@Override
	public Todo sendMsgPreProcess(Todo et) {
	  	Todo dbet = this.get(et.getId());
        Map<String,Object> params = et.getExtensionparams();

  		//assignedto has changed
  		if(!cn.ibizlab.pms.core.util.message.MsgDestParser.equalsInValue(dbet.get("assignedto"),et.get("assignedto"))) {
            params.put("assignedToChanged", true);
        }
  		params.put("preassignedto",dbet.get("assignedto"));

        if(!cn.ibizlab.pms.core.util.message.MsgDestParser.equalsInValue(dbet.get("status"),et.get("status"))){
            params.put("prestatus",dbet.get("status"));
        }

	  	//mailto filter duplicated
	  	
	  	return et;
	}

	@Override
    @Transactional
    public boolean sendMsgPreProcessBatch (List<Todo> etList) {
		 for(Todo et : etList) {
		   sendMsgPreProcess(et);
		 }
	 	 return true;
    }


    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<Todo> searchDefault(TodoSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Todo> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Todo>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的待办
     */
    @Override
    public Page<Todo> searchMyTodo(TodoSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Todo> pages=baseMapper.searchMyTodo(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Todo>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 我的待办
     */
    @Override
    public Page<Todo> searchMyTodoPc(TodoSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Todo> pages=baseMapper.searchMyTodoPc(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Todo>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 MyUpcoming
     */
    @Override
    public Page<Todo> searchMyUpcoming(TodoSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Todo> pages=baseMapper.searchMyUpcoming(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Todo>(pages.getRecords(), context.getPageable(), pages.getTotal());
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



    public ITodoService getProxyService() {
        return cn.ibizlab.pms.util.security.SpringContextHolder.getBean(this.getClass());
    }
}


