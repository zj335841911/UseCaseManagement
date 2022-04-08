import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ActionItem, HistoryItem } from '../../interface';
import './action-history.less';

/**
 * 操作历史记录
 *
 * @export
 * @class ActionHistory
 * @extends {Vue}
 */
@Component({})
export class ActionHistory extends Vue {

    /**
     * 数据
     *
     * @type {ActionItem[]}
     * @memberof ActionHistory
     */
    @Prop({ default: () => [] })
    public items!: ActionItem[];

    /**
     * 监控数据变化
     *
     * @memberof ActionHistory
     */
    @Watch('items', { immediate: true })
    public itemsWatch(): void {
        this.formatData();
    }

    /**
     * 根据Action加载对应History
     *
     * @memberof ActionHistory
     */
    @Prop()
    public load?: (item: ActionItem) => Promise<HistoryItem[]>;

    /**
     * 行为类型代码表
     *
     * @protected
     * @type {any[]}
     * @memberof ActionHistory
     */
    protected actionType: any[] = [];

    /**
     * '解决了' 显示模型数据
     *
     * @memberof ActionHistory
     */
    @Prop() public dynaModel!: any;

    /**
     * 格式化数据
     *
     * @protected
     * @memberof ActionHistory
     */
    protected formatData(): void {
        if (this.actionType.length === 0) {
            const codeList2 = this.$store.getters.getCodeList('Action__type');
            if (codeList2) {
                this.actionType.push(...codeList2.items);
            }
        }
        this.items.forEach((item: ActionItem) => {
            let actionType: string = item.actiontype ? item.actiontype : item.action;
            const data = this.actionType.find(code => Object.is(code.value, actionType));
            if (data) {
                item.actionText = data.text;
            }
        })
    }

    /**
     * 加载子数据
     *
     * @param {ActionItem} item
     * @memberof ActionHistory
     */
    public async loadChildren(item: ActionItem): Promise<void> {
        if (item && item.isLoadedChildren === true) {
            item.expand = !item.expand;
            this.$forceUpdate();
            return;
        }
        if (item && this.load) {
            try {
                const items: any[] = await this.load(item);
                if (items) {
                    item.children = items;
                    item.expand = true;
                    item.isLoadedChildren = true;
                    this.$forceUpdate();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    /**
     * 编辑数据
     *
     * @param {*} item
     * @memberof ActionHistory
     */
    public editData(item: any) {
        this.$emit('edit-data', item)
    }

    /**
     * 绘制操作历史项
     *
     * @protected
     * @param {ActionItem} action
     * @param {History} item
     * @returns {*}
     * @memberof ActionHistory
     */
    protected renderHistoryItem(action: ActionItem, item: HistoryItem): any {
        const fieldText = this.$t(`entities.${action.objecttype.toLowerCase()}.fields.${item.field.toLowerCase()}`);
        if (item.diff) {
            return <div class="history-content">
                {action.actionText}&nbsp;<strong>{fieldText}</strong>，区别为：<span><action-history-diff content={item.diff} /></span>
            </div>
        }
        const old = isNaN(item.old) && !isNaN(Date.parse(item.old)) ? this.handleDate(item.old) : "\""+item.old+"\"";
        const ibiznew = isNaN(item.ibiznew) && !isNaN(Date.parse(item.ibiznew)) ? this.handleDate(item.ibiznew) : "\""+item.ibiznew+"\"";
        return <div class="history-content">修改了&nbsp;<strong>{fieldText}</strong>，旧值为 { old }，新值为 { ibiznew }。</div>;
    }

    /**
     * 时间处理
     *
     * @public
     * @param {*} date
     * @returns {*}
     * @memberof ActionHistory
     */
    public handleDate(date: any) {
        const reg = /\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}/;
        if(date.toString().search(reg) !== -1) {
            date = date.toString().match(reg);
        }
        return date;
    }

    /**
     * 绘制操作历史
     *
     * @protected
     * @param {ActionItem} action
     * @param {HistoryItem[]} items
     * @returns {*}
     * @memberof ActionHistory
     */
    protected renderHistory(action: ActionItem, items: HistoryItem[]): any {
        return <div class="history-wrapper">
            {items.map((item: HistoryItem) => {
                return <div class="history-item">
                    {this.renderHistoryItem(action, item)}
                </div>;
            })}
        </div>;
    }

    /**
     * 绘制操作项内容
     *
     * @protected
     * @param {ActionItem} item
     * @returns {*}
     * @memberof ActionHistory
     */
    protected renderActionContent(item: ActionItem): any {
        let actionType: string = item.actiontype ? item.actiontype : item.action;
        return <div class="action-content">
            <div class="text">{item.date}，由&nbsp;<strong>{item.actor}</strong>&nbsp;{item.actionText}{this.renderFixedContent(item)}</div>
            { (Object.is(actionType, 'changed') || Object.is(actionType, 'edited')  || Object.is(actionType, 'commented') || Object.is(actionType, 'assigned') || Object.is(actionType, 'reviewed') || Object.is(actionType, 'activated') || Object.is(actionType, 'resolved') || Object.is(actionType, 'bugconfirmed')) && this.load ? <div class="show-history">
                <i-button title="切换显示" type="text" ghost icon={item.expand === true ? 'md-remove-circle' : 'md-add-circle'} on-click={() => this.loadChildren(item)} />
            </div> : null}
        </div>;
    }

    /**
     * 绘制处理信息
     *
     * @protected
     * @param {ActionItem} item
     * @param {any} actionContent
     * @returns {*}
     * @memberof ActionHistory
     */
    public renderFixedContent(item: ActionItem) {
        let actionType: string = item.actiontype ? item.actiontype : item.action;
        if(item.extra && this.dynaModel) {
            const model = this.dynaModel.find((modelFix:any) => (Object.is(modelFix.objecttype, item.objecttype) && Object.is(modelFix.action, actionType)));
            if(model && model.codelistId) {
                let codeList = this.$store.getters.getCodeList(model.codelistId);
                if(codeList) {
                    const code = codeList.items.find((code: any) => Object.is(item.extra, code.value));
                    if(code) {
                        return <span>，{model.othertext}&nbsp;<b>{code.text}</b></span>;
                    }
                }
            }
        }
    }

    /**
     * @protected
     * @param {ActionItem} item
     *
     */
    protected  renderActionComment(item : ActionItem, isEdit: boolean): any {
        return <div class="action-comment">
            <html-container content={item.comment}></html-container>
            { isEdit ? <icon class="action-comment-edit" type="ios-create-outline" on-click={() => this.editData(item)}/> : null }
        </div>;
    }

    /**
     * 绘制操作项
     *
     * @protected
     * @returns {*}
     * @memberof ActionHistory
     */
    protected renderAction(): any {
        return <div class="action-wrapper">
            {this.items.map((item: ActionItem, index: number) => {
                return <div class="action-item">
                    {this.renderActionContent(item)}
                    {(item.children && item.expand) ? this.renderHistory(item, item.children) : null}
                    {item.comment ? this.renderActionComment(item, (this.items.length - 1 == index && item.isactorss === 1)) : null}
                </div>;
            })}
        </div>;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof ActionHistory
     */
    public render(): any {
        return <div class="action-history-wrapper">
            <div class="action-history-header">
                <span class="title">历史记录</span>
            </div>
            {this.renderAction()}
        </div>;
    }

}