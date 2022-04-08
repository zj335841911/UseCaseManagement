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

/**
 * 服务DTO对象[IbiLoginDTO]
 */
@Data
public class IbiLoginDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [REALNAME]
     *
     */
    @JSONField(name = "realname")
    @JsonProperty("realname")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String realname;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    /**
     * 属性 [ACCOUNT]
     *
     */
    @JSONField(name = "account")
    @JsonProperty("account")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    private String account;

    /**
     * 属性 [COMMITER]
     *
     */
    @JSONField(name = "commiter")
    @JsonProperty("commiter")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String commiter;

    /**
     * 属性 [TOKEN]
     *
     */
    @JSONField(name = "token")
    @JsonProperty("token")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String token;


    /**
     * 设置 [REALNAME]
     */
    public void setRealname(String  realname){
        this.realname = realname ;
        this.modify("realname",realname);
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


}


