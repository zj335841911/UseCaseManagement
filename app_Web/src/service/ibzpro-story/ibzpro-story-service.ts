import { Http } from '@/utils';
import { Util } from '@/utils';
import IBZProStoryServiceBase from './ibzpro-story-service-base';


/**
 * 需求服务对象
 *
 * @export
 * @class IBZProStoryService
 * @extends {IBZProStoryServiceBase}
 */
export default class IBZProStoryService extends IBZProStoryServiceBase {

    /**
     * Creates an instance of  IBZProStoryService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZProStoryService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}