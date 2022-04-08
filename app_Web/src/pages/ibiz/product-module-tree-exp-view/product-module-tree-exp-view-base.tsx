import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import ProductModuleService from '@/service/product-module/product-module-service';
import ProductModuleAuthService from '@/authservice/product-module/product-module-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import ProductModuleUIService from '@/uiservice/product-module/product-module-ui-service';

/**
 * 需求模块树导航视图视图基类
 *
 * @export
 * @class ProductModuleTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class ProductModuleTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleTreeExpViewBase
     */
    protected appDeName: string = 'productmodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleTreeExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductModuleService}
     * @memberof ProductModuleTreeExpViewBase
     */
    protected appEntityService: ProductModuleService = new ProductModuleService;

    /**
     * 实体权限服务对象
     *
     * @type ProductModuleUIService
     * @memberof ProductModuleTreeExpViewBase
     */
    public appUIService: ProductModuleUIService = new ProductModuleUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductModuleTreeExpViewBase
	 */
    protected customViewNavContexts: any = {
        'MODULETYPE': {
            isRawValue: true,
            value: 'story',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof ProductModuleTreeExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.productmodule.views.treeexpview.caption',
        srfTitle: 'entities.productmodule.views.treeexpview.title',
        srfSubTitle: 'entities.productmodule.views.treeexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: {
            name: 'treeexpbar',
            type: 'TREEEXPBAR',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductModuleTreeExpView
     */
    public treeexpviewtreeexpbar_toolbarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: 'entities.productmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction1.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.productmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction1.tip', iconcls: 'fa fa-wrench', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'Fix', target: 'NONE', class: '' } },

        deuiaction2: { name: 'deuiaction2', caption: 'entities.productmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction2.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.productmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction2.tip', iconcls: 'fa fa-refresh', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'RefreshAll', target: '', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleTreeExpViewBase
     */
	protected viewtag: string = '91d3e67caa36efe3f59590d8531a7e0b';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleTreeExpViewBase
     */ 
    protected viewName: string = 'ProductModuleTreeExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductModuleTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductModuleTreeExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductModuleTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'productmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleTreeExpViewBase
     */
    public treeexpbar_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductModuleTreeExpView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductModuleTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof ProductModuleTreeExpView
     */
    public viewUID: string = 'ibiz-product-module-tree-exp-view';


}