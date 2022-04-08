
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridView9Base } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import GridView9Engine from '@engine/view/grid-view9-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 任务表格视图（展示）视图基类
 *
 * @export
 * @class TaskZsGridView9WeekNextWeekPlanBase
 * @extends {GridView9Base}
 */
export class TaskZsGridView9WeekNextWeekPlanBase extends GridView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskZsGridView9WeekNextWeekPlanBase
	 */
    protected customViewParams: any = {
        'thisweektask': {
            isRawValue: false,
            value: 'thisweektask',
        },
        'size': {
            isRawValue: true,
            value: '100',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.zsgridview9weeknextweekplan.caption',
        srfTitle: 'entities.task.views.zsgridview9weeknextweekplan.title',
        srfSubTitle: 'entities.task.views.zsgridview9weeknextweekplan.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
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
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
	protected viewtag: string = '22d2c4b67575880b4481b855f652e1b3';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */ 
    protected viewName: string = 'TaskZsGridView9WeekNextWeekPlan';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    public engine: GridView9Engine = new GridView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
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
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
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
     * @memberof TaskZsGridView9WeekNextWeekPlan
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
     * @memberof TaskZsGridView9WeekNextWeekPlan
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
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
     * @memberof TaskZsGridView9WeekNextWeekPlanBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}