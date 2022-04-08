import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProductMonthlyServiceBase from './ibizpro-product-monthly-service-base';


/**
 * 产品月报服务对象
 *
 * @export
 * @class IbizproProductMonthlyService
 * @extends {IbizproProductMonthlyServiceBase}
 */
export default class IbizproProductMonthlyService extends IbizproProductMonthlyServiceBase {

    /**
     * Creates an instance of  IbizproProductMonthlyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProductMonthlyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * ManualCreateMonthly接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbizproProductMonthlyServiceBase
     */
    public async ManualCreateMonthly(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = Http.getInstance().post(`/ibizproproductmonthlies/0/manualcreatemonthly`,data,isloading);
        return res;
    }

}