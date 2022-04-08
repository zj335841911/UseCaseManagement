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
 * 服务DTO对象[IBIZPRO_INDEXDTO]
 */
@Data
public class IBIZPRO_INDEXDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [INDEX_TYPE]
     *
     */
    @JSONField(name = "indextype")
    @JsonProperty("indextype")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String indextype;

    /**
     * 属性 [INDEXID]
     *
     */
    @JSONField(name = "indexid")
    @JsonProperty("indexid")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long indexid;

    /**
     * 属性 [INDEXNAME]
     *
     */
    @JSONField(name = "indexname")
    @JsonProperty("indexname")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String indexname;

    /**
     * 属性 [DELETED]
     *
     */
    @JSONField(name = "deleted")
    @JsonProperty("deleted")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String deleted;

    /**
     * 属性 [ORGID]
     *
     */
    @JSONField(name = "orgid")
    @JsonProperty("orgid")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String orgid;

    /**
     * 属性 [MDEPTID]
     *
     */
    @JSONField(name = "mdeptid")
    @JsonProperty("mdeptid")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String mdeptid;

    /**
     * 属性 [INDEXDESC]
     *
     */
    @JSONField(name = "indexdesc")
    @JsonProperty("indexdesc")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String indexdesc;



}


