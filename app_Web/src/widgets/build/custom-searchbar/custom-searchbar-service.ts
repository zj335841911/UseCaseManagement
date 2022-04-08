import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import BuildService from '@/service/build/build-service';
import CustomModel from './custom-searchbar-model';
import UtilService from '@/utilservice/util-service';


/**
 * Custom 部件服务对象
 *
 * @export
 * @class CustomService
 */
export default class CustomService extends ControlService {

    /**
     * 版本服务对象
     *
     * @type {BuildService}
     * @memberof CustomService
     */
    public appEntityService: BuildService = new BuildService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof CustomService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of CustomService.
     * 
     * @param {*} [opts={}]
     * @memberof CustomService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new CustomModel();
    }

    /**
     * 工具服务对象
     *
     * @protected
     * @type {UtilService}
     * @memberof CustomService
     */
    protected utilService: UtilService = new UtilService();

    /**
     * 加载数据模型
     *
     * @param {string} serviceName
     * @param {*} context
     * @param {*} viewparams
     * @memberof CustomService
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
     * @memberof CustomService
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