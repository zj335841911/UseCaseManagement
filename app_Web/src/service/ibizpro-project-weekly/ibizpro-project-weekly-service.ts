import { Http } from '@/utils';
import { Util } from '@/utils';
import IbizproProjectWeeklyServiceBase from './ibizpro-project-weekly-service-base';


/**
 * 项目周报服务对象
 *
 * @export
 * @class IbizproProjectWeeklyService
 * @extends {IbizproProjectWeeklyServiceBase}
 */
export default class IbizproProjectWeeklyService extends IbizproProjectWeeklyServiceBase {

    /**
     * Creates an instance of  IbizproProjectWeeklyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbizproProjectWeeklyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}