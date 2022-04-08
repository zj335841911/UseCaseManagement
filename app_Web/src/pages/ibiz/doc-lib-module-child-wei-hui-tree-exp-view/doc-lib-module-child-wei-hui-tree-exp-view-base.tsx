import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import DocLibModuleService from '@/service/doc-lib-module/doc-lib-module-service';
import DocLibModuleAuthService from '@/authservice/doc-lib-module/doc-lib-module-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import DocLibModuleUIService from '@/uiservice/doc-lib-module/doc-lib-module-ui-service';

/**
 * 文档库分类树导航视图视图基类
 *
 * @export
 * @class DocLibModuleChildWeiHuiTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class DocLibModuleChildWeiHuiTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    protected appDeName: string = 'doclibmodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {DocLibModuleService}
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    protected appEntityService: DocLibModuleService = new DocLibModuleService;

    /**
     * 实体权限服务对象
     *
     * @type DocLibModuleUIService
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    public appUIService: DocLibModuleUIService = new DocLibModuleUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
	 */
    protected customViewNavContexts: any = {
        'MODULETYPE': {
            isRawValue: true,
            value: 'doc',
        },
        'SRFROOT': {
            isRawValue: false,
            value: 'srfroot',
        },
        'SRFPARENT': {
            isRawValue: false,
            value: 'srfparent',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doclibmodule.views.childweihuitreeexpview.caption',
        srfTitle: 'entities.doclibmodule.views.childweihuitreeexpview.title',
        srfSubTitle: 'entities.doclibmodule.views.childweihuitreeexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
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
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
	protected viewtag: string = '864b0541f7ef09dabcaed9cff697b5a9';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */ 
    protected viewName: string = 'DocLibModuleChildWeiHuiTreeExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'doclibmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibModuleChildWeiHuiTreeExpViewBase
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
     * @memberof DocLibModuleChildWeiHuiTreeExpView
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
     * @memberof DocLibModuleChildWeiHuiTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof DocLibModuleChildWeiHuiTreeExpView
     */
    public viewUID: string = 'ibiz-doc-lib-module-child-wei-hui-tree-exp-view';


}