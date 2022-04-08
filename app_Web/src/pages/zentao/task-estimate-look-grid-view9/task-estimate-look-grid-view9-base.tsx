
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridView9Base } from '@/studio-core';
import TaskEstimateService from '@/service/task-estimate/task-estimate-service';
import TaskEstimateAuthService from '@/authservice/task-estimate/task-estimate-auth-service';
import GridView9Engine from '@engine/view/grid-view9-engine';
import TaskEstimateUIService from '@/uiservice/task-estimate/task-estimate-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 任务预计表格视图视图基类
 *
 * @export
 * @class TaskEstimateLookGridView9Base
 * @extends {GridView9Base}
 */
export class TaskEstimateLookGridView9Base extends GridView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateLookGridView9Base
     */
    protected appDeName: string = 'taskestimate';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateLookGridView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateLookGridView9Base
     */
    protected appDeMajor: string = 'id';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateLookGridView9Base
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {TaskEstimateService}
     * @memberof TaskEstimateLookGridView9Base
     */
    protected appEntityService: TaskEstimateService = new TaskEstimateService;

    /**
     * 实体权限服务对象
     *
     * @type TaskEstimateUIService
     * @memberof TaskEstimateLookGridView9Base
     */
    public appUIService: TaskEstimateUIService = new TaskEstimateUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskEstimateLookGridView9Base
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'task',
        },
        'SRFPARENTKEY': {
            isRawValue: false,
            value: 'task',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskEstimateLookGridView9Base
     */
    protected model: any = {
        srfCaption: 'entities.taskestimate.views.lookgridview9.caption',
        srfTitle: 'entities.taskestimate.views.lookgridview9.title',
        srfSubTitle: 'entities.taskestimate.views.lookgridview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskEstimateLookGridView9Base
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
     * @memberof TaskEstimateLookGridView9Base
     */
	protected viewtag: string = '53ea134a9cd9328191b62e355f47c173';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskEstimateLookGridView9Base
     */ 
    protected viewName: string = 'TaskEstimateLookGridView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskEstimateLookGridView9Base
     */
    public engine: GridView9Engine = new GridView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskEstimateLookGridView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskEstimateLookGridView9Base
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
            keyPSDEField: 'taskestimate',
            majorPSDEField: 'id',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateLookGridView9Base
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateLookGridView9Base
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateLookGridView9Base
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateLookGridView9Base
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskEstimateLookGridView9Base
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
     * @memberof TaskEstimateLookGridView9
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
     * @memberof TaskEstimateLookGridView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof TaskEstimateLookGridView9Base
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
     * @memberof TaskEstimateLookGridView9Base
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}