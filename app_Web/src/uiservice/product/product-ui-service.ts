import ProductUIServiceBase from './product-ui-service-base';

/**
 * 产品UI服务对象
 *
 * @export
 * @class ProductUIService
 */
export default class ProductUIService extends ProductUIServiceBase {

    /**
     * Creates an instance of  ProductUIService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductUIService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 退出
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Product_ReturnEdit(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = xData;
        _this.$acc.send.remove(args, _this.appDeName);
        _this.closeView(args)
    }
}