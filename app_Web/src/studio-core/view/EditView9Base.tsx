import { Prop } from 'vue-property-decorator';
import { EditViewBase } from './EditViewBase';
import { Subject } from 'rxjs';

/**
 * 编辑部件视图基类
 *
 * @export
 * @class EditView9Base
 * @extends {EditViewBase}
 */
export class EditView9Base extends EditViewBase {
    /**
     * meditview9状态下发变量
     *
     * @type {Subject<ViewState>}
     * @memberof EditView9Base
     */
    @Prop()
    public panelState?: Subject<ViewState>;
}
