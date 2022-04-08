import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Project } from '@/interface/entity/project';
import './project-list.less';

/**
 * 产品展示列表
 *
 * @export
 * @class ProjectList
 * @extends {Vue}
 */
@Component({})
export class ProjectList extends Vue {

    /**
     * 数据
     *
     * @type {any[]}
     * @memberof ProjectList
     */
    @Prop({ default: () => [] })
    public items!: Project[];

    /**
     * 项单机事件
     *
     * @param {Project} item
     * @memberof ProjectList
     */
    @Emit('item-click')
    public itemClick(item: Project): void { }

    /**
     * 项单机
     *
     * @protected
     * @param {MouseEvent} e
     * @param {Project} item
     * @memberof ProjectList
     */
    protected click(e: MouseEvent, item: Project): void {
        e.stopPropagation();
        this.itemClick(item);
    }

    /**
     * 打开行为视图
     *
     * @protected
     * @param {MouseEvent} e
     * @param {Product} item
     * @param {string} srftabactivate
     * @memberof ProjectList
     */
    protected openActionView(e: MouseEvent, item: any, srftabactivate: string): void {
        e.stopPropagation();
        item.srftabactivate = srftabactivate;
        this.itemClick(item);
    }

    /**
     * 置顶
     *
     * @param {*} $event
     * @param {*} item
     * @memberof ProjectList
     */
    public setTop($event: any, item: any) {
        $event.stopPropagation();
        this.$nextTick(() => {
            this.$emit("item-action-click", {tag: 'deuiaction1'}, item);
        })
    }

    /**
     * 取消置顶
     *
     * @param {*} $event
     * @param {*} item
     * @memberof ProjectList
     */
    public canelTop($event: any, item: any) {
        $event.stopPropagation();
        this.$emit("item-action-click", {tag: 'deuiaction2'}, item);
    }

    /**
     * 绘制产品项
     *
     * @protected
     * @param {Project} p
     * @returns {*}
     * @memberof ProjectList
     */
    protected renderItem(p: Project): any {
        this.handleCodelist(p);
        return <listItem class={{'is-top': p.istop}}>
            <div class="content-wrapper" on-click={(e: any) => this.click(e, p)}>
                <div class="title">
                    <tag type="border">{p.id}</tag>
                    <tag>{p.code}</tag>
                    <div class="name-content">
                        <div class="name" title={p.name}>{p.name}</div>
                        <span class="open-action" on-click={(e: any) => this.click(e, p)}>
                            <icon type="md-open" />
                        </span>
                    </div>
                    <div class="item-action">
                        {p.istop ? <i-button on-click={($event: any) => this.canelTop($event, p)}>取消置顶</i-button> : <i-button on-click={($event: any) => this.setTop($event, p)}>置顶</i-button>}
                    </div>
                </div>
                <div class="content">
                    <tag color="cyan">类型：{p.type}</tag>
                    <tag color="geekblue">状态：{p.status}</tag>
                </div>
            </div>
            <template slot="action">
                <li on-click={(e: any) => this.openActionView(e, p, 'tabviewpanel7')}>
                    需求：{p.storycnt}
                </li>
                <li on-click={(e: any) => this.openActionView(e, p, 'tabviewpanel2')}>
                    任务：{p.taskcnt}
                </li>
                <li on-click={(e: any) => this.openActionView(e, p, 'tabviewpanel8')}>
                    Bug：{p.bugcnt}
                </li>
            </template>
        </listItem>;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof ProjectList
     */
    public render(): any {
        return <div class="project-list">
            {this.items.map((item: Project) => {
                return <list item-layout="vertical">{this.renderItem(item)}</list>;
            })}
        </div>;
    }

    /**
     * 代码表处理国际化
     *
     * @returns {*}
     * @memberof ProjectList
     */
    public handleCodelist(item: any) {
        const codelistStatus = this.$store.getters.getCodeListItems("Project__status");
        if(codelistStatus && codelistStatus.length>0) {
            const status = codelistStatus.find((_item: any) => Object.is(item.status, _item.label));
            item.status = status ? this.$t('codelist.Project__status.'+status.value) : item.status;
        }
        const codelistType = this.$store.getters.getCodeListItems("Project__type");
        if(codelistType && codelistType.length>0) {
            const type = codelistType.find((_item: any) => Object.is(item.type, _item.label));
            item.type = type ? this.$t('codelist.Project__type.'+type.value) : item.type;
        }
    }

}