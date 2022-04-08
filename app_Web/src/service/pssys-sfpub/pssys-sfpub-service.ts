import { Http } from '@/utils';
import { Util } from '@/utils';
import PSSysSFPubServiceBase from './pssys-sfpub-service-base';


/**
 * 后台服务架构服务对象
 *
 * @export
 * @class PSSysSFPubService
 * @extends {PSSysSFPubServiceBase}
 */
export default class PSSysSFPubService extends PSSysSFPubServiceBase {

    /**
     * Creates an instance of  PSSysSFPubService.
     * 
     * @param {*} [opts={}]
     * @memberof  PSSysSFPubService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}