package cn.ibizlab.pms.core.util.zentao.bean;

import com.alibaba.fastjson.JSONObject;
import lombok.Data;

import java.math.BigInteger;
import java.util.List;

@Data
public class ZTResult {
    /**
     * 结果
     */
    private boolean isSuccess;
    /**
     * 对象标识
     */
    private Long etId;
    /**
     * 批处理对象标识
     */
    private List<Long> etIds;
    /**
     * 消息
     */
    private String message;
    /**
     * 结果数据
     */
    private JSONObject result;
}
