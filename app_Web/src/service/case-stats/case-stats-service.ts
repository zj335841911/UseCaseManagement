import { Http } from '@/utils';
import { Util } from '@/utils';
import CaseStatsServiceBase from './case-stats-service-base';


/**
 * 测试用例统计服务对象
 *
 * @export
 * @class CaseStatsService
 * @extends {CaseStatsServiceBase}
 */
export default class CaseStatsService extends CaseStatsServiceBase {

    /**
     * Creates an instance of  CaseStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}