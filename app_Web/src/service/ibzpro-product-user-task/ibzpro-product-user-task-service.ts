import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzproProductUserTaskServiceBase from './ibzpro-product-user-task-service-base';


/**
 * 产品汇报用户任务服务对象
 *
 * @export
 * @class IbzproProductUserTaskService
 * @extends {IbzproProductUserTaskServiceBase}
 */
export default class IbzproProductUserTaskService extends IbzproProductUserTaskServiceBase {

    /**
     * Creates an instance of  IbzproProductUserTaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzproProductUserTaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}