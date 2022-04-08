import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import UserYearWorkStatsAuthService from '@/authservice/user-year-work-stats/user-year-work-stats-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import UserYearWorkStatsUIService from '@/uiservice/user-year-work-stats/user-year-work-stats-ui-service';

/**
 * 用户年度工作内容统计数据看板视图视图基类
 *
 * @export
 * @class UserYearWorkStatsPODashboardViewBase
 * @extends {DashboardViewBase}
 */
export class UserYearWorkStatsPODashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    protected appDeName: string = 'useryearworkstats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    protected appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService;

    /**
     * 实体权限服务对象
     *
     * @type UserYearWorkStatsUIService
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    public appUIService: UserYearWorkStatsUIService = new UserYearWorkStatsUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof UserYearWorkStatsPODashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'CURYEAR': {
            isRawValue: false,
            value: 'curyear',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof UserYearWorkStatsPODashboardViewBase
	 */
    protected customViewParams: any = {
        'curyear': {
            isRawValue: false,
            value: 'curyear',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.useryearworkstats.views.podashboardview.caption',
        srfTitle: 'entities.useryearworkstats.views.podashboardview.title',
        srfSubTitle: 'entities.useryearworkstats.views.podashboardview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsPODashboardViewBase
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
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
	protected viewtag: string = '6e0ad417e9fe2138d57f5e9e6a2e3b32';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsPODashboardViewBase
     */ 
    protected viewName: string = 'UserYearWorkStatsPODashboardView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof UserYearWorkStatsPODashboardViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'useryearworkstats',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }

    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof UserYearWorkStatsPODashboardViewBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}