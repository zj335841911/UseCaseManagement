import { Vue, Component, Watch } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';
import * as dd from 'dingtalk-jsapi';
import { Util } from '@/utils';
import { AppService } from '@/studio-core';
import './login.less';

/**
 * 登录页面
 *
 * @export
 * @class Login
 * @extends {Vue}
 */
@Component({})
export default class Login extends Vue {

    /**
     * 表单对象
     *
     * @type {*}
     * @memberof Login
     */
    public form = { loginname: Environment.defaultLogin, password: Environment.defaultPwd };

    /**
     * 登录提示语
     *
     * @type {*}
     * @memberof Login
     */
    public loginTip: any = "";

    /**
     * 按钮可点击
     *
     * @type {*}
     * @memberof Login
     */
    public canClick: any = true;

    /**
     * 应用名称
     *
     * @type {string}
     * @memberof Login
     */
    public appTitle: string = Environment.AppTitle;

    /**
     * 值规则
     *
     * @type {*}
     * @memberof Login
     */
    public rules: any = {};

    /**
     * 应用服务
     *
     * @private
     * @memberof Login
     */
    private appService = new AppService();

    /**
     * 设置值规则
     *
     * @memberof Login
     */
    public setRules() {
        this.rules = {
            loginname: [
                { required: true, message: this.$t('components.login.loginname.message'), trigger: 'change' },
            ],
            password: [
                { required: true, message: this.$t('components.login.password.message'), trigger: 'change' },
            ]
        }
    };

    /**
     * 生命周期Create
     *
     * @memberof Login
     */
    public created() {
        this.setRules();
        const info: string = window.navigator.userAgent.toUpperCase();
        if (info.indexOf('DINGTALK') !== -1) {
            this.checkDingDing();
        }
    }

    /**
     * 组件挂载完毕
     *
     * @memberof Login
     */
    public mounted() {
        setTimeout(() => {
            const el = document.getElementById('app-loading-x');
            if (el) {
                el.style.display = 'none';
            }
        }, 300);
        addEventListener('keydown', this.onKeyDown);
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        if(token){
            localStorage.removeItem("token");
        }
        if(user){
            localStorage.removeItem("user");
        }
    }

    /**
     * 组件销毁
     *
     * @memberof Login
     */
    public destroyed(): void {
        removeEventListener('keydown', this.onKeyDown);
    }

