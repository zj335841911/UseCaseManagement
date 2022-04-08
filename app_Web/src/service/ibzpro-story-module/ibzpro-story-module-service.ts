import { Http } from '@/utils';
import { Util } from '@/utils';
import IBZProStoryModuleServiceBase from './ibzpro-story-module-service-base';


/**
 * 需求模块服务对象
 *
 * @export
 * @class IBZProStoryModuleService
 * @extends {IBZProStoryModuleServiceBase}
 */
export default class IBZProStoryModuleService extends IBZProStoryModuleServiceBase {

    /**
     * Creates an instance of  IBZProStoryModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZProStoryModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}