import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import MyWorkPCModel from './my-work-pc-calendar-model';
import BugService from '@/service/bug/bug-service';
import TaskService from '@/service/task/task-service';
import TodoService from '@/service/todo/todo-service';
import IbzDailyService from '@/service/ibz-daily/ibz-daily-service';
import IbzReportlyService from '@/service/ibz-reportly/ibz-reportly-service';
import TestTaskService from '@/service/test-task/test-task-service';
import StoryService from '@/service/story/story-service';


/**
 * MyWorkPC 部件服务对象
 *
 * @export
 * @class MyWorkPCService
 */
export default class MyWorkPCService extends ControlService {

    /**
     * 我的地盘服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MyWorkPCService
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MyWorkPCService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MyWorkPCService.
     * 
     * @param {*} [opts={}]
     * @memberof MyWorkPCService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MyWorkPCModel();
    }

    /**
     * Bug服务对象
     *
     * @type {BugService}
     * @memberof MyWorkPCService
     */
    public bugService: BugService = new BugService();
    /**
     * 任务服务对象
     *
     * @type {TaskService}
     * @memberof MyWorkPCService
     */
    public taskService: TaskService = new TaskService();
    /**
     * 待办事宜表服务对象
     *
     * @type {TodoService}
     * @memberof MyWorkPCService
     */
    public todoService: TodoService = new TodoService();
    /**
     * 日报服务对象
     *
     * @type {IbzDailyService}
     * @memberof MyWorkPCService
     */
    public ibzdailyService: IbzDailyService = new IbzDailyService();
    /**
     * 汇报服务对象
     *
     * @type {IbzReportlyService}
     * @memberof MyWorkPCService
     */
    public ibzreportlyService: IbzReportlyService = new IbzReportlyService();
    /**
     * 测试版本服务对象
     *
     * @type {TestTaskService}
     * @memberof MyWorkPCService
     */
    public testtaskService: TestTaskService = new TestTaskService();
    /**
     * 需求服务对象
     *
     * @type {StoryService}
     * @memberof MyWorkPCService
     */
    public storyService: StoryService = new StoryService();

