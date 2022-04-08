import { Http } from '@/utils';
import { Util } from '@/utils';
import IBIZProKeywordServiceBase from './ibizpro-keyword-service-base';


/**
 * 关键字服务对象
 *
 * @export
 * @class IBIZProKeywordService
 * @extends {IBIZProKeywordServiceBase}
 */
export default class IBIZProKeywordService extends IBIZProKeywordServiceBase {

    /**
     * Creates an instance of  IBIZProKeywordService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBIZProKeywordService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}