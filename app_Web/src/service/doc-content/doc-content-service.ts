import { Http } from '@/utils';
import { Util } from '@/utils';
import DocContentServiceBase from './doc-content-service-base';


/**
 * 文档内容服务对象
 *
 * @export
 * @class DocContentService
 * @extends {DocContentServiceBase}
 */
export default class DocContentService extends DocContentServiceBase {

    /**
     * Creates an instance of  DocContentService.
     * 
     * @param {*} [opts={}]
     * @memberof  DocContentService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}