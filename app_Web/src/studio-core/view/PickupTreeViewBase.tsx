import { Prop } from 'vue-property-decorator';
import { TreeViewBase } from './TreeViewBase';

/**
 * 实体选择树视图（部件视图）基类
 *
 * @export
 * @class PickupTreeViewBase
 * @extends {MDViewBase}
 */
export class PickupTreeViewBase extends TreeViewBase {
    /**
     * 选中数据字符串
     *
     * @type {string}
     * @memberof PickupTreeViewBase
     */
    @Prop()
    public selectedData?: string;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof PickupTreeViewBase
     */
    @Prop({ default: true })
    public isSingleSelect!: boolean;

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof PickupTreeViewBase
     */
    @Prop({ default: true })
    public isShowButton!: boolean;

    /**
     * tree 部件 nodedblclick 事件
     *
     * @param {*} $event
     * @param {*} [$event2]
     * @memberof PickupTreeViewBase
     */
    public tree_nodedblclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('tree', 'nodedblclick', $event);
    }
}
