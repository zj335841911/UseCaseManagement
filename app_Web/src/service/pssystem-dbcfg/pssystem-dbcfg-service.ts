import { Http } from '@/utils';
import { Util } from '@/utils';
import PSSystemDBCfgServiceBase from './pssystem-dbcfg-service-base';


/**
 * 系统数据库服务对象
 *
 * @export
 * @class PSSystemDBCfgService
 * @extends {PSSystemDBCfgServiceBase}
 */
export default class PSSystemDBCfgService extends PSSystemDBCfgServiceBase {

    /**
     * Creates an instance of  PSSystemDBCfgService.
     * 
     * @param {*} [opts={}]
     * @memberof  PSSystemDBCfgService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}