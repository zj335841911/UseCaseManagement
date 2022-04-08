import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductService from '@/service/product/product-service';
import MyTestTabExpViewtabexppanelModel from './my-test-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * MyTestTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class MyTestTabExpViewtabexppanelService
 */
export default class MyTestTabExpViewtabexppanelService extends ControlService {

    /**
     * 产品服务对象
     *
     * @type {ProductService}
     * @memberof MyTestTabExpViewtabexppanelService
     */
    public appEntityService: ProductService = new ProductService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MyTestTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MyTestTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof MyTestTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MyTestTabExpViewtabexppanelModel();
    }

    
}