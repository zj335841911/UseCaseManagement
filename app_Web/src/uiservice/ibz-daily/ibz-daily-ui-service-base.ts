import { Environment } from '@/environments/environment';
import { UIActionTool,Util } from '@/utils';
import UIService from '../ui-service';
import { Subject } from 'rxjs';
import IbzDailyService from '@/service/ibz-daily/ibz-daily-service';
import IbzDailyAuthService from '@/authservice/ibz-daily/ibz-daily-auth-service';

/**
 * 日报UI服务对象基类
 *
 * @export
 * @class IbzDailyUIServiceBase
 */
export default class IbzDailyUIServiceBase extends UIService {

    /**
     * 是否支持工作流
     * 
     * @memberof  IbzDailyUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 是否支持实体主状态
     * 
     * @memberof  IbzDailyUIServiceBase
     */
    public isEnableDEMainState:boolean = true;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  IbzDailyUIServiceBase
     */
    public dataService:IbzDailyService = new IbzDailyService();

    /**
     * 所有关联视图
     * 
     * @memberof  IbzDailyUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  IbzDailyUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  IbzDailyUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  IbzDailyUIServiceBase
     */  
    public mainStateFields:Array<any> = ['issubmit'];

    /**
     * 主状态集合Map
     * 
     * @memberof  IbzDailyUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  IbzDailyUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  IbzDailyUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzDailyUIServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
        this.authService = new IbzDailyAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  IbzDailyUIServiceBase
     */  
    public initViewMap(){
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  IbzDailyUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('1','1');
        this.allDeMainStateMap.set('0','0');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  IbzDailyUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__DAILY_SUBMIT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{}));
    }

    /**
     * 生成日报
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
    public async IbzDaily_CreateUserDaily(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(context,{IBZDAILY:"0"});
        Object.assign(params,{ibzdaily:"0"});
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        if(Object.is(actionTarget,"MULTIKEY")){
            let tempDataArray:Array<any> = [];
            if((_args.length >1) && (Object.keys(data).length >0)){
                for(let i =0;i<_args.length;i++){
                    let tempObject:any = {};
                    Object.keys(data).forEach((key:string) =>{
                        Object.assign(tempObject,{[key]:data[key].split(',')[i]});
                    })
                    tempDataArray.push(tempObject);
                }
            }else{
                tempDataArray.push(data);
            }
            data = tempDataArray;
        }
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        if(!Object.is(actionTarget,"MULTIKEY")){
            Object.assign(data,parentObj);
        }
        Object.assign(context,parentObj);
        // 直接调实体服务需要转换的数据
        if(context && context.srfsessionid){
          context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        
        const backend = () => {
            const curService:IbzDailyService =  new IbzDailyService();
            curService.CreateUserDaily(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '生成日报成功！' });
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
                if (response && response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: response.data.message });
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
     * 提交
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
    public async IbzDaily_submit(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(params,{mailto:"%MAILTO%",files:"%files%",tomorrowplanstask:"%tomorrowplanstask%",worktoday:"%worktoday%",todaytask:"%todaytask%",planstomorrow:"%planstomorrow%",comment:"%comment%",reportto:"%REPORTTO%"});
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { ibzdaily: '%ibzdaily%' });
        Object.assign(params, { ibzdailyid: '%ibzdaily%' });
        Object.assign(params, { ibzdailyname: '%ibzdailyname%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        if(Object.is(actionTarget,"MULTIKEY")){
            let tempDataArray:Array<any> = [];
            if((_args.length >1) && (Object.keys(data).length >0)){
                for(let i =0;i<_args.length;i++){
                    let tempObject:any = {};
                    Object.keys(data).forEach((key:string) =>{
                        Object.assign(tempObject,{[key]:data[key].split(',')[i]});
                    })
                    tempDataArray.push(tempObject);
                }
            }else{
                tempDataArray.push(data);
            }
            data = tempDataArray;
        }
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        if(!Object.is(actionTarget,"MULTIKEY")){
            Object.assign(data,parentObj);
        }
        Object.assign(context,parentObj);
        // 直接调实体服务需要转换的数据
        if(context && context.srfsessionid){
          context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        
        const backend = () => {
            const curService:IbzDailyService =  new IbzDailyService();
            curService.Submit(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '提交成功！' });
                const _this: any = actionContext;
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
                actionContext.closeView(null);
                return response;
            }).catch((response: any) => {
                if (!response || !response.status || !response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: '系统异常！' });
                    return;
                }
                if (response && response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: response.data.message });
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
     * 修改
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
    public async IbzDaily_Edit(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(context,{DATE:"%date%"});
        Object.assign(params,{date:"%date%"});
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { ibzdaily: '%ibzdaily%' });
        Object.assign(params, { ibzdailyid: '%ibzdaily%' });
        Object.assign(params, { ibzdailyname: '%ibzdailyname%' });
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
        let deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzdailies', parameterName: 'ibzdaily' },
            { pathName: 'maineditview', parameterName: 'maineditview' },
        ];
        const openIndexViewTab = (data: any) => {
            const routePath = actionContext.$viewTool.buildUpRoutePath(actionContext.$route, context, deResParameters, parameters, _args, data);
            actionContext.$router.push(routePath);
            return null;
        }
        openIndexViewTab(data);
    }

    /**
     * 已读
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
    public async IbzDaily_HaveRead(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { ibzdaily: '%ibzdaily%' });
        Object.assign(params, { ibzdailyid: '%ibzdaily%' });
        Object.assign(params, { ibzdailyname: '%ibzdailyname%' });
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
        let deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzdailies', parameterName: 'ibzdaily' },
        ];
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'ibz-daily-mymain-edit-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.ibzdaily.views.mymaineditview.title'),
                placement: 'DRAWER_TOP',
            };
            openDrawer(view, data);
    }

    /**
     * 项目日报查看详情
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
    public async IbzDaily_ProjectDaily(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { ibzdaily: '%ibzdaily%' });
        Object.assign(params, { ibzdailyid: '%ibzdaily%' });
        Object.assign(params, { ibzdailyname: '%ibzdailyname%' });
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
        let deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzdailies', parameterName: 'ibzdaily' },
        ];
            const openDrawer = (view: any, data: any) => {
                let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context,data);
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    const _this: any = actionContext;
                    return result.datas;
                });
            }
            const view: any = {
                viewname: 'ibz-daily-daily-info-edit-view', 
                height: 0, 
                width: 0,  
                title: actionContext.$t('entities.ibzdaily.views.dailyinfoeditview.title'),
                placement: 'DRAWER_TOP',
            };
            openDrawer(view, data);
    }

    /**
     * 修改
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
    public async IbzDaily_EditCz(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { ibzdaily: '%ibzdaily%' });
        Object.assign(params, { ibzdailyid: '%ibzdaily%' });
        Object.assign(params, { ibzdailyname: '%ibzdailyname%' });
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
        let deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzdailies', parameterName: 'ibzdaily' },
            { pathName: 'maineditview', parameterName: 'maineditview' },
        ];
        const openIndexViewTab = (data: any) => {
            const routePath = actionContext.$viewTool.buildUpRoutePath(actionContext.$route, context, deResParameters, parameters, _args, data);
            actionContext.$router.push(routePath);
            return null;
        }
        openIndexViewTab(data);
    }

    /**
     * 新建
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
    public async IbzDaily_create(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
    
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        Object.assign(context,{DATE:"%date% "});
        Object.assign(params,{date:"%date%"});
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
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
        let deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzdailies', parameterName: 'ibzdaily' },
            { pathName: 'dailyeditview', parameterName: 'dailyeditview' },
        ];
        const openIndexViewTab = (data: any) => {
            const routePath = actionContext.$viewTool.buildUpRoutePath(actionContext.$route, context, deResParameters, parameters, _args, data);
            actionContext.$router.push(routePath);
            return null;
        }
        openIndexViewTab(data);
    }

    /**
     * 提交
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
    public async IbzDaily_submitCz(args: any[],context:any = {}, params:any = {}, $event?: any, xData?: any,actionContext?: any,srfParentDeName?:string){
        let confirmResult:boolean = await new Promise((resolve: any, reject: any) => {
          actionContext.$Modal.confirm({
              title: '警告',
              content: '确认要马上提交吗？',
              onOk: () => {resolve(true);},
              onCancel: () => {resolve(false);}
          });
        });
        if(!confirmResult){
            return;
        }
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { ibzdaily: '%ibzdaily%' });
        Object.assign(params, { ibzdailyid: '%ibzdaily%' });
        Object.assign(params, { ibzdailyname: '%ibzdailyname%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        if(Object.is(actionTarget,"MULTIKEY")){
            let tempDataArray:Array<any> = [];
            if((_args.length >1) && (Object.keys(data).length >0)){
                for(let i =0;i<_args.length;i++){
                    let tempObject:any = {};
                    Object.keys(data).forEach((key:string) =>{
                        Object.assign(tempObject,{[key]:data[key].split(',')[i]});
                    })
                    tempDataArray.push(tempObject);
                }
            }else{
                tempDataArray.push(data);
            }
            data = tempDataArray;
        }
        context = Object.assign({},actionContext.context,context);
        let parentObj:any = {srfparentdename:srfParentDeName?srfParentDeName:null,srfparentkey:srfParentDeName?context[srfParentDeName.toLowerCase()]:null};
        if(!Object.is(actionTarget,"MULTIKEY")){
            Object.assign(data,parentObj);
        }
        Object.assign(context,parentObj);
        // 直接调实体服务需要转换的数据
        if(context && context.srfsessionid){
          context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        
        const backend = () => {
            const curService:IbzDailyService =  new IbzDailyService();
            curService.Submit(context,data, true).then((response: any) => {
                if (!response || response.status !== 200) {
                    actionContext.$Notice.error({ title: '错误', desc: response.message });
                    return;
                }
                actionContext.$Notice.success({ title: '成功', desc: '提交成功！' });
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
                if (response && response.data) {
                    actionContext.$Notice.error({ title: '错误', desc: response.data.message });
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
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  IbzDailyUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({ibzdaily:srfkey});
        const curData:any = result.data;
        //判断当前数据模式,默认为true，todo
        const iRealDEModel:boolean = true;

        let bDataInWF:boolean = false;
		let bWFMode:any = false;
		// 计算数据模式
		if (this.isEnableWorkflow) {
			bDataInWF = await this.dataService.testDataInWF({stateValue:this.stateValue,stateField:this.stateField},curData);
			if (bDataInWF) {
				bDataInWF = true;
				bWFMode = await this.dataService.testUserExistWorklist(null,curData);
			}
        }
        let strPDTViewParam:string = await this.getDESDDEViewPDTParam(curData, bDataInWF, bWFMode);
        //若不是当前数据模式，处理strPDTViewParam，todo

        //查找视图

        //返回视图
        return this.allViewMap.get(strPDTViewParam);
    }

    /**
	 * 获取实际的数据类型
     * 
     * @memberof  IbzDailyUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  IbzDailyUIServiceBase
     */
    public async getDESDDEViewPDTParam(curData:any, bDataInWF:boolean, bWFMode:boolean){
        let strPDTParam:string = '';
		if (bDataInWF) {
			// 判断数据是否在流程中
        }
        //多表单，todo
        const multiFormDEField:string|null =null;

        if (multiFormDEField) {
			const objFormValue:string = curData[multiFormDEField];
			if(!Environment.isAppMode){
				return 'MOBEDITVIEW:'+objFormValue;
			}
			return 'EDITVIEW:'+objFormValue;
        }
        const stateTag = this.getDEMainStateTag(curData);
		if(!Environment.isAppMode){
            if (stateTag) {
                return `MOBEDITVIEW:MSTAG:${stateTag}`;
            }
			return 'MOBEDITVIEW:';
        }
        if(stateTag){
            return `EDITVIEW:MSTAG:${stateTag}`;
        }
		return 'EDITVIEW:';
    }

    /**
     * 获取数据对象的主状态标识
     * 
     * @param curData 当前数据
     * @memberof  IbzDailyUIServiceBase
     */  
    public getDEMainStateTag(curData:any){
        if(this.mainStateFields.length === 0) return null;

        this.mainStateFields.forEach((singleMainField:any) =>{
            if (!(singleMainField in curData)) {
                console.warn(`当前数据对象不包含属性「${singleMainField}」，根据「${singleMainField}」属性进行的主状态计算默认为空值`);
            }
        })
        for (let i = 0; i <= 1; i++) {
            let strTag:string = (curData[this.mainStateFields[0]] != null && curData[this.mainStateFields[0]] !== "")?(i == 0) ? `${curData[this.mainStateFields[0]]}` : "":"";
            if (this.mainStateFields.length >= 2) {
                for (let j = 0; j <= 1; j++) {
                    let strTag2:string = (curData[this.mainStateFields[1]] != null && curData[this.mainStateFields[1]] !== "")?`${strTag}__${(j == 0) ? `${curData[this.mainStateFields[1]]}` : ""}`:strTag;
                    if (this.mainStateFields.length >= 3) {
                        for (let k = 0; k <= 1; k++) {
                            let strTag3:string = (curData[this.mainStateFields[2]] != null && curData[this.mainStateFields[2]] !== "")?`${strTag2}__${(k == 0) ? `${curData[this.mainStateFields[2]]}` : ""}`:strTag2;
                            // 判断是否存在
                            return this.allDeMainStateMap.get(strTag3);
                        }
                    }else{
                        return this.allDeMainStateMap.get(strTag2);
                    }
                }
            }else{
                return this.allDeMainStateMap.get(strTag);
            }
        }
        return null;
    }

    /**
    * 获取数据对象当前操作标识
    * 
    * @param data 当前数据
    * @memberof  IbzDailyUIServiceBase
    */  
    public getDEMainStateOPPrivs(data:any){
        const stateTag = this.getDEMainStateTag(data);
        if (stateTag) {
            return this.allDeMainStateOPPrivsMap.get(stateTag);
        } else {
            return null;
        }
    }

    /**
    * 获取数据对象所有的操作标识
    * 
    * @param data 当前数据
    * @memberof  IbzDailyUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}