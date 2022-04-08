import { MDViewBase } from './MDViewBase';

/**
 * 数据视图基类
 *
 * @export
 * @class DataViewBase
 * @extends {MDViewBase}
 */
export class DataViewBase extends MDViewBase {
    /**
     * 快速搜索
     *
     * @protected
     * @memberof DataViewBase
     */
    protected onSearch(): void {
        const dataview: any = this.$refs.dataview;
        if (dataview) {
            dataview.refresh({});
        }
    }
}
