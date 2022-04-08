import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Util } from '@/utils';
import './app-header-menus.less';

/**
 * 应用头部菜单
 *
 * @export
 * @class AppHeaderMenus
 * @extends {Vue}
 */
@Component({})
export class AppHeaderMenus extends Vue {
    /**
     * 部件名称
     *
     * @type {string}
     * @memberof AppHeaderMenus
     */
    @Prop()
    public ctrlName!: string;

    /**
     * 菜单
     *
     * @type {any[]}
     * @memberof AppHeaderMenus
     */
    @Prop({ default: () => [] })
    public menus!: any[];

    /**
     * 菜单项点击
     *
     * @param {*} item
     * @returns {*}
     * @memberof AppHeaderMenus
     */
    @Emit('menu-click')
    public menuClick(item: any): any {}

    /**
     * 组件创建完毕
     *
     * @memberof AppHeaderMenus
     */
    public mounted(): void {
        this.$nextTick(() => {
            if (this.$route.matched && this.$route.matched.length > 1) {
                return;
            }
            const openDefault = this.findDefaultOpen(this.menus);
            if (openDefault) {
                this.menuClick(openDefault);
            }
        });
    }

    /**
     * 查找默认打开视图
     *
     * @protected
     * @param {any[]} items
     * @returns {*}
     * @memberof AppHeaderMenus
     */
    protected findDefaultOpen(items: any[]): any {
        if (items) {
            return items.find((item: any) => {
                let data: any;
                if (item && item.items && Util.typeOf(item.items) === 'array') {
                    data = this.findDefaultOpen(item.items);
                } else {
                    if (item.opendefault === true) {
                        data = item;
                    }
                }
                return data;
            });
        }
    }

    /**
     * 菜单项选中
     *
     * @protected
     * @param {string} name
     * @memberof AppHeaderMenus
     */
    protected onSelect(name: string): void {
        const item: any = this.findMenuByName(name);
        if (item) {
            this.menuClick(item);
        }
    }

    /**
     * 根据名称查找菜单项
     *
     * @protected
     * @param {string} name
     * @param {any[]} [menus=this.menus]
     * @returns {*}
     * @memberof AppHeaderMenus
     */
    protected findMenuByName(name: string, menus: any[] = this.menus): any {
        let item: any;
        menus.find((menu: any) => {
            if (Object.is(menu.name, name)) {
                item = menu;
                return menu;
            }
            if (menu.items) {
                const subItem: any = this.findMenuByName(name, menu.items);
                if (subItem) {
                    item = subItem;
                    return subItem;
                }
            }
        });
        return item;
    }

    /**
     * 绘制菜单
     *
     * @protected
     * @param {*} items
     * @returns {*}
     * @memberof AppHeaderMenus
     */
    protected renderMenus(items: any[]): any {
        return items.map((item: any) => {
            if (item.items) {
                return this.renderSubMenu(item);
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
     * @memberof AppHeaderMenus
     */
    protected renderMenuItem(item: any): any {
        if (item.hidden) {
            return;
        }
        const tooltip = item.localetag ? this.$t(item.localetag.toLowerCase()) : item.tooltip;
        return (
            <menuItem title={tooltip} name={item.name}>
                <menu-icon item={item} />
                {this.$t(`app.menus.${this.ctrlName}.${item.name}`)}
            </menuItem>
        );
    }

    /**
     * 绘制菜单分组
     *
     * @protected
     * @param {*} item
     * @returns {*}
     * @memberof AppHeaderMenus
     */
    protected renderSubMenu(item: any): any {
        if (item.hidden) {
            return;
        }
        return (
            <submenu name={item.name}>
                <template slot="title">
                    <menu-icon item={item} />
                    {this.$t(`app.menus.${this.ctrlName}.${item.name}`)}
                </template>
                {this.renderMenus(item.items)}
            </submenu>
        );
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof AppHeaderMenus
     */
    public render(): any {
        return (
            <div class="app-header-menus">
                <i-menu mode="horizontal" on-on-select={(val: string) => this.onSelect(val)}>
                    {this.renderMenus(this.menus)}
                </i-menu>
            </div>
        );
    }
}
