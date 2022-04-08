package cn.ibizlab.pms.core.util.zentao.bean;

import lombok.Data;

import java.io.Serializable;

@Data
public class ZTCheckItem implements Serializable {
    private String item;
    /**
     * 判断方式，0：包含，1：正则，默认为0（目前只支持2种形式）
     */
    private Integer checkType = 0;
    /**
     * 是否取反
     */
    private boolean isNegative = false;

    /**
     * 异常信息
     */
    private String errorMessage;

    public boolean check(String target) {
        if (item == null || item.isEmpty()) {
            return true;
        }
        if (target == null || target.isEmpty()) {
            return false;
        }
        boolean rst;
        switch (checkType){
            case 1:
                rst = checkRegex(target);
                break;
            default:
                rst = checkContains(target);
                break;
        }
        return isNegative ? !rst : rst;
    }

    private boolean checkContains(String target) {
        return target.contains(item);
    }

    private boolean checkRegex(String target) {
        return target.matches(item);
    }
}
