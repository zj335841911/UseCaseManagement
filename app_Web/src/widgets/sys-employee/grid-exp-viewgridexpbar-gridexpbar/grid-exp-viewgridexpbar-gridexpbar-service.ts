import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import SysEmployeeService from '@/service/sys-employee/sys-employee-service';
import GridExpViewgridexpbarModel from './grid-exp-viewgridexpbar-gridexpbar-model';


/**
 * GridExpViewgridexpbar 部件服务对象
 *
 * @export
 * @class GridExpViewgridexpbarService
 */
export default class GridExpViewgridexpbarService extends ControlService {

    /**
     * 人员服务对象
     *
     * @type {SysEmployeeService}
     * @memberof GridExpViewgridexpbarService
     */
    public appEntityService: SysEmployeeService = new SysEmployeeService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof GridExpViewgridexpbarService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of GridExpViewgridexpbarService.
     * 
     * @param {*} [opts={}]
     * @memberof GridExpViewgridexpbarService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new GridExpViewgridexpbarModel();
    }

}