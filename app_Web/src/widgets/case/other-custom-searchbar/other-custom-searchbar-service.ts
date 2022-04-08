import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import CaseService from '@/service/case/case-service';
import OtherCustomModel from './other-custom-searchbar-model';
import UtilService from '@/utilservice/util-service';


/**
 * OtherCustom 部件服务对象
 *
 * @export
 * @class OtherCustomService
 */
export default class OtherCustomService extends ControlService {

    /**
     * 测试用例服务对象
     *
     * @type {CaseService}
     * @memberof OtherCustomService
     */
    public appEntityService: CaseService = new CaseService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof OtherCustomService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of OtherCustomService.
     * 
     * @param {*} [opts={}]
     * @memberof OtherCustomService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new OtherCustomModel();
    }

    /**
     * 工具服务对象
     *
     * @protected
     * @type {UtilService}
     * @memberof OtherCustomService
     */
    protected utilService: UtilService = new UtilService();

    /**
     * 加载数据模型
     *
     * @param {string} serviceName
     * @param {*} context
     * @param {*} viewparams
     * @memberof OtherCustomService
     */
    public loadModel(serviceName: string, context: any, viewparams: any) {
        return new Promise((resolve: any, reject: any) => {
            this.utilService.getService(serviceName).then((service: any) => {
                service.loadModelData(JSON.stringify(context), viewparams).then((response: any) => {
                    resolve(response);
                }).catch((response: any) => {
                    reject(response);
                });
            }).catch((response: any) => {
                reject(response);
            });
        });
    }

    /**
     * 保存模型
     *
     * @param {string} serviceName
     * @param {*} context
     * @param {*} viewparams
     * @returns
     * @memberof OtherCustomService
     */
    public saveModel(serviceName: string, context: any, viewparams: any) {
        return new Promise((resolve: any, reject: any) => {
            this.utilService.getService(serviceName).then((service: any) => {
                service.saveModelData(JSON.stringify(context), '', viewparams).then((response: any) => {
                    resolve(response);
                }).catch((response: any) => {
                    reject(response);
                });
            }).catch((response: any) => {
                reject(response);
            });
        });
    }

}