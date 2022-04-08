import { Http } from '@/utils';
import { Util } from '@/utils';
import DocServiceBase from './doc-service-base';


/**
 * 文档服务对象
 *
 * @export
 * @class DocService
 * @extends {DocServiceBase}
 */
export default class DocService extends DocServiceBase {

    /**
     * Creates an instance of  DocService.
     * 
     * @param {*} [opts={}]
     * @memberof  DocService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}