import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzAgentServiceBase from './ibz-agent-service-base';


/**
 * 代理服务对象
 *
 * @export
 * @class IbzAgentService
 * @extends {IbzAgentServiceBase}
 */
export default class IbzAgentService extends IbzAgentServiceBase {

    /**
     * Creates an instance of  IbzAgentService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzAgentService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}