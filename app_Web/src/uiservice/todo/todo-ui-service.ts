import { Environment } from '@/environments/environment';
import TodoUIServiceBase from './todo-ui-service-base';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
/**
 * 待办事宜表UI服务对象
 *
 * @export
 * @class TodoUIService
 */
export default class TodoUIService extends TodoUIServiceBase {

    /**
     * Creates an instance of  TodoUIService.
     * 
     * @param {*} [opts={}]
     * @memberof  TodoUIService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 转Bug
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
    public async Todo_toBug(args: any[], context: any = {}, params: any = {}, $event?: any, xData?: any, actionContext?: any, srfParentDeName?: string) {

        let data: any = {};
        let parentContext: any = {};
        let parentViewParam: any = {};
        const _this: any = actionContext;
        Object.assign(context, { NAME: "%name%", ASSIGNEDTO: "%assignedto%", DESC: "%desc%" });
        Object.assign(params, { assignedto: "%assignedto%", desc: "%desc%", name: "%name%" });
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { todo: '%todo%' });
        Object.assign(params, { id: '%todo%' });
        Object.assign(params, { name: '%name%' });
        if (_this.context) {
            parentContext = _this.context;
        }
        if (_this.viewparams) {
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget, _args, parentContext, parentViewParam, context);
        data = UIActionTool.handleActionParam(actionTarget, _args, parentContext, parentViewParam, params);
        context = Object.assign({}, actionContext.context, context);
        let response: any = await this.dataService.Get(context, data, false);
        if (!response || response.status != 200) {
            return;
        }
        let parentObj: any = { srfparentdename: srfParentDeName ? srfParentDeName : null, srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null };
        Object.assign(data, {
            name: response.data.name,
            desc: response.data.desc,
            assignedto: response.data.assignedto,
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
            { pathName: 'bugs', parameterName: 'bug' },
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
            viewname: 'bug-todo-edit-view',
            height: 0,
            width: 0,
            title: actionContext.$t('entities.bug.views.todoeditview.title'),
            placement: 'DRAWER_RIGHT',
        };
        openDrawer(view, data);
    }

    /**
     * 转任务
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
    public async Todo_toTask(args: any[], context: any = {}, params: any = {}, $event?: any, xData?: any, actionContext?: any, srfParentDeName?: string) {

        let data: any = {};
        let parentContext: any = {};
        let parentViewParam: any = {};
        const _this: any = actionContext;
        Object.assign(context, { NAME: "%name%", ASSIGNEDTO: "%assignedto%", DESC: "%desc%" });
        Object.assign(params, { assignedto: "%assignedto%", desc: "%desc%", name: "%name%" });
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { todo: '%todo%' });
        Object.assign(params, { id: '%todo%' });
        Object.assign(params, { name: '%name%' });
        if (_this.context) {
            parentContext = _this.context;
        }
        if (_this.viewparams) {
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget, _args, parentContext, parentViewParam, context);
        data = UIActionTool.handleActionParam(actionTarget, _args, parentContext, parentViewParam, params);
        context = Object.assign({}, actionContext.context, context);
        let response: any = await this.dataService.Get(context, data, false);
        if (!response || response.status != 200) {
            return;
        }
        let parentObj: any = { srfparentdename: srfParentDeName ? srfParentDeName : null, srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null };
        Object.assign(data, {
            name: response.data.name,
            desc: response.data.desc,
            assignedto: response.data.assignedto,
            ...parentObj
        });
        Object.assign(context, parentObj);
        let deResParameters: any[] = [];
        if (context.story && true) {
            deResParameters = [
                { pathName: 'stories', parameterName: 'story' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
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
            viewname: 'task-todo-edit-view',
            height: 0,
            width: 0,
            title: actionContext.$t('entities.task.views.todoeditview.title'),
            placement: 'DRAWER_RIGHT',
        };
        openDrawer(view, data);
    }

}