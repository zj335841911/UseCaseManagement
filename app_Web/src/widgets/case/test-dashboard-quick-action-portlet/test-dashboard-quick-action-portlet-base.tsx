import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import TestDashboardQuickActionService from './test-dashboard-quick-action-portlet-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { Environment } from '@/environments/environment';
import UIService from '@/uiservice/ui-service';

/**
 * dashboard_sysportlet4部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TestDashboardQuickActionPortletBase}
 */
export class TestDashboardQuickActionPortletBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestDashboardQuickActionPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {TestDashboardQuickActionService}
     * @memberof TestDashboardQuickActionPortletBase
     */
    public service: TestDashboardQuickActionService = new TestDashboardQuickActionService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof TestDashboardQuickActionPortletBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestDashboardQuickActionPortletBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestDashboardQuickActionPortletBase
     */
    protected appDeLogicName: string = '测试用例';

    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof TestDashboardQuickActionBase
     */  
    public appUIService: CaseUIService = new CaseUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u4bdfefd_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u26afeb4_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_CaseExecute(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_uaee554d_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_CASEOpenTestRunResultView(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u2cd191b_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_MainEditCz(datas,contextJO, paramJO,  $event, xData,this,"Case");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_ub5e46cc_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:CaseUIService  = new CaseUIService();
        curUIService.Case_deleteCz(datas,contextJO, paramJO,  $event, xData,this,"Case");
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
     * @memberof CaseTestMainDashboardViewBase
     */
    public Exit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        this.closeView(args);
        if(window.parent){
            window.parent.postMessage([{ ...args }],'*');
        }
    }


    /**
     * 刷新
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof CaseTestMainDashboardViewBase
     */
    public Refresh(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.refresh && xData.refresh instanceof Function) {
            xData.refresh(args);
        } else if (_this.refresh && _this.refresh instanceof Function) {
            _this.refresh(args);
        }
    }


    /**
     * 长度
     *
     * @type {number}
     * @memberof TestDashboardQuickAction
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof TestDashboardQuickAction
     */
    @Prop() public width?: number;

    /**
     * 门户部件类型
     *
     * @type {number}
     * @memberof TestDashboardQuickActionBase
     */
    public portletType: string = 'actionbar';

    /**
     * 界面行为模型数据
     *
     * @memberof TestDashboardQuickActionBase
     */
    public uiactionModel: any = {
        exit: {name: 'exit', actiontarget: '', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: '', uiaction: { tag: 'Exit', target: '' } },
        caseexecute: {name: 'caseexecute', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 1, dataaccaction: 'SRFUR__CASE_CASERUN_BUT', uiaction: { tag: 'CaseExecute', target: 'SINGLEKEY' } },
        caseopentestrunresultview: {name: 'caseopentestrunresultview', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 1, dataaccaction: 'SRFUR__CASE_CASERESULT_BUT', uiaction: { tag: 'CASEOpenTestRunResultView', target: 'SINGLEKEY' } },
        maineditcz: {name: 'maineditcz', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__CASE_EDIT_BUT', uiaction: { tag: 'MainEditCz', target: 'SINGLEKEY' } },
        deletecz: {name: 'deletecz', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__CASE_DELETE_BUT', uiaction: { tag: 'deleteCz', target: 'SINGLEKEY' } },
    }

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof TestDashboardQuickActionBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet4_u4bdfefd_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        noprivdisplaymode: 2,
        actiontarget:'',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_u26afeb4_click",
        text: "执行",
        iconcls: "fa fa-play-circle-o",
        icon: "",
        noprivdisplaymode: 1,
        dataaccaction:'SRFUR__CASE_CASERUN_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_uaee554d_click",
        text: "结果",
        iconcls: "fa fa-stack-overflow",
        icon: "",
        noprivdisplaymode: 1,
        dataaccaction:'SRFUR__CASE_CASERESULT_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_u2cd191b_click",
        text: "编辑",
        iconcls: null,
        icon: null,
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__CASE_EDIT_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_ub5e46cc_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__CASE_DELETE_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof TestDashboardQuickActionBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet4_u4bdfefd_click')){
            this.dashboard_sysportlet4_u4bdfefd_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_u26afeb4_click')){
            this.dashboard_sysportlet4_u26afeb4_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_uaee554d_click')){
            this.dashboard_sysportlet4_uaee554d_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_u2cd191b_click')){
            this.dashboard_sysportlet4_u2cd191b_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_ub5e46cc_click')){
            this.dashboard_sysportlet4_ub5e46cc_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof TestDashboardQuickActionBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestDashboardQuickActionBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestDashboardQuickActionBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof TestDashboardQuickActionBase
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
     * @memberof TestDashboardQuickActionBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TestDashboardQuickActionBase
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
     * @memberof TestDashboardQuickActionBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestDashboardQuickActionBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计算界面行为权限
     *
     * @memberof TestDashboardQuickActionBase
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
     * @memberof TestDashboardQuickActionBase
     */
    public refresh(args?: any) {
      this.$emit('refresh',args);
    }

}
