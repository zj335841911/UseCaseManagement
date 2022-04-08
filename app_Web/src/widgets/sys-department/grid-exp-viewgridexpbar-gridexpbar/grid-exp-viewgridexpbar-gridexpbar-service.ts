import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import SysDepartmentService from '@/service/sys-department/sys-department-service';
import GridExpViewgridexpbarModel from './grid-exp-viewgridexpbar-gridexpbar-model';


/**
 * GridExpViewgridexpbar 部件服务对象
 *
 * @export
 * @class GridExpViewgridexpbarService
 */
export default class GridExpViewgridexpbarService extends ControlService {

    /**
     * 部门服务对象
     *
     * @type {SysDepartmentService}
     * @memberof GridExpViewgridexpbarService
     */
    public appEntityService: SysDepartmentService = new SysDepartmentService({ $store: this.getStore() });

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