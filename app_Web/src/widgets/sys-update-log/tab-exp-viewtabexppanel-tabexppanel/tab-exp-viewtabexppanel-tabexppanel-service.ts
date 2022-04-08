import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import SysUpdateLogService from '@/service/sys-update-log/sys-update-log-service';
import TabExpViewtabexppanelModel from './tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * TabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class TabExpViewtabexppanelService
 */
export default class TabExpViewtabexppanelService extends ControlService {

    /**
     * 更新日志服务对象
     *
     * @type {SysUpdateLogService}
     * @memberof TabExpViewtabexppanelService
     */
    public appEntityService: SysUpdateLogService = new SysUpdateLogService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof TabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of TabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof TabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new TabExpViewtabexppanelModel();
    }

    
}