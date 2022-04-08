import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import SysEmployeeService from '@/service/sys-employee/sys-employee-service';
import GridExpViewProjectMembergridexpbarModel from './grid-exp-view-project-membergridexpbar-gridexpbar-model';


/**
 * GridExpViewProjectMembergridexpbar 部件服务对象
 *
 * @export
 * @class GridExpViewProjectMembergridexpbarService
 */
export default class GridExpViewProjectMembergridexpbarService extends ControlService {

    /**
     * 人员服务对象
     *
     * @type {SysEmployeeService}
     * @memberof GridExpViewProjectMembergridexpbarService
     */
    public appEntityService: SysEmployeeService = new SysEmployeeService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof GridExpViewProjectMembergridexpbarService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of GridExpViewProjectMembergridexpbarService.
     * 
     * @param {*} [opts={}]
     * @memberof GridExpViewProjectMembergridexpbarService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new GridExpViewProjectMembergridexpbarModel();
    }

}