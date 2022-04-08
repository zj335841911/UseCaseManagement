/**
 * UI服务注册中心
 *
 * @export
 * @class UIServiceRegister
 */
export class UIServiceRegister {

    /**
     * 所有UI实体服务Map
     *
     * @protected
     * @type {*}
     * @memberof UIServiceRegister
     */
    protected allUIService: Map<string, () => Promise<any>> = new Map();

    /**
     * 已加载UI实体服务Map缓存
     *
     * @protected
     * @type {Map<string, any>}
     * @memberof UIServiceRegister
     */
    protected serviceCache: Map<string, any> = new Map();

    /**
     * Creates an instance of UIServiceRegister.
     * @memberof UIServiceRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof UIServiceRegister
     */
    protected init(): void {
                this.allUIService.set('productplan', () => import('@/uiservice/product-plan/product-plan-ui-service'));
        this.allUIService.set('ibzreportroleconfig', () => import('@/uiservice/ibz-report-role-config/ibz-report-role-config-ui-service'));
        this.allUIService.set('case', () => import('@/uiservice/case/case-ui-service'));
        this.allUIService.set('sysuser', () => import('@/uiservice/sys-user/sys-user-ui-service'));
        this.allUIService.set('product', () => import('@/uiservice/product/product-ui-service'));
        this.allUIService.set('ibzcasestep', () => import('@/uiservice/ibzcase-step/ibzcase-step-ui-service'));
        this.allUIService.set('taskteam', () => import('@/uiservice/task-team/task-team-ui-service'));
        this.allUIService.set('file', () => import('@/uiservice/file/file-ui-service'));
        this.allUIService.set('ibzagent', () => import('@/uiservice/ibz-agent/ibz-agent-ui-service'));
        this.allUIService.set('ibzprostorymodule', () => import('@/uiservice/ibzpro-story-module/ibzpro-story-module-ui-service'));
        this.allUIService.set('productsum', () => import('@/uiservice/product-sum/product-sum-ui-service'));
        this.allUIService.set('ibzlibcasesteps', () => import('@/uiservice/ibz-lib-casesteps/ibz-lib-casesteps-ui-service'));
        this.allUIService.set('ibzlib', () => import('@/uiservice/ibz-lib/ibz-lib-ui-service'));
        this.allUIService.set('ibzdaily', () => import('@/uiservice/ibz-daily/ibz-daily-ui-service'));
        this.allUIService.set('suitecase', () => import('@/uiservice/suite-case/suite-case-ui-service'));
        this.allUIService.set('burn', () => import('@/uiservice/burn/burn-ui-service'));
        this.allUIService.set('employeeload', () => import('@/uiservice/emp-loyeeload/emp-loyeeload-ui-service'));
        this.allUIService.set('doccontent', () => import('@/uiservice/doc-content/doc-content-ui-service'));
        this.allUIService.set('ibzreport', () => import('@/uiservice/ibz-report/ibz-report-ui-service'));
        this.allUIService.set('ibztaskestimate', () => import('@/uiservice/ibztask-estimate/ibztask-estimate-ui-service'));
        this.allUIService.set('syspost', () => import('@/uiservice/sys-post/sys-post-ui-service'));
        this.allUIService.set('usertpl', () => import('@/uiservice/user-tpl/user-tpl-ui-service'));
        this.allUIService.set('taskstats', () => import('@/uiservice/task-stats/task-stats-ui-service'));
        this.allUIService.set('ibizproprojectweekly', () => import('@/uiservice/ibizpro-project-weekly/ibizpro-project-weekly-ui-service'));
        this.allUIService.set('ibzfavorites', () => import('@/uiservice/ibz-favorites/ibz-favorites-ui-service'));
        this.allUIService.set('sysdepartment', () => import('@/uiservice/sys-department/sys-department-ui-service'));
        this.allUIService.set('productstats', () => import('@/uiservice/product-stats/product-stats-ui-service'));
        this.allUIService.set('ibzprojectmember', () => import('@/uiservice/ibz-project-member/ibz-project-member-ui-service'));
        this.allUIService.set('bugstats', () => import('@/uiservice/bug-stats/bug-stats-ui-service'));
        this.allUIService.set('ibizproindex', () => import('@/uiservice/ibizpro-index/ibizpro-index-ui-service'));
        this.allUIService.set('group', () => import('@/uiservice/group/group-ui-service'));
        this.allUIService.set('ibzproproduct', () => import('@/uiservice/ibzpro-product/ibzpro-product-ui-service'));
        this.allUIService.set('casestep', () => import('@/uiservice/case-step/case-step-ui-service'));
        this.allUIService.set('dept', () => import('@/uiservice/dept/dept-ui-service'));
        this.allUIService.set('ibizprotag', () => import('@/uiservice/ibizpro-tag/ibizpro-tag-ui-service'));
        this.allUIService.set('company', () => import('@/uiservice/company/company-ui-service'));
        this.allUIService.set('systeam', () => import('@/uiservice/sys-team/sys-team-ui-service'));
        this.allUIService.set('taskestimate', () => import('@/uiservice/task-estimate/task-estimate-ui-service'));
        this.allUIService.set('story', () => import('@/uiservice/story/story-ui-service'));
        this.allUIService.set('taskestimatestats', () => import('@/uiservice/taskestimatestats/taskestimatestats-ui-service'));
        this.allUIService.set('ibzlibcasesteptmp', () => import('@/uiservice/ibz-lib-case-step-tmp/ibz-lib-case-step-tmp-ui-service'));
        this.allUIService.set('todo', () => import('@/uiservice/todo/todo-ui-service'));
        this.allUIService.set('ibzlibmodule', () => import('@/uiservice/ibz-lib-module/ibz-lib-module-ui-service'));
        this.allUIService.set('ibizproproductweekly', () => import('@/uiservice/ibizpro-product-weekly/ibizpro-product-weekly-ui-service'));
        this.allUIService.set('useryearworkstats', () => import('@/uiservice/user-year-work-stats/user-year-work-stats-ui-service'));
        this.allUIService.set('sysorganization', () => import('@/uiservice/sys-organization/sys-organization-ui-service'));
        this.allUIService.set('ibizproplugin', () => import('@/uiservice/ibizpro-plugin/ibizpro-plugin-ui-service'));
        this.allUIService.set('subproductplan', () => import('@/uiservice/sub-product-plan/sub-product-plan-ui-service'));
        this.allUIService.set('project', () => import('@/uiservice/project/project-ui-service'));
        this.allUIService.set('ibzreportly', () => import('@/uiservice/ibz-reportly/ibz-reportly-ui-service'));
        this.allUIService.set('subtask', () => import('@/uiservice/sub-task/sub-task-ui-service'));
        this.allUIService.set('ibizproprojectmonthly', () => import('@/uiservice/ibizpro-project-monthly/ibizpro-project-monthly-ui-service'));
        this.allUIService.set('user', () => import('@/uiservice/user/user-ui-service'));
        this.allUIService.set('doclib', () => import('@/uiservice/doc-lib/doc-lib-ui-service'));
        this.allUIService.set('companystats', () => import('@/uiservice/company-stats/company-stats-ui-service'));
        this.allUIService.set('productmodule', () => import('@/uiservice/product-module/product-module-ui-service'));
        this.allUIService.set('productteam', () => import('@/uiservice/productteam/productteam-ui-service'));
        this.allUIService.set('testmodule', () => import('@/uiservice/test-module/test-module-ui-service'));
        this.allUIService.set('substory', () => import('@/uiservice/sub-story/sub-story-ui-service'));
        this.allUIService.set('ibizproprojectdaily', () => import('@/uiservice/ibizpro-project-daily/ibizpro-project-daily-ui-service'));
        this.allUIService.set('ibzplantemplet', () => import('@/uiservice/ibz-plan-templet/ibz-plan-templet-ui-service'));
        this.allUIService.set('sysuserrole', () => import('@/uiservice/sys-user-role/sys-user-role-ui-service'));
        this.allUIService.set('ibizprokeyword', () => import('@/uiservice/ibizpro-keyword/ibizpro-keyword-ui-service'));
        this.allUIService.set('doclibmodule', () => import('@/uiservice/doc-lib-module/doc-lib-module-ui-service'));
        this.allUIService.set('productlife', () => import('@/uiservice/product-life/product-life-ui-service'));
        this.allUIService.set('usercontact', () => import('@/uiservice/user-contact/user-contact-ui-service'));
        this.allUIService.set('ibizproproductdaily', () => import('@/uiservice/ibizpro-product-daily/ibizpro-product-daily-ui-service'));
        this.allUIService.set('sysrole', () => import('@/uiservice/sys-role/sys-role-ui-service'));
        this.allUIService.set('plantempletdetail', () => import('@/uiservice/plan-templet-detail/plan-templet-detail-ui-service'));
        this.allUIService.set('task', () => import('@/uiservice/task/task-ui-service'));
        this.allUIService.set('build', () => import('@/uiservice/build/build-ui-service'));
        this.allUIService.set('ibizproproductmonthly', () => import('@/uiservice/ibizpro-product-monthly/ibizpro-product-monthly-ui-service'));
        this.allUIService.set('testresult', () => import('@/uiservice/test-result/test-result-ui-service'));
        this.allUIService.set('testsuite', () => import('@/uiservice/test-suite/test-suite-ui-service'));
        this.allUIService.set('ibzplantempletdetail', () => import('@/uiservice/ibz-plan-templet-detail/ibz-plan-templet-detail-ui-service'));
        this.allUIService.set('ibzproconfig', () => import('@/uiservice/ibzpro-config/ibzpro-config-ui-service'));
        this.allUIService.set('ibzprostory', () => import('@/uiservice/ibzpro-story/ibzpro-story-ui-service'));
        this.allUIService.set('ibztaskteam', () => import('@/uiservice/ibztask-team/ibztask-team-ui-service'));
        this.allUIService.set('projectteam', () => import('@/uiservice/project-team/project-team-ui-service'));
        this.allUIService.set('testtask', () => import('@/uiservice/test-task/test-task-ui-service'));
        this.allUIService.set('productline', () => import('@/uiservice/product-line/product-line-ui-service'));
        this.allUIService.set('pssyssfpub', () => import('@/uiservice/pssys-sfpub/pssys-sfpub-ui-service'));
        this.allUIService.set('testreport', () => import('@/uiservice/test-report/test-report-ui-service'));
        this.allUIService.set('projectstats', () => import('@/uiservice/project-stats/project-stats-ui-service'));
        this.allUIService.set('testrun', () => import('@/uiservice/test-run/test-run-ui-service'));
        this.allUIService.set('ibzmonthly', () => import('@/uiservice/ibz-monthly/ibz-monthly-ui-service'));
        this.allUIService.set('ibzmyterritory', () => import('@/uiservice/ibz-my-territory/ibz-my-territory-ui-service'));
        this.allUIService.set('sysupdatelog', () => import('@/uiservice/sys-update-log/sys-update-log-ui-service'));
        this.allUIService.set('doc', () => import('@/uiservice/doc/doc-ui-service'));
        this.allUIService.set('bug', () => import('@/uiservice/bug/bug-ui-service'));
        this.allUIService.set('ibzweekly', () => import('@/uiservice/ibzweekly/ibzweekly-ui-service'));
        this.allUIService.set('projectmodule', () => import('@/uiservice/project-module/project-module-ui-service'));
        this.allUIService.set('ibzdoc', () => import('@/uiservice/ibz-doc/ibz-doc-ui-service'));
        this.allUIService.set('pssysapp', () => import('@/uiservice/pssys-app/pssys-app-ui-service'));
        this.allUIService.set('ibzproprojectusertask', () => import('@/uiservice/ibzpro-project-user-task/ibzpro-project-user-task-ui-service'));
        this.allUIService.set('ibzcase', () => import('@/uiservice/ibz-case/ibz-case-ui-service'));
        this.allUIService.set('systeammember', () => import('@/uiservice/sys-team-member/sys-team-member-ui-service'));
        this.allUIService.set('pssystemdbcfg', () => import('@/uiservice/pssystem-dbcfg/pssystem-dbcfg-ui-service'));
        this.allUIService.set('ibzproproductusertask', () => import('@/uiservice/ibzpro-product-user-task/ibzpro-product-user-task-ui-service'));
        this.allUIService.set('sysupdatefeatures', () => import('@/uiservice/sys-update-features/sys-update-features-ui-service'));
        this.allUIService.set('release', () => import('@/uiservice/release/release-ui-service'));
        this.allUIService.set('casestats', () => import('@/uiservice/case-stats/case-stats-ui-service'));
        this.allUIService.set('dynadashboard', () => import('@/uiservice/dyna-dashboard/dyna-dashboard-ui-service'));
        this.allUIService.set('sysemployee', () => import('@/uiservice/sys-employee/sys-employee-ui-service'));
        this.allUIService.set('projectproduct', () => import('@/uiservice/project-product/project-product-ui-service'));
        this.allUIService.set('accounttaskestimate', () => import('@/uiservice/account-taskestimate/account-taskestimate-ui-service'));
        this.allUIService.set('storyspec', () => import('@/uiservice/story-spec/story-spec-ui-service'));
        this.allUIService.set('branch', () => import('@/uiservice/branch/branch-ui-service'));
        this.allUIService.set('action', () => import('@/uiservice/action/action-ui-service'));
        this.allUIService.set('history', () => import('@/uiservice/history/history-ui-service'));
        this.allUIService.set('module', () => import('@/uiservice/module/module-ui-service'));
        this.allUIService.set('projecttaskestimate', () => import('@/uiservice/project-taskestimate/project-taskestimate-ui-service'));
    }

    /**
     * 加载服务实体
     *
     * @protected
     * @param {string} serviceName
     * @returns {Promise<any>}
     * @memberof UIServiceRegister
     */
    protected async loadService(serviceName: string): Promise<any> {
        const service = this.allUIService.get(serviceName);
        if (service) {
            return service();
        }
    }

    /**
     * 获取应用实体服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof UIServiceRegister
     */
    public async getService(name: string): Promise<any> {
        if (this.serviceCache.has(name)) {
            return this.serviceCache.get(name);
        }
        const entityService: any = await this.loadService(name);
        if (entityService && entityService.default) {
            const instance: any = new entityService.default();
            this.serviceCache.set(name, instance);
            return instance;
        }
    }

}
export const uiServiceRegister: UIServiceRegister = new UIServiceRegister();