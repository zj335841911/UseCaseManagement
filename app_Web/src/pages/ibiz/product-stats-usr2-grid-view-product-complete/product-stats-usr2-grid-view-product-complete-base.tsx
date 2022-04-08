
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridViewBase } from '@/studio-core';
import ProductStatsService from '@/service/product-stats/product-stats-service';
import ProductStatsAuthService from '@/authservice/product-stats/product-stats-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import ProductStatsUIService from '@/uiservice/product-stats/product-stats-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 产品统计表格视图视图基类
 *
 * @export
 * @class ProductStatsUsr2GridViewPRoductCompleteBase
 * @extends {GridViewBase}
 */
export class ProductStatsUsr2GridViewPRoductCompleteBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    protected appDeName: string = 'productstats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    protected appEntityService: ProductStatsService = new ProductStatsService;

    /**
     * 实体权限服务对象
     *
     * @type ProductStatsUIService
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    public appUIService: ProductStatsUIService = new ProductStatsUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    protected model: any = {
        srfCaption: 'entities.productstats.views.usr2gridviewproductcomplete.caption',
        srfTitle: 'entities.productstats.views.usr2gridviewproductcomplete.title',
        srfSubTitle: 'entities.productstats.views.usr2gridviewproductcomplete.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    protected containerModel: any = {
        view_toolbar: {
            name: 'toolbar',
            type: 'TOOLBAR',
        },
        view_grid: {
            name: 'grid',
            type: 'GRID',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductStatsUsr2GridViewPRoductComplete
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
	protected viewtag: string = '447e12e8af1b4093ba48f74d18d71c08';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */ 
    protected viewName: string = 'ProductStatsUsr2GridViewPRoductComplete';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
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
            keyPSDEField: 'productstats',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
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
     * @memberof ProductStatsUsr2GridViewPRoductComplete
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        if(args[0].srfsourcekey){
            data.srfsourcekey = args[0].srfsourcekey;
        }
        if(fullargs && (fullargs as any).copymode) {
            Object.assign(data, { copymode: (fullargs as any).copymode });
        }
        let tempContext = JSON.parse(JSON.stringify(this.context));
        delete tempContext.productstats;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'productstats', parameterName: 'productstats' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const _data: any = { w: (new Date().getTime()) };
            Object.assign(_data, data);
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, _data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductStatsUsr2GridViewPRoductComplete
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'productstats', parameterName: 'productstats' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof ProductStatsUsr2GridViewPRoductCompleteBase
     */
    protected isGridSingleSelect: boolean = true;
}