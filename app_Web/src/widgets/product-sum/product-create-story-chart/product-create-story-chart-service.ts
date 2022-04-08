import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductSumService from '@/service/product-sum/product-sum-service';
import ProductCreateStoryModel from './product-create-story-chart-model';


/**
 * ProductCreateStory 部件服务对象
 *
 * @export
 * @class ProductCreateStoryService
 */
export default class ProductCreateStoryService extends ControlService {

    /**
     * 产品汇总表服务对象
     *
     * @type {ProductSumService}
     * @memberof ProductCreateStoryService
     */
    public appEntityService: ProductSumService = new ProductSumService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProductCreateStoryService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProductCreateStoryService.
     * 
     * @param {*} [opts={}]
     * @memberof ProductCreateStoryService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProductCreateStoryModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductCreateStoryService
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