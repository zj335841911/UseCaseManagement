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
 * 服务DTO对象[StorySpecDTO]
 */
@Data
@ApiModel("需求描述")
public class StorySpecDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [SPEC]
     *
     */
    @JSONField(name = "spec")
    @JsonProperty("spec")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    @ApiModelProperty("需求描述	")
    private String spec;

    /**
     * 属性 [VERIFY]
     *
     */
    @JSONField(name = "verify")
    @JsonProperty("verify")
    @Size(min = 0, max = 65535, message = "内容长度必须小于等于[65535]")
    @ApiModelProperty("验收标准")
    private String verify;

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
     * 属性 [TITLE]
     *
     */
    @JSONField(name = "title")
    @JsonProperty("title")
    @NotBlank(message = "[需求名称]不允许为空!")
    @Size(min = 0, max = 255, message = "内容长度必须小于等于[255]")
    @ApiModelProperty("需求名称")
    private String title;

    /**
     * 属性 [VERSION]
     *
     */
    @JSONField(name = "version")
    @JsonProperty("version")
    @ApiModelProperty("版本号")
    private Integer version;

    /**
     * 属性 [STORY]
     *
     */
    @JSONField(name = "story")
    @JsonProperty("story")
    @JsonSerialize(using = ToStringSerializer.class)
    @ApiModelProperty("需求")
    private Long story;


    /**
     * 设置 [SPEC]
     */
    public void setSpec(String  spec){
        this.spec = spec ;
        this.modify("spec",spec);
    }

    /**
     * 设置 [VERIFY]
     */
    public void setVerify(String  verify){
        this.verify = verify ;
        this.modify("verify",verify);
    }

    /**
     * 设置 [TITLE]
     */
    public void setTitle(String  title){
        this.title = title ;
        this.modify("title",title);
    }

    /**
     * 设置 [VERSION]
     */
    public void setVersion(Integer  version){
        this.version = version ;
        this.modify("version",version);
    }

    /**
     * 设置 [STORY]
     */
    public void setStory(Long  story){
        this.story = story ;
        this.modify("story",story);
    }


}


