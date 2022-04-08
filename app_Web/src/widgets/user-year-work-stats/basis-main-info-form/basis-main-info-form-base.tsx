import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import BasisMainInfoService from './basis-main-info-form-service';
import UserYearWorkStatsUIService from '@/uiservice/user-year-work-stats/user-year-work-stats-ui-service';
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
 * @extends {BasisMainInfoEditFormBase}
 */
export class BasisMainInfoEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof BasisMainInfoEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {BasisMainInfoService}
     * @memberof BasisMainInfoEditFormBase
     */
    public service: BasisMainInfoService = new BasisMainInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof BasisMainInfoEditFormBase
     */
    public appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BasisMainInfoEditFormBase
     */
    protected appDeName: string = 'useryearworkstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof BasisMainInfoEditFormBase
     */
    protected appDeLogicName: string = '用户年度工作内容统计';

    /**
     * 界面UI服务对象
     *
     * @type {UserYearWorkStatsUIService}
     * @memberof BasisMainInfoBase
     */  
    public appUIService: UserYearWorkStatsUIService = new UserYearWorkStatsUIService(this.$store);


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof BasisMainInfoEditFormBase
     */
    protected drCount: number = 9;
    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof BasisMainInfoEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        title: null,
        curyear: null,
        account: null,
        realname: null,
        judgerole: null,
        visits: null,
        yearactioncnt: null,
        yearbugcnt: null,
        yearlogcnt: null,
        yearcasecnt: null,
        yearvisits: null,
        yearstorycnt: null,
        yearproductcnt: null,
        yearplancnt: null,
        yearestimatecnt: null,
        id: null,
        useryearworkstats: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof BasisMainInfoEditFormBase
     */
    public majorMessageField: string = 'title';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof BasisMainInfoEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof BasisMainInfoBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof BasisMainInfoEditFormBase
     */
    public detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '用户年度工作内容统计基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        rawitem1: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem1', visible: false, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem2: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem2', visible: false, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem3: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem3', visible: false, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel5: new FormGroupPanelModel({ caption: '基本数据信息', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart6: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart6', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel10: new FormGroupPanelModel({ caption: '产品创建需求数及占比', detailType: 'GROUPPANEL', name: 'grouppanel10', visible: false, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart7: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart7', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel11: new FormGroupPanelModel({ caption: '产品创建Bug数及占比', detailType: 'GROUPPANEL', name: 'grouppanel11', visible: false, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart4: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart4', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel6: new FormGroupPanelModel({ caption: '参与项目概览', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: false, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel8: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel8', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart5: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart5', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel7: new FormGroupPanelModel({ caption: '研发', detailType: 'GROUPPANEL', name: 'grouppanel7', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart8: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart8', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel12: new FormGroupPanelModel({ caption: '产品经理', detailType: 'GROUPPANEL', name: 'grouppanel12', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart9: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart9', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel13: new FormGroupPanelModel({ caption: '测试', detailType: 'GROUPPANEL', name: 'grouppanel13', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel9: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel9', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel4: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel1: new FormGroupPanelModel({ caption: '研发', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel2: new FormGroupPanelModel({ caption: '测试', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        druipart3: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel3: new FormGroupPanelModel({ caption: '产品经理', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.basismaininfo_form', extractMode: 'ITEM', details: [] } }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfkey: new FormItemModel({
    caption: '用户编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfmajortext: new FormItemModel({
    caption: '标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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
    caption: '', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        curyear: new FormItemModel({
    caption: '年度', detailType: 'FORMITEM', name: 'curyear', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        account: new FormItemModel({
    caption: '账号', detailType: 'FORMITEM', name: 'account', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        realname: new FormItemModel({
    caption: '真实用户名', detailType: 'FORMITEM', name: 'realname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        judgerole: new FormItemModel({
    caption: '判断角色', detailType: 'FORMITEM', name: 'judgerole', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        visits: new FormItemModel({
    caption: '累计登录次数', detailType: 'FORMITEM', name: 'visits', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yearactioncnt: new FormItemModel({
    caption: '累计动态数', detailType: 'FORMITEM', name: 'yearactioncnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yearbugcnt: new FormItemModel({
    caption: '累计创建Bug数', detailType: 'FORMITEM', name: 'yearbugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yearlogcnt: new FormItemModel({
    caption: '累计日志数', detailType: 'FORMITEM', name: 'yearlogcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yearcasecnt: new FormItemModel({
    caption: '累计创建用例数', detailType: 'FORMITEM', name: 'yearcasecnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yearvisits: new FormItemModel({
    caption: '累计登录次数', detailType: 'FORMITEM', name: 'yearvisits', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yearstorycnt: new FormItemModel({
    caption: '累计创建需求数', detailType: 'FORMITEM', name: 'yearstorycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yearproductcnt: new FormItemModel({
    caption: '累计参与产品数', detailType: 'FORMITEM', name: 'yearproductcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yearplancnt: new FormItemModel({
    caption: '累计创建计划数', detailType: 'FORMITEM', name: 'yearplancnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yearestimatecnt: new FormItemModel({
    caption: '累计工时数', detailType: 'FORMITEM', name: 'yearestimatecnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        id: new FormItemModel({
    caption: '用户编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

    };

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof BasisMainInfoEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): Promise<void> {
                

        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'dev')) {
                ret = true;
            }
            this.detailsModel.rawitem1.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'po')) {
                ret = true;
            }
            this.detailsModel.rawitem2.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'qa')) {
                ret = true;
            }
            this.detailsModel.rawitem3.setVisible(ret);
        }



        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'po')) {
                ret = true;
            }
            this.detailsModel.grouppanel10.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'qa')) {
                ret = true;
            }
            this.detailsModel.grouppanel11.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'dev')) {
                ret = true;
            }
            this.detailsModel.grouppanel6.setVisible(ret);
        }



        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'dev')) {
                ret = true;
            }
            this.detailsModel.grouppanel7.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'po')) {
                ret = true;
            }
            this.detailsModel.grouppanel12.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'qa')) {
                ret = true;
            }
            this.detailsModel.grouppanel13.setVisible(ret);
        }




        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'dev')) {
                ret = true;
            }
            this.detailsModel.grouppanel1.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'qa')) {
                ret = true;
            }
            this.detailsModel.grouppanel2.setVisible(ret);
        }


        if (Object.is(name, '') || Object.is(name, 'judgerole')) {
            let ret = false;
            const _judgerole = this.data.judgerole;
            if (this.$verify.testCond(_judgerole, 'EQ', 'po')) {
                ret = true;
            }
            this.detailsModel.grouppanel3.setVisible(ret);
        }

























        if (Object.is(name, 'curyear')) {
            const details: string[] = ['yearvisits', 'yearproductcnt', 'yearcasecnt', 'yearstorycnt', 'yearplancnt', 'yearestimatecnt', 'yearbugcnt', 'yearlogcnt', 'title', 'yearactioncnt'];
            this.updateFormItems('UpdateTitleByYear', this.data, details, true);
        }
    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof BasisMainInfoBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}