import StoryUIServiceBase from './story-ui-service-base';
import {UIActionTool, Util} from "@/utils";

/**
 * 需求UI服务对象
 *
 * @export
 * @class StoryUIService
 */
export default class StoryUIService extends StoryUIServiceBase {

    /**
     * Creates an instance of  StoryUIService.
     * 
     * @param {*} [opts={}]
     * @memberof  StoryUIService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 下载
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Story_BatchDownload(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {

        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { story: '%story%' });
        Object.assign(params, { id: '%story%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        Object.assign(data,parentObj);
        Object.assign(context,parentObj);
        // 自定义实体界面行为
        // actionContext.$Notice.warning({ title: '错误', desc: '下载 未实现' });
        let url = "../ibizutilpms/ztbatchdownload/" + context.srfparentkey ;
        window.open(url);
    }

}