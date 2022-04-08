
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridViewBase } from '@/studio-core';
import SysUpdateLogService from '@/service/sys-update-log/sys-update-log-service';
import SysUpdateLogAuthService from '@/authservice/sys-update-log/sys-update-log-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import SysUpdateLogUIService from '@/uiservice/sys-update-log/sys-update-log-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 系统更新日志表格视图视图基类
 *
 * @export
 * @class SysUpdateLogLastGridViewBase
 * @extends {GridViewBase}
 */
export class SysUpdateLogLastGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogLastGridViewBase
     */
    protected appDeName: string = 'sysupdatelog';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogLastGridViewBase
     */
    protected appDeKey: string = 'sys_update_logid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogLastGridViewBase
     */
    protected appDeMajor: string = 'sys_update_logname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogLastGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {SysUpdateLogService}
     * @memberof SysUpdateLogLastGridViewBase
     */
    protected appEntityService: SysUpdateLogService = new SysUpdateLogService;

    /**
     * 实体权限服务对象
     *
     * @type SysUpdateLogUIService
     * @memberof SysUpdateLogLastGridViewBase
     */
    public appUIService: SysUpdateLogUIService = new SysUpdateLogUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof SysUpdateLogLastGridViewBase
	 */
    protected customViewParams: any = {
        'n_updatebranch_eq': {
            isRawValue: true,
            value: 'PC',
        },
        'size': {
            isRawValue: true,
            value: '5',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateLogLastGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.sysupdatelog.views.lastgridview.caption',
        srfTitle: 'entities.sysupdatelog.views.lastgridview.title',
        srfSubTitle: 'entities.sysupdatelog.views.lastgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateLogLastGridViewBase
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
     * @memberof SysUpdateLogLastGridViewBase
     */
	protected viewtag: string = 'ad6ccd8aea1ed8f9c39d5e684300ff7e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogLastGridViewBase
     */ 
    protected viewName: string = 'SysUpdateLogLastGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysUpdateLogLastGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysUpdateLogLastGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysUpdateLogLastGridViewBase
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
            keyPSDEField: 'sysupdatelog',
            majorPSDEField: 'sysupdatelogname',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateLogLastGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateLogLastGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateLogLastGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateLogLastGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateLogLastGridViewBase
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
     * @memberof SysUpdateLogLastGridView
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
        delete tempContext.sysupdatelog;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'sysupdatelogs', parameterName: 'sysupdatelog' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'sys-update-log-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.sysupdatelog.views.editview.title'),
            placement: 'DRAWER_RIGHT',
        };
        openDrawer(view, data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof SysUpdateLogLastGridView
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
            { pathName: 'sysupdatelogs', parameterName: 'sysupdatelog' },
            { pathName: 'lasttabexpview', parameterName: 'lasttabexpview' },
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
     * @memberof SysUpdateLogLastGridViewBase
     */
    protected isGridSingleSelect: boolean = true;
}