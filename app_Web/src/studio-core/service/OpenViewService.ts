import { Util, Http } from '@/utils';

/**
 * 应用核心服务
 *
 * @export
 * @class OpenViewService
 */
export class OpenViewService {
    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {OpenViewService}
     * @memberof OpenViewService
     */
    private static readonly OpenViewService: OpenViewService = new OpenViewService();

    /**
     * Vue实例
     *
     * @private
     * @memberof OpenViewService
     */
    v!: any;

    /**
     * http请求服务
     *
     * @private
     * @type {Http}
     * @memberof OpenViewService
     */
    private http: Http = Http.getInstance();

    /**
     * Creates an instance of OpenViewService.
     * @memberof OpenViewService
     */
    constructor() {
        if (OpenViewService.OpenViewService) {
            return OpenViewService.OpenViewService;
        }
    }

    /**
     * 初始化
     *
     * @param {*} vueInstance
     * @memberof OpenViewService
     */
    public init(vueInstance: any): void {
        this.v = vueInstance;
    }

    /**
     * 打开重定向视图
     *
     * @param {string} rUrl
     * @param {*} context
     * @param {*} params
     * @param {*} [e]
     * @return {*}  {Promise<any>}
     * @memberof OpenViewService
     */
    public async openRedirectView(rUrl: string, context: any, params: any, e?: any): Promise<any> {
        try {
            const res: any = await this.http.get(rUrl, Util.deepCopy(params));
            if (res && res.status === 200) {
                return this.openView(res.data, context, params, e);
            }
        } catch (err) {
            if (!err || !err.status || !err.data) {
                this.v.$Notice.error({ title: '错误', desc: '请求发生异常，无返回结果!' });
                return;
            }
            if (err.status === 401) {
                return;
            }
            const { data } = err;
            this.v.$Notice.error({ title: data.title, desc: data.message });
        }
    }

    /**
     * 打开视图
     *
     * @param {*} data
     * @param {*} context
     * @param {*} [params={}]
     * @param {*} [e]
     * @return {*}  {Promise<any>}
     * @memberof OpenViewService
     */
    public async openView(data: any, context: any, params: any = {}, e?: any): Promise<any> {
        if (data) {
            if (data.viewparams && !Object.is(data.viewparams.srfkey, '')) {
                Object.assign(params, { srfkey: data.viewparams.srfkey });
            }
            if (data.openmode === 'POPUPAPP') {
                return this.openPopupApp(data.url);
            }
            if (data.openmode === 'INDEXVIEWTAB' || data.openmode === '' || data.openmode === 'POPUP') {
                // const viewpath = `${data.viewmodule}_${data.viewname}`.toLowerCase();
                // 所有数据保持在同一级
                // if (params.srfparentdata) {
                //     Object.assign(params, params.srfparentdata);
                //     delete params.srfparentdata;
                // }
                return this.openRouteView(data, context, params);
            }
            const view: any = {
                viewname: data.component || this.v.$util.srfFilePath2(data.viewname),
                title: data.title,
                width: data.width,
                height: data.height,
                placement: data.openmode,
            };
            switch (data.openmode) {
                case 'POPUPMODAL':
                    return this.openPopupModal(view, context, params);
                case 'DRAWER_TOP':
                    return this.openDrawer(view, context, params);
                case 'DRAWER_BOTTOM':
                    return this.openDrawer(view, context, params);
                case 'DRAWER_LEFT':
                    return this.openDrawer(view, context, params);
                case 'DRAWER_RIGHT':
                    return this.openDrawer(view, context, params);
                case 'POPOVER':
                    return this.openPopOver(e, view, context, params);
            }
        }
    }

    /**
     * 路由模式打开视图
     *
     * @param {string} viewPath
     * @param {*} context
     * @param {*} data
     * @memberof OpenViewService
     */
    openRouteView(viewPath: any, context: any, params: any): void {
        // const _params = this.v.$util.prepareRouteParams({
        //     route: this.v.$route,
        //     sourceNode: this.v.$route.name,
        //     targetNode: viewPath,
        //     data: data,
        // });
        // this.v.$router.push({ name: viewPath, params: _params });
        const path: string = this.v.$viewTool.buildUpRoutePath(this.v.$route, context, [], viewPath.parameters, [], params);
        this.v.$router.push(path);
    }

    /**
     * 模态模式打开视图
     *
     * @param {*} view
     * @param {*} context
     * @param {*} data
     * @return {*}  {Promise<any>}
     * @memberof OpenViewService
     */
    openPopupModal(view: any, context: any, data: any): Promise<any> {
        return new Promise((resolve: any) => {
            this.v.$appmodal.openModal(view, context, data).subscribe((result: any) => {
                resolve(this.formatResultData(result));
            });
        });
    }

    /**
     * 抽屉模式打开视图
     *
     * @param {*} view
     * @param {*} context
     * @param {*} data
     * @return {*}  {Promise<any>}
     * @memberof OpenViewService
     */
    openDrawer(view: any, context: any, data: any): Promise<any> {
        return new Promise((resolve: any) => {
            this.v.$appdrawer.openDrawer(view, context, data).subscribe((result: any) => {
                resolve(this.formatResultData(result));
            });
        });
    }

    /**
     * 气泡卡片模式打开
     *
     * @param {*} e
     * @param {*} view
     * @param {*} context
     * @param {*} data
     * @return {*}  {Promise<any>}
     * @memberof OpenViewService
     */
    openPopOver(e: any, view: any, context: any, data: any): Promise<any> {
        return new Promise((resolve: any) => {
            this.v.$apppopover.openPop(e, view, context, data).subscribe((result: any) => {
                resolve(this.formatResultData(result));
            });
        });
    }

    /**
     * 独立里面弹出
     *
     * @param {string} url
     * @memberof AppPicker
     */
    openPopupApp(url: string): void {
        window.open(url, '_blank');
    }

    /**
     * 确认操作
     *
     * @param {string} msg
     * @param {string} [title]
     * @returns {Promise<void>}
     * @memberof OpenViewService
     */
    confirm(msg: string, title?: string): Promise<void> {
        return new Promise((resolve: any) => {
            this.v.$Modal.confirm({
                title: title,
                content: msg,
                onOk: () => {
                    resolve();
                },
            });
        });
    }

    /**
     * 格式化返回数据
     *
     * @private
     * @param {*} result
     * @returns {*}
     * @memberof OpenViewService
     */
    private formatResultData(result: any): any {
        if (result == null || result.ret !== 'OK') {
            return;
        }
        if (result.datas && result.datas.length > 0) {
            return result.datas[0];
        }
    }

    /**
     * 获取实例
     *
     * @static
     * @returns {OpenViewService}
     * @memberof OpenViewService
     */
    public static getInstance(): OpenViewService {
        return OpenViewService.OpenViewService;
    }
}
