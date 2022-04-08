import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { ChartViewBase } from '@/studio-core';
import BurnService from '@/service/burn/burn-service';
import BurnAuthService from '@/authservice/burn/burn-auth-service';
import ChartViewEngine from '@engine/view/chart-view-engine';
import BurnUIService from '@/uiservice/burn/burn-ui-service';

/**
 * 燃尽图视图基类
 *
 * @export
 * @class BurnChartViewBase
 * @extends {ChartViewBase}
 */
export class BurnChartViewBase extends ChartViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BurnChartViewBase
     */
    protected appDeName: string = 'burn';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BurnChartViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BurnChartViewBase
     */
    protected appDeMajor: string = 'date';

    /**
     * 实体服务对象
     *
     * @type {BurnService}
     * @memberof BurnChartViewBase
     */
    protected appEntityService: BurnService = new BurnService;

    /**
     * 实体权限服务对象
     *
     * @type BurnUIService
     * @memberof BurnChartViewBase
     */
    public appUIService: BurnUIService = new BurnUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BurnChartViewBase
     */
    protected model: any = {
        srfCaption: 'entities.burn.views.chartview.caption',
        srfTitle: 'entities.burn.views.chartview.title',
        srfSubTitle: 'entities.burn.views.chartview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BurnChartViewBase
     */
    protected containerModel: any = {
        view_quicksearchform: {
            name: 'quicksearchform',
            type: 'SEARCHFORM',
        },
        view_toolbar: {
            name: 'toolbar',
            type: 'TOOLBAR',
        },
        view_chart: {
            name: 'chart',
            type: 'CHART',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof BurnChartView
     */
    public toolBarModels: any = {
        deuiaction1_computeburn: { name: 'deuiaction1_computeburn', caption: 'entities.burn.chartviewtoolbar_toolbar.deuiaction1_computeburn.caption', 'isShowCaption': false, 'isShowIcon': true, tooltip: 'entities.burn.chartviewtoolbar_toolbar.deuiaction1_computeburn.tip', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'ComputeBurn', target: 'SINGLEKEY', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof BurnChartViewBase
     */
	protected viewtag: string = 'bba3204a7f64b5eafe512a6b63658910';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BurnChartViewBase
     */ 
    protected viewName: string = 'BurnChartView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BurnChartViewBase
     */
    public engine: ChartViewEngine = new ChartViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BurnChartViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BurnChartViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'burn',
            majorPSDEField: 'date',
            isLoadDefault: false,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BurnChartViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1_computeburn')) {
            this.toolbar_deuiaction1_computeburn_click(null, '', $event2);
        }
    }

    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BurnChartViewBase
     */
    public chart_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }

    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BurnChartViewBase
     */
    public chart_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_computeburn_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:BurnUIService  = new BurnUIService();
        curUIService.Burn_ComputeBurn(datas,contextJO, paramJO,  $event, xData,this,"Burn");
    }



    /**
     * 是否启用快速分组
     *
     * @type {boolean}
     * @memberof BurnChartViewBase
     */
    public isEnableQuickGroup: boolean = true;

    /**
     * 快速分组代码表标识
     *
     * @type {boolean}
     * @memberof BurnChartViewBase
     */
    public quickGroupCodelistTag: string = "";

    /**
     * 加载快速分组模型
     *
     * @protected
     * @memberof BurnChartViewBase
     */
    protected loadQuickGroupModel(): void {
        const quickGroupCodeList: any = { tag: 'BurnQuickpacket', codelistType: 'STATIC' };
        this.quickGroupCodelistTag = quickGroupCodeList.tag ? quickGroupCodeList.tag : "";
        if(quickGroupCodeList.tag && Object.is(quickGroupCodeList.codelistType, "STATIC")) {
            const codelist = this.$store.getters.getCodeList(quickGroupCodeList.tag);
            if (codelist) {
                this.quickGroupModel = [...this.handleDynamicData(JSON.parse(JSON.stringify(codelist.items)))];
            } else {
                console.log(`----${quickGroupCodeList.tag}----代码表不存在`);
            }
        } else if(quickGroupCodeList.tag && Object.is(quickGroupCodeList.codelistType, "DYNAMIC")) {
            this.codeListService.getItems(quickGroupCodeList.tag, {}, {}).then((res: any) => {
                this.quickGroupModel = res;
            }).catch((error:any) => {
                console.log(`----${quickGroupCodeList.tag}----代码表不存在`);
            });
        }
    }


}