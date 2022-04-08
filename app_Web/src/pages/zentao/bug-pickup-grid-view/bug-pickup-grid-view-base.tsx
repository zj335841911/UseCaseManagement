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
 * @class BugPickupGridViewBase
 * @extends {PickupGridViewBase}
 */
export class BugPickupGridViewBase extends PickupGridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridViewBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugPickupGridViewBase
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugPickupGridViewBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.pickupgridview.caption',
        srfTitle: 'entities.bug.views.pickupgridview.title',
        srfSubTitle: 'entities.bug.views.pickupgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugPickupGridViewBase
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
     * @memberof BugPickupGridViewBase
     */
	protected viewtag: string = '1e7347f3fffc87077dd7f0156125b918';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BugPickupGridViewBase
     */ 
    protected viewName: string = 'BugPickupGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugPickupGridViewBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BugPickupGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugPickupGridViewBase
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
     * @memberof BugPickupGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugPickupGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof BugPickupGridViewBase
     */
    protected isExpandSearchForm: boolean = true;


}