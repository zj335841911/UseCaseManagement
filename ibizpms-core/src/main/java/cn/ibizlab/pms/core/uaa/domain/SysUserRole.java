package cn.ibizlab.pms.core.uaa.domain;

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
 * ServiceApi [用户角色关系] 对象
 */
@Data
@ApiModel("用户角色关系")
public class SysUserRole extends EntityClient implements Serializable {

    /**
     * 用户角色关系标识
     */
    @DEField(name = "sys_user_roleid" , isKeyField = true)
    @JSONField(name = "userroleid")
    @JsonProperty("userroleid")
    @ApiModelProperty("用户角色关系标识")
    private String userroleid;

    /**
     * 角色标识
     */
    @DEField(name = "sys_roleid")
    @JSONField(name = "roleid")
    @JsonProperty("roleid")
    @ApiModelProperty("角色标识")
    private String roleid;

    /**
     * 角色名称
     */
    @JSONField(name = "rolename")
    @JsonProperty("rolename")
    @ApiModelProperty("角色名称")
    private String rolename;

    /**
     * 用户标识
     */
    @DEField(name = "sys_userid")
    @JSONField(name = "userid")
    @JsonProperty("userid")
    @ApiModelProperty("用户标识")
    private String userid;

    /**
     * 用户名称
     */
    @JSONField(name = "personname")
    @JsonProperty("personname")
    @ApiModelProperty("用户名称")
    private String personname;

    /**
     * 登录名
     */
    @JSONField(name = "loginname")
    @JsonProperty("loginname")
    @ApiModelProperty("登录名")
    private String loginname;

    /**
     * 单位
     */
    @JSONField(name = "orgname")
    @JsonProperty("orgname")
    @ApiModelProperty("单位")
    private String orgname;

    /**
     * 主部门
     */
    @JSONField(name = "mdeptname")
    @JsonProperty("mdeptname")
    @ApiModelProperty("主部门")
    private String mdeptname;

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
     * 更新时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "updatedate" , format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    @ApiModelProperty("更新时间")
    private Timestamp updatedate;


    /**
     * 角色
     */
    @JSONField(name = "role")
    @JsonProperty("role")
    private cn.ibizlab.pms.core.uaa.domain.SysRole role;

    /**
     * 用户
     */
    @JSONField(name = "user")
    @JsonProperty("user")
    private cn.ibizlab.pms.core.uaa.domain.SysUser user;




    /**
     * 设置 [角色标识]
     */
    public void setRoleid(String roleid) {
        this.roleid = roleid ;
        this.modify("sys_roleid",roleid);
    }

    /**
     * 设置 [用户标识]
     */
    public void setUserid(String userid) {
        this.userid = userid ;
        this.modify("sys_userid",userid);
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
        this.reset("sys_user_roleid");
        return super.copyTo(targetEntity,bIncEmpty);
    }
}


