import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import SysTeamMemberService from '@/service/sys-team-member/sys-team-member-service';
import ExpMainEditService from './exp-main-edit-form-service';
import SysTeamMemberUIService from '@/uiservice/sys-team-member/sys-team-member-ui-service';
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
 * @extends {ExpMainEditEditFormBase}
 */
export class ExpMainEditEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ExpMainEditEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {ExpMainEditService}
     * @memberof ExpMainEditEditFormBase
     */
    public service: ExpMainEditService = new ExpMainEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SysTeamMemberService}
     * @memberof ExpMainEditEditFormBase
     */
    public appEntityService: SysTeamMemberService = new SysTeamMemberService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ExpMainEditEditFormBase
     */
    protected appDeName: string = 'systeammember';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ExpMainEditEditFormBase
     */
    protected appDeLogicName: string = '组成员';

    /**
     * 界面UI服务对象
     *
     * @type {SysTeamMemberUIService}
     * @memberof ExpMainEditBase
     */  
    public appUIService: SysTeamMemberUIService = new SysTeamMemberUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ExpMainEditEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        postid: null,
        teamid: null,
        userid: null,
        personname: null,
        username: null,
        postname: null,
        teammemberid: null,
        systeammember: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof ExpMainEditEditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ExpMainEditEditFormBase
     */
    public rules(): any{
        return {
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ExpMainEditBase
     */
    public deRules:any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ExpMainEditEditFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this, showMoreMode: 0 }),

        srforikey: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfkey: new FormItemModel({
    caption: '组成员标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        postid: new FormItemModel({
    caption: '岗位标识', detailType: 'FORMITEM', name: 'postid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        teamid: new FormItemModel({
    caption: '组标识', detailType: 'FORMITEM', name: 'teamid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        userid: new FormItemModel({
    caption: '用户标识', detailType: 'FORMITEM', name: 'userid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        personname: new FormItemModel({
    caption: '姓名', detailType: 'FORMITEM', name: 'personname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        username: new FormItemModel({
    caption: '账号', detailType: 'FORMITEM', name: 'username', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        postname: new FormItemModel({
    caption: '岗位', detailType: 'FORMITEM', name: 'postname', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        teammemberid: new FormItemModel({
    caption: '组成员标识', detailType: 'FORMITEM', name: 'teammemberid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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
     * @memberof ExpMainEditBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}