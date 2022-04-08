import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeViewBase } from '@/studio-core';
import DocService from '@/service/doc/doc-service';
import DocAuthService from '@/authservice/doc/doc-auth-service';
import TreeViewEngine from '@engine/view/tree-view-engine';
import DocUIService from '@/uiservice/doc/doc-ui-service';

/**
 * 文档树视图视图基类
 *
 * @export
 * @class DocMoreMyFavouritesTreeViewBase
 * @extends {TreeViewBase}
 */
export class DocMoreMyFavouritesTreeViewBase extends TreeViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    protected appDeName: string = 'doc';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyFavouritesTreeViewBase
     */ 
    protected dataControl: string = 'tree';

    /**
     * 实体服务对象
     *
     * @type {DocService}
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    protected appEntityService: DocService = new DocService;

    /**
     * 实体权限服务对象
     *
     * @type DocUIService
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    public appUIService: DocUIService = new DocUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doc.views.moremyfavouritestreeview.caption',
        srfTitle: 'entities.doc.views.moremyfavouritestreeview.title',
        srfSubTitle: 'entities.doc.views.moremyfavouritestreeview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocMoreMyFavouritesTreeViewBase
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
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
	protected viewtag: string = '6e45dce2ca6fc6fe33d488f8fd03ed69';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyFavouritesTreeViewBase
     */ 
    protected viewName: string = 'DocMoreMyFavouritesTreeView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    public engine: TreeViewEngine = new TreeViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocMoreMyFavouritesTreeViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            tree: this.$refs.tree,
            keyPSDEField: 'doc',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    public tree_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'selectionchange', $event);
    }

    /**
     * tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocMoreMyFavouritesTreeViewBase
     */
    public tree_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'load', $event);
    }


}