import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { PickupGridViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugAuthService from '@/authservice/bug/bug-auth-service';
import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';
import BugUIService from '@/uiservice/bug/bug-ui-service';

/**
 * bug选择表格视图视图基类
 *
 * @export
 * @class BugPickupGridView4Base
 * @extends {PickupGridViewBase}
 */
export class BugPickupGridView4Base extends PickupGridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridView4Base
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridView4Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridView4Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridView4Base
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugPickupGridView4Base
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugPickupGridView4Base
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BugPickupGridView4Base
	 */
    protected customViewParams: any = {
        'release': {
            isRawValue: false,
            value: 'release',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridView4Base
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.pickupgridview4.caption',
        srfTitle: 'entities.bug.views.pickupgridview4.title',
        srfSubTitle: 'entities.bug.views.pickupgridview4.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridView4Base
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
     * @memberof BugPickupGridView4Base
     */
	protected viewtag: string = '88a2e4ac2ac010f7ec3f5b256e955207';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridView4Base
     */ 
    protected viewName: string = 'BugPickupGridView4';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugPickupGridView4Base
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BugPickupGridView4Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugPickupGridView4Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridView4Base
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridView4Base
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridView4Base
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridView4Base
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof BugPickupGridView4Base
     */
    protected isExpandSearchForm: boolean = true;


}