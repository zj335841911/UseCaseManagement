import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeViewBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibAuthService from '@/authservice/doc-lib/doc-lib-auth-service';
import TreeViewEngine from '@engine/view/tree-view-engine';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * 文档库树视图视图基类
 *
 * @export
 * @class DocLibUsr2TreeViewBase
 * @extends {TreeViewBase}
 */
export class DocLibUsr2TreeViewBase extends TreeViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibUsr2TreeViewBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocLibUsr2TreeViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocLibUsr2TreeViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibUsr2TreeViewBase
     */ 
    protected dataControl: string = 'tree';

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibUsr2TreeViewBase
     */
    protected appEntityService: DocLibService = new DocLibService;

    /**
     * 实体权限服务对象
     *
     * @type DocLibUIService
     * @memberof DocLibUsr2TreeViewBase
     */
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocLibUsr2TreeViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doclib.views.usr2treeview.caption',
        srfTitle: 'entities.doclib.views.usr2treeview.title',
        srfSubTitle: 'entities.doclib.views.usr2treeview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocLibUsr2TreeViewBase
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
     * @memberof DocLibUsr2TreeViewBase
     */
	protected viewtag: string = '0647a85a1b2f6013ccb63143973c706c';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibUsr2TreeViewBase
     */ 
    protected viewName: string = 'DocLibUsr2TreeView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocLibUsr2TreeViewBase
     */
    public engine: TreeViewEngine = new TreeViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocLibUsr2TreeViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocLibUsr2TreeViewBase
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
     * @memberof DocLibUsr2TreeViewBase
     */
    public tree_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'selectionchange', $event);
    }

    /**
     * tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibUsr2TreeViewBase
     */
    public tree_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'load', $event);
    }


}