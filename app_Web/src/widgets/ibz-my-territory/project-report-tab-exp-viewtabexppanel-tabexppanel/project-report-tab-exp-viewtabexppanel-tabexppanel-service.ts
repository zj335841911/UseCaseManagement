import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import ProjectReportTabExpViewtabexppanelModel from './project-report-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * ProjectReportTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class ProjectReportTabExpViewtabexppanelService
 */
export default class ProjectReportTabExpViewtabexppanelService extends ControlService {

    /**
     * 我的地盘服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof ProjectReportTabExpViewtabexppanelService
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProjectReportTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProjectReportTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof ProjectReportTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProjectReportTabExpViewtabexppanelModel();
    }

    
}