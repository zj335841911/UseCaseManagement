import { Http } from '@/utils';
import { Util } from '@/utils';
import TaskEstimateServiceBase from './task-estimate-service-base';


/**
 * 任务预计服务对象
 *
 * @export
 * @class TaskEstimateService
 * @extends {TaskEstimateServiceBase}
 */
export default class TaskEstimateService extends TaskEstimateServiceBase {

    /**
     * Creates an instance of  TaskEstimateService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskEstimateService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}