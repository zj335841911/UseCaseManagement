import { Http } from '@/utils';
import { Util } from '@/utils';
import BurnServiceBase from './burn-service-base';


/**
 * burn服务对象
 *
 * @export
 * @class BurnService
 * @extends {BurnServiceBase}
 */
export default class BurnService extends BurnServiceBase {

    /**
     * Creates an instance of  BurnService.
     * 
     * @param {*} [opts={}]
     * @memberof  BurnService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}