
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridViewBase } from '@/studio-core';
import IbzMonthlyService from '@/service/ibz-monthly/ibz-monthly-service';
import IbzMonthlyAuthService from '@/authservice/ibz-monthly/ibz-monthly-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import IbzMonthlyUIService from '@/uiservice/ibz-monthly/ibz-monthly-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 月报表格视图视图基类
 *
 * @export
 * @class IbzMonthlyProjectMonthlyGridView_Base
 * @extends {GridViewBase}
 */
export class IbzMonthlyProjectMonthlyGridView_Base extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    protected appDeName: string = 'ibzmonthly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    protected appDeKey: string = 'ibz_monthlyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    protected appDeMajor: string = 'ibz_monthlyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IbzMonthlyService}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    protected appEntityService: IbzMonthlyService = new IbzMonthlyService;

    /**
     * 实体权限服务对象
     *
     * @type IbzMonthlyUIService
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    public appUIService: IbzMonthlyUIService = new IbzMonthlyUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    protected model: any = {
        srfCaption: 'entities.ibzmonthly.views.projectmonthlygridview_.caption',
        srfTitle: 'entities.ibzmonthly.views.projectmonthlygridview_.title',
        srfSubTitle: 'entities.ibzmonthly.views.projectmonthlygridview_.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
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
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
	protected viewtag: string = '8cce08a0293cb9a5eb3b1df32a85c340';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */ 
    protected viewName: string = 'IbzMonthlyProjectMonthlyGridView_';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
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
            keyPSDEField: 'ibzmonthly',
            majorPSDEField: 'ibzmonthlyname',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
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
     * @memberof IbzMonthlyProjectMonthlyGridView_
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
     * @memberof IbzMonthlyProjectMonthlyGridView_
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
            { pathName: 'ibzmonthlies', parameterName: 'ibzmonthly' },
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
            viewname: 'ibz-monthly-monthly-main-msg-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.ibzmonthly.views.monthlymainmsgeditview.title'),
            placement: 'DRAWER_TOP',
        };
        openDrawer(view, data);
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof IbzMonthlyProjectMonthlyGridView_Base
     */
    protected isGridSingleSelect: boolean = true;
}