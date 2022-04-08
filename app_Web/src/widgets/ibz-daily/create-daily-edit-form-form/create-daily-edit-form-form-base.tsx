import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import IbzDailyService from '@/service/ibz-daily/ibz-daily-service';
import CreateDailyEditFormService from './create-daily-edit-form-form-service';
import IbzDailyUIService from '@/uiservice/ibz-daily/ibz-daily-ui-service';
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
 * @extends {CreateDailyEditFormEditFormBase}
 */
export class CreateDailyEditFormEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CreateDailyEditFormEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {CreateDailyEditFormService}
     * @memberof CreateDailyEditFormEditFormBase
     */
    public service: CreateDailyEditFormService = new CreateDailyEditFormService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzDailyService}
     * @memberof CreateDailyEditFormEditFormBase
     */
    public appEntityService: IbzDailyService = new IbzDailyService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CreateDailyEditFormEditFormBase
     */
    protected appDeName: string = 'ibzdaily';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CreateDailyEditFormEditFormBase
     */
    protected appDeLogicName: string = '日报';

    /**
     * 界面UI服务对象
     *
     * @type {IbzDailyUIService}
     * @memberof CreateDailyEditFormBase
     */  
    public appUIService: IbzDailyUIService = new IbzDailyUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof CreateDailyEditFormEditFormBase
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
        ibz_dailyname: null,
        date: null,
        reportto: null,
        mailto: null,
        todaytask: null,
        worktoday: null,
        tomorrowplanstask: null,
        planstomorrow: null,
        comment: null,
        files: null,
        ibz_dailyid: null,
        account: null,
        issubmit: null,
        ibzdaily: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof CreateDailyEditFormEditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CreateDailyEditFormEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CreateDailyEditFormBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof CreateDailyEditFormEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '日报基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzdaily.createdailyeditform_form', extractMode: 'ITEM', details: [] } }),

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
    caption: '日报标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfmajortext: new FormItemModel({
    caption: '日报名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        ibz_dailyname: new FormItemModel({
    caption: '日报名称', detailType: 'FORMITEM', name: 'ibz_dailyname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        todaytask: new FormItemModel({
    caption: '完成任务', detailType: 'FORMITEM', name: 'todaytask', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        worktoday: new FormItemModel({
    caption: '今日工作', detailType: 'FORMITEM', name: 'worktoday', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        tomorrowplanstask: new FormItemModel({
    caption: '明日计划任务', detailType: 'FORMITEM', name: 'tomorrowplanstask', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        planstomorrow: new FormItemModel({
    caption: '明日计划', detailType: 'FORMITEM', name: 'planstomorrow', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        ibz_dailyid: new FormItemModel({
    caption: '日报标识', detailType: 'FORMITEM', name: 'ibz_dailyid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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
     * @memberof CreateDailyEditFormEditFormBase
     */
    public createDefault() {                    
        if (this.data.hasOwnProperty('ibz_dailyname')) {
            this.data['ibz_dailyname'] = this.context['srfusername'];
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
     * @memberof CreateDailyEditFormBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}