import TaskService from '@/service/task/task-service';
import { Verify } from '@/utils/verify/verify';


/**
 * 获取最新团队成员
 *
 * @export
 * @class GetNewTaskTeamUserLogicBase
 */
export default class GetNewTaskTeamUserLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    private name:string ="GetNewTaskTeamUser";

    /**
     * 唯一标识
     * 
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    private id:string = "104D982C-078C-447B-B569-60E18668CB9A";

    /**
     * 默认参数名称
     * 
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetNewTaskTeamUserLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetNewTaskTeamUserLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('Default',opts);
    }


    /**
     * 计算0节点结果
     * 
     * @param params 传入参数
     */
    public compute0Cond(params:any):boolean{
        return true;
    }

    /**
     * 执行逻辑
     * 
     * @param context 应用上下文
     * @param params 传入参数
     */
    public onExecute(context:any,params:any,isloading:boolean){
        return this.executeBegin(context,params,isloading);
    }


    /**
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute0Cond(params)){
            return this.executeDeaction1(context,params,isloading);   
        }
    }

    /**
    * 获取
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeDeaction1(context:any,params:any,isloading:boolean){
        // 行为处理节点
        let result: any;
        let actionParam:any = this.paramsMap.get('Default');
        const targetService:TaskService = new TaskService();
        if (targetService['Get'] && targetService['Get'] instanceof Function) {
            result = await targetService['Get'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
        }
    }


}