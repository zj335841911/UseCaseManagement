import { Http } from '@/utils';
import { Util } from '@/utils';
import AccountTaskestimateServiceBase from './account-taskestimate-service-base';


/**
 * 用户工时统计服务对象
 *
 * @export
 * @class AccountTaskestimateService
 * @extends {AccountTaskestimateServiceBase}
 */
export default class AccountTaskestimateService extends AccountTaskestimateServiceBase {

    /**
     * Creates an instance of  AccountTaskestimateService.
     * 
     * @param {*} [opts={}]
     * @memberof  AccountTaskestimateService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}