import { Vue, Component, Prop } from 'vue-property-decorator';
import './app-form-group.less';

/**
 * 表单分组
 *
 * @export
 * @class AppFormGroup
 * @extends {Vue}
 */
@Component({})
export default class AppFormGroup extends Vue {
    /**
     * 表单分组模型
     *
     * @type {*}
     * @memberof AppFormGroup
     */
    @Prop({ default: () => {} })
    public model: any;

    /**
     * 标题
     *
     * @type {string}
     * @memberof AppFormGroup
     */
    @Prop()
    public caption?: string;

    /**
     * 内置界面样式
     *
     * @type {string}
     * @memberof AppFormGroup
     */
    @Prop({ default: 'DEFAULT' })
    public uiStyle!: string;

    /**
     * 布局模式
     *
     * @type {string}
     * @memberof AppFormGroup
     */
    @Prop()
    public layoutType?: string;

    /**
     * 标题样式
     *
     * @type {string}
     * @memberof AppFormGroup
     */
    @Prop()
    public titleStyle?: string;

    /**
     * 分组图标
     *
     * @type {string}
     * @memberof AppFormGroup
     */
    @Prop()
    public iconInfo?: any;

    /**
     * 是否显示标题
     *
     * @type {boolean}
     * @memberof AppFormGroup
     */
    @Prop({ default: true })
    public isShowCaption!: boolean;

    /**
     * 信息面板模式
     *
     * @type {boolean}
     * @memberof AppFormGroup
     */
    @Prop({ default: false })
    public isInfoGroupMode!: boolean;

    /**
     * 界面行为组
     *
     * @type {*}
     * @memberof AppFormGroup
     */
    @Prop()
    public uiActionGroup?: any;

    /**
     * 标题栏关闭模式
     * 0: 不支持关闭
     * 1: 默认打开
     * 2： 默认关闭
     *
     * @type {(number | 0 | 1 | 2)}
     * @memberof AppFormGroup
     */
    @Prop({ default: 0 })
    public titleBarCloseMode!: number | 0 | 1 | 2;

    /**
     * 收缩内容
     *
     * @type {boolean}
     * @memberof AppFormGroup
     */
    public collapseContant: boolean = false;

    /**
     * 计算样式
     *
     * @readonly
     * @type {string[]}
     * @memberof AppFormGroup
     */
    get classes(): string[] {
        return [
            'app-form-group',
            this.isShowCaption && this.collapseContant ? 'app-group-collapse-contant' : '',
            this.isInfoGroupMode ? 'app-info-group-mode' : '',
            Object.is(this.layoutType, 'FLEX') ? 'app-group-flex' : '',
            this.uiStyle.toLowerCase(),
        ];
    }

    /**
     * 标题样式
     *
     * @readonly
     * @type {string}
     * @memberof AppFormGroup
     */
    get titleClass(): string {
        return this.titleStyle ? this.titleStyle : '';
    }

    /**
     * vue 生命周期
     *
     * @memberof AppFormGroup
     */
    public created() {
        this.collapseContant = this.titleBarCloseMode === 2 ? true : false;
    }

    /**
     * 触发收缩
     *
     * @memberof AppFormGroup
     */
    public clickCollapse(): void {
        this.collapseContant = !this.collapseContant;
    }

    /**
     * 执行界面行
     *
     * @param {*} $event
     * @memberof AppFormGroup
     */
    public doUIAction($event: any, item: any): void {
        this.$emit('groupuiactionclick', { event: $event, item: item });
    }

    /**
     * 计算行为项图标
     *
     * @protected
     * @param {*} detail
     * @returns {*}
     * @memberof AppFormGroup
     */
    protected getIcon(detail: any): any {
        if (detail.isShowIcon) {
            if (isExistAndNotEmpty(detail.icon)) {
                return <i class={detail.icon} />;
            } else if (isExistAndNotEmpty(detail.img)) {
                return <img src="detail.img" />;
            }
        }
    }

    /**
     * 计算行为项标题
     *
     * @protected
     * @param {*} detail
     * @returns {*}
     * @memberof AppFormGroup
     */
    protected getCaption(detail: any): any {
        if (detail.isShowCaption) {
            if (isExistAndNotEmpty(detail.uiactiontag) && isExistAndNotEmpty(this.uiActionGroup.langbase)) {
                return this.$t(`${this.uiActionGroup.langbase}.uiactions.${detail.uiactiontag}`);
            }
            return detail.caption;
        }
    }

