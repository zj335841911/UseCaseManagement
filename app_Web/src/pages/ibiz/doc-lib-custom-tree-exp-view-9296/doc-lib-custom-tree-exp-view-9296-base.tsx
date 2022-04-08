import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibAuthService from '@/authservice/doc-lib/doc-lib-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * 文档库树导航视图（自定义文档库）视图基类
 *
 * @export
 * @class DocLibCustomTreeExpView_9296Base
 * @extends {TreeExpViewBase}
 */
export class DocLibCustomTreeExpView_9296Base extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    protected appEntityService: DocLibService = new DocLibService;

    /**
     * 实体权限服务对象
     *
     * @type DocLibUIService
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    protected model: any = {
        srfCaption: 'entities.doclib.views.customtreeexpview_9296.caption',
        srfTitle: 'entities.doclib.views.customtreeexpview_9296.title',
        srfSubTitle: 'entities.doclib.views.customtreeexpview_9296.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocLibCustomTreeExpView_9296Base
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
     * @memberof DocLibCustomTreeExpView_9296Base
     */
	protected viewtag: string = '905ab75396c304821d250f18e2fd6571';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibCustomTreeExpView_9296Base
     */ 
    protected viewName: string = 'DocLibCustomTreeExpView_9296';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocLibCustomTreeExpView_9296Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocLibCustomTreeExpView_9296Base
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
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibCustomTreeExpView_9296Base
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibCustomTreeExpView_9296Base
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
     * @memberof DocLibCustomTreeExpView_9296
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
     * @memberof DocLibCustomTreeExpView_9296
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof DocLibCustomTreeExpView_9296
     */
    public viewUID: string = 'ibiz-doc-lib-custom-tree-exp-view-9296';


}