import { Prop } from 'vue-property-decorator';
import { GridView9Base } from './GridView9Base';

/**
 * 选择表格视图基类
 *
 * @export
 * @class PickupGridViewBase
 * @extends {ViewBase}
 */
export class PickupGridViewBase extends GridView9Base {
    /**
     * 选中数据字符串
     *
     * @type {string}
     * @memberof PickupGridViewBase
     */
    @Prop()
    public selectedData?: string;

    /**
     * 是否单选
     *
     * @readonly
     * @type {boolean}
     * @memberof MDViewBase
     */
    @Prop({ default: false })
    protected isSingleSelect!: boolean;
}
