import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductService from '@/service/product/product-service';
import TestTabExpViewtabexppanelModel from './test-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * TestTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class TestTabExpViewtabexppanelService
 */
export default class TestTabExpViewtabexppanelService extends ControlService {

    /**
     * 产品服务对象
     *
     * @type {ProductService}
     * @memberof TestTabExpViewtabexppanelService
     */
    public appEntityService: ProductService = new ProductService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof TestTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of TestTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof TestTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new TestTabExpViewtabexppanelModel();
    }

    
}