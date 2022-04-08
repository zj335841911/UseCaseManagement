import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProductWeeklyServiceBase from './ibizpro-product-weekly-service-base';


/**
 * 产品周报服务对象
 *
 * @export
 * @class IbizproProductWeeklyService
 * @extends {IbizproProductWeeklyServiceBase}
 */
export default class IbizproProductWeeklyService extends IbizproProductWeeklyServiceBase {

    /**
     * Creates an instance of  IbizproProductWeeklyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProductWeeklyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}