import { Vue, Emit, Prop, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Util } from '@/utils';

/**
 * 视图基类
 *
 * @export
 * @class ViewBase
 * @extends {Vue}
 */
export class ViewBase extends Vue {
    /**
     * 视图状态通知对象
     *
     * @type {Subject<ViewState>}
     * @memberof ViewBase
     */
    public viewState: Subject<ViewState> = new Subject();

    /**
     * 是否显示信息栏
     *
     * @memberof ViewBase
     */
    isShowDataInfoBar = false;

    /**
     * 视图标题
     *
     * @readonly
     * @type {string}
     * @memberof ViewBase
     */
    get viewCaption(): string {
        if (this.isShowDataInfoBar && isExistAndNotEmpty(this.model.dataInfo)) {
            return `${this.model.srfCaption}：${this.model.dataInfo}`;
        }
        return this.model.srfCaption;
    }

    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
    protected appDeName: string = '';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
    protected appDeKey: string = '';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
    protected appDeMajor: string = '';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
    protected dataControl: string = '';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
    protected viewName: string = '';

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected model: any = {
        srfTitle: null,
        srfCaption: null,
        srfSubTitle: null,
        dataInfo: null,
    };

    /**
     * 在消息中心订阅的本地消息实例标识
     *
     * @protected
     * @type {string[]}
     * @memberof ViewBase
     */
    protected accLocalTags: string[] = [];

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ViewBase
     */
    @Emit()
    public viewDatasChange(val: any): any {
        return val;
    }

    /**
     * 门户部件状态对象
     *
     * @type {*}
     * @memberof ViewBase
     */
    @Prop()
    public portletState?: any;

    /**
     * 门户部件状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof ViewBase
     */
    public portletStateEvent: Subscription | undefined;

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof ViewBase
     */
    @Prop()
    public viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof ViewBase
     */
    @Prop()
    public viewparam!: string;

    /**
     * 导航嵌入模式激活状态
     *
     * @type {boolean}
     * @memberof ViewBase
     */
    @Prop({ default: true })
    public expActive!: boolean;

    /**
     * 导航激活状态变更
     *
     * @memberof ViewBase
     */
    @Watch('expActive', { immediate: true })
    public watchExpActive(): void {
        if (this.viewUsage === 7) {
            if (this.expActive) {
                this.$appService.viewStore.push(this);
            } else {
                this.$appService.viewStore.pop(this);
            }
        }
    }

    /**
     * 是否为默认模式，默认模式为导航模式
     *
     * @type {boolean}
     * @memberof ViewBase
     */
    @Prop({ default: true })
    public viewDefaultUsage!: boolean;

    /**
     * 视图使用模式
     *
     * @type {(1 | 2 | 4 | 7)} 1：路由模式；2：模态模式；4：嵌入模式；7：导航嵌入模式，如「分页导航、树导航等」内嵌入使用的视图
     * @memberof ViewBase
     */
    @Prop({ default: 1 })
    public viewUsage!: 1 | 2 | 4 | 7;

    /**
     * 快速搜索值
     *
     * @readonly
     * @type {string}
     * @memberof ViewBase
     */
    protected query: string = '';

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ViewBase
     */
    public readonly context: any = {};

    /**
     * 视图参数
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected viewparams: any = {};

    /**
     * 视图标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
    protected viewtag: string = '';

    /**
     * 视图默认引擎
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected engine: any = null;

    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {any[]}
     * @memberof ViewBase
     */
    protected counterServiceArray: any[] = [];

    /**
     * 自定义视图上下文
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected customViewNavContexts: any = {};

    /**
     * 自定义视图参数
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected customViewParams: any = {};

    /**
     * 部件模型
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected containerModel: any = {};

    /**
     * 是否为实体视图
     *
     * @protected
     * @type {boolean}
     * @memberof ViewBase
     */
    protected isDeView: boolean = true;

    /**
     * 是否存在实体视图控制关系
     *
     * @protected
     * @type {boolean}
     * @memberof ViewBase
     */
    protected isPsDer1n: boolean = false;

    /**
     * 表单嵌入视图
     *
     * @protected
     * @type {Subject<any>}
     * @memberof GridViewBase
     */
    @Prop()
    protected formDruipart?: Subject<any>;

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ViewBase
     */
    @Watch('viewparam', { immediate: true, deep: true })
    public onParamData(newVal: any, oldVal: any): void {
        if (newVal) {
            for (let key in this.viewparams) {
                delete this.viewparams[key];
            }
            if (typeof this.viewparam == 'string') {
                Object.assign(this.viewparams, JSON.parse(this.viewparam));
            }
        }
    }

