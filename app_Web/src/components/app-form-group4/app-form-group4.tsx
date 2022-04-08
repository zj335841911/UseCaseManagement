import { Vue, Component, Prop } from 'vue-property-decorator';
import './app-form-group4.less';

/**
 * 表单分组模式4
 *
 * @export
 * @class AppFormGroup4
 * @extends {Vue}
 */
@Component({})
export default class AppFormGroup4 extends Vue {
    /**
     * 标题
     *
     * @type {string}
     * @memberof AppFormGroup4
     */
    @Prop() public caption?: string;

    /**
     * 内置界面样式
     *
     * @type {string}
     * @memberof AppFormGroup4
     */
    @Prop() public uiStyle?: string;

    /**
     * 布局模式
     *
     * @type {string}
     * @memberof AppFormGroup4
     */
    @Prop() public layoutType?: string;

    /**
     * 是否显示标题
     *
     * @type {boolean}
     * @memberof AppFormGroup4
     */
    @Prop({ default: true }) public isShowCaption!: boolean;

    /**
     * 信息面板模式
     *
     * @type {boolean}
     * @memberof AppFormGroup4
     */
    @Prop({ default: false }) public isInfoGroupMode!: boolean;

    /**
     * 界面行为组
     *
     * @type {*}
     * @memberof AppFormGroup4
     */
    @Prop() public uiActionGroup?: any;

    /**
     * 标题栏关闭模式
     * 0: 不支持关闭
     * 1: 默认打开
     * 2： 默认关闭
     *
     * @type {(number | 0 | 1 | 2)}
     * @memberof AppFormGroup4
     */
    @Prop({ default: 0 }) public titleBarCloseMode!: number | 0 | 1 | 2;

    /**
     * 是否为第一次展开
     *
     * @protected
     * @type {boolean}
     * @memberof AppFormGroup4
     */
    protected isFirstShow: boolean = true;

    /**
     * 是否显示更多信息
     *
     * @protected
     * @type {boolean}
     * @memberof AppFormGroup4
     */
    protected isShowMore: boolean = false;

    /**
     * 改变显示状态
     *
     * @protected
     * @memberof AppFormGroup4
     */
    protected changeShow(): void {
        this.isFirstShow = false;
        this.isShowMore = !this.isShowMore;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof AppFormGroup4
     */
    public render(): any {
        return (
            <div class="form-group-container-style4">
                {!this.isFirstShow ? (
                    <div v-show={this.isShowMore} class="form-group-content">
                        {this.$slots.default}
                    </div>
                ) : null}
                <div class="form-group-button show-more">
                    <i-button size="small" on-click={() => this.changeShow()}>
                        {this.isShowMore ? '隐藏' : '显示'}更多信息
                    </i-button>
                </div>
            </div>
        );
    }
}
