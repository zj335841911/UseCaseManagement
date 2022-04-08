import {Http, Util} from '@/utils';
import TestReportServiceBase from './test-report-service-base';


/**
 * 测试报告服务对象
 *
 * @export
 * @class TestReportService
 * @extends {TestReportServiceBase}
 */
export default class TestReportService extends TestReportServiceBase {

    /**
     * Creates an instance of  TestReportService.
     *
     * @param {*} [opts={}]
     * @memberof  TestReportService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * GetInfoTestTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestReportServiceBase
     */
    public async GetInfoTestTask(context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        if (context.product && context.testreport) {
            let masterData: any = {};
            context.testreport = 0;
            data.id = 0;
            Object.assign(data, masterData);
            let res: any = await Http.getInstance().put(`/products/${context.product}/testreports/${context.testreport}/getinfotesttask`, data, isloading);

            return res;
        }
        context.testreport = 0;
        data.id = 0;
        let res: any = Http.getInstance().put(`/testreports/${context.testreport}/getinfotesttask`, data, isloading);
        return res;
    }

    /**
     * GetInfoTestTaskProject接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestReportServiceBase
     */
    public async GetInfoTestTaskProject(context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        if (context.project && context.testreport) {
            let masterData: any = {};
            Object.assign(data, masterData);
            context.testreport = 0;
            data.id = 0;
            data.project = context.project;
            let res: any = await Http.getInstance().put(`/projects/${context.project}/testreports/${context.testreport}/getinfotesttaskproject`, data, isloading);

            return res;
        }
        if (context.product && context.testreport) {
            let masterData: any = {};
            Object.assign(data, masterData);
            context.testreport = 0;
            data.id = 0;
            data.project = context.project;
            let res: any = await Http.getInstance().put(`/products/${context.product}/testreports/${context.testreport}/getinfotesttaskproject`, data, isloading);

            return res;
        }
        context.testreport = 0;
        data.id = 0;
        data.project = context.project;
        let res: any = Http.getInstance().put(`/testreports/${context.testreport}/getinfotesttaskproject`, data, isloading);
        return res;
    }

    /**
     * GetInfoTestTaskS接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestReportServiceBase
     */
    public async GetInfoTestTaskS(context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        if (context.project && context.testreport) {
            let masterData: any = {};
            Object.assign(data, masterData);
            context.testreport = 0;
            data.id = 0;
            data.project = context.project;
            data.tasks = context.tasks;
            let res: any = await Http.getInstance().put(`/projects/${context.project}/testreports/${context.testreport}/getinfotesttasks`, data, isloading);

            return res;
        }
        if (context.product && context.testreport) {
            let masterData: any = {};
            Object.assign(data, masterData);
            context.testreport = 0;
            data.id = 0;
            data.project = context.project;
            data.tasks = context.tasks;
            let res: any = await Http.getInstance().put(`/products/${context.product}/testreports/${context.testreport}/getinfotesttasks`, data, isloading);

            return res;
        }
        context.testreport = 0;
        data.id = 0;
        data.project = context.project;
        data.tasks = context.tasks;
        let res: any = Http.getInstance().put(`/testreports/${context.testreport}/getinfotesttasks`, data, isloading);
        return res;
    }

    /**
     * GetInfoTestTaskR接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestReportServiceBase
     */
    public async GetInfoTestTaskR(context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        if (context.project && context.testreport) {
            let masterData: any = {};
            Object.assign(data, masterData);
            context.testreport = 0;
            data.id = 0;
            data.project = context.project;
            if (!data.tasks) {
                data.tasks = context.tasks;
            }
            let res: any = await Http.getInstance().put(`/projects/${context.project}/testreports/${context.testreport}/getinfotesttaskr`, data, isloading);

            return res;
        }
        if (context.product && context.testreport) {
            let masterData: any = {};
            Object.assign(data, masterData);
            context.testreport = 0;
            data.id = 0;
            data.project = context.project;
            if (!data.tasks) {
                data.tasks = context.tasks;
            }
            let res: any = await Http.getInstance().put(`/products/${context.product}/testreports/${context.testreport}/getinfotesttaskr`, data, isloading);

            return res;
        }
        context.testreport = 0;
        data.id = 0;
        data.project = context.project;
        if (!data.tasks) {
            data.tasks = context.tasks;
        }
        let res: any = Http.getInstance().put(`/testreports/${context.testreport}/getinfotesttaskr`, data, isloading);
        return res;
    }

    /**
     * GetInfoTaskOvByTime接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestReportServiceBase
     */
    public async GetInfoTaskOvByTime(context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        if (context.project && context.testreport) {
            let masterData: any = {};
            Object.assign(data, masterData);
            context.testreport = 0;
            data.id = 0;
            data.project = context.project;
            if (!data.tasks) {
                data.tasks = context.tasks;
            }
            let res: any = await Http.getInstance().put(`/projects/${context.project}/testreports/${context.testreport}/getinfotaskovbytime`, data, isloading);

            return res;
        }
        if (context.product && context.testreport) {
            let masterData: any = {};
            Object.assign(data, masterData);
            context.testreport = 0;
            data.id = 0;
            data.project = context.project;
            if (!data.tasks) {
                data.tasks = context.tasks;
            }
            let res: any = await Http.getInstance().put(`/products/${context.product}/testreports/${context.testreport}/getinfotaskovbytime`, data, isloading);

            return res;
        }
        context.testreport = 0;
        data.id = 0;
        data.project = context.project;
        if (!data.tasks) {
            data.tasks = context.tasks;
        }
        let res: any = Http.getInstance().put(`/testreports/${context.testreport}/getinfotaskovbytime`, data, isloading);
        return res;
    }

}