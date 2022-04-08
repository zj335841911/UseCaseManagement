import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzLibServiceBase from './ibz-lib-service-base';


/**
 * 用例库服务对象
 *
 * @export
 * @class IbzLibService
 * @extends {IbzLibServiceBase}
 */
export default class IbzLibService extends IbzLibServiceBase {

    /**
     * Creates an instance of  IbzLibService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzLibService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}