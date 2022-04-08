package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.ou.domain.SysDepartment;
import cn.ibizlab.pms.core.ou.domain.SysEmployee;
import cn.ibizlab.pms.core.ou.domain.SysOrganization;
import cn.ibizlab.pms.core.ou.filter.SysDepartmentSearchContext;
import cn.ibizlab.pms.core.ou.filter.SysEmployeeSearchContext;
import cn.ibizlab.pms.core.ou.filter.SysOrganizationSearchContext;
import cn.ibizlab.pms.core.ou.service.ISysDepartmentService;
import cn.ibizlab.pms.core.ou.service.ISysEmployeeService;
import cn.ibizlab.pms.core.ou.service.ISysOrganizationService;
import cn.ibizlab.pms.core.uaa.service.ISysUserService;
import cn.ibizlab.pms.core.util.zentao.job.OUSyncJob;
import cn.ibizlab.pms.core.zentao.domain.Company;
import cn.ibizlab.pms.core.zentao.domain.Dept;
import cn.ibizlab.pms.core.zentao.service.ICompanyService;
import cn.ibizlab.pms.core.zentao.service.IDeptService;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.core.zentao.service.impl.UserServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;

import java.util.*;

/**
 * 实体[用户] 自定义服务对象
 */
@Slf4j
@Primary
@Service("UserExService")
public class UserExService extends UserServiceImpl {

    @Autowired
    ISysEmployeeService iSysEmployeeService;

    @Autowired
    IUserService iUserService;

    @Autowired
    ISysOrganizationService iSysOrganizationService;

    @Autowired
    ICompanyService iCompanyService;

    @Autowired
    ISysDepartmentService iSysDepartmentService;

    @Autowired
    IDeptService iDeptService;

    @Autowired
    ISysUserService iSysUserService;

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }


    /**
     * 自定义行为[SyncAccount]用户扩展
     * 同步PMS账户到OU系统
     *
     * @param et
     * @return
     */
    @Override
    @Transactional
    public User syncAccount(User et) {
        // 查询 ou 单位 部门 人员 公司 部门 用户
        //ou查找已有公司
        SysOrganizationSearchContext sysOrganizationSearchContext = new SysOrganizationSearchContext();
        sysOrganizationSearchContext.setSize(1000000);
        Page<SysOrganization> sysOrganizations = iSysOrganizationService.searchDefault(sysOrganizationSearchContext);
        List<SysOrganization> sysOrganizationList = sysOrganizations.getContent();
        String orgid = "";
        String orgIds = "";
        for (SysOrganization sysOrganization : sysOrganizationList) {
            if (orgIds.length() > 0) {
                orgIds += ",";
            }
            orgIds += sysOrganization.getOrgid();
            orgid = sysOrganization.getOrgid();

        }
        //禅道查找ou里不存在的公司
        List<Company> companyList = iCompanyService.list(new QueryWrapper<Company>().last(" and FIND_IN_SET(id,'" + orgIds + "')=0"));
        if (companyList.size() > 0) {
            for (Company company : companyList) {
                orgid = String.valueOf(company.getId());
                SysOrganization sysOrganization = new SysOrganization();
                sysOrganization.setOrgid(String.valueOf(company.getId()));
                sysOrganization.setOrgcode(String.valueOf(company.getId()));
                sysOrganization.setOrgname(company.getName());
                sysOrganization.setShortname(company.getName());
                sysOrganization.setEnable(1);
                try {
                    iSysOrganizationService.save(sysOrganization);
                } catch (RuntimeException e) {
                    log.error(e.getMessage());
                }
            }
        }

        //ou查找已有单位
        SysDepartmentSearchContext sysDepartmentSearchContext = new SysDepartmentSearchContext();
        sysDepartmentSearchContext.setSize(1000000);
        Page<SysDepartment> sysDepartments = iSysDepartmentService.searchDefault(sysDepartmentSearchContext);
        List<SysDepartment> sysDepartmentList = sysDepartments.getContent();
        String deptIds = "";
        for (SysDepartment sysDepartment : sysDepartmentList) {
            if (deptIds.length() > 0) {
                deptIds += ",";
            }
            deptIds += sysDepartment.getDeptid();
        }
        //禅道查找ou不存在的单位
        List<Dept> deptList = iDeptService.list(new QueryWrapper<Dept>().last(" where FIND_IN_SET(id,'" + deptIds + "')=0 order by grade asc"));
        if (deptList.size() > 0) {
            for (Dept dept : deptList) {
                SysDepartment sysDepartment = new SysDepartment();
                sysDepartment.setDeptid(String.valueOf(dept.getId()));
                sysDepartment.setDeptcode(String.valueOf(dept.getId()));
                sysDepartment.setOrgid(orgid);
                sysDepartment.setDeptname(dept.getName());
                sysDepartment.setParentdeptid(String.valueOf(dept.getParent()));
                sysDepartment.setParentdeptname(dept.getParentname());
                sysDepartment.setEnable(1);
                sysDepartment.setShortname(dept.getName());
                sysDepartment.setDeptlevel(dept.getGrade());
                try {
                    iSysDepartmentService.save(sysDepartment);
                } catch (RuntimeException e) {
                    log.error(e.getMessage());
                }
            }
        }

        //ou查找已有成员
        SysEmployeeSearchContext sysEmployeeSearchContext = new SysEmployeeSearchContext();
        sysEmployeeSearchContext.setSize(1000000);
        Page<SysEmployee> sysEmployees = iSysEmployeeService.searchDefault(sysEmployeeSearchContext);
        List<SysEmployee> sysEmployeeList = sysEmployees.getContent();
        String ids = "";
        for (SysEmployee sysEmployee : sysEmployeeList) {
            if (ids.length() > 0) {
                ids += ",";
            }
            ids += sysEmployee.getUserid();

        }
        //禅道查找ou不存在的用户
        List<User> userList = iUserService.list(new QueryWrapper<User>().last(" and FIND_IN_SET(id,'" + ids + "')=0"));
        if (userList.size() > 0) {
            for (User user : userList) {
                SysEmployee sysEmployee = new SysEmployee();
                sysEmployee.setUserid(String.valueOf(user.getId()));
                sysEmployee.setUsercode(String.valueOf(user.getId()));
                sysEmployee.setUsername(user.getAccount());
                sysEmployee.setPersonname(user.getRealname());
                sysEmployee.setAddr(user.getAddress());
                sysEmployee.setNickname(user.getNickname());
                sysEmployee.setPhone(user.getPhone());
                sysEmployee.setSex(user.getGender());
                sysEmployee.setEmail(user.getEmail());
                sysEmployee.setIpaddr(user.getIp());
                sysEmployee.setAvatar(user.getAvatar());
                sysEmployee.setOrgid(orgid);
                sysEmployee.setMdeptid(String.valueOf(user.getDept()));
                sysEmployee.setOrgcode(orgid);
                sysEmployee.setMdeptcode(String.valueOf(user.getDept()));
                sysEmployee.setLoginname(user.getAccount());
                sysEmployee.setPassword(user.getPassword());
                sysEmployee.setEnable(1);
                try {
                    iSysEmployeeService.save(sysEmployee);
                } catch (RuntimeException e) {
                    log.error(e.getMessage());
                }
            }
        }
        return et;
    }
}

