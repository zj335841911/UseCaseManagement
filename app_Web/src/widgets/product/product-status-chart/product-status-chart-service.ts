import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductService from '@/service/product/product-service';
import ProductStatusModel from './product-status-chart-model';


/**
 * ProductStatus 部件服务对象
 *
 * @export
 * @class ProductStatusService
 */
export default class ProductStatusService extends ControlService {

    /**
     * 产品服务对象
     *
     * @type {ProductService}
     * @memberof ProductStatusService
     */
    public appEntityService: ProductService = new ProductService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProductStatusService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProductStatusService.
     * 
     * @param {*} [opts={}]
     * @memberof ProductStatusService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProductStatusModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatusService
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