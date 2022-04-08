import { Http } from '@/utils';
import { Util } from '@/utils';
import GetNewTaskTeamUserLogicBase from './get-new-task-team-user-logic-base';

/**
 * 获取最新团队成员
 *
 * @export
 * @class GetNewTaskTeamUserLogic
 */
export default class GetNewTaskTeamUserLogic extends GetNewTaskTeamUserLogicBase{

    /**
     * Creates an instance of  GetNewTaskTeamUserLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetNewTaskTeamUserLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}