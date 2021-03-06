package cn.ibizlab.pms.core.ou.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import cn.ibizlab.pms.util.domain.EntityBase;
import cn.ibizlab.pms.util.annotation.DEField;
import cn.ibizlab.pms.util.enums.DEPredefinedFieldType;
import cn.ibizlab.pms.util.enums.DEFieldDefaultValueType;
import cn.ibizlab.pms.util.helper.DataObject;
import cn.ibizlab.pms.util.enums.DupCheck;
import java.io.Serializable;
import lombok.*;
import org.springframework.data.annotation.Transient;
import cn.ibizlab.pms.util.annotation.Audit;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import cn.ibizlab.pms.util.domain.EntityClient;

/**
 * ServiceApi [部门] 对象
 */
@Data
@ApiModel("部门")
public class SysDepartment extends EntityClient implements Serializable {

    /**
     * 部门标识
     */
    @DEField(isKeyField = true)
    @JSONField(name = "deptid")
    @JsonProperty("deptid")
    @ApiModelProperty("部门标识")
    private String deptid;

    /**
     * 部门代码
     */
    @JSONField(name = "deptcode")
    @JsonProperty("deptcode")
    @ApiModelProperty("部门代码")
    private String deptcode;

    /**
     * 部门名称
     */
    @JSONField(name = "deptname")
    @JsonProperty("deptname")
    @ApiModelProperty("部门名称")
    private String deptname;

    /**
     * 单位
     */
    @DEField(preType = DEPredefinedFieldType.ORGID)
    @JSONField(name = "orgid")
    @JsonProperty("orgid")
    @ApiModelProperty("单位")
    private String orgid;

    /**
     * 上级部门
     */
    @DEField(name = "pdeptid")
    @JSONField(name = "parentdeptid")
    @JsonProperty("parentdeptid")
    @ApiModelProperty("上级部门")
    private String parentdeptid;

    /**
     * 部门简称
     */
    @JSONField(name = "shortname")
    @JsonProperty("shortname")
    @ApiModelProperty("部门简称")
    private String shortname;

    /**
     * 部门级别
     */
    @JSONField(name = "deptlevel")
    @JsonProperty("deptlevel")
    @ApiModelProperty("部门级别")
    private Integer deptlevel;

    /**
     * 区属
     */
    @JSONField(name = "domains")
    @JsonProperty("domains")
    @ApiModelProperty("区属")
    private String domains;

    /**
     * 排序
     */
    @JSONField(name = "showorder")
    @JsonProperty("showorder")
    @ApiModelProperty("排序")
    private Integer showorder;

    /**
     * 业务编码
     */
    @JSONField(name = "bcode")
    @JsonProperty("bcode")
    @ApiModelProperty("业务编码")
    private String bcode;

    /**
     * 分管领导标识
     */
    @JSONField(name = "leaderid")
    @JsonProperty("leaderid")
    @ApiModelProperty("分管领导标识")
    private String leaderid;

    /**
     * 分管领导
     */
    @JSONField(name = "leadername")
    @JsonProperty("leadername")
    @ApiModelProperty("分管领导")
    private String leadername;

    /**
     * 单位
     */
    @JSONField(name = "orgname")
    @JsonProperty("orgname")
    @ApiModelProperty("单位")
    private String orgname;

    /**
     * 上级部门
     */
    @JSONField(name = "parentdeptname")
    @JsonProperty("parentdeptname")
    @ApiModelProperty("上级部门")
    private String parentdeptname;

    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "createdate" , format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    @ApiModelProperty("建立时间")
    private Timestamp createdate;

    /**
     * 逻辑有效标志
     */
    @DEField(preType = DEPredefinedFieldType.LOGICVALID, logicval = "1" , logicdelval = "0")
    @JSONField(name = "enable")
    @JsonProperty("enable")
    @ApiModelProperty("逻辑有效标志")
    private Integer enable;

    /**
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    @ApiModelProperty("更新人")
    private String updateman;

    /**
     * 更新时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "updatedate" , format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    @ApiModelProperty("更新时间")
    private Timestamp updatedate;

    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    @ApiModelProperty("建立人")
    private String createman;


    /**
     * 
     */
    @JSONField(name = "parentdept")
    @JsonProperty("parentdept")
    private cn.ibizlab.pms.core.ou.domain.SysDepartment parentdept;

    /**
     * 单位
     */
    @JSONField(name = "org")
    @JsonProperty("org")
    private cn.ibizlab.pms.core.ou.domain.SysOrganization org;




    /**
     * 设置 [部门代码]
     */
    public void setDeptcode(String deptcode) {
        this.deptcode = deptcode ;
        this.modify("deptcode",deptcode);
    }

    /**
     * 设置 [部门名称]
     */
    public void setDeptname(String deptname) {
        this.deptname = deptname ;
        this.modify("deptname",deptname);
    }

    /**
     * 设置 [上级部门]
     */
    public void setParentdeptid(String parentdeptid) {
        this.parentdeptid = parentdeptid ;
        this.modify("pdeptid",parentdeptid);
    }

    /**
     * 设置 [部门简称]
     */
    public void setShortname(String shortname) {
        this.shortname = shortname ;
        this.modify("shortname",shortname);
    }

    /**
     * 设置 [部门级别]
     */
    public void setDeptlevel(Integer deptlevel) {
        this.deptlevel = deptlevel ;
        this.modify("deptlevel",deptlevel);
    }

    /**
     * 设置 [区属]
     */
    public void setDomains(String domains) {
        this.domains = domains ;
        this.modify("domains",domains);
    }

    /**
     * 设置 [排序]
     */
    public void setShoworder(Integer showorder) {
        this.showorder = showorder ;
        this.modify("showorder",showorder);
    }

    /**
     * 设置 [业务编码]
     */
    public void setBcode(String bcode) {
        this.bcode = bcode ;
        this.modify("bcode",bcode);
    }

    /**
     * 设置 [分管领导标识]
     */
    public void setLeaderid(String leaderid) {
        this.leaderid = leaderid ;
        this.modify("leaderid",leaderid);
    }

    /**
     * 设置 [分管领导]
     */
    public void setLeadername(String leadername) {
        this.leadername = leadername ;
        this.modify("leadername",leadername);
    }

    /**
     * 复制当前对象数据到目标对象(粘贴重置)
     * @param targetEntity 目标数据对象
     * @param bIncEmpty  是否包括空值
     * @param <T>
     * @return
     */
    @Override
    public <T> T copyTo(T targetEntity, boolean bIncEmpty) {
        this.reset("deptid");
        return super.copyTo(targetEntity,bIncEmpty);
    }
}


