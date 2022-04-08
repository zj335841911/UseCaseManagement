import { Http } from '@/utils';
import { Util } from '@/utils';
import DeptServiceBase from './dept-service-base';


/**
 * 部门服务对象
 *
 * @export
 * @class DeptService
 * @extends {DeptServiceBase}
 */
export default class DeptService extends DeptServiceBase {

    /**
     * Creates an instance of  DeptService.
     * 
     * @param {*} [opts={}]
     * @memberof  DeptService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}