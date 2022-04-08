import { Http,Util } from '@/utils';
import GetProjectsLogicBase from './get-projects-logic-base';

/**
 * 获取研发人员相关数据
 *
 * @export
 * @class GetProjectsLogic
 */
export default class GetProjectsLogic extends GetProjectsLogicBase{

    /**
     * Creates an instance of  GetProjectsLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetProjectsLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}