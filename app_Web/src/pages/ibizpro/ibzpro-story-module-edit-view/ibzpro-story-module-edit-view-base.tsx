import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IBZProStoryModuleService from '@/service/ibzpro-story-module/ibzpro-story-module-service';
import IBZProStoryModuleAuthService from '@/authservice/ibzpro-story-module/ibzpro-story-module-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IBZProStoryModuleUIService from '@/uiservice/ibzpro-story-module/ibzpro-story-module-ui-service';

/**
 * 需求模块编辑视图视图基类
 *
 * @export
 * @class IBZProStoryModuleEditViewBase
 * @extends {EditViewBase}
 */
export class IBZProStoryModuleEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleEditViewBase
     */
    protected appDeName: string = 'ibzprostorymodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleEditViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleEditViewBase
     */ 
    protected dataControl:string = "form";

    /**
     * 实体服务对象
     *
     * @type {IBZProStoryModuleService}
     * @memberof IBZProStoryModuleEditViewBase
     */
    protected appEntityService: IBZProStoryModuleService = new IBZProStoryModuleService;

    /**
     * 实体权限服务对象
     *
     * @type IBZProStoryModuleUIService
     * @memberof IBZProStoryModuleEditViewBase
     */
    public appUIService: IBZProStoryModuleUIService = new IBZProStoryModuleUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IBZProStoryModuleEditViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IBZProStoryModuleEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzprostorymodule.views.editview.caption',
        srfTitle: 'entities.ibzprostorymodule.views.editview.title',
        srfSubTitle: 'entities.ibzprostorymodule.views.editview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IBZProStoryModuleEditViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_form: { name: 'form', type: 'FORM' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof IBZProStoryModuleEditView
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleEditViewBase
     */
	protected viewtag: string = '500a15957867996d6e20e7a37db8b004';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleEditViewBase
     */ 
    protected viewName:string = "IBZProStoryModuleEditView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IBZProStoryModuleEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IBZProStoryModuleEditViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IBZProStoryModuleEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzprostorymodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZProStoryModuleEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZProStoryModuleEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZProStoryModuleEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}