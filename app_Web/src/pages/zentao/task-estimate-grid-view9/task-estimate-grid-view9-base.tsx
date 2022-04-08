
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridView9Base } from '@/studio-core';
import IBZTaskEstimateService from '@/service/ibztask-estimate/ibztask-estimate-service';
import IBZTaskEstimateAuthService from '@/authservice/ibztask-estimate/ibztask-estimate-auth-service';
import GridView9Engine from '@engine/view/grid-view9-engine';
import IBZTaskEstimateUIService from '@/uiservice/ibztask-estimate/ibztask-estimate-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 任务预计表格视图视图基类
 *
 * @export
 * @class TaskEstimateGridView9Base
 * @extends {GridView9Base}
 */
export class TaskEstimateGridView9Base extends GridView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateGridView9Base
     */
    protected appDeName: string = 'ibztaskestimate';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateGridView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateGridView9Base
     */
    protected appDeMajor: string = 'id';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateGridView9Base
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IBZTaskEstimateService}
     * @memberof TaskEstimateGridView9Base
     */
    protected appEntityService: IBZTaskEstimateService = new IBZTaskEstimateService;

    /**
     * 实体权限服务对象
     *
     * @type IBZTaskEstimateUIService
     * @memberof TaskEstimateGridView9Base
     */
    public appUIService: IBZTaskEstimateUIService = new IBZTaskEstimateUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskEstimateGridView9Base
     */
    protected model: any = {
        srfCaption: 'entities.ibztaskestimate.views.gridview9.caption',
        srfTitle: 'entities.ibztaskestimate.views.gridview9.title',
        srfSubTitle: 'entities.ibztaskestimate.views.gridview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskEstimateGridView9Base
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
     * @memberof TaskEstimateGridView9Base
     */
	protected viewtag: string = '214650149c1d7b82e6897e6915b0e2b5';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateGridView9Base
     */ 
    protected viewName: string = 'TaskEstimateGridView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskEstimateGridView9Base
     */
    public engine: GridView9Engine = new GridView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskEstimateGridView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskEstimateGridView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            opendata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.opendata(args, fullargs, params, $event, xData);
            },
            newdata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.newdata(args, fullargs, params, $event, xData);
            },
            grid: this.$refs.grid,
            keyPSDEField: 'ibztaskestimate',
            majorPSDEField: 'id',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridView9Base
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridView9Base
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridView9Base
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridView9Base
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateGridView9Base
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskEstimateGridView9
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskEstimateGridView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof TaskEstimateGridView9Base
     */
    protected isGridSingleSelect: boolean = true;

    /**
     * 表格行数据默认激活模式
     * 0 不激活
     * 1 单击激活
     * 2 双击激活
     *
     * @protected
     * @type {(0 | 1 | 2)}
     * @memberof TaskEstimateGridView9Base
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}