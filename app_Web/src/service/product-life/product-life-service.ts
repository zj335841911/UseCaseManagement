import { Http } from '@/utils';
import { Util } from '@/utils';
import ProductLifeServiceBase from './product-life-service-base';


/**
 * 产品生命周期服务对象
 *
 * @export
 * @class ProductLifeService
 * @extends {ProductLifeServiceBase}
 */
export default class ProductLifeService extends ProductLifeServiceBase {

    /**
     * Creates an instance of  ProductLifeService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductLifeService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}