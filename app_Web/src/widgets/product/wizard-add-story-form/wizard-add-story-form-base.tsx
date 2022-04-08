import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import WizardAddStoryService from './wizard-add-story-form-service';
import ProductUIService from '@/uiservice/product/product-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * wizardpanel_form_AddStory部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {WizardAddStoryEditFormBase}
 */
export class WizardAddStoryEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof WizardAddStoryEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {WizardAddStoryService}
     * @memberof WizardAddStoryEditFormBase
     */
    public service: WizardAddStoryService = new WizardAddStoryService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof WizardAddStoryEditFormBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof WizardAddStoryEditFormBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof WizardAddStoryEditFormBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof WizardAddStoryBase
     */  
    public appUIService:ProductUIService = new ProductUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof WizardAddStoryEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        formitem: null,
        formitem1: null,
        formitem2: null,
        formitem3: null,
        formitem4: null,
        formitem5: null,
        formitem6: null,
        formitem7: null,
        formitem8: null,
        formitem9: null,
        formitem10: null,
        formitem11: null,
        formitem12: null,
        formitem13: null,
        formitem14: null,
        id: null,
        product:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof WizardAddStoryEditFormBase
     */
    public rules: any = {
        formitem8: [
            { required: true, type: 'string', message: '需求名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '需求名称 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof WizardAddStoryBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof WizardAddStoryEditFormBase
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.product.wizardaddstory_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

        srfmajortext: new FormItemModel({ caption: '产品名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'formitem', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem1: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitem1', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem2: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'formitem2', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem3: new FormItemModel({ caption: '计划', detailType: 'FORMITEM', name: 'formitem3', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem4: new FormItemModel({ caption: '需求来源', detailType: 'FORMITEM', name: 'formitem4', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem5: new FormItemModel({ caption: '来源备注', detailType: 'FORMITEM', name: 'formitem5', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem6: new FormItemModel({ caption: '由谁评审', detailType: 'FORMITEM', name: 'formitem6', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem7: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitem7', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem8: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'formitem8', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem9: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'formitem9', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem10: new FormItemModel({ caption: '预计', detailType: 'FORMITEM', name: 'formitem10', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem11: new FormItemModel({ caption: '需求描述', detailType: 'FORMITEM', name: 'formitem11', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem12: new FormItemModel({ caption: '验收标准', detailType: 'FORMITEM', name: 'formitem12', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem13: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'formitem13', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        formitem14: new FormItemModel({ caption: '关键词', detailType: 'FORMITEM', name: 'formitem14', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 0 }),

    };

    /**
     * 重置表单项值
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof WizardAddStoryEditFormBase
     */
    public resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (Object.is(name, 'formitem7')) {
            this.onFormItemValueChange({ name: 'formitem6', value: null });
        }
    }

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof WizardAddStoryEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): Promise<void> {
                















        if (Object.is(name, '') || Object.is(name, 'formitem7')) {
            let ret = false;
            const _formitem7 = this.data.formitem7;
            if (this.$verify.testCond(_formitem7, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.formitem6.setDisabled(!ret);
        }










    }

    /**
     * 新建默认值
     * @memberof WizardAddStoryEditFormBase
     */
    public createDefault(){                    
        if (this.data.hasOwnProperty('formitem')) {
            this.data['formitem'] = '1';
        }
        if (this.data.hasOwnProperty('formitem1')) {
            this.data['formitem1'] = '0';
        }
    }
}