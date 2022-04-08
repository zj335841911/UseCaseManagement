import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzLibModuleServiceBase from './ibz-lib-module-service-base';


/**
 * 用例库模块服务对象
 *
 * @export
 * @class IbzLibModuleService
 * @extends {IbzLibModuleServiceBase}
 */
export default class IbzLibModuleService extends IbzLibModuleServiceBase {

    /**
     * Creates an instance of  IbzLibModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzLibModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}