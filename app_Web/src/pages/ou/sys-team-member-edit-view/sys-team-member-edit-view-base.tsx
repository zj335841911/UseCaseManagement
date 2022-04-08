import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import SysTeamMemberService from '@/service/sys-team-member/sys-team-member-service';
import SysTeamMemberAuthService from '@/authservice/sys-team-member/sys-team-member-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import SysTeamMemberUIService from '@/uiservice/sys-team-member/sys-team-member-ui-service';

/**
 * 组成员编辑视图视图基类
 *
 * @export
 * @class SysTeamMemberEditViewBase
 * @extends {EditViewBase}
 */
export class SysTeamMemberEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberEditViewBase
     */
    protected appDeName: string = 'systeammember';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberEditViewBase
     */
    protected appDeKey: string = 'teammemberid';
// 应用实体「SysTeamMember」未设置主文本属性

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {SysTeamMemberService}
     * @memberof SysTeamMemberEditViewBase
     */
    protected appEntityService: SysTeamMemberService = new SysTeamMemberService;

    /**
     * 实体权限服务对象
     *
     * @type SysTeamMemberUIService
     * @memberof SysTeamMemberEditViewBase
     */
    public appUIService: SysTeamMemberUIService = new SysTeamMemberUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof SysTeamMemberEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysTeamMemberEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.systeammember.views.editview.caption',
        srfTitle: 'entities.systeammember.views.editview.title',
        srfSubTitle: 'entities.systeammember.views.editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysTeamMemberEditViewBase
     */
    protected containerModel: any = {
        view_form: {
            name: 'form',
            type: 'FORM',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberEditViewBase
     */
	protected viewtag: string = '647cee7cf9c101876645c1c5bcec3602';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberEditViewBase
     */ 
    protected viewName: string = 'SysTeamMemberEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysTeamMemberEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysTeamMemberEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysTeamMemberEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'systeammember',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}