package cn.ibizlab.pms.webapi.dto;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.math.BigInteger;
import java.util.Map;
import java.util.HashMap;
import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.alibaba.fastjson.annotation.JSONField;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import cn.ibizlab.pms.util.domain.DTOBase;
import cn.ibizlab.pms.util.domain.DTOClient;
import lombok.Data;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * 服务DTO对象[SysUserRoleDTO]
 */
@Data
@ApiModel("用户角色关系")
public class SysUserRoleDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [SYS_USER_ROLEID]
     *
     */
    @JSONField(name = "userroleid")
    @JsonProperty("userroleid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("用户角色关系标识")
    private String userroleid;

    /**
     * 属性 [SYS_ROLEID]
     *
     */
    @JSONField(name = "roleid")
    @JsonProperty("roleid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("角色标识")
    private String roleid;

    /**
     * 属性 [SYS_ROLENAME]
     *
     */
    @JSONField(name = "rolename")
    @JsonProperty("rolename")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("角色名称")
    private String rolename;

    /**
     * 属性 [SYS_USERID]
     *
     */
    @JSONField(name = "userid")
    @JsonProperty("userid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("用户标识")
    private String userid;

    /**
     * 属性 [SYS_USERNAME]
     *
     */
    @JSONField(name = "personname")
    @JsonProperty("personname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("用户名称")
    private String personname;

    /**
     * 属性 [LOGINNAME]
     *
     */
    @JSONField(name = "loginname")
    @JsonProperty("loginname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("登录名")
    private String loginname;

    /**
     * 属性 [ORGNAME]
     *
     */
    @JSONField(name = "orgname")
    @JsonProperty("orgname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("单位")
    private String orgname;

    /**
     * 属性 [MDEPTNAME]
     *
     */
    @JSONField(name = "mdeptname")
    @JsonProperty("mdeptname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("主部门")
    private String mdeptname;

    /**
     * 属性 [CREATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    @ApiModelProperty("建立时间")
    private Timestamp createdate;

    /**
     * 属性 [UPDATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    @ApiModelProperty("更新时间")
    private Timestamp updatedate;


    /**
     * 设置 [SYS_ROLEID]
     */
    public void setRoleid(String  roleid){
        this.roleid = roleid ;
        this.modify("sys_roleid",roleid);
    }

    /**
     * 设置 [SYS_USERID]
     */
    public void setUserid(String  userid){
        this.userid = userid ;
        this.modify("sys_userid",userid);
    }


}


