package cn.ibizlab.pms.core.zentao.filter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;

import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;


import cn.ibizlab.pms.util.filter.QueryWrapperContext;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import cn.ibizlab.pms.core.zentao.domain.Burn;
/**
 * 关系型数据实体[Burn] 查询条件对象
 */
@Slf4j
@Data
public class BurnSearchContext extends QueryWrapperContext<Burn> {

	private String n_isweekend_eq;//[周末]
	public void setN_isweekend_eq(String n_isweekend_eq) {
        this.n_isweekend_eq = n_isweekend_eq;
        if(!ObjectUtils.isEmpty(this.n_isweekend_eq)){
            this.getSearchCond().eq("`isweekend`", n_isweekend_eq);
        }
    }
	private String n_isweekend_in;//[周末]
	public void setN_isweekend_in(String n_isweekend_in) {
        this.n_isweekend_in = n_isweekend_in;
        if(!ObjectUtils.isEmpty(this.n_isweekend_in)){
			this.getSearchCond().in("`isweekend`",this.n_isweekend_in.split(";"));
        }
    }
	private Long n_project_eq;//[所属项目]
	public void setN_project_eq(Long n_project_eq) {
        this.n_project_eq = n_project_eq;
        if(!ObjectUtils.isEmpty(this.n_project_eq)){
            this.getSearchCond().eq("`project`", n_project_eq);
        }
    }
	private Long n_task_eq;//[任务]
	public void setN_task_eq(Long n_task_eq) {
        this.n_task_eq = n_task_eq;
        if(!ObjectUtils.isEmpty(this.n_task_eq)){
            this.getSearchCond().eq("`task`", n_task_eq);
        }
    }

    /**
	 * 启用快速搜索
	 */
    @Override
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
            this.getSearchCond().and( wrapper ->
                     wrapper.like("`date`", query)
            );
		 }
	}
}



