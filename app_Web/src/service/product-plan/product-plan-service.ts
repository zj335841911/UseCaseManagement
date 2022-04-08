import { Http,Util } from '@/utils';
import ProductPlanServiceBase from './product-plan-service-base';


/**
 * 产品计划服务对象
 *
 * @export
 * @class ProductPlanService
 * @extends {ProductPlanServiceBase}
 */
export default class ProductPlanService extends ProductPlanServiceBase {

    /**
     * Creates an instance of  ProductPlanService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductPlanService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * ImportPlanTemplet接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async ImportPlanTemplet(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productplan){
            context.productplan=0;
            data.id=0;
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productplans/${context.productplan}/importplantemplet`,data,isloading);

            return res;
        }
        context.productplan=0;
        data.id=0;
        let res:any = Http.getInstance().post(`/productplans/${context.productplan}/importplantemplet`,data,isloading);
        return res;
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