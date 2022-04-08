import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductSumService from '@/service/product-sum/product-sum-service';
import ProductBugcnt_QAModel from './product-bugcnt-qa-chart-model';


/**
 * ProductBugcnt_QA 部件服务对象
 *
 * @export
 * @class ProductBugcnt_QAService
 */
export default class ProductBugcnt_QAService extends ControlService {

    /**
     * 产品汇总表服务对象
     *
     * @type {ProductSumService}
     * @memberof ProductBugcnt_QAService
     */
    public appEntityService: ProductSumService = new ProductSumService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProductBugcnt_QAService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProductBugcnt_QAService.
     * 
     * @param {*} [opts={}]
     * @memberof ProductBugcnt_QAService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProductBugcnt_QAModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductBugcnt_QAService
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