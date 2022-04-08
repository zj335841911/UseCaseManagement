import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import TestReportService from '@/service/test-report/test-report-service';
import ProjectTabExpViewtabexppanelModel from './project-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * ProjectTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class ProjectTabExpViewtabexppanelService
 */
export default class ProjectTabExpViewtabexppanelService extends ControlService {

    /**
     * 测试报告服务对象
     *
     * @type {TestReportService}
     * @memberof ProjectTabExpViewtabexppanelService
     */
    public appEntityService: TestReportService = new TestReportService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProjectTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProjectTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof ProjectTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProjectTabExpViewtabexppanelModel();
    }

    
}