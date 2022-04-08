import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import Usr3TabExpViewtabexppanelModel from './usr3-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * Usr3TabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class Usr3TabExpViewtabexppanelService
 */
export default class Usr3TabExpViewtabexppanelService extends ControlService {

    /**
     * 我的地盘服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof Usr3TabExpViewtabexppanelService
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof Usr3TabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of Usr3TabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof Usr3TabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new Usr3TabExpViewtabexppanelModel();
    }

    
}