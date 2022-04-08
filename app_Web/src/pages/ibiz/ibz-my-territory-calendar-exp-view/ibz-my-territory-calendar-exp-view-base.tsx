import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { CalendarExpViewBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import IbzMyTerritoryAuthService from '@/authservice/ibz-my-territory/ibz-my-territory-auth-service';
import CalendarExpViewEngine from '@engine/view/calendar-exp-view-engine';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';

/**
 * 我的地盘日历导航视图视图基类
 *
 * @export
 * @class IbzMyTerritoryCalendarExpViewBase
 * @extends {CalendarExpViewBase}
 */
export class IbzMyTerritoryCalendarExpViewBase extends CalendarExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    protected appDeMajor: string = 'realname';

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService;

    /**
     * 实体权限服务对象
     *
     * @type IbzMyTerritoryUIService
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzmyterritory.views.calendarexpview.caption',
        srfTitle: 'entities.ibzmyterritory.views.calendarexpview.title',
        srfSubTitle: 'entities.ibzmyterritory.views.calendarexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    protected containerModel: any = {
        view_calendarexpbar: {
            name: 'calendarexpbar',
            type: 'CALENDAREXPBAR',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
	protected viewtag: string = 'de099c7c4f5c1f66e518aab73595f15f';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */ 
    protected viewName: string = 'IbzMyTerritoryCalendarExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    public engine: CalendarExpViewEngine = new CalendarExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            calendarexpbar: this.$refs.calendarexpbar,
            keyPSDEField: 'ibzmyterritory',
            majorPSDEField: 'realname',
            isLoadDefault: true,
        });
    }

    /**
     * calendarexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    public calendarexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('calendarexpbar', 'selectionchange', $event);
    }

    /**
     * calendarexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    public calendarexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('calendarexpbar', 'activated', $event);
    }

    /**
     * calendarexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryCalendarExpViewBase
     */
    public calendarexpbar_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('calendarexpbar', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IbzMyTerritoryCalendarExpView
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
     * @memberof IbzMyTerritoryCalendarExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof IbzMyTerritoryCalendarExpView
     */
    public viewUID: string = 'ibiz-ibz-my-territory-calendar-exp-view';


}