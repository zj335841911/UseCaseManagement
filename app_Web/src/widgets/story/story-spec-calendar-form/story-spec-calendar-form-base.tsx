import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StorySpecCalendarService from './story-spec-calendar-form-service';
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
 * @extends {StorySpecCalendarEditFormBase}
 */
export class StorySpecCalendarEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof StorySpecCalendarEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {StorySpecCalendarService}
     * @memberof StorySpecCalendarEditFormBase
     */
    public service: StorySpecCalendarService = new StorySpecCalendarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StorySpecCalendarEditFormBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StorySpecCalendarEditFormBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof StorySpecCalendarEditFormBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof StorySpecCalendarBase
     */  
    public appUIService: StoryUIService = new StoryUIService(this.$store);

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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_AssignToDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ReviewStoryDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ActiviteDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_CloseStoryDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ChangeStoryDetailDash(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button6_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_SubStoryCz(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public form_button7_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_OpenBaseInfoC(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }


    /**
     * 关系界面数量
     *
     * @protected
     * @type {number}
     * @memberof StorySpecCalendarEditFormBase
     */
    protected drCount: number = 1;

    /**
     * 主键表单项名称
     *
     * @protected
     * @type {number}
     * @memberof StorySpecCalendarEditFormBase
     */
    protected formKeyItemName: string = 'id';
    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof StorySpecCalendarEditFormBase
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
        parent: null,
        id: null,
        status: null,
        title: null,
        version: null,
        pri: null,
        stage: null,
        estimate: null,
        isfavorites: null,
        ischild: null,
        formitem: null,
        spec: null,
        verify: null,
        story: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof StorySpecCalendarEditFormBase
     */
    public majorMessageField: string = 'title';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof StorySpecCalendarEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof StorySpecCalendarBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof StorySpecCalendarEditFormBase
     */
    public detailsModel: any = {
        button1: new FormButtonModel({
    caption: '指派', detailType: 'BUTTON', name: 'button1', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'AssignToDash',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__STORY_ASS_BUT',
        visible: true,
        disabled: false,
        }
}),

        button2: new FormButtonModel({
    caption: '评审', detailType: 'BUTTON', name: 'button2', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'ReviewStoryDash',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__STORY_REVIEW_BUT',
        visible: true,
        disabled: false,
        }
}),

        button3: new FormButtonModel({
    caption: '激活', detailType: 'BUTTON', name: 'button3', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'ActiviteDash',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__STORY_ACTIVE_BUT',
        visible: true,
        disabled: false,
        }
}),

        button4: new FormButtonModel({
    caption: '关闭', detailType: 'BUTTON', name: 'button4', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'CloseStoryDash',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__STORY_CLOSED_BUT',
        visible: true,
        disabled: false,
        }
}),

        button5: new FormButtonModel({
    caption: '变更', detailType: 'BUTTON', name: 'button5', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'ChangeStoryDetailDash',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__STORY_CHANGED_BUT',
        visible: true,
        disabled: false,
        }
}),

        button6: new FormButtonModel({
    caption: '细分', detailType: 'BUTTON', name: 'button6', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'SubStoryCz',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__STORY_XQXF_BUT',
        visible: true,
        disabled: false,
        }
}),

        button7: new FormButtonModel({
    caption: '编辑', detailType: 'BUTTON', name: 'button7', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'OpenBaseInfoC',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__STORY_EDIT_BUT',
        visible: true,
        disabled: false,
        }
}),

        grouppanel1: new FormGroupPanelModel({ caption: '操作', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.storyspeccalendar_form', extractMode: 'ITEM', details: [] } }),

        grouppanel11: new FormGroupPanelModel({ caption: '需求描述', detailType: 'GROUPPANEL', name: 'grouppanel11', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.storyspeccalendar_form', extractMode: 'ITEM', details: [] } }),

        grouppanel21: new FormGroupPanelModel({ caption: '验收标准', detailType: 'GROUPPANEL', name: 'grouppanel21', visible: true, isShowCaption: true, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.storyspeccalendar_form', extractMode: 'ITEM', details: [] } }),

        group11: new FormGroupPanelModel({ caption: '需求描述信息', detailType: 'GROUPPANEL', name: 'group11', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.storyspeccalendar_form', extractMode: 'ITEM', details: [] } }),

        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        _grouppanel1: new FormGroupPanelModel({ caption: '操作历史', detailType: 'GROUPPANEL', name: '_grouppanel1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.storyspeccalendar_form', extractMode: 'ITEM', details: [] } }),

        grouppanel31: new FormGroupPanelModel({ caption: '需求描述', detailType: 'GROUPPANEL', name: 'grouppanel31', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.story.storyspeccalendar_form', extractMode: 'ITEM', details: [] } }),

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

        parent: new FormItemModel({
    caption: '父需求', detailType: 'FORMITEM', name: 'parent', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        id: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 0,
}),

        status: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        title: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        version: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'version', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        pri: new FormItemModel({
    caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        stage: new FormItemModel({
    caption: '所处阶段', detailType: 'FORMITEM', name: 'stage', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        isfavorites: new FormItemModel({
    caption: '是否收藏', detailType: 'FORMITEM', name: 'isfavorites', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        ischild: new FormItemModel({
    caption: '是否可以细分', detailType: 'FORMITEM', name: 'ischild', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        formitem: new FormItemModel({
    caption: '版本号', detailType: 'FORMITEM', name: 'formitem', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        spec: new FormItemModel({
    caption: '需求描述', detailType: 'FORMITEM', name: 'spec', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        verify: new FormItemModel({
    caption: '验收标准', detailType: 'FORMITEM', name: 'verify', visible: true, isShowCaption: false, form: this, showMoreMode: 0,
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
     * @memberof StorySpecCalendarEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): Promise<void> {
                



























        if (Object.is(name, '') || Object.is(name, 'formitem')) {
            let ret = false;
            const _formitem = this.data.formitem;
            if (this.$verify.testCond(_formitem, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.version.setVisible(ret);
        }









        if (Object.is(name, 'version')) {
            const details: string[] = ['title', 'spec', 'verify'];
            this.updateFormItems('GetStorySpec', this.data, details, true);
        }
    }

	/**
	 * 表单 指派 事件
	 *
	 * @memberof @memberof StorySpecCalendarEditFormBase
	 */
    public button1_click($event: any): void {
        this.form_button1_click(null, null, $event);

    }

	/**
	 * 表单 评审 事件
	 *
	 * @memberof @memberof StorySpecCalendarEditFormBase
	 */
    public button2_click($event: any): void {
        this.form_button2_click(null, null, $event);

    }

	/**
	 * 表单 激活 事件
	 *
	 * @memberof @memberof StorySpecCalendarEditFormBase
	 */
    public button3_click($event: any): void {
        this.form_button3_click(null, null, $event);

    }

	/**
	 * 表单 关闭 事件
	 *
	 * @memberof @memberof StorySpecCalendarEditFormBase
	 */
    public button4_click($event: any): void {
        this.form_button4_click(null, null, $event);

    }

	/**
	 * 表单 变更 事件
	 *
	 * @memberof @memberof StorySpecCalendarEditFormBase
	 */
    public button5_click($event: any): void {
        this.form_button5_click(null, null, $event);

    }

	/**
	 * 表单 细分 事件
	 *
	 * @memberof @memberof StorySpecCalendarEditFormBase
	 */
    public button6_click($event: any): void {
        this.form_button6_click(null, null, $event);

    }

	/**
	 * 表单 编辑 事件
	 *
	 * @memberof @memberof StorySpecCalendarEditFormBase
	 */
    public button7_click($event: any): void {
        this.form_button7_click(null, null, $event);

    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof StorySpecCalendarBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}