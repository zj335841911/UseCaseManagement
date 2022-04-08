import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import MonthBugModel from './month-bug-chart-model';


/**
 * MonthBug 部件服务对象
 *
 * @export
 * @class MonthBugService
 */
export default class MonthBugService extends ControlService {

    /**
     * 用户年度工作内容统计服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof MonthBugService
     */
    public appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MonthBugService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MonthBugService.
     * 
     * @param {*} [opts={}]
     * @memberof MonthBugService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MonthBugModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MonthBugService
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