import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProjectMonthlyServiceBase from './ibizpro-project-monthly-service-base';


/**
 * 项目月报服务对象
 *
 * @export
 * @class IbizproProjectMonthlyService
 * @extends {IbizproProjectMonthlyServiceBase}
 */
export default class IbizproProjectMonthlyService extends IbizproProjectMonthlyServiceBase {

    /**
     * Creates an instance of  IbizproProjectMonthlyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProjectMonthlyService
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
     * @memberof IbizproProjectMonthlyServiceBase
     */
    public async ManualCreateMonthly(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = Http.getInstance().post(`/ibizproprojectmonthlies/0/manualcreatemonthly`,data,isloading);
        return res;
    }
}