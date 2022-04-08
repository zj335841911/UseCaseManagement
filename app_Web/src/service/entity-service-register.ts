/**
 * 实体数据服务注册中心
 *
 * @export
 * @class EntityServiceRegister
 */
export class EntityServiceRegister {

    /**
     * 所有实体数据服务Map
     *
     * @protected
     * @type {*}
     * @memberof EntityServiceRegister
     */
    protected allEntityService: Map<string, () => Promise<any>> = new Map();

    /**
     * 已加载实体数据服务Map缓存
     *
     * @protected
     * @type {Map<string, any>}
     * @memberof EntityServiceRegister
     */
    protected serviceCache: Map<string, any> = new Map();

    /**
     * Creates an instance of EntityServiceRegister.
     * @memberof EntityServiceRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof EntityServiceRegister
     */
    protected init(): void {
                this.allEntityService.set('productplan', () => import('@/service/product-plan/product-plan-service'));
        this.allEntityService.set('ibzreportroleconfig', () => import('@/service/ibz-report-role-config/ibz-report-role-config-service'));
        this.allEntityService.set('case', () => import('@/service/case/case-service'));
        this.allEntityService.set('sysuser', () => import('@/service/sys-user/sys-user-service'));
        this.allEntityService.set('product', () => import('@/service/product/product-service'));
        this.allEntityService.set('ibzcasestep', () => import('@/service/ibzcase-step/ibzcase-step-service'));
        this.allEntityService.set('taskteam', () => import('@/service/task-team/task-team-service'));
        this.allEntityService.set('file', () => import('@/service/file/file-service'));
        this.allEntityService.set('ibzagent', () => import('@/service/ibz-agent/ibz-agent-service'));
        this.allEntityService.set('ibzprostorymodule', () => import('@/service/ibzpro-story-module/ibzpro-story-module-service'));
        this.allEntityService.set('productsum', () => import('@/service/product-sum/product-sum-service'));
        this.allEntityService.set('ibzlibcasesteps', () => import('@/service/ibz-lib-casesteps/ibz-lib-casesteps-service'));
        this.allEntityService.set('ibzlib', () => import('@/service/ibz-lib/ibz-lib-service'));
        this.allEntityService.set('ibzdaily', () => import('@/service/ibz-daily/ibz-daily-service'));
        this.allEntityService.set('suitecase', () => import('@/service/suite-case/suite-case-service'));
        this.allEntityService.set('burn', () => import('@/service/burn/burn-service'));
        this.allEntityService.set('employeeload', () => import('@/service/emp-loyeeload/emp-loyeeload-service'));
        this.allEntityService.set('doccontent', () => import('@/service/doc-content/doc-content-service'));
        this.allEntityService.set('ibzreport', () => import('@/service/ibz-report/ibz-report-service'));
        this.allEntityService.set('ibztaskestimate', () => import('@/service/ibztask-estimate/ibztask-estimate-service'));
        this.allEntityService.set('syspost', () => import('@/service/sys-post/sys-post-service'));
        this.allEntityService.set('usertpl', () => import('@/service/user-tpl/user-tpl-service'));
        this.allEntityService.set('taskstats', () => import('@/service/task-stats/task-stats-service'));
        this.allEntityService.set('ibizproprojectweekly', () => import('@/service/ibizpro-project-weekly/ibizpro-project-weekly-service'));
        this.allEntityService.set('ibzfavorites', () => import('@/service/ibz-favorites/ibz-favorites-service'));
        this.allEntityService.set('sysdepartment', () => import('@/service/sys-department/sys-department-service'));
        this.allEntityService.set('productstats', () => import('@/service/product-stats/product-stats-service'));
        this.allEntityService.set('ibzprojectmember', () => import('@/service/ibz-project-member/ibz-project-member-service'));
        this.allEntityService.set('bugstats', () => import('@/service/bug-stats/bug-stats-service'));
        this.allEntityService.set('ibizproindex', () => import('@/service/ibizpro-index/ibizpro-index-service'));
        this.allEntityService.set('group', () => import('@/service/group/group-service'));
        this.allEntityService.set('ibzproproduct', () => import('@/service/ibzpro-product/ibzpro-product-service'));
        this.allEntityService.set('casestep', () => import('@/service/case-step/case-step-service'));
        this.allEntityService.set('dept', () => import('@/service/dept/dept-service'));
        this.allEntityService.set('ibizprotag', () => import('@/service/ibizpro-tag/ibizpro-tag-service'));
        this.allEntityService.set('company', () => import('@/service/company/company-service'));
        this.allEntityService.set('systeam', () => import('@/service/sys-team/sys-team-service'));
        this.allEntityService.set('taskestimate', () => import('@/service/task-estimate/task-estimate-service'));
        this.allEntityService.set('story', () => import('@/service/story/story-service'));
        this.allEntityService.set('taskestimatestats', () => import('@/service/taskestimatestats/taskestimatestats-service'));
        this.allEntityService.set('ibzlibcasesteptmp', () => import('@/service/ibz-lib-case-step-tmp/ibz-lib-case-step-tmp-service'));
        this.allEntityService.set('todo', () => import('@/service/todo/todo-service'));
        this.allEntityService.set('ibzlibmodule', () => import('@/service/ibz-lib-module/ibz-lib-module-service'));
        this.allEntityService.set('ibizproproductweekly', () => import('@/service/ibizpro-product-weekly/ibizpro-product-weekly-service'));
        this.allEntityService.set('useryearworkstats', () => import('@/service/user-year-work-stats/user-year-work-stats-service'));
        this.allEntityService.set('sysorganization', () => import('@/service/sys-organization/sys-organization-service'));
        this.allEntityService.set('ibizproplugin', () => import('@/service/ibizpro-plugin/ibizpro-plugin-service'));
        this.allEntityService.set('subproductplan', () => import('@/service/sub-product-plan/sub-product-plan-service'));
        this.allEntityService.set('project', () => import('@/service/project/project-service'));
        this.allEntityService.set('ibzreportly', () => import('@/service/ibz-reportly/ibz-reportly-service'));
        this.allEntityService.set('subtask', () => import('@/service/sub-task/sub-task-service'));
        this.allEntityService.set('ibizproprojectmonthly', () => import('@/service/ibizpro-project-monthly/ibizpro-project-monthly-service'));
        this.allEntityService.set('user', () => import('@/service/user/user-service'));
        this.allEntityService.set('doclib', () => import('@/service/doc-lib/doc-lib-service'));
        this.allEntityService.set('companystats', () => import('@/service/company-stats/company-stats-service'));
        this.allEntityService.set('productmodule', () => import('@/service/product-module/product-module-service'));
        this.allEntityService.set('productteam', () => import('@/service/productteam/productteam-service'));
        this.allEntityService.set('testmodule', () => import('@/service/test-module/test-module-service'));
        this.allEntityService.set('substory', () => import('@/service/sub-story/sub-story-service'));
        this.allEntityService.set('ibizproprojectdaily', () => import('@/service/ibizpro-project-daily/ibizpro-project-daily-service'));
        this.allEntityService.set('ibzplantemplet', () => import('@/service/ibz-plan-templet/ibz-plan-templet-service'));
        this.allEntityService.set('sysuserrole', () => import('@/service/sys-user-role/sys-user-role-service'));
        this.allEntityService.set('ibizprokeyword', () => import('@/service/ibizpro-keyword/ibizpro-keyword-service'));
        this.allEntityService.set('doclibmodule', () => import('@/service/doc-lib-module/doc-lib-module-service'));
        this.allEntityService.set('productlife', () => import('@/service/product-life/product-life-service'));
        this.allEntityService.set('usercontact', () => import('@/service/user-contact/user-contact-service'));
        this.allEntityService.set('ibizproproductdaily', () => import('@/service/ibizpro-product-daily/ibizpro-product-daily-service'));
        this.allEntityService.set('sysrole', () => import('@/service/sys-role/sys-role-service'));
        this.allEntityService.set('plantempletdetail', () => import('@/service/plan-templet-detail/plan-templet-detail-service'));
        this.allEntityService.set('task', () => import('@/service/task/task-service'));
        this.allEntityService.set('build', () => import('@/service/build/build-service'));
        this.allEntityService.set('ibizproproductmonthly', () => import('@/service/ibizpro-product-monthly/ibizpro-product-monthly-service'));
        this.allEntityService.set('testresult', () => import('@/service/test-result/test-result-service'));
        this.allEntityService.set('testsuite', () => import('@/service/test-suite/test-suite-service'));
        this.allEntityService.set('ibzplantempletdetail', () => import('@/service/ibz-plan-templet-detail/ibz-plan-templet-detail-service'));
        this.allEntityService.set('ibzproconfig', () => import('@/service/ibzpro-config/ibzpro-config-service'));
        this.allEntityService.set('ibzprostory', () => import('@/service/ibzpro-story/ibzpro-story-service'));
        this.allEntityService.set('ibztaskteam', () => import('@/service/ibztask-team/ibztask-team-service'));
        this.allEntityService.set('projectteam', () => import('@/service/project-team/project-team-service'));
        this.allEntityService.set('testtask', () => import('@/service/test-task/test-task-service'));
        this.allEntityService.set('productline', () => import('@/service/product-line/product-line-service'));
        this.allEntityService.set('pssyssfpub', () => import('@/service/pssys-sfpub/pssys-sfpub-service'));
        this.allEntityService.set('testreport', () => import('@/service/test-report/test-report-service'));
        this.allEntityService.set('projectstats', () => import('@/service/project-stats/project-stats-service'));
        this.allEntityService.set('testrun', () => import('@/service/test-run/test-run-service'));
        this.allEntityService.set('ibzmonthly', () => import('@/service/ibz-monthly/ibz-monthly-service'));
        this.allEntityService.set('ibzmyterritory', () => import('@/service/ibz-my-territory/ibz-my-territory-service'));
        this.allEntityService.set('sysupdatelog', () => import('@/service/sys-update-log/sys-update-log-service'));
        this.allEntityService.set('doc', () => import('@/service/doc/doc-service'));
        this.allEntityService.set('bug', () => import('@/service/bug/bug-service'));
        this.allEntityService.set('ibzweekly', () => import('@/service/ibzweekly/ibzweekly-service'));
        this.allEntityService.set('projectmodule', () => import('@/service/project-module/project-module-service'));
        this.allEntityService.set('ibzdoc', () => import('@/service/ibz-doc/ibz-doc-service'));
        this.allEntityService.set('pssysapp', () => import('@/service/pssys-app/pssys-app-service'));
        this.allEntityService.set('ibzproprojectusertask', () => import('@/service/ibzpro-project-user-task/ibzpro-project-user-task-service'));
        this.allEntityService.set('ibzcase', () => import('@/service/ibz-case/ibz-case-service'));
        this.allEntityService.set('systeammember', () => import('@/service/sys-team-member/sys-team-member-service'));
        this.allEntityService.set('pssystemdbcfg', () => import('@/service/pssystem-dbcfg/pssystem-dbcfg-service'));
        this.allEntityService.set('ibzproproductusertask', () => import('@/service/ibzpro-product-user-task/ibzpro-product-user-task-service'));
        this.allEntityService.set('sysupdatefeatures', () => import('@/service/sys-update-features/sys-update-features-service'));
        this.allEntityService.set('release', () => import('@/service/release/release-service'));
        this.allEntityService.set('casestats', () => import('@/service/case-stats/case-stats-service'));
        this.allEntityService.set('dynadashboard', () => import('@/service/dyna-dashboard/dyna-dashboard-service'));
        this.allEntityService.set('sysemployee', () => import('@/service/sys-employee/sys-employee-service'));
        this.allEntityService.set('projectproduct', () => import('@/service/project-product/project-product-service'));
        this.allEntityService.set('accounttaskestimate', () => import('@/service/account-taskestimate/account-taskestimate-service'));
        this.allEntityService.set('storyspec', () => import('@/service/story-spec/story-spec-service'));
        this.allEntityService.set('branch', () => import('@/service/branch/branch-service'));
        this.allEntityService.set('action', () => import('@/service/action/action-service'));
        this.allEntityService.set('history', () => import('@/service/history/history-service'));
        this.allEntityService.set('module', () => import('@/service/module/module-service'));
        this.allEntityService.set('projecttaskestimate', () => import('@/service/project-taskestimate/project-taskestimate-service'));
    }

    /**
     * 加载实体数据服务
     *
     * @protected
     * @param {string} serviceName
     * @returns {Promise<any>}
     * @memberof EntityServiceRegister
     */
    protected async loadService(serviceName: string): Promise<any> {
        const service = this.allEntityService.get(serviceName);
        if (service) {
            return service();
        }
    }

    /**
     * 获取应用实体数据服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof EntityServiceRegister
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
export const entityServiceRegister: EntityServiceRegister = new EntityServiceRegister();