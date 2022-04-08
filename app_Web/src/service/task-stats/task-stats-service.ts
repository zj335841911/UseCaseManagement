import { Http } from '@/utils';
import { Util } from '@/utils';
import TaskStatsServiceBase from './task-stats-service-base';


/**
 * 任务统计服务对象
 *
 * @export
 * @class TaskStatsService
 * @extends {TaskStatsServiceBase}
 */
export default class TaskStatsService extends TaskStatsServiceBase {

    /**
     * Creates an instance of  TaskStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}