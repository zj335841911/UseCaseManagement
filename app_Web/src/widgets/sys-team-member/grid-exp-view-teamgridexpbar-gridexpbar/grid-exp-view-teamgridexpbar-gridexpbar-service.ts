import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import SysTeamMemberService from '@/service/sys-team-member/sys-team-member-service';
import GridExpViewTeamgridexpbarModel from './grid-exp-view-teamgridexpbar-gridexpbar-model';


/**
 * GridExpViewTeamgridexpbar 部件服务对象
 *
 * @export
 * @class GridExpViewTeamgridexpbarService
 */
export default class GridExpViewTeamgridexpbarService extends ControlService {

    /**
     * 组成员服务对象
     *
     * @type {SysTeamMemberService}
     * @memberof GridExpViewTeamgridexpbarService
     */
    public appEntityService: SysTeamMemberService = new SysTeamMemberService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof GridExpViewTeamgridexpbarService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of GridExpViewTeamgridexpbarService.
     * 
     * @param {*} [opts={}]
     * @memberof GridExpViewTeamgridexpbarService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new GridExpViewTeamgridexpbarModel();
    }

}