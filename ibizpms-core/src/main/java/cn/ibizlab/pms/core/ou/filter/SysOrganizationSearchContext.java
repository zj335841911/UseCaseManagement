package cn.ibizlab.pms.core.ou.filter;

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


import cn.ibizlab.pms.util.filter.SearchContextBase;

/**
 * ServiceApi数据实体[SysOrganization] 查询条件对象
 */
@Slf4j
@Data
public class SysOrganizationSearchContext extends SearchContextBase {
	private String n_orgname_like;//[名称]

	private String n_porgid_eq;//[上级单位]

	private String n_porgname_eq;//[上级单位]

	private String n_porgname_like;//[上级单位]

}


