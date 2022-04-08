import { Http } from '../http/http';
import { AppService } from '@/studio-core/service/app-service/AppService';

/**
 * AuthGuard net 对象
 * 调用 getInstance() 获取实例
 *
 * @class Http
 */
export class AuthGuard {
    /**
     * 获取 Auth 单例对象
     *
     * @static
     * @returns {Auth}
     * @memberof Auth
     */
    public static getInstance(): AuthGuard {
        if (!AuthGuard.auth) {
            AuthGuard.auth = new AuthGuard();
        }
        return this.auth;
    }

    /**
     * 单例变量声明
     *
     * @private
     * @static
     * @type {AuthGuard}
     * @memberof AuthGuard
     */
    private static auth: AuthGuard;

    /**
     * Creates an instance of AuthGuard.
     * 私有构造，拒绝通过 new 创建对象
     *
     * @memberof AuthGuard
     */
    private constructor() {}

    /**
     * post请求
     *
     * @param {string} url url 请求路径
     * @param {*} [params={}] 请求参数
     * @returns {Promise<any>} 请求相响应对象
     * @memberof AuthGuard
     */
    public async authGuard(url: string, params: any = {}, router: any): Promise<boolean> {
        try {
            let appContext = {};
            const response = await Http.getInstance().get(url, params);
            if (response?.status === 200) {
                let { data }: { data: any } = response;
                if (data) {
                    // token认证把用户信息放入应用级数据
                    if (localStorage.getItem('user')) {
                        let user: any = JSON.parse(localStorage.getItem('user') as string);
                        let localAppData: any = {};
                        if (user.sessionParams) {
                            localAppData = { context: user.sessionParams };
                            Object.assign(localAppData, data);
                        }
                        data = JSON.parse(JSON.stringify(localAppData));
                    }
                    this.formatAppData(data);
                    if (data.context) {
                        appContext = data.context;
                    }
                    router.app.$store.commit('addAppData', data);
                    // 提交统一资源数据
                    router.app.$store.dispatch('authresource/commitAuthData', data);
                }
                new AppService().contextStore.appContext = appContext;
                return true;
            } else if (response.status === 404) {
                return true;
            }
            return false;
        } catch (err) {
            console.warn('应用数据获取异常:', err);
            return false;
        }
    }

    /**
     * 初始化应用数据
     *
     * @protected
     * @param {*} data
     * @memberof AuthGuard
     */
    protected formatAppData(data: any): void {
        Object.defineProperty(data.context, 'srfcurdate', {
            get: function () {
                return new Date().toLocaleString(undefined, { hour12: false });
            },
            enumerable: true,
            configurable: true,
        });
    }
}
