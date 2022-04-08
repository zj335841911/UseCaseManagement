import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import ALLReportTabExpViewtabexppanelModel from './allreport-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * ALLReportTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class ALLReportTabExpViewtabexppanelService
 */
export default class ALLReportTabExpViewtabexppanelService extends ControlService {

    /**
     * 我的地盘服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof ALLReportTabExpViewtabexppanelService
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ALLReportTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ALLReportTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof ALLReportTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ALLReportTabExpViewtabexppanelModel();
    }

    
}