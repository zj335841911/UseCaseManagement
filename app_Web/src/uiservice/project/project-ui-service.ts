import ProjectUIServiceBase from './project-ui-service-base';

/**
 * 项目UI服务对象
 *
 * @export
 * @class ProjectUIService
 */
export default class ProjectUIService extends ProjectUIServiceBase {

    /**
     * Creates an instance of  ProjectUIService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectUIService
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
    public async Project_ReturnEdit(args: any[], context:any = {} ,params: any={}, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = xData;
        _this.$acc.send.remove(args, _this.appDeName);
        _this.closeView(args);

    }
}