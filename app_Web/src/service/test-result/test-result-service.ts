import { Http,Util } from '@/utils';
import TestResultServiceBase from './test-result-service-base';


/**
 * 测试结果服务对象
 *
 * @export
 * @class TestResultService
 * @extends {TestResultServiceBase}
 */
export default class TestResultService extends TestResultServiceBase {

    /**
     * Creates an instance of  TestResultService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestResultService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * FetchCurTestRun接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestResultServiceBase
     */
    public async FetchCurTestRun(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            data.task = context.testtask;
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/testresults/fetchcurtestrun`,tempData,isloading);
            return res;
        }
        if(context.story && context.case && true){
            data.task = context.testtask;
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/testresults/fetchcurtestrun`,tempData,isloading);
            return res;
        }
        if(context.product && context.case && true){
            data.task = context.testtask;
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/cases/${context.case}/testresults/fetchcurtestrun`,tempData,isloading);
            return res;
        }
        if(context.case && true){
            data.task = context.testtask;
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/cases/${context.case}/testresults/fetchcurtestrun`,tempData,isloading);
            return res;
        }
        data.task = context.testtask;
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/testresults/fetchcurtestrun`,tempData,isloading);
        return res;
    }


}