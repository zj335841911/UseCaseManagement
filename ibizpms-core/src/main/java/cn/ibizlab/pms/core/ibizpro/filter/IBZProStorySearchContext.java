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
import cn.ibizlab.pms.core.ibizpro.domain.IBZProStory;
/**
 * 关系型数据实体[IBZProStory] 查询条件对象
 */
@Slf4j
@Data
public class IBZProStorySearchContext extends QueryWrapperContext<IBZProStory> {

	private String n_sourcenote_eq;//[来源备注]
	public void setN_sourcenote_eq(String n_sourcenote_eq) {
        this.n_sourcenote_eq = n_sourcenote_eq;
        if(!ObjectUtils.isEmpty(this.n_sourcenote_eq)){
            this.getSearchCond().eq("`sourcenote`", n_sourcenote_eq);
        }
    }
	private String n_stagedby_eq;//[设置阶段者]
	public void setN_stagedby_eq(String n_stagedby_eq) {
        this.n_stagedby_eq = n_stagedby_eq;
        if(!ObjectUtils.isEmpty(this.n_stagedby_eq)){
            this.getSearchCond().eq("`stagedby`", n_stagedby_eq);
        }
    }
	private Integer n_pri_eq;//[优先级]
	public void setN_pri_eq(Integer n_pri_eq) {
        this.n_pri_eq = n_pri_eq;
        if(!ObjectUtils.isEmpty(this.n_pri_eq)){
            this.getSearchCond().eq("`pri`", n_pri_eq);
        }
    }
	private String n_stage_eq;//[需求阶段]
	public void setN_stage_eq(String n_stage_eq) {
        this.n_stage_eq = n_stage_eq;
        if(!ObjectUtils.isEmpty(this.n_stage_eq)){
            this.getSearchCond().eq("`stage`", n_stage_eq);
        }
    }
	private String n_type_eq;//[需求类型]
	public void setN_type_eq(String n_type_eq) {
        this.n_type_eq = n_type_eq;
        if(!ObjectUtils.isEmpty(this.n_type_eq)){
            this.getSearchCond().eq("`type`", n_type_eq);
        }
    }
	private String n_title_like;//[需求名称]
	public void setN_title_like(String n_title_like) {
        this.n_title_like = n_title_like;
        if(!ObjectUtils.isEmpty(this.n_title_like)){
            this.getSearchCond().like("`title`", n_title_like);
        }
    }
	private String n_ibiz_sourceobject_eq;//[来源对象]
	public void setN_ibiz_sourceobject_eq(String n_ibiz_sourceobject_eq) {
        this.n_ibiz_sourceobject_eq = n_ibiz_sourceobject_eq;
        if(!ObjectUtils.isEmpty(this.n_ibiz_sourceobject_eq)){
            this.getSearchCond().eq("`ibiz_sourceobject`", n_ibiz_sourceobject_eq);
        }
    }
	private String n_ibiz_id_eq;//[IBIZ标识]
	public void setN_ibiz_id_eq(String n_ibiz_id_eq) {
        this.n_ibiz_id_eq = n_ibiz_id_eq;
        if(!ObjectUtils.isEmpty(this.n_ibiz_id_eq)){
            this.getSearchCond().eq("`ibiz_id`", n_ibiz_id_eq);
        }
    }
	private String n_source_eq;//[需求来源]
	public void setN_source_eq(String n_source_eq) {
        this.n_source_eq = n_source_eq;
        if(!ObjectUtils.isEmpty(this.n_source_eq)){
            this.getSearchCond().eq("`source`", n_source_eq);
        }
    }
	private String n_color_eq;//[颜色]
	public void setN_color_eq(String n_color_eq) {
        this.n_color_eq = n_color_eq;
        if(!ObjectUtils.isEmpty(this.n_color_eq)){
            this.getSearchCond().eq("`color`", n_color_eq);
        }
    }
	private String n_status_eq;//[状态]
	public void setN_status_eq(String n_status_eq) {
        this.n_status_eq = n_status_eq;
        if(!ObjectUtils.isEmpty(this.n_status_eq)){
            this.getSearchCond().eq("`status`", n_status_eq);
        }
    }
	private Long n_product_eq;//[编号]
	public void setN_product_eq(Long n_product_eq) {
        this.n_product_eq = n_product_eq;
        if(!ObjectUtils.isEmpty(this.n_product_eq)){
            this.getSearchCond().eq("`product`", n_product_eq);
        }
    }
	private Long n_module_eq;//[id]
	public void setN_module_eq(Long n_module_eq) {
        this.n_module_eq = n_module_eq;
        if(!ObjectUtils.isEmpty(this.n_module_eq)){
            this.getSearchCond().eq("`module`", n_module_eq);
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
                     wrapper.like("`title`", query)
            );
		 }
	}
}



