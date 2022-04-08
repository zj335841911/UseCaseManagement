import { Http,Util } from '@/utils';
import BugServiceBase from './bug-service-base';


/**
 * Bug服务对象
 *
 * @export
 * @class BugService
 * @extends {BugServiceBase}
 */
export default class BugService extends BugServiceBase {

    /**
     * Creates an instance of  BugService.
     * 
     * @param {*} [opts={}]
     * @memberof  BugService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * BuildLinkBug接口方法（自定义重写）
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BuildLinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {

        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/buildlinkbug`,data,isloading);

            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            context.bug=0;  //添加
            data.id =0; //添加
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/buildlinkbug`,data,isloading);

            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildlinkbug`,data,isloading);

            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/buildlinkbug`,data,isloading);

            return res;
        }
        let res:any = Http.getInstance().post(`/bugs/${context.bug}/buildlinkbug`,data,isloading);
        return res;
    }
}