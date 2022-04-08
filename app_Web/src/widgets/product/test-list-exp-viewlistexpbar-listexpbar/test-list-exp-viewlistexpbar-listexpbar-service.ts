import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductService from '@/service/product/product-service';
import TestListExpViewlistexpbarModel from './test-list-exp-viewlistexpbar-listexpbar-model';


/**
 * TestListExpViewlistexpbar 部件服务对象
 *
 * @export
 * @class TestListExpViewlistexpbarService
 */
export default class TestListExpViewlistexpbarService extends ControlService {

    /**
     * 产品服务对象
     *
     * @type {ProductService}
     * @memberof TestListExpViewlistexpbarService
     */
    public appEntityService: ProductService = new ProductService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof TestListExpViewlistexpbarService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of TestListExpViewlistexpbarService.
     * 
     * @param {*} [opts={}]
     * @memberof TestListExpViewlistexpbarService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new TestListExpViewlistexpbarModel();
    }

}