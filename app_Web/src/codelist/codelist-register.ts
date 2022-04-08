/**
 * 代码表服务注册中心
 *
 * @export
 * @class CodeListRegister
 */
export class CodeListRegister {

    /**
     * 所有实体数据服务Map
     *
     * @protected
     * @type {*}
     * @memberof CodeListRegister
     */
    protected allCodeList: Map<string, () => Promise<any>> = new Map();

    /**
     * 已加载实体数据服务Map缓存
     *
     * @protected
     * @type {Map<string, any>}
     * @memberof CodeListRegister
     */
    protected serviceCache: Map<string, any> = new Map();

    /**
     * Creates an instance of CodeListRegister.
     * @memberof CodeListRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof CodeListRegister
     */
    protected init(): void {
            this.allCodeList.set('SQLBuild', () => import('@/codelist/sqlbuild'));
        this.allCodeList.set('UserRealNameProject', () => import('@/codelist/user-real-name-project'));
        this.allCodeList.set('AllBug', () => import('@/codelist/all-bug'));
        this.allCodeList.set('TestTask', () => import('@/codelist/test-task'));
        this.allCodeList.set('ProjectProductPlan', () => import('@/codelist/project-product-plan'));
        this.allCodeList.set('CodeList25', () => import('@/codelist/code-list25'));
        this.allCodeList.set('CodeList', () => import('@/codelist/code-list'));
        this.allCodeList.set('MyCompleteTask', () => import('@/codelist/my-complete-task'));
        this.allCodeList.set('ProductBranch_Cache', () => import('@/codelist/product-branch-cache'));
        this.allCodeList.set('SysOperator', () => import('@/codelist/sys-operator'));
        this.allCodeList.set('SystemAPP', () => import('@/codelist/system-app'));
        this.allCodeList.set('BugUserRealName', () => import('@/codelist/bug-user-real-name'));
        this.allCodeList.set('ProductBranch', () => import('@/codelist/product-branch'));
        this.allCodeList.set('AllCase', () => import('@/codelist/all-case'));
        this.allCodeList.set('APPBuild', () => import('@/codelist/appbuild'));
        this.allCodeList.set('AllRole', () => import('@/codelist/all-role'));
        this.allCodeList.set('Product', () => import('@/codelist/product'));
        this.allCodeList.set('UserRealName', () => import('@/codelist/user-real-name'));
        this.allCodeList.set('MonthlyCompleteTaskChoice', () => import('@/codelist/monthly-complete-task-choice'));
        this.allCodeList.set('UserRealNameW', () => import('@/codelist/user-real-name-w'));
        this.allCodeList.set('UserRealNameProductTeamNotAssign', () => import('@/codelist/user-real-name-product-team-not-assign'));
        this.allCodeList.set('UserRealNameTaskMTeam', () => import('@/codelist/user-real-name-task-mteam'));
        this.allCodeList.set('UserRealNameUnAssignTo_Gird', () => import('@/codelist/user-real-name-un-assign-to-gird'));
        this.allCodeList.set('Role', () => import('@/codelist/role'));
        this.allCodeList.set('CurProductBuild', () => import('@/codelist/cur-product-build'));
        this.allCodeList.set('UserRealName_Gird', () => import('@/codelist/user-real-name-gird'));
        this.allCodeList.set('RelatedStory', () => import('@/codelist/related-story'));
        this.allCodeList.set('AllEntry', () => import('@/codelist/all-entry'));
        this.allCodeList.set('PlanCodeList', () => import('@/codelist/plan-code-list'));
        this.allCodeList.set('CurProductProject', () => import('@/codelist/cur-product-project'));
        this.allCodeList.set('AllRepo', () => import('@/codelist/all-repo'));
        this.allCodeList.set('CurProductPlan', () => import('@/codelist/cur-product-plan'));
        this.allCodeList.set('UserRealNameProductTeam', () => import('@/codelist/user-real-name-product-team'));
        this.allCodeList.set('Backendservicesystem', () => import('@/codelist/backendservicesystem'));
        this.allCodeList.set('MyPlanTask', () => import('@/codelist/my-plan-task'));
        this.allCodeList.set('ProjectCodeList', () => import('@/codelist/project-code-list'));
        this.allCodeList.set('UserRealNameTaskTeam', () => import('@/codelist/user-real-name-task-team'));
        this.allCodeList.set('CurDocVersion', () => import('@/codelist/cur-doc-version'));
        this.allCodeList.set('PlanTemplet', () => import('@/codelist/plan-templet'));
        this.allCodeList.set('ProductTeam', () => import('@/codelist/product-team'));
        this.allCodeList.set('CurStory', () => import('@/codelist/cur-story'));
        this.allCodeList.set('ProductPlan', () => import('@/codelist/product-plan'));
        this.allCodeList.set('ProjectTeam', () => import('@/codelist/project-team'));
        this.allCodeList.set('AllStory', () => import('@/codelist/all-story'));
        this.allCodeList.set('CurCaseVersion', () => import('@/codelist/cur-case-version'));
        this.allCodeList.set('BugModule', () => import('@/codelist/bug-module'));
        this.allCodeList.set('RealDept', () => import('@/codelist/real-dept'));
        this.allCodeList.set('RunSQL', () => import('@/codelist/run-sql'));
        this.allCodeList.set('UserRealNameTask', () => import('@/codelist/user-real-name-task'));
        this.allCodeList.set('ProjectTeamProduct', () => import('@/codelist/project-team-product'));
        this.allCodeList.set('TaskTeamUserTemp', () => import('@/codelist/task-team-user-temp'));
        this.allCodeList.set('BackendBuild', () => import('@/codelist/backend-build'));
        this.allCodeList.set('AllTask', () => import('@/codelist/all-task'));
        this.allCodeList.set('AllTestTask', () => import('@/codelist/all-test-task'));
    }

    /**
     * 加载实体数据服务
     *
     * @protected
     * @param {string} serviceName
     * @returns {Promise<any>}
     * @memberof CodeListRegister
     */
    protected async loadService(serviceName: string): Promise<any> {
        const service = this.allCodeList.get(serviceName);
        if (service) {
            return service();
        }
    }

    /**
     * 获取应用实体数据服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof CodeListRegister
     */
    public async getService(name: string): Promise<any> {
        if (this.serviceCache.has(name)) {
            return this.serviceCache.get(name);
        }
        const CodeList: any = await this.loadService(name);
        if (CodeList && CodeList.default) {
            const instance: any = new CodeList.default();
            this.serviceCache.set(name, instance);
            return instance;
        }
    }

}
export const codeListRegister: CodeListRegister = new CodeListRegister();