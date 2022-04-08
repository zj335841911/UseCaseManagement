import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import moment from 'moment';
import { ActionItem } from '../../interface';
import { ActionTimelineItem } from './action-timeline-interface';
import './action-timeline.less';
import CodeListService from "@service/app/codelist-service";

/**
 * 动态时间轴展示模式
 *
 * @export
 * @class ActionTimeline
 * @extends {Vue}
 */
@Component({})
export class ActionTimeline extends Vue {

    /**
     * 按时间分组
     *
     * @protected
     * @type {Map<string, ActionTimelineItem[]>}
     * @memberof ActionTimeline
     */
    protected dayMap: Map<string, ActionTimelineItem[]> = new Map();

    /**
     * 格式化后数据
     *
     * @protected
     * @type {ActionTimelineItem[]}
     * @memberof ActionTimeline
     */
    protected $items: ActionTimelineItem[] = [];

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof AppCheckBox
     */  
    public codeListService:CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 排序模式
     *
     * @type {('asc' | 'desc')}
     * @memberof ActionTimeline
     */
    @Prop({ default: 'group' })
    public showType!: 'default' | 'group';

    /**
     * 展示数据
     *
     * @type {ActionItem[]}
     * @memberof ActionTimeline
     */
    @Prop({ default: () => [] })
    public items!: ActionItem[];

    /**
     * 列表模型
     * 
     * @memberof ActionTimeline
     */
    @Prop()
    public listModel!: any[];
    /**
     * 数据变更
     *
     * @memberof ActionTimeline
     */
    @Watch('items')
    public itemsWatch(): void {
        this.formatData(this.items);
    }

    /**
     * 已展开的项
     *
     * @protected
     * @type {string[]}
     * @memberof ActionTimeline
     */
    protected expands: string[] = [];

    /**
     * 行为对象类型代码表
     *
     * @protected
     * @type {any[]}
     * @memberof ActionTimeline
     */
    protected actionObjectType: any[] = [];

    /**
     * 行为类型代码表
     *
     * @protected
     * @type {any[]}
     * @memberof ActionTimeline
     */
    protected actionType: any[] = [];

    /**
     * 组件加载完毕
     *
     * @memberof ActionTimeline
     */
    public created(): void {
        const codeList = this.$store.getters.getCodeList('Action__object_type');
        if (codeList) {
            this.actionObjectType.push(...codeList.items);
        }
        const codeList2 = this.$store.getters.getCodeList('Action__type');
        if (codeList2) {
            this.actionType.push(...codeList2.items);
        }
        this.formatData(this.items);
    }

    /**
     * 格式化数据
     *
     * @protected
     * @param {any[]} items
     * @memberof ActionTimeline
     */
    protected formatData(items: any[]): void {
        if(this.dayMap.size > 0) {
            this.dayMap.clear();
        }
        if (items) {
            this.$items = [];
            // 日期临时计算数据，key为日期：2020-02-20
            const param: { [key: string]: ActionTimelineItem[] } = {};
            items.forEach((item: ActionItem) => {
                const data = this.actionType.find(code => Object.is(code.value, item.action));
                if (data) {
                    item.actionText = data.text;
                }
                const data2 = this.actionObjectType.find(code => Object.is(code.value, item.objecttype));
                if (data2) {
                    item.objectTypeText = "codelist.Action__object_type." + data2.value;
                }
                //根据列数据模型处理列表项代码表
                this.listItemCodelist(item);
                const m = moment(item.date);
                const date = m.format('YYYY-MM-DD');
                if (!param[date]) {
                    param[date] = [];
                }
                const actionTimelineItem: ActionTimelineItem = {
                    date: m,
                    dateText: m.format('MM月DD日 HH:mm'),
                    dateText2: m.format('HH:mm'),
                    data: item,
                };
                param[date].push(actionTimelineItem);
                this.$items.push(actionTimelineItem);
            });
            for (const key in param) {
                this.expands.push(key);
                this.dayMap.set(key, param[key]);
            }
            this.$forceUpdate();
        }
    }

    /**
     * 列表项代码表处理
     * 
     * 
     */
    public listItemCodelist(item: any){
        if(this.listModel && this.listModel.length > 0){
            this.listModel.forEach((listItem:any)=>{
                for(const key in item){
                    if(Object.is(key,listItem.name) && listItem.codelist){
                        if(Object.is(listItem.codelist.codelistType,"STATIC")){
                            const codelist = this.$store.getters.getCodeListItems(listItem.codelist.tag);
                            if(codelist){
                                const data = codelist.find((code:any) => Object.is(code.value, item[key]));
                                if(data){
                                    item[key] = data.text;
                                }
                            }
                        }else if(Object.is(listItem.codelist.codelistType,"DYNAMIC")){
                            this.codeListService.getItems(listItem.codelist.tag).then((codelist:any)=>{
                                if(codelist){
                                    const data = codelist.find((code:any) => Object.is(code.value, item[key]));
                                    if(data){
                                        item[key] = data.text;
                                    }
                                }
                            }).catch((error:any) => {
                                console.log(`----${listItem.codelist.tag}----代码表不存在`);
                            });
                        }
                    }
                }
            })
        }
    }

    /**
     * 绘制内容
     *
     * @protected
     * @param {ActionTimelineItem[]} [items=this.$items]
     * @returns {*}
     * @memberof ActionTimeline
     */
    protected renderContent(items: ActionTimelineItem[] = this.$items): any {
        return <ul class="action-timeline-wrapper">{items.map((item) => {
            return <li class="action-timeline-item">
                <div class="timeline-time">
                    {item.dateText}
                </div>
                <div class="timeline-content">
                    {item.data.actor}&nbsp;{item.data.actionText}&nbsp;{item.data.objectTypeText ? this.$t(item.data.objectTypeText) : ""}
                </div>
            </li>;
        })}</ul>;
    }

    /**
     * 收缩变更
     *
     * @protected
     * @param {string} date
     * @memberof ActionTimeline
     */
    protected changeExpand(date: string): void {
        const num = this.expands.findIndex(str => Object.is(date, str));
        if (num === -1) {
            this.expands.push(date);
        } else {
            this.expands.splice(num, 1);
        }
    }

    /**
     * 绘制费祖项
     *
     * @protected
     * @param {string} date
     * @param {ActionTimelineItem[]} items
     * @returns {*}
     * @memberof ActionTimeline
     */
    protected renderGroupItem(date: string, items: ActionTimelineItem[]): any {
        const month = moment(date).format('MM月DD日');
        const judge = this.expands.findIndex(str => Object.is(date, str)) !== -1;
        return <div class={{ 'action-timeline-group': true, 'expand': judge }}>
            <div class="date">
                {month}
                <div class="arrow" on-click={() => this.changeExpand(date)}>
                    <icon type={judge ? 'ios-arrow-down' : 'ios-arrow-up'} />
                </div>
            </div>
            <div class="timeline">{this.renderContent(judge ? items : [items[0]])}</div>
        </div>;
    }

    /**
     * 绘制分组呈现模式
     *
     * @protected
     * @returns {*}
     * @memberof ActionTimeline
     */
    protected renderGroupMode(): any {
        const items: any[] = [];
        this.dayMap.forEach((item, key) => {
            items.push(this.renderGroupItem(key, item));
        });
        return <div class="action-timeline-group-wrapper">
            {items}
        </div>;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof ActionTimeline
     */
    public render(): any {
        if (Object.is(this.showType, 'group')) {
            return <div class="action-timeline">
                {this.renderGroupMode()}
            </div>;
        }
        return <div class="action-timeline">
            {this.renderContent()}
        </div>;
    }

}