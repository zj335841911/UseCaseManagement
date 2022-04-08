import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import SysPostService from '@/service/sys-post/sys-post-service';
import Gridexpbar_gridModel from './gridexpbar-grid-grid-model';


/**
 * Gridexpbar_grid 部件服务对象
 *
 * @export
 * @class Gridexpbar_gridService
 */
export default class Gridexpbar_gridService extends ControlService {

    /**
     * 岗位服务对象
     *
     * @type {SysPostService}
     * @memberof Gridexpbar_gridService
     */
    public appEntityService: SysPostService = new SysPostService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof Gridexpbar_gridService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of Gridexpbar_gridService.
     * 
     * @param {*} [opts={}]
     * @memberof Gridexpbar_gridService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new Gridexpbar_gridModel();
    }

    /**
     * 备份原生数据
     *
     * @type {*}
     * @memberof Gridexpbar_gridService
     */
    private copynativeData:any;

    /**
     * 远端数据
     *
     * @type {*}
     * @memberof Gridexpbar_gridService
     */
    private remoteCopyData:any = {};


    /**
     * 处理数据
     *
     * @public
     * @param {Promise<any>} promise
     * @returns {Promise<any>}
     * @memberof Gridexpbar_gridService
     */
    public doItems(promise: Promise<any>, deKeyField: string, deName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            promise.then((response: any) => {
                if (response && response.status === 200) {
                    const data = response.data;
                    data.forEach((item:any,index:number) =>{
                        item[deName] = item[deKeyField];
                        data[index] = item;
                    });
                    resolve(data);
                } else {
                    reject([])
                }
            }).catch((response: any) => {
                reject([])
            });
        });
    }

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} data
     * @param {boolean} [isloading]
     * @returns {Promise<any[]>}
     * @memberof  Gridexpbar_gridService
     */
    @Errorlog
    public getItems(serviceName: string, interfaceName: string, context: any = {}, data: any, isloading?: boolean): Promise<any[]> {
        data.page = data.page ? data.page : 0;
        data.size = data.size ? data.size : 1000;

        return Promise.reject([])
    }

    /**
     * 添加数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof Gridexpbar_gridService
     */
    @Errorlog
    public add(action: string, context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestDataWithUpdate(action,context,data,true);
        return new Promise((resolve: any, reject: any) => {
            const _appEntityService: any = this.appEntityService;
            let result: Promise<any>;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            }else{
                result =_appEntityService.Create(Context,Data, isloading);
            }
            result.then((response) => {
                this.handleResponse(action, response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });      
        });
    }

    /**
     * 删除数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof Gridexpbar_gridService
     */
    @Errorlog
    public delete(action: string, context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data,true);
        return new Promise((resolve: any, reject: any) => {
            const _appEntityService: any = this.appEntityService;
            let result: Promise<any>;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            }else{
                result =_appEntityService.Remove(Context,Data, isloading);
            }
            result.then((response) => {
                resolve(response);
            }).catch(response => {
                reject(response);
            });      
        });
    }

    /**
     * 修改数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof Gridexpbar_gridService
     */
    @Errorlog
    public update(action: string, context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestDataWithUpdate(action,context,data,true);
        return new Promise((resolve: any, reject: any) => {
            const _appEntityService: any = this.appEntityService;
            let result: Promise<any>;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data,isloading);
            }else{
                result =_appEntityService.Update(Context,Data,isloading);
            }
            result.then((response) => {
                this.handleResponse(action, response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });      
        });
    }

    /**
     * 获取数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof Gridexpbar_gridService
     */
    @Errorlog
    public get(action: string, context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data,true);
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            } else {
                result = this.appEntityService.Get(Context,Data, isloading);
            }
            result.then((response) => {
                //处理返回数据，补充判断标识
                if(response.data){
                    Object.assign(response.data,{srfuf:0});
                }
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof Gridexpbar_gridService
     */
    @Errorlog
    public search(action: string,context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data,true);
        return new Promise((resolve: any, reject: any) => {
            const _appEntityService: any = this.appEntityService;
            let result: Promise<any>;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            }else{
                result =_appEntityService.FetchDefault(Context,Data, isloading);
            }
            result.then((response) => {
                this.setCopynativeData(response.data);
                this.handleResponse(action, response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });      
        });
    }


    /**
     * 加载草稿
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof Gridexpbar_gridService
     */
    @Errorlog
    public loadDraft(action: string, context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data,true);
        return new Promise((resolve: any, reject: any) => {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            } else {
                result = this.appEntityService.GetDraft(Context,Data, isloading);
            }
            result.then((response) => {
                //处理返回数据，补充判断标识
                if(response.data){
                    Object.assign(response.data,{srfuf:'0'});
                    //仿真主键数据
                    response.data.postid = Util.createUUID();
                }
                this.setRemoteCopyData(response);
                this.handleResponse(action, response, true);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });
    }


    /**
     * 前台逻辑
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof Gridexpbar_gridService
     */
    @Errorlog
    public frontLogic(action:string,context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data,true);
        return new Promise((resolve: any, reject: any)=>{
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            } else {
                return Promise.reject({ status: 500, data: { title: '失败', message: '系统异常' } });
            }
            result.then((response) => {
                this.handleResponse(action, response);
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        })
    }

    /**
     * 处理请求数据(修改或增加数据)
     * 
     * @param action 行为 
     * @param data 数据
     * @memberof Gridexpbar_gridService
     */
    public handleRequestDataWithUpdate(action: string,context:any ={},data: any = {},isMerge:boolean = false){
        let model: any = this.getMode();
        if (!model && model.getDataItems instanceof Function) {
            return data;
        }
        let dataItems: any[] = model.getDataItems();
        let requestData:any = {};
        if(isMerge && (data && data.viewparams)){
            Object.assign(requestData,data.viewparams);
        }
        dataItems.forEach((item:any) =>{
            if(item && item.dataType && Object.is(item.dataType,'FONTKEY')){
                if(item && item.prop && item.name ){
                    requestData[item.prop] = context[item.name];
                }
            }else{
                if(item && item.isEditable && item.prop && item.name && data.hasOwnProperty(item.name)){
                    requestData[item.prop] = data[item.name];
                }
            }
        });
        let tempContext:any = JSON.parse(JSON.stringify(context));
        if(tempContext && tempContext.srfsessionid){
            tempContext.srfsessionkey = tempContext.srfsessionid;
            delete tempContext.srfsessionid;
        }
        return {context:tempContext,data:requestData};
    }
    /**
     * 设置远端数据
     * 
     * @param result 远端请求结果 
     * @memberof Gridexpbar_gridService
     */
    public setRemoteCopyData(result:any){
        if (result && result.status === 200) {
            this.remoteCopyData = Util.deepCopy(result.data);
        }
    }

    /**
     * 获取远端数据
     * 
     * @memberof Gridexpbar_gridService
     */
    public getRemoteCopyData(){
        return this.remoteCopyData;
    }

    /**
     * 设置备份原生数据
     * 
     * @param data 远端请求结果 
     * @memberof Gridexpbar_gridService
     */
    public setCopynativeData(data:any){
        this.copynativeData = Util.deepCopy(data);
    }

    /**
     * 获取备份原生数据
     * 
     * @memberof Gridexpbar_gridService
     */
    public getCopynativeData(){
        return this.copynativeData;
    }    
}