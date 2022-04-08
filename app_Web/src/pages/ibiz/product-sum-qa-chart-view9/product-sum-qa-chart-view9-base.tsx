import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { ChartView9Base } from '@/studio-core';
import ProductSumService from '@/service/product-sum/product-sum-service';
import ProductSumAuthService from '@/authservice/product-sum/product-sum-auth-service';
import ChartView9Engine from '@engine/view/chart-view9-engine';
import ProductSumUIService from '@/uiservice/product-sum/product-sum-ui-service';

/**
 * 产品汇总表图表视图视图基类
 *
 * @export
 * @class ProductSumQaChartView9Base
 * @extends {ChartView9Base}
 */
export class ProductSumQaChartView9Base extends ChartView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductSumQaChartView9Base
     */
    protected appDeName: string = 'productsum';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductSumQaChartView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductSumQaChartView9Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductSumService}
     * @memberof ProductSumQaChartView9Base
     */
    protected appEntityService: ProductSumService = new ProductSumService;

    /**
     * 实体权限服务对象
     *
     * @type ProductSumUIService
     * @memberof ProductSumQaChartView9Base
     */
    public appUIService: ProductSumUIService = new ProductSumUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductSumQaChartView9Base
	 */
    protected customViewNavContexts: any = {
        'CURYEAR': {
            isRawValue: false,
            value: 'curyear',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductSumQaChartView9Base
	 */
    protected customViewParams: any = {
        'curyear': {
            isRawValue: false,
            value: 'curyear',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductSumQaChartView9Base
     */
    protected model: any = {
        srfCaption: 'entities.productsum.views.qachartview9.caption',
        srfTitle: 'entities.productsum.views.qachartview9.title',
        srfSubTitle: 'entities.productsum.views.qachartview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductSumQaChartView9Base
     */
    protected containerModel: any = {
        view_chart: {
            name: 'chart',
            type: 'CHART',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProductSumQaChartView9Base
     */
	protected viewtag: string = '2e1e24a39d1f1969f411b507d49fc640';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductSumQaChartView9Base
     */ 
    protected viewName: string = 'ProductSumQaChartView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductSumQaChartView9Base
     */
    public engine: ChartView9Engine = new ChartView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductSumQaChartView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductSumQaChartView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'productsum',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductSumQaChartView9Base
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductSumQaChartView9Base
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




}