package cn.ibizlab.pms.core.util.message;

import java.lang.annotation.*;

/**
 * 发送消息
 */
@Documented
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD,ElementType.TYPE})
public @interface SendMessage {

}
