import { Http } from '@/utils';
import { Util } from '@/utils';
import ProjectStatsServiceBase from './project-stats-service-base';


/**
 * 项目统计服务对象
 *
 * @export
 * @class ProjectStatsService
 * @extends {ProjectStatsServiceBase}
 */
export default class ProjectStatsService extends ProjectStatsServiceBase {

    /**
     * Creates an instance of  ProjectStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}