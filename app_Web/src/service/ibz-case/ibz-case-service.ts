import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzCaseServiceBase from './ibz-case-service-base';


/**
 * 测试用例服务对象
 *
 * @export
 * @class IbzCaseService
 * @extends {IbzCaseServiceBase}
 */
export default class IbzCaseService extends IbzCaseServiceBase {

    /**
     * Creates an instance of  IbzCaseService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzCaseService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}