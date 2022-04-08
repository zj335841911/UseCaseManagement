import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductSumService from '@/service/product-sum/product-sum-service';
import ProductCreateStory_POModel from './product-create-story-po-chart-model';


/**
 * ProductCreateStory_PO 部件服务对象
 *
 * @export
 * @class ProductCreateStory_POService
 */
export default class ProductCreateStory_POService extends ControlService {

    /**
     * 产品汇总表服务对象
     *
     * @type {ProductSumService}
     * @memberof ProductCreateStory_POService
     */
    public appEntityService: ProductSumService = new ProductSumService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProductCreateStory_POService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProductCreateStory_POService.
     * 
     * @param {*} [opts={}]
     * @memberof ProductCreateStory_POService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProductCreateStory_POModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductCreateStory_POService
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