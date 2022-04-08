import { Http } from '@/utils';
import { Util } from '@/utils';
import SubTaskServiceBase from './sub-task-service-base';


/**
 * 任务服务对象
 *
 * @export
 * @class SubTaskService
 * @extends {SubTaskServiceBase}
 */
export default class SubTaskService extends SubTaskServiceBase {

    /**
     * Creates an instance of  SubTaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  SubTaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}