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
 * ServiceApi [人员] 对象
 */
@Data
@ApiModel("人员")
public class SysEmployee extends EntityClient implements Serializable {

    /**
     * 用户标识
     */
    @DEField(isKeyField = true)
    @JSONField(name = "userid")
    @JsonProperty("userid")
    @ApiModelProperty("用户标识")
    private String userid;

    /**
     * 用户全局名
     */
    @JSONField(name = "username")
    @JsonProperty("username")
    @ApiModelProperty("用户全局名")
    private String username;

    /**
     * 姓名
     */
    @JSONField(name = "personname")
    @JsonProperty("personname")
    @ApiModelProperty("姓名")
    private String personname;

    /**
     * 用户工号
     */
    @JSONField(name = "usercode")
    @JsonProperty("usercode")
    @ApiModelProperty("用户工号")
    private String usercode;

    /**
     * 登录名
     */
    @JSONField(name = "loginname")
    @JsonProperty("loginname")
    @ApiModelProperty("登录名")
    private String loginname;

    /**
     * 密码
     */
    @JSONField(name = "password")
    @JsonProperty("password")
    @ApiModelProperty("密码")
    private String password;

    /**
     * 区属
     */
    @JSONField(name = "domains")
    @JsonProperty("domains")
    @ApiModelProperty("区属")
    private String domains;

    /**
     * 主部门
     */
    @JSONField(name = "mdeptid")
    @JsonProperty("mdeptid")
    @ApiModelProperty("主部门")
    private String mdeptid;

    /**
     * 主部门代码
     */
    @JSONField(name = "mdeptcode")
    @JsonProperty("mdeptcode")
    @ApiModelProperty("主部门代码")
    private String mdeptcode;

    /**
     * 主部门名称
     */
    @JSONField(name = "mdeptname")
    @JsonProperty("mdeptname")
    @ApiModelProperty("主部门名称")
    private String mdeptname;

    /**
     * 业务编码
     */
    @JSONField(name = "bcode")
    @JsonProperty("bcode")
    @ApiModelProperty("业务编码")
    private String bcode;

    /**
     * 单位
     */
    @DEField(preType = DEPredefinedFieldType.ORGID)
    @JSONField(name = "orgid")
    @JsonProperty("orgid")
    @ApiModelProperty("单位")
    private String orgid;

    /**
     * 单位代码
     */
    @JSONField(name = "orgcode")
    @JsonProperty("orgcode")
    @ApiModelProperty("单位代码")
    private String orgcode;

    /**
     * 单位名称
     */
    @DEField(preType = DEPredefinedFieldType.ORGNAME)
    @JSONField(name = "orgname")
    @JsonProperty("orgname")
    @ApiModelProperty("单位名称")
    private String orgname;

    /**
     * 昵称别名
     */
    @JSONField(name = "nickname")
    @JsonProperty("nickname")
    @ApiModelProperty("昵称别名")
    private String nickname;

    /**
     * 性别
     */
    @JSONField(name = "sex")
    @JsonProperty("sex")
    @ApiModelProperty("性别")
    private String sex;

    /**
     * 联系方式
     */
    @JSONField(name = "phone")
    @JsonProperty("phone")
    @ApiModelProperty("联系方式")
    private String phone;

    /**
     * 邮件
     */
    @JSONField(name = "email")
    @JsonProperty("email")
    @ApiModelProperty("邮件")
    private String email;

    /**
     * 社交账号
     */
    @JSONField(name = "avatar")
    @JsonProperty("avatar")
    @ApiModelProperty("社交账号")
    private String avatar;

    /**
     * 地址
     */
    @JSONField(name = "addr")
    @JsonProperty("addr")
    @ApiModelProperty("地址")
    private String addr;

    /**
     * 照片
     */
    @JSONField(name = "usericon")
    @JsonProperty("usericon")
    @ApiModelProperty("照片")
    private String usericon;

    /**
     * ip地址
     */
    @JSONField(name = "ipaddr")
    @JsonProperty("ipaddr")
    @ApiModelProperty("ip地址")
    private String ipaddr;

    /**
     * 语言
     */
    @JSONField(name = "lang")
    @JsonProperty("lang")
    @ApiModelProperty("语言")
    private String lang;

    /**
     * 备注
     */
    @JSONField(name = "memo")
    @JsonProperty("memo")
    @ApiModelProperty("备注")
    private String memo;

    /**
     * 保留
     */
    @JSONField(name = "reserver")
    @JsonProperty("reserver")
    @ApiModelProperty("保留")
    private String reserver;

    /**
     * 排序
     */
    @JSONField(name = "showorder")
    @JsonProperty("showorder")
    @ApiModelProperty("排序")
    private Integer showorder;

