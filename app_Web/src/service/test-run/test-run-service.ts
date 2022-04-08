import { Http } from '@/utils';
import { Util } from '@/utils';
import TestRunServiceBase from './test-run-service-base';


/**
 * 测试运行服务对象
 *
 * @export
 * @class TestRunService
 * @extends {TestRunServiceBase}
 */
export default class TestRunService extends TestRunServiceBase {

    /**
     * Creates an instance of  TestRunService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestRunService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}