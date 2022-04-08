import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzProjectMemberServiceBase from './ibz-project-member-service-base';


/**
 * 项目相关成员服务对象
 *
 * @export
 * @class IbzProjectMemberService
 * @extends {IbzProjectMemberServiceBase}
 */
export default class IbzProjectMemberService extends IbzProjectMemberServiceBase {

    /**
     * Creates an instance of  IbzProjectMemberService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzProjectMemberService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}