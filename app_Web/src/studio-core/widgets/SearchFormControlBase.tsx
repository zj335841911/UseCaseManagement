import { Prop } from 'vue-property-decorator';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { EditFormControlBase } from './EditFormControlBase';

/**
 * 搜索表单部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {EditFormControlBase}
 */
export class SearchFormControlBase extends EditFormControlBase {
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof SearchFormControlBase
     */
    @Prop()
    public searchAction!: string;

    /**
     * 部件创建完毕
     *
     * @memberof SearchFormControlBase
     */
    public ctrlCreated(): void {
        super.ctrlCreated();
        this.dataChang.pipe(debounceTime(300), distinctUntilChanged()).subscribe((data: any) => {
            this.$emit('load', this.data);
        });
    }

    /**
     * 表单值变化
     *
     * @param {{ name: string, newVal: any, oldVal: any }} param
     * @memberof SearchFormControlBase
     */
    public formDataChange(param: { name: string; newVal: any; oldVal: any }): void {
        super.formDataChange(param);
        this.$emit('valuechange', this.data);
    }

    /**
     * 表单加载完成
     *
     * @param {*} [data={}]
     * @param {string} action
     * @memberof SearchFormControlBase
     */
    public onFormLoad(data: any = {}, action: string): void {
        this.setFormEnableCond(data);
        this.fillForm(data, action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }

    /**
     * 回车事件
     *
     * @param {*} $event
     * @memberof SearchFormControlBase
     */
    public onEnter($event: any): void {
        this.$emit('load', this.data);
    }

    /**
     * 搜索
     *
     * @memberof SearchFormControlBase
     */
    public onSearch() {
        this.$emit('load', this.data);
    }

    /**
     * 重置
     *
     * @memberof SearchFormControlBase
     */
    public onReset() {
        this.loadDraft();
    }
}
