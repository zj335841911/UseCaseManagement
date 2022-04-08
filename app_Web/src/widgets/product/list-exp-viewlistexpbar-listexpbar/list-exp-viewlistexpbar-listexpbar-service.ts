import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductService from '@/service/product/product-service';
import ListExpViewlistexpbarModel from './list-exp-viewlistexpbar-listexpbar-model';


/**
 * ListExpViewlistexpbar 部件服务对象
 *
 * @export
 * @class ListExpViewlistexpbarService
 */
export default class ListExpViewlistexpbarService extends ControlService {

    /**
     * 产品服务对象
     *
     * @type {ProductService}
     * @memberof ListExpViewlistexpbarService
     */
    public appEntityService: ProductService = new ProductService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ListExpViewlistexpbarService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ListExpViewlistexpbarService.
     * 
     * @param {*} [opts={}]
     * @memberof ListExpViewlistexpbarService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ListExpViewlistexpbarModel();
    }

}