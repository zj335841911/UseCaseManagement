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
import cn.ibizlab.pms.core.zentao.domain.CaseStep;
/**
 * 关系型数据实体[CaseStep] 查询条件对象
 */
@Slf4j
@Data
public class CaseStepSearchContext extends QueryWrapperContext<CaseStep> {

	private Long n_case_eq;//[用例]
	public void setN_case_eq(Long n_case_eq) {
        this.n_case_eq = n_case_eq;
        if(!ObjectUtils.isEmpty(this.n_case_eq)){
            this.getSearchCond().eq("`case`", n_case_eq);
        }
    }
	private BigInteger n_parent_eq;//[分组用例步骤的组编号]
	public void setN_parent_eq(BigInteger n_parent_eq) {
        this.n_parent_eq = n_parent_eq;
        if(!ObjectUtils.isEmpty(this.n_parent_eq)){
            this.getSearchCond().eq("parent", n_parent_eq);
        }
    }

    private Integer n_version_eq;//[用例]
    public void setN_version_eq(Integer n_version_eq) {
        this.n_version_eq = n_version_eq;
        if(!ObjectUtils.isEmpty(this.n_version_eq)){
            this.getSearchCond().eq("`version`", n_version_eq);
        }
    }
    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		 this.query=query;
		 if(!StringUtils.isEmpty(query)){
            this.getSearchCond().and( wrapper ->
                     wrapper.like("expect", query)   
            );
		 }
	}
}




