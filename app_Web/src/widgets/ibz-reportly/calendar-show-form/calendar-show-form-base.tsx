import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import IbzReportlyService from '@/service/ibz-reportly/ibz-reportly-service';
import CalendarShowService from './calendar-show-form-service';
import IbzReportlyUIService from '@/uiservice/ibz-reportly/ibz-reportly-ui-service';
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
 * @extends {CalendarShowEditFormBase}
 */
export class CalendarShowEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CalendarShowEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {CalendarShowService}
     * @memberof CalendarShowEditFormBase
     */
    public service: CalendarShowService = new CalendarShowService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzReportlyService}
     * @memberof CalendarShowEditFormBase
     */
    public appEntityService: IbzReportlyService = new IbzReportlyService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarShowEditFormBase
     */
    protected appDeName: string = 'ibzreportly';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarShowEditFormBase
     */
    protected appDeLogicName: string = '汇报';

    /**
     * 界面UI服务对象
     *
     * @type {IbzReportlyUIService}
     * @memberof CalendarShowBase
     */  
    public appUIService: IbzReportlyUIService = new IbzReportlyUIService(this.$store);

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
        const curUIService:IbzReportlyUIService  = new IbzReportlyUIService();
        curUIService.IbzReportly_CalendarShowEdit(datas,contextJO, paramJO,  $event, xData,this,"IbzReportly");
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
        const curUIService:IbzReportlyUIService  = new IbzReportlyUIService();
        curUIService.IbzReportly_CalendarShowSubmit(datas,contextJO, paramJO,  $event, xData,this,"IbzReportly");
    }


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof CalendarShowEditFormBase
     */
    protected drCount: number = 2;

    /**
     * 主键表单项名称
     *
     * @protected
     * @type {number}
     * @memberof CalendarShowEditFormBase
     */
    protected formKeyItemName: string = 'ibz_reportlyid';
    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof CalendarShowEditFormBase
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
        ibz_reportlyid: null,
        ibz_reportlyname: null,
        account: null,
        date: null,
        content: null,
        issubmit: null,
        ibzreportly: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof CalendarShowEditFormBase
     */
    public majorMessageField: string = 'ibz_reportlyname';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CalendarShowEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CalendarShowBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof CalendarShowEditFormBase
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzreportly.calendarshow_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzreportly.calendarshow_form', extractMode: 'ITEM', details: [] } }),

        button1: new FormButtonModel({
    caption: '编辑', detailType: 'BUTTON', name: 'button1', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'CalendarShowEdit',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 6,
        dataaccaction: 'SRFUR__REPORTLY_EDIT_BUT',
        visible: true,
        disabled: false,
        }
}),

        button2: new FormButtonModel({
    caption: '提交', detailType: 'BUTTON', name: 'button2', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'CalendarShowSubmit',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 6,
        dataaccaction: 'SRFUR__REPORTLY_SUBMIT_BUT',
        visible: true,
        disabled: false,
        }
}),

        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzreportly.calendarshow_form', extractMode: 'ITEM', details: [] } }),

        grouppanel4: new FormGroupPanelModel({ caption: '工作内容', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzreportly.calendarshow_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel5: new FormGroupPanelModel({ caption: '附件', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzreportly.calendarshow_form', extractMode: 'ITEM', details: [] } }),

        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel6: new FormGroupPanelModel({ caption: '历史记录', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzreportly.calendarshow_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srfupdatedate: new FormItemModel({
    caption: '更新时间', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srforikey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfkey: new FormItemModel({
    caption: '汇报标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfmajortext: new FormItemModel({
    caption: '汇报名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        ibz_reportlyid: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'ibz_reportlyid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        ibz_reportlyname: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'ibz_reportlyname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        account: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'account', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        date: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        content: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'content', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        issubmit: new FormItemModel({
    caption: '是否提交', detailType: 'FORMITEM', name: 'issubmit', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

    };

	/**
	 * 表单 编辑 事件
	 *
	 * @memberof @memberof CalendarShowEditFormBase
	 */
    public button1_click($event: any): void {
        this.form_button1_click(null, null, $event);

    }

	/**
	 * 表单 提交 事件
	 *
	 * @memberof @memberof CalendarShowEditFormBase
	 */
    public button2_click($event: any): void {
        this.form_button2_click(null, null, $event);

    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof CalendarShowBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}