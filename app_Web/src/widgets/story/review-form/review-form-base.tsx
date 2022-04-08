import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import ReviewService from './review-form-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
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
 * @extends {ReviewEditFormBase}
 */
export class ReviewEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ReviewEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {ReviewService}
     * @memberof ReviewEditFormBase
     */
    public service: ReviewService = new ReviewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof ReviewEditFormBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ReviewEditFormBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ReviewEditFormBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof ReviewBase
     */  
    public appUIService: StoryUIService = new StoryUIService(this.$store);


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof ReviewEditFormBase
     */
    protected drCount: number = 3;
    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ReviewEditFormBase
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
        title: null,
        revieweddate: null,
        result: null,
        assessresult: null,
        pri: null,
        storypoints: null,
        estimate: null,
        preversion: null,
        closedreason: null,
        assignedto: null,
        status: null,
        version: null,
        reviewedby: null,
        comment: null,
        id: null,
        story: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof ReviewEditFormBase
     */
    public majorMessageField: string = 'title';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ReviewEditFormBase
     */
    public rules(): any{
        return {
            result: [
                {
                    required: this.detailsModel.result.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.result')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.result.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.result')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            assessresult: [
                {
                    required: this.detailsModel.assessresult.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.assessresult')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.assessresult.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.assessresult')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            preversion: [
                {
                    required: this.detailsModel.preversion.required,
                    type: 'number',
                    message: `${this.$t('entities.story.review_form.details.preversion')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.preversion.required,
                    type: 'number',
                    message: `${this.$t('entities.story.review_form.details.preversion')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            closedreason: [
                {
                    required: this.detailsModel.closedreason.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.closedreason')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.closedreason.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.closedreason')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            assignedto: [
                {
                    required: this.detailsModel.assignedto.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.assignedto')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.assignedto.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.assignedto')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            reviewedby: [
                {
                    required: this.detailsModel.reviewedby.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.reviewedby')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.reviewedby.required,
                    type: 'string',
                    message: `${this.$t('entities.story.review_form.details.reviewedby')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ReviewBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ReviewEditFormBase
     */
    public detailsModel: any = {
        grouppanel2: new FormGroupPanelModel({ caption: '评审通过', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.review_form', extractMode: 'ITEM', details: [] } }),

        grouppanel3: new FormGroupPanelModel({ caption: '拒绝', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.review_form', extractMode: 'ITEM', details: [] } }),

        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.review_form', extractMode: 'ITEM', details: [] } }),

        tabpage1: new FormTabPageModel({ caption: '影响项目', detailType: 'TABPAGE', name: 'tabpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        tabpage2: new FormTabPageModel({ caption: '影响Bug', detailType: 'TABPAGE', name: 'tabpage2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        druipart3: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        tabpage3: new FormTabPageModel({ caption: '影响用例', detailType: 'TABPAGE', name: 'tabpage3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        tabpanel1: new FormTabPanelModel({
    caption: '', detailType: 'TABPANEL', name: 'tabpanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    tabPages: [
        {
            name: 'tabpage1',
            index: 0,
            visible: true,
        },
        {
            name: 'tabpage2',
            index: 1,
            visible: true,
        },
        {
            name: 'tabpage3',
            index: 2,
            visible: true,
        },
    ]
}),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        group1: new FormGroupPanelModel({ caption: '需求基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.review_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srfupdatedate: new FormItemModel({
    caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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
    caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

        srfmajortext: new FormItemModel({
    caption: '需求名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        title: new FormItemModel({
    caption: '需求名称', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        revieweddate: new FormItemModel({
    caption: '评审时间', detailType: 'FORMITEM', name: 'revieweddate', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        result: new FormItemModel({
    caption: '评审结果', detailType: 'FORMITEM', name: 'result', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        assessresult: new FormItemModel({
    caption: '评审结果', detailType: 'FORMITEM', name: 'assessresult', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        pri: new FormItemModel({
    caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        storypoints: new FormItemModel({
    caption: '故事点', detailType: 'FORMITEM', name: 'storypoints', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        estimate: new FormItemModel({
    caption: '预计工时', detailType: 'FORMITEM', name: 'estimate', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        preversion: new FormItemModel({
    caption: '之前版本', detailType: 'FORMITEM', name: 'preversion', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        closedreason: new FormItemModel({
    caption: '拒绝原因', detailType: 'FORMITEM', name: 'closedreason', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        assignedto: new FormItemModel({
    caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        status: new FormItemModel({
    caption: '当前状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        version: new FormItemModel({
    caption: '版本号', detailType: 'FORMITEM', name: 'version', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        reviewedby: new FormItemModel({
    caption: '由谁评审', detailType: 'FORMITEM', name: 'reviewedby', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        comment: new FormItemModel({
    caption: '备注', detailType: 'FORMITEM', name: 'comment', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        id: new FormItemModel({
    caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

    };

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof ReviewEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): Promise<void> {
                
        if (Object.is(name, '') || Object.is(name, 'result')) {
            let ret = false;
            const _result = this.data.result;
            if (this.$verify.testCond(_result, 'EQ', 'pass')) {
                ret = true;
            }
            this.detailsModel.grouppanel2.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'result')) {
            let ret = false;
            const _result = this.data.result;
            if (this.$verify.testCond(_result, 'EQ', 'reject')) {
                ret = true;
            }
            this.detailsModel.grouppanel3.setVisible(ret);
        }





















        if (Object.is(name, '') || Object.is(name, 'status')) {
            let ret = true;
            const _status = this.data.status;
            if (this.$verify.testCond(_status, 'NOTEQ', 'changed')) {
                ret = false;
            }
            this.detailsModel.result.required = ret;
        }
        if (Object.is(name, '') || Object.is(name, 'status')) {
            let ret = false;
            const _status = this.data.status;
            if (this.$verify.testCond(_status, 'EQ', 'changed')) {
                ret = true;
            }
            this.detailsModel.result.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'status')) {
            let ret = true;
            const _status = this.data.status;
            if (this.$verify.testCond(_status, 'NOTEQ', 'draft')) {
                ret = false;
            }
            this.detailsModel.assessresult.required = ret;
        }
        if (Object.is(name, '') || Object.is(name, 'status')) {
            let ret = false;
            const _status = this.data.status;
            if (this.$verify.testCond(_status, 'EQ', 'draft')) {
                ret = true;
            }
            this.detailsModel.assessresult.setVisible(ret);
        }




        if (Object.is(name, '') || Object.is(name, 'result') || Object.is(name, 'version')) {
            let ret = true;
            const _result = this.data.result;
            const _version = this.data.version;
            if (this.$verify.testCond(_result, 'NOTEQ', 'revert') || this.$verify.testCond(_version, 'EQ', '1')) {
                ret = false;
            }
            this.detailsModel.preversion.required = ret;
        }
        if (Object.is(name, '') || Object.is(name, 'result')) {
            let ret = false;
            const _result = this.data.result;
            if (this.$verify.testCond(_result, 'EQ', 'revert')) {
                ret = true;
            }
            this.detailsModel.preversion.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'result')) {
            let ret = true;
            const _result = this.data.result;
            if (this.$verify.testCond(_result, 'NOTEQ', 'reject')) {
                ret = false;
            }
            this.detailsModel.closedreason.required = ret;
        }







    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof ReviewBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}