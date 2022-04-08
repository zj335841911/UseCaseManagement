import { Http } from '@/utils';
import { Util } from '@/utils';
import UserYearWorkStatsServiceBase from './user-year-work-stats-service-base';


/**
 * 用户年度工作内容统计服务对象
 *
 * @export
 * @class UserYearWorkStatsService
 * @extends {UserYearWorkStatsServiceBase}
 */
export default class UserYearWorkStatsService extends UserYearWorkStatsServiceBase {

    /**
     * Creates an instance of  UserYearWorkStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  UserYearWorkStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}