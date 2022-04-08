import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import TaskService from '@/service/task/task-service';
import MyFinishedbyTaskModel from './my-finishedby-task-chart-model';


/**
 * MyFinishedbyTask 部件服务对象
 *
 * @export
 * @class MyFinishedbyTaskService
 */
export default class MyFinishedbyTaskService extends ControlService {

    /**
     * 任务服务对象
     *
     * @type {TaskService}
     * @memberof MyFinishedbyTaskService
     */
    public appEntityService: TaskService = new TaskService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MyFinishedbyTaskService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MyFinishedbyTaskService.
     * 
     * @param {*} [opts={}]
     * @memberof MyFinishedbyTaskService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MyFinishedbyTaskModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MyFinishedbyTaskService
     */
    @Errorlog
    public search(action: string,context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
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
                resolve(response);
            }).catch(response => {
                reject(response);
            });      
        });
    }
}