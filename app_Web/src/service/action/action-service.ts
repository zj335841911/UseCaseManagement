import { Http } from '@/utils';
import { Util } from '@/utils';
import ActionServiceBase from './action-service-base';


/**
 * 系统日志服务对象
 *
 * @export
 * @class ActionService
 * @extends {ActionServiceBase}
 */
export default class ActionService extends ActionServiceBase {

    /**
     * Creates an instance of  ActionService.
     * 
     * @param {*} [opts={}]
     * @memberof  ActionService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}