package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.domain.TestResult;
import cn.ibizlab.pms.core.zentao.filter.TestResultSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.TestResultServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.math.BigInteger;

/**
 * 实体[群组] 自定义服务对象
 */
@Slf4j
@Primary
@Service("TestResultExService")
public class TestResultExService extends TestResultServiceImpl {

    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<TestResult> searchDefault(TestResultSearchContext context) {
        Long c = context.getN_case_eq();
        context.getSelectCond().clear();
        context.getSelectCond().eq("`case`", c);
        context.setSort("t1.`id`,desc");
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestResult> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestResult>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 查询集合 CurTestRun
     */
    @Override
    public Page<TestResult> searchCurTestRun(TestResultSearchContext context) {
        Long c = context.getN_case_eq();
        context.getSelectCond().clear();
        context.getSelectCond().eq("`case`", c);
        context.setSort("t1.`id`,desc");
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<TestResult> pages=baseMapper.searchCurTestRun(context.getPages(),context,context.getSelectCond());
        return new PageImpl<TestResult>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
}
