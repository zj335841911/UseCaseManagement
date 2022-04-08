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
 * 服务DTO对象[HistoryDTO]
 */
@Data
@ApiModel("操作历史")
public class HistoryDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [DIFF]
     *
     */
    @JSONField(name = "diff")
    @JsonProperty("diff")
    @Size(min = 0, max = 16777215, message = "内容长度必须小于等于[16777215]")
    @ApiModelProperty("不同")
    private String diff;

    /**
     * 属性 [FIELD]
     *
     */
    @JSONField(name = "field")
    @JsonProperty("field")
    @Size(min = 0, max = 30, message = "内容长度必须小于等于[30]")
    @ApiModelProperty("字段")
    private String field;

    /**
     * 属性 [NEW]
     *
     */
    @JSONField(name = "ibiznew")
    @JsonProperty("ibiznew")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    @ApiModelProperty("新值")
    private String ibiznew;

    /**
     * 属性 [OLD]
     *
     */
    @JSONField(name = "old")
    @JsonProperty("old")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    @ApiModelProperty("旧值")
    private String old;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @JsonSerialize(using = ToStringSerializer.class)
    @ApiModelProperty("id")
    private Long id;

    /**
     * 属性 [ACTION]
     *
     */
    @JSONField(name = "action")
    @JsonProperty("action")
    @JsonSerialize(using = ToStringSerializer.class)
    @ApiModelProperty("关联日志")
    private Long action;


    /**
     * 设置 [DIFF]
     */
    public void setDiff(String  diff){
        this.diff = diff ;
        this.modify("diff",diff);
    }

    /**
     * 设置 [FIELD]
     */
    public void setField(String  field){
        this.field = field ;
        this.modify("field",field);
    }

    /**
     * 设置 [NEW]
     */
    public void setIbiznew(String  ibiznew){
        this.ibiznew = ibiznew ;
        this.modify("new",ibiznew);
    }

    /**
     * 设置 [OLD]
     */
    public void setOld(String  old){
        this.old = old ;
        this.modify("old",old);
    }

    /**
     * 设置 [ACTION]
     */
    public void setAction(Long  action){
        this.action = action ;
        this.modify("action",action);
    }


}


