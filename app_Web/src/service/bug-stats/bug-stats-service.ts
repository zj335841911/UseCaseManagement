import { Http } from '@/utils';
import { Util } from '@/utils';
import BugStatsServiceBase from './bug-stats-service-base';


/**
 * Bug统计服务对象
 *
 * @export
 * @class BugStatsService
 * @extends {BugStatsServiceBase}
 */
export default class BugStatsService extends BugStatsServiceBase {

    /**
     * Creates an instance of  BugStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  BugStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}