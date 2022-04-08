import { Environment } from '@/environments/environment';
import { Subject } from 'rxjs';
import BugUIServiceBase from './bug-ui-service-base';
import { UIActionTool, Util } from '@/utils';
import BugService from '@/service/bug/bug-service';
/**
 * BugUI服务对象
 *
 * @export
 * @class BugUIService
 */
export default class BugUIService extends BugUIServiceBase {

    /**
     * Creates an instance of  BugUIService.
     * 
     * @param {*} [opts={}]
     * @memberof  BugUIService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 提需求
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
    public async Bug_toStory(args: any[], context: any = {}, params: any = {}, $event?: any, xData?: any, actionContext?: any, srfParentDeName?: string) {
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { bug: '%bug%' });
        Object.assign(params, { id: '%bug%' });
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
        let response: any = await this.dataService.Get(context, data, false);
        if (!response || response.status != 200) {
            return;
        }
        let parentObj: any = { srfparentdename: srfParentDeName ? srfParentDeName : null, srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null };
        Object.assign(data, {
            srfmajortext: response.data.title,
            product: response.data.product,
            productname: response.data.productname,
            module: response.data.module,
            steps: response.data.steps,
            branch: response.data.branch,
            branchname: response.data.branchname,
            assignedto: response.data.assignedto,
            mailto: response.data.mailto,
            modulename: response.data.modulename,
            ...parentObj
        });

        Object.assign(context, parentObj);
        let deResParameters: any[] = [];
        if (context.product && true) {
            deResParameters = [
                { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
        ];
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                const _this: any = actionContext;
                if (window.opener) {
                    window.opener.postMessage({ status: 'OK', identification: 'WF' }, Environment.uniteAddress);
                    window.close();
                }
                return result.datas;
            });
        }
        const view: any = {
            viewname: 'storyto-story-edit-view',
            height: 0,
            width: 0,
            title: actionContext.$t('entities.story.views.tostoryeditview.title'),
            placement: 'DRAWER_RIGHT',
        };
        openDrawer(view, data);
    }

    /**
     * 提Bug
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
    public async Bug_createBugByBuild(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(context,{PROJECT:"%project%",PRODUCT:"%product%"});
        Object.assign(params,{product:"%product%",project:"%project%"});
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
        if(_this.context){
            parentContext = _this.context;
            if(parentContext.product != null) {
                parentContext.product = parseInt(parentContext.product);
            }
            if(parentContext.project != null) {
                parentContext.project = parseInt(parentContext.project);
            }
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
            if(parentViewParam.product != null) {
                parentViewParam.product = parseInt(parentViewParam.product);
            }
            if(parentViewParam.project != null) {
                parentViewParam.project = parseInt(parentViewParam.project);
            }
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
            const curService: BugService =  new BugService();
            curService.Create(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '提Bug成功！' });

                const _this: any = actionContext;
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
                return response;
            }).catch((response: any) => {
                if (!response || !response.status || !response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: '系统异常！' });
                    return;
                }
                if (response.status === 401) {
                    return;
                }
                return response;
            });
        };
        const view: any = {
            viewname: 'bug-edit-view-4791',
            title: actionContext.$t('entities.bug.views.editview_4791.title'),
            height: 0,
            width: 0,
            placement: 'DRAWER_RIGHT'
        };
        const appdrawer = actionContext.$appdrawer.openDrawer(view,context,data);
        appdrawer.subscribe((result: any) => {
            if (result && Object.is(result.ret, 'OK')) {
                Object.assign(data, { srfactionparam: result.datas });
                backend();
            }
        });
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
    public async Bug_BatchDownload(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {

        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { bug: '%bug%' });
        Object.assign(params, { id: '%bug%' });
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
        let url = "../ibizutilpms/ztbatchdownload/" + context.srfparentkey+"/"+context.objecttype ;
        window.open(url);
    }
}