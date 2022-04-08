
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridView9Base } from '@/studio-core';
import TaskTeamService from '@/service/task-team/task-team-service';
import TaskTeamAuthService from '@/authservice/task-team/task-team-auth-service';
import GridView9Engine from '@engine/view/grid-view9-engine';
import TaskTeamUIService from '@/uiservice/task-team/task-team-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 团队视图基类
 *
 * @export
 * @class TaskTeamGridView9_LookBase
 * @extends {GridView9Base}
 */
export class TaskTeamGridView9_LookBase extends GridView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9_LookBase
     */
    protected appDeName: string = 'taskteam';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9_LookBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9_LookBase
     */
    protected appDeMajor: string = 'account';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9_LookBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {TaskTeamService}
     * @memberof TaskTeamGridView9_LookBase
     */
    protected appEntityService: TaskTeamService = new TaskTeamService;

    /**
     * 实体权限服务对象
     *
     * @type TaskTeamUIService
     * @memberof TaskTeamGridView9_LookBase
     */
    public appUIService: TaskTeamUIService = new TaskTeamUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskTeamGridView9_LookBase
     */
    protected model: any = {
        srfCaption: 'entities.taskteam.views.gridview9_look.caption',
        srfTitle: 'entities.taskteam.views.gridview9_look.title',
        srfSubTitle: 'entities.taskteam.views.gridview9_look.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskTeamGridView9_LookBase
     */
    protected containerModel: any = {
        view_grid: {
            name: 'grid',
            type: 'GRID',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9_LookBase
     */
	protected viewtag: string = '9d6b43cf5d65cb414cbccc84237178b7';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTeamGridView9_LookBase
     */ 
    protected viewName: string = 'TaskTeamGridView9_Look';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskTeamGridView9_LookBase
     */
    public engine: GridView9Engine = new GridView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskTeamGridView9_LookBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskTeamGridView9_LookBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            opendata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.opendata(args, fullargs, params, $event, xData);
            },
            newdata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.newdata(args, fullargs, params, $event, xData);
            },
            grid: this.$refs.grid,
            keyPSDEField: 'taskteam',
            majorPSDEField: 'account',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9_LookBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9_LookBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9_LookBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9_LookBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamGridView9_LookBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskTeamGridView9_Look
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
     * @memberof TaskTeamGridView9_Look
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof TaskTeamGridView9_LookBase
     */
    protected isGridSingleSelect: boolean = true;

    /**
     * 表格行数据默认激活模式
     * 0 不激活
     * 1 单击激活
     * 2 双击激活
     *
     * @protected
     * @type {(0 | 1 | 2)}
     * @memberof TaskTeamGridView9_LookBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}