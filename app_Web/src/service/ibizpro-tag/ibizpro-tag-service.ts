import { Http } from '@/utils';
import { Util } from '@/utils';
import IBIZProTagServiceBase from './ibizpro-tag-service-base';


/**
 * 标签服务对象
 *
 * @export
 * @class IBIZProTagService
 * @extends {IBIZProTagServiceBase}
 */
export default class IBIZProTagService extends IBIZProTagServiceBase {

    /**
     * Creates an instance of  IBIZProTagService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBIZProTagService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}