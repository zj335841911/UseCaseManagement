import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import MainToolbarService from './main-toolbar-portlet-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { Environment } from '@/environments/environment';
import UIService from '@/uiservice/ui-service';

/**
 * dashboard_sysportlet3部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MainToolbarPortletBase}
 */
export class MainToolbarPortletBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainToolbarPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {MainToolbarService}
     * @memberof MainToolbarPortletBase
     */
    public service: MainToolbarService = new MainToolbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MainToolbarPortletBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainToolbarPortletBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainToolbarPortletBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof MainToolbarBase
     */  
    public appUIService: StoryUIService = new StoryUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u797d4ad_click(params: any = {}, tag?: any, $event?: any) {
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
        this.Exit(datas, contextJO,paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_uab7aa69_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ActiviteDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_ubaacd59_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ChangeStoryDetailDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u21f62f3_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ReviewStoryDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u5886bad_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_AssignToDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u0c488e2_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_CloseStoryDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_udabbc19_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_SubStoryCz(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u85aeac5_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_OpenBaseInfoC(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_batchdownload_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_BatchDownload(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet3_u49497fc_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_delete(datas,contextJO, paramJO,  $event, xData,this,"Story");
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
     * @memberof StoryMainViewBase
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
     * @memberof MainToolbar
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof MainToolbar
     */
    @Prop() public width?: number;

    /**
     * 门户部件类型
     *
     * @type {number}
     * @memberof MainToolbarBase
     */
    public portletType: string = 'actionbar';

    /**
     * 界面行为模型数据
     *
     * @memberof MainToolbarBase
     */
    public uiactionModel: any = {
        exit: {name: 'exit', actiontarget: '', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: '', uiaction: { tag: 'Exit', target: '' } },
        activitedash: {name: 'activitedash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__STORY_ACTIVE_BUT', uiaction: { tag: 'ActiviteDash', target: 'SINGLEKEY' } },
        changestorydetaildash: {name: 'changestorydetaildash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__STORY_CHANGED_BUT', uiaction: { tag: 'ChangeStoryDetailDash', target: 'SINGLEKEY' } },
        reviewstorydash: {name: 'reviewstorydash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__STORY_REVIEW_BUT', uiaction: { tag: 'ReviewStoryDash', target: 'SINGLEKEY' } },
        assigntodash: {name: 'assigntodash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__STORY_ASS_BUT', uiaction: { tag: 'AssignToDash', target: 'SINGLEKEY' } },
        closestorydash: {name: 'closestorydash', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__STORY_CLOSED_BUT', uiaction: { tag: 'CloseStoryDash', target: 'SINGLEKEY' } },
        substorycz: {name: 'substorycz', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__STORY_XQXF_BUT', uiaction: { tag: 'SubStoryCz', target: 'SINGLEKEY' } },
        openbaseinfoc: {name: 'openbaseinfoc', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__STORY_EDIT_BUT', uiaction: { tag: 'OpenBaseInfoC', target: 'SINGLEKEY' } },
        batchdownload: {name: 'batchdownload', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: '', uiaction: { tag: 'BatchDownload', target: 'SINGLEKEY' } },
        delete: {name: 'delete', actiontarget: 'SINGLEKEY',  disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__STORY_DELETE_BUT', uiaction: { tag: 'delete', target: 'SINGLEKEY' } },
    }

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof MainToolbarBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet3_u797d4ad_click",
        text: "返回",
        iconcls: "fa fa-sign-out",
        icon: "",
        noprivdisplaymode: 2,
        actiontarget:'',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_uab7aa69_click",
        text: "激活",
        iconcls: "fa fa-magic",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_ACTIVE_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_ubaacd59_click",
        text: "变更",
        iconcls: "fa fa-exchange",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_CHANGED_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u21f62f3_click",
        text: "评审",
        iconcls: "fa fa-search",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_REVIEW_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u5886bad_click",
        text: "指派",
        iconcls: "fa fa-hand-o-right",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_ASS_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u0c488e2_click",
        text: "关闭",
        iconcls: "fa fa-power-off",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_CLOSED_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_udabbc19_click",
        text: "细分",
        iconcls: "iconfont studio-icon-subnets",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_XQXF_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u85aeac5_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_EDIT_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_batchdownload_click",
        text: "下载",
        iconcls: "download",
        icon: "",
        noprivdisplaymode: 2,
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet3_u49497fc_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__STORY_DELETE_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof MainToolbarBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet3_u797d4ad_click')){
            this.dashboard_sysportlet3_u797d4ad_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_uab7aa69_click')){
            this.dashboard_sysportlet3_uab7aa69_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_ubaacd59_click')){
            this.dashboard_sysportlet3_ubaacd59_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u21f62f3_click')){
            this.dashboard_sysportlet3_u21f62f3_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u5886bad_click')){
            this.dashboard_sysportlet3_u5886bad_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u0c488e2_click')){
            this.dashboard_sysportlet3_u0c488e2_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_udabbc19_click')){
            this.dashboard_sysportlet3_udabbc19_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u85aeac5_click')){
            this.dashboard_sysportlet3_u85aeac5_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_batchdownload_click')){
            this.dashboard_sysportlet3_batchdownload_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet3_u49497fc_click')){
            this.dashboard_sysportlet3_u49497fc_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof MainToolbarBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainToolbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainToolbarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof MainToolbarBase
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
     * @memberof MainToolbarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainToolbarBase
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
     * @memberof MainToolbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainToolbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计算界面行为权限
     *
     * @memberof MainToolbarBase
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
     * @memberof MainToolbarBase
     */
    public refresh(args?: any) {
      this.$emit('refresh',args);
    }

}
