import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import StatsTabExpViewtabexppanelModel from './stats-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * StatsTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class StatsTabExpViewtabexppanelService
 */
export default class StatsTabExpViewtabexppanelService extends ControlService {

    /**
     * 我的地盘服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof StatsTabExpViewtabexppanelService
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof StatsTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of StatsTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof StatsTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new StatsTabExpViewtabexppanelModel();
    }

    
}