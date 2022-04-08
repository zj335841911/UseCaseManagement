package cn.ibizlab.pms.core.ibiz.filter;

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
import cn.ibizlab.pms.core.ibiz.domain.IbzMyTerritory;
/**
 * 关系型数据实体[IbzMyTerritory] 查询条件对象
 */
@Slf4j
@Data
public class IbzMyTerritorySearchContext extends QueryWrapperContext<IbzMyTerritory> {

	private String n_realname_like;//[真实姓名]
	public void setN_realname_like(String n_realname_like) {
        this.n_realname_like = n_realname_like;
        if(!ObjectUtils.isEmpty(this.n_realname_like)){
            this.getSearchCond().like("`realname`", n_realname_like);
        }
    }
	private String n_clientstatus_eq;//[clientStatus]
	public void setN_clientstatus_eq(String n_clientstatus_eq) {
        this.n_clientstatus_eq = n_clientstatus_eq;
        if(!ObjectUtils.isEmpty(this.n_clientstatus_eq)){
            this.getSearchCond().eq("`clientstatus`", n_clientstatus_eq);
        }
    }
	private String n_account_eq;//[账户]
	public void setN_account_eq(String n_account_eq) {
        this.n_account_eq = n_account_eq;
        if(!ObjectUtils.isEmpty(this.n_account_eq)){
            this.getSearchCond().eq("`account`", n_account_eq);
        }
    }
	private String n_gender_eq;//[男女]
	public void setN_gender_eq(String n_gender_eq) {
        this.n_gender_eq = n_gender_eq;
        if(!ObjectUtils.isEmpty(this.n_gender_eq)){
            this.getSearchCond().eq("`gender`", n_gender_eq);
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
                     wrapper.like("`realname`", query)
            );
		 }
	}
}