    /**
     * 视图参数变更
     *
     * @protected
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ViewBase
     */
    protected viewParamChange(newVal: any, oldVal: any): void {}

    /**
     * 处理应用上下文变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ViewBase
     */
    @Watch('viewdata')
    public onViewData(newVal: any, oldVal: any): void {
        if (!Object.is(newVal, oldVal)) {
            this.$nextTick(() => {
                this.parseViewParam();
                this.viewDataChange(newVal, oldVal);
                if (this.engine) {
                    this.engine.load();
                } else {
                    this.refresh();
                }
            });
        }
    }

    /**
     * 视图上下文变化
     *
     * @protected
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ViewBase
     */
    protected viewDataChange(newVal: any, oldVal: any): void {}

    /**
     * 当前组件是否已激活
     *
     * @protected
     * @type {boolean}
     * @memberof ViewBase
     */
    protected isActive: boolean = true;

    /**
     * keep-alive缓存激活时调用
     *
     * @memberof ViewBase
     */
    public activated(): void {
        this.isActive = true;
    }

    /**
     * keep-alive缓存时调用
     *
     * @memberof ViewBase
     */
    public deactivated(): void {
        this.isActive = false;
    }

    /**
     * 组件创建完毕
     *
     * @memberof ViewBase
     */
    public created(): void {
        if (this.viewUsage === 1 || this.viewUsage === 2) {
            this.$appService.viewStore.push(this);
        }
        const secondtag = Util.generateAppMajorKey().toString();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        if (this.viewUsage === 1) {
            this.$appService.navHistory.setViewTag(this.viewtag, this.$route);
        }
        this.parseViewParam();
        if (this.viewUsage === 1) {
            this.$appService.navHistory.setViewContext(this.context, this.viewtag);
        }
        if (this.model) {
            if (isExistAndNotEmpty(this.model.srfTitle)) {
                this.model.srfTitle = this.$t(this.model.srfTitle);
            }
            if (isExistAndNotEmpty(this.model.srfCaption)) {
                this.model.srfCaption = this.$t(this.model.srfCaption);
            }
            if (isExistAndNotEmpty(this.model.srfSubTitle)) {
                this.model.srfSubTitle = this.$t(this.model.srfSubTitle);
            }
        }
        if (this.portletState) {
            this.portletStateEvent = this.portletState.subscribe((res: any) => {
                if (!Object.is(res.tag, this.viewName)) {
                    return;
                }
                if (Object.is(res.action, 'refresh') && this.refresh && this.refresh instanceof Function) {
                    this.refresh();
                }
            });
        }
        this.viewCreated();
    }

    /**
     * 视图组件创建完毕
     *
     * @protected
     * @memberof ViewBase
     */
    protected viewCreated(): void {}

    /**
     * 组件挂载完毕
     *
     * @memberof ViewBase
     */
    @Emit('mounted')
    public mounted(): void {
        this.engineInit();
        this.loadModel();
        this.viewMounted();
    }

    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof ViewBase
     */
    protected viewMounted(): void {}

