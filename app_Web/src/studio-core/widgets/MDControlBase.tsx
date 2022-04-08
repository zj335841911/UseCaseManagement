import { Prop } from 'vue-property-decorator';
import CodeListService from '@/service/app/codelist-service';
import { MainControlBase } from './MainControlBase';

/**
 * 多数据部件基类
 *
 * @export
 * @class MDControlBase
 * @extends {MainControlBase}
 */
export class MDControlBase extends MainControlBase {
    /**
     * 代码表服务
     *
     * @type {CodeListService}
     * @memberof MDControlBase
     */
    public codeListService: CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 打开新建数据视图
     *
     * @type {*}
     * @memberof MDControlBase
     */
    @Prop()
    public newdata: any;

    /**
     * 打开编辑数据视图
     *
     * @type {*}
     * @memberof MDControlBase
     */
    @Prop()
    public opendata: any;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MDControlBase
     */
    @Prop()
    public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof MDControlBase
     */
    @Prop()
    public fetchAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MDControlBase
     */
    @Prop()
    public removeAction!: string;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MDControlBase
     */
    @Prop()
    public loadAction!: string;

    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MDControlBase
     */
    @Prop()
    public loaddraftAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MDControlBase
     */
    @Prop()
    public createAction!: string;

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof MDControlBase
     */
    @Prop({ default: false })
    public isSelectFirstDefault!: boolean;

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MDControlBase
     */
    public isEnablePagingBar: boolean = true;

    /**
     * 是否禁用排序
     *
     * @type {boolean}
     * @memberof MDControlBase
     */
    public isNoSort: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MDControlBase
     */
    public minorSortDir: string = '';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MDControlBase
     */
    public minorSortPSDEF: string = '';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MDControlBase
     */
    public limit: number = 20;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof MDControlBase
     */
    public totalRecord: number = 0;

    /**
     * 选中行数据
     *
     * @type {any[]}
     * @memberof MDControlBase
     */
    public selections: any[] = [];

    /**
     * 是否启用快速分组
     *
     * @type {boolean}
     * @memberof MDControlBase
     */
    public isEnableQuickGroup: boolean = false;

    /**
     * 当前页
     *
     * @type {number}
     * @memberof MDControlBase
     */
    public curPage: number = 1;

    /**
     * 数据
     *
     * @type {any[]}
     * @memberof MDControlBase
     */
    public items: any[] = [];

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MDControlBase
     */
    public getDatas(): any[] {
        return this.selections;
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MDControlBase
     */
    public getData(): any {
        return this.selections[0];
    }

    /**
     * 部件创建完毕
     *
     * @protected
     * @memberof MDControlBase
     */
    protected ctrlCreated(): void {
        this.accLocalTags.push(
            this.$acc.commandLocal(
                (data: any) => {
                    if (data && data.srfkey) {
                        const i = this.items.findIndex((item: any) => Object.is(item.srfkey, data.srfkey));
                        if (i !== -1) {
                            this.accChange(data);
                        }
                    }
                },
                'all',
                this.appDeName.toUpperCase()
            )
        );
    }

    /**
     * 消息中心
     *
     * @protected
     * @param {*} data
     * @memberof MDControlBase
     */
    protected accChange(data: any): void {}

    /**
     * 选择数据
     *
     * @param {*} args
     * @memberof MDControlBase
     */
    public handleClick(args: any): void {
        this.clearSelection();
        args.isselected = !args.isselected;
        this.selectchange();
    }

    /**
     * 双击数据
     *
     * @param {*} args
     * @memberof MDControlBase
     */
    public handleDblClick(args: any): void {
        this.$emit('rowdblclick', args);
    }

    /**
     * 触发事件
     *
     * @memberof MDControlBase
     */
    public selectchange(): void {
        this.selections = [];
        this.items.map((item: any) => {
            if (item.isselected) {
                this.selections.push(item);
            }
        });
        this.$emit('selectionchange', this.selections);
    }

    /**
     * 清除当前所有选中状态
     *
     * @memberof MDControlBase
     */
    public clearSelection(): void {
        this.items.map((item: any) => {
            Object.assign(item, { isselected: false });
        });
    }
}
