import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { ToolbarItem } from '@/studio-core/interface/ToolbarItem';
import './view-toolbar.less';

/**
 * 视图工具栏
 *
 * @export
 * @class ViewToolbar
 * @extends {Vue}
 */
@Component({})
export class ViewToolbar extends Vue {
    /**
     * 视图工具栏呈现模式
     *
     * @type {('DEFAULT' | 'STYLE2')}
     * @memberof ViewToolbar
     */
    @Prop({ default: 'DEFAULT' })
    public mode!: 'DEFAULT' | 'STYLE2';

    /**
     * 工具栏模型
     *
     * @type {{ [key: string]: ToolbarItem }}
     * @memberof ViewToolbar
     */
    @Prop()
    public model?: { [key: string]: ToolbarItem };

    /**
     * 监控工具栏模型变更
     *
     * @memberof ViewToolbar
     */
    @Watch('model', { immediate: true })
    public watchModels(): void {
        if (this.model) {
            this.items = [];
            this.format();
        }
    }

    /**
     * 所有工机具项
     *
     * @protected
     * @type {ToolbarItem[]}
     * @memberof ViewToolbar
     */
    protected items: ToolbarItem[] = [];

    /**
     * 格式化工具栏模型
     *
     * @protected
     * @param {*} [model=this.model]
     * @memberof ViewToolbar
     */
    protected format(model: any = this.model, items: ToolbarItem[] = this.items): void {
        for (const key in model) {
            const item: any = model[key];
            item.caption = this.$t(item.caption);
            item.tooltip = this.$t(item.tooltip);
            items.push(item);
            if (item.model) {
                item.items = [];
                this.format(item.model, item.items);
            }
        }
    }

    /**
     * 工具栏项点击
     *
     * @param {*} uiAction
     * @param {MouseEvent} e
     * @memberof ViewToolbar
     */
    @Emit('item-click')
    public itemClick(uiAction: any, e: MouseEvent): void {}

    /**
     * 绘制分割线
     *
     * @protected
     * @returns {*}
     * @memberof ViewToolbar
     */
    protected renderSeperator(): any {
        return <span class="seperator">|</span>;
    }

    /**
     * 绘制菜单
     *
     * @protected
     * @param {any[]} [items]
     * @returns {*}
     * @memberof ViewToolbar
     */
    protected renderMenuItems(items?: any[]): any {
        if (!items) {
            return;
        }
        return items.map((item: any) => {
            if (item.type === 'SEPERATOR') {
                return <li class="ivu-dropdown-item seperator"></li>;
            }
            if (item.items && item.items.length > 0) {
                return this.renderMenuGroup(item);
            }
            return this.renderMenuItem(item);
        });
    }

    /**
     * 绘制菜单项
     *
     * @protected
     * @param {*} item
     * @returns {*}
     * @memberof UserInfo
     */
    protected renderMenuItem(item: ToolbarItem): any {
        return (
            <dropdownItem name={item.name} title={item.tooltip}>
                <span on-click={(e: any) => this.itemClick({ tag: item.name }, e)}>
                    <menu-icon item={item} />
                    {item.caption}
                </span>
            </dropdownItem>
        );
    }

    /**
     * 绘制菜单分组
     *
     * @protected
     * @param {*} item
     * @returns {*}
     * @memberof UserInfo
     */
    protected renderMenuGroup(item: ToolbarItem): any {
        return (
            <dropdown class="user-menu-child" placement="left-start">
                <dropdownItem name={item.name} title={item.tooltip}>
                    <icon type="ios-arrow-back"></icon>
                    {item.caption}
                </dropdownItem>
                <dropdownMenu slot="list">{this.renderMenuItems(item.items)}</dropdownMenu>
            </dropdown>
        );
    }

    /**
     * 绘制模式2
     *
     * @protected
     * @returns {*}
     * @memberof ViewToolbar
     */
    protected renderStyle2(): any {
        return this.items.map((item: ToolbarItem) => {
            if (!item.visible) {
                return;
            }
            let content: any;
            if (item.type === 'SEPERATOR') {
                content = this.renderSeperator();
            } else if (!item.items) {
                content = (
                    <i-button
                        v-show={item.visible}
                        disabled={item.disabled}
                        title={item.tooltip}
                        class={item.class}
                        type="text"
                        ghost
                        on-click={(e: any) => this.itemClick({ tag: item.name }, e)}
                    >
                        {item.isShowIcon ? <menu-icon item={item} /> : null}
                        {item.isShowCaption ? item.caption : ''}
                    </i-button>
                );
            } else {
                content = (
                    <dropdown
                        v-show={item.visible}
                        class="studio-dropdown toolbar-dropdown"
                        placement="bottom-start"
                        stop-propagation
                    >
                        {
                            <i-button
                                v-show={item.visible}
                                disabled={item.disabled}
                                title={item.tooltip}
                                class={item.class}
                                type="text"
                                ghost
                            >
                                {item.isShowIcon ? <menu-icon item={item} /> : null}
                                {item.isShowCaption ? item.caption : ''}
                                <icon type="ios-arrow-down" />
                            </i-button>
                        }
                        <dropdownMenu slot="list">{this.renderMenuItems(item.items)}</dropdownMenu>
                    </dropdown>
                );
            }
            return <div class="toolbar-item">{content}</div>;
        });
    }

    /**
     * 绘制默认模式工具栏
     *
     * @protected
     * @returns {*}
     * @memberof ViewToolbar
     */
    protected renderDefault(): any {
        return this.items.map((item: ToolbarItem) => {
            if (item.type === 'SEPERATOR') {
                return this.renderSeperator();
            }
            if (Object.is(item.type, 'ITEMS') && item.items && item.items.length > 0) {
                return (
                    <dropdown>
                        <i-button
                            v-show={item.visible}
                            disabled={item.disabled}
                            title={item.tooltip}
                            class={item.class}
                        >
                            {item.icon ? <menu-icon item={item} /> : null}
                            {item.caption ? <span class="caption">{item.caption}</span> : null}
                        </i-button>
                        <dropdownMenu slot="list">{this.renderMenuItems(item.items)}</dropdownMenu>
                    </dropdown>
                );
            }
            if (item.uiaction && Object.is(item.uiaction.tag, 'ExportExcel')) {
                return (
                    <app-export-excel
                        item={item}
                        caption={item.caption}
                        on-exportexcel={($event: any) => this.itemClick({ tag: item.name }, $event)}
                    ></app-export-excel>
                );
            }
            return (
                <i-button
                    title={item.tooltip}
                    v-show={item.visible}
                    disabled={item.disabled}
                    class={item.class}
                    on-click={(e: any) => this.itemClick({ tag: item.name }, e)}
                >
                    <menu-icon item={item} />
                    <span class="caption" v-show={item.isShowCaption}>
                        {item.caption}
                    </span>
                </i-button>
            );
        });
    }

    /**
     * 绘制工具栏内容
     *
     * @returns {*}
     * @memberof ViewToolbar
     */
    public render(): any {
        if (this.items.length <= 0) {
            return;
        }
        let content: any;
        switch (this.mode) {
            case 'STYLE2':
                content = this.renderStyle2();
                break;
            default:
                content = this.renderDefault();
        }
        return <div class={{ 'toolbar-container': true, [this.mode.toLowerCase()]: true }}>{content}</div>;
    }
}
