import { ControlBase } from './ControlBase';

/**
 * 部件基础公共基类
 *
 * @export
 * @class MainControlBase
 * @extends {ControlBase}
 */
export class MainControlBase extends ControlBase {
    /**
     * 转化数据
     *
     * @param {*} args
     * @returns
     * @memberof MainControlBase
     */
    public transformData(args: any) {
        if (this.service && this.service.handleRequestData) {
            const res = this.service.handleRequestData('transform', this.context, args);
            if (res) {
                return res.data;
            }
        }
    }
}
