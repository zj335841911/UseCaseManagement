import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import IbzMonthlyService from '@/service/ibz-monthly/ibz-monthly-service';
import NewService from './new-form-service';
import IbzMonthlyUIService from '@/uiservice/ibz-monthly/ibz-monthly-ui-service';
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
 * @extends {NewEditFormBase}
 */
export class NewEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof NewEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {NewService}
     * @memberof NewEditFormBase
     */
    public service: NewService = new NewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMonthlyService}
     * @memberof NewEditFormBase
     */
    public appEntityService: IbzMonthlyService = new IbzMonthlyService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof NewEditFormBase
     */
    protected appDeName: string = 'ibzmonthly';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof NewEditFormBase
     */
    protected appDeLogicName: string = '月报';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMonthlyUIService}
     * @memberof NewBase
     */  
    public appUIService: IbzMonthlyUIService = new IbzMonthlyUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof NewEditFormBase
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
        ibz_monthlyname: null,
        date: null,
        reportto: null,
        mailto: null,
        thismonthtask: null,
        workthismonth: null,
        nextmonthplanstask: null,
        plansnextmonth: null,
        comment: null,
        files: null,
        ibz_monthlyid: null,
        account: null,
        issubmit: null,
        ibzmonthly: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof NewEditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof NewEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof NewBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof NewEditFormBase
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzmonthly.new_form', extractMode: 'ITEM', details: [] } }),

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
    caption: '月报标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfmajortext: new FormItemModel({
    caption: '月报名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        ibz_monthlyname: new FormItemModel({
    caption: '月报名称', detailType: 'FORMITEM', name: 'ibz_monthlyname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        date: new FormItemModel({
    caption: '日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        reportto: new FormItemModel({
    caption: '汇报给', detailType: 'FORMITEM', name: 'reportto', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        mailto: new FormItemModel({
    caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        thismonthtask: new FormItemModel({
    caption: '本月完成任务', detailType: 'FORMITEM', name: 'thismonthtask', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        workthismonth: new FormItemModel({
    caption: '本月工作', detailType: 'FORMITEM', name: 'workthismonth', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        nextmonthplanstask: new FormItemModel({
    caption: '下月计划任务', detailType: 'FORMITEM', name: 'nextmonthplanstask', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        plansnextmonth: new FormItemModel({
    caption: '下月计划', detailType: 'FORMITEM', name: 'plansnextmonth', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        comment: new FormItemModel({
    caption: '其他事项', detailType: 'FORMITEM', name: 'comment', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        files: new FormItemModel({
    caption: '附件', detailType: 'FORMITEM', name: 'files', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        ibz_monthlyid: new FormItemModel({
    caption: '月报标识', detailType: 'FORMITEM', name: 'ibz_monthlyid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        account: new FormItemModel({
    caption: '用户', detailType: 'FORMITEM', name: 'account', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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
     * 新建默认值
     * @memberof NewEditFormBase
     */
    public createDefault() {                    
        if (this.data.hasOwnProperty('ibz_monthlyname')) {
            this.data['ibz_monthlyname'] = this.context['srfusername'];
        }
        if (this.data.hasOwnProperty('date')) {
            this.data['date'] = this.$util.dateFormat(new Date());
        }
        if (this.data.hasOwnProperty('account')) {
            this.data['account'] = this.context['srfloginname'];
        }
    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof NewBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}