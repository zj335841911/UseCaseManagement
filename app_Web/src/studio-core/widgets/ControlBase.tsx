import { Vue, Prop } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';

/**
 * 部件基类
 *
 * @export
 * @class ControlBase
 * @extends {Vue}
 */
export class ControlBase extends Vue {
    /**
     * 名称
     *
     * @type {string}
     * @memberof ControlBase
     */
    @Prop()
    public name!: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ControlBase
     */
    @Prop()
    public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ControlBase
     */
    @Prop()
    public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ControlBase
     */
    @Prop()
    public viewparams: any;

    /**
     * 是否显示处理提示
     *
     * @type {boolean}
     * @memberof ControlBase
     */
    @Prop({ default: true })
    public showBusyIndicator?: boolean;

    /**
     * 在消息中心订阅的本地消息实例标识
     *
     * @protected
     * @type {string[]}
     * @memberof ControlBase
     */
    protected accLocalTags: string[] = [];

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ControlBase
     */
    protected appDeName: string = '';

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ControlBase
     */
    protected appDeLogicName: string = '';

    /**
     * rxjs类型订阅事件
     *
     * @protected
     * @type {Subscription[]}
     * @memberof ControlBase
     */
    protected rxjsEvents: Subscription[] = [];

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ControlBase
     */
    protected set viewStateEvent(e: Subscription) {
        if (e) {
            this.rxjsEvents.push(e);
        }
    }

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string} 需子类指定具体类型
     * @memberof ControlBase
     */
    protected controlType: string = '';

    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {any[]}
     * @memberof ControlBase
     */
    protected counterServiceArray: any[] = [];

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof ControlBase
     */
    @Prop()
    public loadAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof ControlBase
     */
    @Prop()
    public viewtag!: string;

    /**
     * 部件服务
     *
     * @type {*}
     * @memberof ControlBase
     */
    public service: any;

    /**
     * 当前组件是否已激活
     *
     * @protected
     * @type {boolean}
     * @memberof ControlBase
     */
    protected isActive: boolean = true;

    /**
     * keep-alive缓存激活时调用
     *
     * @memberof ControlBase
     */
    public activated(): void {
        this.isActive = true;
    }

    /**
     * keep-alive缓存时调用
     *
     * @memberof ControlBase
     */
    public deactivated(): void {
        this.isActive = false;
    }

    /**
     * 组件创建完毕
     *
     * @memberof ControlBase
     */
    public created(): void {
        this.ctrlCreated();
    }

    /**
     * 部件创建完毕
     *
     * @protected
     * @memberof ControlBase
     */
    protected ctrlCreated(): void {}

    /**
     * 组件挂载完毕
     *
     * @memberof ControlBase
     */
    public mounted(): void {
        this.ctrlMounted();
    }

    /**
     * 部件挂载完毕
     *
     * @protected
     * @memberof ControlBase
     */
    protected ctrlMounted(): void {}

    /**
     * 组件销毁
     *
     * @memberof ControlBase
     */
    public destroyed(): void {
        this.rxjsEvents.forEach((item: Subscription) => {
            item.unsubscribe();
        });
        this.accLocalTags.forEach((str: string) => {
            this.$acc.unsubscribeLocal(str);
        });
        this.ctrlDestroyed();
    }

    /**
     * 部件销毁
     *
     * @protected
     * @memberof ControlBase
     */
    protected ctrlDestroyed(): void {
        // 销毁计数器定时器
        if (this.counterServiceArray && this.counterServiceArray.length > 0) {
            this.counterServiceArray.forEach((item: any) => {
                if (item.destroyCounter && item.destroyCounter instanceof Function) {
                    item.destroyCounter();
                }
            });
        }
    }

    /**
     * 计数器刷新
     *
     * @memberof ControlBase
     */
    public counterRefresh(): void {
        this.counterServiceArray.forEach((item: any) => {
            if (item.refreshData && item.refreshData instanceof Function) {
                item.refreshData();
            }
        });
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ControlBase
     */
    public closeView(args: any[]): void {
        this.$emit('closeview', args);
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ControlBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ControlBase
     */
    public getData(): any {
        return null;
    }

    /**
     * 执行搜索
     *
     * @memberof ControlBase
     */
    public onSearch(args: any): void {}
}
