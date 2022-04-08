import { Http } from '@/utils';
import { Util } from '@/utils';
import TestModuleServiceBase from './test-module-service-base';


/**
 * 测试模块服务对象
 *
 * @export
 * @class TestModuleService
 * @extends {TestModuleServiceBase}
 */
export default class TestModuleService extends TestModuleServiceBase {

    /**
     * Creates an instance of  TestModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}