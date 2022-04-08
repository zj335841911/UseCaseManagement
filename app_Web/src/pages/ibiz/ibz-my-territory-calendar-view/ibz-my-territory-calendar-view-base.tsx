import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { CalendarViewBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import IbzMyTerritoryAuthService from '@/authservice/ibz-my-territory/ibz-my-territory-auth-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';
import CodeListService from "@service/app/codelist-service";


/**
 * 我的地盘日历视图视图基类
 *
 * @export
 * @class IbzMyTerritoryCalendarViewBase
 * @extends {CalendarViewBase}
 */
export class IbzMyTerritoryCalendarViewBase extends CalendarViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarViewBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarViewBase
     */
    protected appDeMajor: string = 'realname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarViewBase
     */ 
    protected dataControl:string = "calendar";

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof IbzMyTerritoryCalendarViewBase
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService;

    /**
     * 实体权限服务对象
     *
     * @type IbzMyTerritoryUIService
     * @memberof IbzMyTerritoryCalendarViewBase
     */
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryCalendarViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzmyterritory.views.calendarview.caption',
        srfTitle: 'entities.ibzmyterritory.views.calendarview.title',
        srfSubTitle: 'entities.ibzmyterritory.views.calendarview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryCalendarViewBase
     */
    protected containerModel: any = {
        view_calendar: { name: 'calendar', type: 'CALENDAR' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarViewBase
     */
	protected viewtag: string = '8cf3bd4450a7bbccd2f6aff9629bfdf2';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryCalendarViewBase
     */ 
    protected viewName:string = "IbzMyTerritoryCalendarView";



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzMyTerritoryCalendarViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzMyTerritoryCalendarViewBase
     */
    public engineInit(): void {
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IbzMyTerritoryCalendarView
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
     * @memberof IbzMyTerritoryCalendarView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }





}