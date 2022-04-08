import { Http } from '@/utils';
import { Util } from '@/utils';
import HistoryServiceBase from './history-service-base';


/**
 * 操作历史服务对象
 *
 * @export
 * @class HistoryService
 * @extends {HistoryServiceBase}
 */
export default class HistoryService extends HistoryServiceBase {

    /**
     * Creates an instance of  HistoryService.
     * 
     * @param {*} [opts={}]
     * @memberof  HistoryService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}