import { Http } from '@/utils';
import { Util } from '@/utils';
import IBZTaskTeamServiceBase from './ibztask-team-service-base';


/**
 * 任务团队服务对象
 *
 * @export
 * @class IBZTaskTeamService
 * @extends {IBZTaskTeamServiceBase}
 */
export default class IBZTaskTeamService extends IBZTaskTeamServiceBase {

    /**
     * Creates an instance of  IBZTaskTeamService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZTaskTeamService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}