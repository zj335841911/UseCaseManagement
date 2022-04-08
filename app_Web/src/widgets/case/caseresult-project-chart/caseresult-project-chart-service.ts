import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import CaseService from '@/service/case/case-service';
import CaseresultProjectModel from './caseresult-project-chart-model';


/**
 * CaseresultProject 部件服务对象
 *
 * @export
 * @class CaseresultProjectService
 */
export default class CaseresultProjectService extends ControlService {

    /**
     * 测试用例服务对象
     *
     * @type {CaseService}
     * @memberof CaseresultProjectService
     */
    public appEntityService: CaseService = new CaseService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof CaseresultProjectService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of CaseresultProjectService.
     * 
     * @param {*} [opts={}]
     * @memberof CaseresultProjectService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new CaseresultProjectModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseresultProjectService
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