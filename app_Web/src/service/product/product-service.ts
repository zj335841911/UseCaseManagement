import { Http,Util } from '@/utils';
import ProductServiceBase from './product-service-base';


/**
 * 产品服务对象
 *
 * @export
 * @class ProductService
 * @extends {ProductServiceBase}
 */
export default class ProductService extends ProductServiceBase {

    /**
     * Creates an instance of  ProductService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * WizardCreate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async WizardCreate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        return { status: 200, data: {} };
    }


}