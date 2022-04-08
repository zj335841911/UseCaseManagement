
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridViewBase } from '@/studio-core';
import IbzReportlyService from '@/service/ibz-reportly/ibz-reportly-service';
import IbzReportlyAuthService from '@/authservice/ibz-reportly/ibz-reportly-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import IbzReportlyUIService from '@/uiservice/ibz-reportly/ibz-reportly-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 汇报表格视图视图基类
 *
 * @export
 * @class IbzReportlyMyReceivedGridViewBase
 * @extends {GridViewBase}
 */
export class IbzReportlyMyReceivedGridViewBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    protected appDeName: string = 'ibzreportly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    protected appDeKey: string = 'ibz_reportlyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    protected appDeMajor: string = 'ibz_reportlyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyMyReceivedGridViewBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IbzReportlyService}
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    protected appEntityService: IbzReportlyService = new IbzReportlyService;

    /**
     * 实体权限服务对象
     *
     * @type IbzReportlyUIService
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    public appUIService: IbzReportlyUIService = new IbzReportlyUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzreportly.views.myreceivedgridview.caption',
        srfTitle: 'entities.ibzreportly.views.myreceivedgridview.title',
        srfSubTitle: 'entities.ibzreportly.views.myreceivedgridview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzReportlyMyReceivedGridViewBase
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
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
	protected viewtag: string = 'c75ccc4e9ef8edf618efd83174c11e47';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyMyReceivedGridViewBase
     */ 
    protected viewName: string = 'IbzReportlyMyReceivedGridView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzReportlyMyReceivedGridViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzReportlyMyReceivedGridViewBase
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
            keyPSDEField: 'ibzreportly',
            majorPSDEField: 'ibzreportlyname',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyMyReceivedGridViewBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyMyReceivedGridViewBase
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
     * @memberof IbzReportlyMyReceivedGridView
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
     * @memberof IbzReportlyMyReceivedGridView
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
            { pathName: 'ibzreportlies', parameterName: 'ibzreportly' },
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
            viewname: 'ibz-reportly-my-received-reportly-detail-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.ibzreportly.views.myreceivedreportlydetaileditview.title'),
            placement: 'DRAWER_TOP',
        };
        openDrawer(view, data);
    }


}