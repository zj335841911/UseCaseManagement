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
 * 服务DTO对象[SuiteCaseDTO]
 */
@Data
@ApiModel("套件用例")
public class SuiteCaseDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [ID]
     *
     */
    @JSONField(name = "id")
    @JsonProperty("id")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    @ApiModelProperty("虚拟主键")
    private String id;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    @ApiModelProperty("用例版本")
    private Integer version;

    /**
     * 属性 [SUITE]
     *
     */
    @JSONField(name = "suite")
    @JsonProperty("suite")
    @JsonSerialize(using = ToStringSerializer.class)
    @ApiModelProperty("测试套件")
    private Long suite;

    /**
     * 属性 [CASE]
     *
     */
    @JSONField(name = "ibizcase")
    @JsonProperty("ibizcase")
    @JsonSerialize(using = ToStringSerializer.class)
    @ApiModelProperty("用例")
    private Long ibizcase;

    /**
     * 属性 [PRODUCT]
     *
     */
    @JSONField(name = "product")
    @JsonProperty("product")
    @JsonSerialize(using = ToStringSerializer.class)
    @ApiModelProperty("所属产品")
    private Long product;


    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [SUITE]
     */
    public void setSuite(Long  suite){
        this.suite = suite ;
        this.modify("suite",suite);
    }

    /**
     * 设置 [CASE]
     */
    public void setIbizcase(Long  ibizcase){
        this.ibizcase = ibizcase ;
        this.modify("case",ibizcase);
    }

    /**
     * 设置 [PRODUCT]
     */
    public void setProduct(Long  product){
        this.product = product ;
        this.modify("product",product);
    }


}


