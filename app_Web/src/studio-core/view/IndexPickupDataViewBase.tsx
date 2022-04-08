import { MDViewBase } from './MDViewBase';

/**
 * 实体索引关系选择数据视图（部件视图）基类
 *
 * @export
 * @class IndexPickupDataViewBase
 * @extends {MDViewBase}
 */
export class IndexPickupDataViewBase extends MDViewBase {
    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof IndexPickupDataViewBase
     */
    public isSingleSelect: boolean = true;

    /**
     * 数据选中抛值
     *
     * @param {*} args
     * @memberof IndexPickupDataViewBase
     */
    public dataviewDataSeletionchange(args: any) {
        this.$emit('viewdataschange', [...args]);
    }

    /**
     * 视图挂载完毕
     *
     * @protected
     * @memberof IndexPickupDataViewBase
     */
    protected viewMounted(): void {
        super.viewMounted();
        this.viewState.next({tag: 'dataview', action: 'load', data: {}});
    }
}
