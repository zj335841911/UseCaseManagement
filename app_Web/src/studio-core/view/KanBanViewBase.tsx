import { MDViewBase } from './MDViewBase';

/**
 * 看板视图基类
 *
 * @export
 * @class KanBanViewBase
 * @extends {MDViewBase}
 */
export class KanBanViewBase extends MDViewBase {

    /**
     * 快速搜索
     *
     * @protected
     * @memberof KanBanViewBase
     */
    protected onSearch(): void {
        const kanban: any = this.$refs.kanban;
        if (kanban) {
            kanban.load(this.context, true);
        }
    }
}
