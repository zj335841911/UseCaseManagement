import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzproProjectUserTaskServiceBase from './ibzpro-project-user-task-service-base';


/**
 * 项目汇报用户任务服务对象
 *
 * @export
 * @class IbzproProjectUserTaskService
 * @extends {IbzproProjectUserTaskServiceBase}
 */
export default class IbzproProjectUserTaskService extends IbzproProjectUserTaskServiceBase {

    /**
     * Creates an instance of  IbzproProjectUserTaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzproProjectUserTaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}