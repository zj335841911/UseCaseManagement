import { Http } from '@/utils';
import { Util } from '@/utils';
import ProjectProductServiceBase from './project-product-service-base';


/**
 * 项目产品服务对象
 *
 * @export
 * @class ProjectProductService
 * @extends {ProjectProductServiceBase}
 */
export default class ProjectProductService extends ProjectProductServiceBase {

    /**
     * Creates an instance of  ProjectProductService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectProductService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}