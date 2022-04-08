import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { ChartViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugAuthService from '@/authservice/bug/bug-auth-service';
import ChartViewEngine from '@engine/view/chart-view-engine';
import BugUIService from '@/uiservice/bug/bug-ui-service';

/**
 * Bug图表视图（解决Bug）视图基类
 *
 * @export
 * @class BugResolveChartViewBase
 * @extends {ChartViewBase}
 */
export class BugResolveChartViewBase extends ChartViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugResolveChartViewBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugResolveChartViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugResolveChartViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugResolveChartViewBase
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugResolveChartViewBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugResolveChartViewBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.resolvechartview.caption',
        srfTitle: 'entities.bug.views.resolvechartview.title',
        srfSubTitle: 'entities.bug.views.resolvechartview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugResolveChartViewBase
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
	protected viewtag: string = 'c862174c0f25d5077870c42115925fee';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugResolveChartViewBase
     */
    public engine: ChartViewEngine = new ChartViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BugResolveChartViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugResolveChartViewBase
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
     * @memberof BugResolveChartViewBase
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugResolveChartViewBase
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




}