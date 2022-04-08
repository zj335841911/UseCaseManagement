import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';
import EditFormService from './edit-form-form-service';
import ReleaseUIService from '@/uiservice/release/release-ui-service';
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
 * @extends {EditFormEditFormBase}
 */
export class EditFormEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof EditFormEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {EditFormService}
     * @memberof EditFormEditFormBase
     */
    public service: EditFormService = new EditFormService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof EditFormEditFormBase
     */
    public appEntityService: ReleaseService = new ReleaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof EditFormEditFormBase
     */
    protected appDeName: string = 'release';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof EditFormEditFormBase
     */
    protected appDeLogicName: string = '发布';

    /**
     * 界面UI服务对象
     *
     * @type {ReleaseUIService}
     * @memberof EditFormBase
     */  
    public appUIService: ReleaseUIService = new ReleaseUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof EditFormEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        product: null,
        productname: null,
        name: null,
        buildname: null,
        date: null,
        marker: null,
        desc: null,
        files: null,
        id: null,
        build: null,
        release: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof EditFormEditFormBase
     */
    public majorMessageField: string = 'name';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof EditFormEditFormBase
     */
    public rules(): any{
        return {
            name: [
                {
                    required: this.detailsModel.name.required,
                    type: 'string',
                    message: `${this.$t('entities.release.editform_form.details.name')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.name.required,
                    type: 'string',
                    message: `${this.$t('entities.release.editform_form.details.name')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            date: [
                {
                    required: this.detailsModel.date.required,
                    type: 'string',
                    message: `${this.$t('entities.release.editform_form.details.date')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.date.required,
                    type: 'string',
                    message: `${this.$t('entities.release.editform_form.details.date')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
                {
                    validator: (rule: any, value: any) => {
                        return this.verifyDeRules("date").isPast;
                    },
                    message: this.verifyDeRules("date").infoMessage,
                    trigger: 'change',
                },
                {
                    validator: (rule: any, value: any) => {
                        return this.verifyDeRules("date").isPast;
                    },
                    message: this.verifyDeRules("date").infoMessage,
                    trigger: 'blur',
                },
        ],
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof EditFormBase
     */
    public deRules:any = {
        date:[
                  {
                      type:"SIMPLE",
                      condOP:"LTANDEQ",
                      ruleInfo:"发布日期不能大于当前日期", 
                      isKeyCond:false,
                      paramType:"CURTIME",
                      isNotMode:false,
                      deName:"date",
                  },
                ],
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof EditFormEditFormBase
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.release.editform_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.release.editform_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: 'release基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.release.editform_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfkey: new FormItemModel({
    caption: 'ID', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

        srfmajortext: new FormItemModel({
    caption: '发布名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        product: new FormItemModel({
    caption: '产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        productname: new FormItemModel({
    caption: '产品名称', detailType: 'FORMITEM', name: 'productname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        name: new FormItemModel({
    caption: '发布名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        buildname: new FormItemModel({
    caption: '版本', detailType: 'FORMITEM', name: 'buildname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        date: new FormItemModel({
    caption: '发布日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        marker: new FormItemModel({
    caption: '里程碑', detailType: 'FORMITEM', name: 'marker', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        desc: new FormItemModel({
    caption: '描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        id: new FormItemModel({
    caption: 'ID', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

        build: new FormItemModel({
    caption: '版本', detailType: 'FORMITEM', name: 'build', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

    };

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof EditFormBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}