    /**
     * 逻辑有效
     */
    @DEField(preType = DEPredefinedFieldType.LOGICVALID)
    @JSONField(name = "enable")
    @JsonProperty("enable")
    @ApiModelProperty("逻辑有效")
    private Integer enable;

    /**
     * 创建时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "createdate" , format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    @ApiModelProperty("创建时间")
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
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    @ApiModelProperty("更新人")
    private String updateman;

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
    @JSONField(name = "maindept")
    @JsonProperty("maindept")
    private cn.ibizlab.pms.core.ou.domain.SysDepartment maindept;

    /**
     * 
     */
    @JSONField(name = "org")
    @JsonProperty("org")
    private cn.ibizlab.pms.core.ou.domain.SysOrganization org;




    /**
     * 设置 [用户全局名]
     */
    public void setUsername(String username) {
        this.username = username ;
        this.modify("username",username);
    }

    /**
     * 设置 [姓名]
     */
    public void setPersonname(String personname) {
        this.personname = personname ;
        this.modify("personname",personname);
    }

    /**
     * 设置 [用户工号]
     */
    public void setUsercode(String usercode) {
        this.usercode = usercode ;
        this.modify("usercode",usercode);
    }

    /**
     * 设置 [登录名]
     */
    public void setLoginname(String loginname) {
        this.loginname = loginname ;
        this.modify("loginname",loginname);
    }

    /**
     * 设置 [密码]
     */
    public void setPassword(String password) {
        this.password = password ;
        this.modify("password",password);
    }

    /**
     * 设置 [区属]
     */
    public void setDomains(String domains) {
        this.domains = domains ;
        this.modify("domains",domains);
    }

    /**
     * 设置 [主部门]
     */
    public void setMdeptid(String mdeptid) {
        this.mdeptid = mdeptid ;
        this.modify("mdeptid",mdeptid);
    }

    /**
     * 设置 [主部门代码]
     */
    public void setMdeptcode(String mdeptcode) {
        this.mdeptcode = mdeptcode ;
        this.modify("mdeptcode",mdeptcode);
    }

    /**
     * 设置 [主部门名称]
     */
    public void setMdeptname(String mdeptname) {
        this.mdeptname = mdeptname ;
        this.modify("mdeptname",mdeptname);
    }

    /**
     * 设置 [业务编码]
     */
    public void setBcode(String bcode) {
        this.bcode = bcode ;
        this.modify("bcode",bcode);
    }

    /**
     * 设置 [单位代码]
     */
    public void setOrgcode(String orgcode) {
        this.orgcode = orgcode ;
        this.modify("orgcode",orgcode);
    }

    /**
     * 设置 [昵称别名]
     */
    public void setNickname(String nickname) {
        this.nickname = nickname ;
        this.modify("nickname",nickname);
    }

    /**
     * 设置 [性别]
     */
    public void setSex(String sex) {
        this.sex = sex ;
        this.modify("sex",sex);
    }

    /**
     * 设置 [联系方式]
     */
    public void setPhone(String phone) {
        this.phone = phone ;
        this.modify("phone",phone);
    }

    /**
     * 设置 [邮件]
     */
    public void setEmail(String email) {
        this.email = email ;
        this.modify("email",email);
    }

    /**
     * 设置 [社交账号]
     */
    public void setAvatar(String avatar) {
        this.avatar = avatar ;
        this.modify("avatar",avatar);
    }

    /**
     * 设置 [地址]
     */
    public void setAddr(String addr) {
        this.addr = addr ;
        this.modify("addr",addr);
    }

    /**
     * 设置 [照片]
     */
    public void setUsericon(String usericon) {
        this.usericon = usericon ;
        this.modify("usericon",usericon);
    }

    /**
     * 设置 [ip地址]
     */
    public void setIpaddr(String ipaddr) {
        this.ipaddr = ipaddr ;
        this.modify("ipaddr",ipaddr);
    }

    /**
     * 设置 [语言]
     */
    public void setLang(String lang) {
        this.lang = lang ;
        this.modify("lang",lang);
    }

    /**
     * 设置 [备注]
     */
    public void setMemo(String memo) {
        this.memo = memo ;
        this.modify("memo",memo);
    }

    /**
     * 设置 [保留]
     */
    public void setReserver(String reserver) {
        this.reserver = reserver ;
        this.modify("reserver",reserver);
    }

    /**
     * 设置 [排序]
     */
    public void setShoworder(Integer showorder) {
        this.showorder = showorder ;
        this.modify("showorder",showorder);
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
        this.reset("userid");
        return super.copyTo(targetEntity,bIncEmpty);
    }
}


