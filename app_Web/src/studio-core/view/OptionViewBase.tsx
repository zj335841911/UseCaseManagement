import { ViewBase } from './ViewBase';

/**
 * 列表视图基类
 *
 * @export
 * @class OptionViewBase
 * @extends {MDViewBase}
 */
export class OptionViewBase extends ViewBase {
    /**
     * 确定
     *
     * @memberof OptionViewBase
     */
    public onClickOk(): void {
        const form: any = this.$refs.form;
        if (form) {
            form.save().then((res: any) => {
                if (res.status == 200) {
                    this.$emit('close', [res.data]);
                }
            });
        }
    }

    /**
     * 取消
     *
     * @memberof OptionViewBase
     */
    public onClickCancel(): void {
        this.$emit('close', null);
    }
}
