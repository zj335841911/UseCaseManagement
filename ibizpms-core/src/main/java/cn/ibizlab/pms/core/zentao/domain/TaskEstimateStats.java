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
 * 实体[任务工时统计]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "zt_taskestimate", resultMap = "TaskEstimateStatsResultMap")
@ApiModel("任务工时统计")
public class TaskEstimateStats extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 日期
     */
    @TableField(value = "`date`")
    @JSONField(name = "date")
    @JsonProperty("date")
    @ApiModelProperty("日期")
    private String date;
    /**
     * 年
     */
    @TableField(exist = false)
    @JSONField(name = "year")
    @JsonProperty("year")
    @ApiModelProperty("年")
    private String year;
    /**
     * 消耗的工时
     */
    @TableField(exist = false)
    @JSONField(name = "consumed")
    @JsonProperty("consumed")
    @ApiModelProperty("消耗的工时")
    private Double consumed;
    /**
     * 评估状态
     */
    @TableField(value = "`evaluationstatus`")
    @JSONField(name = "evaluationstatus")
    @JsonProperty("evaluationstatus")
    @ApiModelProperty("评估状态")
    private String evaluationstatus;
    /**
     * 用户
     */
    @TableField(value = "`account`")
    @JSONField(name = "account")
    @JsonProperty("account")
    @ApiModelProperty("用户")
    private String account;
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
     * 月（显示）
     */
    @TableField(value = "`monthname`")
    @JSONField(name = "monthname")
    @JsonProperty("monthname")
    @ApiModelProperty("月（显示）")
    private String monthname;
    /**
     * 项目名称
     */
    @TableField(exist = false)
    @JSONField(name = "name")
    @JsonProperty("name")
    @ApiModelProperty("项目名称")
    private String name;
    /**
     * 年（显示）
     */
    @TableField(exist = false)
    @JSONField(name = "yearname")
    @JsonProperty("yearname")
    @ApiModelProperty("年（显示）")
    private String yearname;
    /**
     * 评估工时
     */
    @TableField(value = "`evaluationtime`")
    @JSONField(name = "evaluationtime")
    @JsonProperty("evaluationtime")
    @ApiModelProperty("评估工时")
    private Double evaluationtime;
    /**
     * 评估成本
     */
    @TableField(value = "`evaluationcost`")
    @JSONField(name = "evaluationcost")
    @JsonProperty("evaluationcost")
    @ApiModelProperty("评估成本")
    private Double evaluationcost;
    /**
     * 投入成本
     */
    @TableField(value = "`inputcost`")
    @JSONField(name = "inputcost")
    @JsonProperty("inputcost")
    @ApiModelProperty("投入成本")
    private Double inputcost;
    /**
     * 月
     */
    @TableField(exist = false)
    @JSONField(name = "month")
    @JsonProperty("month")
    @ApiModelProperty("月")
    private String month;
    /**
     * 任务数
     */
    @TableField(exist = false)
    @JSONField(name = "taskcnt")
    @JsonProperty("taskcnt")
    @ApiModelProperty("任务数")
    private Integer taskcnt;



    /**
     * 设置 [日期]
     */
    public void setDate(String date) {
        this.date = date;
        this.modify("date", date);
    }

    /**
     * 设置 [评估状态]
     */
    public void setEvaluationstatus(String evaluationstatus) {
        this.evaluationstatus = evaluationstatus;
        this.modify("evaluationstatus", evaluationstatus);
    }

    /**
     * 设置 [用户]
     */
    public void setAccount(String account) {
        this.account = account;
        this.modify("account", account);
    }

    /**
     * 设置 [月（显示）]
     */
    public void setMonthname(String monthname) {
        this.monthname = monthname;
        this.modify("monthname", monthname);
    }

    /**
     * 设置 [评估工时]
     */
    public void setEvaluationtime(Double evaluationtime) {
        this.evaluationtime = evaluationtime;
        this.modify("evaluationtime", evaluationtime);
    }

    /**
     * 设置 [评估成本]
     */
    public void setEvaluationcost(Double evaluationcost) {
        this.evaluationcost = evaluationcost;
        this.modify("evaluationcost", evaluationcost);
    }

    /**
     * 设置 [投入成本]
     */
    public void setInputcost(Double inputcost) {
        this.inputcost = inputcost;
        this.modify("inputcost", inputcost);
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


