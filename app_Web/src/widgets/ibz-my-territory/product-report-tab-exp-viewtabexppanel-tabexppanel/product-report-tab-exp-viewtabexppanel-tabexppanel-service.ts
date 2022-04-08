import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import ProductReportTabExpViewtabexppanelModel from './product-report-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * ProductReportTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class ProductReportTabExpViewtabexppanelService
 */
export default class ProductReportTabExpViewtabexppanelService extends ControlService {

    /**
     * 我的地盘服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof ProductReportTabExpViewtabexppanelService
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProductReportTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProductReportTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof ProductReportTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProductReportTabExpViewtabexppanelModel();
    }

    
}