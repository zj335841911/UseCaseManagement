import { FormDetailModel } from './form-detail';

/**
 * 分组面板模型
 *
 * @export
 * @class FormGroupPanelModel
 * @extends {FormDetailModel}
 */
export class FormGroupPanelModel extends FormDetailModel {
    /**
     * 实体界面行为组
     *
     * @type {*}
     * @memberof FormGroupPanelModel
     */
    public uiActionGroup: any = {};

    /**
     * 所有锚点项
     *
     * @type {any[]}
     * @memberof FormGroupPanelModel
     */
    public anchorPoints: any = {};

    /**
     * 所有受控项
     *
     * @type {*}
     * @memberof FormGroupPanelModel
     */
    public controlledItems: any = {};

    /**
     * 表单分组控制子是否显示更多
     *
     * @type {boolean}
     * @memberof FormGroupPanelModel
     */
    public showMore: boolean = false;

    /**
     * Creates an instance of FormGroupPanelModel.
     * 创建 FormGroupPanelModel 实例
     *
     * @param {*} [opts={}]
     * @memberof FormGroupPanelModel
     */
    constructor(opts: any = {}) {
        super(opts);
        Object.assign(this.uiActionGroup, opts.uiActionGroup);
    }

    /**
     * 改变显示更多受控项状态
     *
     * @param {boolean} bol
     * @memberof FormDetailModel
     */
    public changeShowMore(bol: boolean): void {
        if (isExist(bol)) {
            this.isShowMore = bol;
        } else {
            this.showMore = !this.showMore;
        }
        for (const key in this.controlledItems) {
            if (this.controlledItems.hasOwnProperty(key)) {
                const item = this.controlledItems[key];
                item.setShowMore(this.showMore);
            }
        }
    }
}
