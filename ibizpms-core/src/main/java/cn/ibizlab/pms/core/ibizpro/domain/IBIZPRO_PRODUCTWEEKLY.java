package cn.ibizlab.pms.core.ibizpro.domain;

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


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.pms.util.domain.EntityMP;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

/**
 * 实体[产品周报]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_IBIZPRO_PRODUCTWEEKLY", resultMap = "IBIZPRO_PRODUCTWEEKLYResultMap")
public class IBIZPRO_PRODUCTWEEKLY extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 总工时
     */
    @TableField(value = "`totalestimates`")
    @JSONField(name = "totalestimates")
    @JsonProperty("totalestimates")
    private Double totalestimates;
    /**
     * 任务
     */
    @TableField(value = "`tasks`")
    @JSONField(name = "tasks")
    @JsonProperty("tasks")
    private String tasks;
    /**
     * 产品负责人
     */
    @TableField(value = "`po`")
    @JSONField(name = "po")
    @JsonProperty("po")
    private String po;
    /**
     * 日期
     */
    @TableField(value = "`date`")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "date", format = "yyyy-MM-dd")
    @JsonProperty("date")
    private Timestamp date;
    /**
     * 更新时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @TableField(value = "`updatedate`")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "updatedate", format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;
    /**
     * 更新人
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEMAN)
    @TableField(value = "`updateman`")
    @JSONField(name = "updateman")
    @JsonProperty("updateman")
    private String updateman;
    /**
     * 建立人
     */
    @DEField(preType = DEPredefinedFieldType.CREATEMAN)
    @TableField(value = "`createman`", fill = FieldFill.INSERT)
    @JSONField(name = "createman")
    @JsonProperty("createman")
    private String createman;
    /**
     * 建立时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @TableField(value = "`createdate`", fill = FieldFill.INSERT)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "createdate", format = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;
    /**
     * 产品周报名称
     */
    @DEField(name = "ibizpro_productdailyname")
    @TableField(value = "`ibizpro_productdailyname`")
    @JSONField(name = "ibizproproductweeklyname")
    @JsonProperty("ibizproproductweeklyname")
    private String ibizproproductweeklyname;
    /**
     * 产品周报标识
     */
    @DEField(name = "ibizpro_productweeklyid", isKeyField = true)
    @TableId(value = "ibizpro_productweeklyid", type = IdType.AUTO)
    @JSONField(name = "ibizpro_productweeklyid")
    @JsonProperty("ibizpro_productweeklyid")
    private Long ibizproProductweeklyid;
    /**
     * 编号
     */
    @TableField(value = "`product`")
    @JSONField(name = "product")
    @JsonProperty("product")
    private Long product;
    /**
     * 产品名称
     */
    @TableField(exist = false)
    @JSONField(name = "productname")
    @JsonProperty("productname")
    private String productname;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.pms.core.zentao.domain.Product productweekly;



    /**
     * 设置 [总工时]
     */
    public void setTotalestimates(Double totalestimates) {
        this.totalestimates = totalestimates;
        this.modify("totalestimates", totalestimates);
    }

    /**
     * 设置 [任务]
     */
    public void setTasks(String tasks) {
        this.tasks = tasks;
        this.modify("tasks", tasks);
    }

    /**
     * 设置 [产品负责人]
     */
    public void setPo(String po) {
        this.po = po;
        this.modify("po", po);
    }

    /**
     * 设置 [日期]
     */
    public void setDate(Timestamp date) {
        this.date = date;
        this.modify("date", date);
    }

    /**
     * 格式化日期 [日期]
     */
    public String formatDate() {
        if (this.date == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }
    /**
     * 设置 [产品周报名称]
     */
    public void setIbizproproductweeklyname(String ibizproproductweeklyname) {
        this.ibizproproductweeklyname = ibizproproductweeklyname;
        this.modify("ibizpro_productdailyname", ibizproproductweeklyname);
    }

    /**
     * 设置 [编号]
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
        this.reset("ibizpro_productweeklyid");
        return super.copyTo(targetEntity, bIncEmpty);
    }
}


