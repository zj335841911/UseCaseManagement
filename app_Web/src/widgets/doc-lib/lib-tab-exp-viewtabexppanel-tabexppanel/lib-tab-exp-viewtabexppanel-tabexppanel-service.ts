import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import LibTabExpViewtabexppanelModel from './lib-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * LibTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class LibTabExpViewtabexppanelService
 */
export default class LibTabExpViewtabexppanelService extends ControlService {

    /**
     * 文档库服务对象
     *
     * @type {DocLibService}
     * @memberof LibTabExpViewtabexppanelService
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof LibTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of LibTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof LibTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new LibTabExpViewtabexppanelModel();
    }

    
}