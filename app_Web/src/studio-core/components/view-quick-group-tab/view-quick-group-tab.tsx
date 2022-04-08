import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import './view-quick-group-tab.less';

/**
 * 快速分组分页导航展示模式
 *
 * @export
 * @class ViewQuickGroupTab
 * @extends {Vue}
 */
@Component({})
export class ViewQuickGroupTab extends Vue {
    /**
     * 快速分组代码表
     *
     * @type {any[]}
     * @memberof ViewQuickGroupTab
     */
    @Prop({ default: () => [] })
    items!: any[];
    @Watch('items', { immediate: true })
    itemsWatch() {
        if (this.items?.length > 0) {
            this.formatItems(this.items);
        }
    }

    /**
     * tab展示模式
     *
     * @type {('average' | 'left' | 'right')}
     * @memberof ViewQuickGroupTab
     */
    @Prop({ default: 'left' })
    tabMode!: 'average' | 'left' | 'right';

    /**
     * 计数器服务名
     *
     * @type {string}
     * @memberof AppQuickGroup
     */
    @Prop()
    public counterService?: any;

    /**
     * 当前选中项
     *
     * @type {*}
     * @memberof ViewQuickGroupTab
     */
    selectItem: any = null;

    /**
     * 格式化数据
     *
     * @param {any[]} items
     * @memberof ViewQuickGroupTab
     */
    formatItems(items: any[]): void {
        items.forEach((item: any) => {
            if (item.default) {
                this.select(item);
            }
        });
    }

    /**
     * 设置选中项
     *
     * @param {*} item
     * @memberof ViewQuickGroupTab
     */
    select(item: any): void {
        this.selectItem = item;
        this.$emit('valuechange', item);
    }

    render() {
        return (
            <div class="view-quick-group-tab">
                <div class={{ 'tab-list': true, [this.tabMode]: true }}>
                    {this.items.map((item: any) => {
                        const count = this.counterService?.counterData[item.codename];
                        return (
                            <div
                                class={{ 'tab-item': true, activated: this.selectItem.codename === item.codename }}
                                on-click={() => this.select(item)}
                            >
                                <span class="item-label">
                                    {item.text}
                                    {count != null ? <span class="item-count">({count})</span> : null}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
