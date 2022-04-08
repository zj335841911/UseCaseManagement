import { Http,Util } from '@/utils';
import SubProductPlanServiceBase from './sub-product-plan-service-base';


/**
 * 产品计划服务对象
 *
 * @export
 * @class SubProductPlanService
 * @extends {SubProductPlanServiceBase}
 */
export default class SubProductPlanService extends SubProductPlanServiceBase {

    /**
     * Creates an instance of  SubProductPlanService.
     * 
     * @param {*} [opts={}]
     * @memberof  SubProductPlanService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * GetEnd接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async GetPlanEnd(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res: any = { status: 200, data: {} };
        if(!(data && data.begin && data.delta)) {
            return res;
        }
        let begin: Date = new Date(data.begin);
        let period = parseInt(data.delta);

        begin.setDate(begin.getDate() + period - 1);

        let year = begin.getFullYear();
        let month = begin.getMonth() + 1;
        let day = begin.getDate();
        Object.assign(res.data, {
            end: `${year}-${month < 10 ? ('0' + month) : month}-${day < 10 ? ('0' + day) : day}`
        });
        return res;
    }

}