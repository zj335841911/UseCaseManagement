package cn.ibizlab.pms.core.report.filter;

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
import cn.ibizlab.pms.core.report.domain.PROJECTWEEKLY;
/**
 * 关系型数据实体[PROJECTWEEKLY] 查询条件对象
 */
@Slf4j
@Data
public class PROJECTWEEKLYSearchContext extends QueryWrapperContext<PROJECTWEEKLY> {

	private String n_ibzpro_projectweeklyname_like;//[项目周报名称]
	public void setN_ibzpro_projectweeklyname_like(String n_ibzpro_projectweeklyname_like) {
        this.n_ibzpro_projectweeklyname_like = n_ibzpro_projectweeklyname_like;
        if(!ObjectUtils.isEmpty(this.n_ibzpro_projectweeklyname_like)){
            this.getSearchCond().like("`ibzpro_projectweeklyname`", n_ibzpro_projectweeklyname_like);
        }
    }
	private Long n_project_eq;//[项目编号]
	public void setN_project_eq(Long n_project_eq) {
        this.n_project_eq = n_project_eq;
        if(!ObjectUtils.isEmpty(this.n_project_eq)){
            this.getSearchCond().eq("`project`", n_project_eq);
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
                     wrapper.like("`ibzpro_projectweeklyname`", query)
            );
		 }
	}
}



