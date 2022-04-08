import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import TestModuleService from '@/service/test-module/test-module-service';
import TestModuleAuthService from '@/authservice/test-module/test-module-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import TestModuleUIService from '@/uiservice/test-module/test-module-ui-service';

/**
 * 需求模块视图基类
 *
 * @export
 * @class TestModuleQuickCfgViewBase
 * @extends {OptionViewBase}
 */
export class TestModuleQuickCfgViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestModuleQuickCfgViewBase
     */
    protected appDeName: string = 'testmodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestModuleQuickCfgViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestModuleQuickCfgViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TestModuleQuickCfgViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {TestModuleService}
     * @memberof TestModuleQuickCfgViewBase
     */
    protected appEntityService: TestModuleService = new TestModuleService;

    /**
     * 实体权限服务对象
     *
     * @type TestModuleUIService
     * @memberof TestModuleQuickCfgViewBase
     */
    public appUIService: TestModuleUIService = new TestModuleUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof TestModuleQuickCfgViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestModuleQuickCfgViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testmodule.views.quickcfgview.caption',
        srfTitle: 'entities.testmodule.views.quickcfgview.title',
        srfSubTitle: 'entities.testmodule.views.quickcfgview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestModuleQuickCfgViewBase
     */
    protected containerModel: any = {
        view_form: {
            name: 'form',
            type: 'FORM',
        },
        view_okbtn: {
            name: 'okbtn',
            type: 'button',
            text: '确定',
            disabled: true,
        },
        view_cancelbtn: {
            name: 'cancelbtn',
            type: 'button',
            text: '取消',
            disabled: false,
        },
        view_leftbtn: {
            name: 'leftbtn',
            type: 'button',
            text: '左移',
            disabled: true,
        },
        view_rightbtn: {
            name: 'rightbtn',
            type: 'button',
            text: '右移',
            disabled: true,},
        view_allleftbtn: {
            name: 'allleftbtn',
            type: 'button',
            text: '全部左移',
            disabled: true,
        },
        view_allrightbtn: {
            name: 'allrightbtn',
            type: 'button',
            text: '全部右移',
            disabled: true,
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof TestModuleQuickCfgViewBase
     */
	protected viewtag: string = 'd337f5c3c125dc2641321f2d93b65476';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TestModuleQuickCfgViewBase
     */ 
    protected viewName: string = 'TestModuleQuickCfgView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestModuleQuickCfgViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestModuleQuickCfgViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestModuleQuickCfgViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'testmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestModuleQuickCfgViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestModuleQuickCfgViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestModuleQuickCfgViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}