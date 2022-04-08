import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibAuthService from '@/authservice/doc-lib/doc-lib-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * 文档库树导航视图（产品下属）视图基类
 *
 * @export
 * @class DocLibByProductTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class DocLibByProductTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibByProductTreeExpViewBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocLibByProductTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocLibByProductTreeExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibByProductTreeExpViewBase
     */
    protected appEntityService: DocLibService = new DocLibService;

    /**
     * 实体权限服务对象
     *
     * @type DocLibUIService
     * @memberof DocLibByProductTreeExpViewBase
     */
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof DocLibByProductTreeExpViewBase
	 */
    protected customViewNavContexts: any = {
        'PRODUCT': {
            isRawValue: false,
            value: 'srfparentkey',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof DocLibByProductTreeExpViewBase
	 */
    protected customViewParams: any = {
        'product': {
            isRawValue: false,
            value: 'srfparentkey',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof DocLibByProductTreeExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocLibByProductTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doclib.views.byproducttreeexpview.caption',
        srfTitle: 'entities.doclib.views.byproducttreeexpview.title',
        srfSubTitle: 'entities.doclib.views.byproducttreeexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocLibByProductTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: {
            name: 'treeexpbar',
            type: 'TREEEXPBAR',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof DocLibByProductTreeExpViewBase
     */
	protected viewtag: string = 'f1d15d6af90bb0d83c07c6dca5b4d61e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibByProductTreeExpViewBase
     */ 
    protected viewName: string = 'DocLibByProductTreeExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocLibByProductTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocLibByProductTreeExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocLibByProductTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'doclib',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibByProductTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibByProductTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibByProductTreeExpViewBase
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
     * @memberof DocLibByProductTreeExpView
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
     * @memberof DocLibByProductTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof DocLibByProductTreeExpView
     */
    public viewUID: string = 'ibiz-doc-lib-by-product-tree-exp-view';


}