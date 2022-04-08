/**
 * 表单成员模型
 *
 * @export
 * @class FormDetailModel
 */
export class FormDetailModel {
    /**
     * 参数
     *
     * @type {*}
     * @memberof FormDetailModel
     */
    public opts: any = {};

    /**
     * 父
     *
     * @type {*}
     * @memberof FormDetailModel
     */
    public parent: any = null;

    /**
     * 成员标题
     *
     * @type {string}
     * @memberof FormDetailModel
     */
    public caption: string = '';

    /**
     * 成员类型
     *
     * @type {string}
     * @memberof FormDetailModel
     */
    public detailType: string = '';

    /**
     * 表单对象
     *
     * @type {*}
     * @memberof FormDetailModel
     */
    public form: any = null;

    /**
     * 成员名称
     *
     * @type {string}
     * @memberof FormDetailModel
     */
    public name: string = '';

    /**
     * 成员是否显示
     *
     * @type {boolean}
     * @memberof FormDetailModel
     */
    protected $visible: boolean;

    /**
     * 是否有权限
     *
     * @type {boolean}
     * @memberof FormDetailModel
     */
    public isPower: boolean = true;

    /**
     * 成员是否隐藏
     *
     * @readonly
     * @type {boolean}
     * @memberof FormDetailModel
     */
    public get visible(): boolean {
        return this.isShowMore && this.$visible;
    }

    /**
     * 设置成员是否隐藏
     *
     * @memberof FormDetailModel
     */
    public set visible(val: boolean) {
        if (this.isPower) {
            this.$visible = val;
        }
    }

    /**
     * 成员是否显示标题
     *
     * @type {boolean}
     * @memberof FormDetailModel
     */
    public isShowCaption: boolean;

    /**
     * 表单项受控模式，
     *
     * @type {(0 | 1 | 2)}
     * @memberof FormDetailModel
     */
    public showMoreMode: 0 | 1 | 2 = 0;

    /**
     * 受控项是否显示
     *
     * @type {boolean}
     * @memberof FormGroupPanelModel
     */
    public isShowMore: boolean;

    /**
     * Creates an instance of FormDetailModel.
     * FormDetailModel 实例
     *
     * @param {*} [opts={}]
     * @memberof FormDetailModel
     */
    constructor(opts: any = {}) {
        this.opts = opts;
        this.caption = !Object.is(opts.caption, '') ? opts.caption : '';
        this.detailType = !Object.is(opts.detailType, '') ? opts.detailType : '';
        this.form = opts.form ? opts.form : {};
        this.name = !Object.is(opts.name, '') ? opts.name : '';
        this.$visible = opts.visible ? true : false;
        this.isShowCaption = opts.isShowCaption ? true : false;
        this.showMoreMode = opts.showMoreMode;
        if (this.showMoreMode === 1) {
            this.isShowMore = false;
        } else {
            this.isShowMore = true;
        }
    }

    /**
     * 设置显示与隐藏
     *
     * @param {boolean} state
     * @memberof FormDetailModel
     */
    public setVisible(state: boolean): void {
        if (this.isPower) {
            this.visible = state;
        }
    }

    /**
     * 改变显示更多受控项状态
     *
     * @param {boolean} bol
     * @memberof FormDetailModel
     */
    public setShowMore(bol: boolean): void {
        if (isExist(bol)) {
            this.isShowMore = bol;
        } else {
            this.isShowMore = !this.isShowMore;
        }
    }

    /**
     * 设置显示标题栏
     *
     * @param {boolean} state
     * @memberof FormDetailModel
     */
    public setShowCaption(state: boolean): void {
        this.isShowCaption = state;
    }
}
