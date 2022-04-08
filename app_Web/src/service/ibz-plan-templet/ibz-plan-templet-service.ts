import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzPlanTempletServiceBase from './ibz-plan-templet-service-base';


/**
 * 计划模板服务对象
 *
 * @export
 * @class IbzPlanTempletService
 * @extends {IbzPlanTempletServiceBase}
 */
export default class IbzPlanTempletService extends IbzPlanTempletServiceBase {

    /**
     * Creates an instance of  IbzPlanTempletService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzPlanTempletService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}