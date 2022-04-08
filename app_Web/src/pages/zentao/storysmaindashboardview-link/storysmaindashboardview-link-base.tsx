import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryAuthService from '@/authservice/story/story-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import StoryUIService from '@/uiservice/story/story-ui-service';

/**
 * 需求数据看板视图视图基类
 *
 * @export
 * @class Storysmaindashboardview_linkBase
 * @extends {DashboardViewBase}
 */
export class Storysmaindashboardview_linkBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Storysmaindashboardview_linkBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof Storysmaindashboardview_linkBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof Storysmaindashboardview_linkBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof Storysmaindashboardview_linkBase
     */
    protected appEntityService: StoryService = new StoryService;

    /**
     * 实体权限服务对象
     *
     * @type StoryUIService
     * @memberof Storysmaindashboardview_linkBase
     */
    public appUIService: StoryUIService = new StoryUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof Storysmaindashboardview_linkBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'story' },
        'SRFPARENTKEY': { isRawValue: false, value: 'story' }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof Storysmaindashboardview_linkBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof Storysmaindashboardview_linkBase
     */
    protected model: any = {
        srfCaption: 'entities.story.views.smaindashboardview_link.caption',
        srfTitle: 'entities.story.views.smaindashboardview_link.title',
        srfSubTitle: 'entities.story.views.smaindashboardview_link.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof Storysmaindashboardview_linkBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof Storysmaindashboardview_linkBase
     */
	protected viewtag: string = 'cfc7781789f7706e02b2d2504339de69';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof Storysmaindashboardview_linkBase
     */ 
    protected viewName:string = "Storysmaindashboardview_link";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof Storysmaindashboardview_linkBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Storysmaindashboardview_linkBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof Storysmaindashboardview_linkBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof Storysmaindashboardview_linkBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }


}