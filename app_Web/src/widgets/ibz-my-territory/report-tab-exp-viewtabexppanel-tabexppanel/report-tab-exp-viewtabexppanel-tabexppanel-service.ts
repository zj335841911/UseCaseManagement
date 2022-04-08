import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import ReportTabExpViewtabexppanelModel from './report-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * ReportTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class ReportTabExpViewtabexppanelService
 */
export default class ReportTabExpViewtabexppanelService extends ControlService {

    /**
     * 我的地盘服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof ReportTabExpViewtabexppanelService
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ReportTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ReportTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof ReportTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ReportTabExpViewtabexppanelModel();
    }

    
}