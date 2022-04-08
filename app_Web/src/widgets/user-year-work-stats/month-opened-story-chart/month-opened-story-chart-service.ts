import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import MonthOpenedStoryModel from './month-opened-story-chart-model';


/**
 * MonthOpenedStory 部件服务对象
 *
 * @export
 * @class MonthOpenedStoryService
 */
export default class MonthOpenedStoryService extends ControlService {

    /**
     * 用户年度工作内容统计服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof MonthOpenedStoryService
     */
    public appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MonthOpenedStoryService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MonthOpenedStoryService.
     * 
     * @param {*} [opts={}]
     * @memberof MonthOpenedStoryService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MonthOpenedStoryModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MonthOpenedStoryService
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