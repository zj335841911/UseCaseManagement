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
import cn.ibizlab.pms.core.report.domain.IbzReportly;
/**
 * 关系型数据实体[IbzReportly] 查询条件对象
 */
@Slf4j
@Data
public class IbzReportlySearchContext extends QueryWrapperContext<IbzReportly> {

	private String n_account_eq;//[用户]
	public void setN_account_eq(String n_account_eq) {
        this.n_account_eq = n_account_eq;
        if(!ObjectUtils.isEmpty(this.n_account_eq)){
            this.getSearchCond().eq("`account`", n_account_eq);
        }
    }
	private String n_ibz_reportlyname_like;//[汇报名称]
	public void setN_ibz_reportlyname_like(String n_ibz_reportlyname_like) {
        this.n_ibz_reportlyname_like = n_ibz_reportlyname_like;
        if(!ObjectUtils.isEmpty(this.n_ibz_reportlyname_like)){
            this.getSearchCond().like("`ibz_reportlyname`", n_ibz_reportlyname_like);
        }
    }
	private String n_issubmit_eq;//[是否提交]
	public void setN_issubmit_eq(String n_issubmit_eq) {
        this.n_issubmit_eq = n_issubmit_eq;
        if(!ObjectUtils.isEmpty(this.n_issubmit_eq)){
            this.getSearchCond().eq("`issubmit`", n_issubmit_eq);
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
                     wrapper.like("`ibz_reportlyname`", query)
            );
		 }
	}
}



