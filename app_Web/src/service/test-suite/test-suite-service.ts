import { Http } from '@/utils';
import { Util } from '@/utils';
import TestSuiteServiceBase from './test-suite-service-base';


/**
 * 测试套件服务对象
 *
 * @export
 * @class TestSuiteService
 * @extends {TestSuiteServiceBase}
 */
export default class TestSuiteService extends TestSuiteServiceBase {

    /**
     * Creates an instance of  TestSuiteService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestSuiteService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}