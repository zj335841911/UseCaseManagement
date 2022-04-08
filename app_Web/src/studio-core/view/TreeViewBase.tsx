import { MDViewBase } from './MDViewBase';

/**
 * 树视图基类
 *
 * @export
 * @class TreeViewBase
 * @extends {MDViewBase}
 */
export class TreeViewBase extends MDViewBase {
    /**
     * 节点过滤值
     *
     * @type {string}
     * @memberof TreeViewBase
     */
    public srfnodefilter: string = '';

    /**
     * 快速搜索
     *
     * @memberof TreeViewBase
     */
    public onSearch(): void {
        if (this.viewState) {
            this.viewState.next({ tag: 'tree', action: 'filter', data: { srfnodefilter: this.srfnodefilter } });
        }
    }
}
