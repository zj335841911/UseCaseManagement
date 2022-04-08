import { Prop } from 'vue-property-decorator';
import { ControlBase } from './ControlBase';
import CodeListService from '@/service/app/codelist-service';

/**
 * 导航部件基类
 *
 * @export
 * @class ExpControlBase
 * @extends {ControlBase}
 */
export class ExpControlBase extends ControlBase {
    /**
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof ExpControlBase
     */
    @Prop()
    public newdata: any;

    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof ExpControlBase
     */
    @Prop()
    public opendata: any;

    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof ExpControlBase
     */
    @Prop()
    public viewUID!: string;

    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof ExpControlBase
     */
    public ctrlWidth: number = 500;

    /**
     * 控件高度
     *
     * @type {number}
     * @memberof ExpControlBase
     */
    public ctrlHeight: number = 500;

    /**
     * 导航过滤项
     *
     * @type {string}
     * @memberof ExpControlBase
     */
    public navFilter: string = '';

    /**
     * 导航关系
     *
     * @type {string}
     * @memberof ExpControlBase
     */
    public navPSDer: string = '';

    /**
     * 导航上下文参数
     *
     * @type {*}
     * @memberof ExpControlBase
     */
    public navigateContext: any = null;

    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof ExpControlBase
     */
    public navViewName: string = '';

    /**
     * 导航视图参数
     *
     * @type {*}
     * @memberof ExpControlBase
     */
    public navigateParams: any = null;

    /**
     * 呈现模式，可选值：horizontal或者vertical
     *
     * @public
     * @type {(string)}
     * @memberof ExpControlBase
     */
    public showMode: string = 'horizontal';

    /**
     * 选中数据
     *
     * @type {*}
     * @memberof ExpControlBase
     */
    public selection: any = {};

    /**
     * 搜素值
     *
     * @public
     * @type {(string)}
     * @memberof ExpControlBase
     */
    public searchText: string = '';

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof ExpControlBase
     */
    public codeListService: CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 快速分组数据对象
     *
     * @memberof ExpControlBase
     */
    public quickGroupData: any;

    /**
     * 快速分组是否有抛值
     *
     * @memberof ExpControlBase
     */
    public isEmitQuickGroupValue: boolean = false;

    /**
     * 快速分组模型
     *
     * @memberof ExpControlBase
     */
    public quickGroupModel: Array<any> = [];

    /**
     * 执行搜索
     *
     * @memberof ControlBase
     */
    public onSearch(args: any): void {
        this.searchText = args;
    }

    /**
     * 加载快速分组模型
     *
     * @memberof ExpControlBase
     */
    public loadQuickGroupModel() {}

    /**
     * 处理快速分组模型动态数据部分(%xxx%)
     *
     * @memberof ExpControlBase
     */
    public handleDynamicData(inputArray: Array<any>) {
        if (inputArray.length > 0) {
            inputArray[0].default = true;
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

    /**
     * 快速分组值变化
     *
     * @memberof ExpControlBase
     */
    public quickGroupValueChange($event: any) {
        if ($event && $event.data) {
            if (this.quickGroupData) {
                for (let key in this.quickGroupData) {
                    delete this.viewparams[key];
                }
            }
            this.quickGroupData = $event.data;
            Object.assign(this.viewparams, $event.data);
        } else {
            if (this.quickGroupData) {
                for (let key in this.quickGroupData) {
                    delete this.viewparams[key];
                }
            }
        }
        this.onSearch($event);
    }

    /**
     * 设置导航区工具栏禁用状态
     *
     * @param {boolean} state
     * @param {*} models
     * @param {*} uiService
     * @return {*}
     * @memberof ExpControlBase
     */
    public calcToolbarItemState(state: boolean, models?: any, uiService?: any) {
        if (models) {
            for (const key in models) {
                if (!models.hasOwnProperty(key)) {
                    return;
                }
                const _item = models[key];
                if (
                    _item.uiaction &&
                    (Object.is(_item.uiaction.target, 'SINGLEKEY') || Object.is(_item.uiaction.target, 'MULTIKEY'))
                ) {
                    _item.disabled = state;
                }
                _item.visible = true;
                if (_item.noprivdisplaymode && _item.noprivdisplaymode === 6) {
                    _item.visible = false;
                }
            }
            this.calcToolbarItemAuthState({}, models, uiService);
        }
    }

    /**
     * 计算导航区工具栏权限状态
     *
     * @static
     * @param {*} [data] 传入数据
     * @param {*} [ActionModel] 工具栏模型
     * @param {*} [UIService] 界面行为服务
     * @return {*}
     * @memberof ExpControlBase
     */
    public calcToolbarItemAuthState(data: any, ActionModel: any, UIService: any) {
        let result: any[] = [];
        for (const key in ActionModel) {
            if (!ActionModel.hasOwnProperty(key)) {
                return result;
            }
            const _item = ActionModel[key];
            if (_item && _item.dataaccaction && UIService) {
                let dataActionResult: any;
                if (_item.uiaction) {
                    if (Object.is(_item.uiaction.target, 'NONE') || Object.is(_item.uiaction.target, '')) {
                        dataActionResult = UIService.getResourceOPPrivs(_item.dataaccaction);
                    } else {
                        if (data && Object.keys(data).length > 0) {
                            dataActionResult = UIService.getAllOPPrivs(data)[_item.dataaccaction];
                        }
                    }
                    // 无权限:0;有权限:1
                    if (dataActionResult === 0) {
                        // 禁用:1;隐藏:2;隐藏且默认隐藏:6
                        if (_item.noprivdisplaymode === 1) {
                            _item.disabled = true;
                        }
                        if (_item.noprivdisplaymode === 2 || _item.noprivdisplaymode === 6) {
                            _item.visible = false;
                        } else {
                            _item.visible = true;
                        }
                    }
                    if (dataActionResult === 1) {
                        _item.visible = true;
                        _item.disabled = false;
                    }
                    result.push(dataActionResult);
                }
            }
        }
        return result;
    }
}
