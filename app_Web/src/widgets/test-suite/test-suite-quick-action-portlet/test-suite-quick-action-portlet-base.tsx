import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import TestSuiteService from '@/service/test-suite/test-suite-service';
import TestSuiteQuickActionService from './test-suite-quick-action-portlet-service';
import TestSuiteUIService from '@/uiservice/test-suite/test-suite-ui-service';
import { Environment } from '@/environments/environment';
import UIService from '@/uiservice/ui-service';

/**
 * dashboard_sysportlet4部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TestSuiteQuickActionPortletBase}
 */
export class TestSuiteQuickActionPortletBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteQuickActionPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {TestSuiteQuickActionService}
     * @memberof TestSuiteQuickActionPortletBase
     */
    public service: TestSuiteQuickActionService = new TestSuiteQuickActionService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestSuiteService}
     * @memberof TestSuiteQuickActionPortletBase
     */
    public appEntityService: TestSuiteService = new TestSuiteService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteQuickActionPortletBase
     */
    protected appDeName: string = 'testsuite';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteQuickActionPortletBase
     */
    protected appDeLogicName: string = '测试套件';

    /**
     * 界面UI服务对象
     *
     * @type {TestSuiteUIService}
     * @memberof TestSuiteQuickActionBase
     */  
    public appUIService: TestSuiteUIService = new TestSuiteUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_ud46cf4d_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"TestSuite");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_ub905758_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestSuiteUIService  = new TestSuiteUIService();
        curUIService.TestSuite_linkCaseDash(datas,contextJO, paramJO,  $event, xData,this,"TestSuite");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_u7cb49d8_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestSuiteUIService  = new TestSuiteUIService();
        curUIService.TestSuite_EditsuiteDash(datas,contextJO, paramJO,  $event, xData,this,"TestSuite");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_ua6cd1b2_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestSuiteUIService  = new TestSuiteUIService();
        curUIService.TestSuite_DeleteDash(datas,contextJO, paramJO,  $event, xData,this,"TestSuite");
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
     * @memberof TestSuiteMainDashboardViewBase
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
     * @memberof TestSuiteQuickAction
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof TestSuiteQuickAction
     */
    @Prop() public width?: number;

    /**
     * 门户部件类型
     *
     * @type {number}
     * @memberof TestSuiteQuickActionBase
     */
    public portletType: string = 'actionbar';

    /**
     * 界面行为模型数据
     *
     * @memberof TestSuiteQuickActionBase
     */
    public uiactionModel: any = {
        exit: {name: 'exit', actiontarget: '', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: '', uiaction: { tag: 'Exit', target: '' } },
        linkcasedash: {name: 'linkcasedash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__TESTSU_LINKCASE_BUT', uiaction: { tag: 'linkCaseDash', target: 'SINGLEKEY' } },
        editsuitedash: {name: 'editsuitedash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__TESTSU_EDITSUITE_BUT', uiaction: { tag: 'EditsuiteDash', target: 'SINGLEKEY' } },
        deletedash: {name: 'deletedash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__TESTSU_DELETE_BUT', uiaction: { tag: 'DeleteDash', target: 'SINGLEKEY' } },
    }

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof TestSuiteQuickActionBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet4_ud46cf4d_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        noprivdisplaymode: 2,
        actiontarget:'',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_ub905758_click",
        text: "关联用例",
        iconcls: "fa fa-link",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TESTSU_LINKCASE_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_u7cb49d8_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TESTSU_EDITSUITE_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet4_ua6cd1b2_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__TESTSU_DELETE_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof TestSuiteQuickActionBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet4_ud46cf4d_click')){
            this.dashboard_sysportlet4_ud46cf4d_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_ub905758_click')){
            this.dashboard_sysportlet4_ub905758_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_u7cb49d8_click')){
            this.dashboard_sysportlet4_u7cb49d8_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_ua6cd1b2_click')){
            this.dashboard_sysportlet4_ua6cd1b2_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof TestSuiteQuickActionBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestSuiteQuickActionBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestSuiteQuickActionBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof TestSuiteQuickActionBase
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
     * @memberof TestSuiteQuickActionBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TestSuiteQuickActionBase
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
     * @memberof TestSuiteQuickActionBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestSuiteQuickActionBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计算界面行为权限
     *
     * @memberof TestSuiteQuickActionBase
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
     * @memberof TestSuiteQuickActionBase
     */
    public refresh(args?: any) {
      this.$emit('refresh',args);
    }

}
