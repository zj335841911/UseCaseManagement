import { Http } from '@/utils';
import { Util } from '@/utils';
import IBZTaskEstimateServiceBase from './ibztask-estimate-service-base';


/**
 * 任务预计服务对象
 *
 * @export
 * @class IBZTaskEstimateService
 * @extends {IBZTaskEstimateServiceBase}
 */
export default class IBZTaskEstimateService extends IBZTaskEstimateServiceBase {

    /**
     * Creates an instance of  IBZTaskEstimateService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZTaskEstimateService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}