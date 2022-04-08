import { Http,Util } from '@/utils';
import ProjectTeamServiceBase from './project-team-service-base';


/**
 * 项目团队服务对象
 *
 * @export
 * @class ProjectTeamService
 * @extends {ProjectTeamServiceBase}
 */
export default class ProjectTeamService extends ProjectTeamServiceBase {

    /**
     * Creates an instance of  ProjectTeamService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTeamService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * GetUserRole接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async GetUserRole(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectteam){
            let masterData:any = {};
            Object.assign(data,masterData);
            context.projectteam = 0;
            data.id = 0
            let res:any = await Http.getInstance().put(`/projects/${context.project}/projectteams/${context.projectteam}/getuserrole`,data,isloading);

            return res;
        }
        context.projectteam = 0;
        data.id = 0;
        let res:any = Http.getInstance().put(`/projectteams/${context.projectteam}/getuserrole`,data,isloading);
        return res;
    }

    /**
     * FetchRowEditDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectTeamServiceBase
     */
    public async FetchRowEditDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:Promise<any> = Http.getInstance().get(`/projects/${context.project}/projectteams/fetchroweditdefault`,tempData,isloading);
            res.then((response) => {
                if (response.data instanceof Array) {
                    response.data.forEach((item:any) =>{
                        if(!item.id) {
                            item.srfuf = '0';
                        }
                    });
                }
            }).catch(response => {

            });
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:Promise<any> = Http.getInstance().get(`/projectteams/fetchroweditdefault`,tempData,isloading);
        res.then((response) => {
            if (response.data instanceof Array) {
                response.data.forEach((item:any) =>{
                    if(!item.id) {
                        item.srfuf = '0';
                    }
                });
            }
        }).catch(response => {

        });
        return res;
    }


}