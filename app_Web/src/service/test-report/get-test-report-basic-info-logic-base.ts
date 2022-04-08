import { Verify } from '@/utils/verify/verify';


/**
 * 根据测试报告获取基本信息
 *
 * @export
 * @class GetTestReportBasicInfoLogicBase
 */
export default class GetTestReportBasicInfoLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetTestReportBasicInfoLogicBase
     */
    private name:string ="GetTestReportBasicInfo";

    /**
     * 唯一标识
     * 
     * @memberof  GetTestReportBasicInfoLogicBase
     */
    private id:string = "B5342C46-7346-45E1-8F04-7D25165BC7A2";

    /**
     * 默认参数名称
     * 
     * @memberof  GetTestReportBasicInfoLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetTestReportBasicInfoLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetTestReportBasicInfoLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetTestReportBasicInfoLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetTestReportBasicInfoLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('Default',opts);
        this.paramsMap.set('StoryCount',{});
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
        return this.paramsMap.get(this.defaultParamName).data;
    }


}