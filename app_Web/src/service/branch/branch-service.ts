import { Http } from '@/utils';
import { Util } from '@/utils';
import BranchServiceBase from './branch-service-base';


/**
 * 产品的分支和平台信息服务对象
 *
 * @export
 * @class BranchService
 * @extends {BranchServiceBase}
 */
export default class BranchService extends BranchServiceBase {

    /**
     * Creates an instance of  BranchService.
     * 
     * @param {*} [opts={}]
     * @memberof  BranchService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}