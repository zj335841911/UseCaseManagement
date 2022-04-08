import { Http } from '@/utils';
import { Util } from '@/utils';
import SysUpdateLogServiceBase from './sys-update-log-service-base';


/**
 * 更新日志服务对象
 *
 * @export
 * @class SysUpdateLogService
 * @extends {SysUpdateLogServiceBase}
 */
export default class SysUpdateLogService extends SysUpdateLogServiceBase {

    /**
     * Creates an instance of  SysUpdateLogService.
     * 
     * @param {*} [opts={}]
     * @memberof  SysUpdateLogService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}