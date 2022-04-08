import { Http,Util } from '@/utils';
import GetQAInformationLogicBase from './get-qainformation-logic-base';

/**
 * 获取测试人员相关数据
 *
 * @export
 * @class GetQAInformationLogic
 */
export default class GetQAInformationLogic extends GetQAInformationLogicBase{

    /**
     * Creates an instance of  GetQAInformationLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetQAInformationLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}