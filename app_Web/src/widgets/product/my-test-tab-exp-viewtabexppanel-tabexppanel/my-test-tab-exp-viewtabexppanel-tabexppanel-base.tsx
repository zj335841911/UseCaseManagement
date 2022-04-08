import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import MyTestTabExpViewtabexppanelService from './my-test-tab-exp-viewtabexppanel-tabexppanel-service';
import ProductUIService from '@/uiservice/product/product-ui-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import { Environment } from '@/environments/environment';

/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {MyTestTabExpViewtabexppanelTabexppanelBase}
 */
export class MyTestTabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MyTestTabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MyTestTabExpViewtabexppanelService}
     * @memberof MyTestTabExpViewtabexppanelTabexppanelBase
     */
    public service: MyTestTabExpViewtabexppanelService = new MyTestTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof MyTestTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyTestTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MyTestTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof MyTestTabExpViewtabexppanelBase
     */  
    public appUIService: ProductUIService = new ProductUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MyTestTabExpViewtabexppanelBase
     */
    protected isInit: any = {
        tabviewpanel3:  true ,
        tabviewpanel4:  false ,
        tabviewpanel5:  false ,
        tabviewpanel6:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof MyTestTabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel3';

    /**
     * 实体权限服务对象
     *
     * @protected
     * @type ProductAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    protected appAuthService: ProductAuthService = new ProductAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @protected
     * @type {*}
     * @memberof MyTestTabExpViewtabexppanelBase
     */
    protected authResourceObject:any = {'tabviewpanel3':{resourcetag:null,visible: true,disabled: false},'tabviewpanel4':{resourcetag:null,visible: true,disabled: false},'tabviewpanel5':{resourcetag:null,visible: true,disabled: false},'tabviewpanel6':{resourcetag:null,visible: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MyTestTabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.product) {
            Object.assign(this.context, { srfparentdename: 'Product', srfparentkey: this.context.product });
        }
        super.ctrlCreated();
    }
}