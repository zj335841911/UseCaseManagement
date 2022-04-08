import { Http } from '@/utils';
import { Util } from '@/utils';
import ProjectTaskQCntLogicBase from './project-task-qcnt-logic-base';

/**
 * 项目任务快速分组计数器
 *
 * @export
 * @class ProjectTaskQCntLogic
 */
export default class ProjectTaskQCntLogic extends ProjectTaskQCntLogicBase{

    /**
     * Creates an instance of  ProjectTaskQCntLogic
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskQCntLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}