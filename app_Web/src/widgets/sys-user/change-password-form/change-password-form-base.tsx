import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import SysUserService from '@/service/sys-user/sys-user-service';
import ChangePasswordService from './change-password-form-service';
import SysUserUIService from '@/uiservice/sys-user/sys-user-ui-service';
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
 * @extends {ChangePasswordEditFormBase}
 */
export class ChangePasswordEditFormBase extends EditFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ChangePasswordEditFormBase
     */
    protected controlType: string = 'FORM';

    /**
     * 建构部件服务对象
     *
     * @type {ChangePasswordService}
     * @memberof ChangePasswordEditFormBase
     */
    public service: ChangePasswordService = new ChangePasswordService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SysUserService}
     * @memberof ChangePasswordEditFormBase
     */
    public appEntityService: SysUserService = new SysUserService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ChangePasswordEditFormBase
     */
    protected appDeName: string = 'sysuser';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ChangePasswordEditFormBase
     */
    protected appDeLogicName: string = '系统用户';

    /**
     * 界面UI服务对象
     *
     * @type {SysUserUIService}
     * @memberof ChangePasswordBase
     */  
    public appUIService: SysUserUIService = new SysUserUIService(this.$store);

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ChangePasswordEditFormBase
     */
    public data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        username: null,
        originalpassword: null,
        newpassword: null,
        repeatpassword: null,
        userid: null,
        sysuser: null,
    };

    /**
     * 主信息属性映射表单项名称
     *
     * @type {*}
     * @memberof ChangePasswordEditFormBase
     */
    public majorMessageField: string = '';

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ChangePasswordEditFormBase
     */
    public rules(): any{
        return {
            originalpassword: [
                {
                    required: this.detailsModel.originalpassword.required,
                    type: 'string',
                    message: `${this.$t('entities.sysuser.changepassword_form.details.originalpassword')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.originalpassword.required,
                    type: 'string',
                    message: `${this.$t('entities.sysuser.changepassword_form.details.originalpassword')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
        ],
            newpassword: [
                {
                    required: this.detailsModel.newpassword.required,
                    type: 'string',
                    message: `${this.$t('entities.sysuser.changepassword_form.details.newpassword')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.newpassword.required,
                    type: 'string',
                    message: `${this.$t('entities.sysuser.changepassword_form.details.newpassword')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
                {
                    validator: (rule: any, value: any) => {
                        return this.verifyDeRules("newpassword").isPast;
                    },
                    message: this.verifyDeRules("newpassword").infoMessage,
                    trigger: 'change',
                },
                {
                    validator: (rule: any, value: any) => {
                        return this.verifyDeRules("newpassword").isPast;
                    },
                    message: this.verifyDeRules("newpassword").infoMessage,
                    trigger: 'blur',
                },
        ],
            repeatpassword: [
                {
                    required: this.detailsModel.repeatpassword.required,
                    type: 'string',
                    message: `${this.$t('entities.sysuser.changepassword_form.details.repeatpassword')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'change',
                },
                {
                    required: this.detailsModel.repeatpassword.required,
                    type: 'string',
                    message: `${this.$t('entities.sysuser.changepassword_form.details.repeatpassword')}  ${this.$t('app.commonWords.valueNotEmpty')}`,
                    trigger: 'blur',
                },
                {
                    validator: (rule: any, value: any) => {
                        return this.verifyDeRules("repeatpassword").isPast;
                    },
                    message: this.verifyDeRules("repeatpassword").infoMessage,
                    trigger: 'change',
                },
                {
                    validator: (rule: any, value: any) => {
                        return this.verifyDeRules("repeatpassword").isPast;
                    },
                    message: this.verifyDeRules("repeatpassword").infoMessage,
                    trigger: 'blur',
                },
        ],
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ChangePasswordBase
     */
    public deRules:any = {
        newpassword:[
                  {
                      type:"GROUP",
                      condOP:"AND",
                      ruleInfo:"(由字母、数字和下划线中两种以上组成且长度大于等于6 并且 新密码不能与原密码相同 并且 新密码不能用户名相同)", 
                      isKeyCond:false,
                      isNotMode:false,
                      group:[
                  {
                      type:"REGEX",
                      condOP:"",
                      ruleInfo:"由字母、数字和下划线中两种以上组成且长度大于等于6", 
                      isKeyCond:false,
                      isNotMode:false,
                      regExCode:/^(?![0-9]+$)(?![a-zA-z]+$)(?!_+$)\w{6,}$/,
                      deName:"newpassword",
                  },
                  {
                      type:"SIMPLE",
                      condOP:"NOTEQ",
                      ruleInfo:"新密码不能与原密码相同", 
                      isKeyCond:false,
                      paramValue:"ORIGINALPASSWORD",
                      paramType:"ENTITYFIELD",
                      isNotMode:false,
                      deName:"newpassword",
                  },
                  {
                      type:"SIMPLE",
                      condOP:"NOTEQ",
                      ruleInfo:"新密码不能用户名相同", 
                      isKeyCond:false,
                      paramValue:"USERNAME",
                      paramType:"ENTITYFIELD",
                      isNotMode:false,
                      deName:"newpassword",
                  },
                        ]
                  },
                ],
        repeatpassword:[
                  {
                      type:"SIMPLE",
                      condOP:"EQ",
                      ruleInfo:"重复密码错误", 
                      isKeyCond:false,
                      paramValue:"NEWPASSWORD",
                      paramType:"ENTITYFIELD",
                      isNotMode:false,
                      deName:"repeatpassword",
                  },
                ],
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ChangePasswordEditFormBase
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
    caption: '用户标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        srfmajortext: new FormItemModel({
    caption: '用户姓名', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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

        username: new FormItemModel({
    caption: '用户名', detailType: 'FORMITEM', name: 'username', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        originalpassword: new FormItemModel({
    caption: '原密码', detailType: 'FORMITEM', name: 'originalpassword', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        newpassword: new FormItemModel({
    caption: '新密码', detailType: 'FORMITEM', name: 'newpassword', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        repeatpassword: new FormItemModel({
    caption: '重复密码', detailType: 'FORMITEM', name: 'repeatpassword', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:true,
    disabled: false,
    enableCond: 3,
}),

        userid: new FormItemModel({
    caption: '用户标识', detailType: 'FORMITEM', name: 'userid', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

    };

    /**
     * 新建默认值
     * @memberof ChangePasswordEditFormBase
     */
    public createDefault() {                    
        if (this.data.hasOwnProperty('username')) {
            this.data['username'] = this.context['srfloginname'];
        }
    }

    /**
     * 面板数据变化处理事件
     * @param {any} item 当前数据
     * @param {any} $event 面板事件数据
     *
     * @memberof ChangePasswordBase
     */
    public onPanelDataChange(item:any,$event:any) {
        Object.assign(item, $event, {rowDataState:'update'});
    }
}