import { Http } from '@/utils';
import { Util } from '@/utils';
import ProductLineServiceBase from './product-line-service-base';


/**
 * 产品线服务对象
 *
 * @export
 * @class ProductLineService
 * @extends {ProductLineServiceBase}
 */
export default class ProductLineService extends ProductLineServiceBase {

    /**
     * Creates an instance of  ProductLineService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductLineService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}