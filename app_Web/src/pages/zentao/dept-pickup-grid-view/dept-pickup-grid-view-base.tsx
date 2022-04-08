import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { PickupGridViewBase } from '@/studio-core';
import DeptService from '@/service/dept/dept-service';
import DeptAuthService from '@/authservice/dept/dept-auth-service';
import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';
import DeptUIService from '@/uiservice/dept/dept-ui-service';

/**
 * 部门选择表格视图视图基类
 *
 * @export
 * @class DeptPickupGridViewBase
 * @extends {PickupGridViewBase}
 */
export class DeptPickupGridViewBase extends PickupGridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DeptPickupGridViewBase
     */
    protected appDeName: string = 'dept';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DeptPickupGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DeptPickupGridViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DeptPickupGridViewBase
     */ 
    protected dataControl:string = "grid";

    /**
     * 实体服务对象
     *
     * @type {DeptService}
     * @memberof DeptPickupGridViewBase
     */
    protected appEntityService: DeptService = new DeptService;

    /**
     * 实体权限服务对象
     *
     * @type DeptUIService
     * @memberof DeptPickupGridViewBase
     */
    public appUIService: DeptUIService = new DeptUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DeptPickupGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.dept.views.pickupgridview.caption',
        srfTitle: 'entities.dept.views.pickupgridview.title',
        srfSubTitle: 'entities.dept.views.pickupgridview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DeptPickupGridViewBase
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
     * @memberof DeptPickupGridViewBase
     */
	protected viewtag: string = 'e644f7976b08c3d7f14fd7e1d5329da8';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DeptPickupGridViewBase
     */ 
    protected viewName:string = "DeptPickupGridView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DeptPickupGridViewBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DeptPickupGridViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DeptPickupGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            searchform: this.$refs.searchform,
            keyPSDEField: 'dept',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupGridViewBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof DeptPickupGridViewBase
     */
    protected isExpandSearchForm: boolean = true;


}