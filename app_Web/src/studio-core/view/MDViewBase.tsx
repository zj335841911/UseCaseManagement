import { Prop } from 'vue-property-decorator';
import { ViewBase } from './ViewBase';
import CodeListService from '@/service/app/codelist-service';

/**
 * 多数据视图基类
 *
 * @export
 * @class MDViewBase
 * @extends {ViewBase}
 */
export class MDViewBase extends ViewBase {
    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof MDViewBase
     */
    public codeListService: CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 是否嵌入关系界面
     *
     * @readonly
     * @type {boolean}
     * @memberof MDViewBase
     */
    @Prop({ default: false })
    protected isformDruipart?: boolean;

    /**
     * 是否展开搜索表单
     *
     * @readonly
     * @type {boolean}
     * @memberof MDViewBase
     */
    protected isExpandSearchForm: boolean = false;

    /**
     * 快速搜索栏数据对象
     *
     * @type {*}
     * @memberof MDViewBase
     */
    public quickFormData: any = {};

    /**
     * 快速分组数据对象
     *
     * @type {*}
     * @memberof MDViewBase
     */
    public quickGroupData: any = {};

    /**
     * 快速分组是否有抛值
     *
     * @type {boolean}
     * @memberof MDViewBase
     */
    public isEmitQuickGroupValue: boolean = false;

    /**
     * 快速分组模型
     *
     * @type {any[]}
     * @memberof MDViewBase
     */
    public quickGroupModel: any[] = [];

    /**
     * 快速搜索栏值变化
     *
     * @param {*} data
     * @memberof MDViewBase
     */
    public quickFormValueChange = (data: any) => {
        this.quickFormData.clearAll();
        Object.assign(this.quickFormData, data);
        this.onSearch();
    };

    /**
     * 视图挂载完毕
     *
     * @protected
     * @memberof MDViewBase
     */
    protected viewMounted(): void {
        this.loadQuickGroupModel();
    }

    /**
     * 加载快速分组模型
     *
     * @protected
     * @memberof MDViewBase
     */
    protected loadQuickGroupModel(): void {}

    /**
     * 快速搜索
     *
     * @protected
     * @memberof MDViewBase
     */
    protected onSearch(): void {}

    /**
     * 视图创建完毕
     *
     * @protected
     * @memberof MDViewBase
     */
    protected viewCreated(): void {
        if (this.formDruipart) {
            this.formDruipart.subscribe((res: any) => {
                if (Object.is(res.action, 'save')) {
                    this.viewState.next({ tag: 'grid', action: 'save', data: this.viewparams });
                }
                if (Object.is(res.action, 'load')) {
                    this.engine.load(res.data, true);
                }
            });
        }
    }

    /**
     * 快速分组值变化
     *
     * @protected
     * @param {*} $event
     * @memberof MDViewBase
     */
    protected quickGroupValueChange = ($event: any) => {
        if ($event) {
            this.quickGroupData.clearAll();
            if ($event.data) {
                Object.assign(this.quickGroupData, $event.data);
            }
            this.onSearch();
        }
        this.isEmitQuickGroupValue = true;
    };

    /**
     * 处理快速分组模型动态数据部分(%xxx%)
     *
     * @protected
     * @param {any[]} inputArray
     * @returns {any[]}
     * @memberof MDViewBase
     */
    protected handleDynamicData(inputArray: any[]): any[] {
        if (inputArray.length > 0) {
            inputArray.forEach((item: any) => {
                if (item.data && Object.keys(item.data).length > 0) {
                    Object.keys(item.data).forEach((name: any) => {
                        let value: any = item.data[name];
                        if (value && typeof value == 'string' && value.startsWith('%') && value.endsWith('%')) {
                            const key = value.substring(1, value.length - 1).toLowerCase();
                            if (this.context[key]) {
                                value = this.context[key];
                            } else if (this.viewparams[key]) {
                                value = this.viewparams[key];
                            }
                        }
                        item.data[name] = value;
                    });
                }
            });
        }
        return inputArray;
    }
}
