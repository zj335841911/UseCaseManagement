import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeViewBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibAuthService from '@/authservice/doc-lib/doc-lib-auth-service';
import TreeViewEngine from '@engine/view/tree-view-engine';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * 文档库树视图（产品）视图基类
 *
 * @export
 * @class DocLibProductTreeViewBase
 * @extends {TreeViewBase}
 */
export class DocLibProductTreeViewBase extends TreeViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewBase
     */ 
    protected dataControl: string = 'tree';

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibProductTreeViewBase
     */
    protected appEntityService: DocLibService = new DocLibService;

    /**
     * 实体权限服务对象
     *
     * @type DocLibUIService
     * @memberof DocLibProductTreeViewBase
     */
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof DocLibProductTreeViewBase
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
	 * @memberof DocLibProductTreeViewBase
	 */
    protected customViewParams: any = {
        'product': {
            isRawValue: false,
            value: 'srfparentkey',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocLibProductTreeViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doclib.views.producttreeview.caption',
        srfTitle: 'entities.doclib.views.producttreeview.title',
        srfSubTitle: 'entities.doclib.views.producttreeview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocLibProductTreeViewBase
     */
    protected containerModel: any = {
        view_tree: {
            name: 'tree',
            type: 'TREEVIEW',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewBase
     */
	protected viewtag: string = 'd38df3a0f4241bde77b4494cc4b6f897';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewBase
     */ 
    protected viewName: string = 'DocLibProductTreeView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocLibProductTreeViewBase
     */
    public engine: TreeViewEngine = new TreeViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocLibProductTreeViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocLibProductTreeViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            tree: this.$refs.tree,
            keyPSDEField: 'doclib',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductTreeViewBase
     */
    public tree_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'selectionchange', $event);
    }

    /**
     * tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductTreeViewBase
     */
    public tree_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'load', $event);
    }


}