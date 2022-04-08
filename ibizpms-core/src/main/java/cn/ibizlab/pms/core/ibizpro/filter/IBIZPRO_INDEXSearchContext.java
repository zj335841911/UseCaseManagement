package cn.ibizlab.pms.core.ibizpro.filter;

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
import cn.ibizlab.pms.core.ibizpro.domain.IBIZPRO_INDEX;
/**
 * 关系型数据实体[IBIZPRO_INDEX] 查询条件对象
 */
@Slf4j
@Data
public class IBIZPRO_INDEXSearchContext extends QueryWrapperContext<IBIZPRO_INDEX> {

	private String n_index_type_eq;//[类型]
	public void setN_index_type_eq(String n_index_type_eq) {
        this.n_index_type_eq = n_index_type_eq;
        if(!ObjectUtils.isEmpty(this.n_index_type_eq)){
            this.getSearchCond().eq("`index_type`", n_index_type_eq);
        }
    }
	private String n_indexname_like;//[支持搜索[需求、Bug、任务、项目、产品、文档、用例]]
	public void setN_indexname_like(String n_indexname_like) {
        this.n_indexname_like = n_indexname_like;
        if(!ObjectUtils.isEmpty(this.n_indexname_like)){
            this.getSearchCond().like("`indexname`", n_indexname_like);
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
                     wrapper.like("`indexname`", query)
                        .or().like("`indexdesc`", query)
            );
		 }
	}
}



