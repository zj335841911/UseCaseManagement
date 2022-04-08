import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import TodoAuthService from '@/authservice/todo/todo-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import TodoUIService from '@/uiservice/todo/todo-ui-service';

/**
 * 待办事宜表数据看板视图视图基类
 *
 * @export
 * @class TodoDashboardView_LinkBase
 * @extends {DashboardViewBase}
 */
export class TodoDashboardView_LinkBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardView_LinkBase
     */
    protected appDeName: string = 'todo';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardView_LinkBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardView_LinkBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof TodoDashboardView_LinkBase
     */
    protected appEntityService: TodoService = new TodoService;

    /**
     * 实体权限服务对象
     *
     * @type TodoUIService
     * @memberof TodoDashboardView_LinkBase
     */
    public appUIService: TodoUIService = new TodoUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TodoDashboardView_LinkBase
	 */
    protected customViewNavContexts: any = {
        'NAME': { isRawValue: false, value: 'name' },
        'ASSIGNEDTO': { isRawValue: false, value: 'assignedto' },
        'DESC': { isRawValue: false, value: 'desc' },
        'OBJECTTYPE': { isRawValue: true, value: 'todo' },
        'SRFPARENTKEY': { isRawValue: false, value: 'todo' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TodoDashboardView_LinkBase
	 */
    protected customViewParams: any = {
        'assignedto': { isRawValue: false, value: 'assignedto' },
        'desc': { isRawValue: false, value: 'desc' },
        'name': { isRawValue: false, value: 'name' }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof TodoDashboardView_LinkBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TodoDashboardView_LinkBase
     */
    protected model: any = {
        srfCaption: 'entities.todo.views.dashboardview_link.caption',
        srfTitle: 'entities.todo.views.dashboardview_link.title',
        srfSubTitle: 'entities.todo.views.dashboardview_link.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TodoDashboardView_LinkBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardView_LinkBase
     */
	protected viewtag: string = '2d522dfacc8d37f56c2d684791a39d5d';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TodoDashboardView_LinkBase
     */ 
    protected viewName:string = "TodoDashboardView_Link";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TodoDashboardView_LinkBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TodoDashboardView_LinkBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TodoDashboardView_LinkBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'todo',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TodoDashboardView_LinkBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}