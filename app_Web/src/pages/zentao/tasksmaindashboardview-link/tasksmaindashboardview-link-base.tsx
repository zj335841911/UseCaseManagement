import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务主数据看板视图视图基类
 *
 * @export
 * @class Tasksmaindashboardview_linkBase
 * @extends {DashboardViewBase}
 */
export class Tasksmaindashboardview_linkBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Tasksmaindashboardview_linkBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof Tasksmaindashboardview_linkBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof Tasksmaindashboardview_linkBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof Tasksmaindashboardview_linkBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof Tasksmaindashboardview_linkBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof Tasksmaindashboardview_linkBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'task' },
        'SRFPARENTKEY': { isRawValue: false, value: 'task' }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof Tasksmaindashboardview_linkBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof Tasksmaindashboardview_linkBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.smaindashboardview_link.caption',
        srfTitle: 'entities.task.views.smaindashboardview_link.title',
        srfSubTitle: 'entities.task.views.smaindashboardview_link.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof Tasksmaindashboardview_linkBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof Tasksmaindashboardview_linkBase
     */
	protected viewtag: string = '4fcd2a15ff88a97425e1ab1cadc5eb9f';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof Tasksmaindashboardview_linkBase
     */ 
    protected viewName:string = "Tasksmaindashboardview_link";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof Tasksmaindashboardview_linkBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Tasksmaindashboardview_linkBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof Tasksmaindashboardview_linkBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof Tasksmaindashboardview_linkBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}