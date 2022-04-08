import { Http } from '@/utils';
import { Util } from '@/utils';
import IbzFavoritesServiceBase from './ibz-favorites-service-base';


/**
 * 收藏服务对象
 *
 * @export
 * @class IbzFavoritesService
 * @extends {IbzFavoritesServiceBase}
 */
export default class IbzFavoritesService extends IbzFavoritesServiceBase {

    /**
     * Creates an instance of  IbzFavoritesService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzFavoritesService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}