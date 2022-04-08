
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridViewBase } from '@/studio-core';
import SysUpdateFeaturesService from '@/service/sys-update-features/sys-update-features-service';
import SysUpdateFeaturesAuthService from '@/authservice/sys-update-features/sys-update-features-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import SysUpdateFeaturesUIService from '@/uiservice/sys-update-features/sys-update-features-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 系统更新功能表格视图视图基类
 *
 * @export
 * @class SysUpdateFeaturesLastGridViewBase
 * @extends {GridViewBase}
 */
export class SysUpdateFeaturesLastGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    protected appDeName: string = 'sysupdatefeatures';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    protected appDeKey: string = 'sys_update_featuresid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    protected appDeMajor: string = 'sys_update_featuresname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {SysUpdateFeaturesService}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    protected appEntityService: SysUpdateFeaturesService = new SysUpdateFeaturesService;

    /**
     * 实体权限服务对象
     *
     * @type SysUpdateFeaturesUIService
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public appUIService: SysUpdateFeaturesUIService = new SysUpdateFeaturesUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.sysupdatefeatures.views.lastgridview.caption',
        srfTitle: 'entities.sysupdatefeatures.views.lastgridview.title',
        srfSubTitle: 'entities.sysupdatefeatures.views.lastgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    protected containerModel: any = {
        view_grid: {
            name: 'grid',
            type: 'GRID',
        },
        view_searchform: {
            name: 'searchform',
            type: 'SEARCHFORM',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
	protected viewtag: string = '5b49b6ae358e53f7b16f6d431213aeb1';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */ 
    protected viewName: string = 'SysUpdateFeaturesLastGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysUpdateFeaturesLastGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysUpdateFeaturesLastGridViewBase
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
            searchform: this.$refs.searchform,
            keyPSDEField: 'sysupdatefeatures',
            majorPSDEField: 'sysupdatefeaturesname',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesLastGridViewBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof SysUpdateFeaturesLastGridView
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
        delete tempContext.sysupdatefeatures;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.sysupdatelog && true){
            deResParameters = [
            { pathName: 'sysupdatelogs', parameterName: 'sysupdatelog' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'sysupdatefeatures', parameterName: 'sysupdatefeatures' },
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
            viewname: 'sys-update-features-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.sysupdatefeatures.views.editview.title'),
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
     * @memberof SysUpdateFeaturesLastGridView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.sysupdatelog && true){
            deResParameters = [
            { pathName: 'sysupdatelogs', parameterName: 'sysupdatelog' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'sysupdatefeatures', parameterName: 'sysupdatefeatures' },
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
            viewname: 'sys-update-features-info-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.sysupdatefeatures.views.infoeditview.title'),
            placement: 'DRAWER_RIGHT',
        };
        openDrawer(view, data);
    }


}