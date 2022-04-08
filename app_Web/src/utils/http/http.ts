import qs from 'qs';
import axios from 'axios';
import { nsc } from '@/studio-core/directives/notification-signal/notification-signal';

/**
 * Http net 对象
 * 调用 getInstance() 获取实例
 *
 * @class Http
 */
export class Http {
    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {Http}
     * @memberof Http
     */
    private static readonly instance: Http = new Http();

    /**
     * Creates an instance of Http.
     * @memberof Http
     */
    constructor() {
        if (Http.instance) {
            return Http.instance;
        }
    }

    /**
     * post请求
     *
     * @param {string} url
     * @param {*} [params={}]
     * @param {boolean} [isLoading]
     * @param {number} [serialNumber]
     * @returns {Promise<any>}
     * @memberof Http
     */
    public post(url: string, params: any = {}, isLoading?: boolean, serialNumber?: number): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if (isLoading) {
                this.beginLoading();
            }
            params = this.handleRequestData(params);
            axios({
                method: 'post',
                url: url,
                data: params,
                headers: { 'Content-Type': 'application/json;charset=UTF-8', Accept: 'application/json' },
            })
                .then((response: any) => {
                    this.doResponseResult(response, serialNumber);
                    resolve(response);
                })
                .catch((err: any) => {
                    this.doResponseResult(err, serialNumber);
                    reject(err);
                });
        });
    }

    /**
     * 获取
     *
     * @param {string} url
     * @param {*} [params={}]
     * @param {boolean} [isLoading]
     * @param {number} [serialNumber]
     * @returns {Promise<any>}
     * @memberof Http
     */
    public get(url: string, params: any = {}, isLoading?: boolean, serialNumber?: number): Promise<any> {
        params = this.handleRequestData(params);
        if (params.srfparentdata) {
            Object.assign(params, params.srfparentdata);
            delete params.srfparentdata;
        }
        if (Object.keys(params).length > 0) {
            let tempParam: any = {};
            let sort: any = null;
            Object.keys(params).forEach((item: any) => {
                if (params[item] || Object.is(params[item], 0)) {
                    if (Object.is(item, 'sort')) {
                        sort = params[item];
                    } else {
                        tempParam[item] = params[item];
                    }
                }
            });
            url += `?${qs.stringify(tempParam)}`;
            if (sort) {
                url += '&sort=' + sort;
            }
        }
        return new Promise((resolve: any, reject: any) => {
            if (isLoading) {
                this.beginLoading();
            }
            axios
                .get(url)
                .then((response) => {
                    this.doResponseResult(response, serialNumber);
                    resolve(response);
                })
                .catch((err) => {
                    this.doResponseResult(err, serialNumber);
                    reject(err);
                });
        });
    }

    /**
     * 删除
     *
     * @param {string} url
     * @param {boolean} [isLoading]
     * @param {*} [data]
     * @param {number} [serialNumber]
     * @returns {Promise<any>}
     * @memberof Http
     */
    public delete(url: string, isLoading?: boolean, data?: any, serialNumber?: number): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if (isLoading) {
                this.beginLoading();
            }
            axios
                .delete(url, { data: data ? data : {} })
                .then((response) => {
                    this.doResponseResult(response, serialNumber);
                    resolve(response);
                })
                .catch((err) => {
                    this.doResponseResult(err, serialNumber);
                    reject(err);
                });
        });
    }

    /**
     * 修改数据
     *
     * @param {string} url
     * @param {*} data
     * @param {boolean} [isLoading]
     * @param {number} [serialNumber]
     * @returns {Promise<any>}
     * @memberof Http
     */
    public put(url: string, data: any, isLoading?: boolean, serialNumber?: number): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if (isLoading) {
                this.beginLoading();
            }
            data = this.handleRequestData(data);
            axios
                .put(url, data)
                .then((response) => {
                    this.doResponseResult(response, serialNumber);
                    resolve(response);
                })
                .catch((err) => {
                    this.doResponseResult(err, serialNumber);
                    reject(err);
                });
        });
    }

    /**
     * 处理响应结果
     *
     * @private
     * @param {*} response
     * @param {number} [serialNumber]
     * @memberof Http
     */
    private doResponseResult(response: any, serialNumber?: number): void {
        if (serialNumber) {
            Object.assign(response, { serialNumber: serialNumber });
        }
        this.endLoading();
    }

    /**
     * 开始加载
     *
     * @private
     * @memberof Http
     */
    private beginLoading(): void {
        nsc.loading();
    }

    /**
     * 加载结束
     *
     * @private
     * @memberof Http
     */
    private endLoading(): void {
        nsc.loadingEnd();
    }

    /**
     * 处理请求数据
     *
     * @private
     * @param data
     * @memberof Http
     */
    private handleRequestData(data: any) {
        if (data.srfsessionkey) {
            delete data.srfsessionkey;
        }
        if (data.srfsessionid) {
            delete data.srfsessionid;
        }
        return data;
    }

    /**
     * 获取 Http 单例对象
     *
     * @static
     * @returns {Http}
     * @memberof Http
     */
    public static getInstance(): Http {
        return this.instance;
    }
}
