import { ExpControlBase } from './ExpControlBase';

/**
 * 数据卡片导航视图
 *
 * @export
 * @class ListViewExpBarControlBase
 * @extends {ExpControlBase}
 */
export class ListViewExpBarControlBase extends ExpControlBase {
    /**
     * 分割宽度
     *
     * @type {number}
     * @memberof ListViewExpBarControlBase
     */
    public split: number = 0.2;

    /**
     * split值变化事件
     *
     * @memberof ListViewExpBarControlBase
     */
    public onSplitChange() {
        if (this.split) {
            this.$store.commit('setViewSplit', { viewUID: this.viewUID, viewSplit: this.split });
        }
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ListViewExpBarControlBase
     */
    public ctrlCreated() {
        this.loadQuickGroupModel();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.viewState.next({ tag: 'listexpbar_list', action: action, data: data });
            });
        }
    }

    /**
     * 部件销毁
     *
     * @protected
     * @memberof ListViewExpBarControlBase
     */
    protected ctrlDestroyed(): void {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        super.ctrlDestroyed();
    }
}
