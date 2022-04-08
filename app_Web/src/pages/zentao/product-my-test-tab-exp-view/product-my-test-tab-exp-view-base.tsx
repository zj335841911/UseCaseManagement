import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import ProductUIService from '@/uiservice/product/product-ui-service';

/**
 * 测试视图基类
 *
 * @export
 * @class ProductMyTestTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class ProductMyTestTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductMyTestTabExpViewBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductMyTestTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductMyTestTabExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductMyTestTabExpViewBase
     */
    protected appEntityService: ProductService = new ProductService;

    /**
     * 实体权限服务对象
     *
     * @type ProductUIService
     * @memberof ProductMyTestTabExpViewBase
     */
    public appUIService: ProductUIService = new ProductUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof ProductMyTestTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductMyTestTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.mytesttabexpview.caption',
        srfTitle: 'entities.product.views.mytesttabexpview.title',
        srfSubTitle: 'entities.product.views.mytesttabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductMyTestTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: {
            name: 'tabexppanel',
            type: 'TABEXPPANEL',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProductMyTestTabExpViewBase
     */
	protected viewtag: string = '192bd3c72259613684edc6fe828196f7';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductMyTestTabExpViewBase
     */ 
    protected viewName: string = 'ProductMyTestTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductMyTestTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductMyTestTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductMyTestTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}