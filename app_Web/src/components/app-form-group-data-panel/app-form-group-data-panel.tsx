import { Vue, Component, Prop } from 'vue-property-decorator';
import './app-form-group-data-panel.less';

/**
 * 表单分组
 *
 * @export
 * @class AppFormGroupDataPanel
 * @extends {Vue}
 */
@Component({})
export default class AppFormGroupDataPanel extends Vue {
    /**
     * 表单分组模型
     *
     * @type {*}
     * @memberof AppFormGroupDataPanel
     */
    @Prop({ default: () => {} })
    public model: any;

    /**
     * 表单数据
     *
     * @type {*}
     * @memberof AppFormGroupDataPanel
     */
    @Prop({ default: () => {} })
    public data!: any;

    /**
     * 上下文
     *
     * @type {*}
     * @memberof AppFormGroupDataPanel
     */
    @Prop()
    public context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppFormGroupDataPanel
     */
    @Prop()
    public viewparams?: any;

    /**
     * 获取项标题
     *
     * @protected
     * @param {*} item
     * @returns {*}
     * @memberof AppFormGroupDataPanel
     */
    protected getCaption(item: any): any {
        if (isExistAndNotEmpty(item.langbase)) {
            return this.$t(`${item.langbase}.${item.name}`);
        }
        return item.caption;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof AppFormGroupDataPanel
     */
    public render(): any {
        const data: any[] = this.model?.anchorPoints;
        if (data) {
            const items: any[] = [];
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const item = data[key];
                    items.push(
                        <span class="data-item">
                            {/* {item.isShowCaption ? <span class="caption">{this.getCaption(item)}：</span> : null} */}
                            <app-span
                                name={item.name}
                                value={this.data[item.name]}
                                data={this.data}
                                context={this.context}
                                viewparams={this.viewparams}
                            ></app-span>
                        </span>
                    );
                }
            }
            return <span class="form-group-data-panel">{items}</span>;
        }
    }
}
