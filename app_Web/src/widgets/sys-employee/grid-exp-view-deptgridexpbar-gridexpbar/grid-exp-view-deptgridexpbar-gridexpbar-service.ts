import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import SysEmployeeService from '@/service/sys-employee/sys-employee-service';
import GridExpViewDeptgridexpbarModel from './grid-exp-view-deptgridexpbar-gridexpbar-model';


/**
 * GridExpViewDeptgridexpbar 部件服务对象
 *
 * @export
 * @class GridExpViewDeptgridexpbarService
 */
export default class GridExpViewDeptgridexpbarService extends ControlService {

    /**
     * 人员服务对象
     *
     * @type {SysEmployeeService}
     * @memberof GridExpViewDeptgridexpbarService
     */
    public appEntityService: SysEmployeeService = new SysEmployeeService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof GridExpViewDeptgridexpbarService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of GridExpViewDeptgridexpbarService.
     * 
     * @param {*} [opts={}]
     * @memberof GridExpViewDeptgridexpbarService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new GridExpViewDeptgridexpbarModel();
    }

}