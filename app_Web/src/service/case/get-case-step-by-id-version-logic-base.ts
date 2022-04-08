import { Verify } from '@/utils/verify/verify';


/**
 * 根据用例标识和版本获取用例步骤
 *
 * @export
 * @class GetCaseStepByIdVersionLogicBase
 */
export default class GetCaseStepByIdVersionLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetCaseStepByIdVersionLogicBase
     */
    private name:string ="GetCaseStepByIdVersion";

    /**
     * 唯一标识
     * 
     * @memberof  GetCaseStepByIdVersionLogicBase
     */
    private id:string = "ab2901762b49410c808fbe779da66f97";

    /**
     * 默认参数名称
     * 
     * @memberof  GetCaseStepByIdVersionLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetCaseStepByIdVersionLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetCaseStepByIdVersionLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetCaseStepByIdVersionLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetCaseStepByIdVersionLogicBase
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
            return this.executeRawsqlcall1(context,params,isloading);   
        }
    }

    /**
    * 获取用例步骤
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsqlcall1(context:any,params:any,isloading:boolean){
        // RAWSQLCALL暂未支持
        console.log("RAWSQLCALL暂未支持");
        return this.paramsMap.get(this.defaultParamName).data;
    }


}