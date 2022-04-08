import { Prop, Watch } from 'vue-property-decorator';
import { MDViewBase } from './MDViewBase';

/**
 * 表格视图基类
 *
 * @export
 * @class GridViewBase
 * @extends {MDViewBase}
 */
export class GridViewBase extends MDViewBase {
    /**
     * 表格行数据默认激活模式
     * 0 不激活
     * 1 单击激活
     * 2 双击激活
     *
     * @readonly
     * @type {(0 | 1 | 2)}
     * @memberof GridViewBase
     */
    protected gridRowActiveMode: 0 | 1 | 2 = 2;

    /**
     * 是否单选
     *
     * @readonly
     * @type {boolean}
     * @memberof GridViewBase
     */
    protected isGridSingleSelect: boolean = false;

    /**
     * 刷新数据
     *
     * @readonly
     * @protected
     * @type {(number | null)}
     * @memberof GridViewBase
     */
    protected get refreshdata(): number | null {
        return this.$store.getters['viewaction/getRefreshData'](this.viewtag);
    }

    /**
     * 监控数据变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @returns
     * @memberof GridViewBase
     */
    @Watch('refreshdata')
    public onRefreshData(newVal: any, oldVal: any) {
        if (!newVal) {
            return;
        }
        const grid: any = this.$refs.grid;
        if (grid) {
            grid.load({});
        }
    }

    /**
     * 快速搜索
     *
     * @protected
     * @memberof GridViewBase
     */
    protected onSearch(): void {
        const grid: any = this.$refs.grid;
        if (grid) {
            grid.load(this.context, true);
        }
    }

    /**
     * grid 部件 save 事件
     *
     * @protected
     * @param {*} $event
     * @memberof GridViewBase
     */
    protected onSave($event: any) {
        this.$emit('drdatasaved', $event);
    }
}
