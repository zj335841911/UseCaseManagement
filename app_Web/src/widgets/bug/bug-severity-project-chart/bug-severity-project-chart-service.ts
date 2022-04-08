import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import BugService from '@/service/bug/bug-service';
import BugSeverity_ProjectModel from './bug-severity-project-chart-model';


/**
 * BugSeverity_Project 部件服务对象
 *
 * @export
 * @class BugSeverity_ProjectService
 */
export default class BugSeverity_ProjectService extends ControlService {

    /**
     * Bug服务对象
     *
     * @type {BugService}
     * @memberof BugSeverity_ProjectService
     */
    public appEntityService: BugService = new BugService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof BugSeverity_ProjectService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of BugSeverity_ProjectService.
     * 
     * @param {*} [opts={}]
     * @memberof BugSeverity_ProjectService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new BugSeverity_ProjectModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugSeverity_ProjectService
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