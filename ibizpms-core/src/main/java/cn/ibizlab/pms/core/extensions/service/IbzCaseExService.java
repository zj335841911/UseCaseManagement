package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibiz.domain.IbzCase;
import cn.ibizlab.pms.core.ibiz.filter.IbzLibCaseStepsSearchContext;
import cn.ibizlab.pms.core.ibiz.service.impl.IbzCaseServiceImpl;
import cn.ibizlab.pms.core.zentao.domain.Case;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;

@Slf4j
@Primary
@Service("IbzCaseExService")
public class IbzCaseExService extends IbzCaseServiceImpl {

    /**
     * 行为[Get]用户扩展
     * @param key
     * @return
     */
    @Override
    @Transactional
    public IbzCase get(Long key) {
        IbzCase et = getById(key);
        if(et==null){
            et=new IbzCase();
            et.setId(key);
        }
        else{
            IbzLibCaseStepsSearchContext context = new IbzLibCaseStepsSearchContext();
            context.setN_case_eq(key);
            context.setN_version_eq(et.getVersion());
            et.setIbzlibcasesteps(ibzlibcasestepsService.searchDefault(context).getContent());
        }
        return et;
    }
}
