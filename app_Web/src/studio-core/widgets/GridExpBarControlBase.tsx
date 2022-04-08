import { ExpControlBase } from './ExpControlBase';

/**
 * 表格导航部件基类
 *
 * @export
 * @class GridExpBarControlBase
 * @extends {ExpControlBase}
 */
export class GridExpBarControlBase extends ExpControlBase {
    /**
     * 是否单选
     *
     * @public
     * @type {(boolean)}
     * @memberof GridExpBarControlBase
     */
    public isGridSingleSelect: boolean = true;

    /**
     * 部件创建完毕
     *
     * @memberof GridExpBarControlBase
     */
    public ctrlCreated(): void {
        this.loadQuickGroupModel();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.viewState.next({ tag: 'gridexpbar_grid', action: action, data: data });
            });
        }
    }

    /**
     * 执行搜索
     *
     * @memberof GridExpBarControlBase
     */
    public onSearch($event: any) {
        super.onSearch($event);
        const grid: any = this.$refs.gridexpbar_grid;
        if (grid) {
            grid.load({ query: this.searchText });
        }
    }

    /**
     * gridexpbar的load完成事件
     *
     * @param {*} args
     * @param {*} [e]
     * @param {*} [data]
     * @memberof GridExpBarControlBase
     */
    public gridexpbar_load(args: any, e?: any, data?: any) {
        this.$emit('load', args);
        this.calcToolbarItemState(true);
    }
}
