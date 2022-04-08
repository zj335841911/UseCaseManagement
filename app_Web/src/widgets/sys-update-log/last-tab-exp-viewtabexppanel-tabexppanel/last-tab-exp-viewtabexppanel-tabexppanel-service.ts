import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import SysUpdateLogService from '@/service/sys-update-log/sys-update-log-service';
import LastTabExpViewtabexppanelModel from './last-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * LastTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class LastTabExpViewtabexppanelService
 */
export default class LastTabExpViewtabexppanelService extends ControlService {

    /**
     * 更新日志服务对象
     *
     * @type {SysUpdateLogService}
     * @memberof LastTabExpViewtabexppanelService
     */
    public appEntityService: SysUpdateLogService = new SysUpdateLogService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof LastTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of LastTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof LastTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new LastTabExpViewtabexppanelModel();
    }

    
}