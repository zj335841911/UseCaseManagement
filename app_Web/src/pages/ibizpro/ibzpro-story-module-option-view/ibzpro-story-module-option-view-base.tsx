import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import IBZProStoryModuleService from '@/service/ibzpro-story-module/ibzpro-story-module-service';
import IBZProStoryModuleAuthService from '@/authservice/ibzpro-story-module/ibzpro-story-module-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import IBZProStoryModuleUIService from '@/uiservice/ibzpro-story-module/ibzpro-story-module-ui-service';

/**
 * 需求模块选项操作视图同步视图基类
 *
 * @export
 * @class IBZProStoryModuleOptionViewBase
 * @extends {OptionViewBase}
 */
export class IBZProStoryModuleOptionViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleOptionViewBase
     */
    protected appDeName: string = 'ibzprostorymodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleOptionViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleOptionViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleOptionViewBase
     */ 
    protected dataControl:string = "form";

    /**
     * 实体服务对象
     *
     * @type {IBZProStoryModuleService}
     * @memberof IBZProStoryModuleOptionViewBase
     */
    protected appEntityService: IBZProStoryModuleService = new IBZProStoryModuleService;

    /**
     * 实体权限服务对象
     *
     * @type IBZProStoryModuleUIService
     * @memberof IBZProStoryModuleOptionViewBase
     */
    public appUIService: IBZProStoryModuleUIService = new IBZProStoryModuleUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IBZProStoryModuleOptionViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IBZProStoryModuleOptionViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzprostorymodule.views.optionview.caption',
        srfTitle: 'entities.ibzprostorymodule.views.optionview.title',
        srfSubTitle: 'entities.ibzprostorymodule.views.optionview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IBZProStoryModuleOptionViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
        view_okbtn: { name: 'okbtn', type: 'button', text: '确定', disabled: true },
        view_cancelbtn: { name: 'cancelbtn', type: 'button', text: '取消', disabled: false },
        view_leftbtn: { name: 'leftbtn', type: 'button', text: '左移', disabled: true },
        view_rightbtn: { name: 'rightbtn', type: 'button', text: '右移', disabled: true },
        view_allleftbtn: { name: 'allleftbtn', type: 'button', text: '全部左移', disabled: true },
        view_allrightbtn: { name: 'allrightbtn', type: 'button', text: '全部右移', disabled: true },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleOptionViewBase
     */
	protected viewtag: string = '87ca9109af86ed2745dcf7aa21294541';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IBZProStoryModuleOptionViewBase
     */ 
    protected viewName:string = "IBZProStoryModuleOptionView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IBZProStoryModuleOptionViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IBZProStoryModuleOptionViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IBZProStoryModuleOptionViewBase
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
     * @memberof IBZProStoryModuleOptionViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZProStoryModuleOptionViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IBZProStoryModuleOptionViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}