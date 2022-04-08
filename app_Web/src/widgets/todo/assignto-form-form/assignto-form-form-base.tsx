import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import AssigntoFormService from './assignto-form-form-service';
import TodoUIService from '@/uiservice/todo/todo-ui-service';
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
 * @extends {AssigntoFormEditFormBase}
 */
export class AssigntoFormEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof AssigntoFormEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {AssigntoFormService}
     * @memberof AssigntoFormEditFormBase
     */
    public service: AssigntoFormService = new AssigntoFormService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof AssigntoFormEditFormBase
     */
    public appEntityService: TodoService = new TodoService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssigntoFormEditFormBase
     */
    protected appDeName: string = 'todo';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof AssigntoFormEditFormBase
     */
    protected appDeLogicName: string = '待办事宜表';

    /**
     * 界面UI服务对象
     *
     * @type {TodoUIService}
     * @memberof AssigntoFormBase
     */  
    public appUIService: TodoUIService = new TodoUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof AssigntoFormEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        assignto: null,
        date: null,
        future: null,
        begin: null,
        end: null,
        lbldisabledate: null,
        id: null,
        todo: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof AssigntoFormEditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof AssigntoFormEditFormBase
     */
    public rules(): any{
        return {
            assignto: [
                {
                    required: this.detailsModel.assignto.required,
                    type: 'string',
                    message: `${this.$t('entities.todo.assigntoform_form.details.assignto')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.assignto.required,
                    type: 'string',
                    message: `${this.$t('entities.todo.assigntoform_form.details.assignto')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof AssigntoFormBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof AssigntoFormEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '指派给', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.todo.assigntoform_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

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
    caption: '待办名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        assignto: new FormItemModel({
    caption: '指派给', detailType: 'FORMITEM', name: 'assignto', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        date: new FormItemModel({
    caption: '日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        future: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'future', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        begin: new FormItemModel({
    caption: '起止时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        end: new FormItemModel({
    caption: '~', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        lbldisabledate: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'lbldisabledate', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
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
     * @memberof AssigntoFormEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): Promise<void> {
                










        if (Object.is(name, '') || Object.is(name, 'future')) {
            let ret = false;
            const _future = this.data.future;
            if (this.$verify.testCond(_future, 'NOTEQ', 'on')) {
                ret = true;
            }
            this.detailsModel.date.setDisabled(!ret);
        }


        if (Object.is(name, '') || Object.is(name, 'lbldisabledate')) {
            let ret = false;
            const _lbldisabledate = this.data.lbldisabledate;
            if (this.$verify.testCond(_lbldisabledate, 'NOTEQ', 'on')) {
                ret = true;
            }
            this.detailsModel.begin.setDisabled(!ret);
        }

        if (Object.is(name, '') || Object.is(name, 'lbldisabledate')) {
            let ret = false;
            const _lbldisabledate = this.data.lbldisabledate;
            if (this.$verify.testCond(_lbldisabledate, 'NOTEQ', 'on')) {
                ret = true;
            }
            this.detailsModel.end.setDisabled(!ret);
        }



    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof AssigntoFormBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}