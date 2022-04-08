import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import ProjectStatsService from '@/service/project-stats/project-stats-service';
import MainService from './main-form-service';
import ProjectStatsUIService from '@/uiservice/project-stats/project-stats-ui-service';
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
 * @extends {MainEditFormBase}
 */
export class MainEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainEditFormBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectStatsService}
     * @memberof MainEditFormBase
     */
    public appEntityService: ProjectStatsService = new ProjectStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'projectstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeLogicName: string = '项目统计';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectStatsUIService}
     * @memberof MainBase
     */  
    public appUIService: ProjectStatsUIService = new ProjectStatsUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        custom7: null,
        custom8: null,
        formitemex4: null,
        totalestimate: null,
        totalconsumed: null,
        totalleft: null,
        yesterdayctaskcnt: null,
        taskcnt: null,
        custom1: null,
        custom2: null,
        formitemex1: null,
        undonetaskcnt: null,
        releasedstorycnt: null,
        storycnt: null,
        custom3: null,
        custom4: null,
        formitemex2: null,
        unclosedstorycnt: null,
        yesterdayrbugcnt: null,
        bugcnt: null,
        custom5: null,
        custom6: null,
        formitemex3: null,
        activebugcnt: null,
        id: null,
        projectstats: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEditFormBase
     */
    public detailsModel: any = {
        grouppanel6: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } }),

        grouppanel5: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } }),

        grouppanel4: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } }),

        rawitem1: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem6: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem6', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem7: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem7', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel1: new FormGroupPanelModel({ caption: '任务统计', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } }),

        rawitem2: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem2', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem5: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem5', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem8: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem8', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel2: new FormGroupPanelModel({ caption: '需求统计', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } }),

        rawitem3: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem3', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem4: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem4', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        rawitem9: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem9', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        grouppanel3: new FormGroupPanelModel({ caption: 'bug统计', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } }),

        group1: new FormGroupPanelModel({ caption: '项目统计基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.projectstats.main_form', extractMode: 'ITEM', details: [] } }),

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

        custom7: new FormItemModel({
    caption: '总工时', detailType: 'FORMITEM', name: 'custom7', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom8: new FormItemModel({
    caption: '任务消耗总工时', detailType: 'FORMITEM', name: 'custom8', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitemex4: new FormItemModel({
    caption: '已完成', detailType: 'FORMITEM', name: 'formitemex4', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        totalestimate: new FormItemModel({
    caption: '预计', detailType: 'FORMITEM', name: 'totalestimate', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        totalconsumed: new FormItemModel({
    caption: '消耗', detailType: 'FORMITEM', name: 'totalconsumed', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        totalleft: new FormItemModel({
    caption: '剩余', detailType: 'FORMITEM', name: 'totalleft', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yesterdayctaskcnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'yesterdayctaskcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        taskcnt: new FormItemModel({
    caption: '总任务', detailType: 'FORMITEM', name: 'taskcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom1: new FormItemModel({
    caption: '任务总数', detailType: 'FORMITEM', name: 'custom1', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom2: new FormItemModel({
    caption: '已结束任务总数', detailType: 'FORMITEM', name: 'custom2', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitemex1: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'formitemex1', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        undonetaskcnt: new FormItemModel({
    caption: '未完成', detailType: 'FORMITEM', name: 'undonetaskcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        releasedstorycnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'releasedstorycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        storycnt: new FormItemModel({
    caption: '总需求', detailType: 'FORMITEM', name: 'storycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom3: new FormItemModel({
    caption: '需求总数', detailType: 'FORMITEM', name: 'custom3', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom4: new FormItemModel({
    caption: '关闭需求总数', detailType: 'FORMITEM', name: 'custom4', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        unclosedstorycnt: new FormItemModel({
    caption: '未关闭', detailType: 'FORMITEM', name: 'unclosedstorycnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        yesterdayrbugcnt: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'yesterdayrbugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        bugcnt: new FormItemModel({
    caption: '所有', detailType: 'FORMITEM', name: 'bugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom5: new FormItemModel({
    caption: 'Bug总数', detailType: 'FORMITEM', name: 'custom5', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        custom6: new FormItemModel({
    caption: '已解决Bug总数', detailType: 'FORMITEM', name: 'custom6', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        activebugcnt: new FormItemModel({
    caption: '未解决', detailType: 'FORMITEM', name: 'activebugcnt', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof MainBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}