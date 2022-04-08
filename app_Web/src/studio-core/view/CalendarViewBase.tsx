import { MDViewBase } from './MDViewBase';

/**
 * 日历视图基类
 *
 * @export
 * @class CalendarViewBase
 * @extends {MDViewBase}
 */
export class CalendarViewBase extends MDViewBase {
    /**
     * 快速搜索
     *
     * @protected
     * @memberof ListViewBase
     */
    protected onSearch(): void {
        const calendar: any = this.$refs.calendar;
        if (calendar) {
            calendar.refresh();
        }
    }

    /**
     * calendar 的 beforeload 事件
     *
     * @param {*} arg
     * @memberof CalendarViewBase
     */
    public onBeforeLoad(arg: any): void {
        if (this.viewparams && Object.keys(this.viewparams).length > 0) {
            Object.assign(arg, this.viewparams);
        }
        if (this.$refs.searchform && this.isExpandSearchForm) {
            Object.assign(arg, (this.$refs.searchform as any).getData());
        }
        if (this && !this.isExpandSearchForm) {
            Object.assign(arg, { query: this.query });
        }
        // 快速分组和快速搜索栏
        const otherQueryParam: any = {};
        if (this.quickGroupData) {
            Object.assign(otherQueryParam, this.quickGroupData);
        }
        if (this.quickFormData) {
            Object.assign(otherQueryParam, this.quickFormData);
        }
        Object.assign(arg, { viewparams: otherQueryParam });
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} $event
     * @memberof CalendarViewBase
     */
    public searchform_search() {
        this.onSearch();
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} $event
     * @memberof CalendarViewBase
     */
    public searchform_load() {
        this.onSearch();
    }

    /**
     * 刷新
     *
     * @memberof ViewBase
     */
    public refresh() {
        this.onSearch();
    }
}
