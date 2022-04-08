import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import TaskService from '@/service/task/task-service';
import MoreTabExpViewtabexppanelModel from './more-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * MoreTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class MoreTabExpViewtabexppanelService
 */
export default class MoreTabExpViewtabexppanelService extends ControlService {

    /**
     * 任务服务对象
     *
     * @type {TaskService}
     * @memberof MoreTabExpViewtabexppanelService
     */
    public appEntityService: TaskService = new TaskService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MoreTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MoreTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof MoreTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MoreTabExpViewtabexppanelModel();
    }

    
}