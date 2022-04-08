import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import StoryService from '@/service/story/story-service';
import TabExpViewtabexppanelModel from './tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * TabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class TabExpViewtabexppanelService
 */
export default class TabExpViewtabexppanelService extends ControlService {

    /**
     * 需求服务对象
     *
     * @type {StoryService}
     * @memberof TabExpViewtabexppanelService
     */
    public appEntityService: StoryService = new StoryService({ $store: this.getStore() });

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