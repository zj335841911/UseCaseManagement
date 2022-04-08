import { Http } from '@/utils';
import { Util } from '@/utils';
import SubStoryServiceBase from './sub-story-service-base';


/**
 * 需求服务对象
 *
 * @export
 * @class SubStoryService
 * @extends {SubStoryServiceBase}
 */
export default class SubStoryService extends SubStoryServiceBase {

    /**
     * Creates an instance of  SubStoryService.
     * 
     * @param {*} [opts={}]
     * @memberof  SubStoryService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}