import CounterService from '../counter-service';
/**
 * 项目任务快速分组计数器计数器服务对象基类
 *
 * @export
 * @class ProjectTaskQCounterCounterServiceBase
 */
export default class ProjectTaskQCounterCounterServiceBase extends CounterService {

    /**
     * Creates an instance of  ProjectTaskQCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskQCounterCounterServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
        this.initCounterData();
        this.timer = setInterval(() => {
            this.fetchCounterData(this.context,this.viewparams);
        }, 120000);
    }

    /**
     * 初始化当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskQCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskQCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('project');
        if (_appEntityService['ProjectTaskQCnt'] && _appEntityService['ProjectTaskQCnt'] instanceof Function) {
            let result = await _appEntityService['ProjectTaskQCnt'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof ProjectTaskQCounterCounterServiceBase
     */
    public async refreshData(){
        if (this['fetchCounterData'] && this['fetchCounterData'] instanceof Function) {
            await this.fetchCounterData(this.context,this.viewparams);
        }
    }

}