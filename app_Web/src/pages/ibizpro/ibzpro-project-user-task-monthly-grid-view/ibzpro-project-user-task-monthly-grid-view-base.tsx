
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridViewBase } from '@/studio-core';
import IbzproProjectUserTaskService from '@/service/ibzpro-project-user-task/ibzpro-project-user-task-service';
import IbzproProjectUserTaskAuthService from '@/authservice/ibzpro-project-user-task/ibzpro-project-user-task-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import IbzproProjectUserTaskUIService from '@/uiservice/ibzpro-project-user-task/ibzpro-project-user-task-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 项目汇报用户任务表格视图视图基类
 *
 * @export
 * @class IbzproProjectUserTaskMonthlyGridViewBase
 * @extends {GridViewBase}
 */
export class IbzproProjectUserTaskMonthlyGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    protected appDeName: string = 'ibzproprojectusertask';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    protected appDeMajor: string = 'id';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IbzproProjectUserTaskService}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    protected appEntityService: IbzproProjectUserTaskService = new IbzproProjectUserTaskService;

    /**
     * 实体权限服务对象
     *
     * @type IbzproProjectUserTaskUIService
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    public appUIService: IbzproProjectUserTaskUIService = new IbzproProjectUserTaskUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzproprojectusertask.views.monthlygridview.caption',
        srfTitle: 'entities.ibzproprojectusertask.views.monthlygridview.title',
        srfSubTitle: 'entities.ibzproprojectusertask.views.monthlygridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
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
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
	protected viewtag: string = '24ce025eb657fc73083eae8a15f9ad32';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */ 
    protected viewName: string = 'IbzproProjectUserTaskMonthlyGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
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
            keyPSDEField: 'ibzproprojectusertask',
            majorPSDEField: 'id',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
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
     * @memberof IbzproProjectUserTaskMonthlyGridView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        if(args[0].srfsourcekey){
            data.srfsourcekey = args[0].srfsourcekey;
        }
        if(fullargs && (fullargs as any).copymode) {
            Object.assign(data, { copymode: (fullargs as any).copymode });
        }
        let tempContext = JSON.parse(JSON.stringify(this.context));
        delete tempContext.ibzproprojectusertask;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzproprojectusertasks', parameterName: 'ibzproprojectusertask' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const _data: any = { w: (new Date().getTime()) };
            Object.assign(_data, data);
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, _data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IbzproProjectUserTaskMonthlyGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzproprojectusertasks', parameterName: 'ibzproprojectusertask' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
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
     * @memberof IbzproProjectUserTaskMonthlyGridViewBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}