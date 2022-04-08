import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzReportServiceBase from './ibz-report-service-base';


/**
 * 汇报汇总服务对象
 *
 * @export
 * @class IbzReportService
 * @extends {IbzReportServiceBase}
 */
export default class IbzReportService extends IbzReportServiceBase {

    /**
     * Creates an instance of  IbzReportService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzReportService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}