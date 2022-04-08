import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import CaseService from '@/service/case/case-service';
import CaseLASTRUNNERProjectModel from './case-lastrunnerproject-chart-model';


/**
 * CaseLASTRUNNERProject 部件服务对象
 *
 * @export
 * @class CaseLASTRUNNERProjectService
 */
export default class CaseLASTRUNNERProjectService extends ControlService {

    /**
     * 测试用例服务对象
     *
     * @type {CaseService}
     * @memberof CaseLASTRUNNERProjectService
     */
    public appEntityService: CaseService = new CaseService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof CaseLASTRUNNERProjectService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of CaseLASTRUNNERProjectService.
     * 
     * @param {*} [opts={}]
     * @memberof CaseLASTRUNNERProjectService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new CaseLASTRUNNERProjectModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseLASTRUNNERProjectService
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