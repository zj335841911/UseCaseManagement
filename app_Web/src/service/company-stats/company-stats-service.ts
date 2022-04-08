import { Http } from '@/utils';
import { Util } from '@/utils';
import CompanyStatsServiceBase from './company-stats-service-base';


/**
 * 公司动态汇总服务对象
 *
 * @export
 * @class CompanyStatsService
 * @extends {CompanyStatsServiceBase}
 */
export default class CompanyStatsService extends CompanyStatsServiceBase {

    /**
     * Creates an instance of  CompanyStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  CompanyStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}