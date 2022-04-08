import { Vue, Component, Prop } from 'vue-property-decorator';
import { UIStateService } from '@/studio-core/service/UIStateService';
import './app-content-bottom-exp.less';

/**
 * 应用内容区底部导航区
 *
 * @export
 * @class AppContentBottomExp
 * @extends {Vue}
 */
@Component({})
export class AppContentBottomExp extends Vue {
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
     * @memberof AppContentBottomExp
     */
    @Prop()
    public ctrlName!: string;

    /**
     * 所有菜单项
     *
     * @type {any[]}
     * @memberof AppContentBottomExp
     */
    @Prop({ default: () => [] })
    public menus!: any[];

    /**
     * 当前激活项下标
     *
     * @protected
     * @type {number}
     * @memberof AppContentBottomExp
     */
    protected activeIndex: number = -1;

    /**
     * 当前激活项
     *
     * @protected
     * @type {*}
     * @memberof AppContentBottomExp
     */
    protected activeItem: any;

    /**
     * 组件创建完毕
     *
     * @memberof AppContentBottomExp
     */
    public created(): void {
        const i: number = this.uiState.layoutState.bottomExpActiveIndex;
        if (this.menus.length >= i) {
            this.itemClick(this.menus[i], i);
        }
    }

    /**
     * 激活分页
     *
     * @protected
     * @param {string} name
     * @memberof AppContentBottomExp
     */
    protected activeTab(name: string): void {
        try {
            const item: any = this.menus[parseInt(name)];
            this.itemClick(item, parseInt(name));
        } catch (error) {
            console.warn(error);
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
        if (!Object.is(item?.appfunctype, 'APPVIEW')) {
            return;
        }
        this.uiState.layoutState.bottomExpActiveIndex = index;
        this.activeIndex = index;
        this.activeItem = item;
        this.activeItem.isActivated = true;
    }

    /**
     * 绘制标题
     *
     * @protected
     * @param {*} h
     * @param {*} item
     * @returns {*}
     * @memberof AppContentBottomExp
     */
    protected renderTitle(h: any, item: any): any {
        return (
            <div title={item.tooltip} class='tab-exp-title'>
                <menu-icon item={item} />
                {this.$t(`app.menus.${this.ctrlName}.${item.name}`)}
            </div>
        );
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof AppContentBottomExp
     */
    public render(): any {
        return (
            <div class='app-content-bottom-exp'>
                <tabs
                    size='small'
                    animated={false}
                    value={this.activeIndex.toString()}
                    on-on-click={(name: string) => this.activeTab(name)}
                >
                    {this.menus.map((item: any, i: number) => {
                        if (!Object.is(item.appfunctype, 'APPVIEW') || item.hidden) {
                            return;
                        }
                        return (
                            <tabPane label={(h: any) => this.renderTitle(h, item)} name={i.toString()}>
                                {item.isActivated ? (
                                    <div key={i} class='tab-exp-item-content'>
                                        {this.$createElement(item.viewname)}
                                    </div>
                                ) : null}
                            </tabPane>
                        );
                    })}
                </tabs>
            </div>
        );
    }
}
