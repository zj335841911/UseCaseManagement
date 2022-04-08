import { Http } from '@/utils';
import { Util } from '@/utils';
import TaskTeamServiceBase from './task-team-service-base';


/**
 * 任务团队服务对象
 *
 * @export
 * @class TaskTeamService
 * @extends {TaskTeamServiceBase}
 */
export default class TaskTeamService extends TaskTeamServiceBase {

    /**
     * Creates an instance of  TaskTeamService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskTeamService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}