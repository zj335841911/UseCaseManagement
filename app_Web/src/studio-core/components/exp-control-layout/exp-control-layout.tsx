import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import './exp-control-layout.less';

/**
 * 导航部件布局组件
 *
 * @export
 * @class ExpControlLayout
 * @extends {Vue}
 */
@Component({})
export class ExpControlLayout extends Vue {
    /**
     * 是否挂载完毕
     *
     * @protected
     * @type {boolean}
     * @memberof ExpControlLayout
     */
    protected showAnimation: boolean = false;

    /**
     * 默认分割比例
     *
     * @type {number}
     * @memberof ExpControlLayout
     */
    public defaultSplit: number = 0.6;

    /**
     * 默认分割比例
     *
     * @type {number}
     * @memberof ExpControlLayout
     */
    public split: number = 1;

    /**
     * 视图是否显示
     *
     * @type {boolean}
     * @memberof ExpControlLayout
     */
    public showView: boolean = false;

    /**
     * 视图显示变更
     *
     * @param {boolean} val
     * @param {boolean} oldVal
     * @memberof ExpControlLayout
     */
    @Watch('showView')
    public showViewWatch(val: boolean, oldVal: boolean): void {
        this.showAnimation = true;
        setTimeout(() => (this.showAnimation = false), 500);
        if (val) {
            this.calcSplit();
            this.split = this.defaultSplit;
        } else {
            this.split = 1;
        }
    }

    /**
     * 选中视图数据
     *
     * @type {*}
     * @memberof ExpControlLayout
     */
    @Prop()
    public selectView: any;

    /**
     * 监控选中视图变更
     *
     * @param {*} val
     * @param {*} oldVal
     * @memberof ExpControlLayout
     */
    @Watch('selectView')
    public selectViewWatch(val: any, oldVal: any): void {
        if (val) {
            this.showView = true;
        } else {
            this.showView = false;
        }
    }

    /**
     * 展示模式
     *
     * @type {string}
     * @memberof ExpControlLayout
     */
    @Prop({ default: 'horizontal' })
    public mode!: 'horizontal' | 'vertical';

    /**
     * 部件宽度
     *
     * @type {number}
     * @memberof ExpControlLayout
     */
    @Prop({ default: 0 })
    public ctrlWidth!: number;

    /**
     * 部件高度
     *
     * @type {number}
     * @memberof ExpControlLayout
     */
    @Prop({ default: 0 })
    public ctrlHeight!: number;

    /**
     * 计算分割比例
     *
     * @memberof ExpControlLayout
     */
    public calcSplit(): void {
        const el: any = this.$el;
        if (this.ctrlWidth > 0 && this.mode === 'horizontal') {
            this.defaultSplit = 1 - parseFloat(((el.offsetWidth - this.ctrlWidth) / el.offsetWidth).toFixed(2));
        } else if (this.ctrlHeight > 0 && this.mode === 'vertical') {
            this.defaultSplit = 1 - parseFloat(((el.offsetHeight - this.ctrlHeight) / el.offsetHeight).toFixed(2));
        }
    }

    /**
     * 绘制可拖拽分隔
     *
     * @protected
     * @returns {*}
     * @memberof ExpControlLayout
     */
    protected renderSplit(): any {
        let showHeader = false;
        if (this.$slots.title || this.$slots.quickGroupSearch || (!this.$slots.toolbar && this.$slots.quickSearch)) {
            showHeader = true;
        }
        return (
            <split
                class={{ 'exp-control-layout': true, animation: this.showAnimation }}
                v-model={this.split}
                mode={this.mode}
                min={this.ctrlHeight > 0 || this.ctrlWidth > 0 ? this.defaultSplit : null}
            >
                <template slot={this.mode === 'horizontal' ? 'left' : 'top'}>
                    <div class="exp-control-layout-exp">
                        {this.$slots.toolbar ? (
                            <div key="exp-top" class="exp-top">
                                {this.$slots.toolbar ? <div class="exp-toolbar">{this.$slots.toolbar}</div> : null}
                                {this.$slots.quickSearch ? (
                                    <div class="exp-quick-search">{this.$slots.quickSearch}</div>
                                ) : null}
                            </div>
                        ) : null}
                        {showHeader ? (
                            <div key="exp-header" class="exp-header">
                                {this.$slots.title ? <div class="exp-header-title">{this.$slots.title}</div> : null}
                                {this.$slots.quickGroupSearch ? (
                                    <div key="exp-quick-group-search" class="exp-quick-group-search">
                                        {this.$slots.quickGroupSearch}
                                    </div>
                                ) : null}
                                {!this.$slots.toolbar && this.$slots.quickSearch ? (
                                    <div class="exp-quick-search">{this.$slots.quickSearch}</div>
                                ) : null}
                            </div>
                        ) : null}
                        <div
                            key="exp-content"
                            class={{
                                'exp-content': true,
                                'hidden-header': !showHeader,
                                'hidden-top': !this.$slots.toolbar,
                            }}
                        >
                            {this.$slots.expContent}
                        </div>
                    </div>
                </template>
                <template slot={this.mode === 'horizontal' ? 'right' : 'bottom'}>
                    <div class="exp-control-layout-view">{this.$slots.default}</div>
                </template>
            </split>
        );
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof ExpControlLayout
     */
    public render(): any {
        return this.renderSplit();
    }
}
