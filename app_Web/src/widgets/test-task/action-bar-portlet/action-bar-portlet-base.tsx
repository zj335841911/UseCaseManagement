import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import ActionBarService from './action-bar-portlet-service';
import TestTaskUIService from '@/uiservice/test-task/test-task-ui-service';
import { Environment } from '@/environments/environment';
import UIService from '@/uiservice/ui-service';

/**
 * dashboard_sysportlet4部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ActionBarPortletBase}
 */
export class ActionBarPortletBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ActionBarPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {ActionBarService}
     * @memberof ActionBarPortletBase
     */
    public service: ActionBarService = new ActionBarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof ActionBarPortletBase
     */
    public appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ActionBarPortletBase
     */
    protected appDeName: string = 'testtask';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ActionBarPortletBase
     */
    protected appDeLogicName: string = '测试版本';

    /**
     * 界面UI服务对象
     *
     * @type {TestTaskUIService}
     * @memberof ActionBarBase
     */  
    public appUIService: TestTaskUIService = new TestTaskUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u4e19f49_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u16e5bb7_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_ActiviteDash(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_uc92b341_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_StartDash(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_uca7e656_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_CloseDash(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u7d6bb89_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_BlockDash(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 返回
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TestTaskMainDashboardViewBase
     */
    public Exit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        this.closeView(args);
        if(window.parent){
            window.parent.postMessage([{ ...args }],'*');
        }
    }



    /**
     * 长度
     *
     * @type {number}
     * @memberof ActionBar
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ActionBar
     */
    @Prop() public width?: number;

    /**
     * 门户部件类型
     *
     * @type {number}
     * @memberof ActionBarBase
     */
    public portletType: string = 'actionbar';

    /**
     * 界面行为模型数据
     *
     * @memberof ActionBarBase
     */
    public uiactionModel: any = {
        exit: {name: 'exit', actiontarget: '', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: '', uiaction: { tag: 'Exit', target: '' } },
        activitedash: {name: 'activitedash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__TESTT_ACTIVITE_BUT', uiaction: { tag: 'ActiviteDash', target: 'SINGLEKEY' } },
        startdash: {name: 'startdash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__TESTT_START_BUT', uiaction: { tag: 'StartDash', target: 'SINGLEKEY' } },
        closedash: {name: 'closedash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__TESTT_CLOSED_BUT', uiaction: { tag: 'CloseDash', target: 'SINGLEKEY' } },
        blockdash: {name: 'blockdash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__TESTT_BLOCK_BUT', uiaction: { tag: 'BlockDash', target: 'SINGLEKEY' } },
    }

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof ActionBarBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet4_u4e19f49_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        noprivdisplaymode: 2,
        actiontarget:'',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_u16e5bb7_click",
        text: "激活",
        iconcls: "fa fa-magic",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TESTT_ACTIVITE_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_uc92b341_click",
        text: "开始",
        iconcls: "fa fa-play",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TESTT_START_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_uca7e656_click",
        text: "关闭",
        iconcls: "fa fa-close",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TESTT_CLOSED_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_u7d6bb89_click",
        text: "阻塞",
        iconcls: "fa fa-pause",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TESTT_BLOCK_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof ActionBarBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet4_u4e19f49_click')){
            this.dashboard_sysportlet4_u4e19f49_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_u16e5bb7_click')){
            this.dashboard_sysportlet4_u16e5bb7_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_uc92b341_click')){
            this.dashboard_sysportlet4_uc92b341_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_uca7e656_click')){
            this.dashboard_sysportlet4_uca7e656_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_u7d6bb89_click')){
            this.dashboard_sysportlet4_u7d6bb89_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ActionBarBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ActionBarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ActionBarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof ActionBarBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return 'auto';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ActionBarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ActionBarBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if(Object.is(tag, "all-portlet") && Object.is(action,'loadmodel')){
                   this.calcUIActionAuthState(data);
                }
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ActionBarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ActionBarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计算界面行为权限
     *
     * @memberof ActionBarBase
     */
    public calcUIActionAuthState(data:any = {}) {
        //  如果是操作栏，不计算权限
        if(this.portletType && Object.is('actionbar', this.portletType)) {
            return;
        }
        let _this: any = this;
        let uiservice: any = _this.appUIService ? _this.appUIService : new UIService(_this.$store);
        if(_this.uiactionModel){
            ViewTool.calcActionItemAuthState(data,_this.uiactionModel,uiservice);
        }
    }


    /**
     * 刷新
     *
     * @memberof ActionBarBase
     */
    public refresh(args?: any) {
      this.$emit('refresh',args);
    }

}
