import { MDViewBase } from './MDViewBase';

/**
 * 图表视图基类
 *
 * @export
 * @class ChartViewBase
 * @extends {MDViewBase}
 */
export class ChartViewBase extends MDViewBase {
    /**
     * 快速搜索
     *
     * @protected
     * @memberof ChartViewBase
     */
    protected onSearch(): void {
        const chart: any = this.$refs.chart;
        if (chart) {
            chart.load(this.context, true);
        }
    }
}
