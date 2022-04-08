import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import NewPlanService from './new-plan-form-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';
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
 * @extends {NewPlanEditFormBase}
 */
export class NewPlanEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof NewPlanEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {NewPlanService}
     * @memberof NewPlanEditFormBase
     */
    public service: NewPlanService = new NewPlanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof NewPlanEditFormBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof NewPlanEditFormBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof NewPlanEditFormBase
     */
    protected appDeLogicName: string = '项目';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof NewPlanBase
     */  
    public appUIService: ProjectUIService = new ProjectUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof NewPlanEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        name: null,
        code: null,
        begin: null,
        end: null,
        period: null,
        days: null,
        team: null,
        type: null,
        supproreport: null,
        srfarray: null,
        products: null,
        branchs: null,
        plans: null,
        formitemex2: null,
        desc: null,
        acl: null,
        id: null,
        project: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof NewPlanEditFormBase
     */
    public majorMessageField: string = 'name';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof NewPlanEditFormBase
     */
    public rules(): any{
        return {
            name: [
                {
                    required: this.detailsModel.name.required,
                    type: 'string',
                    message: `${this.$t('entities.project.newplan_form.details.name')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.name.required,
                    type: 'string',
                    message: `${this.$t('entities.project.newplan_form.details.name')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            code: [
                {
                    required: this.detailsModel.code.required,
                    type: 'string',
                    message: `${this.$t('entities.project.newplan_form.details.code')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.code.required,
                    type: 'string',
                    message: `${this.$t('entities.project.newplan_form.details.code')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            begin: [
                {
                    required: this.detailsModel.begin.required,
                    type: 'string',
                    message: `${this.$t('entities.project.newplan_form.details.begin')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.begin.required,
                    type: 'string',
                    message: `${this.$t('entities.project.newplan_form.details.begin')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            end: [
                {
                    required: this.detailsModel.end.required,
                    type: 'string',
                    message: `${this.$t('entities.project.newplan_form.details.end')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.end.required,
                    type: 'string',
                    message: `${this.$t('entities.project.newplan_form.details.end')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
                {
                    validator: (rule: any, value: any) => {
                        return this.verifyDeRules("end").isPast;
                    },
                    message: this.verifyDeRules("end").infoMessage,
                    trigger: 'change',
                },
                {
                    validator: (rule: any, value: any) => {
                        return this.verifyDeRules("end").isPast;
                    },
                    message: this.verifyDeRules("end").infoMessage,
                    trigger: 'blur',
                },
        ],
            days: [
                {
                    required: this.detailsModel.days.required,
                    type: 'number',
                    message: `${this.$t('entities.project.newplan_form.details.days')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.days.required,
                    type: 'number',
                    message: `${this.$t('entities.project.newplan_form.details.days')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            formitemex2: [
        ],
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof NewPlanBase
     */
    public deRules:any = {
        end:[
                  {
                      type:"GROUP",
                      condOP:"AND",
                      ruleInfo:"截止日期应该大于起始日期", 
                      isKeyCond:false,
                      isNotMode:false,
                      group:[
                  {
                      type:"SIMPLE",
                      condOP:"GTANDEQ",
                      ruleInfo:"截止日期应该大于起始日期", 
                      isKeyCond:false,
                      paramValue:"BEGIN",
                      paramType:"ENTITYFIELD",
                      isNotMode:false,
                      deName:"end",
                  },
                        ]
                  },
                ],
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof NewPlanEditFormBase
     */
    public detailsModel: any = {
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.newplan_form', extractMode: 'ITEM', details: [] } }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.newplan_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: 'project基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.project.newplan_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfkey: new FormItemModel({
    caption: '项目编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

        srfmajortext: new FormItemModel({
    caption: '项目名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        name: new FormItemModel({
    caption: '项目名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        code: new FormItemModel({
    caption: '项目代号', detailType: 'FORMITEM', name: 'code', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        begin: new FormItemModel({
    caption: '开始时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        end: new FormItemModel({
    caption: '至', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        period: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'period', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        days: new FormItemModel({
    caption: '可用工作日', detailType: 'FORMITEM', name: 'days', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        team: new FormItemModel({
    caption: '团队名称', detailType: 'FORMITEM', name: 'team', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        type: new FormItemModel({
    caption: '项目类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        supproreport: new FormItemModel({
    caption: '支持项目汇报', detailType: 'FORMITEM', name: 'supproreport', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfarray: new FormItemModel({
    caption: '关联数据数组', detailType: 'FORMITEM', name: 'srfarray', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        products: new FormItemModel({
    caption: '关联产品', detailType: 'FORMITEM', name: 'products', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        branchs: new FormItemModel({
    caption: '关联产品平台集合', detailType: 'FORMITEM', name: 'branchs', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        plans: new FormItemModel({
    caption: '关联计划', detailType: 'FORMITEM', name: 'plans', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitemex2: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'formitemex2', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        desc: new FormItemModel({
    caption: '项目描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        acl: new FormItemModel({
    caption: '访问控制', detailType: 'FORMITEM', name: 'acl', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        id: new FormItemModel({
    caption: '项目编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

    };

    /**
     * 重置表单项值
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof NewPlanEditFormBase
     */
    public resetFormData({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): void {
        if (Object.is(name, 'begin')) {
            this.onFormItemValueChange({ name: 'end', value: null });
        }
        if (Object.is(name, 'end')) {
            this.onFormItemValueChange({ name: 'period', value: null });
        }
        if (Object.is(name, 'begin')) {
            this.onFormItemValueChange({ name: 'days', value: null });
        }
        if (Object.is(name, 'products')) {
            this.onFormItemValueChange({ name: 'branchs', value: null });
        }
        if (Object.is(name, 'products')) {
            this.onFormItemValueChange({ name: 'plans', value: null });
        }
    }

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof NewPlanEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): Promise<void> {
                




























        if (Object.is(name, 'end')) {
            const details: string[] = ['days'];
            this.updateFormItems('UpdateCycle', this.data, details, true);
        }
        if (Object.is(name, 'period')) {
            const details: string[] = ['end', 'days'];
            this.updateFormItems('UpdateProjectCycle', this.data, details, true);
        }
    }

    /**
     * 新建默认值
     * @memberof NewPlanEditFormBase
     */
    public createDefault() {                    
        if (this.data.hasOwnProperty('begin')) {
            this.data['begin'] = this.viewparams['begin'];
        }
        if (this.data.hasOwnProperty('end')) {
            this.data['end'] = this.viewparams['end'];
        }
        if (this.data.hasOwnProperty('type')) {
            this.data['type'] = 'sprint';
        }
    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof NewPlanBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}