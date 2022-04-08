import { AppNavHistory } from '../app-nav-history/AppNavHistory';
import { AppContextStore } from '../app-context-store/AppContextStore';
import { AppViewStore } from '../app-view-store/AppViewStore';
import { Environment } from '@/environments/environment';
import { Http, Util } from '@/utils';
import { AppEvent } from '../../events/app-event';

/**
 * 应用服务基类
 *
 * @export
 * @class AppServiceBase
 */
export class AppServiceBase {
    /**
     * 应用导航工具类
     *
     * @type {AppNavHistory}
     * @memberof AppServiceBase
     */
    public readonly navHistory: AppNavHistory = new AppNavHistory();

    /**
     * 应用上下文仓库
     *
     * @type {AppContextStore}
     * @memberof AppServiceBase
     */
    public readonly contextStore: AppContextStore = this.navHistory.contextStore;

    /**
     * 应用视图仓库
     *
     * @type {AppViewStore}
     * @memberof AppServiceBase
     */
    public readonly viewStore: AppViewStore = new AppViewStore();

    /**
     * 应用事件
     *
     * @memberof AppServiceBase
     */
    public readonly appEvent = AppEvent.getInstance();

    /**
     * 退出登录
     *
     * @param {string} [redirect]
     * @memberof AppServiceBase
     */
    async logout(redirect?: string): Promise<void> {
        // 如果是CAS模式，调用后台登出
        if (Environment.LoginMode.toUpperCase() === 'CAS') {
            try {
                await Http.getInstance().get('/v7/casproxylogout', {}, false);
            } catch (err) {
                console.log(err);
            }
        }
        this.doLogin(null, redirect, false);
    }

    /**
     * 去登录
     *
     * @param {*} [data]
     * @param {string} [redirect=location.href]
     * @return {*}  {void}
     * @memberof AppServiceBase
     */
    async doLogin(data?: any, redirect: string = location.href, isLogin = true): Promise<void> {
        const win: any = window;
        if (win.isDoLogin) {
            return;
        }
        // 清除user、token和cookie
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
        }
        this.clearToken();
        if (
            data &&
            data.loginurl &&
            !Object.is(data.loginurl, '') &&
            data.originurl &&
            !Object.is(data.originurl, '')
        ) {
            let _url = encodeURIComponent(encodeURIComponent(location.href));
            let loginUrl: string = data.loginurl;
            const originUrl: string = data.originurl;

            if (originUrl.indexOf('?') === -1) {
                _url = `${encodeURIComponent('?RU=')}${_url}`;
            } else {
                _url = `${encodeURIComponent('&RU=')}${_url}`;
            }
            loginUrl = `${loginUrl}${_url}`;
            location.href = loginUrl;
        } else {
            // 后期此处应调用后天退出，明确可以退出后才退出
            if (Environment.LoginMode.toUpperCase() === 'UAA') {
                location.href = `${Environment.LoginUrl}?redirect=${encodeURIComponent(redirect)}`;
            } else if (Environment.LoginMode.toUpperCase() === 'CAS') {
                let pathname = location.pathname;
                if (pathname.endsWith('/') || pathname.endsWith('.html')) {
                    pathname = pathname.substring(0, pathname.lastIndexOf('/'));
                }
                if (isLogin) {
                    location.href = `${Environment.CasUrl}/login?service=${encodeURIComponent(
                        `${location.origin}${pathname}/cas-login.html?RU=${encodeURIComponent(location.href)}`,
                    )}`;
                } else {
                    location.href = `${Environment.CasUrl}/logout?service=${encodeURIComponent(
                        `${Environment.CasUrl}/login?service=${encodeURIComponent(
                            `${location.origin}${pathname}/cas-login.html?RU=${encodeURIComponent(location.href)}`,
                        )}`,
                    )}`;
                }
            } else {
                location.href = `${location.origin}${location.pathname}#/login?redirect=${encodeURIComponent(
                    redirect,
                )}`;
                setTimeout(() => {
                    location.reload();
                }, 100);
            }
            const x = document.getElementById('app-loading-x');
            if (x) {
                x.style.display = 'block';
            }
        }
        win.isDoLogin = true;
    }

    /**
     * 设置token
     *
     * @param {string} token
     * @memberof AppServiceBase
     */
    public setToken(token: string): void {
        Util.setCookie('ibzuaa-token', token, 7, true);
    }

    /**
     * 获取token
     *
     * @return {*}  {string}
     * @memberof AppServiceBase
     */
    public getToken(): string {
        return Util.getCookie('ibzuaa-token');
    }

    /**
     * 清楚token
     *
     * @memberof AppServiceBase
     */
    public clearToken(): void {
        Util.clearCookie('ibzuaa-token', true);
    }

    /**
     * 刷新token
     *
     * @private
     * @param {*} [data={}]
     * @memberof AppServiceBase
     */
    public refreshToken(data: any = {}): void {
        if (data && data.config && data.config.url == '/uaa/refreshToken') {
            return;
        }
        Http.getInstance()
            .post('/uaa/refreshToken', this.getToken(), false)
            .then((response: any) => {
                if (response && response.status === 200) {
                    const data = response.data;
                    if (data) {
                        this.setToken(data);
                    }
                } else {
                    console.log('刷新token出错');
                }
            })
            .catch((error: any) => {
                console.log('刷新token出错');
            });
    }
}
