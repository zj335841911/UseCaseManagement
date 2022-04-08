import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProductStatsService from '@/service/product-stats/product-stats-service';
import Main2Service from './main2-form-service';
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
 * @extends {Main2EditFormBase}
 */
export class Main2EditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof Main2EditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {Main2Service}
     * @memberof Main2EditFormBase
     */
    public service: Main2Service = new Main2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof Main2EditFormBase
     */
    public appEntityService: ProductStatsService = new ProductStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main2EditFormBase
     */
    protected appDeName: string = 'productstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof Main2EditFormBase
     */
    protected appDeLogicName: string = '产品统计';

    /**
     * 界面UI服务对象
     *
     * @type {ProductStatsUIService}
     * @memberof Main2Base
     */  
    public appUIService: ProductStatsUIService = new ProductStatsUIService(this.$store);

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
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenProductStoryView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
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
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenStoryCreateView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
    }

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
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenProductPlanCreateView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
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
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenProjectCreateView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
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
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenReleasedCreateView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
    }

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof Main2EditFormBase
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
        storycnt: null,
        waitstorycnt: null,
        plannedstorycnt: null,
        developingstorycnt: null,
        testingstorycnt: null,
        releasedstorycnt: null,
        custom1: null,
        custom2: null,
        formitemex1: null,
        custom3: null,
        custom4: null,
        formitemex2: null,
        postponedprojectcnt: null,
        custom5: null,
        custom6: null,
        formitemex3: null,
        productplancnt: null,
        unendproductplancnt: null,
        resprojectcnt: null,
        undoneresprojectcnt: null,
        releasecnt: null,
        normalreleasecnt: null,
        id: null,
        productstats: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof Main2EditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main2EditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main2Base
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Main2EditFormBase
     */
    public detailsModel: any = {
        rawitem1: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem3: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        button4: new FormButtonModel({
    caption: '查看全部', detailType: 'BUTTON', name: 'button4', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'OpenProductStoryView',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__PRODSTA_STOREOP_BUT',
        visible: true,
        disabled: false,
        }
}),

        button5: new FormButtonModel({
    caption: '提需求', detailType: 'BUTTON', name: 'button5', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'OpenStoryCreateView',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__PRODSTA_STORYCRT_BUT',
        visible: true,
        disabled: false,
        }
}),

        grouppanel6: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        rawitem2: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel13: new FormGroupPanelModel({ caption: '需求状态统计', detailType: 'GROUPPANEL', name: 'grouppanel13', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        grouppanel1: new FormGroupPanelModel({ caption: '产品需求统计', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        rawitem5: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem5', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        button1: new FormButtonModel({
    caption: '创建计划', detailType: 'BUTTON', name: 'button1', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'OpenProductPlanCreateView',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__PRODSTA_PLANCRT_BUT',
        visible: true,
        disabled: false,
        }
}),

        grouppanel3: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        rawitem6: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem6', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel8: new FormGroupPanelModel({ caption: '计划', detailType: 'GROUPPANEL', name: 'grouppanel8', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        rawitem4: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem4', visible: false, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem11: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem11', visible: false, isShowCaption: true, form: this, showMoreMode: 0 }),

        button2: new FormButtonModel({
    caption: '创建项目', detailType: 'BUTTON', name: 'button2', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'OpenProjectCreateView',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__PRODSTA_PROJCRT_BUT',
        visible: true,
        disabled: false,
        }
}),

        grouppanel4: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        rawitem7: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem7', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem8: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem8', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel10: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel10', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        grouppanel9: new FormGroupPanelModel({ caption: '项目', detailType: 'GROUPPANEL', name: 'grouppanel9', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        rawitem9: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem9', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        button3: new FormButtonModel({
    caption: '创建发布', detailType: 'BUTTON', name: 'button3', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'OpenReleasedCreateView',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__PRODSTA_RELCRT_BUT',
        visible: true,
        disabled: false,
        }
}),

        grouppanel5: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        rawitem10: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem10', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel11: new FormGroupPanelModel({ caption: '发布', detailType: 'GROUPPANEL', name: 'grouppanel11', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '产品统计', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: '统计', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

        grouppanel7: new FormGroupPanelModel({ caption: '隐藏表单项', detailType: 'GROUPPANEL', name: 'grouppanel7', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } }),

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

        product: new FormItemModel({
    caption: '产品标识', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        storycnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'storycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        waitstorycnt: new FormItemModel({
    caption: '未开始', detailType: 'FORMITEM', name: 'waitstorycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        plannedstorycnt: new FormItemModel({
    caption: '已计划', detailType: 'FORMITEM', name: 'plannedstorycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        developingstorycnt: new FormItemModel({
    caption: '研发中', detailType: 'FORMITEM', name: 'developingstorycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        testingstorycnt: new FormItemModel({
    caption: '测试中', detailType: 'FORMITEM', name: 'testingstorycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        releasedstorycnt: new FormItemModel({
    caption: '已发布', detailType: 'FORMITEM', name: 'releasedstorycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom1: new FormItemModel({
    caption: '计划总数', detailType: 'FORMITEM', name: 'custom1', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom2: new FormItemModel({
    caption: '未过期计划数', detailType: 'FORMITEM', name: 'custom2', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitemex1: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'formitemex1', visible: false, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom3: new FormItemModel({
    caption: '关联项目数', detailType: 'FORMITEM', name: 'custom3', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom4: new FormItemModel({
    caption: '未完成关联项目数', detailType: 'FORMITEM', name: 'custom4', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitemex2: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'formitemex2', visible: false, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        postponedprojectcnt: new FormItemModel({
    caption: '已延期', detailType: 'FORMITEM', name: 'postponedprojectcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom5: new FormItemModel({
    caption: '发布总数', detailType: 'FORMITEM', name: 'custom5', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom6: new FormItemModel({
    caption: '维护中发布数', detailType: 'FORMITEM', name: 'custom6', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitemex3: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'formitemex3', visible: false, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        productplancnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'productplancnt', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        unendproductplancnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'unendproductplancnt', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        resprojectcnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'resprojectcnt', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        undoneresprojectcnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'undoneresprojectcnt', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        releasecnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'releasecnt', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        normalreleasecnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'normalreleasecnt', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
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
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof Main2EditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): Promise<void> {
                


        if (Object.is(name, '') || Object.is(name, 'storycnt')) {
            let ret = false;
            const _storycnt = this.data.storycnt;
            if (this.$verify.testCond(_storycnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.button4.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'storycnt')) {
            let ret = false;
            const _storycnt = this.data.storycnt;
            if (this.$verify.testCond(_storycnt, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button5.setVisible(ret);
        }






        if (Object.is(name, '') || Object.is(name, 'productplancnt')) {
            let ret = false;
            const _productplancnt = this.data.productplancnt;
            if (this.$verify.testCond(_productplancnt, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button1.setVisible(ret);
        }




        if (Object.is(name, '') || Object.is(name, 'resprojectcnt')) {
            let ret = false;
            const _resprojectcnt = this.data.resprojectcnt;
            if (this.$verify.testCond(_resprojectcnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.rawitem4.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'resprojectcnt')) {
            let ret = false;
            const _resprojectcnt = this.data.resprojectcnt;
            if (this.$verify.testCond(_resprojectcnt, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.rawitem11.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'resprojectcnt')) {
            let ret = false;
            const _resprojectcnt = this.data.resprojectcnt;
            if (this.$verify.testCond(_resprojectcnt, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button2.setVisible(ret);
        }







        if (Object.is(name, '') || Object.is(name, 'releasecnt')) {
            let ret = false;
            const _releasecnt = this.data.releasecnt;
            if (this.$verify.testCond(_releasecnt, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button3.setVisible(ret);
        }




        if (Object.is(name, '') || Object.is(name, 'storycnt')) {
            let ret = false;
            const _storycnt = this.data.storycnt;
            if (this.$verify.testCond(_storycnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.grouppanel2.setVisible(ret);
        }




















        if (Object.is(name, '') || Object.is(name, 'productplancnt')) {
            let ret = false;
            const _productplancnt = this.data.productplancnt;
            if (this.$verify.testCond(_productplancnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.formitemex1.setVisible(ret);
        }



        if (Object.is(name, '') || Object.is(name, 'resprojectcnt')) {
            let ret = false;
            const _resprojectcnt = this.data.resprojectcnt;
            if (this.$verify.testCond(_resprojectcnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.formitemex2.setVisible(ret);
        }




        if (Object.is(name, '') || Object.is(name, 'releasecnt')) {
            let ret = false;
            const _releasecnt = this.data.releasecnt;
            if (this.$verify.testCond(_releasecnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.formitemex3.setVisible(ret);
        }








    }

	/**
	 * 表单 查看全部 事件
	 *
	 * @memberof @memberof Main2EditFormBase
	 */
    public button4_click($event: any): void {
        this.form_button4_click(null, null, $event);

    }

	/**
	 * 表单 提需求 事件
	 *
	 * @memberof @memberof Main2EditFormBase
	 */
    public button5_click($event: any): void {
        this.form_button5_click(null, null, $event);

    }

	/**
	 * 表单 创建计划 事件
	 *
	 * @memberof @memberof Main2EditFormBase
	 */
    public button1_click($event: any): void {
        this.form_button1_click(null, null, $event);

    }

	/**
	 * 表单 创建项目 事件
	 *
	 * @memberof @memberof Main2EditFormBase
	 */
    public button2_click($event: any): void {
        this.form_button2_click(null, null, $event);

    }

	/**
	 * 表单 创建发布 事件
	 *
	 * @memberof @memberof Main2EditFormBase
	 */
    public button3_click($event: any): void {
        this.form_button3_click(null, null, $event);

    }

    /**
     * 新建默认值
     * @memberof Main2EditFormBase
     */
    public createDefault() {                    
        if (this.data.hasOwnProperty('product')) {
            this.data['product'] = this.viewparams['product'];
        }
    }

    /**
     * 更新默认值
     * @memberof Main2EditFormBase
     */
    public updateDefault() {                    
        if (this.data.hasOwnProperty('product') && !this.data.product) {
            this.data['product'] = this.viewparams['product'];
        }
    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof Main2Base
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}