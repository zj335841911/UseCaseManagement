import { Http } from '@/utils';
import { Util } from '@/utils';
import GetCaseStepByIdVersionLogicBase from './get-case-step-by-id-version-logic-base';

/**
 * 根据用例标识和版本获取用例步骤
 *
 * @export
 * @class GetCaseStepByIdVersionLogic
 */
export default class GetCaseStepByIdVersionLogic extends GetCaseStepByIdVersionLogicBase{

    /**
     * Creates an instance of  GetCaseStepByIdVersionLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetCaseStepByIdVersionLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}