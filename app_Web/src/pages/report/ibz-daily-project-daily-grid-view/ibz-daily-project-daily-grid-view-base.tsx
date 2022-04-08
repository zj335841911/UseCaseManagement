
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridViewBase } from '@/studio-core';
import IbzDailyService from '@/service/ibz-daily/ibz-daily-service';
import IbzDailyAuthService from '@/authservice/ibz-daily/ibz-daily-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import IbzDailyUIService from '@/uiservice/ibz-daily/ibz-daily-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 日报表格视图视图基类
 *
 * @export
 * @class IbzDailyProjectDailyGridViewBase
 * @extends {GridViewBase}
 */
export class IbzDailyProjectDailyGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    protected appDeName: string = 'ibzdaily';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    protected appDeKey: string = 'ibz_dailyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    protected appDeMajor: string = 'ibz_dailyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyProjectDailyGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IbzDailyService}
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    protected appEntityService: IbzDailyService = new IbzDailyService;

    /**
     * 实体权限服务对象
     *
     * @type IbzDailyUIService
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    public appUIService: IbzDailyUIService = new IbzDailyUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzdaily.views.projectdailygridview.caption',
        srfTitle: 'entities.ibzdaily.views.projectdailygridview.title',
        srfSubTitle: 'entities.ibzdaily.views.projectdailygridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzDailyProjectDailyGridViewBase
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
     * @memberof IbzDailyProjectDailyGridViewBase
     */
	protected viewtag: string = '0cdc345ce433b0d36bec67942415280e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyProjectDailyGridViewBase
     */ 
    protected viewName: string = 'IbzDailyProjectDailyGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzDailyProjectDailyGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzDailyProjectDailyGridViewBase
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
            keyPSDEField: 'ibzdaily',
            majorPSDEField: 'ibzdailyname',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyProjectDailyGridViewBase
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
     * @memberof IbzDailyProjectDailyGridView
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
     * @memberof IbzDailyProjectDailyGridView
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
            { pathName: 'ibzdailies', parameterName: 'ibzdaily' },
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
            viewname: 'ibz-daily-daily-info-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.ibzdaily.views.dailyinfoeditview.title'),
            placement: 'DRAWER_TOP',
        };
        openDrawer(view, data);
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof IbzDailyProjectDailyGridViewBase
     */
    protected isGridSingleSelect: boolean = true;
}