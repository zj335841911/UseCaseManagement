import { Http } from '@/utils';
import { Util } from '@/utils';
import CompanyServiceBase from './company-service-base';


/**
 * 公司服务对象
 *
 * @export
 * @class CompanyService
 * @extends {CompanyServiceBase}
 */
export default class CompanyService extends CompanyServiceBase {

    /**
     * Creates an instance of  CompanyService.
     * 
     * @param {*} [opts={}]
     * @memberof  CompanyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}