    /**
     * 组件销毁之前
     *
     * @memberof ViewBase
     */
    public beforeDestroy(): void {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * 组件销毁
     *
     * @memberof ViewBase
     */
    public destroyed(): void {
        this.$appService.viewStore.pop(this);
        if (this.viewDefaultUsage) {
            const regExp = new RegExp(`^${this.context.srfsessionid}_(.*)`);
            for (const key in localStorage) {
                if (regExp.test(key)) {
                    localStorage.removeItem(key);
                }
            }
        }
        this.accLocalTags.forEach((str: string) => {
            this.$acc.unsubscribeLocal(str);
        });
        // 销毁计数器定时器
        if (this.counterServiceArray && this.counterServiceArray.length > 0) {
            this.counterServiceArray.forEach((item: any) => {
                if (item.destroyCounter && item.destroyCounter instanceof Function) {
                    item.destroyCounter();
                }
            });
        }
        if (this.portletStateEvent) {
            this.portletStateEvent.unsubscribe();
        }
    }

    /**
     * 引擎初始化
     *
     * @protected
     * @memberof ViewBase
     */
    protected engineInit(): void {}

    /**
     * 加载视图默认模型
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof ViewBase
     */
    protected async loadModel(): Promise<void> {}

    /**
     * 计数器刷新
     *
     * @protected
     * @memberof ViewBase
     */
    protected counterRefresh(): void {
        if (this.counterServiceArray && this.counterServiceArray.length > 0) {
            this.counterServiceArray.forEach((item: any) => {
                if (item.refreshData && item.refreshData instanceof Function) {
                    item.refreshData();
                }
            });
        }
    }

    /**
     * 初始化视图参数
     *
     * @protected
     * @memberof ViewBase
     */
    protected parseViewParam(): void {
        this.context.clearAll();
        if (!this.viewDefaultUsage && this.viewdata && !Object.is(this.viewdata, '')) {
            if (this.$store.getters.getAppData() && this.$store.getters.getAppData().context) {
                Object.assign(this.context, this.$store.getters.getAppData().context);
            }
            if (typeof this.viewdata == 'string') {
                Object.assign(this.context, JSON.parse(this.viewdata));
            }
            if (this.context && this.context.srfparentdename) {
                Object.assign(this.viewparams, { srfparentdename: this.context.srfparentdename });
            }
            if (this.context && this.context.srfparentkey) {
                Object.assign(this.viewparams, { srfparentkey: this.context.srfparentkey });
            }
        } else {
            if (this.$store.getters.getAppData() && this.$store.getters.getAppData().context) {
                Object.assign(this.context, this.$store.getters.getAppData().context);
            }
            const path = this.$route.matched[this.$route.matched.length - 1].path;
            const keys: Array<any> = [];
            const curReg = this.$pathToRegExp.pathToRegexp(path, keys);
            const matchArray = curReg.exec(this.$route.path);
            const tempValue: Object = {};
            keys.forEach((item: any, index: number) => {
                Object.defineProperty(tempValue, item.name, {
                    enumerable: true,
                    value: matchArray[index + 1],
                });
            });
            this.$viewTool.formatRouteParams(tempValue, this.$route, this.context, this.viewparams);
            if (this.isDeView) {
                this.context.srfsessionid = this.$util.createUUID();
            }
        }
        if (this.isDeView && !isEmpty(this.appDeName)) {
            this.context.srfappdename = this.appDeName;
        }
        this.handleCustomViewData();
    }

    /**
     * 处理自定义视图参数
     *
     * @protected
     * @memberof ViewBase
     */
    protected handleCustomViewData(): void {
        if (this.isPsDer1n) {
            this.handleViewRes();
        }
        for (const key in this.customViewNavContexts) {
            if (this.customViewNavContexts.hasOwnProperty(key)) {
                const curNavContext = this.customViewNavContexts[key];
                this.handleCustomDataLogic(this.context, curNavContext, key.toLowerCase());
            }
        }
        for (const key in this.customViewParams) {
            if (this.customViewParams.hasOwnProperty(key)) {
                const curNavParam = this.customViewParams[key];
                this.handleCustomDataLogic(this.viewparams, curNavParam, key.toLowerCase());
            }
        }
    }

    /**
     * 处理自定义视图数据逻辑
     *
     * @protected
     * @param {*} curNavData
     * @param {*} tempData
     * @param {string} key
     * @memberof ViewBase
     */
    protected handleCustomDataLogic(data: any, curNavData: any, key: string): void {
        // 直接值直接赋值
        if (curNavData.isRawValue) {
            if (Object.is(curNavData.value, 'null') || Object.is(curNavData.value, '')) {
                data[key] = null;
            } else {
                data[key] = curNavData.value;
            }
        } else {
            const itemKey: string = curNavData.value.toLowerCase();
            // 先从导航上下文取数，没有再从导航参数（URL）取数，如果导航上下文和导航参数都没有则为null
            if (this.context[itemKey] != null) {
                data[key] = this.context[itemKey];
            } else if (this.viewparams[itemKey] != null) {
                data[key] = this.viewparams[itemKey];
            } else {
                data[key] = null;
            }
        }
    }

    /**
     * 处理指定视图控制关系将父键转为父实体上下文
     *
     * @protected
     * @memberof ViewBase
     */
    protected handleViewRes(): void {}

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ViewBase
     */
    public closeView(args: any[]): void {
        if (this.viewdata) {
            this.$emit('viewdataschange', [args]);
            this.$emit('close', [args]);
        } else if (this.$tabPageExp) {
            const item = this.$appService.navHistory.findHistoryByTag(this.viewtag);
            this.$tabPageExp.onClose(item);
        } else {
            this.$router.back();
            this.$appService.navHistory.pop();
        }
    }

    /**
     * 刷新
     *
     * @memberof ViewBase
     */
    public refresh(args?: any): void {
        const refs: any = this.$refs;
        if (refs && this.dataControl && refs[this.dataControl]) {
            refs[this.dataControl].refresh();
        }
    }
}
