import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditView9Base } from '@/studio-core';
import IbzProjectMemberService from '@/service/ibz-project-member/ibz-project-member-service';
import IbzProjectMemberAuthService from '@/authservice/ibz-project-member/ibz-project-member-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import IbzProjectMemberUIService from '@/uiservice/ibz-project-member/ibz-project-member-ui-service';

/**
 * 项目相关成员编辑视图（相关成员）视图基类
 *
 * @export
 * @class IbzProjectMemberEditView9Base
 * @extends {EditView9Base}
 */
export class IbzProjectMemberEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzProjectMemberEditView9Base
     */
    protected appDeName: string = 'ibzprojectmember';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzProjectMemberEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzProjectMemberEditView9Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzProjectMemberEditView9Base
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzProjectMemberService}
     * @memberof IbzProjectMemberEditView9Base
     */
    protected appEntityService: IbzProjectMemberService = new IbzProjectMemberService;

    /**
     * 实体权限服务对象
     *
     * @type IbzProjectMemberUIService
     * @memberof IbzProjectMemberEditView9Base
     */
    public appUIService: IbzProjectMemberUIService = new IbzProjectMemberUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzProjectMemberEditView9Base
	 */
    protected customViewNavContexts: any = {
        'ID': {
            isRawValue: false,
            value: 'srfparentkey',
        },
        'IBZPROJECTMEMBER': {
            isRawValue: false,
            value: 'srfparentkey',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzProjectMemberEditView9Base
	 */
    protected customViewParams: any = {
        'id': {
            isRawValue: false,
            value: 'srfparentkey',
        },
        'ibzprojectmember': {
            isRawValue: false,
            value: 'srfparentkey',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzProjectMemberEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.ibzprojectmember.views.editview9.caption',
        srfTitle: 'entities.ibzprojectmember.views.editview9.title',
        srfSubTitle: 'entities.ibzprojectmember.views.editview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzProjectMemberEditView9Base
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
     * @memberof IbzProjectMemberEditView9Base
     */
	protected viewtag: string = '322b17905b7ba95289eab32f7d4ae4d0';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzProjectMemberEditView9Base
     */ 
    protected viewName: string = 'IbzProjectMemberEditView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzProjectMemberEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzProjectMemberEditView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzProjectMemberEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzprojectmember',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzProjectMemberEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzProjectMemberEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzProjectMemberEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof IbzProjectMemberEditView9Base
     */
    protected viewMounted(): void {
        if (this.panelState) {
            this.panelState.subscribe((res:any) => {
                if (Object.is(res.tag,'meditviewpanel')) {
                    if (Object.is(res.action,'save')) {
                        this.viewState.next({ tag:'form', action: 'save', data:res.data});
                    }
                    if (Object.is(res.action,'remove')) {
                        this.viewState.next({ tag:'form', action: 'remove', data:res.data});
                    }
                }
            });
        }
    }


}