    /**
     * 事件配置集合
     *
     * @public
     * @type {any[]}
     * @memberof MyWorkPC
     */
    public eventsConfig: any[] = [
        {
          itemName : 'Bug',
          itemType : 'Bug',
          color : 'rgba(254, 228, 90, 1)',
          textColor : 'rgba(17, 34, 132, 1)',
        },
        {
          itemName : '任务',
          itemType : 'task',
          color : 'rgba(247, 110, 154, 1)',
          textColor : 'rgba(247, 219, 15, 1)',
        },
        {
          itemName : '待办',
          itemType : 'todo',
          color : 'rgba(255, 166, 0, 1)',
          textColor : '',
        },
        {
          itemName : '日报',
          itemType : 'daily',
          color : 'rgba(60, 255, 0, 1)',
          textColor : 'rgba(0, 0, 0, 1)',
        },
        {
          itemName : '汇报',
          itemType : 'reportly',
          color : 'rgba(137, 2, 20, 1)',
          textColor : '',
        },
        {
          itemName : '测试单',
          itemType : 'testtask',
          color : 'rgba(95, 132, 245, 1)',
          textColor : '',
        },
        {
          itemName : '需求',
          itemType : 'Story',
          color : 'rgba(85, 0, 255, 0.95)',
          textColor : '',
        },
    ];

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MyWorkPCService
     */
    @Errorlog
    public search(action: string, context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let _this = this;
        return new Promise((resolve: any, reject: any) => {
            let promises:any = [];
            let tempRequest:any;
            tempRequest = this.handleRequestData(action,context,data,true,"Bug");
            promises.push(this.bugService.FetchAssignedToMyBugPc(tempRequest.context, tempRequest.data, isloading));
            tempRequest = this.handleRequestData(action,context,data,true,"task");
            promises.push(this.taskService.FetchAssignedToMyTaskPc(tempRequest.context, tempRequest.data, isloading));
            tempRequest = this.handleRequestData(action,context,data,true,"todo");
            promises.push(this.todoService.FetchMyTodoPc(tempRequest.context, tempRequest.data, isloading));
            tempRequest = this.handleRequestData(action,context,data,true,"daily");
            promises.push(this.ibzdailyService.FetchMyAllDaily(tempRequest.context, tempRequest.data, isloading));
            tempRequest = this.handleRequestData(action,context,data,true,"reportly");
            promises.push(this.ibzreportlyService.FetchMyAllReportly(tempRequest.context, tempRequest.data, isloading));
            tempRequest = this.handleRequestData(action,context,data,true,"testtask");
            promises.push(this.testtaskService.FetchMyTestTaskPc(tempRequest.context, tempRequest.data, isloading));
            tempRequest = this.handleRequestData(action,context,data,true,"Story");
            promises.push(this.storyService.FetchAssignedToMyStoryCalendar(tempRequest.context, tempRequest.data, isloading));
            Promise.all(promises).then((resArray: any) => {
                let _data:any = [];
                resArray.forEach((response:any,resIndex:number) => {
                    if (!response || response.status !== 200) {
                        return;
                    }
                    let _response: any = JSON.parse(JSON.stringify(response));
                    _response.data.forEach((item:any,index:number) =>{
                        _response.data[index].color = _this.eventsConfig[resIndex].color;
                        _response.data[index].textColor = _this.eventsConfig[resIndex].textColor;
                        _response.data[index].itemType = _this.eventsConfig[resIndex].itemType;
                    });
                    ;
                    _this.handleResponse(action, _response,false,_this.eventsConfig[resIndex].itemType);
                    _data.push(..._response.data);
                });
                // 排序
                _data.sort((a:any, b:any)=>{
                    let dateA = new Date(Date.parse(a.start.replace(/-/g, "/")));
                    let dateB = new Date(Date.parse(b.start.replace(/-/g, "/")));
                    return dateA > dateB ? 1 : -1 ;
                });
                let result = {status: 200, data: _data};
                resolve(result);
            }).catch((response: any) => {
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
     * @memberof MyWorkPCService
     */
    @Errorlog
    public update(itemType: string, context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            let result: any;
            let tempRequest:any;
            switch(itemType) {
                case "Bug":
                    tempRequest = this.handleRequestData("",context,data,false,"Bug");
                    result = this.bugService.Update(tempRequest.context, tempRequest.data, isloading);
                    break;
                case "task":
                    tempRequest = this.handleRequestData("",context,data,false,"task");
                    result = this.taskService.Update(tempRequest.context, tempRequest.data, isloading);
                    break;
                case "todo":
                    tempRequest = this.handleRequestData("",context,data,false,"todo");
                    result = this.todoService.Update(tempRequest.context, tempRequest.data, isloading);
                    break;
                case "daily":
                    tempRequest = this.handleRequestData("",context,data,false,"daily");
                    result = this.ibzdailyService.Update(tempRequest.context, tempRequest.data, isloading);
                    break;
                case "reportly":
                    tempRequest = this.handleRequestData("",context,data,false,"reportly");
                    result = this.ibzreportlyService.Update(tempRequest.context, tempRequest.data, isloading);
                    break;
                case "testtask":
                    tempRequest = this.handleRequestData("",context,data,false,"testtask");
                    result = this.testtaskService.Update(tempRequest.context, tempRequest.data, isloading);
                    break;
                case "Story":
                    tempRequest = this.handleRequestData("",context,data,false,"Story");
                    result = this.storyService.Update(tempRequest.context, tempRequest.data, isloading);
                    break;
            }
            if(result){
                result.then((response: any) => {
                    this.handleResponse("", response);
                    resolve(response);
                }).catch((response: any) => {
                    reject(response);
                });
            }else{
              reject("没有匹配的实体服务");
            }
        });
    }

    /**
     * 处理request请求数据
     * 
     * @param action 行为 
     * @param data 数据
     * @memberof ControlService
     */
    public handleRequestData(action: string,context:any ={},data: any = {},isMerge:boolean = false,itemType:string=""){
        let model: any = this.getMode();
        model.itemType = itemType;
        return super.handleRequestData(action,context,data,isMerge);
    }

    /**
     * 处理response返回数据
     *
     * @param {string} action
     * @param {*} response
     * @memberof ControlService
     */
    public async handleResponse(action: string, response: any,isCreate:boolean = false,itemType:string=""){
        let model: any = this.getMode();
        model.itemType = itemType;
        super.handleResponse(action,response,isCreate);
    }

}