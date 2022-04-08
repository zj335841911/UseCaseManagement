import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import UserService from '@/service/user/user-service';
import UserAuthService from '@/authservice/user/user-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import UserUIService from '@/uiservice/user/user-ui-service';

/**
 * 用户编辑视图视图基类
 *
 * @export
 * @class UserINFOEditViewBase
 * @extends {EditViewBase}
 */
export class UserINFOEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserINFOEditViewBase
     */
    protected appDeName: string = 'user';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof UserINFOEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof UserINFOEditViewBase
     */
    protected appDeMajor: string = 'realname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof UserINFOEditViewBase
     */ 
    protected dataControl:string = "form";

    /**
     * 实体服务对象
     *
     * @type {UserService}
     * @memberof UserINFOEditViewBase
     */
    protected appEntityService: UserService = new UserService;

    /**
     * 实体权限服务对象
     *
     * @type UserUIService
     * @memberof UserINFOEditViewBase
     */
    public appUIService: UserUIService = new UserUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof UserINFOEditViewBase
	 */
    protected customViewNavContexts: any = {
        'DEPT': { isRawValue: false, value: 'dept' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof UserINFOEditViewBase
	 */
    protected customViewParams: any = {
        'dept': { isRawValue: false, value: 'dept' }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof UserINFOEditViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof UserINFOEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.user.views.infoeditview.caption',
        srfTitle: 'entities.user.views.infoeditview.title',
        srfSubTitle: 'entities.user.views.infoeditview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof UserINFOEditViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_form: { name: 'form', type: 'FORM' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof UserINFOEditView
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof UserINFOEditViewBase
     */
	protected viewtag: string = '72a44528b73b17f6e29a3ca59e432d19';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof UserINFOEditViewBase
     */ 
    protected viewName:string = "UserINFOEditView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof UserINFOEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof UserINFOEditViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof UserINFOEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'user',
            majorPSDEField: 'realname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserINFOEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserINFOEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserINFOEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}