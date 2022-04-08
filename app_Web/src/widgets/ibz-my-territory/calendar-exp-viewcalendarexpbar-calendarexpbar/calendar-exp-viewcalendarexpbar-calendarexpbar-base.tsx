
import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, CalendarViewExpBarControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import CalendarExpViewcalendarexpbarService from './calendar-exp-viewcalendarexpbar-calendarexpbar-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';
import CodeListService from "@service/app/codelist-service";

/**
 * calendarexpbar部件基类
 *
 * @export
 * @class CalendarViewExpBarControlBase
 * @extends {CalendarExpViewcalendarexpbarCalendarexpbarBase}
 */
export class CalendarExpViewcalendarexpbarCalendarexpbarBase extends CalendarViewExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    protected controlType: string = 'CALENDAREXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {CalendarExpViewcalendarexpbarService}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    public service: CalendarExpViewcalendarexpbarService = new CalendarExpViewcalendarexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    protected appDeLogicName: string = '我的地盘';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof CalendarExpViewcalendarexpbarBase
     */  
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * calendarexpbar_calendar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    public calendarexpbar_calendar_selectionchange($event: any, $event2?: any) {
        this.calendarexpbar_selectionchange($event, 'calendarexpbar_calendar', $event2);
    }

    /**
     * calendarexpbar_calendar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    public calendarexpbar_calendar_load($event: any, $event2?: any) {
        this.calendarexpbar_load($event, 'calendarexpbar_calendar', $event2);
    }



    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public navViewName: any = {
        Bug: "bug-calendar-edit-view",
        task: "task-calendar-edit-view",
        todo: "todo-calendar-edit-view",
        daily: "ibz-daily-daily-info-calendar-edit-view",
        reportly: "ibz-reportly-calendar-edit-view",
        testtask: "test-task-calendar-edit-view",
        Story: "story-calendar-edit-view"
    };

    /**
     * 导航参数
     *
     * @type {*}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public navParam: any = {
        Bug: {
            navigateContext:null,
            navigateParams:null
        },
        task: {
            navigateContext:null,
            navigateParams:null
        },
        todo: {
            navigateContext:null,
            navigateParams:null
        },
        daily: {
            navigateContext:null,
            navigateParams:null
        },
        reportly: {
            navigateContext:null,
            navigateParams:null
        },
        testtask: {
            navigateContext:null,
            navigateParams:null
        },
        Story: {
            navigateContext:null,
            navigateParams:null
        }
    };

    /**
     * 导航过滤项
     *
     * @type {*}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public navFilter: any = {
        Bug: "",
        task: "",
        todo: "",
        daily: "",
        reportly: "",
        testtask: "",
        Story: ""
    };

    /**
     * 导航关系
     *
     * @type {*}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public navPSDer: any = {
        Bug: "",
        task: "",
        todo: "",
        daily: "",
        reportly: "",
        testtask: "",
        Story: ""
    };




    /**
     * 搜索字段名称
     * 
     * @type {(string)}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public placeholder="真实姓名";

    /**
     * 呈现模式，可选值：horizontal或者vertical
     * 
     * @public
     * @type {(string)}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public showMode:string ="horizontal";

    /**
     * 控件高度
     *
     * @type {number}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public ctrlHeight: number = 0;
    
    /**
     * calendarexpbar的选中数据事件
     * 
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public calendarexpbar_selectionchange(args: any [], tag?: string, $event2?: any): void {
        let tempContext:any = {};
        let tempViewParam:any = {};
        if (args.length === 0) {
            this.calcToolbarItemState(true);
            return ;
        }
        const arg:any = args[0];
        if(this.context){
            Object.assign(tempContext,JSON.parse(JSON.stringify(this.context)));
        }
        switch(arg.itemType) {
            case "Bug":
                Object.assign(tempContext,{ bug : arg.bug});
                Object.assign(tempContext,{srfparentdename:'Bug',srfparentkey:arg['bug']});
                if(this.navFilter && this.navFilter['Bug'] && !Object.is(this.navFilter['Bug'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['Bug']]:arg['bug']});
                }
                if(this.navPSDer && this.navFilter['Bug'] && !Object.is(this.navPSDer['Bug'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['Bug']]:arg['bug']});
                }
                if(this.navParam && this.navParam['Bug'] && this.navParam['Bug'].navigateContext && Object.keys(this.navParam['Bug'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['Bug'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['Bug'] && this.navParam['Bug'].navigateParams && Object.keys(this.navParam['Bug'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['Bug'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
            case "task":
                Object.assign(tempContext,{ task : arg.task});
                Object.assign(tempContext,{srfparentdename:'Task',srfparentkey:arg['task']});
                if(this.navFilter && this.navFilter['task'] && !Object.is(this.navFilter['task'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['task']]:arg['task']});
                }
                if(this.navPSDer && this.navFilter['task'] && !Object.is(this.navPSDer['task'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['task']]:arg['task']});
                }
                if(this.navParam && this.navParam['task'] && this.navParam['task'].navigateContext && Object.keys(this.navParam['task'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['task'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['task'] && this.navParam['task'].navigateParams && Object.keys(this.navParam['task'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['task'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
            case "todo":
                Object.assign(tempContext,{ todo : arg.todo});
                Object.assign(tempContext,{srfparentdename:'Todo',srfparentkey:arg['todo']});
                if(this.navFilter && this.navFilter['todo'] && !Object.is(this.navFilter['todo'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['todo']]:arg['todo']});
                }
                if(this.navPSDer && this.navFilter['todo'] && !Object.is(this.navPSDer['todo'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['todo']]:arg['todo']});
                }
                if(this.navParam && this.navParam['todo'] && this.navParam['todo'].navigateContext && Object.keys(this.navParam['todo'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['todo'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['todo'] && this.navParam['todo'].navigateParams && Object.keys(this.navParam['todo'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['todo'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
            case "daily":
                Object.assign(tempContext,{ ibzdaily : arg.ibzdaily});
                Object.assign(tempContext,{srfparentdename:'IbzDaily',srfparentkey:arg['ibzdaily']});
                if(this.navFilter && this.navFilter['daily'] && !Object.is(this.navFilter['daily'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['daily']]:arg['ibzdaily']});
                }
                if(this.navPSDer && this.navFilter['daily'] && !Object.is(this.navPSDer['daily'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['daily']]:arg['ibzdaily']});
                }
                if(this.navParam && this.navParam['daily'] && this.navParam['daily'].navigateContext && Object.keys(this.navParam['daily'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['daily'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['daily'] && this.navParam['daily'].navigateParams && Object.keys(this.navParam['daily'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['daily'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
            case "reportly":
                Object.assign(tempContext,{ ibzreportly : arg.ibzreportly});
                Object.assign(tempContext,{srfparentdename:'IbzReportly',srfparentkey:arg['ibzreportly']});
                if(this.navFilter && this.navFilter['reportly'] && !Object.is(this.navFilter['reportly'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['reportly']]:arg['ibzreportly']});
                }
                if(this.navPSDer && this.navFilter['reportly'] && !Object.is(this.navPSDer['reportly'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['reportly']]:arg['ibzreportly']});
                }
                if(this.navParam && this.navParam['reportly'] && this.navParam['reportly'].navigateContext && Object.keys(this.navParam['reportly'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['reportly'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['reportly'] && this.navParam['reportly'].navigateParams && Object.keys(this.navParam['reportly'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['reportly'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
            case "testtask":
                Object.assign(tempContext,{ testtask : arg.testtask});
                Object.assign(tempContext,{srfparentdename:'TestTask',srfparentkey:arg['testtask']});
                if(this.navFilter && this.navFilter['testtask'] && !Object.is(this.navFilter['testtask'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['testtask']]:arg['testtask']});
                }
                if(this.navPSDer && this.navFilter['testtask'] && !Object.is(this.navPSDer['testtask'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['testtask']]:arg['testtask']});
                }
                if(this.navParam && this.navParam['testtask'] && this.navParam['testtask'].navigateContext && Object.keys(this.navParam['testtask'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['testtask'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['testtask'] && this.navParam['testtask'].navigateParams && Object.keys(this.navParam['testtask'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['testtask'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
            case "Story":
                Object.assign(tempContext,{ story : arg.story});
                Object.assign(tempContext,{srfparentdename:'Story',srfparentkey:arg['story']});
                if(this.navFilter && this.navFilter['Story'] && !Object.is(this.navFilter['Story'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['Story']]:arg['story']});
                }
                if(this.navPSDer && this.navFilter['Story'] && !Object.is(this.navPSDer['Story'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['Story']]:arg['story']});
                }
                if(this.navParam && this.navParam['Story'] && this.navParam['Story'].navigateContext && Object.keys(this.navParam['Story'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['Story'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['Story'] && this.navParam['Story'].navigateParams && Object.keys(this.navParam['Story'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['Story'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
        }
        this.selection = {};
        Object.assign(this.selection, { view: { viewname: this.navViewName[arg.itemType] }, context:tempContext,viewparam:tempViewParam });
        this.calcToolbarItemState(false);
        this.$emit('selectionchange',args);
        this.$forceUpdate();
    }

    /**
     * calendarexpbar的load完成事件
     * 
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public calendarexpbar_load(args:any, tag?: string, $event2?: any){
        this.calcToolbarItemState(true);
        this.$emit('load',args);
    }

    /**
     * 设置导航区工具栏禁用状态
     *
     * @param {boolean} state
     * @return {*} 
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public calcToolbarItemState(state: boolean) {
        let _this: any = this;
        const models:any = _this.calendarexpviewcalendarexpbar_toolbarModels;
        if (models) {
            for (const key in models) {
                if (!models.hasOwnProperty(key)) {
                    return;
                }
                const _item = models[key];
                if (_item.uiaction && (Object.is(_item.uiaction.target, 'SINGLEKEY') || Object.is(_item.uiaction.target, 'MULTIKEY'))) {
                    _item.disabled = state;
                }
                _item.visible = true;
                if (_item.noprivdisplaymode && _item.noprivdisplaymode === 6) {
                    _item.visible = false;
                }
            }
            this.calcNavigationToolbarState();
        }
    }

    /**
     * 计算导航工具栏权限状态
     * 
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public calcNavigationToolbarState(){
        let _this: any = this;
        // 界面行为
        if(_this.calendarexpviewcalendarexpbar_toolbarModels){
            const curUIService:IbzMyTerritoryUIService  = new IbzMyTerritoryUIService();
            ViewTool.calcActionItemAuthState({},_this.calendarexpviewcalendarexpbar_toolbarModels,curUIService);
        }
    }

    /**
    * 执行搜索
    *
    * @memberof CalendarExpViewcalendarexpbarBase
    */
    public onSearch($event:any) {
        let calendar:any = this.$refs.calendarexpbar_calendar;
        calendar.searchEvents({ query: this.searchText });
    }

}