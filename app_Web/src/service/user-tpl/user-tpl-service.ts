import { Http } from '@/utils';
import { Util } from '@/utils';
import UserTplServiceBase from './user-tpl-service-base';


/**
 * 用户模板服务对象
 *
 * @export
 * @class UserTplService
 * @extends {UserTplServiceBase}
 */
export default class UserTplService extends UserTplServiceBase {

    /**
     * Creates an instance of  UserTplService.
     * 
     * @param {*} [opts={}]
     * @memberof  UserTplService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}