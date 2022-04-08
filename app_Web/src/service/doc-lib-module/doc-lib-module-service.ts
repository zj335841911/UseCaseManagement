import { Http } from '@/utils';
import { Util } from '@/utils';
import DocLibModuleServiceBase from './doc-lib-module-service-base';


/**
 * 文档库分类服务对象
 *
 * @export
 * @class DocLibModuleService
 * @extends {DocLibModuleServiceBase}
 */
export default class DocLibModuleService extends DocLibModuleServiceBase {

    /**
     * Creates an instance of  DocLibModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  DocLibModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}