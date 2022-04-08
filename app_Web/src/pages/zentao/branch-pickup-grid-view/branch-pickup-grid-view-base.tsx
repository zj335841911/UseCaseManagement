import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { PickupGridViewBase } from '@/studio-core';
import BranchService from '@/service/branch/branch-service';
import BranchAuthService from '@/authservice/branch/branch-auth-service';
import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';
import BranchUIService from '@/uiservice/branch/branch-ui-service';

/**
 * 平台选择表格视图视图基类
 *
 * @export
 * @class BranchPickupGridViewBase
 * @extends {PickupGridViewBase}
 */
export class BranchPickupGridViewBase extends PickupGridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupGridViewBase
     */
    protected appDeName: string = 'branch';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupGridViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupGridViewBase
     */ 
    protected dataControl:string = "grid";

    /**
     * 实体服务对象
     *
     * @type {BranchService}
     * @memberof BranchPickupGridViewBase
     */
    protected appEntityService: BranchService = new BranchService;

    /**
     * 实体权限服务对象
     *
     * @type BranchUIService
     * @memberof BranchPickupGridViewBase
     */
    public appUIService: BranchUIService = new BranchUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BranchPickupGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.branch.views.pickupgridview.caption',
        srfTitle: 'entities.branch.views.pickupgridview.title',
        srfSubTitle: 'entities.branch.views.pickupgridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BranchPickupGridViewBase
     */
    protected containerModel: any = {
        view_grid: { name: 'grid', type: 'GRID' },
        view_searchform: { name: 'searchform', type: 'SEARCHFORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupGridViewBase
     */
	protected viewtag: string = 'fa64e271c22e6aaa89873d2556edf529';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupGridViewBase
     */ 
    protected viewName:string = "BranchPickupGridView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BranchPickupGridViewBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BranchPickupGridViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BranchPickupGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            searchform: this.$refs.searchform,
            keyPSDEField: 'branch',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupGridViewBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof BranchPickupGridViewBase
     */
    protected isExpandSearchForm: boolean = true;


}