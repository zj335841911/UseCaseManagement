

import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import MyWorkPCService from './my-work-pc-calendar-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';
import Vue from 'vue';
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
import ContextMenu from '@components/context-menu/context-menu'
import UIService from '@/uiservice/ui-service';
import AppCenterService from "@service/app/app-center-service";

/**
 * calendarexpbar_calendar部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MyWorkPCCalendarBase}
 */
export class MyWorkPCCalendarBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MyWorkPCCalendarBase
     */
    protected controlType: string = 'CALENDAR';

    /**
     * 建构部件服务对象
     *
     * @type {MyWorkPCService}
     * @memberof MyWorkPCCalendarBase
     */
    public service: MyWorkPCService = new MyWorkPCService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MyWorkPCCalendarBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyWorkPCCalendarBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MyWorkPCCalendarBase
     */
    protected appDeLogicName: string = '我的地盘';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof MyWorkPCBase
     */  
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);


    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof MyWorkPCBase
     */
    @Prop({ default: false }) public isSelectFirstDefault!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MyWorkPCBase
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MyWorkPCBase
     */
    @Prop() public loadAction!: string;

    /**
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof MyWorkPCBase
     */
    @Prop() public newdata: any;
    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof MyWorkPCBase
     */
    @Prop() public opendata: any;

    /**
     * 日历部件样式名
     *
     * @public
     * @type {any[]}
     * @memberof MyWorkPCBase
     */
    public calendarClass: string = "calendar";

    /**
     * this引用
     *
     * @type {any}
     * @memberof MyWorkPCBase
     */
    public thisRef: any = this;

    /**
     * 选中事件element元素
     *
     * @public
     * @type {any[]}
     * @memberof MyWorkPCBase
     */
    public selectedEventElement:any;

    /**
     * 引用插件集合
     *
     * @public
     * @type {any[]}
     * @memberof MyWorkPCBase
     */
    public calendarPlugins: any[] = [
        dayGridPlugin, 
        timeGridPlugin, 
        listPlugin, 
        interactionPlugin
    ];

    /**
     * 设置头部显示
     *
     * @public
     * @type {}
     * @memberof MyWorkPCBase
     */
    public header: any = {
        left: 'prev,next today gotoDate',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    };

    /**
     * 按钮文本集合
     *
     * @public
     * @type {}
     * @memberof MyWorkPCBase
     */
    public buttonText: any = {
        today: '今天',
        month: '月',
        week: '周',
        day: '天',
        list: '列'
    };

    /**
     * 模态显示控制变量
     *
     * @public
     * @type boolean
     * @memberof MyWorkPCBase
     */
    public modalVisible: boolean = false;

    /**
     * 跳转日期
     *
     * @public
     * @type Date
     * @memberof MyWorkPCBase
     */
    public selectedGotoDate: Date = new Date();

    /**
     * 打开时间选择模态
     *
     * @public
     * @memberof MyWorkPCBase
     */
    public openDateSelect(){
        this.modalVisible = true;
    }

    /**
     * 跳转到指定时间
     *
     * @public
     * @memberof MyWorkPCBase
     */
    public gotoDate(){
        let appCalendar: any = this.$refs.calendar;
        let api = appCalendar.getApi();
        api.gotoDate(this.selectedGotoDate);
    }

    /**
     * 有效日期范围
     *
     * @public
     * @type {}
     * @memberof MyWorkPCBase
     */
    public validRange: any = {
        start:"0000-01-01",
        end:"9999-12-31"
    };

    /**
     * 默认加载日期
     *
     * @public
     * @type {}
     * @memberof MyWorkPCBase
     */
    public defaultDate: any = this.$util.dateFormat(new Date());

    /**
     * 设置按钮文本
     *
     * @public
     * @memberof MyWorkPCBase
     */
    public setButtonText(){
        this.buttonText.today = this.$t('app.calendar.today'),
        this.buttonText.month = this.$t('app.calendar.month'),
        this.buttonText.week = this.$t('app.calendar.week'),
        this.buttonText.day = this.$t('app.calendar.day'),
        this.buttonText.list = this.$t('app.calendar.list')
    }

    /**
     * 监听语言变化
     *
     * @public
     * @memberof MyWorkPCBase
     */
    @Watch('$i18n.locale')
    public onLocaleChange(newval: any, val: any) {
        this.setButtonText();
    }

    /**
     * 日程事件集合
     *
     * @public
     * @type {any[]}
     * @memberof MyWorkPCBase
     */
    public events: any[] = [];

    /**
     * 日历项上下文菜单集合
     *
     * @type {string[]}
     * @memberof MyWorkPCBase
     */
     public actionModel: any = {
    }

    /**
     * 备份日历项上下文菜单
     *
     * @type {string[]}
     * @memberof MyWorkPCBase
     */
     public copyActionModel: any;

    /**
     * 日历样式类型
     *
     * @public
     * @type {string}
     * @memberof MyWorkPCBase
     */
    public calendarType: string = "MONTH";

    /**
     * 图例显示控制
     *
     * @public
     * @type {any}
     * @memberof MyWorkPCBase
     */
    public isShowlegend: any = {
        Bug:true,
        task:true,
        todo:true,
        daily:true,
        reportly:true,
        testtask:true,
        Story:true,
    };

    /**
     * 图例点击事件
     *
     * @public
     * @memberof MyWorkPCBase
     */
    legendTrigger(itemType:string){
        this.isShowlegend[itemType] = !this.isShowlegend[itemType];
        this.refresh();
    }

    /**
     * 查询参数缓存
     *
     * @public
     * @type {any}
     * @memberof MyWorkPCBase
     */
    public searchArgCache: any = {};

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof MyWorkPCBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }

    /**
     * 搜索获取日程事件
     *
     * @param {*} $event 日期信息
     * @memberof MyWorkPCBase
     */
    public searchEvents(fetchInfo?:any, successCallback?:any, failureCallback?:any ) {
        // 处理请求参数
        let start = (fetchInfo && fetchInfo.start) ? this.$util.dateFormat(fetchInfo.start) : null;
        let end = (fetchInfo && fetchInfo.end) ? this.$util.dateFormat(fetchInfo.end) : null;
        let arg = { start: start, end: end };
        if(fetchInfo && fetchInfo.query){
            Object.assign(arg,{query : fetchInfo.query});
        }
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        let tempViewParams: any = parentdata.viewparams ? parentdata.viewparams : {};
        Object.assign(tempViewParams, JSON.parse(JSON.stringify(this.viewparams)));
        Object.assign(arg, { viewparams: tempViewParams });
        // 处理events数据
        let _this = this;
        let handleEvents = ()=>{
            if(_this.isSelectFirstDefault){
                // 模拟$event数据
                let tempEvent = JSON.parse(JSON.stringify(_this.events.length > 0?_this.events[0]:{}));
                _this.onEventClick(tempEvent,true);
                if(_this.events.length > 0){
                    _this.events[0].className = "select-first-event";
                }
                // _this.calendarClass = "calendar select-first-calendar";
            }
            let filterEvents = this.events.filter((event:any)=>{
                return _this.isShowlegend[event.itemType];
            });

            if(successCallback){
                successCallback(filterEvents);
            }
            // 刷新日历的大小（仅fullcalendar组件使用）
            if(!Object.is(_this.calendarType,"TIMELINE")){
                let appCalendar: any = _this.$refs.calendar;
                let api = appCalendar.getApi();
                api.updateSize();
            }
        }
        if(JSON.stringify(arg) === JSON.stringify(this.searchArgCache)){
            handleEvents();
            return;
        }else{
            this.searchArgCache = arg;
        }
        const post: Promise<any> = this.service.search(this.loadAction, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
                }
                return;
            }
            // 默认选中第一项
            this.events = response.data;
            handleEvents();
        }, (response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
        });
    }

    /**
     * 日期点击事件
     *
     * @param {*} $event 日期信息
     * @memberof MyWorkPCBase
     */
    public onDateClick($event: any) {
        let date = $event.date;
        let datestr = $event.dateStr;
    }

    /**
     * 获取编辑视图信息
     *
     * @param {*} $event 事件信息
     * @memberof MyWorkPCBase
     */
    public getEditView(deName: string) {
        let view: any = {};
        switch(deName){
            case "testtask": 
                view = {
                    viewname: 'test-task-calendar-edit-view', 
                    height: 0, 
                    width: 0,
                    title: this.$t('entities.testtask.views.calendareditview.title'),
                    placement: '',
                    deResParameters: [{ pathName: 'products', parameterName: 'product' }, ],
                    parameters: [{ pathName: 'testtasks', parameterName: 'testtask' }, { pathName: 'calendareditview', parameterName: 'calendareditview' } ],
                };
                break;
            case "todo": 
                view = {
                    viewname: 'todo-calendar-edit-view', 
                    height: 0, 
                    width: 0,
                    title: this.$t('entities.todo.views.calendareditview.title'),
                    placement: '',
                    deResParameters: [],
                    parameters: [{ pathName: 'todos', parameterName: 'todo' }, { pathName: 'calendareditview', parameterName: 'calendareditview' } ],
                };
                break;
            case "story": 
                view = {
                    viewname: 'story-calendar-edit-view', 
                    height: 0, 
                    width: 0,
                    title: this.$t('entities.story.views.calendareditview.title'),
                    placement: '',
                    deResParameters: [{ pathName: 'products', parameterName: 'product' }, ],
                    parameters: [{ pathName: 'stories', parameterName: 'story' }, { pathName: 'calendareditview', parameterName: 'calendareditview' } ],
                };
                break;
            case "bug": 
                view = {
                    viewname: 'bug-calendar-edit-view', 
                    height: 0, 
                    width: 0,
                    title: this.$t('entities.bug.views.calendareditview.title'),
                    placement: '',
                    deResParameters: [{ pathName: 'products', parameterName: 'product' }, ],
                    parameters: [{ pathName: 'bugs', parameterName: 'bug' }, { pathName: 'calendareditview', parameterName: 'calendareditview' } ],
                };
                break;
            case "ibzdaily": 
                view = {
                    viewname: 'ibz-daily-daily-info-calendar-edit-view', 
                    height: 0, 
                    width: 0,
                    title: this.$t('entities.ibzdaily.views.dailyinfocalendareditview.title'),
                    placement: '',
                    deResParameters: [],
                    parameters: [{ pathName: 'ibzdailies', parameterName: 'ibzdaily' }, { pathName: 'dailyinfocalendareditview', parameterName: 'dailyinfocalendareditview' } ],
                };
                break;
            case "task": 
                view = {
                    viewname: 'task-calendar-edit-view', 
                    height: 0, 
                    width: 0,
                    title: this.$t('entities.task.views.calendareditview.title'),
                    placement: '',
                    deResParameters: [{ pathName: 'projectmodules', parameterName: 'projectmodule' }, ],
                    parameters: [{ pathName: 'tasks', parameterName: 'task' }, { pathName: 'calendareditview', parameterName: 'calendareditview' } ],
                };
                break;
            case "ibzreportly": 
                view = {
                    viewname: 'ibz-reportly-calendar-edit-view', 
                    height: 0, 
                    width: 0,
                    title: this.$t('entities.ibzreportly.views.calendareditview.title'),
                    placement: '',
                    deResParameters: [],
                    parameters: [{ pathName: 'ibzreportlies', parameterName: 'ibzreportly' }, { pathName: 'calendareditview', parameterName: 'calendareditview' } ],
                };
                break;
        }
        return view;
    }

    /**
     * 日程点击事件
     *
     * @param {*} $event calendar事件对象或event数据
     * @param {*} isOriginData true：$event是原始event数据，false：是组件
     * @param {*} $event timeline事件对象
     * @memberof MyWorkPCBase
     */
    public onEventClick($event: any, isOriginData:boolean = false, $event2?: any) {
        // 处理event数据
        let event: any = {};
        if(isOriginData){
            event = JSON.parse(JSON.stringify($event));
        }else{
            event = Object.assign({title: $event.event.title, start: $event.event.start, end: $event.event.end}, $event.event.extendedProps);
        }
        // 点击选中样式
        let JSelement:any = null;
        if(!isOriginData && $event.el){
            JSelement = $event.el;
        }else if(isOriginData && $event2 && $event2.currentTarget){
            JSelement = $event2.currentTarget;
        }
        if(JSelement){
            this.calendarClass = "calendar";
            if(this.selectedEventElement){
                this.selectedEventElement.classList.remove("selected-event");
            }
            this.selectedEventElement = JSelement;
            this.selectedEventElement.classList.add("selected-event");
        }
        // 处理上下文数据
        let _this = this;
        let view: any = {};
        let _context: any = Object.assign({},this.context);
        let _viewparams:any = Object.assign({start:event.start,end:event.end},this.viewparams);
        switch(event.itemType) {
            case "Bug":
                _context.bug = event.bug;
                view = this.getEditView("bug");
                break;
            case "task":
                _context.task = event.task;
                view = this.getEditView("task");
                break;
            case "todo":
                _context.todo = event.todo;
                view = this.getEditView("todo");
                break;
            case "daily":
                _context.ibzdaily = event.ibzdaily;
                view = this.getEditView("ibzdaily");
                break;
            case "reportly":
                _context.ibzreportly = event.ibzreportly;
                view = this.getEditView("ibzreportly");
                break;
            case "testtask":
                _context.testtask = event.testtask;
                view = this.getEditView("testtask");
                break;
            case "Story":
                _context.story = event.story;
                view = this.getEditView("story");
                break;
        }
        this.selections = [event];
        // 导航栏中不需要打开视图，只要抛出选中数据
        if(this.isSelectFirstDefault){
            this.$emit("selectionchange",this.selections);
            return;
        }
        // 根据打开模式打开视图
        if(!view.viewname){
            return;
        } else if (Object.is(view.placement, 'INDEXVIEWTAB') || Object.is(view.placement, '')) {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, this.context, view.deResParameters, view.parameters, [JSON.parse(JSON.stringify(_context))] , _viewparams);
            this.$router.push(routePath);
        } else {
            let container: any;
            if (Object.is(view.placement, 'POPOVER')) {
                container = this.$apppopover.openPop(isOriginData ? $event2 : $event.jsEvent, view,JSON.parse(JSON.stringify(_context)),  _viewparams);
            } else if (Object.is(view.placement, 'POPUPMODAL')) {
                container = this.$appmodal.openModal(view,  JSON.parse(JSON.stringify(_context)),  _viewparams);
            } else if (view.placement.startsWith('DRAWER')) {
                container = this.$appdrawer.openDrawer(view,  JSON.parse(JSON.stringify(_context)),  _viewparams);
            }
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                // 刷新日历
                _this.refresh();
            });
        }
    }

    /**
     * 日历刷新
     *
     * @memberof MyWorkPCBase
     */
    public refresh(args?:any) {
        if(Object.is(this.calendarType,"TIMELINE")){
            this.searchEvents();
        } else {
            let calendarApi = (this.$refs.calendar as any).getApi();
            calendarApi.refetchEvents();
        }
    }

    /**
     * 日程拖动事件
     *
     * @param {*} $event 事件信息
     * @memberof MyWorkPCBase
     */
    public onEventDrop($event: any) {
        if(this.isSelectFirstDefault){
          return;
        }
        let arg: any = {};
        let _context: any = Object.assign({},this.context);
        arg.start = this.$util.dateFormat($event.event.start);
        arg.end = this.$util.dateFormat($event.event.end);
        let itemType = $event.event._def.extendedProps.itemType;
        switch(itemType) {
            case "Bug":
                arg.bug = $event.event._def.extendedProps.bug;
                _context.bug = $event.event._def.extendedProps.bug;
                break;
            case "task":
                arg.task = $event.event._def.extendedProps.task;
                _context.task = $event.event._def.extendedProps.task;
                break;
            case "todo":
                arg.todo = $event.event._def.extendedProps.todo;
                _context.todo = $event.event._def.extendedProps.todo;
                break;
            case "daily":
                arg.ibzdaily = $event.event._def.extendedProps.ibzdaily;
                _context.ibzdaily = $event.event._def.extendedProps.ibzdaily;
                break;
            case "reportly":
                arg.ibzreportly = $event.event._def.extendedProps.ibzreportly;
                _context.ibzreportly = $event.event._def.extendedProps.ibzreportly;
                break;
            case "testtask":
                arg.testtask = $event.event._def.extendedProps.testtask;
                _context.testtask = $event.event._def.extendedProps.testtask;
                break;
            case "Story":
                arg.story = $event.event._def.extendedProps.story;
                _context.story = $event.event._def.extendedProps.story;
                break;
        }
        Object.assign(arg,{viewparams:this.viewparams});
        const post: Promise<any> = this.service.update(itemType, JSON.parse(JSON.stringify(_context)), arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
                }
                return;
            }
        }, (response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
        });
    }

    /**
     * 选中的数据
     *
     * @returns {any[]}
     * @memberof MyWorkPCBase
     */
    public selections: any[] = [];

    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MyWorkPCBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MyWorkPCBase
     */
    public getDatas(): any[] {
        return this.selections;
    }

    /**
     * 获取单项数据
     *
     * @returns {*}
     * @memberof MyWorkPCBase
     */
    public getData(): any {
        return null;
    }
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MyWorkPCBase
     */
    public created() {
        this.setButtonText();
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MyWorkPCBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
            });
        }
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"IbzMyTerritory")){
                    return;
                }
                if(Object.is(action,'appRefresh')){
                    this.refresh();
                }
            })
        }
    }


    /**
     * vue 生命周期
     *
     * @memberof MyWorkPCBase
     */
    public mounted(){
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     *
     * @memberof MyWorkPCBase
     */
    public afterMounted(){
        let appCalendar: any = this.$refs.calendar;
        if(appCalendar){
            let api = appCalendar.getApi();
            api.updateSize()
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MyWorkPCBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MyWorkPCBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if(this.appStateEvent){
            this.appStateEvent.unsubscribe();
        }
    }



    /**
     * 计算节点右键权限
     *
     * @param {*} data 日历项数据
     * @param {*} appEntityName 应用实体名称  
     * @returns
     * @memberof MyWorkPCBase
     */
    public async computeNodeState(data:any,appEntityName:string) {
        let service:any = await this.appEntityService.getService(appEntityName);
        if(this.copyActionModel && Object.keys(this.copyActionModel).length > 0) {
            if(service['Get'] && service['Get'] instanceof Function){
                let tempContext:any = Util.deepCopy(this.context);
                tempContext[appEntityName] = data[appEntityName];
                let targetData = await service.Get(tempContext,{}, false);
                let uiservice:any = await new UIService().getService(appEntityName);
                let result: any[] = ViewTool.calcActionItemAuthState(targetData.data,this.copyActionModel,uiservice);
                return this.copyActionModel;
            }else{
                console.warn("获取数据异常");
                return this.copyActionModel;
            }
        }
    }

    /**
     * 事件绘制回调
     *
     * @param {*} info 信息
     * @memberof MyWorkPCBase
     */
    public eventRender(info?:any,) {
        let that:any = this;
        let data = Object.assign({title: info.event.title, start: info.event.start, end: info.event.end}, info.event.extendedProps);
        info.el.addEventListener('contextmenu', (event: MouseEvent) => {
            that.copyActionModel = {};
            Object.values(that.actionModel).forEach((item:any) =>{
                if(Object.is(item.nodeOwner,data.itemType)){
                    that.copyActionModel[item.name] = item;
                }
            })
            if(Object.keys(that.copyActionModel).length === 0){
                return;
            }
            let dataMapping:any ={'Bug':'bug','task':'task','todo':'todo','daily':'ibzdaily','reportly':'ibzreportly','testtask':'testtask','Story':'story'};
            that.computeNodeState(data,dataMapping[data.itemType]).then((result:any) => {
                let flag:boolean = false;
                if(Object.values(result).length>0){
                    flag =Object.values(result).some((item:any) =>{
                        return item.visible === true;
                    })
                }
                if(flag){
                    let props = { data: data, renderContent: that.renderContextMenu.bind(this) };
                    let component = ContextMenu;
                    const vm:any = new Vue({
                        render(h) {
                            return h(component, { props });
                        }
                    }).$mount();
                    document.body.appendChild(vm.$el);
                    const comp: any = vm.$children[0];
                    comp.showContextMenu(event.clientX, event.clientY);
                }
            });
        });
    }

    /**
     * 绘制右键菜单
     *
     * @param {*} event
     * @returns
     * @memberof MyWorkPCBase
     */
    public renderContextMenu(event: any) {
        let content;
        if (event && event.itemType) {
            const data: any = JSON.parse(JSON.stringify(event));
            this.selections = [event];
            switch(event.itemType){
            }
        }
        return content;
    }
}