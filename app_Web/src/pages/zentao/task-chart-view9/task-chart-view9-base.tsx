import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { ChartView9Base } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import ChartView9Engine from '@engine/view/chart-view9-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务图表视图视图基类
 *
 * @export
 * @class TaskChartView9Base
 * @extends {ChartView9Base}
 */
export class TaskChartView9Base extends ChartView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskChartView9Base
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskChartView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskChartView9Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskChartView9Base
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskChartView9Base
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskChartView9Base
	 */
    protected customViewNavContexts: any = {
        'N_FINISHEDBY_EQ': { isRawValue: false, value: 'srfloginname' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskChartView9Base
	 */
    protected customViewParams: any = {
        'n_finishedby_eq': { isRawValue: false, value: 'srfloginname' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskChartView9Base
     */
    protected model: any = {
        srfCaption: 'entities.task.views.chartview9.caption',
        srfTitle: 'entities.task.views.chartview9.title',
        srfSubTitle: 'entities.task.views.chartview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskChartView9Base
     */
    protected containerModel: any = {
        view_chart: { name: 'chart', type: 'CHART' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'a250e5baa5d560a9fa660ba3f1bc9f51';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskChartView9Base
     */
    public engine: ChartView9Engine = new ChartView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskChartView9Base
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskChartView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskChartView9Base
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskChartView9Base
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




}