    /**
     * 按键
     *
     * @memberof Login
     */
    public onKeyDown = (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
            this.handleSubmit();
        }
    }

    /**
     * 监听语言变化
     *
     * @memberof Login
     */
    @Watch('$i18n.locale')
    public onLocaleChange() {
        this.setRules();
    }

    /**
     * 登陆处理
     *
     * @memberof Login
     */
    public handleSubmit(): void {
        if (!isExistAndNotEmpty(this.form.loginname) || !isExistAndNotEmpty(this.form.password)) {
            return;
        }
        this.appService.clearToken();

        const form: any = this.$refs.loginForm;
        let validatestate: boolean = true;
        form.validate((valid: boolean) => {
            validatestate = valid ? true : false;
        });
        if (!validatestate) {
            return;
        }
        const post: Promise<any> = this.$http.post('/v7/login', this.form, true);
        post.then((response: any) => {
            if (response && response.status === 200) {
                const data = response.data;
                if (data && data.token) {
                    this.appService.setToken(data.token);
                }
                // 设置cookie,保存账号密码7天
                Util.setCookie("loginname", this.form.loginname, 7);
                // 页面回跳
                if (this.$route.query.redirect) {
                    window.location.href = decodeURIComponent((this.$route.query.redirect as any));
                    location.reload();
                } else {
                    this.$router.push({ path: '/' });
                }
            }
        }).catch((error: any) => {
            // 登录提示
            const data = error.data;
            if (data && data.message) {
                this.loginTip = data.message;
                this.$Message.error({
                    content: "登录失败，" + data.message,
                    duration: 5,
                    closable: true
                });
            } else {
                this.$Message.error({
                    content: "登录失败",
                    duration: 5,
                    closable: true
                });
            }
        });

    }

    /**
     * 重置页面
     * 
     * @memberof Login
     */
    public goReset(): void {
        this.form = { loginname: '', password: '' };
    }

    /**
     * 验证钉钉登录
     *
     * @memberof Login
     */
    public async checkDingDing() {
        const access_token: any = await this.$http.get(`/uaa/open/dingtalk/access_token`);
        if (access_token.status == 200 && access_token.data && access_token.data.regionid) {
            const res: any = await dd.runtime.permission.requestAuthCode({ corpId: access_token.data.regionid });
            if (res && res.code) {
                const userInfo: any = await this.$http.get(`/uaa/open/dingtalk/auth/${res.code}`);
                if (userInfo.status == 200 && userInfo.data.token && userInfo.data.user) {
                    this.appService.setToken(userInfo.data.token);
                    Util.setCookie("loginname", userInfo.data.user.loginname, 7);
                    // 页面回跳
                    if (this.$route.query.redirect) {
                        window.location.href = decodeURIComponent((this.$route.query.redirect as any));
                        location.reload();
                    } else {
                        this.$router.push({ path: '/' });
                    }
                } else {
                    this.$Message.error({
                        content: userInfo.data.message,
                        duration: 5,
                        closable: true
                    });
                }
            } else {
                this.$Message.error({
                    content: "钉钉用户信息获取失败",
                    duration: 5,
                    closable: true
                });
            }
        } else {
            this.$Message.error({
                content: "获取企业id失败",
                duration: 5,
                closable: true
            });
        }
    }

    /**
     * 游客访问
     *
     * @memberof Login
     */
    public visitorSubmit() {
        const post: Promise<any> = this.$http.post('/login/guest', this.form, true);
        post.then((response: any) => {
            if (response && response.status === 200) {
                const data = response.data;
                if (data && data.token) {
                    this.appService.setToken(data.token);
                }
                // 设置cookie,保存账号密码7天
                Util.setCookie("loginname", this.form.loginname, 7);
                // 页面回跳
                if (this.$route.query.redirect) {
                    window.location.href = decodeURIComponent((this.$route.query.redirect as any));
                    location.reload();
                } else {
                    this.$router.push({ path: '/' });
                }
            }
        }).catch((error: any) => {
            // 登录提示
            const data = error.data;
            if (data && data.message) {
                this.loginTip = data.message;
                this.$Message.error({
                    content: "登录失败，" + data.message,
                    duration: 5,
                    closable: true
                });
            } else {
                this.$Message.error({
                    content: "登录失败",
                    duration: 5,
                    closable: true
                });
            }
        });
    }

    /**
     * 绘制
     *
     * @memberof Login
     */
    public render(): any {
        return <div class="ibiz-login">
            <row class="content">
                <i-col class="left" span="14">
                    <figure class="figure pattern-svg"><svg xmlns="http://www.w3.org/1999/xlink" width="690px" height="519px"><path fill-rule="evenodd" opacity="0.412" fill="rgb(255, 255, 255)" d="M0.010,293.142 L7.857,289.009 L11.990,296.857 L4.142,300.989 L0.010,293.142 Z"></path><path fill-rule="evenodd" opacity="0.6" fill="rgb(255, 255, 255)" d="M680.839,148.992 L689.997,154.833 L684.156,163.991 L674.998,158.149 L680.839,148.992 Z"></path><path fill-rule="evenodd" opacity="0.2" fill="rgb(255, 255, 255)" d="M145.500,508.000 C148.538,508.000 151.000,510.462 151.000,513.500 C151.000,516.538 148.538,519.000 145.500,519.000 C142.462,519.000 140.000,516.538 140.000,513.500 C140.000,510.462 142.462,508.000 145.500,508.000 Z"></path><path fill-rule="evenodd" opacity="0.302" fill="rgb(255, 255, 255)" d="M633.500,357.000 C635.985,357.000 638.000,359.015 638.000,361.500 C638.000,363.985 635.985,366.000 633.500,366.000 C631.015,366.000 629.000,363.985 629.000,361.500 C629.000,359.015 631.015,357.000 633.500,357.000 Z"></path><path fill-rule="evenodd" opacity="0.8" fill="rgb(255, 255, 255)" d="M574.672,8.047 L583.310,0.211 L585.650,11.982 L574.672,8.047 Z"></path><path fill-rule="evenodd" opacity="0.6" fill="rgb(255, 255, 255)" d="M140.000,18.000 C141.657,18.000 143.000,19.343 143.000,21.000 C143.000,22.657 141.657,24.000 140.000,24.000 C138.343,24.000 137.000,22.657 137.000,21.000 C137.000,19.343 138.343,18.000 140.000,18.000 Z"></path></svg></figure>
                    <div class="title">
                        <strong class="super-lead color--white">
                            富强、民主、文明、和谐<br />
                            自由、平等、公正、法治<br />
                            爱国、敬业、诚信、友善
                        </strong>
                    </div>
                </i-col>
                <i-col class="right" span="10">
                    <div class="login-wrapper">
                        <layout>
                            <i-header>
                                <img src="./assets/img/logo.png" alt="https://www.ibizlab.cn/" />
                                <div class="title">{this.appTitle}</div>
                            </i-header>
                            <i-content>
                                <h3>
                                    登录
                                    <span style="font-size:16px"> 没有帐号? <a title="暂未支持，敬请期待" disable href="javascript:void(0);">注册</a> </span>
                                </h3>
                                <div class="login-content">
                                    <i-form ref="loginForm">
                                        <form-item>
                                            <i-input v-model={this.form.loginname} placeholder="用户名"></i-input>
                                        </form-item>
                                        <form-item>
                                            <i-input v-model={this.form.password} type="password" placeholder="密码"></i-input>
                                        </form-item>
                                        <form-item class="forgot-password">
                                            <small>
                                                <a disable href="javascript:void(0);">忘记密码？</a>
                                            </small>
                                        </form-item>
                                        <form-item class="submit">
                                            <i-button type="primary" long size="large" on-click={() => this.handleSubmit()}>登录</i-button>
                                            <i-button type="info" long size="large" on-click={() => this.visitorSubmit()}>游客</i-button>
                                        </form-item>
                                    </i-form>
                                    <row class="external-account">
                                        <i-col class="top-line">
                                            <hr />
                                            <small>使用第三方帐号直接登录，免注册、更安全、更便捷</small>
                                        </i-col>
                                        <i-col class="icons">
                                            <a title="暂未支持，敬请期待" disable href="javascript:void(0);" class="pad-rgt social-login-link">
                                                <svg t="1595234081146" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1905" width="32" height="32"><path d="M64 64h429.2v429.2H64V64z m466.8 0H960v429.2H530.8V64zM64 530.8h429.2V960H64V530.8z m466.8 0H960V960H530.8V530.8z" p-id="1906"></path></svg>
                                            </a>
                                            <a title="暂未支持，敬请期待" disable href="javascript:void(0);" class="pad-rgt social-login-link">
                                                <svg t="1595234346490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2884" width="32" height="32"><path d="M347.8 794.8c0 4-4.6 7.2-10.4 7.2-6.6 0.6-11.2-2.6-11.2-7.2 0-4 4.6-7.2 10.4-7.2 6-0.6 11.2 2.6 11.2 7.2z m-62.2-9c-1.4 4 2.6 8.6 8.6 9.8 5.2 2 11.2 0 12.4-4s-2.6-8.6-8.6-10.4c-5.2-1.4-11 0.6-12.4 4.6z m88.4-3.4c-5.8 1.4-9.8 5.2-9.2 9.8 0.6 4 5.8 6.6 11.8 5.2 5.8-1.4 9.8-5.2 9.2-9.2-0.6-3.8-6-6.4-11.8-5.8zM505.6 16C228.2 16 16 226.6 16 504c0 221.8 139.6 411.6 339 478.4 25.6 4.6 34.6-11.2 34.6-24.2 0-12.4-0.6-80.8-0.6-122.8 0 0-140 30-169.4-59.6 0 0-22.8-58.2-55.6-73.2 0 0-45.8-31.4 3.2-30.8 0 0 49.8 4 77.2 51.6 43.8 77.2 117.2 55 145.8 41.8 4.6-32 17.6-54.2 32-67.4-111.8-12.4-224.6-28.6-224.6-221 0-55 15.2-82.6 47.2-117.8-5.2-13-22.2-66.6 5.2-135.8 41.8-13 138 54 138 54 40-11.2 83-17 125.6-17s85.6 5.8 125.6 17c0 0 96.2-67.2 138-54 27.4 69.4 10.4 122.8 5.2 135.8 32 35.4 51.6 63 51.6 117.8 0 193-117.8 208.4-229.6 221 18.4 15.8 34 45.8 34 92.8 0 67.4-0.6 150.8-0.6 167.2 0 13 9.2 28.8 34.6 24.2C872.4 915.6 1008 725.8 1008 504 1008 226.6 783 16 505.6 16zM210.4 705.8c-2.6 2-2 6.6 1.4 10.4 3.2 3.2 7.8 4.6 10.4 2 2.6-2 2-6.6-1.4-10.4-3.2-3.2-7.8-4.6-10.4-2z m-21.6-16.2c-1.4 2.6 0.6 5.8 4.6 7.8 3.2 2 7.2 1.4 8.6-1.4 1.4-2.6-0.6-5.8-4.6-7.8-4-1.2-7.2-0.6-8.6 1.4z m64.8 71.2c-3.2 2.6-2 8.6 2.6 12.4 4.6 4.6 10.4 5.2 13 2 2.6-2.6 1.4-8.6-2.6-12.4-4.4-4.6-10.4-5.2-13-2z m-22.8-29.4c-3.2 2-3.2 7.2 0 11.8 3.2 4.6 8.6 6.6 11.2 4.6 3.2-2.6 3.2-7.8 0-12.4-2.8-4.6-8-6.6-11.2-4z" p-id="2885"></path></svg>
                                            </a>
                                            <a title="暂未支持，敬请期待" disable href="javascript:void(0);" class="pad-rgt social-login-link">
                                                <svg t="1594819177569" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7719" width="38" height="38"><path d="M785.066667 725.333333c-4.266667 55.466667-29.866667 106.666667-72.533334 140.8 38.4 17.066667 93.866667 34.133333 93.866667 72.533334H217.6c0-34.133333 55.466667-55.466667 89.6-72.533334-38.4-38.4-64-89.6-72.533333-140.8v-17.066666l-72.533334 72.533333c-17.066667 17.066667-34.133333 17.066667-34.133333-38.4 0-34.133333 110.933333-302.933333 110.933333-302.933333v-85.333334c4.266667-153.6 128-273.066667 281.6-268.8 145.066667 4.266667 260.266667 119.466667 264.533334 264.533334v89.6s110.933333 268.8 110.933333 302.933333c0 55.466667-17.066667 55.466667-38.4 34.133333-55.466667-51.2-72.533333-72.533333-72.533333-72.533333v21.333333z" p-id="7720"></path></svg>
                                            </a>
                                            <a title="暂未支持，敬请期待" disable href="javascript:void(0);" class="pad-rgt social-login-link">
                                                <svg t="1594819126700" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6944" width="38" height="38"><path d="M331.446857 263.424c0-31.414857-20.553143-52.004571-52.004571-52.004571-30.866286 0-62.281143 20.553143-62.281143 52.004571 0 30.866286 31.414857 51.419429 62.281143 51.419429 31.414857 0 52.004571-20.553143 52.004571-51.419429z m424.557714 289.718857c0-20.553143-20.553143-41.142857-52.004571-41.142857-20.553143 0-41.142857 20.553143-41.142857 41.142857 0 21.138286 20.553143 41.728 41.142857 41.728 31.414857 0 52.004571-20.553143 52.004571-41.728z m-134.875428-289.718857c0-31.414857-20.553143-52.004571-51.419429-52.004571-31.414857 0-62.281143 20.553143-62.281143 52.004571 0 30.866286 30.866286 51.419429 62.281143 51.419429 30.866286 0 51.419429-20.553143 51.419429-51.419429z m362.861714 289.718857c0-20.553143-21.138286-41.142857-52.004571-41.142857-20.553143 0-41.142857 20.553143-41.142857 41.142857 0 21.138286 20.553143 41.728 41.142857 41.728 30.866286 0 52.004571-20.553143 52.004571-41.728zM832 326.290286a306.285714 306.285714 0 0 0-40.009143-2.304c-196.571429 0-352 146.870857-352 327.424 0 30.281143 4.571429 59.428571 13.129143 86.857143-13.129143 1.133714-25.709714 1.718857-38.838857 1.718857-52.004571 0-93.147429-10.276571-145.152-20.553143l-144.566857 72.557714 41.142857-124.562286C62.281143 594.870857 0 501.138286 0 387.437714 0 190.281143 186.294857 35.437714 414.281143 35.437714c203.446857 0 382.281143 124.013714 417.718857 290.852572zM1170.285714 646.838857c0 93.147429-61.696 176.018286-145.152 238.299429l31.414857 103.424-113.700571-62.281143c-41.728 10.276571-83.419429 21.138286-124.562286 21.138286-197.156571 0-352-134.838857-352-300.580572s154.843429-300.580571 352-300.580571c186.294857 0 352 134.838857 352 300.580571z" p-id="6945"></path></svg>
                                            </a>
                                            <a title="暂未支持，敬请期待" disable href="javascript:void(0);" class="pad-rgt social-login-link">
                                                <svg t="1595234546485" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4802" width="32" height="32"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="4803"></path></svg>
                                            </a>
                                            <a title="暂未支持，敬请期待" disable href="javascript:void(0);" class="pad-rgt social-login-link">
                                                <svg t="1595234675796" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5636" width="32" height="32"><path d="M860.16 0C950.272 0 1024 73.889684 1024 164.163368v531.509895s-32.768-4.122947-180.224-53.355789c-40.96-14.362947-96.256-34.896842-157.696-57.478737 36.864-63.595789 65.536-137.485474 86.016-215.444211h-202.752v-71.841684h247.808V256.512h-247.808V135.437474h-100.352c-18.432 0-18.432 18.458947-18.432 18.458947v104.663579H200.704v41.040842h249.856v69.793684H243.712v41.013895H645.12c-14.336 51.307789-34.816 98.519579-57.344 141.608421-129.024-43.115789-268.288-77.985684-356.352-55.403789-55.296 14.362947-92.16 38.992842-112.64 63.595789-96.256 116.978526-26.624 295.504842 176.128 295.504842 120.832 0 237.568-67.718737 327.68-178.526316C757.76 742.858105 1024 853.692632 1024 853.692632v6.144C1024 950.110316 950.272 1024 860.16 1024H163.84C73.728 1024 0 950.137263 0 859.836632V164.163368C0 73.889684 73.728 0 163.84 0h696.32zM268.126316 553.121684c93.049263-10.374737 180.062316 26.974316 283.270737 78.874948-74.886737 95.501474-165.941895 155.701895-256.970106 155.701894-157.830737 0-204.368842-126.652632-125.466947-197.200842 26.300632-22.851368 72.838737-35.301053 99.166316-37.376z" p-id="5637"></path></svg>
                                            </a>
                                            <a title="暂未支持，敬请期待" disable href="javascript:void(0);" class="pad-rgt social-login-link">
                                                <svg t="1595234733956" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6555" width="32" height="32"><path d="M757.142721 501.400594c-39.591717-7.653307-20.312628-28.559453-20.312628-28.559453s38.734186-63.074547-7.748475-108.983133c-57.487296-56.781214-197.431581 7.147794-197.431581 7.147794-53.370535 16.314571-39.249933-7.482415-31.680537-47.948035 0-47.772027-16.524348-128.522142-158.877497-80.923054C198.914864 290.249547 76.868203 458.387965 76.868203 458.387965-7.990486 570.08286 3.20039 656.447856 3.20039 656.447856c21.168112 190.756555 226.526223 243.119133 386.265344 255.530814 168.005388 12.925381 394.875442-57.126069 463.552591-201.294562C921.87353 566.341652 796.904307 509.221724 757.142721 501.400594L757.142721 501.400594 757.142721 501.400594zM401.854902 858.254072c-166.79891 7.649214-301.746392-74.803683-301.746392-184.631044 0-110.0003 134.947482-198.066031 301.746392-205.720362 166.972872-7.648191 302.098409 60.3546 302.098409 170.011068C703.952288 747.57532 568.827775 850.77268 401.854902 858.254072L401.854902 858.254072 401.854902 858.254072zM368.636337 540.16548C200.803887 559.543829 220.253868 714.597231 220.253868 714.597231s-1.718131 49.133024 44.930305 74.125231c98.114598 52.534494 199.326744 20.739347 250.279207-44.37465C566.587758 679.404708 536.642748 520.948813 368.636337 540.16548L368.636337 540.16548 368.636337 540.16548zM326.291926 757.948575c-31.329543 3.568269-56.631812-14.286378-56.631812-40.127929 0-25.669636 22.372543-52.702316 53.702086-55.930847 35.980469-3.400446 59.387575 17.003256 59.387575 43.012629C382.923738 730.578204 357.447507 754.379283 326.291926 757.948575L326.291926 757.948575 326.291926 757.948575zM425.268148 674.813133c-10.673084 7.816013-23.750937 6.79987-29.265534-2.716878-5.847172-9.188266-3.613294-23.810289 7.059789-31.456433 12.394285-9.184173 25.303292-6.459109 30.981618 2.717901C439.558619 652.538827 435.596378 666.647149 425.268148 674.813133L425.268148 674.813133 425.268148 674.813133zM838.903863 434.247148c13.596669 0 24.959461-9.862625 27.027563-22.780843 0.171915-1.023306 0.336668-1.871627 0.336668-2.894933 20.48966-181.740204-150.95506-150.455687-150.95506-150.455687-15.146978 0-27.370371 12.06785-27.370371 27.370371 0 14.963807 12.223393 27.031657 27.370371 27.031657 123.07406-26.864858 96.051613 94.691639 96.051613 94.691639C811.194778 422.173159 823.585993 434.247148 838.903863 434.247148L838.903863 434.247148 838.903863 434.247148zM818.939159 117.002784c-59.214636-13.769608-120.323413-1.868557-137.364531 1.354857-1.379417 0.172939-2.579755 1.36816-3.78521 1.533936-0.51677 0.172939-1.033539 0.677429-1.033539 0.677429-16.865109 4.764514-29.089525 20.060895-29.089525 38.255279 0 21.589714 17.724687 39.438221 39.932478 39.438221 0 0 21.516036-2.888793 36.152385-8.498558 14.452153-5.77554 137.355321-4.246721 198.287065 96.737228 33.232892 73.785493 14.637372 123.091456 12.229532 131.079384 0 0-7.92039 19.215644-7.92039 38.08234 0 21.762653 17.73185 35.536354 39.932478 35.536354 18.421558 0 33.913391-2.550079 38.388309-33.32192l0.171915 0C1070.594713 242.472404 924.969031 141.315516 818.939159 117.002784L818.939159 117.002784 818.939159 117.002784z" p-id="6556"></path></svg>
                                            </a>
                                            <a title="暂未支持，敬请期待" disable href="javascript:void(0);" class="pad-rgt social-login-link">
                                                <svg t="1595234818377" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7054" width="32" height="32"><path d="M706.975647 794.391579V389.422244c0-92.01467-74.570369-166.618808-166.574807-166.618809H72.149227c-3.610224 0-6.535857 2.90926-6.535857 6.482645v565.101405c0 3.573385 2.924609 6.469342 6.535857 6.469342h125.074623c3.611248 0 6.531763-2.911306 6.531764-6.505157V350.813924c0-3.601015 2.924609-6.522554 6.535856-6.522554h268.962732c50.507324 0 91.466178 40.939411 91.466178 91.452875v358.594122c0 3.597945 2.920516 6.502088 6.513344 6.502087H700.467419c3.584642 0 6.513344-2.902096 6.513344-6.469342l-0.005116 0.020467z m-252.57653-0.044003a6.492878 6.492878 0 0 1-6.50925 6.509251H322.844919c-3.611248 0-6.535857-2.911306-6.535857-6.509251V454.467679c0-3.597945 2.924609-6.51846 6.535857-6.518461h125.044948a6.503111 6.503111 0 0 1 6.50925 6.518461V794.364973v-0.017397m500.045737 0c0 3.601015-2.928702 6.509251-6.538926 6.509251H822.889633c-3.620457 0-6.564509-2.911306-6.564509-6.509251V229.346455c0-3.614317 2.944052-6.531763 6.564509-6.531763h125.016295a6.528694 6.528694 0 0 1 6.538926 6.531763v565.001121" p-id="7055"></path></svg>
                                            </a>
                                        </i-col>
                                        <i-col class="bottom-line">
                                            <hr />
                                        </i-col>
                                    </row>
                                </div>
                            </i-content>
                            <i-footer>
                                <small>Copyright 2017-2020 埃毕致（上海）云计算科技有限公司版权所有</small>
                            </i-footer>
                        </layout>
                    </div>
                </i-col>
            </row>
        </div>;
    }

}