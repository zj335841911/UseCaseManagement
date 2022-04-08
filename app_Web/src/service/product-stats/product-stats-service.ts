import { Http } from '@/utils';
import { Util } from '@/utils';
import ProductStatsServiceBase from './product-stats-service-base';


/**
 * 产品统计服务对象
 *
 * @export
 * @class ProductStatsService
 * @extends {ProductStatsServiceBase}
 */
export default class ProductStatsService extends ProductStatsServiceBase {

    /**
     * Creates an instance of  ProductStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}