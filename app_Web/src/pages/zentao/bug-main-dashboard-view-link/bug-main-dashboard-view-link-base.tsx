import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugAuthService from '@/authservice/bug/bug-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import BugUIService from '@/uiservice/bug/bug-ui-service';

/**
 * Bug数据看板视图视图基类
 *
 * @export
 * @class BugMainDashboardView_LinkBase
 * @extends {DashboardViewBase}
 */
export class BugMainDashboardView_LinkBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugMainDashboardView_LinkBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugMainDashboardView_LinkBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugMainDashboardView_LinkBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugMainDashboardView_LinkBase
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugMainDashboardView_LinkBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BugMainDashboardView_LinkBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'bug' },
        'SRFPARENTKEY': { isRawValue: false, value: 'bug' }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof BugMainDashboardView_LinkBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugMainDashboardView_LinkBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.maindashboardview_link.caption',
        srfTitle: 'entities.bug.views.maindashboardview_link.title',
        srfSubTitle: 'entities.bug.views.maindashboardview_link.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugMainDashboardView_LinkBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof BugMainDashboardView_LinkBase
     */
	protected viewtag: string = '8c8adbf0a7db27078e01a8b32716fa71';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BugMainDashboardView_LinkBase
     */ 
    protected viewName:string = "BugMainDashboardView_Link";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugMainDashboardView_LinkBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BugMainDashboardView_LinkBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugMainDashboardView_LinkBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMainDashboardView_LinkBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}