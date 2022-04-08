import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, EditFormControlBase } from '@/studio-core';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import MainInfoService from './main-info-form-service';
import UserYearWorkStatsUIService from '@/uiservice/user-year-work-stats/user-year-work-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';


/**
 * form部件基类
 *
 * @export
 * @class EditFormControlBase
 * @extends {MainInfoEditFormBase}
 */
export class MainInfoEditFormBase extends EditFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainInfoEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {MainInfoService}
     * @memberof MainInfoEditFormBase
     */
    public service: MainInfoService = new MainInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof MainInfoEditFormBase
     */
    public appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoEditFormBase
     */
    protected appDeName: string = 'useryearworkstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoEditFormBase
     */
    protected appDeLogicName: string = '用户年度工作内容统计';

    /**
     * 界面UI服务对象
     *
     * @type {UserYearWorkStatsUIService}
     * @memberof MainInfoBase
     */  
    public appUIService:UserYearWorkStatsUIService = new UserYearWorkStatsUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainInfoEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        role: null,
        yearvisits: null,
        yearactioncnt: null,
        yearlogcnt: null,
        yearestimatecnt: null,
        yearcasecnt: null,
        yearbugcnt: null,
        yearproductcnt: null,
        yearplancnt: null,
        yearstorycnt: null,
        judgerole: null,
        id: null,
        useryearworkstats:null,
    };

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainInfoEditFormBase
     */
    public rules: any = {
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainInfoBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainInfoEditFormBase
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '研发', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.maininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel2: new FormGroupPanelModel({ caption: '测试', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.maininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel3: new FormGroupPanelModel({ caption: '产品经理', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: false, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.maininfo_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: '基本数据信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.maininfo_form', extractMode: 'ITEM', details: [] } }),

        grouppanel9: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'grouppanel9', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.useryearworkstats.maininfo_form', extractMode: 'ITEM', details: [] } }),

        rawitem1: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem1', visible: false, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem2: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem2', visible: false, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem3: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem3', visible: false, isShowCaption: true, form: this, showMoreMode: 0 }),

        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfkey: new FormItemModel({ caption: '用户编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfmajortext: new FormItemModel({ caption: '标题', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        role: new FormItemModel({ caption: '角色', detailType: 'FORMITEM', name: 'role', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        yearvisits: new FormItemModel({ caption: '累计登录次数', detailType: 'FORMITEM', name: 'yearvisits', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        yearactioncnt: new FormItemModel({ caption: '累计动态数', detailType: 'FORMITEM', name: 'yearactioncnt', visible: false, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        yearlogcnt: new FormItemModel({ caption: '累计日志数', detailType: 'FORMITEM', name: 'yearlogcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        yearestimatecnt: new FormItemModel({ caption: '累计工时数', detailType: 'FORMITEM', name: 'yearestimatecnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        yearcasecnt: new FormItemModel({ caption: '累计创建用例数', detailType: 'FORMITEM', name: 'yearcasecnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        yearbugcnt: new FormItemModel({ caption: '累计创建Bug数', detailType: 'FORMITEM', name: 'yearbugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        yearproductcnt: new FormItemModel({ caption: '累计参与产品数', detailType: 'FORMITEM', name: 'yearproductcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        yearplancnt: new FormItemModel({ caption: '累计创建计划数', detailType: 'FORMITEM', name: 'yearplancnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        yearstorycnt: new FormItemModel({ caption: '累计创建需求数', detailType: 'FORMITEM', name: 'yearstorycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        judgerole: new FormItemModel({ caption: '判断角色', detailType: 'FORMITEM', name: 'judgerole', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

        id: new FormItemModel({ caption: '用户编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0, disabled: false, enableCond: 3 }),

    };

    /**
     * 表单项逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {Promise<void>}
     * @memberof MainInfoEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): Promise<void> {
                
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
            if (this.$verify.testCond(_judgerole, 'NOTEQ', 'po')) {
                ret = true;
            }
            this.detailsModel.yearactioncnt.setVisible(ret);
        }










    }
}