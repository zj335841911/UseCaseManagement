import { Http } from '@/utils';
import { Util } from '@/utils';
import SysEmployeeServiceBase from './sys-employee-service-base';


/**
 * 人员服务对象
 *
 * @export
 * @class SysEmployeeService
 * @extends {SysEmployeeServiceBase}
 */
export default class SysEmployeeService extends SysEmployeeServiceBase {

    /**
     * Creates an instance of  SysEmployeeService.
     * 
     * @param {*} [opts={}]
     * @memberof  SysEmployeeService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * FetchProjectTeamTaskUserTemp接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SysEmployeeServiceBase
     */
    public async FetchProjectTeamTaskUserTemp(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let result:any = localStorage.getItem(data.srfsessionkey);//进入编辑页面，获取数据行为Get,获取到任务最初团队成员
        let re :any = localStorage.getItem("newTaskTeam"+context.task); //表格编辑项值变化，最新的团队成员
        let allTeamUser :any;
        if(result){
            if (re){
                allTeamUser = JSON.parse(re);
            }
            else {
                allTeamUser = JSON.parse(result);
            }
        }
        let allTeamAccount : string = "";
        for (let i = 0; i < allTeamUser.length; i++) {
            if (i != 0){
                allTeamAccount = allTeamAccount +"," +allTeamUser[i].account;
            }else {
                allTeamAccount = allTeamUser[i].account;
            }
        }
        Object.assign(tempData,{allTeamAccount:allTeamAccount});
        // localStorage.removeItem("newTaskTeam"+context.task);
        let res:any = Http.getInstance().get(`/sysemployees/fetchprojectteamtaskusertemp`,tempData,isloading);
        return res;
    }

}