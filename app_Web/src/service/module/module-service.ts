import { Http } from '@/utils';
import { Util } from '@/utils';
import ModuleServiceBase from './module-service-base';


/**
 * 模块服务对象
 *
 * @export
 * @class ModuleService
 * @extends {ModuleServiceBase}
 */
export default class ModuleService extends ModuleServiceBase {

    /**
     * Creates an instance of  ModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  ModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}