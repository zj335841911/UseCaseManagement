import { Http } from '@/utils';
import { Util } from '@/utils';
import GroupServiceBase from './group-service-base';


/**
 * 群组服务对象
 *
 * @export
 * @class GroupService
 * @extends {GroupServiceBase}
 */
export default class GroupService extends GroupServiceBase {

    /**
     * Creates an instance of  GroupService.
     * 
     * @param {*} [opts={}]
     * @memberof  GroupService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}