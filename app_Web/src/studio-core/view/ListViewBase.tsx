import { MDViewBase } from './MDViewBase';

/**
 * 列表视图基类
 *
 * @export
 * @class ListViewBase
 * @extends {MDViewBase}
 */
export class ListViewBase extends MDViewBase {
    /**
     * 快速搜索
     *
     * @protected
     * @memberof ListViewBase
     */
    protected onSearch(): void {
        const list: any = this.$refs.list;
        if (list) {
            list.curPage = 1;
            list.load(this.context, true);
        }
    }
}
