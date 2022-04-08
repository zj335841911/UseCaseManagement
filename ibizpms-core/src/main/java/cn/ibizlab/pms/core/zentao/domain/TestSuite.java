package cn.ibizlab.pms.core.zentao.domain;

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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

/**
 * 实体[测试套件]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_testsuite", resultMap = "TestSuiteResultMap")
@ApiModel("测试套件")
public class TestSuite extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 名称
     */
    @TableField(value = "`name`")
    @JSONField(name = "name")
    @JsonProperty("name")
    @ApiModelProperty("名称")
    private String name;
    /**
     * 创建时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "`addeddate`", fill = FieldFill.INSERT)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "addeddate", format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("addeddate")
    @ApiModelProperty("创建时间")
    private Timestamp addeddate;
    /**
     * 编号
     */
    @DEField(isKeyField = true)
    @TableId(value = "id", type = IdType.AUTO)
    @JSONField(name = "id")
    @JsonProperty("id")
    @ApiModelProperty("编号")
    private Long id;
    /**
     * 已删除
     */
    @DEField(defaultValue = "0", preType = DEPredefinedFieldType.LOGICVALID, logicval = "0", logicdelval = "1")
    @TableLogic(value = "0", delval = "1")
    @TableField(value = "`deleted`")
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @ApiModelProperty("已删除")
    private String deleted;
    /**
     * 最后编辑人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMANNAME)
    @TableField(value = "`lasteditedby`")
    @JSONField(name = "lasteditedby")
    @JsonProperty("lasteditedby")
    @ApiModelProperty("最后编辑人")
    private String lasteditedby;
    /**
     * 类型
     */
    @DEField(defaultValue = "#EMPTY")
    @TableField(value = "`type`")
    @JSONField(name = "type")
    @JsonProperty("type")
    @ApiModelProperty("类型")
    private String type;
    /**
     * 最后编辑时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @TableField(value = "`lastediteddate`")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "lastediteddate", format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("lastediteddate")
    @ApiModelProperty("最后编辑时间")
    private Timestamp lastediteddate;
    /**
     * 由谁创建
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMANNAME)
    @TableField(value = "`addedby`")
    @JSONField(name = "addedby")
    @JsonProperty("addedby")
    @ApiModelProperty("由谁创建")
    private String addedby;
    /**
     * 用例数
     */
    @TableField(exist = false)
    @JSONField(name = "casecnt")
    @JsonProperty("casecnt")
    @ApiModelProperty("用例数")
    private Integer casecnt;
    /**
     * 描述
     */
    @DEField(defaultValue = "#EMPTY")
    @TableField(value = "`desc`")
    @JSONField(name = "desc")
    @JsonProperty("desc")
    @ApiModelProperty("描述")
    private String desc;
    /**
     * 所属产品
     */
    @DEField(defaultValue = "0")
    @TableField(value = "`product`")
    @JSONField(name = "product")
    @JsonProperty("product")
    @ApiModelProperty("所属产品")
    private Long product;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product ztproduct;



    /**
     * 设置 [名称]
     */
    public void setName(String name) {
        this.name = name;
        this.modify("name", name);
    }

    /**
     * 设置 [类型]
     */
    public void setType(String type) {
        this.type = type;
        this.modify("type", type);
    }

    /**
     * 设置 [描述]
     */
    public void setDesc(String desc) {
        this.desc = desc;
        this.modify("desc", desc);
    }

    /**
     * 设置 [所属产品]
     */
    public void setProduct(Long product) {
        this.product = product;
        this.modify("product", product);
    }


    @Override
    public Serializable getDefaultKey(boolean gen) {
        return IdWorker.getId();
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
        this.reset("id");
        return super.copyTo(targetEntity, bIncEmpty);
    }
}


