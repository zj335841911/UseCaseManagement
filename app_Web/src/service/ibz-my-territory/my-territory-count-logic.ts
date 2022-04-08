import { Http } from '@/utils';
import { Util } from '@/utils';
import MyTerritoryCountLogicBase from './my-territory-count-logic-base';

/**
 * 我的地盘移动端计数器
 *
 * @export
 * @class MyTerritoryCountLogic
 */
export default class MyTerritoryCountLogic extends MyTerritoryCountLogicBase{

    /**
     * Creates an instance of  MyTerritoryCountLogic
     * 
     * @param {*} [opts={}]
     * @memberof  MyTerritoryCountLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}