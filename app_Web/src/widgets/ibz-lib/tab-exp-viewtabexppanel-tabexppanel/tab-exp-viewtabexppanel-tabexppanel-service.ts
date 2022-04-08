import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzLibService from '@/service/ibz-lib/ibz-lib-service';
import TabExpViewtabexppanelModel from './tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * TabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class TabExpViewtabexppanelService
 */
export default class TabExpViewtabexppanelService extends ControlService {

    /**
     * 用例库服务对象
     *
     * @type {IbzLibService}
     * @memberof TabExpViewtabexppanelService
     */
    public appEntityService: IbzLibService = new IbzLibService({ $store: this.getStore() });

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