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
import cn.ibizlab.pms.core.zentao.domain.Project;
/**
 * 关系型数据实体[Project] 查询条件对象
 */
@Slf4j
@Data
public class ProjectSearchContext extends QueryWrapperContext<Project> {

	private String n_acl_eq;//[访问控制]
	public void setN_acl_eq(String n_acl_eq) {
        this.n_acl_eq = n_acl_eq;
        if(!ObjectUtils.isEmpty(this.n_acl_eq)){
            this.getSearchCond().eq("`acl`", n_acl_eq);
        }
    }
	private String n_pm_eq;//[项目负责人]
	public void setN_pm_eq(String n_pm_eq) {
        this.n_pm_eq = n_pm_eq;
        if(!ObjectUtils.isEmpty(this.n_pm_eq)){
            this.getSearchCond().eq("`pm`", n_pm_eq);
        }
    }
	private String n_dept_eq;//[选择部门]
	public void setN_dept_eq(String n_dept_eq) {
        this.n_dept_eq = n_dept_eq;
        if(!ObjectUtils.isEmpty(this.n_dept_eq)){
            this.getSearchCond().eq("`dept`", n_dept_eq);
        }
    }
	private Long n_id_eq;//[项目编号]
	public void setN_id_eq(Long n_id_eq) {
        this.n_id_eq = n_id_eq;
        if(!ObjectUtils.isEmpty(this.n_id_eq)){
            this.getSearchCond().eq("`id`", n_id_eq);
        }
    }
	private String n_id_in;//[项目编号]
	public void setN_id_in(String n_id_in) {
        this.n_id_in = n_id_in;
        if(!ObjectUtils.isEmpty(this.n_id_in)){
			this.getSearchCond().in("`id`",this.n_id_in.split(";"));
        }
    }
	private Long n_id_noteq;//[项目编号]
	public void setN_id_noteq(Long n_id_noteq) {
        this.n_id_noteq = n_id_noteq;
        if(!ObjectUtils.isEmpty(this.n_id_noteq)){
            this.getSearchCond().ne("`id`", n_id_noteq);
        }
    }
	private String n_name_eq;//[项目名称]
	public void setN_name_eq(String n_name_eq) {
        this.n_name_eq = n_name_eq;
        if(!ObjectUtils.isEmpty(this.n_name_eq)){
            this.getSearchCond().eq("`name`", n_name_eq);
        }
    }
	private String n_name_like;//[项目名称]
	public void setN_name_like(String n_name_like) {
        this.n_name_like = n_name_like;
        if(!ObjectUtils.isEmpty(this.n_name_like)){
            this.getSearchCond().like("`name`", n_name_like);
        }
    }
	private String n_rd_eq;//[发布负责人]
	public void setN_rd_eq(String n_rd_eq) {
        this.n_rd_eq = n_rd_eq;
        if(!ObjectUtils.isEmpty(this.n_rd_eq)){
            this.getSearchCond().eq("`rd`", n_rd_eq);
        }
    }
	private String n_managemembers_eq;//[复制团队]
	public void setN_managemembers_eq(String n_managemembers_eq) {
        this.n_managemembers_eq = n_managemembers_eq;
        if(!ObjectUtils.isEmpty(this.n_managemembers_eq)){
            this.getSearchCond().eq("`managemembers`", n_managemembers_eq);
        }
    }
	private String n_pri_eq;//[优先级]
	public void setN_pri_eq(String n_pri_eq) {
        this.n_pri_eq = n_pri_eq;
        if(!ObjectUtils.isEmpty(this.n_pri_eq)){
            this.getSearchCond().eq("`pri`", n_pri_eq);
        }
    }
	private String n_period_eq;//[时间段]
	public void setN_period_eq(String n_period_eq) {
        this.n_period_eq = n_period_eq;
        if(!ObjectUtils.isEmpty(this.n_period_eq)){
            this.getSearchCond().eq("`period`", n_period_eq);
        }
    }
	private String n_statge_eq;//[statge]
	public void setN_statge_eq(String n_statge_eq) {
        this.n_statge_eq = n_statge_eq;
        if(!ObjectUtils.isEmpty(this.n_statge_eq)){
            this.getSearchCond().eq("`statge`", n_statge_eq);
        }
    }
	private String n_supproreport_eq;//[支持项目汇报]
	public void setN_supproreport_eq(String n_supproreport_eq) {
        this.n_supproreport_eq = n_supproreport_eq;
        if(!ObjectUtils.isEmpty(this.n_supproreport_eq)){
            this.getSearchCond().eq("`supproreport`", n_supproreport_eq);
        }
    }
	private String n_iscat_eq;//[isCat]
	public void setN_iscat_eq(String n_iscat_eq) {
        this.n_iscat_eq = n_iscat_eq;
        if(!ObjectUtils.isEmpty(this.n_iscat_eq)){
            this.getSearchCond().eq("`iscat`", n_iscat_eq);
        }
    }
	private String n_type_eq;//[项目类型]
	public void setN_type_eq(String n_type_eq) {
        this.n_type_eq = n_type_eq;
        if(!ObjectUtils.isEmpty(this.n_type_eq)){
            this.getSearchCond().eq("`type`", n_type_eq);
        }
    }
	private String n_account_eq;//[项目团队成员]
	public void setN_account_eq(String n_account_eq) {
        this.n_account_eq = n_account_eq;
        if(!ObjectUtils.isEmpty(this.n_account_eq)){
            this.getSearchCond().eq("`account`", n_account_eq);
        }
    }
	private String n_po_eq;//[产品负责人]
	public void setN_po_eq(String n_po_eq) {
        this.n_po_eq = n_po_eq;
        if(!ObjectUtils.isEmpty(this.n_po_eq)){
            this.getSearchCond().eq("`po`", n_po_eq);
        }
    }
	private String n_status_eq;//[项目状态]
	public void setN_status_eq(String n_status_eq) {
        this.n_status_eq = n_status_eq;
        if(!ObjectUtils.isEmpty(this.n_status_eq)){
            this.getSearchCond().eq("`status`", n_status_eq);
        }
    }
	private String n_status_noteq;//[项目状态]
	public void setN_status_noteq(String n_status_noteq) {
        this.n_status_noteq = n_status_noteq;
        if(!ObjectUtils.isEmpty(this.n_status_noteq)){
            this.getSearchCond().ne("`status`", n_status_noteq);
        }
    }
	private String n_qd_eq;//[测试负责人]
	public void setN_qd_eq(String n_qd_eq) {
        this.n_qd_eq = n_qd_eq;
        if(!ObjectUtils.isEmpty(this.n_qd_eq)){
            this.getSearchCond().eq("`qd`", n_qd_eq);
        }
    }
	private String n_parentname_eq;//[parent]
	public void setN_parentname_eq(String n_parentname_eq) {
        this.n_parentname_eq = n_parentname_eq;
        if(!ObjectUtils.isEmpty(this.n_parentname_eq)){
            this.getSearchCond().eq("`parentname`", n_parentname_eq);
        }
    }
	private String n_parentname_like;//[parent]
	public void setN_parentname_like(String n_parentname_like) {
        this.n_parentname_like = n_parentname_like;
        if(!ObjectUtils.isEmpty(this.n_parentname_like)){
            this.getSearchCond().like("`parentname`", n_parentname_like);
        }
    }
	private Long n_parent_eq;//[父项目]
	public void setN_parent_eq(Long n_parent_eq) {
        this.n_parent_eq = n_parent_eq;
        if(!ObjectUtils.isEmpty(this.n_parent_eq)){
            this.getSearchCond().eq("`parent`", n_parent_eq);
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
                     wrapper.like("`id`", query)
                        .or().like("`name`", query)
                        .or().like("`code`", query)
            );
		 }
	}
}



