import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzReportRoleConfigServiceBase from './ibz-report-role-config-service-base';


/**
 * 汇报角色配置服务对象
 *
 * @export
 * @class IbzReportRoleConfigService
 * @extends {IbzReportRoleConfigServiceBase}
 */
export default class IbzReportRoleConfigService extends IbzReportRoleConfigServiceBase {

    /**
     * Creates an instance of  IbzReportRoleConfigService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzReportRoleConfigService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}