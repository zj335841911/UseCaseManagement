import { Http } from '@/utils';
import { Util } from '@/utils';
import TaskestimatestatsServiceBase from './taskestimatestats-service-base';


/**
 * 任务工时统计服务对象
 *
 * @export
 * @class TaskestimatestatsService
 * @extends {TaskestimatestatsServiceBase}
 */
export default class TaskestimatestatsService extends TaskestimatestatsServiceBase {

    /**
     * Creates an instance of  TaskestimatestatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskestimatestatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}