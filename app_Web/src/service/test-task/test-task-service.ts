import { Http } from '@/utils';
import { Util } from '@/utils';
import TestTaskServiceBase from './test-task-service-base';


/**
 * 测试版本服务对象
 *
 * @export
 * @class TestTaskService
 * @extends {TestTaskServiceBase}
 */
export default class TestTaskService extends TestTaskServiceBase {

    /**
     * Creates an instance of  TestTaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestTaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}