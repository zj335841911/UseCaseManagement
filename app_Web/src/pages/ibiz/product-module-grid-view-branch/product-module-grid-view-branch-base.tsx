
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridViewBase } from '@/studio-core';
import ProductModuleService from '@/service/product-module/product-module-service';
import ProductModuleAuthService from '@/authservice/product-module/product-module-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import ProductModuleUIService from '@/uiservice/product-module/product-module-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 产品模块表格视图视图基类
 *
 * @export
 * @class ProductModuleGridViewBranchBase
 * @extends {GridViewBase}
 */
export class ProductModuleGridViewBranchBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleGridViewBranchBase
     */
    protected appDeName: string = 'productmodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleGridViewBranchBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleGridViewBranchBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleGridViewBranchBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {ProductModuleService}
     * @memberof ProductModuleGridViewBranchBase
     */
    protected appEntityService: ProductModuleService = new ProductModuleService;

    /**
     * 实体权限服务对象
     *
     * @type ProductModuleUIService
     * @memberof ProductModuleGridViewBranchBase
     */
    public appUIService: ProductModuleUIService = new ProductModuleUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductModuleGridViewBranchBase
	 */
    protected customViewNavContexts: any = {
        'SRFPARENTKEY': {
            isRawValue: true,
            value: '0',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductModuleGridViewBranchBase
	 */
    protected customViewParams: any = {
        'product': {
            isRawValue: false,
            value: 'product',
        },
        'srfparentkey': {
            isRawValue: true,
            value: '0',
        },
        'moduletype': {
            isRawValue: false,
            value: 'moduletype',
        },
        'root': {
            isRawValue: false,
            value: 'product',
        },
        'branch': {
            isRawValue: false,
            value: 'branch',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleGridViewBranchBase
     */
    protected model: any = {
        srfCaption: 'entities.productmodule.views.gridviewbranch.caption',
        srfTitle: 'entities.productmodule.views.gridviewbranch.title',
        srfSubTitle: 'entities.productmodule.views.gridviewbranch.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleGridViewBranchBase
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
     * @memberof ProductModuleGridViewBranch
     */
    public toolBarModels: any = {
        deuiaction2: { name: 'deuiaction2', caption: 'entities.productmodule.gridviewbranchtoolbar_toolbar.deuiaction2.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.productmodule.gridviewbranchtoolbar_toolbar.deuiaction2.tip', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALCREATE', uiaction: { tag: 'NewRow', target: '', class: '' } },

        deuiaction3: { name: 'deuiaction3', caption: 'entities.productmodule.gridviewbranchtoolbar_toolbar.deuiaction3.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.productmodule.gridviewbranchtoolbar_toolbar.deuiaction3.tip', iconcls: 'fa fa-save', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALSAVE', uiaction: { tag: 'SaveRow', target: '', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleGridViewBranchBase
     */
	protected viewtag: string = '10d6cb2fc147ac7b82b684d94cfa6c9b';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleGridViewBranchBase
     */ 
    protected viewName: string = 'ProductModuleGridViewBranch';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductModuleGridViewBranchBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductModuleGridViewBranchBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductModuleGridViewBranchBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            keyPSDEField: 'productmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleGridViewBranchBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction2')) {
            this.toolbar_deuiaction2_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.toolbar_deuiaction3_click(null, '', $event2);
        }
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleGridViewBranchBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleGridViewBranchBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleGridViewBranchBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleGridViewBranchBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleGridViewBranchBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.grid;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.NewRow(datas, contextJO,paramJO,  $event, xData,this,"ProductModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.grid;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.SaveRow(datas, contextJO,paramJO,  $event, xData,this,"ProductModule");
    }

    /**
     * 新建行
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProductModuleGridViewBranchBase
     */
    public NewRow(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        const data: any = {};
        if (_this.hasOwnProperty('newRow') && _this.newRow instanceof Function) {
            _this.newRow([{ ...data }], params, $event, xData);
        } else if(xData.newRow && xData.newRow instanceof Function) {
            xData.newRow([{ ...data }], params, $event, xData);
        }else{
            _this.$Notice.error({ title: '错误', desc: 'newRow 视图处理逻辑不存在，请添加!' });
        }
    }
    /**
     * 保存行
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProductModuleGridViewBranchBase
     */
    public SaveRow(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        // 界面行为容器对象 _this
        const _this: any = this;
        if (xData && xData.save instanceof Function) {
            xData.save();
        } else if (_this.save && _this.save instanceof Function) {
            _this.save();
        }
    }

    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof ProductModuleGridViewBranchBase
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
     * @memberof ProductModuleGridViewBranchBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}