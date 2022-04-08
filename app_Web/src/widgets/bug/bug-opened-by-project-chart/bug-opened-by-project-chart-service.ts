import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import BugService from '@/service/bug/bug-service';
import BugOpenedBy_ProjectModel from './bug-opened-by-project-chart-model';


/**
 * BugOpenedBy_Project 部件服务对象
 *
 * @export
 * @class BugOpenedBy_ProjectService
 */
export default class BugOpenedBy_ProjectService extends ControlService {

    /**
     * Bug服务对象
     *
     * @type {BugService}
     * @memberof BugOpenedBy_ProjectService
     */
    public appEntityService: BugService = new BugService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof BugOpenedBy_ProjectService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of BugOpenedBy_ProjectService.
     * 
     * @param {*} [opts={}]
     * @memberof BugOpenedBy_ProjectService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new BugOpenedBy_ProjectModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugOpenedBy_ProjectService
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