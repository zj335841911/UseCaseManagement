import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务主数据看板视图视图基类
 *
 * @export
 * @class Taskmaindashboardview_linkBase
 * @extends {DashboardViewBase}
 */
export class Taskmaindashboardview_linkBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Taskmaindashboardview_linkBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof Taskmaindashboardview_linkBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof Taskmaindashboardview_linkBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof Taskmaindashboardview_linkBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof Taskmaindashboardview_linkBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof Taskmaindashboardview_linkBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'task',
        },
        'SRFPARENTKEY': {
            isRawValue: false,
            value: 'task',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof Taskmaindashboardview_linkBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof Taskmaindashboardview_linkBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.maindashboardview_link.caption',
        srfTitle: 'entities.task.views.maindashboardview_link.title',
        srfSubTitle: 'entities.task.views.maindashboardview_link.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof Taskmaindashboardview_linkBase
     */
    protected containerModel: any = {
        view_dashboard: {
            name: 'dashboard',
            type: 'DASHBOARD',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof Taskmaindashboardview_linkBase
     */
	protected viewtag: string = 'a6e14baa45e0c99165384f7ef510d605';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof Taskmaindashboardview_linkBase
     */ 
    protected viewName: string = 'Taskmaindashboardview_link';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof Taskmaindashboardview_linkBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Taskmaindashboardview_linkBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof Taskmaindashboardview_linkBase
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
     * @memberof Taskmaindashboardview_linkBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }

    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof Taskmaindashboardview_linkBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof Taskmaindashboardview_linkBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}