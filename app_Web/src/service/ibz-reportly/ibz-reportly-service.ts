import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzReportlyServiceBase from './ibz-reportly-service-base';


/**
 * 汇报服务对象
 *
 * @export
 * @class IbzReportlyService
 * @extends {IbzReportlyServiceBase}
 */
export default class IbzReportlyService extends IbzReportlyServiceBase {

    /**
     * Creates an instance of  IbzReportlyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzReportlyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}