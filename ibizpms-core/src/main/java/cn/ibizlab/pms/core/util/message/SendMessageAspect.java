package cn.ibizlab.pms.core.util.message;

import cn.ibizlab.pms.util.domain.EntityBase;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;


@Slf4j
@Aspect
@Component
@ConditionalOnProperty( name = "ibiz.message.enabled", havingValue = "true")
public class SendMessageAspect {

    @Autowired
    IMsgService iMsgService;


    @Around(value = "@annotation(cn.ibizlab.pms.core.util.message.SendMessage))")
    public Object sendMessage(ProceedingJoinPoint joinPoint) throws Throwable {
        Object returnedValue = null;
        try {
            Object[] args = joinPoint.getArgs();
            String classType = joinPoint.getTarget().getClass().getName();
            Class<?> serviceClass = Class.forName(classType);

            try {
                //前置处理——行为附加逻辑（前置)
                EntityBase et = (EntityBase)args[0];
                et.getExtensionparams().put("action",this.getMethod(joinPoint));
                serviceClass.getMethod("sendMsgPreProcess",args[0].getClass()).invoke(joinPoint.getTarget(), args[0]);
            } catch (Exception e){
                log.error("消息前置处理发生异常，原因为",e);
            }

            returnedValue = joinPoint.proceed();

            try {
                //发送消息——行为附加逻辑（后处理）
                serviceClass.getMethod("sendMessage",args[0].getClass()).invoke(joinPoint.getTarget(),args[0]);
            } catch (Exception e){
                log.error("消息发送失败，原因为",e);
            }

            return returnedValue;
        } catch (Throwable throwable) {
            log.error("message aop errror:",throwable);
            throw throwable;
        }
    }

    private String getMethod(ProceedingJoinPoint joinPoint) {
        Signature s = joinPoint.getSignature();
        joinPoint.getSignature().getDeclaringTypeName();
        MethodSignature ms = (MethodSignature) s;
        Method m = ms.getMethod();
        return m.getName();
    }
}