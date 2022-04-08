import { ExpControlBase } from './ExpControlBase';

/**
 * 数据卡片导航视图
 *
 * @export
 * @class DataViewExpBarControlBase
 * @extends {ExpControlBase}
 */
export class DataViewExpBarControlBase extends ExpControlBase {
    /**
     * 数据视图是否单选
     *
     * @type {boolean}
     * @memberof DataViewExpBarControlBase
     */
    public isDataViewSingleSelect: boolean = true;

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
                this.viewState.next({ tag: 'dataviewexpbar_dataview', action: action, data: data });
            });
        }
    }

    /**
     * 执行搜索
     *
     * @memberof DataViewExpBarControlBase
     */
    public onSearch(args: any): void {
        this.viewState.next({ tag: 'dataviewexpbar_dataview', action: 'filter', data: { query: this.searchText } });
    }

    /**
     * 卡片视图加载完成
     *
     * @param {any[]} args
     * @param {string} [tag]
     * @param {*} [$event2]
     * @returns {void}
     * @memberof DataViewExpBarControlBase
     */
    public dataviewexpbar_load(args: any[], tag?: string, $event2?: any): void {
        this.$emit('load', args);
    }
}
