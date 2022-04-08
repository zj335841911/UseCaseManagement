package cn.ibizlab.pms.core.search.sync.aop;

import cn.ibizlab.pms.core.es.service.IIbizproIndexESService;
import cn.ibizlab.pms.core.es.domain.IbizproIndex;
import cn.ibizlab.pms.core.search.mapping.IbizproIndexMapping;
import cn.ibizlab.pms.core.zentao.domain.Bug;
import cn.ibizlab.pms.core.zentao.domain.Bug;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Slf4j
@Aspect
@Component
@ConditionalOnBean(IIbizproIndexESService.class)
public class BugAspect {
    @Autowired
    IIbizproIndexESService ibizproindexESService;

    @AfterReturning(value = "execution(* cn.ibizlab.pms.core.zentao.service.IBugService.create(..)) ")
    @Async
    public void create(JoinPoint point) {
        Object po = point.getArgs()[0];
        if (po instanceof Bug) {
            Bug Bug = (Bug) po;
            ibizproindexESService.createES(IbizproIndexMapping.bug2IbizproIndex(Bug));
        }
    }
    @AfterReturning(value = "execution(* cn.ibizlab.pms.core.zentao.service.IBugService.update(..)) ")
    @Async
    public void update(JoinPoint point) {
        Object po = point.getArgs()[0];
        if (po instanceof Bug) {
            Bug Bug = (Bug) po;
            ibizproindexESService.updateES(IbizproIndexMapping.bug2IbizproIndex(Bug));
        }
    }
    @AfterReturning(value = "execution(* cn.ibizlab.pms.core.zentao.service.IBugService.remove(..)) ")
    @Async
    public void remove(JoinPoint point) {
        Object id = point.getArgs()[0];
        String docid = "bug:" + id;
        IbizproIndex indexDE = new IbizproIndex();
        indexDE.setDocid(docid);
        indexDE.setDeleted("1");
        //ES逻辑删除
        ibizproindexESService.updateES(indexDE);

    }
}
