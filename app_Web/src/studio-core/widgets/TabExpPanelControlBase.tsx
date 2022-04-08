import { ExpControlBase } from './ExpControlBase';

/**
 * 分页导航面板部件控制器
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {ControlBase}
 */
export class TabExpPanelControlBase extends ExpControlBase {
    /**
     * 行为参数
     *
     * @protected
     * @type {*}
     * @memberof TabExpPanelControlBase
     */
    protected action: any = '';

    /**
     * 当前激活分页面板项
     *
     * @protected
     * @type {string}
     * @memberof TabExpPanelControlBase
     */
    protected activatedTabViewPanel: string = '';

    /**
     * 所有面板项是否初始化状态管理
     *
     * @protected
     * @type {*}
     * @memberof TabExpPanelControlBase
     */
    protected isInit: any = {};

    /**
     * 分页面板权限标识存储对象
     *
     * @protected
     * @type {*}
     * @memberof TabExpPanelControlBase
     */
    protected authResourceObject: any = {};

    /**
     * 实体权限服务对象
     *
     * @protected
     * @type {*}
     * @memberof TabExpPanelControlBase
     */
    protected appAuthService: any = null;

    /**
     * 界面UI服务
     *
     * @type {*}
     * @memberof TabExpPanelControlBase
     */
    public appUIService: any = null;

    /**
     * 分页视图面板数据变更
     *
     * @protected
     * @memberof TabExpPanelControlBase
     */
    protected tabViewPanelDatasChange = (): void => {
        this.counterRefresh();
    };

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof TabExpPanelControlBase
     */
    protected ctrlCreated(): void {
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is(action, 'loadmodel')) {
                    this.computedAuthPanel(data);
                } else {
                    this.action = action;
                    this.viewState.next({ tag: this.activatedTabViewPanel, action: action, data: data });
                    this.$forceUpdate();
                }
            });
        }
    }

    /**
     * 部件挂载完毕
     *
     * @protected
     * @memberof TabExpPanelControlBase
     */
    protected ctrlMounted(): void {
        if (this.viewparams && this.viewparams.srftabactivate) {
            const activate = this.viewparams.srftabactivate.toLowerCase();
            if (activate && this.isInit[activate] !== undefined) {
                for (const key in this.isInit) {
                    if (this.isInit.hasOwnProperty(key)) {
                        this.isInit[key] = false;
                    }
                }
                this.$nextTick(() => {
                    this.tabPanelClick(activate);
                });
            }
        }
    }

    /**
     * 分页面板选中
     *
     * @protected
     * @param {*} $event
     * @returns
     * @memberof TabExpPanelControlBase
     */
    protected tabPanelClick($event: any): void {
        if (!$event) {
            return;
        }
        this.isInit = [];
        this.isInit[$event] = true;
        if (!this.viewState) {
            return;
        }
        this.activatedTabViewPanel = $event;
        this.viewState.next({ tag: this.activatedTabViewPanel, action: this.action, data: this.context });
    }

    /**
     * 计算分页面板权限
     *
     * @param {*} data
     * @return {*}
     * @memberof TabExpPanelControlBase
     */
    public computedAuthPanel(data: any) {
        if (!data || Object.keys(data).length === 0) {
            return;
        }
        if (this.authResourceObject && Object.keys(this.authResourceObject).length > 0) {
            Object.keys(this.authResourceObject).forEach((key: string) => {
                if (this.authResourceObject[key] && this.authResourceObject[key]['dataaccaction']) {
                    let tempUIAction: any = this.$util.deepCopy(this.authResourceObject[key]);
                    let result: any[] = this.$viewTool.calcActionItemAuthState(data, [tempUIAction], this.appUIService);
                    this.authResourceObject[key].visible = this.computedPanelWithResource(key, tempUIAction.visible);
                    this.authResourceObject[key].disabled = this.computedPanelWithResource(key, tempUIAction.disabled);
                }
            });
            const keys: any = Object.keys(this.authResourceObject);
            if (!this.authResourceObject[this.activatedTabViewPanel].visible) {
                for (let i = 0; i < keys.length; i++) {
                    if (this.authResourceObject[keys[i]].visible) {
                        this.tabPanelClick(keys[i]);
                        return;
                    }
                }
            }
        }
    }

    /**
     * 合入统一资源权限
     *
     * @param {string} name
     * @param {boolean} mainState
     * @return {*}
     * @memberof TabExpPanelControlBase
     */
    public computedPanelWithResource(name: string, mainState: boolean) {
        if (!this.$store.getters['authresource/getEnablePermissionValid']) return mainState === false ? false : true;
        if (!this.authResourceObject[name]) return mainState === false ? false : true;
        const resourceAuth: boolean = this.appAuthService?.getResourcePermission(
            this.authResourceObject[name]['resourcetag']
        );
        return !resourceAuth ? false : mainState ? true : false;
    }
}
