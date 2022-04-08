import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import CalendarMainService from './calendar-main-form-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import {
    FormButtonModel,
    FormPageModel,
    FormItemModel,
    FormDRUIPartModel,
    FormPartModel,
    FormGroupPanelModel,
    FormIFrameModel,
    FormRowItemModel,
    FormTabPageModel,
    FormTabPanelModel,
    FormUserControlModel,
} from '@/model/form-detail';

/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {CalendarMainEditFormBase}
 */
export class CalendarMainEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CalendarMainEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {CalendarMainService}
     * @memberof CalendarMainEditFormBase
     */
    public service: CalendarMainService = new CalendarMainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof CalendarMainEditFormBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarMainEditFormBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarMainEditFormBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof CalendarMainBase
     */  
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button1_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_ConfirmBugDash(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button2_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_AssingToBugCz(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button3_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_ResolveBugDash(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button4_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_CloseBugDash(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button5_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_Activation(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button6_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_MainEditDash(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof CalendarMainEditFormBase
     */
    protected drCount: number = 1;

    /**
     * 主键表单项名称
     *
     * @protected
     * @type {number}
     * @memberof CalendarMainEditFormBase
     */
    protected formKeyItemName: string = 'id';
    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof CalendarMainEditFormBase
     */
    public data: any = {
        srfupdatedate: null,
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        id: null,
        status: null,
        title: null,
        severity: null,
        pri: null,
        deadline: null,
        isfavorites: null,
        confirmed: null,
        steps: null,
        bug: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof CalendarMainEditFormBase
     */
    public majorMessageField: string = 'title';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CalendarMainEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CalendarMainBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof CalendarMainEditFormBase
     */
    public detailsModel: any = {
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.bug.calendarmain_form', extractMode: 'ITEM', details: [] } }),

        button1: new FormButtonModel({
    caption: '确认', detailType: 'BUTTON', name: 'button1', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'ConfirmBugDash',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__BUG_CONFIRM_BUT',
        visible: true,
        disabled: false,
        }
}),

        button2: new FormButtonModel({
    caption: '指派', detailType: 'BUTTON', name: 'button2', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'AssingToBugCz',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__BUG_ASSIGNTO_BUT',
        visible: true,
        disabled: false,
        }
}),

        button3: new FormButtonModel({
    caption: '解决', detailType: 'BUTTON', name: 'button3', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'ResolveBugDash',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__BUG_RESOLVE_BUT',
        visible: true,
        disabled: false,
        }
}),

        button4: new FormButtonModel({
    caption: '关闭', detailType: 'BUTTON', name: 'button4', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'CloseBugDash',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__BUG_CLOSE_BUT',
        visible: true,
        disabled: false,
        }
}),

        button5: new FormButtonModel({
    caption: '激活', detailType: 'BUTTON', name: 'button5', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'Activation',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__BUG_ACTIVATE_BUT',
        visible: true,
        disabled: false,
        }
}),

        button6: new FormButtonModel({
    caption: '编辑', detailType: 'BUTTON', name: 'button6', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'MainEditDash',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__BUG_EDIT_BUT',
        visible: true,
        disabled: false,
        }
}),

        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.bug.calendarmain_form', extractMode: 'ITEM', details: [] } }),

        grouppanel4: new FormGroupPanelModel({ caption: '重现步骤', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.bug.calendarmain_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel1: new FormGroupPanelModel({ caption: '历史记录', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.bug.calendarmain_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: 'Bug基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.bug.calendarmain_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srfupdatedate: new FormItemModel({
    caption: '修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

        srforikey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfkey: new FormItemModel({
    caption: 'Bug编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

        srfmajortext: new FormItemModel({
    caption: 'Bug标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srftempmode: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfuf: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfdeid: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfsourcekey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        id: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

        status: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        title: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        severity: new FormItemModel({
    caption: '严重程度', detailType: 'FORMITEM', name: 'severity', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        pri: new FormItemModel({
    caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        deadline: new FormItemModel({
    caption: '截止日期', detailType: 'FORMITEM', name: 'deadline', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        isfavorites: new FormItemModel({
    caption: '是否收藏', detailType: 'FORMITEM', name: 'isfavorites', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        confirmed: new FormItemModel({
    caption: '是否确认', detailType: 'FORMITEM', name: 'confirmed', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        steps: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'steps', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

    };

	/**
	 * 表单 确认 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button1_click($event: any): void {
        this.form_button1_click(null, null, $event);

    }

	/**
	 * 表单 指派 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button2_click($event: any): void {
        this.form_button2_click(null, null, $event);

    }

	/**
	 * 表单 解决 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button3_click($event: any): void {
        this.form_button3_click(null, null, $event);

    }

	/**
	 * 表单 关闭 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button4_click($event: any): void {
        this.form_button4_click(null, null, $event);

    }

	/**
	 * 表单 激活 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button5_click($event: any): void {
        this.form_button5_click(null, null, $event);

    }

	/**
	 * 表单 编辑 事件
	 *
	 * @memberof @memberof CalendarMainEditFormBase
	 */
    public button6_click($event: any): void {
        this.form_button6_click(null, null, $event);

    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof CalendarMainBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}