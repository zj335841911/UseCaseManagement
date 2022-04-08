
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridView9Base } from '@/studio-core';
import IbzLibCasestepsService from '@/service/ibz-lib-casesteps/ibz-lib-casesteps-service';
import IbzLibCasestepsAuthService from '@/authservice/ibz-lib-casesteps/ibz-lib-casesteps-auth-service';
import GridView9Engine from '@engine/view/grid-view9-engine';
import IbzLibCasestepsUIService from '@/uiservice/ibz-lib-casesteps/ibz-lib-casesteps-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 用例库用例步骤表格视图（主数据）视图基类
 *
 * @export
 * @class IbzLibCaseStepsInfoGridView9Base
 * @extends {GridView9Base}
 */
export class IbzLibCaseStepsInfoGridView9Base extends GridView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    protected appDeName: string = 'ibzlibcasesteps';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    protected appDeMajor: string = 'expect';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IbzLibCasestepsService}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    protected appEntityService: IbzLibCasestepsService = new IbzLibCasestepsService;

    /**
     * 实体权限服务对象
     *
     * @type IbzLibCasestepsUIService
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    public appUIService: IbzLibCasestepsUIService = new IbzLibCasestepsUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    protected model: any = {
        srfCaption: 'entities.ibzlibcasesteps.views.infogridview9.caption',
        srfTitle: 'entities.ibzlibcasesteps.views.infogridview9.title',
        srfSubTitle: 'entities.ibzlibcasesteps.views.infogridview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzLibCaseStepsInfoGridView9Base
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
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
	protected viewtag: string = 'af3275f3703097da101b0c1a0c01024c';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */ 
    protected viewName: string = 'IbzLibCaseStepsInfoGridView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    public engine: GridView9Engine = new GridView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzLibCaseStepsInfoGridView9Base
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
            keyPSDEField: 'ibzlibcasesteps',
            majorPSDEField: 'expect',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibCaseStepsInfoGridView9Base
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
     * @memberof IbzLibCaseStepsInfoGridView9
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
     * @memberof IbzLibCaseStepsInfoGridView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof IbzLibCaseStepsInfoGridView9Base
     */
    protected isGridSingleSelect: boolean = true;
}