import { EditViewBase } from './EditViewBase';

/**
 * 编辑视图（左右关系）基类
 *
 * @export
 * @class EditView2Base
 * @extends {EditViewBase}
 */
export class EditView2Base extends EditViewBase {
    /**
     * 选中数据
     *
     * @type {*}
     * @memberof EditView2Base
     */
    public selection: any = {};
}
