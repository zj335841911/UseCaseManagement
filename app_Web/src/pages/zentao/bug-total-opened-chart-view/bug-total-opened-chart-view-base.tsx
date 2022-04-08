import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { ChartViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugAuthService from '@/authservice/bug/bug-auth-service';
import ChartViewEngine from '@engine/view/chart-view-engine';
import BugUIService from '@/uiservice/bug/bug-ui-service';

/**
 * Bug图表视图（累计创建Bug）视图基类
 *
 * @export
 * @class BugTotalOpenedChartViewBase
 * @extends {ChartViewBase}
 */
export class BugTotalOpenedChartViewBase extends ChartViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugTotalOpenedChartViewBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugTotalOpenedChartViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugTotalOpenedChartViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugTotalOpenedChartViewBase
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugTotalOpenedChartViewBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugTotalOpenedChartViewBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.totalopenedchartview.caption',
        srfTitle: 'entities.bug.views.totalopenedchartview.title',
        srfSubTitle: 'entities.bug.views.totalopenedchartview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugTotalOpenedChartViewBase
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
	protected viewtag: string = 'db5a77bee9407127a5f28f7fa183270b';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugTotalOpenedChartViewBase
     */
    public engine: ChartViewEngine = new ChartViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BugTotalOpenedChartViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugTotalOpenedChartViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugTotalOpenedChartViewBase
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugTotalOpenedChartViewBase
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




}