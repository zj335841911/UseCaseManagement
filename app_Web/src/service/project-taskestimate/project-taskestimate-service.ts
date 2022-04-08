import { Http } from '@/utils';
import { Util } from '@/utils';
import ProjectTaskestimateServiceBase from './project-taskestimate-service-base';


/**
 * 项目工时统计服务对象
 *
 * @export
 * @class ProjectTaskestimateService
 * @extends {ProjectTaskestimateServiceBase}
 */
export default class ProjectTaskestimateService extends ProjectTaskestimateServiceBase {

    /**
     * Creates an instance of  ProjectTaskestimateService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskestimateService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}