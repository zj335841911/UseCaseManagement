import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzDailyServiceBase from './ibz-daily-service-base';


/**
 * 日报服务对象
 *
 * @export
 * @class IbzDailyService
 * @extends {IbzDailyServiceBase}
 */
export default class IbzDailyService extends IbzDailyServiceBase {

    /**
     * Creates an instance of  IbzDailyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzDailyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * GetYesterdayDailyPlansTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzDailyServiceBase
     */
    public async GetYesterdayDailyPlansTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        context.ibzdaily = 0;
        data.ibzdaily = 0;
        data.ibzdailyid = 0;
        let res:any = Http.getInstance().post(`/ibzdailies/${context.ibzdaily}/getyesterdaydailyplanstask`,data,isloading);
        return res;
    }

}