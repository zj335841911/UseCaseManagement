import { Http } from '@/utils';
import { Util } from '@/utils';
import ReleaseServiceBase from './release-service-base';


/**
 * 发布服务对象
 *
 * @export
 * @class ReleaseService
 * @extends {ReleaseServiceBase}
 */
export default class ReleaseService extends ReleaseServiceBase {

    /**
     * Creates an instance of  ReleaseService.
     * 
     * @param {*} [opts={}]
     * @memberof  ReleaseService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}