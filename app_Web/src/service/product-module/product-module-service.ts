import { Http } from '@/utils';
import { Util } from '@/utils';
import ProductModuleServiceBase from './product-module-service-base';


/**
 * 需求模块服务对象
 *
 * @export
 * @class ProductModuleService
 * @extends {ProductModuleServiceBase}
 */
export default class ProductModuleService extends ProductModuleServiceBase {

    /**
     * Creates an instance of  ProductModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}