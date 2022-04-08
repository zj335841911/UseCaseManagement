import { Http } from '@/utils';
import { Util } from '@/utils';
import UserContactServiceBase from './user-contact-service-base';


/**
 * 用户联系方式服务对象
 *
 * @export
 * @class UserContactService
 * @extends {UserContactServiceBase}
 */
export default class UserContactService extends UserContactServiceBase {

    /**
     * Creates an instance of  UserContactService.
     * 
     * @param {*} [opts={}]
     * @memberof  UserContactService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}