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
 * @class ProductSumPoChartView9Base
 * @extends {ChartView9Base}
 */
export class ProductSumPoChartView9Base extends ChartView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductSumPoChartView9Base
     */
    protected appDeName: string = 'productsum';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductSumPoChartView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductSumPoChartView9Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductSumService}
     * @memberof ProductSumPoChartView9Base
     */
    protected appEntityService: ProductSumService = new ProductSumService;

    /**
     * 实体权限服务对象
     *
     * @type ProductSumUIService
     * @memberof ProductSumPoChartView9Base
     */
    public appUIService: ProductSumUIService = new ProductSumUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductSumPoChartView9Base
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
	 * @memberof ProductSumPoChartView9Base
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
     * @memberof ProductSumPoChartView9Base
     */
    protected model: any = {
        srfCaption: 'entities.productsum.views.pochartview9.caption',
        srfTitle: 'entities.productsum.views.pochartview9.title',
        srfSubTitle: 'entities.productsum.views.pochartview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductSumPoChartView9Base
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
     * @memberof ProductSumPoChartView9Base
     */
	protected viewtag: string = '0f46f0ff90c7191fa3d01a2c6989a4ca';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductSumPoChartView9Base
     */ 
    protected viewName: string = 'ProductSumPoChartView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductSumPoChartView9Base
     */
    public engine: ChartView9Engine = new ChartView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductSumPoChartView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductSumPoChartView9Base
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
     * @memberof ProductSumPoChartView9Base
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductSumPoChartView9Base
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




}