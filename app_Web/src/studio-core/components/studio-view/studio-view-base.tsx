import { Vue, Prop } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';

/**
 * 视图布局组件基类
 *
 * @export
 * @class StudioViewBase
 * @extends {Vue}
 */
export class StudioViewBase extends Vue {
    /**
     * 视图名称
     *
     * @type {string}
     * @memberof StudioViewBase
     */
    @Prop({ default: '' })
    public viewName!: string;

    /**
     * 视图标题
     *
     * @type {string}
     * @memberof StudioViewBase
     */
    @Prop({ default: '' })
    public viewTitle!: string;

    /**
     * 是否隐藏视图头部
     *
     * @protected
     * @type {boolean}
     * @memberof StudioViewBase
     */
    @Prop({ default: false })
    protected hiddenHeader!: boolean;

    /**
     * 是否显示视图头
     *
     * @protected
     * @type {boolean}
     * @memberof StudioViewBase
     */
    protected isShowHeader: boolean = true;

    /**
     * 组件创建完毕
     *
     * @memberof StudioViewBase
     */
    public created(): void {
        if (this.hiddenHeader) {
            this.isShowHeader = false;
        } else {
            this.isShowHeader =
                this.$slots.title ||
                this.$slots.toolbar ||
                this.$slots.quickSearch ||
                this.$slots.quickSearchForm ||
                this.$slots.quickGroupSearch
                    ? true
                    : false;
        }
    }

    /**
     * 计算容器样式
     *
     * @protected
     * @param {{ [str: string]: boolean }} [classNames] 样式名称对象
     * @returns {{ [str: string]: boolean }}
     * @memberof StudioViewBase
     */
    protected getContainerClass(classNames?: { [str: string]: boolean }): { [str: string]: boolean } {
        const data = {
            'studio-view': true,
            'view-container': true,
            'hidden-header': !this.isShowHeader,
            'show-footer': this.$slots.footer ? true : false,
        };
        if (classNames) {
            Object.assign(data, classNames);
        }
        return data;
    }

    /**
     * 绘制视图内容
     *
     * @protected
     * @returns {*}
     * @memberof StudioViewBase
     */
    protected renderContent(): any {
        return [
            this.$slots.topMessage ? <div class="view-top-messages">{this.$slots.topMessage}</div> : null,
            this.isShowHeader ? (
                <div class="view-header" key="view-header">
                    {this.$slots.title ? <div class="title">{this.$slots.title}</div> : null}
                    {this.$slots.toolbar ? <div class="toolbar">{this.$slots.toolbar}</div> : null}
                    {this.$slots.quickGroupSearch ? (
                        <div class="quick-group-search">{this.$slots.quickGroupSearch}</div>
                    ) : null}
                    {this.$slots.quickSearchForm ? (
                        <div class="quick-search-form">{this.$slots.quickSearchForm}</div>
                    ) : null}
                    {this.$slots.quickSearch ? <div class="quick-search">{this.$slots.quickSearch}</div> : null}
                </div>
            ) : null,
            <div class={{ 'view-content': true, 'show-search-form': this.$slots.searchForm }} key="view-content">
                {this.$slots.searchForm ? <div class="search-form-wrapper">{this.$slots.searchForm}</div> : null}
                {this.$slots.searchBar ? <div class="search-bar-wrapper">{this.$slots.searchBar}</div> : null}
                <div class="content-wrapper">{this.$slots.default}</div>
            </div>,
            this.$slots.bottomMessage ? <div class="view-bottom-messages">{this.$slots.bottomMessage}</div> : null,
            this.$slots.footer ? (
                <div class="view-footer" key="view-footer">
                    {this.$slots.footer}
                </div>
            ) : null,
        ];
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof StudioViewBase
     */
    public render(): any {
        return (
            <div class={this.getContainerClass()}>
                {Environment.devMode ? (
                    <view-config-actions viewName={this.viewName} viewTitle={this.viewTitle} />
                ) : null}
                {this.renderContent()}
            </div>
        );
    }
}
