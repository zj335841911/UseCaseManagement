import { Vue, Component } from 'vue-property-decorator';
import qs from 'qs';
import { Environment } from '@/environments/environment';
import { AppService } from '@/studio-core/service/app-service/AppService';
import { HistoryItem } from '@/studio-core/service/app-nav-history/AppNavHistoryBase';
import './app-breadcrumb.less';

/**
 * 面包屑导航组件
 *
 * @export
 * @class AppBreadcrumb
 * @extends {Vue}
 */
@Component({})
export class AppBreadcrumb extends Vue {
    /**
     * 应用服务(单例)
     *
     * @protected
     * @type {AppService}
     * @memberof AppBreadcrumb
     */
    protected appService: AppService = new AppService();

    /**
     * 界面导航条分隔符
     *
     * @protected
     * @type {AppService}
     * @memberof AppBreadcrumb
     */
    protected NavBarDelimiter: string = Environment.NavBarDelimiter;

    created() {
        this.appService.appEvent.on('navHistoryItemChange', this.historyItemChange);
    }

    historyItemChange = (item: HistoryItem) => {
        this.$forceUpdate();
    };

    /**
     * 跳转点击
     *
     * @protected
     * @param {*} to
     * @memberof AppBreadcrumb
     */
    protected click(to: any) {
        const i = this.appService.navHistory.findHistoryIndex(to);
        this.$router.push({ path: to.path, params: to.params, query: to.query });
        this.appService.navHistory.reset(i + 1);
    }

    /**
     * 跳转首页
     *
     * @protected
     * @param {*} meta
     * @memberof AppBreadcrumb
     */
    protected toIndex(meta: any): void {
        let path = '';
        if (meta && meta.parameters) {
            meta.parameters.forEach((item: any) => {
                const val = this.$route.params[item.parameterName];
                path += `/${item.pathName}${val ? `/${val}` : ''}`;
            });
        }
        this.$router.push(path);
        this.appService.navHistory.reset();
        location.reload();
    }

    /**
     * 根据下标从父导航查询是否有列表数据
     *
     * @protected
     * @param {*} context
     * @param {string} [tag]
     * @returns {(any[] | null)}
     * @memberof AppBreadcrumb
     */
    protected getItems(context: any, tag?: string): any[] | null {
        if (tag) {
            const view = this.appService.viewStore.findParentByTag(tag);
            if (view) {
                const data = this.appService.contextStore.getContextData(view.context, context.srfappdename);
                if (data && data.items) {
                    return data.items;
                }
            }
        }
        return null;
    }

    /**
     * 选中数据变更
     *
     * @protected
     * @param {*} c
     * @param {HistoryItem} history
     * @param {*} val
     * @memberof AppBreadcrumb
     */
    protected itemChange(c: any, history: HistoryItem, val: any): void {
        const to = history.to;
        to.params[c.srfappdename] = val;
        let path = '';
        history.meta.parameters.forEach((item: any) => {
            const pam = to.params[item.parameterName];
            path += `/${item.pathName}` + (pam ? `/${pam}` : '');
        });
        if (to.query && Object.keys(to.query).length > 0) {
            path += '?' + qs.stringify(to.query);
        }
        this.$router.push(path);
        if (to.fullPath !== path) {
            this.appService.navHistory.pop();
        }
        this.$forceUpdate();
    }

    /**
     * 绘制面包屑
     *
     * @returns {*}
     * @memberof AppBreadcrumb
     */
    public render(): any {
        const items: any[] = [];
        const indexMeta = this.appService.navHistory.indexMeta;
        if (indexMeta) {
            items.push(
                <span class="app-breadcrumb-item">
                    <span class="content" on-click={() => this.toIndex(indexMeta)}>
                        首页
                    </span>
                </span>
            );
        }
        const arr = this.appService.navHistory.historyList;
        arr.forEach((item, i) => {
            let info = '';
            let dropdown: any = null;
            const view = this.appService.viewStore.findByTag(item.tag as string);
            if (view?.viewUsage === 1 && view.isShowDataInfoBar) {
                info = item.meta?.info;
                if (arr.length === i + 1) {
                    const list = this.getItems(item.context, item.tag);
                    if (list && list.length > 0) {
                        const c = item.context;
                        dropdown = (
                            <i-select
                                v-model={c[c.srfappdename]}
                                on-on-change={(val: any) => this.itemChange(c, item, val)}
                                size="small"
                            >
                                {list.map((item: any) => {
                                    return (
                                        <i-option value={item.srfkey} key={item.srfkey}>
                                            {item.srfmajortext}
                                        </i-option>
                                    );
                                })}
                            </i-select>
                        );
                    }
                }
            }
            items.push(
                <span key={item.tag} class={{ 'app-breadcrumb-item': true, last: i === arr.length - 1 }}>
                    {!indexMeta && i === 0 ? null : <span class="separator">{this.NavBarDelimiter}</span>}
                    <span class="content" on-click={() => this.click(item.to)} title={ info }>
                        {this.$t(item.meta?.caption)}
                        {dropdown ? null : isExistAndNotEmpty(info) ? ' - ' + info : ''}
                    </span>
                    {dropdown ? <span class="select"> - {dropdown}</span> : null}
                </span>
            );
        });
        return <div class="app-breadcrumb">{items}</div>;
    }
}
