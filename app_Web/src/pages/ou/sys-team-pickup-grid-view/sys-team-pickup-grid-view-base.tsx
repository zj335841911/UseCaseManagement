import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { PickupGridViewBase } from '@/studio-core';
import SysTeamService from '@/service/sys-team/sys-team-service';
import SysTeamAuthService from '@/authservice/sys-team/sys-team-auth-service';
import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';
import SysTeamUIService from '@/uiservice/sys-team/sys-team-ui-service';

/**
 * 组选择表格视图视图基类
 *
 * @export
 * @class SysTeamPickupGridViewBase
 * @extends {PickupGridViewBase}
 */
export class SysTeamPickupGridViewBase extends PickupGridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupGridViewBase
     */
    protected appDeName: string = 'systeam';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupGridViewBase
     */
    protected appDeKey: string = 'teamid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupGridViewBase
     */
    protected appDeMajor: string = 'teamname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {SysTeamService}
     * @memberof SysTeamPickupGridViewBase
     */
    protected appEntityService: SysTeamService = new SysTeamService;

    /**
     * 实体权限服务对象
     *
     * @type SysTeamUIService
     * @memberof SysTeamPickupGridViewBase
     */
    public appUIService: SysTeamUIService = new SysTeamUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysTeamPickupGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.systeam.views.pickupgridview.caption',
        srfTitle: 'entities.systeam.views.pickupgridview.title',
        srfSubTitle: 'entities.systeam.views.pickupgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysTeamPickupGridViewBase
     */
    protected containerModel: any = {
        view_grid: {
            name: 'grid',
            type: 'GRID',
        },
        view_searchform: {
            name: 'searchform',
            type: 'SEARCHFORM',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupGridViewBase
     */
	protected viewtag: string = 'e5b14957778e46c8fe25aee22fe0fba8';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupGridViewBase
     */ 
    protected viewName: string = 'SysTeamPickupGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysTeamPickupGridViewBase
     */
    public engine: PickupGridViewEngine = new PickupGridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysTeamPickupGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysTeamPickupGridViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            searchform: this.$refs.searchform,
            keyPSDEField: 'systeam',
            majorPSDEField: 'teamname',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupGridViewBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }



    /**
     * 是否展开搜索表单
     *
     * @protected
     * @type {boolean}
     * @memberof SysTeamPickupGridViewBase
     */
    protected isExpandSearchForm: boolean = true;


}