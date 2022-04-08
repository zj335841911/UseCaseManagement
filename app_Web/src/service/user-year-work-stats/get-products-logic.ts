import { Http,Util } from '@/utils';
import GetProductsLogicBase from './get-products-logic-base';

/**
 * 获取产品经理相关数据
 *
 * @export
 * @class GetProductsLogic
 */
export default class GetProductsLogic extends GetProductsLogicBase{

    /**
     * Creates an instance of  GetProductsLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetProductsLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}