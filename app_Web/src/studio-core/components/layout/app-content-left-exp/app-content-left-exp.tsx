import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import { UIStateService } from '@/studio-core/service/UIStateService';
import './app-content-left-exp.less';

/**
 * 应用左侧导航
 *
 * @export
 * @class AppContentLeftExp
 * @extends {Vue}
 */
@Component({})
export class AppContentLeftExp extends Vue {
    /**
     * UI状态服务
     *
     * @protected
     * @type {UIStateService}
     * @memberof AppContentLeftExp
     */
    protected uiState: UIStateService = new UIStateService();

    /**
     * 部件名称
     *
     * @type {string}
     * @memberof AppContentLeftExp
     */
    @Prop()
    public ctrlName!: string;

    /**
     * 菜单数据
     *
     * @protected
     * @type {any[]}
     * @memberof AppContentLeftExp
     */
    @Prop({ default: () => [] })
    protected menus!: any[];

    /**
     * 当前激活项下标
     *
     * @protected
     * @type {number}
     * @memberof AppContentLeftExp
     */
    protected activeIndex: number = -1;

    /**
     * 当前激活项
     *
     * @protected
     * @type {*}
     * @memberof AppContentLeftExp
     */
    protected activeItem: any;

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof AppContentLeftExp
     */
    protected created(): void {
        const i: number = this.uiState.layoutState.leftExpActiveIndex;
        if (this.menus.length >= i + 1) {
            this.changeActiveItem(this.menus[i], i);
        }
    }

    /**
     * 菜单项点击
     *
     * @protected
     * @param {*} item
     * @param {number} index
     * @memberof AppContentLeftExp
     */
    protected itemClick(item: any, index: number): void {
        if (this.activeIndex === index) {
            this.uiState.leftExpContentShowChange();
        } else {
            this.uiState.leftExpContentShowChange(true);
            this.changeActiveItem(item, index);
        }
    }

    /**
     * 当前激活菜单切换时抛出事件
     *
     * @param {*} item
     * @memberof AppContentLeftExp
     */
    @Emit('active-item-change')
    public activeItemChange(item: any): any {}

    /**
     * 改变激活项
     *
     * @protected
     * @param {*} item
     * @param {number} index
     * @memberof AppContentLeftExp
     */
    protected changeActiveItem(item: any, index: number): void {
        if (!Object.is(item.appfunctype, 'APPVIEW')) {
            return;
        }
        this.uiState.layoutState.leftExpActiveIndex = index;
        this.activeIndex = index;
        this.activeItem = item;
        this.activeItem.isActivated = true;
        this.activeItemChange(item);
    }

    /**
     * 绘制内容
     *
     * @returns {VNode}
     * @memberof AppContentLeftExp
     */
    public render(): VNode {
        return (
            <div class="app-content-left-exp">
                <div class="exp-actions">
                    {this.menus.map((item: any, index: number) => {
                        this.handleMenuItemLocale(item);
                        if (item.hidden) {
                            return;
                        }
                        return (
                            <div
                                title={item.tooltip}
                                on-click={() => this.itemClick(item, index)}
                                class={{ 'action-item': true, active: this.activeIndex === index }}
                            >
                                <div class="active-item-indicator" />
                                <menu-icon item={item} />
                            </div>
                        );
                    })}
                </div>
                <div class="exp-content">
                    {this.menus.map((item: any, index: number) => {
                        if (!Object.is(item.appfunctype, 'APPVIEW') || !item.isActivated || item.hidden) {
                            return;
                        }
                        return (
                            <div v-show={this.activeIndex === index} key={index} class="exp-item">
                                {this.$createElement(item.viewname, {
                                    props: { openMode: 'MODAL', viewDefaultUsage: false, viewdata: '{}' },
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    /**
     * 计算菜单项多语言资源
     *
     * @returns {*}
     * @memberof AppContentLeftExp
     */
    public handleMenuItemLocale(item: any) {
        if(!item.localetag) {
            return;
        }
        let localeContent: any = this.$t(item.localetag);
        if(localeContent) {
            item.text = localeContent;
            item.tooltip = localeContent;
        }
    }
}
