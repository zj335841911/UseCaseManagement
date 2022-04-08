import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeViewBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibAuthService from '@/authservice/doc-lib/doc-lib-auth-service';
import TreeViewEngine from '@engine/view/tree-view-engine';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * 文档库树视图（自定义文档库）视图基类
 *
 * @export
 * @class DocLibProductTreeViewCustBase
 * @extends {TreeViewBase}
 */
export class DocLibProductTreeViewCustBase extends TreeViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewCustBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewCustBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewCustBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewCustBase
     */ 
    protected dataControl: string = 'tree';

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibProductTreeViewCustBase
     */
    protected appEntityService: DocLibService = new DocLibService;

    /**
     * 实体权限服务对象
     *
     * @type DocLibUIService
     * @memberof DocLibProductTreeViewCustBase
     */
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocLibProductTreeViewCustBase
     */
    protected model: any = {
        srfCaption: 'entities.doclib.views.producttreeviewcust.caption',
        srfTitle: 'entities.doclib.views.producttreeviewcust.title',
        srfSubTitle: 'entities.doclib.views.producttreeviewcust.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocLibProductTreeViewCustBase
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
     * @memberof DocLibProductTreeViewCustBase
     */
	protected viewtag: string = '10ebe725710cbb64664e755952f2c0ba';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibProductTreeViewCustBase
     */ 
    protected viewName: string = 'DocLibProductTreeViewCust';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocLibProductTreeViewCustBase
     */
    public engine: TreeViewEngine = new TreeViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocLibProductTreeViewCustBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocLibProductTreeViewCustBase
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
     * @memberof DocLibProductTreeViewCustBase
     */
    public tree_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'selectionchange', $event);
    }

    /**
     * tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProductTreeViewCustBase
     */
    public tree_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'load', $event);
    }


}