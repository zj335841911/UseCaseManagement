import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzReportService from '@/service/ibz-report/ibz-report-service';
import MyTabExpViewtabexppanelModel from './my-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * MyTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class MyTabExpViewtabexppanelService
 */
export default class MyTabExpViewtabexppanelService extends ControlService {

    /**
     * 汇报汇总服务对象
     *
     * @type {IbzReportService}
     * @memberof MyTabExpViewtabexppanelService
     */
    public appEntityService: IbzReportService = new IbzReportService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MyTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MyTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof MyTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MyTabExpViewtabexppanelModel();
    }

    
}