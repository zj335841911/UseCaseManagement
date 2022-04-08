import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProjectDailyServiceBase from './ibizpro-project-daily-service-base';


/**
 * 项目日报服务对象
 *
 * @export
 * @class IbizproProjectDailyService
 * @extends {IbizproProjectDailyServiceBase}
 */
export default class IbizproProjectDailyService extends IbizproProjectDailyServiceBase {

    /**
     * Creates an instance of  IbizproProjectDailyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProjectDailyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * SumProjectDaily接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbizproProjectDailyServiceBase
     */
    public async SumProjectDaily(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = Http.getInstance().post(`/ibizproprojectdailies/0/sumprojectdaily`,data,isloading);
        return res;
    }

}