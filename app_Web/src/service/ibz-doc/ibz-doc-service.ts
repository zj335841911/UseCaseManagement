import { Http } from '@/utils';
import { Util } from '@/utils';
import IBzDocServiceBase from './ibz-doc-service-base';


/**
 * 文档服务对象
 *
 * @export
 * @class IBzDocService
 * @extends {IBzDocServiceBase}
 */
export default class IBzDocService extends IBzDocServiceBase {

    /**
     * Creates an instance of  IBzDocService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBzDocService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}