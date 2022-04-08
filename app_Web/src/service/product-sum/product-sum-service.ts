import { Http } from '@/utils';
import { Util } from '@/utils';
import ProductSumServiceBase from './product-sum-service-base';


/**
 * 产品汇总表服务对象
 *
 * @export
 * @class ProductSumService
 * @extends {ProductSumServiceBase}
 */
export default class ProductSumService extends ProductSumServiceBase {

    /**
     * Creates an instance of  ProductSumService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductSumService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}