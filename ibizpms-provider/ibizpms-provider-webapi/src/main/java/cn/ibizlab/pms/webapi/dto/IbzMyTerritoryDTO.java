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
 * 服务DTO对象[IbzMyTerritoryDTO]
 */
@Data
@ApiModel("我的地盘")
public class IbzMyTerritoryDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [MYEBUGS]
     *
     */
    @JSONField(name = "myebugs")
    @JsonProperty("myebugs")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("我的过期bug数")
    private String myebugs;

    /**
     * 属性 [NICKNAME]
     *
     */
    @JSONField(name = "nickname")
    @JsonProperty("nickname")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    @ApiModelProperty("nickname")
    private String nickname;

    /**
     * 属性 [FAILS]
     *
     */
    @JSONField(name = "fails")
    @JsonProperty("fails")
    @ApiModelProperty("fails")
    private Integer fails;

    /**
     * 属性 [VISITS]
     *
     */
    @JSONField(name = "visits")
    @JsonProperty("visits")
    @ApiModelProperty("访问次数")
    private Integer visits;

    /**
     * 属性 [PHONE]
     *
     */
    @JSONField(name = "phone")
    @JsonProperty("phone")
    @Size(min = 0, max = 20, message = "内容长度必须小于等于[20]")
    @ApiModelProperty("电话")
    private String phone;

    /**
     * 属性 [MYTODOCNT]
     *
     */
    @JSONField(name = "mytodocnt")
    @JsonProperty("mytodocnt")
    @ApiModelProperty("我的待办数")
    private Integer mytodocnt;

    /**
     * 属性 [MYTERRITORYCNT]
     *
     */
    @JSONField(name = "myterritorycnt")
    @JsonProperty("myterritorycnt")
    @ApiModelProperty("我的地盘")
    private Integer myterritorycnt;

    /**
     * 属性 [MYBUGS]
     *
     */
    @JSONField(name = "mybugs")
    @JsonProperty("mybugs")
    @ApiModelProperty("我的bugs")
    private Integer mybugs;

    /**
     * 属性 [ROLE]
     *
     */
    @JSONField(name = "role")
    @JsonProperty("role")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("职位")
    private String role;

    /**
     * 属性 [REALNAME]
     *
     */
    @JSONField(name = "realname")
    @JsonProperty("realname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("真实姓名")
    private String realname;

    /**
     * 属性 [CLIENTSTATUS]
     *
     */
    @JSONField(name = "clientstatus")
    @JsonProperty("clientstatus")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    @ApiModelProperty("clientStatus")
    private String clientstatus;

    /**
     * 属性 [LAST]
     *
     */
    @JSONField(name = "last")
    @JsonProperty("last")
    @ApiModelProperty("最后登录")
    private Integer last;

    /**
     * 属性 [ZIPCODE]
     *
     */
    @JSONField(name = "zipcode")
    @JsonProperty("zipcode")
    @Size(min = 0, max = 10, message = "内容长度必须小于等于[10]")
    @ApiModelProperty("zipcode")
    private String zipcode;

    /**
     * 属性 [SKYPE]
     *
     */
    @JSONField(name = "skype")
    @JsonProperty("skype")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    @ApiModelProperty("skype")
    private String skype;

    /**
     * 属性 [MYFAVORITEBUGS]
     *
     */
    @JSONField(name = "myfavoritebugs")
    @JsonProperty("myfavoritebugs")
    @ApiModelProperty("我收藏的bugs")
    private Integer myfavoritebugs;

    /**
     * 属性 [JOIN]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "join" , format="yyyy-MM-dd")
    @JsonProperty("join")
    @ApiModelProperty("入职日期")
    private Timestamp join;

    /**
     * 属性 [SCORE]
     *
     */
    @JSONField(name = "score")
    @JsonProperty("score")
    @ApiModelProperty("score")
    private Integer score;

    /**
     * 属性 [DEPT]
     *
     */
    @JSONField(name = "dept")
    @JsonProperty("dept")
    @ApiModelProperty("所属部门")
    private Integer dept;

    /**
     * 属性 [ACCOUNT]
     *
     */
    @JSONField(name = "account")
    @JsonProperty("account")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    @ApiModelProperty("账户")
    private String account;

    /**
     * 属性 [MYFAVORITES]
     *
     */
    @JSONField(name = "myfavorites")
    @JsonProperty("myfavorites")
    @ApiModelProperty("我的收藏")
    private Integer myfavorites;

    /**
     * 属性 [MYSTORYS]
     *
     */
    @JSONField(name = "mystorys")
    @JsonProperty("mystorys")
    @ApiModelProperty("我的需求数")
    private Integer mystorys;

    /**
     * 属性 [COMMITER]
     *
     */
    @JSONField(name = "commiter")
    @JsonProperty("commiter")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("源代码账户")
    private String commiter;

    /**
     * 属性 [MOBILE]
     *
     */
    @JSONField(name = "mobile")
    @JsonProperty("mobile")
    @Size(min = 0, max = 11, message = "内容长度必须小于等于[11]")
    @ApiModelProperty("手机")
    private String mobile;

    /**
     * 属性 [LOCKED]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "locked" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("locked")
    @ApiModelProperty("locked")
    private Timestamp locked;

    /**
     * 属性 [PROJECTTEAMCNT]
     *
     */
    @JSONField(name = "projectteamcnt")
    @JsonProperty("projectteamcnt")
    @ApiModelProperty("项目成员")
    private Integer projectteamcnt;

    /**
     * 属性 [ADDRESS]
     *
     */
    @JSONField(name = "address")
    @JsonProperty("address")
    @Size(min = 0, max = 120, message = "内容长度必须小于等于[120]")
    @ApiModelProperty("通讯地址")
    private String address;

    /**
     * 属性 [MYTASKS]
     *
     */
    @JSONField(name = "mytasks")
    @JsonProperty("mytasks")
    @ApiModelProperty("我的任务")
    private Integer mytasks;

    /**
     * 属性 [SCORELEVEL]
     *
     */
    @JSONField(name = "scorelevel")
    @JsonProperty("scorelevel")
    @ApiModelProperty("scoreLevel")
    private Integer scorelevel;

    /**
     * 属性 [PASSWORD]
     *
     */
    @JSONField(name = "password")
    @JsonProperty("password")
    @Size(min = 0, max = 32, message = "内容长度必须小于等于[32]")
    @ApiModelProperty("密码")
    private String password;

    /**
     * 属性 [LEFTLCBJZCNT]
     *
     */
    @JSONField(name = "leftlcbjzcnt")
    @JsonProperty("leftlcbjzcnt")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("剩余里程碑（今日到期）")
    private String leftlcbjzcnt;

    /**
     * 属性 [RANZHI]
     *
     */
    @JSONField(name = "ranzhi")
    @JsonProperty("ranzhi")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    @ApiModelProperty("ranzhi")
    private String ranzhi;

    /**
     * 属性 [MYTODOCNTJZ]
     *
     */
    @JSONField(name = "mytodocntjz")
    @JsonProperty("mytodocntjz")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("今日截止待办")
    private String mytodocntjz;

    /**
     * 属性 [PROJECTS]
     *
     */
    @JSONField(name = "projects")
    @JsonProperty("projects")
    @ApiModelProperty("未关闭项目数")
    private Integer projects;

    /**
     * 属性 [SLACK]
     *
     */
    @JSONField(name = "slack")
    @JsonProperty("slack")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    @ApiModelProperty("slack")
    private String slack;

    /**
     * 属性 [PRODUCTS]
     *
     */
    @JSONField(name = "products")
    @JsonProperty("products")
    @ApiModelProperty("未关闭产品数")
    private Integer products;

    /**
     * 属性 [WEIXIN]
     *
     */
    @JSONField(name = "weixin")
    @JsonProperty("weixin")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    @ApiModelProperty("微信")
    private String weixin;

    /**
     * 属性 [MYETASKS]
     *
     */
    @JSONField(name = "myetasks")
    @JsonProperty("myetasks")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("我的过期任务数")
    private String myetasks;

    /**
     * 属性 [EPROJECTS]
     *
     */
    @JSONField(name = "eprojects")
    @JsonProperty("eprojects")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("过期项目数")
    private String eprojects;

    /**
     * 属性 [WHATSAPP]
     *
     */
    @JSONField(name = "whatsapp")
    @JsonProperty("whatsapp")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    @ApiModelProperty("whatsapp")
    private String whatsapp;

    /**
     * 属性 [QQ]
     *
     */
    @JSONField(name = "qq")
    @JsonProperty("qq")
    @Size(min = 0, max = 20, message = "内容长度必须小于等于[20]")
    @ApiModelProperty("QQ")
    private String qq;

    /**
     * 属性 [GENDER]
     *
     */
    @JSONField(name = "gender")
    @JsonProperty("gender")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    @ApiModelProperty("男女")
    private String gender;

    /**
     * 属性 [CLIENTLANG]
     *
     */
    @JSONField(name = "clientlang")
    @JsonProperty("clientlang")
    @Size(min = 0, max = 10, message = "内容长度必须小于等于[10]")
    @ApiModelProperty("clientLang")
    private String clientlang;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 1, message = "内容长度必须小于等于[1]")
    @ApiModelProperty("逻辑删除标志")
    private String deleted;

    /**
     * 属性 [MYFAVORITETASKS]
     *
     */
    @JSONField(name = "myfavoritetasks")
    @JsonProperty("myfavoritetasks")
    @ApiModelProperty("我收藏的任务")
    private Integer myfavoritetasks;

    /**
     * 属性 [BIRTHDAY]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "birthday" , format="yyyy-MM-dd")
    @JsonProperty("birthday")
    @ApiModelProperty("birthday")
    private Timestamp birthday;

    /**
     * 属性 [IP]
     *
     */
    @JSONField(name = "ip")
    @JsonProperty("ip")
    @Size(min = 0, max = 15, message = "内容长度必须小于等于[15]")
    @ApiModelProperty("ip")
    private String ip;

    /**
     * 属性 [MYFAVORITESTORYS]
     *
     */
    @JSONField(name = "myfavoritestorys")
    @JsonProperty("myfavoritestorys")
    @ApiModelProperty("我收藏的需求数")
    private Integer myfavoritestorys;

    /**
     * 属性 [EMAIL]
     *
     */
    @JSONField(name = "email")
    @JsonProperty("email")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    @ApiModelProperty("邮箱")
    private String email;

    /**
     * 属性 [DINGDING]
     *
     */
    @JSONField(name = "dingding")
    @JsonProperty("dingding")
    @Size(min = 0, max = 90, message = "内容长度必须小于等于[90]")
    @ApiModelProperty("钉钉")
    private String dingding;

    /**
     * 属性 [AVATAR]
     *
     */
    @JSONField(name = "avatar")
    @JsonProperty("avatar")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    @ApiModelProperty("avatar")
    private String avatar;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    @ApiModelProperty("ID")
    private Long id;

    /**
     * 属性 [LEFTLCBCNT]
     *
     */
    @JSONField(name = "leftlcbcnt")
    @JsonProperty("leftlcbcnt")
    @ApiModelProperty("剩余里程碑")
    private Integer leftlcbcnt;

    /**
     * 属性 [PROJECTTEAMJZCNT]
     *
     */
    @JSONField(name = "projectteamjzcnt")
    @JsonProperty("projectteamjzcnt")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    @ApiModelProperty("项目成员（今日截止）")
    private String projectteamjzcnt;


    /**
     * 设置 [NICKNAME]
     */
    public void setNickname(String  nickname){
        this.nickname = nickname ;
        this.modify("nickname",nickname);
    }

    /**
     * 设置 [FAILS]
     */
    public void setFails(Integer  fails){
        this.fails = fails ;
        this.modify("fails",fails);
    }

    /**
     * 设置 [VISITS]
     */
    public void setVisits(Integer  visits){
        this.visits = visits ;
        this.modify("visits",visits);
    }

    /**
     * 设置 [PHONE]
     */
    public void setPhone(String  phone){
        this.phone = phone ;
        this.modify("phone",phone);
    }

    /**
     * 设置 [ROLE]
     */
    public void setRole(String  role){
        this.role = role ;
        this.modify("role",role);
    }

    /**
     * 设置 [REALNAME]
     */
    public void setRealname(String  realname){
        this.realname = realname ;
        this.modify("realname",realname);
    }

    /**
     * 设置 [CLIENTSTATUS]
     */
    public void setClientstatus(String  clientstatus){
        this.clientstatus = clientstatus ;
        this.modify("clientstatus",clientstatus);
    }

    /**
     * 设置 [LAST]
     */
    public void setLast(Integer  last){
        this.last = last ;
        this.modify("last",last);
    }

    /**
     * 设置 [ZIPCODE]
     */
    public void setZipcode(String  zipcode){
        this.zipcode = zipcode ;
        this.modify("zipcode",zipcode);
    }

    /**
     * 设置 [SKYPE]
     */
    public void setSkype(String  skype){
        this.skype = skype ;
        this.modify("skype",skype);
    }

    /**
     * 设置 [JOIN]
     */
    public void setJoin(Timestamp  join){
        this.join = join ;
        this.modify("join",join);
    }

    /**
     * 设置 [SCORE]
     */
    public void setScore(Integer  score){
        this.score = score ;
        this.modify("score",score);
    }

    /**
     * 设置 [DEPT]
     */
    public void setDept(Integer  dept){
        this.dept = dept ;
        this.modify("dept",dept);
    }

    /**
     * 设置 [ACCOUNT]
     */
    public void setAccount(String  account){
        this.account = account ;
        this.modify("account",account);
    }

    /**
     * 设置 [COMMITER]
     */
    public void setCommiter(String  commiter){
        this.commiter = commiter ;
        this.modify("commiter",commiter);
    }

    /**
     * 设置 [MOBILE]
     */
    public void setMobile(String  mobile){
        this.mobile = mobile ;
        this.modify("mobile",mobile);
    }

    /**
     * 设置 [LOCKED]
     */
    public void setLocked(Timestamp  locked){
        this.locked = locked ;
        this.modify("locked",locked);
    }

    /**
     * 设置 [ADDRESS]
     */
    public void setAddress(String  address){
        this.address = address ;
        this.modify("address",address);
    }

    /**
     * 设置 [SCORELEVEL]
     */
    public void setScorelevel(Integer  scorelevel){
        this.scorelevel = scorelevel ;
        this.modify("scorelevel",scorelevel);
    }

    /**
     * 设置 [PASSWORD]
     */
    public void setPassword(String  password){
        this.password = password ;
        this.modify("password",password);
    }

    /**
     * 设置 [RANZHI]
     */
    public void setRanzhi(String  ranzhi){
        this.ranzhi = ranzhi ;
        this.modify("ranzhi",ranzhi);
    }

    /**
     * 设置 [SLACK]
     */
    public void setSlack(String  slack){
        this.slack = slack ;
        this.modify("slack",slack);
    }

    /**
     * 设置 [WEIXIN]
     */
    public void setWeixin(String  weixin){
        this.weixin = weixin ;
        this.modify("weixin",weixin);
    }

    /**
     * 设置 [WHATSAPP]
     */
    public void setWhatsapp(String  whatsapp){
        this.whatsapp = whatsapp ;
        this.modify("whatsapp",whatsapp);
    }

    /**
     * 设置 [QQ]
     */
    public void setQq(String  qq){
        this.qq = qq ;
        this.modify("qq",qq);
    }

    /**
     * 设置 [GENDER]
     */
    public void setGender(String  gender){
        this.gender = gender ;
        this.modify("gender",gender);
    }

    /**
     * 设置 [CLIENTLANG]
     */
    public void setClientlang(String  clientlang){
        this.clientlang = clientlang ;
        this.modify("clientlang",clientlang);
    }

    /**
     * 设置 [BIRTHDAY]
     */
    public void setBirthday(Timestamp  birthday){
        this.birthday = birthday ;
        this.modify("birthday",birthday);
    }

    /**
     * 设置 [IP]
     */
    public void setIp(String  ip){
        this.ip = ip ;
        this.modify("ip",ip);
    }

    /**
     * 设置 [EMAIL]
     */
    public void setEmail(String  email){
        this.email = email ;
        this.modify("email",email);
    }

    /**
     * 设置 [DINGDING]
     */
    public void setDingding(String  dingding){
        this.dingding = dingding ;
        this.modify("dingding",dingding);
    }

    /**
     * 设置 [AVATAR]
     */
    public void setAvatar(String  avatar){
        this.avatar = avatar ;
        this.modify("avatar",avatar);
    }


}


