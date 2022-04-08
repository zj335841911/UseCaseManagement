import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { PickupGridViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryAuthService from '@/authservice/story/story-auth-service';
import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';
import StoryUIService from '@/uiservice/story/story-ui-service';

/**
 * 需求视图基类
 *
 * @export
 * @class StoryPickupGridView4Base
 * @extends {PickupGridViewBase}
 */
export class StoryPickupGridView4Base extends PickupGridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryPickupGridView4Base
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof StoryPickupGridView4Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof StoryPickupGridView4Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof StoryPickupGridView4Base
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryPickupGridView4Base
     */
    protected appEntityService: StoryService = new StoryService;

    /**
     * 实体权限服务对象
     *
     * @type StoryUIService
     * @memberof StoryPickupGridView4Base
     */
    public appUIService: StoryUIService = new StoryUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof StoryPickupGridView4Base
	 */
    protected customViewParams: any = {
        'srfparentkey': {
            isRawValue: false,
            value: 'srfparentkey',
        },
        'project': {
            isRawValue: false,
            value: 'project',
        },
        'n_parent_gtandeq': {
            isRawValue: true,
            value: '0',
        },
        'build': {
            isRawValue: false,
            value: 'build',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof StoryPickupGridView4Base
     */
    protected model: any = {
        srfCaption: 'entities.story.views.pickupgridview4.caption',
        srfTitle: 'entities.story.views.pickupgridview4.title',
        srfSubTitle: 'entities.story.views.pickupgridview4.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof StoryPickupGridView4Base
     */
    protected containerModel: any = {
        view_grid: {
            name: 'grid',
            type: 'GRID',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof StoryPickupGridView4Base
     */
	protected viewtag: string = '1692c1e5fb7ada4f1b5d2613f0350c16';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof StoryPickupGridView4Base
     */ 
    protected viewName: string = 'StoryPickupGridView4';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof StoryPickupGridView4Base
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof StoryPickupGridView4Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof StoryPickupGridView4Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridView4Base
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridView4Base
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridView4Base
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridView4Base
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof StoryPickupGridView4Base
     */
    protected isExpandSearchForm: boolean = true;


}