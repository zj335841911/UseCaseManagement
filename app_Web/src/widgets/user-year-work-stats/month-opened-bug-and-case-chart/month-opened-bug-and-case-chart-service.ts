import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import MonthOpenedBugAndCaseModel from './month-opened-bug-and-case-chart-model';


/**
 * MonthOpenedBugAndCase 部件服务对象
 *
 * @export
 * @class MonthOpenedBugAndCaseService
 */
export default class MonthOpenedBugAndCaseService extends ControlService {

    /**
     * 用户年度工作内容统计服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof MonthOpenedBugAndCaseService
     */
    public appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MonthOpenedBugAndCaseService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MonthOpenedBugAndCaseService.
     * 
     * @param {*} [opts={}]
     * @memberof MonthOpenedBugAndCaseService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MonthOpenedBugAndCaseModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MonthOpenedBugAndCaseService
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