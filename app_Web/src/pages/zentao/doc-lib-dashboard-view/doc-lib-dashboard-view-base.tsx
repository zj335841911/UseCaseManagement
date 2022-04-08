import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibAuthService from '@/authservice/doc-lib/doc-lib-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * 文档库数据看板视图视图基类
 *
 * @export
 * @class DocLibDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class DocLibDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibDashboardViewBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocLibDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocLibDashboardViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibDashboardViewBase
     */
    protected appEntityService: DocLibService = new DocLibService;

    /**
     * 实体权限服务对象
     *
     * @type DocLibUIService
     * @memberof DocLibDashboardViewBase
     */
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof DocLibDashboardViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocLibDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doclib.views.dashboardview.caption',
        srfTitle: 'entities.doclib.views.dashboardview.title',
        srfSubTitle: 'entities.doclib.views.dashboardview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocLibDashboardViewBase
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
     * @memberof DocLibDashboardViewBase
     */
	protected viewtag: string = '17cfdc6c0116cf67d29eb46f73a25706';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibDashboardViewBase
     */ 
    protected viewName: string = 'DocLibDashboardView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocLibDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocLibDashboardViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocLibDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'doclib',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }

    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof DocLibDashboardViewBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof DocLibDashboardViewBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}