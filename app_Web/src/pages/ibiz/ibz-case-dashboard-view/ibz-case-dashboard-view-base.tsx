import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import IbzCaseService from '@/service/ibz-case/ibz-case-service';
import IbzCaseAuthService from '@/authservice/ibz-case/ibz-case-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import IbzCaseUIService from '@/uiservice/ibz-case/ibz-case-ui-service';

/**
 * 用例库用例数据看板视图视图基类
 *
 * @export
 * @class IbzCaseDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class IbzCaseDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseDashboardViewBase
     */
    protected appDeName: string = 'ibzcase';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseDashboardViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {IbzCaseService}
     * @memberof IbzCaseDashboardViewBase
     */
    protected appEntityService: IbzCaseService = new IbzCaseService;

    /**
     * 实体权限服务对象
     *
     * @type IbzCaseUIService
     * @memberof IbzCaseDashboardViewBase
     */
    public appUIService: IbzCaseUIService = new IbzCaseUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzCaseDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'case',
        },
        'SRFPARENTKEY': {
            isRawValue: false,
            value: 'ibzcase',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof IbzCaseDashboardViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzCaseDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzcase.views.dashboardview.caption',
        srfTitle: 'entities.ibzcase.views.dashboardview.title',
        srfSubTitle: 'entities.ibzcase.views.dashboardview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzCaseDashboardViewBase
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
     * @memberof IbzCaseDashboardViewBase
     */
	protected viewtag: string = 'cbb71f998dc532ef4a5ff32525a46284';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseDashboardViewBase
     */ 
    protected viewName: string = 'IbzCaseDashboardView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzCaseDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzCaseDashboardViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzCaseDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'ibzcase',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzCaseDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }

    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof IbzCaseDashboardViewBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof IbzCaseDashboardViewBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}