import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import ProductGridExpViewgridexpbarModel from './product-grid-exp-viewgridexpbar-gridexpbar-model';


/**
 * ProductGridExpViewgridexpbar 部件服务对象
 *
 * @export
 * @class ProductGridExpViewgridexpbarService
 */
export default class ProductGridExpViewgridexpbarService extends ControlService {

    /**
     * 文档库服务对象
     *
     * @type {DocLibService}
     * @memberof ProductGridExpViewgridexpbarService
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProductGridExpViewgridexpbarService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProductGridExpViewgridexpbarService.
     * 
     * @param {*} [opts={}]
     * @memberof ProductGridExpViewgridexpbarService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProductGridExpViewgridexpbarModel();
    }

}