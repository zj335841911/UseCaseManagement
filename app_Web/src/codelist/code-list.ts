import TaskService from '@service/task/task-service';
/**
 * 代码表--周报我完成的任务(下拉框选择)
 *
 * @export
 * @class CodeList
 */
export default class CodeList {

    /**
     * 是否启用缓存
     *
     * @type boolean
     * @memberof CodeList
     */
    public isEnableCache:boolean = true;

    /**
     * 过期时间
     *
     * @type any
     * @memberof CodeList
     */
    public static expirationTime:any;

    /**
     * 预定义类型
     *
     * @type string
     * @memberof CodeList
     */
    public predefinedType:string ='';

    /**
     * 缓存超长时长
     *
     * @type any
     * @memberof CodeList
     */
    public cacheTimeout:any = 600;

    /**
     * 代码表模型对象
     *
     * @type any
     * @memberof CodeList
     */
    public codelistModel:any = {
        codelistid:"CodeList"
    };

    /**
     * 获取过期时间
     *
     * @type any
     * @memberof CodeList
     */
    public getExpirationTime(){
        return CodeList.expirationTime;
    }

    /**
     * 设置过期时间
     *
     * @type any
     * @memberof CodeList
     */
    public setExpirationTime(value:any){
        CodeList.expirationTime = value; 
    }

    /**
     * 自定义参数集合
     *
     * @type any
     * @memberof CodeList
     */
    public userParamNames:any ={
    }

    /**
     * 查询参数集合
     *
     * @type any
     * @memberof CodeList
     */
    public queryParamNames:any ={
    }

    /**
     * 任务应用实体服务对象
     *
     * @type {TaskService}
     * @memberof CodeList
     */
    public taskService: TaskService = new TaskService();


    /**
     * 处理数据
     *
     * @public
     * @param {any[]} items
     * @returns {any[]}
     * @memberof CodeList
     */
    public doItems(items: any[]): any[] {
        let _items: any[] = [];
        if(items && items.length >0){
            items.forEach((item: any) => {
                let itemdata:any = {};
                Object.assign(itemdata,{id:item.id});
                Object.assign(itemdata,{value:item.id});
                Object.assign(itemdata,{text:item.name});
                Object.assign(itemdata,{label:item.name});
                
                
                
                
                _items.push(itemdata);
            });
        }
        return _items;
    }

    /**
     * 获取数据项
     *
     * @param {*} context
     * @param {*} data
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CodeList
     */
    public getItems(context: any={}, data: any={}, isloading?: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            data = this.handleQueryParam(data);
            const promise: Promise<any> = this.taskService.FetchThisWeekCompleteTaskChoice(context, data, isloading);
            promise.then((response: any) => {
                if (response && response.status === 200) {
                    const data =  response.data;
                    resolve(this.doItems(data));
                } else {
                    resolve([]);
                }
            }).catch((response: any) => {
                console.error(response);
                reject(response);
            });
        });
    }

    /**
     * 处理查询参数
     * @param data 传入data
     * @memberof CodeList
     */
    public handleQueryParam(data:any){
        let tempData:any = data?JSON.parse(JSON.stringify(data)):{};
        if(this.userParamNames && Object.keys(this.userParamNames).length >0){
            Object.keys(this.userParamNames).forEach((name: string) => {
                if (!name) {
                    return;
                }
                let value: string | null = this.userParamNames[name];
                if (value && value.startsWith('%') && value.endsWith('%')) {
                    const key = value.substring(1, value.length - 1);
                    if (this.codelistModel && this.codelistModel.hasOwnProperty(key)) {
                        value = (this.codelistModel[key] !== null && this.codelistModel[key] !== undefined) ? this.codelistModel[key] : null;
                    } else {
                        value = null;
                    }
                }
                Object.assign(tempData, { [name]: value });
            });
        }
        Object.assign(tempData,{page: 0, size: 1000});
        if(this.queryParamNames && Object.keys(this.queryParamNames).length > 0){
            Object.assign(tempData,this.queryParamNames);
        }
        return tempData;
    }
}
