import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import SysTeamMemberService from '@/service/sys-team-member/sys-team-member-service';
import GridExpViewgridexpbarModel from './grid-exp-viewgridexpbar-gridexpbar-model';


/**
 * GridExpViewgridexpbar 部件服务对象
 *
 * @export
 * @class GridExpViewgridexpbarService
 */
export default class GridExpViewgridexpbarService extends ControlService {

    /**
     * 组成员服务对象
     *
     * @type {SysTeamMemberService}
     * @memberof GridExpViewgridexpbarService
     */
    public appEntityService: SysTeamMemberService = new SysTeamMemberService({ $store: this.getStore() });

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