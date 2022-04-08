import AuthService from '../auth-service';

/**
 * 员工负载表权限服务对象基类
 *
 * @export
 * @class EmployEeloadAuthServiceBase
 * @extends {AuthService}
 */
export default class EmployEeloadAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  EmployEeloadAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  EmployEeloadAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof EmployEeloadAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        let copyDefaultOPPrivs:any = JSON.parse(JSON.stringify(curDefaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        // 统一资源优先
        Object.keys(curDefaultOPPrivs).forEach((name:string) => {
            if(this.sysOPPrivsMap.get(name) && copyDefaultOPPrivs[name] === 0){
                curDefaultOPPrivs[name] = copyDefaultOPPrivs[name];
            }
        });
        return curDefaultOPPrivs;
    }

}