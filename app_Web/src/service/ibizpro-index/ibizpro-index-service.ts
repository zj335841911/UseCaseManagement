import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproIndexServiceBase from './ibizpro-index-service-base';


/**
 * 索引检索服务对象
 *
 * @export
 * @class IbizproIndexService
 * @extends {IbizproIndexServiceBase}
 */
export default class IbizproIndexService extends IbizproIndexServiceBase {

    /**
     * Creates an instance of  IbizproIndexService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproIndexService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}