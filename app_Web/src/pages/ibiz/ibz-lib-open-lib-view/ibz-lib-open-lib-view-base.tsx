import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import IbzLibService from '@/service/ibz-lib/ibz-lib-service';
import IbzLibAuthService from '@/authservice/ibz-lib/ibz-lib-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import IbzLibUIService from '@/uiservice/ibz-lib/ibz-lib-ui-service';

/**
 * 用例库数据看板视图视图基类
 *
 * @export
 * @class IbzLibOpenLibViewBase
 * @extends {DashboardViewBase}
 */
export class IbzLibOpenLibViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibOpenLibViewBase
     */
    protected appDeName: string = 'ibzlib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzLibOpenLibViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzLibOpenLibViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {IbzLibService}
     * @memberof IbzLibOpenLibViewBase
     */
    protected appEntityService: IbzLibService = new IbzLibService;

    /**
     * 实体权限服务对象
     *
     * @type IbzLibUIService
     * @memberof IbzLibOpenLibViewBase
     */
    public appUIService: IbzLibUIService = new IbzLibUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzLibOpenLibViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'caselib',
        },
        'SRFPARENTKEY': {
            isRawValue: false,
            value: 'ibzlib',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof IbzLibOpenLibViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzLibOpenLibViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzlib.views.openlibview.caption',
        srfTitle: 'entities.ibzlib.views.openlibview.title',
        srfSubTitle: 'entities.ibzlib.views.openlibview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzLibOpenLibViewBase
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
     * @memberof IbzLibOpenLibViewBase
     */
	protected viewtag: string = '90b86f20a267e8dc7352eff044a34691';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibOpenLibViewBase
     */ 
    protected viewName: string = 'IbzLibOpenLibView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzLibOpenLibViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzLibOpenLibViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzLibOpenLibViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'ibzlib',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibOpenLibViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }

    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof IbzLibOpenLibViewBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof IbzLibOpenLibViewBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}