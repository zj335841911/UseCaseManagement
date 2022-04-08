import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { ChartView9Base } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryAuthService from '@/authservice/story/story-auth-service';
import ChartView9Engine from '@engine/view/chart-view9-engine';
import StoryUIService from '@/uiservice/story/story-ui-service';

/**
 * 需求图表视图（累计创建需求-阶段）视图基类
 *
 * @export
 * @class StoryStageChartView9Base
 * @extends {ChartView9Base}
 */
export class StoryStageChartView9Base extends ChartView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryStageChartView9Base
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof StoryStageChartView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof StoryStageChartView9Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryStageChartView9Base
     */
    protected appEntityService: StoryService = new StoryService;

    /**
     * 实体权限服务对象
     *
     * @type StoryUIService
     * @memberof StoryStageChartView9Base
     */
    public appUIService: StoryUIService = new StoryUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof StoryStageChartView9Base
     */
    protected model: any = {
        srfCaption: 'entities.story.views.stagechartview9.caption',
        srfTitle: 'entities.story.views.stagechartview9.title',
        srfSubTitle: 'entities.story.views.stagechartview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof StoryStageChartView9Base
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
	protected viewtag: string = 'c625d6f8de3cb53021bb8d3064ac7863';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof StoryStageChartView9Base
     */
    public engine: ChartView9Engine = new ChartView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof StoryStageChartView9Base
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof StoryStageChartView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryStageChartView9Base
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryStageChartView9Base
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




}