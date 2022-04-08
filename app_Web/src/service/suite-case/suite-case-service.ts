import { Http } from '@/utils';
import { Util } from '@/utils';
import SuiteCaseServiceBase from './suite-case-service-base';


/**
 * 套件用例服务对象
 *
 * @export
 * @class SuiteCaseService
 * @extends {SuiteCaseServiceBase}
 */
export default class SuiteCaseService extends SuiteCaseServiceBase {

    /**
     * Creates an instance of  SuiteCaseService.
     * 
     * @param {*} [opts={}]
     * @memberof  SuiteCaseService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}