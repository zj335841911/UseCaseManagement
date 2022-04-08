import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import CalendarExpViewcalendarexpbarModel from './calendar-exp-viewcalendarexpbar-calendarexpbar-model';


/**
 * CalendarExpViewcalendarexpbar 部件服务对象
 *
 * @export
 * @class CalendarExpViewcalendarexpbarService
 */
export default class CalendarExpViewcalendarexpbarService extends ControlService {

    /**
     * 我的地盘服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof CalendarExpViewcalendarexpbarService
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof CalendarExpViewcalendarexpbarService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of CalendarExpViewcalendarexpbarService.
     * 
     * @param {*} [opts={}]
     * @memberof CalendarExpViewcalendarexpbarService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new CalendarExpViewcalendarexpbarModel();
    }

}