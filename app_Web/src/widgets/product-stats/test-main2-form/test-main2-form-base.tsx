import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProductStatsService from '@/service/product-stats/product-stats-service';
import TestMain2Service from './test-main2-form-service';
import ProductStatsUIService from '@/uiservice/product-stats/product-stats-ui-service';
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
 * @extends {TestMain2EditFormBase}
 */
export class TestMain2EditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestMain2EditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {TestMain2Service}
     * @memberof TestMain2EditFormBase
     */
    public service: TestMain2Service = new TestMain2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof TestMain2EditFormBase
     */
    public appEntityService: ProductStatsService = new ProductStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestMain2EditFormBase
     */
    protected appDeName: string = 'productstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestMain2EditFormBase
     */
    protected appDeLogicName: string = '产品统计';

    /**
     * 界面UI服务对象
     *
     * @type {ProductStatsUIService}
     * @memberof TestMain2Base
     */  
    public appUIService: ProductStatsUIService = new ProductStatsUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof TestMain2EditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        custom1: null,
        custom2: null,
        formitemex1: null,
        assigntomebugcnt: null,
        yesterdayresolvedbugcnt: null,
        custom3: null,
        custom4: null,
        formitemex2: null,
        activebugcnt: null,
        yesterdayconfirmbugcnt: null,
        custom5: null,
        custom6: null,
        formitemex3: null,
        unconfirmbugcnt: null,
        yesterdayclosedbugcnt: null,
        custom7: null,
        custom8: null,
        formitemex4: null,
        notclosedbugcnt: null,
        id: null,
        productstats: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof TestMain2EditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof TestMain2EditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof TestMain2Base
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof TestMain2EditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '产品统计基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.testmain2_form', extractMode: 'ITEM', details: [] } }),

        rawitem1: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem2: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem3: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.testmain2_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.testmain2_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfkey: new FormItemModel({
    caption: '产品编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

        srfmajortext: new FormItemModel({
    caption: '产品名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        custom1: new FormItemModel({
    caption: '所有Bug数', detailType: 'FORMITEM', name: 'custom1', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom2: new FormItemModel({
    caption: '指派给我的Bug数', detailType: 'FORMITEM', name: 'custom2', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitemex1: new FormItemModel({
    caption: '所有', detailType: 'FORMITEM', name: 'formitemex1', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        assigntomebugcnt: new FormItemModel({
    caption: '指派给我', detailType: 'FORMITEM', name: 'assigntomebugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yesterdayresolvedbugcnt: new FormItemModel({
    caption: '昨天解决Bug数', detailType: 'FORMITEM', name: 'yesterdayresolvedbugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom3: new FormItemModel({
    caption: '所有Bug数', detailType: 'FORMITEM', name: 'custom3', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom4: new FormItemModel({
    caption: '未解决Bug数', detailType: 'FORMITEM', name: 'custom4', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        activebugcnt: new FormItemModel({
    caption: '未解决', detailType: 'FORMITEM', name: 'activebugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yesterdayconfirmbugcnt: new FormItemModel({
    caption: '昨天确认Bug数', detailType: 'FORMITEM', name: 'yesterdayconfirmbugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom5: new FormItemModel({
    caption: '所有Bug数', detailType: 'FORMITEM', name: 'custom5', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom6: new FormItemModel({
    caption: '未确认Bug数', detailType: 'FORMITEM', name: 'custom6', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitemex3: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'formitemex3', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        unconfirmbugcnt: new FormItemModel({
    caption: '未确认', detailType: 'FORMITEM', name: 'unconfirmbugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yesterdayclosedbugcnt: new FormItemModel({
    caption: '昨天关闭Bug数', detailType: 'FORMITEM', name: 'yesterdayclosedbugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom7: new FormItemModel({
    caption: '所有Bug数', detailType: 'FORMITEM', name: 'custom7', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom8: new FormItemModel({
    caption: '未关闭Bug数', detailType: 'FORMITEM', name: 'custom8', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitemex4: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'formitemex4', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        notclosedbugcnt: new FormItemModel({
    caption: '未关闭', detailType: 'FORMITEM', name: 'notclosedbugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        id: new FormItemModel({
    caption: '产品编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

    };

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof TestMain2Base
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}