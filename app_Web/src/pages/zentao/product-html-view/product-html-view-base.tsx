import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { ViewBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import HtmlViewEngine from '@engine/view/html-view-engine';
import ProductUIService from '@/uiservice/product/product-ui-service';

/**
 * iBiz软件生产管理视图基类
 *
 * @export
 * @class ProductHtmlViewBase
 * @extends {ViewBase}
 */
export class ProductHtmlViewBase extends ViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductHtmlViewBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductHtmlViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductHtmlViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductHtmlViewBase
     */
    protected appEntityService: ProductService = new ProductService;

    /**
     * 实体权限服务对象
     *
     * @type ProductUIService
     * @memberof ProductHtmlViewBase
     */
    public appUIService: ProductUIService = new ProductUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductHtmlViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.htmlview.caption',
        srfTitle: 'entities.product.views.htmlview.title',
        srfSubTitle: 'entities.product.views.htmlview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductHtmlViewBase
     */
    protected containerModel: any = {
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProductHtmlViewBase
     */
	protected viewtag: string = 'b6969f6aea9c131d0c2144d88472ba6a';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductHtmlViewBase
     */ 
    protected viewName: string = 'ProductHtmlView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductHtmlViewBase
     */
    public engine: HtmlViewEngine = new HtmlViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductHtmlViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductHtmlViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


    /**
     * 嵌入视图路径
     *
     * @public
     * @type string
     * @memberof ProductHtmlViewBase
     */
    public iframeUrl: string = '';

    /**
     * 解析嵌入视图路径
     *
     * @public
     * @memberof ProductHtmlViewBase
     */
    public parseIframeSrc(context: any,viewparams: any){
        this.iframeUrl = `./assets/html/iBizPMS.html`;
    }

    /**
     * 初始化视图参数
     *
     * @protected
     * @memberof ViewBase
     */
    protected parseViewParam(): void {
        this.context.clearAll();
        if (!this.viewDefaultUsage && this.viewdata && !Object.is(this.viewdata, '')) {
            if (this.$store.getters.getAppData() && this.$store.getters.getAppData().context) {
                Object.assign(this.context, this.$store.getters.getAppData().context);
            }
            if (typeof this.viewdata == 'string') {
                Object.assign(this.context, JSON.parse(this.viewdata));
            }
            if (this.context && this.context.srfparentdename) {
                Object.assign(this.viewparams, { srfparentdename: this.context.srfparentdename });
            }
            if (this.context && this.context.srfparentkey) {
                Object.assign(this.viewparams, { srfparentkey: this.context.srfparentkey });
            }
        } else {
            if (this.$store.getters.getAppData() && this.$store.getters.getAppData().context) {
                Object.assign(this.context, this.$store.getters.getAppData().context);
            }
            const path = this.$route.matched[this.$route.matched.length - 1].path;
            const keys: Array<any> = [];
            const curReg = this.$pathToRegExp.pathToRegexp(path, keys);
            const matchArray = curReg.exec(this.$route.path);
            const tempValue: Object = {};
            keys.forEach((item: any, index: number) => {
                Object.defineProperty(tempValue, item.name, {
                    enumerable: true,
                    value: matchArray[index + 1],
                });
            });
            this.$viewTool.formatRouteParams(tempValue, this.$route, this.context, this.viewparams);
            if (this.isDeView) {
                this.context.srfsessionid = this.$util.createUUID();
            }
        }
        if (this.isDeView && !isEmpty(this.appDeName)) {
            this.context.srfappdename = this.appDeName;
        }
        this.handleCustomViewData();
        this.parseIframeSrc(this.context,this.viewparams);
    }


}