import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { RoadMapItem } from './road-map-interface';
import './road-map.less';

/**
 * 
 *
 * @export
 * @class RoadMap
 * @extends {Vue}
 */
@Component({})
export class RoadMap extends Vue {

    /**
     * 绘制模式
     *
     * @type {('group' | 'default')}
     * @memberof RoadMap
     */
    @Prop({ default: 'group' })
    public mode!: 'group' | 'default';

    /**
     * 展示的数据
     *
     * @protected
     * @type {RoadMapItem[]}
     * @memberof RoadMap
     */
    protected showItems: RoadMapItem[] = [];

    /**
     * 路线图数据
     *
     * @type {RoadMapItem[]}
     * @memberof RoadMap
     */
    @Prop({ default: () => [] })
    public items!: RoadMapItem[];

    /**
     * 监控数据变化
     *
     * @memberof RoadMap
     */
    @Watch('items', { immediate: true })
    public itemsWatch(): void {
        this.formatData();
    }

    /**
     * 格式化展示数据
     *
     * @protected
     * @memberof RoadMap
     */
    protected formatData(): void {
        if (Object.is(this.mode, 'default')) {
            const items: RoadMapItem[] = [];
            this.items.forEach((item: any) => {
                if (item && item.items) {
                    items.push(...item.items);
                }
            });
            if (items.length <= 7) {
                this.showItems = items;
            } else {
                this.showItems.push(...items.slice(0, 6));
                this.showItems.push(...items.slice(items.length - 1));
            }
        }
    }

    /**
     * 绘制分组模式
     *
     * @protected
     * @returns {*}
     * @memberof RoadMap
     */
    protected renderGroup(): any {
        return <div class="road-map-group-wrapper">
            {this.items.map((item: any) => {
                if (!item.items) {
                    return;
                }
                return <div class="road-map-group-item">
                    <div class="title-wrapper">
                        <div class="title">
                            <div class="year">{item.year}年</div>
                            <div class="iteration">迭代{item.items.length}次</div>
                        </div>
                    </div>
                    <div class="content">
                        {this.renderItems(item.items)}
                    </div>
                </div>;
            })}
        </div>;
    }

    /**
     *
     *
     * @protected
     * @param {any[]} items
     * @returns {*}
     * @memberof RoadMap
     */
    protected renderItems(items: any[]): any {
        return <div class="road-map-wrapper">
            {
                items.map((item, i) => {  
                    return <div class="road-map-item">
                        <a href="javascript:void(0);">
                            <div class="content">
                                <div class="title" title={item.productlifename}>{item.productlifename}</div>
                                {
                                    Object.is(item.type, 'productplan')
                                        ?
                                        <div class="date" title={item.begin}>{item.begin}{Object.is(this.mode, 'group') ? '~' + item.end : ''}</div>
                                        :
                                        <div class="date" title={item.end}>{item.end}</div>
                                }
                                {
                                    item.marker === 1 && (i % 2 === 0 ? <i class="fa fa-flag fa-2x odd" aria-hidden="true"></i> : <i class="fa fa-flag fa-2x even" aria-hidden="true"></i>)
                                }  
                            </div>
                        </a>
                    </div>;
                })
            }
        </div>;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof RoadMap
     */
    public render(): any {
        return <div class="road-map">
            {Object.is(this.mode, 'default') ? this.renderItems(this.showItems) : this.renderGroup()}
        </div>;
    }

}