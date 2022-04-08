import { Http } from '@/utils';
import { Util } from '@/utils';
import DocLibServiceBase from './doc-lib-service-base';


/**
 * 文档库服务对象
 *
 * @export
 * @class DocLibService
 * @extends {DocLibServiceBase}
 */
export default class DocLibService extends DocLibServiceBase {

    /**
     * Creates an instance of  DocLibService.
     * 
     * @param {*} [opts={}]
     * @memberof  DocLibService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}