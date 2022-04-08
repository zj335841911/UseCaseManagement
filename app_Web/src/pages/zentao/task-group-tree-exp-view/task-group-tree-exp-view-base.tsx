import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务树导航视图（分组树）视图基类
 *
 * @export
 * @class TaskGroupTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class TaskGroupTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskGroupTreeExpViewBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskGroupTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskGroupTreeExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskGroupTreeExpViewBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskGroupTreeExpViewBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof TaskGroupTreeExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskGroupTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.grouptreeexpview.caption',
        srfTitle: 'entities.task.views.grouptreeexpview.title',
        srfSubTitle: 'entities.task.views.grouptreeexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskGroupTreeExpViewBase
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
     * @memberof TaskGroupTreeExpViewBase
     */
	protected viewtag: string = '25ad13bec39a81629f26d442db44d424';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskGroupTreeExpViewBase
     */ 
    protected viewName: string = 'TaskGroupTreeExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskGroupTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskGroupTreeExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskGroupTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskGroupTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskGroupTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskGroupTreeExpViewBase
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
     * @memberof TaskGroupTreeExpView
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
     * @memberof TaskGroupTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof TaskGroupTreeExpView
     */
    public viewUID: string = 'zentao-task-group-tree-exp-view';


}