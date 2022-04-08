package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ibizpro.domain.IbzPlanTempletDetail;
import cn.ibizlab.pms.core.ibizpro.filter.IbzPlanTempletDetailSearchContext;
import cn.ibizlab.pms.core.ibizpro.service.impl.IbzPlanTempletServiceImpl;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.ibizpro.domain.IbzPlanTemplet;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[计划模板] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IbzPlanTempletExService")
public class IbzPlanTempletExService extends IbzPlanTempletServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * [GetPlan:获取计划] 行为扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IbzPlanTemplet getPlan(IbzPlanTemplet et) {
        return super.getPlan(et);
    }

    @Override
    @Transactional
    public boolean create(IbzPlanTemplet et) {
        if (!this.retBool(this.baseMapper.insert(et))) {
            return false;
        }
        ibzplantempletdetailService.saveByPlantempletid(et.getIbzplantempletid(), getIbzPlanTempletDetailByOrder(et.getIbzplantempletdetail()));
        CachedBeanCopier.copy(get(et.getIbzplantempletid()), et);
        return true;
    }

    @Override
    @Transactional
    public boolean update(IbzPlanTemplet et) {
        if (!update(et, (Wrapper) et.getUpdateWrapper(true).eq("ibz_plantempletid", et.getIbzplantempletid()))) {
            return false;
        }
        ibzplantempletdetailService.removeByPlantempletid(et.getIbzplantempletid());

        ibzplantempletdetailService.saveByPlantempletid(et.getIbzplantempletid(), getIbzPlanTempletDetailByOrder(et.getIbzplantempletdetail()));
        CachedBeanCopier.copy(get(et.getIbzplantempletid()), et);
        return true;
    }

    public List<IbzPlanTempletDetail> getIbzPlanTempletDetailByOrder(List<IbzPlanTempletDetail> ibzPlanTempletDetailList) {
        List<IbzPlanTempletDetail> ibzPlanTempletDetails = new ArrayList<>();
        int i = 0;
        int j = 1;
        for (IbzPlanTempletDetail ibzPlanTempletDetail : ibzPlanTempletDetailList) {
            ibzPlanTempletDetail.setIbzplantempletdetailid(null);
            if(StaticDict.PlantempletType.GROUP.getValue().equals(ibzPlanTempletDetail.getType())) {
                i  ++;
                j = 1;
                ibzPlanTempletDetail.setOrder(i);
                ibzPlanTempletDetail.setPlancode(String.valueOf(i));
            }else if(StaticDict.PlantempletType.ITEM.getValue().equals(ibzPlanTempletDetail.getType())) {
                ibzPlanTempletDetail.setOrder(i);
                String strCode = i + "." + j;
                ibzPlanTempletDetail.setPlancode(strCode);
                j ++;
            }else {
                i ++;
                j = 1;
                ibzPlanTempletDetail.setType(StaticDict.PlantempletType.STEP.getValue());
                ibzPlanTempletDetail.setOrder(i);
                ibzPlanTempletDetail.setPlancode(String.valueOf(i));

            }

            ibzPlanTempletDetails.add(ibzPlanTempletDetail);

        }
        return ibzPlanTempletDetails;
    }

    @Override
    @Transactional
    public IbzPlanTemplet get(String key) {
        IbzPlanTemplet et = getById(key);
        if (et == null) {
            et = new IbzPlanTemplet();
            et.setIbzplantempletid(key);
        }
        else {

            et.setIbzplantempletdetail(ibzplantempletdetailService.list(new QueryWrapper<IbzPlanTempletDetail>().eq("plantempletid", key).orderByAsc("`order`").orderByAsc("PLANCODE")));
        }
        return et;
    }
}

