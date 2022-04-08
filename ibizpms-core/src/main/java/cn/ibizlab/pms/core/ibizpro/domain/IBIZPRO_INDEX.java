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
 * 实体[索引检索]
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = "handler")
@TableName(value = "", resultMap = "IBIZPRO_INDEXResultMap")
public class IBIZPRO_INDEX extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 类型
     */
    @TableField(exist = false)
    @JSONField(name = "indextype")
    @JsonProperty("indextype")
    private String indextype;
    /**
     * 主键
     */
    @DEField(isKeyField = true)
    @TableField(exist = false)
    @JSONField(name = "indexid")
    @JsonProperty("indexid")
    private Long indexid;
    /**
     * 支持搜索[需求、Bug、任务、项目、产品、文档、用例]
     */
    @TableField(exist = false)
    @JSONField(name = "indexname")
    @JsonProperty("indexname")
    private String indexname;
    /**
     * 逻辑标识
     */
    @TableField(exist = false)
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    private String deleted;
    /**
     * 组织标识
     */
    @TableField(exist = false)
    @JSONField(name = "orgid")
    @JsonProperty("orgid")
    private String orgid;
    /**
     * 部门标识
     */
    @TableField(exist = false)
    @JSONField(name = "mdeptid")
    @JsonProperty("mdeptid")
    private String mdeptid;
    /**
     * 描述
     */
    @TableField(exist = false)
    @JSONField(name = "indexdesc")
    @JsonProperty("indexdesc")
    private String indexdesc;




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
        this.reset("indexid");
        return super.copyTo(targetEntity, bIncEmpty);
    }
}


