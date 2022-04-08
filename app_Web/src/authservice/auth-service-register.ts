/**
 * 实体权限服务注册中心
 *
 * @export
 * @class AuthServiceRegister
 */
export class AuthServiceRegister {

    /**
     * 所有实体权限服务Map
     *
     * @protected
     * @type {*}
     * @memberof AuthServiceRegister
     */
    protected allAuthService: Map<string, () => Promise<any>> = new Map();

    /**
     * 已加载实体权限服务Map缓存
     *
     * @protected
     * @type {Map<string, any>}
     * @memberof AuthServiceRegister
     */
    protected serviceCache: Map<string, any> = new Map();

    /**
     * Creates an instance of AuthServiceRegister.
     * @memberof AuthServiceRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof AuthServiceRegister
     */
    protected init(): void {
                this.allAuthService.set('productplan', () => import('@/authservice/product-plan/product-plan-auth-service'));
        this.allAuthService.set('ibzreportroleconfig', () => import('@/authservice/ibz-report-role-config/ibz-report-role-config-auth-service'));
        this.allAuthService.set('case', () => import('@/authservice/case/case-auth-service'));
        this.allAuthService.set('sysuser', () => import('@/authservice/sys-user/sys-user-auth-service'));
        this.allAuthService.set('product', () => import('@/authservice/product/product-auth-service'));
        this.allAuthService.set('ibzcasestep', () => import('@/authservice/ibzcase-step/ibzcase-step-auth-service'));
        this.allAuthService.set('taskteam', () => import('@/authservice/task-team/task-team-auth-service'));
        this.allAuthService.set('file', () => import('@/authservice/file/file-auth-service'));
        this.allAuthService.set('ibzagent', () => import('@/authservice/ibz-agent/ibz-agent-auth-service'));
        this.allAuthService.set('ibzprostorymodule', () => import('@/authservice/ibzpro-story-module/ibzpro-story-module-auth-service'));
        this.allAuthService.set('productsum', () => import('@/authservice/product-sum/product-sum-auth-service'));
        this.allAuthService.set('ibzlibcasesteps', () => import('@/authservice/ibz-lib-casesteps/ibz-lib-casesteps-auth-service'));
        this.allAuthService.set('ibzlib', () => import('@/authservice/ibz-lib/ibz-lib-auth-service'));
        this.allAuthService.set('ibzdaily', () => import('@/authservice/ibz-daily/ibz-daily-auth-service'));
        this.allAuthService.set('suitecase', () => import('@/authservice/suite-case/suite-case-auth-service'));
        this.allAuthService.set('burn', () => import('@/authservice/burn/burn-auth-service'));
        this.allAuthService.set('employeeload', () => import('@/authservice/emp-loyeeload/emp-loyeeload-auth-service'));
        this.allAuthService.set('doccontent', () => import('@/authservice/doc-content/doc-content-auth-service'));
        this.allAuthService.set('ibzreport', () => import('@/authservice/ibz-report/ibz-report-auth-service'));
        this.allAuthService.set('ibztaskestimate', () => import('@/authservice/ibztask-estimate/ibztask-estimate-auth-service'));
        this.allAuthService.set('syspost', () => import('@/authservice/sys-post/sys-post-auth-service'));
        this.allAuthService.set('usertpl', () => import('@/authservice/user-tpl/user-tpl-auth-service'));
        this.allAuthService.set('taskstats', () => import('@/authservice/task-stats/task-stats-auth-service'));
        this.allAuthService.set('ibizproprojectweekly', () => import('@/authservice/ibizpro-project-weekly/ibizpro-project-weekly-auth-service'));
        this.allAuthService.set('ibzfavorites', () => import('@/authservice/ibz-favorites/ibz-favorites-auth-service'));
        this.allAuthService.set('sysdepartment', () => import('@/authservice/sys-department/sys-department-auth-service'));
        this.allAuthService.set('productstats', () => import('@/authservice/product-stats/product-stats-auth-service'));
        this.allAuthService.set('ibzprojectmember', () => import('@/authservice/ibz-project-member/ibz-project-member-auth-service'));
        this.allAuthService.set('bugstats', () => import('@/authservice/bug-stats/bug-stats-auth-service'));
        this.allAuthService.set('ibizproindex', () => import('@/authservice/ibizpro-index/ibizpro-index-auth-service'));
        this.allAuthService.set('group', () => import('@/authservice/group/group-auth-service'));
        this.allAuthService.set('ibzproproduct', () => import('@/authservice/ibzpro-product/ibzpro-product-auth-service'));
        this.allAuthService.set('casestep', () => import('@/authservice/case-step/case-step-auth-service'));
        this.allAuthService.set('dept', () => import('@/authservice/dept/dept-auth-service'));
        this.allAuthService.set('ibizprotag', () => import('@/authservice/ibizpro-tag/ibizpro-tag-auth-service'));
        this.allAuthService.set('company', () => import('@/authservice/company/company-auth-service'));
        this.allAuthService.set('systeam', () => import('@/authservice/sys-team/sys-team-auth-service'));
        this.allAuthService.set('taskestimate', () => import('@/authservice/task-estimate/task-estimate-auth-service'));
        this.allAuthService.set('story', () => import('@/authservice/story/story-auth-service'));
        this.allAuthService.set('taskestimatestats', () => import('@/authservice/taskestimatestats/taskestimatestats-auth-service'));
        this.allAuthService.set('ibzlibcasesteptmp', () => import('@/authservice/ibz-lib-case-step-tmp/ibz-lib-case-step-tmp-auth-service'));
        this.allAuthService.set('todo', () => import('@/authservice/todo/todo-auth-service'));
        this.allAuthService.set('ibzlibmodule', () => import('@/authservice/ibz-lib-module/ibz-lib-module-auth-service'));
        this.allAuthService.set('ibizproproductweekly', () => import('@/authservice/ibizpro-product-weekly/ibizpro-product-weekly-auth-service'));
        this.allAuthService.set('useryearworkstats', () => import('@/authservice/user-year-work-stats/user-year-work-stats-auth-service'));
        this.allAuthService.set('sysorganization', () => import('@/authservice/sys-organization/sys-organization-auth-service'));
        this.allAuthService.set('ibizproplugin', () => import('@/authservice/ibizpro-plugin/ibizpro-plugin-auth-service'));
        this.allAuthService.set('subproductplan', () => import('@/authservice/sub-product-plan/sub-product-plan-auth-service'));
        this.allAuthService.set('project', () => import('@/authservice/project/project-auth-service'));
        this.allAuthService.set('ibzreportly', () => import('@/authservice/ibz-reportly/ibz-reportly-auth-service'));
        this.allAuthService.set('subtask', () => import('@/authservice/sub-task/sub-task-auth-service'));
        this.allAuthService.set('ibizproprojectmonthly', () => import('@/authservice/ibizpro-project-monthly/ibizpro-project-monthly-auth-service'));
        this.allAuthService.set('user', () => import('@/authservice/user/user-auth-service'));
        this.allAuthService.set('doclib', () => import('@/authservice/doc-lib/doc-lib-auth-service'));
        this.allAuthService.set('companystats', () => import('@/authservice/company-stats/company-stats-auth-service'));
        this.allAuthService.set('productmodule', () => import('@/authservice/product-module/product-module-auth-service'));
        this.allAuthService.set('productteam', () => import('@/authservice/productteam/productteam-auth-service'));
        this.allAuthService.set('testmodule', () => import('@/authservice/test-module/test-module-auth-service'));
        this.allAuthService.set('substory', () => import('@/authservice/sub-story/sub-story-auth-service'));
        this.allAuthService.set('ibizproprojectdaily', () => import('@/authservice/ibizpro-project-daily/ibizpro-project-daily-auth-service'));
        this.allAuthService.set('ibzplantemplet', () => import('@/authservice/ibz-plan-templet/ibz-plan-templet-auth-service'));
        this.allAuthService.set('sysuserrole', () => import('@/authservice/sys-user-role/sys-user-role-auth-service'));
        this.allAuthService.set('ibizprokeyword', () => import('@/authservice/ibizpro-keyword/ibizpro-keyword-auth-service'));
        this.allAuthService.set('doclibmodule', () => import('@/authservice/doc-lib-module/doc-lib-module-auth-service'));
        this.allAuthService.set('productlife', () => import('@/authservice/product-life/product-life-auth-service'));
        this.allAuthService.set('usercontact', () => import('@/authservice/user-contact/user-contact-auth-service'));
        this.allAuthService.set('ibizproproductdaily', () => import('@/authservice/ibizpro-product-daily/ibizpro-product-daily-auth-service'));
        this.allAuthService.set('sysrole', () => import('@/authservice/sys-role/sys-role-auth-service'));
        this.allAuthService.set('plantempletdetail', () => import('@/authservice/plan-templet-detail/plan-templet-detail-auth-service'));
        this.allAuthService.set('task', () => import('@/authservice/task/task-auth-service'));
        this.allAuthService.set('build', () => import('@/authservice/build/build-auth-service'));
        this.allAuthService.set('ibizproproductmonthly', () => import('@/authservice/ibizpro-product-monthly/ibizpro-product-monthly-auth-service'));
        this.allAuthService.set('testresult', () => import('@/authservice/test-result/test-result-auth-service'));
        this.allAuthService.set('testsuite', () => import('@/authservice/test-suite/test-suite-auth-service'));
        this.allAuthService.set('ibzplantempletdetail', () => import('@/authservice/ibz-plan-templet-detail/ibz-plan-templet-detail-auth-service'));
        this.allAuthService.set('ibzproconfig', () => import('@/authservice/ibzpro-config/ibzpro-config-auth-service'));
        this.allAuthService.set('ibzprostory', () => import('@/authservice/ibzpro-story/ibzpro-story-auth-service'));
        this.allAuthService.set('ibztaskteam', () => import('@/authservice/ibztask-team/ibztask-team-auth-service'));
        this.allAuthService.set('projectteam', () => import('@/authservice/project-team/project-team-auth-service'));
        this.allAuthService.set('testtask', () => import('@/authservice/test-task/test-task-auth-service'));
        this.allAuthService.set('productline', () => import('@/authservice/product-line/product-line-auth-service'));
        this.allAuthService.set('pssyssfpub', () => import('@/authservice/pssys-sfpub/pssys-sfpub-auth-service'));
        this.allAuthService.set('testreport', () => import('@/authservice/test-report/test-report-auth-service'));
        this.allAuthService.set('projectstats', () => import('@/authservice/project-stats/project-stats-auth-service'));
        this.allAuthService.set('testrun', () => import('@/authservice/test-run/test-run-auth-service'));
        this.allAuthService.set('ibzmonthly', () => import('@/authservice/ibz-monthly/ibz-monthly-auth-service'));
        this.allAuthService.set('ibzmyterritory', () => import('@/authservice/ibz-my-territory/ibz-my-territory-auth-service'));
        this.allAuthService.set('sysupdatelog', () => import('@/authservice/sys-update-log/sys-update-log-auth-service'));
        this.allAuthService.set('doc', () => import('@/authservice/doc/doc-auth-service'));
        this.allAuthService.set('bug', () => import('@/authservice/bug/bug-auth-service'));
        this.allAuthService.set('ibzweekly', () => import('@/authservice/ibzweekly/ibzweekly-auth-service'));
        this.allAuthService.set('projectmodule', () => import('@/authservice/project-module/project-module-auth-service'));
        this.allAuthService.set('ibzdoc', () => import('@/authservice/ibz-doc/ibz-doc-auth-service'));
        this.allAuthService.set('pssysapp', () => import('@/authservice/pssys-app/pssys-app-auth-service'));
        this.allAuthService.set('ibzproprojectusertask', () => import('@/authservice/ibzpro-project-user-task/ibzpro-project-user-task-auth-service'));
        this.allAuthService.set('ibzcase', () => import('@/authservice/ibz-case/ibz-case-auth-service'));
        this.allAuthService.set('systeammember', () => import('@/authservice/sys-team-member/sys-team-member-auth-service'));
        this.allAuthService.set('pssystemdbcfg', () => import('@/authservice/pssystem-dbcfg/pssystem-dbcfg-auth-service'));
        this.allAuthService.set('ibzproproductusertask', () => import('@/authservice/ibzpro-product-user-task/ibzpro-product-user-task-auth-service'));
        this.allAuthService.set('sysupdatefeatures', () => import('@/authservice/sys-update-features/sys-update-features-auth-service'));
        this.allAuthService.set('release', () => import('@/authservice/release/release-auth-service'));
        this.allAuthService.set('casestats', () => import('@/authservice/case-stats/case-stats-auth-service'));
        this.allAuthService.set('dynadashboard', () => import('@/authservice/dyna-dashboard/dyna-dashboard-auth-service'));
        this.allAuthService.set('sysemployee', () => import('@/authservice/sys-employee/sys-employee-auth-service'));
        this.allAuthService.set('projectproduct', () => import('@/authservice/project-product/project-product-auth-service'));
        this.allAuthService.set('accounttaskestimate', () => import('@/authservice/account-taskestimate/account-taskestimate-auth-service'));
        this.allAuthService.set('storyspec', () => import('@/authservice/story-spec/story-spec-auth-service'));
        this.allAuthService.set('branch', () => import('@/authservice/branch/branch-auth-service'));
        this.allAuthService.set('action', () => import('@/authservice/action/action-auth-service'));
        this.allAuthService.set('history', () => import('@/authservice/history/history-auth-service'));
        this.allAuthService.set('module', () => import('@/authservice/module/module-auth-service'));
        this.allAuthService.set('projecttaskestimate', () => import('@/authservice/project-taskestimate/project-taskestimate-auth-service'));
    }

    /**
     * 加载实体权限服务
     *
     * @protected
     * @param {string} serviceName
     * @returns {Promise<any>}
     * @memberof AuthServiceRegister
     */
    protected async loadService(serviceName: string): Promise<any> {
        const service = this.allAuthService.get(serviceName);
        if (service) {
            return service();
        }
    }

    /**
     * 获取应用实体权限服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof AuthServiceRegister
     */
    public async getService(name: string): Promise<any> {
        if (this.serviceCache.has(name)) {
            return this.serviceCache.get(name);
        }
        const authService: any = await this.loadService(name);
        if (authService && authService.default) {
            const instance: any = new authService.default();
            this.serviceCache.set(name, instance);
            return instance;
        }
    }

}
export const authServiceRegister: AuthServiceRegister = new AuthServiceRegister();