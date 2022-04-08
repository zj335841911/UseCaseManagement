import { Http } from '@/utils';
import { Util } from '@/utils';
import IBZProProductServiceBase from './ibzpro-product-service-base';


/**
 * 平台产品服务对象
 *
 * @export
 * @class IBZProProductService
 * @extends {IBZProProductServiceBase}
 */
export default class IBZProProductService extends IBZProProductServiceBase {

    /**
     * Creates an instance of  IBZProProductService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZProProductService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}