import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { ChartView9Base } from '@/studio-core';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import UserYearWorkStatsAuthService from '@/authservice/user-year-work-stats/user-year-work-stats-auth-service';
import ChartView9Engine from '@engine/view/chart-view9-engine';
import UserYearWorkStatsUIService from '@/uiservice/user-year-work-stats/user-year-work-stats-ui-service';

/**
 * 用户年度工作内容统计图表视图（月完成任务和解决的Bug）视图基类
 *
 * @export
 * @class UserYearWorkStatsFinishTaskAndBugChartView9Base
 * @extends {ChartView9Base}
 */
export class UserYearWorkStatsFinishTaskAndBugChartView9Base extends ChartView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    protected appDeName: string = 'useryearworkstats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    protected appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService;

    /**
     * 实体权限服务对象
     *
     * @type UserYearWorkStatsUIService
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    public appUIService: UserYearWorkStatsUIService = new UserYearWorkStatsUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    protected model: any = {
        srfCaption: 'entities.useryearworkstats.views.finishtaskandbugchartview9.caption',
        srfTitle: 'entities.useryearworkstats.views.finishtaskandbugchartview9.title',
        srfSubTitle: 'entities.useryearworkstats.views.finishtaskandbugchartview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
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
	protected viewtag: string = '70d4072d3f73428c77959e942643ad0a';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    public engine: ChartView9Engine = new ChartView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'useryearworkstats',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserYearWorkStatsFinishTaskAndBugChartView9Base
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




}