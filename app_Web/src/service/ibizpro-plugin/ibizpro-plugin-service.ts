import { Http } from '@/utils';
import { Util } from '@/utils';
import IBIZProPluginServiceBase from './ibizpro-plugin-service-base';


/**
 * 系统插件服务对象
 *
 * @export
 * @class IBIZProPluginService
 * @extends {IBIZProPluginServiceBase}
 */
export default class IBIZProPluginService extends IBIZProPluginServiceBase {

    /**
     * Creates an instance of  IBIZProPluginService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBIZProPluginService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}