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
 * @class DocMoreMyDocTreeViewBase
 * @extends {TreeViewBase}
 */
export class DocMoreMyDocTreeViewBase extends TreeViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyDocTreeViewBase
     */
    protected appDeName: string = 'doc';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyDocTreeViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyDocTreeViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyDocTreeViewBase
     */ 
    protected dataControl: string = 'tree';

    /**
     * 实体服务对象
     *
     * @type {DocService}
     * @memberof DocMoreMyDocTreeViewBase
     */
    protected appEntityService: DocService = new DocService;

    /**
     * 实体权限服务对象
     *
     * @type DocUIService
     * @memberof DocMoreMyDocTreeViewBase
     */
    public appUIService: DocUIService = new DocUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof DocMoreMyDocTreeViewBase
	 */
    protected customViewParams: any = {
        'n_addedby_eq': {
            isRawValue: false,
            value: 'srfloginname',
        },
        'parent': {
            isRawValue: true,
            value: '0',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocMoreMyDocTreeViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doc.views.moremydoctreeview.caption',
        srfTitle: 'entities.doc.views.moremydoctreeview.title',
        srfSubTitle: 'entities.doc.views.moremydoctreeview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocMoreMyDocTreeViewBase
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
     * @memberof DocMoreMyDocTreeViewBase
     */
	protected viewtag: string = 'd5f2e9a6f7a981823a3327cba1c0b9d4';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocMoreMyDocTreeViewBase
     */ 
    protected viewName: string = 'DocMoreMyDocTreeView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocMoreMyDocTreeViewBase
     */
    public engine: TreeViewEngine = new TreeViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocMoreMyDocTreeViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocMoreMyDocTreeViewBase
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
     * @memberof DocMoreMyDocTreeViewBase
     */
    public tree_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'selectionchange', $event);
    }

    /**
     * tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocMoreMyDocTreeViewBase
     */
    public tree_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('tree', 'load', $event);
    }


}