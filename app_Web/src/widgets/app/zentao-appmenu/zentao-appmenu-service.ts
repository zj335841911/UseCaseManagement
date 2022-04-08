import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ZentaoModel from './zentao-appmenu-model';


/**
 * Zentao 部件服务对象
 *
 * @export
 * @class ZentaoService
 */
export default class ZentaoService extends ControlService {

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ZentaoService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ZentaoService.
     * 
     * @param {*} [opts={}]
     * @memberof ZentaoService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ZentaoModel();
    }

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof Zentao
     */
    @Errorlog
    public get(params: any = {}): Promise<any> {
        return Http.getInstance().get('v7/zentaoappmenu', params);
    }

}