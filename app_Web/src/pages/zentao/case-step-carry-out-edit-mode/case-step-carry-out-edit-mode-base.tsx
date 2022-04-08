
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GridView9Base } from '@/studio-core';
import IBZCaseStepService from '@/service/ibzcase-step/ibzcase-step-service';
import IBZCaseStepAuthService from '@/authservice/ibzcase-step/ibzcase-step-auth-service';
import GridView9Engine from '@engine/view/grid-view9-engine';
import IBZCaseStepUIService from '@/uiservice/ibzcase-step/ibzcase-step-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 用例步骤视图基类
 *
 * @export
 * @class CaseStepCarryOutEditModeBase
 * @extends {GridView9Base}
 */
export class CaseStepCarryOutEditModeBase extends GridView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseStepCarryOutEditModeBase
     */
    protected appDeName: string = 'ibzcasestep';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof CaseStepCarryOutEditModeBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof CaseStepCarryOutEditModeBase
     */
    protected appDeMajor: string = 'expect';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof CaseStepCarryOutEditModeBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {IBZCaseStepService}
     * @memberof CaseStepCarryOutEditModeBase
     */
    protected appEntityService: IBZCaseStepService = new IBZCaseStepService;

    /**
     * 实体权限服务对象
     *
     * @type IBZCaseStepUIService
     * @memberof CaseStepCarryOutEditModeBase
     */
    public appUIService: IBZCaseStepUIService = new IBZCaseStepUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CaseStepCarryOutEditModeBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzcasestep.views.carryouteditmode.caption',
        srfTitle: 'entities.ibzcasestep.views.carryouteditmode.title',
        srfSubTitle: 'entities.ibzcasestep.views.carryouteditmode.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CaseStepCarryOutEditModeBase
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
     * @memberof CaseStepCarryOutEditModeBase
     */
	protected viewtag: string = '5547049c1d6358d5b318c5034e1fef13';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof CaseStepCarryOutEditModeBase
     */ 
    protected viewName: string = 'CaseStepCarryOutEditMode';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CaseStepCarryOutEditModeBase
     */
    public engine: GridView9Engine = new GridView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof CaseStepCarryOutEditModeBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CaseStepCarryOutEditModeBase
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
            keyPSDEField: 'ibzcasestep',
            majorPSDEField: 'expect',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepCarryOutEditModeBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepCarryOutEditModeBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepCarryOutEditModeBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepCarryOutEditModeBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseStepCarryOutEditModeBase
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
     * @memberof CaseStepCarryOutEditMode
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
     * @memberof CaseStepCarryOutEditMode
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 是否单选
     *
     * @protected
     * @type {boolean}
     * @memberof CaseStepCarryOutEditModeBase
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
     * @memberof CaseStepCarryOutEditModeBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 0;
}