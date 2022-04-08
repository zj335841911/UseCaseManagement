import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductService from '@/service/product/product-service';
import MainTabExpViewtabexppanelModel from './main-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * MainTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class MainTabExpViewtabexppanelService
 */
export default class MainTabExpViewtabexppanelService extends ControlService {

    /**
     * 产品服务对象
     *
     * @type {ProductService}
     * @memberof MainTabExpViewtabexppanelService
     */
    public appEntityService: ProductService = new ProductService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MainTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MainTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof MainTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MainTabExpViewtabexppanelModel();
    }

    
}