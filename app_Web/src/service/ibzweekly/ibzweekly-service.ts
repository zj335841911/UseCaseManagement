import { Http } from '@/utils';
import { Util } from '@/utils';
import IBZWEEKLYServiceBase from './ibzweekly-service-base';


/**
 * 周报服务对象
 *
 * @export
 * @class IBZWEEKLYService
 * @extends {IBZWEEKLYServiceBase}
 */
export default class IBZWEEKLYService extends IBZWEEKLYServiceBase {

    /**
     * Creates an instance of  IBZWEEKLYService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZWEEKLYService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * CreateGetLastWeekPlanAndWork接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZWEEKLYServiceBase
     */
    public async CreateGetLastWeekPlanAndWork(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let msg : any = {ibzweeklyid : 0}
        Object.assign(data,msg);
        let res:any = Http.getInstance().post(`/ibzweeklies/0/creategetlastweekplanandwork`,data,isloading);
        return res;
    }


}