import { DataViewBase } from './DataViewBase';

/**
 * 数据视图基类
 *
 * @export
 * @class DataViewExpViewBase
 * @extends {MDViewBase}
 */
export class DataViewExpViewBase extends DataViewBase {
    /**
     * 快速搜索
     *
     * @protected
     * @memberof DataViewExpViewBase
     */
    protected onSearch(): void {
        const dataview: any = this.$refs.dataview;
        if (dataview) {
            dataview.refresh({});
        }
    }
}
