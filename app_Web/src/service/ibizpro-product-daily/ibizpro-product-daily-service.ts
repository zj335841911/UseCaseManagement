import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProductDailyServiceBase from './ibizpro-product-daily-service-base';


/**
 * 产品日报服务对象
 *
 * @export
 * @class IbizproProductDailyService
 * @extends {IbizproProductDailyServiceBase}
 */
export default class IbizproProductDailyService extends IbizproProductDailyServiceBase {

    /**
     * Creates an instance of  IbizproProductDailyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProductDailyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * ManualCreateDaily接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbizproProductDailyServiceBase
     */
    public async ManualCreateDaily(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = Http.getInstance().post(`/ibizproproductdailies/0/manualcreatedaily`,data,isloading);
        return res;
    }


}