    /**
     * 绘制样式4模式分组
     *
     * @protected
     * @returns {*}
     * @memberof AppFormGroup
     */
    protected renderStyle4(): any {
        return (
            <app-form-group4
                caption={this.caption}
                uiStyle={this.uiStyle}
                layoutType={this.layoutType}
                isShowCaption={this.isShowCaption}
                isInfoGroupMode={this.isInfoGroupMode}
                uiActionGroup={this.uiActionGroup}
                titleBarCloseMode={this.titleBarCloseMode}
            >
                {this.$slots.default}
            </app-form-group4>
        );
    }

    /**
     * 绘制样式2模式分组
     *
     * @protected
     * @returns {*}
     * @memberof AppFormGroup
     */
    protected renderStyle2(): any {
        return (
            <app-form-group2
                caption={this.caption}
                uiStyle={this.uiStyle}
                layoutType={this.layoutType}
                isShowCaption={this.isShowCaption}
                isInfoGroupMode={this.isInfoGroupMode}
                uiActionGroup={this.uiActionGroup}
                titleBarCloseMode={this.titleBarCloseMode}
            >
                {this.$slots.default}
            </app-form-group2>
        );
    }

    /**
     * 绘制行为组
     *
     * @protected
     * @returns {*}
     * @memberof AppFormGroup
     */
    protected renderActionGroup(): any {
        if (this.uiActionGroup) {
            if (this.uiActionGroup.extractMode && Object.is(this.uiActionGroup.extractMode, 'ITEMS')) {
                return (
                    <dropdown transfer={true} trigger="click">
                        <a href="javascript:void(0)">{this.uiActionGroup.caption}</a>
                        <dropdown-menu slot="list">
                            {this.uiActionGroup.details.map((detail: any, i: number) => {
                                return (
                                    <dropdown-item key={i} name={detail.name}>
                                        <span class="item" on-click={(e: any) => this.doUIAction(e, detail)}>
                                            {this.getIcon(detail)}
                                            <span class="caption">{this.getCaption(detail)}</span>
                                        </span>
                                        ;
                                    </dropdown-item>
                                );
                            })}
                        </dropdown-menu>
                    </dropdown>
                );
            } else {
                return (
                    <span class="item-extract-mode">
                        {this.uiActionGroup.details.map((detail: any, i: number) => {
                            return (
                                <span key={i} class="item" on-click={(e: any) => this.doUIAction(e, detail)}>
                                    {this.getIcon(detail)}
                                    <span class="caption">{this.getCaption(detail)}</span>
                                </span>
                            );
                        })}
                    </span>
                );
            }
        }
    }

    /**
     * 绘制默认内容
     *
     * @protected
     * @returns {*}
     * @memberof AppFormGroup
     */
    protected renderContent(): any {
        if (this.isShowCaption === false) {
            return this.$slots.default;
        }
        return (
            <card bordered={false} dis-hover={true} class={this.classes}>
                <p slot="title">
                    <span class="arrow-forward">
                        {this.titleBarCloseMode !== 0 ? (
                            <icon
                                type={
                                    this.collapseContant
                                        ? 'ivu-icon ivu-icon-ios-arrow-forward'
                                        : 'ivu-icon ivu-icon-ios-arrow-down'
                                }
                                on-click={() => this.clickCollapse()}
                            ></icon>
                        ) : null}
                    </span>
                    <span class={this.titleClass}>{this.caption}</span>
                </p>
                <template slot="extra">
                    <span class="ui-actions">
                        <a>{this.renderActionGroup()}</a>
                    </span>
                    {this.$slots.dataInfoPanel}
                </template>
                {Object.is(this.layoutType, 'FLEX') ? (
                    this.$slots.default
                ) : (
                    <row gutter={10}>{this.$slots.default}</row>
                )}
                <div class="show-more" v-show={this.model.showMoreMode === 2}>
                    <i-button on-click={() => this.model.changeShowMore()} size="small">
                        {this.model?.showMore ? this.$t('form.group.hidden_more') : this.$t('form.group.show_more')}
                    </i-button>
                </div>
            </card>
        );
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof AppFormGroup
     */
    public render(): any {
        let content: any;
        if (this.uiStyle === 'STYLE4') {
            content = this.renderStyle4();
        } else if (this.uiStyle === 'STYLE2') {
            content = this.renderStyle2();
        } else {
            content = this.renderContent();
        }
        return <div class={this.classes}>{content}</div>;
    }
}
