import { Prop } from 'vue-property-decorator';
import { ViewBase } from './ViewBase';

/**
 * 数据选择视图基类
 *
 * @export
 * @class PickupViewBase
 * @extends {ViewBase}
 */
export class PickupViewBase extends ViewBase {
    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof PickupViewBase
     */
    public isSingleSelect: boolean = true;

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof PickupViewBase
     */
    @Prop({ default: true })
    public isShowButton!: boolean;

    /**
     * 选中数据的字符串
     *
     * @type {string}
     * @memberof PickupViewBase
     */
    public selectedData: string = '';

    /**
     * 视图选中数据
     *
     * @type {any[]}
     * @memberof PickupViewBase
     */
    public viewSelections: any[] = [];

    /**
     * 确定
     *
     * @memberof PickupViewBase
     */
    public onClickOk(): void {
        this.$emit('viewdataschange', this.viewSelections);
        this.$emit('close', null);
    }

    /**
     * 取消
     *
     * @memberof PickupViewBase
     */
    public onClickCancel(): void {
        this.$emit('viewdataschange', null);
        this.$emit('close', null);
    }
}
