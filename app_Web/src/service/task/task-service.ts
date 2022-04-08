import { Http,Util } from '@/utils';
import TaskServiceBase from './task-service-base';
import GetNewTaskTeamUserLogic from "@service/task/get-new-task-team-user-logic";


/**
 * 任务服务对象
 *
 * @export
 * @class TaskService
 * @extends {TaskServiceBase}
 */
export default class TaskService extends TaskServiceBase {

    /**
     * Creates an instance of  TaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * CalcTime接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async CalcTime(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        data.totaltime = data.consumed + data.currentconsumed;
        data.mytotaltime = (data.myconsumed != null ? data.myconsumed : data.consumed) + data.currentconsumed;
        return {
            status: 200,
            data
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.task){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/${context.task}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.project && context.task){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/tasks/${context.task}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        if(context.story && context.task){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/tasks/${context.task}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

            return res;
        }
        let res:any = await Http.getInstance().get(`/tasks/${context.task}`,isloading);
        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskestimates',JSON.stringify(res.data.ibztaskestimates?res.data.ibztaskestimates:[]));
        this.tempStorage.setItem(context.srfsessionkey+'_ibztaskteams',JSON.stringify(res.data.ibztaskteams?res.data.ibztaskteams:[]));
        this.tempStorage.setItem(context.srfsessionkey+'_subtasks',JSON.stringify(res.data.subtasks?res.data.subtasks:[]));
        this.tempStorage.setItem(context.srfsessionkey+'_taskestimates',JSON.stringify(res.data.taskestimates?res.data.taskestimates:[]));
        this.tempStorage.setItem(context.srfsessionkey+'_taskteams',JSON.stringify(res.data.taskteams?res.data.taskteams:[]));

        res.data.srfsessionkey = context.srfsessionkey+'_ibztaskteams';
        return res;
    }

    /**
     * FetchMyCompleteTaskZS接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchMyCompleteTaskZS(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchmycompletetaskzs`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/fetchmycompletetaskzs`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/fetchmycompletetaskzs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        if(!tempData.todaytask) {
            tempData.todaytask = '0';
        }
        let res:any = Http.getInstance().get(`/tasks/fetchmycompletetaskzs`,tempData,isloading);
        return res;
    }


    /**
     * FetchThisWeekCompleteTaskZS接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async FetchThisWeekCompleteTaskZS(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/tasks/fetchthisweekcompletetaskzs`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/tasks/fetchthisweekcompletetaskzs`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/tasks/fetchthisweekcompletetaskzs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        if(!tempData.thisweektask) {
            tempData.thisweektask = '0';
        }
        let res:any = Http.getInstance().get(`/tasks/fetchthisweekcompletetaskzs`,tempData,isloading);
        return res;
    }
}