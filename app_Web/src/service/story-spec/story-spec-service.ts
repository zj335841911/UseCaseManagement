import { Http } from '@/utils';
import { Util } from '@/utils';
import StorySpecServiceBase from './story-spec-service-base';


/**
 * 需求描述服务对象
 *
 * @export
 * @class StorySpecService
 * @extends {StorySpecServiceBase}
 */
export default class StorySpecService extends StorySpecServiceBase {

    /**
     * Creates an instance of  StorySpecService.
     * 
     * @param {*} [opts={}]
     * @memberof  StorySpecService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}