import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryAuthService from '@/authservice/story/story-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import StoryUIService from '@/uiservice/story/story-ui-service';

/**
 * 需求数据看板视图视图基类
 *
 * @export
 * @class Storymaindashboardview_linkBase
 * @extends {DashboardViewBase}
 */
export class Storymaindashboardview_linkBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Storymaindashboardview_linkBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof Storymaindashboardview_linkBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof Storymaindashboardview_linkBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof Storymaindashboardview_linkBase
     */
    protected appEntityService: StoryService = new StoryService;

    /**
     * 实体权限服务对象
     *
     * @type StoryUIService
     * @memberof Storymaindashboardview_linkBase
     */
    public appUIService: StoryUIService = new StoryUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof Storymaindashboardview_linkBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'story',
        },
        'SRFPARENTKEY': {
            isRawValue: false,
            value: 'story',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof Storymaindashboardview_linkBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof Storymaindashboardview_linkBase
     */
    protected model: any = {
        srfCaption: 'entities.story.views.maindashboardview_link.caption',
        srfTitle: 'entities.story.views.maindashboardview_link.title',
        srfSubTitle: 'entities.story.views.maindashboardview_link.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof Storymaindashboardview_linkBase
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
     * @memberof Storymaindashboardview_linkBase
     */
	protected viewtag: string = '021e4a7269fe8ec26b9001c39df0e215';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof Storymaindashboardview_linkBase
     */ 
    protected viewName: string = 'Storymaindashboardview_link';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof Storymaindashboardview_linkBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Storymaindashboardview_linkBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof Storymaindashboardview_linkBase
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
     * @memberof Storymaindashboardview_linkBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }

    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof Storymaindashboardview_linkBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof Storymaindashboardview_linkBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}