import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzMyTerritoryServiceBase from './ibz-my-territory-service-base';


/**
 * 我的地盘服务对象
 *
 * @export
 * @class IbzMyTerritoryService
 * @extends {IbzMyTerritoryServiceBase}
 */
export default class IbzMyTerritoryService extends IbzMyTerritoryServiceBase {

    /**
     * Creates an instance of  IbzMyTerritoryService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzMyTerritoryService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}