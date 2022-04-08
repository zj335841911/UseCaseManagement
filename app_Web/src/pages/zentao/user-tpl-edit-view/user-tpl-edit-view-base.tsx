import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import UserTplService from '@/service/user-tpl/user-tpl-service';
import UserTplAuthService from '@/authservice/user-tpl/user-tpl-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import UserTplUIService from '@/uiservice/user-tpl/user-tpl-ui-service';

/**
 * usertpl编辑视图视图基类
 *
 * @export
 * @class UserTplEditViewBase
 * @extends {EditViewBase}
 */
export class UserTplEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserTplEditViewBase
     */
    protected appDeName: string = 'usertpl';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof UserTplEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof UserTplEditViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof UserTplEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {UserTplService}
     * @memberof UserTplEditViewBase
     */
    protected appEntityService: UserTplService = new UserTplService;

    /**
     * 实体权限服务对象
     *
     * @type UserTplUIService
     * @memberof UserTplEditViewBase
     */
    public appUIService: UserTplUIService = new UserTplUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof UserTplEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof UserTplEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.usertpl.views.editview.caption',
        srfTitle: 'entities.usertpl.views.editview.title',
        srfSubTitle: 'entities.usertpl.views.editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof UserTplEditViewBase
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
     * @memberof UserTplEditViewBase
     */
	protected viewtag: string = '8c08fcf2db47efba2ca50d8feed5e52c';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof UserTplEditViewBase
     */ 
    protected viewName: string = 'UserTplEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof UserTplEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof UserTplEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof UserTplEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'usertpl',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserTplEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserTplEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserTplEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}