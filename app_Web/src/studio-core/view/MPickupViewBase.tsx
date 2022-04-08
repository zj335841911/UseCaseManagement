import { PickupViewBase } from './PickupViewBase';
import { Vue, Emit, Prop, Watch } from 'vue-property-decorator';

/**
 * 多项数据选择视图基类
 *
 * @export
 * @class MPickupViewBase
 * @extends {ViewBase}
 */
export class MPickupViewBase extends PickupViewBase {
    /**
     * 是否初始化已选中项
     *
     * @type {boolean}
     * @memberof MPickupViewBase
     */
    public isInitSelected: boolean = false;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof MPickupViewBase
     */
    public isSingleSelect: boolean = false;

    /**
     * 视图参数变更
     *
     * @protected
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MPickupViewBase
     */
    @Watch('viewparam', { immediate: true, deep: true })
    protected viewParamChange(newVal: any, oldVal: any): void {
        if (this.viewparams.selectedData) {
            this.selectedData = JSON.stringify(this.viewparams.selectedData);
        }
    }

    /**
     * 视图组件挂载完毕
     *
     * @protected
     * @memberof MPickupViewBase
     */
    protected viewMounted(): void {
        if (this.viewparams.selectedData) {
            this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', this.viewparams.selectedData);
            this.onCLickRight();
        }
    }

    /**
     * 选中数据单击
     *
     * @param {*} item
     * @memberof MPickupViewBase
     */
    public selectionsClick(item: any): void {
        item._select = !item._select;
        const removeSelect: boolean = this.viewSelections.some((selection: any) => selection._select);
        this.containerModel.view_leftbtn.disabled = !removeSelect;
    }

    /**
     * 选中树双击
     *
     * @param {*} item
     * @memberof MPickupViewBase
     */
    public selectionsDBLClick(item: any): void {
        const index: number = this.viewSelections.findIndex((selection: any) =>
            Object.is(selection.srfkey, item.srfkey)
        );
        if (index !== -1) {
            this.viewSelections.splice(index, 1);
        }
        const removeSelect: boolean = this.viewSelections.some((selection: any) => selection._select);
        this.containerModel.view_leftbtn.disabled = !removeSelect;
        this.selectedData = JSON.stringify(this.viewSelections);
    }

    /**
     * 删除右侧全部选中数据
     *
     * @memberof MPickupViewBase
     */
    public onCLickLeft(): void {
        const _selectiions = [...JSON.parse(JSON.stringify(this.viewSelections))];
        _selectiions.forEach((item: any) => {
            if (!item._select) {
                return;
            }
            const index = this.viewSelections.findIndex((selection: any) => Object.is(item.srfkey, selection.srfkey));
            if (index !== -1) {
                this.viewSelections.splice(index, 1);
            }
        });
        const removeSelect: boolean = this.viewSelections.some((selection: any) => selection._select);
        this.containerModel.view_leftbtn.disabled = !removeSelect;
        this.selectedData = JSON.stringify(this.viewSelections);
    }

    /**
     * 添加左侧选中数据
     *
     * @memberof MPickupViewBase
     */
    public onCLickRight(): void {
        Object.values(this.containerModel).forEach((model: any) => {
            if (!Object.is(model.type, 'PICKUPVIEWPANEL')) {
                return;
            }
            let newSelections: any[] = [];
            model.selections.forEach((item: any) => {
                const index: number = this.viewSelections.findIndex((selection: any) =>
                    Object.is(item.srfkey, selection.srfkey)
                );
                if (index === -1) {
                    let _item: any = { ...JSON.parse(JSON.stringify(item)) };
                    Object.assign(_item, { _select: false });
                    newSelections.push(_item);
                } else {
                    newSelections.push(this.viewSelections[index]);
                }
            });
            this.viewSelections = this.removeDuplicates([...newSelections, ...this.viewSelections]);
        });
    }

    /**
     * 去重
     *
     * @param {*} data
     * @returns {Array<any>}
     * @memberof MPickupViewBase
     */
    public removeDuplicates(data: any): Array<any> {
        const uniqueSet = new Set(data);
        return [...uniqueSet];
    }

    /**
     * 选中数据全部删除
     *
     * @memberof MPickupViewBase
     */
    public onCLickAllLeft(): void {
        this.viewSelections = [];
        this.containerModel.view_leftbtn.disabled = true;
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', []);
        this.selectedData = JSON.stringify(this.viewSelections);
    }
}
