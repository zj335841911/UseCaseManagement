import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import ProductModuleService from '@/service/product-module/product-module-service';
import ProductModuleAuthService from '@/authservice/product-module/product-module-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import ProductModuleUIService from '@/uiservice/product-module/product-module-ui-service';

/**
 * 需求模块视图基类
 *
 * @export
 * @class ProductModuleQuickCfgViewBase
 * @extends {OptionViewBase}
 */
export class ProductModuleQuickCfgViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleQuickCfgViewBase
     */
    protected appDeName: string = 'productmodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleQuickCfgViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleQuickCfgViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleQuickCfgViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {ProductModuleService}
     * @memberof ProductModuleQuickCfgViewBase
     */
    protected appEntityService: ProductModuleService = new ProductModuleService;

    /**
     * 实体权限服务对象
     *
     * @type ProductModuleUIService
     * @memberof ProductModuleQuickCfgViewBase
     */
    public appUIService: ProductModuleUIService = new ProductModuleUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof ProductModuleQuickCfgViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleQuickCfgViewBase
     */
    protected model: any = {
        srfCaption: 'entities.productmodule.views.quickcfgview.caption',
        srfTitle: 'entities.productmodule.views.quickcfgview.title',
        srfSubTitle: 'entities.productmodule.views.quickcfgview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductModuleQuickCfgViewBase
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
     * @memberof ProductModuleQuickCfgViewBase
     */
	protected viewtag: string = '8bcbd6c2b7e3d93270529da796425a5b';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductModuleQuickCfgViewBase
     */ 
    protected viewName: string = 'ProductModuleQuickCfgView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductModuleQuickCfgViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductModuleQuickCfgViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductModuleQuickCfgViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'productmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleQuickCfgViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleQuickCfgViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductModuleQuickCfgViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}