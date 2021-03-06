import EditViewEngine from './edit-view-engine';

/**
 * 实体编辑视图（上下关系）界面引擎
 *
 * @export
 * @class EditView4Engine
 * @extends {EditViewEngine}
 */
export default class EditView4Engine extends EditViewEngine {
    /**
     * 数据关系栏
     *
     * @protected
     * @type {*}
     * @memberof EditView4Engine
     */
    protected drTab: any;

    /**
     * Creates an instance of EditView4Engine.
     *
     * @memberof EditView4Engine
     */
    constructor() {
        super();
    }

    /**
     * 初始化引擎
     *
     * @param {*} [options={}]
     * @memberof EditView4Engine
     */
    public init(options: any = {}): void {
        this.drTab = options.drtab;
        super.init(options);
    }

    /**
     * 部件事件机制
     *
     * @param {string} ctrlName
     * @param {string} eventName
     * @param {*} args
     * @memberof EditView4Engine
     */
    public onCtrlEvent(ctrlName: string, eventName: string, args: any): void {
        super.onCtrlEvent(ctrlName, eventName, args);
        if (Object.is(ctrlName, 'drtab')) {
            this.drTabEvent(eventName, args);
        }
    }

    /**
     * 数据关系栏事件
     *
     * @param {string} eventName
     * @param {any[]} args
     * @memberof EditView4Engine
     */
    public drTabEvent(eventName: string, args: any[]): void {
        if (Object.is(eventName, 'selectionchange')) {
            this.drTabSelectionChange(args);
        }
    }

    /**
     * 数据关系栏选中
     *
     * @param {any[]} args
     * @memberof EditView4Engine
     */
    public drTabSelectionChange(args: any[]): void {
        const item = args[0];
        if (!item || Object.keys(item).length === 0) {
            return;
        }
        this.view.selection = {};
        Object.assign(this.view.selection, JSON.parse(JSON.stringify(item)));
    }

    /**
     * 表单加载完成
     *
     * @param {*} [arg={}]
     * @memberof EditView4Engine
     */
    public onFormLoad(arg: any = {}): void {
        super.onFormLoad(arg);
        if (this.getDrTab()) {
            const tag = this.getDrTab().name;
            this.setViewState2({ tag: tag, action: 'state', viewdata: this.view.viewparams });
        }
    }

    /**
     * 表单保存完成
     *
     * @param {*} [arg={}]
     * @memberof EditView4Engine
     */
    public onFormSave(arg: any = {}): void {
        super.onFormSave(arg);
        if (this.getDrTab()) {
            const tag = this.getDrTab().name;
            this.setViewState2({ tag: tag, action: 'state', viewdata: this.view.viewparams });
        }
    }

    /**
     * 获取关系
     *
     * @returns {*}
     * @memberof EditView4Engine
     */
    public getDrTab(): any {
        return this.drTab;
    }
}
