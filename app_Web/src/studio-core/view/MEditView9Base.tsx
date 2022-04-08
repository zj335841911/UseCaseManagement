import { Prop } from 'vue-property-decorator';
import { ViewBase } from './ViewBase';

/**
 * 实体多表单编辑视图基类
 *
 * @export
 * @class MEditView9Base
 * @extends {ViewBase}
 */
export class MEditView9Base extends ViewBase {
    /**
     * 刷新数据参数
     *
     * @type {number}
     * @memberof MEditView9Base
     */
    @Prop()
    public saveRefView?: number;

    /**
     * 关系数据变化
     *
     * @param {*} $event
     * @memberof MEditView9Base
     */
    public onViewDataDirty($event: any) {
        this.$emit('drdatachange', $event);
    }

    /**
     * 关系数据保存执行完成
     *
     * @param {*} $event
     * @memberof MEditView9Base
     */
    public onDRDataSaved($event: any) {
        this.$emit('drdatasaved', $event);
    }

    /**
     * 视图挂载完毕
     *
     * @protected
     * @memberof MEditView9Base
     */
    protected viewMounted(): void {
        if (this.formDruipart) {
            this.formDruipart.subscribe((res: any) => {
                if (Object.is(res.action, 'save')) {
                    let opt = { data: res.data };
                    Object.assign(opt, this.context);
                    this.viewState.next({ tag: 'meditviewpanel', action: 'save', data: opt });
                }
                if (Object.is(res.action, 'remove')) {
                    let opt = { data: res.data };
                    Object.assign(opt, this.context);
                    this.viewState.next({ tag: 'meditviewpanel', action: 'remove', data: opt });
                }
                if (Object.is(res.action, 'load')) {
                    this.viewState.next({ tag: 'meditviewpanel', action: 'load', data: this.context });
                }
            });
        }
    }
}
