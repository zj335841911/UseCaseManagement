import TaskUIServiceBase from './task-ui-service-base';
import {UIActionTool, Util} from "@/utils";
import TaskService from "@service/task/task-service";
import {Subject} from "rxjs";

/**
 * 任务UI服务对象
 *
 * @export
 * @class TaskUIService
 */
export default class TaskUIService extends TaskUIServiceBase {

    /**
     * Creates an instance of  TaskUIService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskUIService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


    /**
     * 工时
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
    public async Task_MWorkHours(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(params,{actioninfo:"当前任务只有%1$s才可以记录工时。"});
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { task: '%task%' });
        Object.assign(params, { id: '%task%' });
        Object.assign(params, { name: '%name%' });
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
        // 直接调实体服务需要转换的数据
        if(context && context.srfsessionid){
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }

        const backend = () => {
            const curService:TaskService =  new TaskService();
            curService.TaskForward(context,data, false).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                const _this: any = actionContext;
                const { data: result } = response;
                let _args: any[] = [];
                if (Object.is(actionContext.$util.typeOf(result), 'array')) {
                    _args = [...result];
                } else if (Object.is(actionContext.$util.typeOf(result), 'object')) {
                    _args = [{...result}];
                } else {
                    _args = [...args];
                }
                if (this.Task_WorkHours && this.Task_WorkHours instanceof Function) {
                    this.Task_WorkHours(_args,context, params, $event, xData,actionContext);
                }
                return response;
            }).catch((response: any) => {
                if (!response || !response.status || !response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: '系统异常！' });
                    return;
                }
                if (response && response.data) {
                    // actionContext.$Notice.error({ title: '错误', desc: response.data.message });
                    const openPopupModal = (view: any, data: any) => {
                        let container: Subject<any> = actionContext.$appmodal.openModal(view, context, data);
                        container.subscribe((result: any) => {
                            if (!result || !Object.is(result.ret, 'OK')) {
                                return;
                            }
                            const _this: any = actionContext;
                            return result.datas;
                        });
                    }
                    const view: any = {
                        viewname: 'task-estimate-look-grid-view9',
                        height: 600,
                        width: 800,
                        title: actionContext.$t('entities.task.views.workhoursview.title'),
                    };
                    openPopupModal(view, data);
                    return;
                }
                if (response.status === 401) {
                    return;
                }
                return response;
            });
        };
        backend();
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
    public async Task_BatchDownload(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {

        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { task: '%task%' });
        Object.assign(params, { id: '%task%' });
        Object.assign(params, { name: '%name%' });
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
        let url = "../ibizutilpms/ztbatchdownload/" + context.srfparentkey+"/"+context.objecttype ;
        window.open(url);
    }

}