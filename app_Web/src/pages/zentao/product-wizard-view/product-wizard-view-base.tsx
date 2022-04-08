import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { WizardViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import WizardViewEngine from '@engine/view/wizard-view-engine';
import ProductUIService from '@/uiservice/product/product-ui-service';

/**
 * 产品向导视图视图基类
 *
 * @export
 * @class ProductWizardViewBase
 * @extends {WizardViewBase}
 */
export class ProductWizardViewBase extends WizardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductWizardViewBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductWizardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductWizardViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductWizardViewBase
     */
    protected appEntityService: ProductService = new ProductService;

    /**
     * 实体权限服务对象
     *
     * @type ProductUIService
     * @memberof ProductWizardViewBase
     */
    public appUIService: ProductUIService = new ProductUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductWizardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.wizardview.caption',
        srfTitle: 'entities.product.views.wizardview.title',
        srfSubTitle: 'entities.product.views.wizardview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductWizardViewBase
     */
    protected containerModel: any = {
        view_wizardpanel: { name: 'wizardpanel', type: 'WIZARDPANEL' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProductWizardViewBase
     */
	protected viewtag: string = '3b4ab1882a49962f12900abeeddf60f0';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductWizardViewBase
     */ 
    protected viewName:string = "ProductWizardView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductWizardViewBase
     */
    public engine: WizardViewEngine = new WizardViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductWizardViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductWizardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            wizardpanel: this.$refs.wizardpanel,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * wizardpanel 部件 finish 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductWizardViewBase
     */
    public wizardpanel_finish($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('wizardpanel', 'finish', $event);
    }


}