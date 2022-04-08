import { Http } from '@/utils';
import { Util } from '@/utils';
import BuildServiceBase from './build-service-base';


/**
 * 版本服务对象
 *
 * @export
 * @class BuildService
 * @extends {BuildServiceBase}
 */
export default class BuildService extends BuildServiceBase {

    /**
     * Creates an instance of  BuildService.
     * 
     * @param {*} [opts={}]
     * @memberof  BuildService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}