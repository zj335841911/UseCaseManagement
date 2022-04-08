import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, EditFormControlBase } from '@/studio-core';
import IbzProjectMemberService from '@/service/ibz-project-member/ibz-project-member-service';
import MainService from './main-form-service';
import IbzProjectMemberUIService from '@/uiservice/ibz-project-member/ibz-project-member-ui-service';
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
     * @type {IbzProjectMemberService}
     * @memberof MainEditFormBase
     */
    public appEntityService: IbzProjectMemberService = new IbzProjectMemberService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeName: string = 'ibzprojectmember';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditFormBase
     */
    protected appDeLogicName: string = '项目相关成员';

    /**
     * 界面UI服务对象
     *
     * @type {IbzProjectMemberUIService}
     * @memberof MainBase
     */  
    public appUIService: IbzProjectMemberUIService = new IbzProjectMemberUIService(this.$store);

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
        const curUIService:IbzProjectMemberUIService  = new IbzProjectMemberUIService();
        curUIService.IbzProjectMember_TeamManagement(datas,contextJO, paramJO,  $event, xData,this,"IbzProjectMember");
    }

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
        pm: null,
        po: null,
        qd: null,
        rd: null,
        fristmember: null,
        secondmember: null,
        thirdmember: null,
        fourthmember: null,
        fifthmember: null,
        sixthmember: null,
        id: null,
        ibzprojectmember: null,
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
        button1: new FormButtonModel({
    caption: '团队管理', detailType: 'BUTTON', name: 'button1', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
    disabled: false,
    uiaction: {
        type: 'DEUIACTION',
        tag: 'TeamManagement',
        actiontarget: 'SINGLEKEY',
        noprivdisplaymode: 2,
        dataaccaction: 'SRFUR__PROJT_TM_BUT',
        visible: true,
        disabled: false,
        }
}),

        group1: new FormGroupPanelModel({ caption: '项目相关成员基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, showMoreMode: 0, uiActionGroup: { caption: '', langbase: 'entities.ibzprojectmember.main_form', extractMode: 'ITEM', details: [] } }),

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
    enableCond: 3,
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

        pm: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'pm', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        po: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'po', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        qd: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'qd', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        rd: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'rd', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        fristmember: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'fristmember', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        secondmember: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'secondmember', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        thirdmember: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'thirdmember', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        fourthmember: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'fourthmember', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        fifthmember: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'fifthmember', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        sixthmember: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'sixthmember', visible: false, isShowCaption: true, form: this, showMoreMode: 0,
    required:false,
    disabled: false,
    enableCond: 3,
}),

        id: new FormItemModel({
    caption: '', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, showMoreMode: 0,
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
     * @memberof MainEditFormBase
     */
    public async formLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): Promise<void> {
                










        if (Object.is(name, '') || Object.is(name, 'pm')) {
            let ret = false;
            const _pm = this.data.pm;
            if (this.$verify.testCond(_pm, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.pm.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'po')) {
            let ret = false;
            const _po = this.data.po;
            if (this.$verify.testCond(_po, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.po.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'qd')) {
            let ret = false;
            const _qd = this.data.qd;
            if (this.$verify.testCond(_qd, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.qd.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'rd')) {
            let ret = false;
            const _rd = this.data.rd;
            if (this.$verify.testCond(_rd, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.rd.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'fristmember')) {
            let ret = false;
            const _fristmember = this.data.fristmember;
            if (this.$verify.testCond(_fristmember, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.fristmember.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'secondmember')) {
            let ret = false;
            const _secondmember = this.data.secondmember;
            if (this.$verify.testCond(_secondmember, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.secondmember.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'thirdmember')) {
            let ret = false;
            const _thirdmember = this.data.thirdmember;
            if (this.$verify.testCond(_thirdmember, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.thirdmember.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'fourthmember')) {
            let ret = false;
            const _fourthmember = this.data.fourthmember;
            if (this.$verify.testCond(_fourthmember, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.fourthmember.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'fifthmember')) {
            let ret = false;
            const _fifthmember = this.data.fifthmember;
            if (this.$verify.testCond(_fifthmember, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.fifthmember.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'sixthmember')) {
            let ret = false;
            const _sixthmember = this.data.sixthmember;
            if (this.$verify.testCond(_sixthmember, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.sixthmember.setVisible(ret);
        }


    }

	/**
	 * 表单 团队管理 事件
	 *
	 * @memberof @memberof MainEditFormBase
	 */
    public button1_click($event: any): void {
        this.form_button1_click(null, null, $event);

    }

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