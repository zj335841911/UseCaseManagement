import { Prop } from 'vue-property-decorator';
import { Watch } from '../decorators/VueLifeCycleProcessing';
import { ControlBase } from './ControlBase';
import CodeListService from '@/service/app/codelist-service';
import { ViewTool } from '@/utils';

/**
 * 面板部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {ControlBase}
 */
export class PanelControlBase extends ControlBase {
    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof PanelControlBase
     */
    public codeListService: CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 数据
     *
     * @type {*}
     * @memberof PanelControlBase
     */
    public data: any = {};

    /**
     * 面板数据
     *
     * @type {*}
     * @memberof PanelControlBase
     */
    public panelData: any = null;

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof PanelControlBase
     */
    public detailsModel: any = {};

    /**
     * 数据模型
     *
     * @type {*}
     * @memberof PanelControlBase
     */
    public dataModel: any = null;

    /**
     * 界面服务
     *
     * @type {*}
     * @memberof PanelControlBase
     */
    public appUIService: any;

    /**
     *
     *
     * @returns {any[]}
     * @memberof PanelControlBase
     */
    public getDatas(): any[] {
        if (!this.panelData) {
            return [];
        }
        return [this.panelData];
    }

    /**
     *
     *
     * @returns
     * @memberof PanelControlBase
     */
    public getData() {
        return this.panelData;
    }

    /**
     * 父级部件引用
     *
     * @type {*}
     * @memberof PanelControlBase
     */
    @Prop()
    public parentRef?: any;

    /**
     * 面板数据对象
     *
     * @type {*}
     * @memberof PanelControlBase
     */
    @Prop()
    public inputData?: any;

    /**
     * 监听数据对象
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof PanelControlBase
     */
    @Watch('inputData', { immediate: true, deep: true })
    async onInputDataChange(newVal: any, oldVal: any) {
        if (newVal) {
            await this.computedUIData(newVal);
            this.panelData = this.$util.deepCopy(newVal);
            this.computeButtonState(newVal);
            this.panelLogic({ name: '', newVal: null, oldVal: null });
            this.$forceUpdate();
        }
    }

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof PanelControlBase
     */
    public panelLogic({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): void {}

    /**
     * 计算UI展示数据
     *
     * @param {*} newVal
     * @memberof PanelControlBase
     */
    public async computedUIData(newVal: any) {
        if (this.dataModel.getDataItems instanceof Function && this.dataModel.getDataItems().length > 0) {
            this.dataModel.getDataItems().forEach((item: any) => {
                this.data[item.name] = newVal[item.prop];
            });
        }
    }

    /**
     * 计算面板数据
     *
     * @memberof PanelControlBase
     */
    public async computePanelData() {
        let codelistArray: Array<any> = [];
        let panelData: any = {};
        if (this.dataModel.getDataItems instanceof Function && this.dataModel.getDataItems().length > 0) {
            this.dataModel.getDataItems().forEach((item: any) => {
                if (item.codelist) {
                    codelistArray.push(item.codelist);
                }
            });
            if (codelistArray.length > 0) {
                let res: any = await this.getAllCodeList(codelistArray, true);
                this.dataModel.getDataItems().forEach((item: any) => {
                    if (item.codelist) {
                        panelData[item.prop] = res.get(item.codelist.tag).get(this.data[item.name]);
                    } else {
                        panelData[item.prop] = this.data[item.name];
                    }
                });
            } else {
                this.dataModel.getDataItems().forEach((item: any) => {
                    panelData[item.prop] = this.data[item.name];
                });
            }
        }
        this.panelData = Object.assign(JSON.parse(JSON.stringify(this.inputData)), panelData);
    }

    /**
     * 获取所有代码表
     *
     * @param {Array<any>} codelistArray 代码表模型数组
     * @param {boolean} [reverse=false]
     * @returns {Promise<any>}
     * @memberof PanelControlBase
     */
    public getAllCodeList(codelistArray: Array<any>, reverse: boolean = false): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            let codeListMap: Map<string, any> = new Map();
            let promiseArray: Array<any> = [];
            codelistArray.forEach((item: any) => {
                if (!codeListMap.get(item.tag)) {
                    promiseArray.push(this.getCodeList(item));
                    Promise.all(promiseArray).then((result: any) => {
                        if (result && result.length > 0) {
                            result.forEach((codeList: any) => {
                                let tempCodeListMap: Map<number, any> = new Map();
                                if (codeList.length > 0) {
                                    codeList.forEach((codeListItem: any) => {
                                        if (reverse) {
                                            tempCodeListMap.set(codeListItem.text, codeListItem.value);
                                        } else {
                                            tempCodeListMap.set(codeListItem.value, codeListItem.text);
                                        }
                                    });
                                }
                                codeListMap.set(item.tag, tempCodeListMap);
                            });
                            resolve(codeListMap);
                        }
                    });
                }
            });
        });
    }

    /**
     * 获取代码表
     *
     * @param codeListObject 传入代码表对象
     * @memberof PanelControlBase
     */
    public getCodeList(codeListObject: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if (codeListObject.tag && Object.is(codeListObject.codelistType, 'STATIC')) {
                const codelist = this.$store.getters.getCodeList(codeListObject.tag);
                if (codelist) {
                    resolve([...JSON.parse(JSON.stringify(codelist.items))]);
                } else {
                    resolve([]);
                }
            } else if (codeListObject.tag && Object.is(codeListObject.codelistType, 'DYNAMIC')) {
                this.codeListService
                    .getItems(codeListObject.tag)
                    .then((res: any) => {
                        resolve(res);
                    })
                    .catch((error: any) => {
                        resolve([]);
                    });
            }
        });
    }

    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof PanelControlBase
     */
    public opendata(args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) {
        if (this.parentRef.opendata && this.parentRef.opendata instanceof Function) {
            this.parentRef.opendata(args, fullargs, params, $event, xData);
        }
    }

    /**
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof PanelControlBase
     */
    public newdata(args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) {
        if (this.parentRef.newdata && this.parentRef.newdata instanceof Function) {
            this.parentRef.newdata(args, fullargs, params, $event, xData);
        }
    }

    /**
     * 删除
     *
     * @param {any[]} datas
     * @returns {Promise<any>}
     * @memberof PanelControlBase
     */
    public async remove(datas: any[]): Promise<any> {
        if (this.parentRef.remove && this.parentRef.remove instanceof Function) {
            return this.parentRef.remove(datas);
        }
    }

    /**
     * 刷新
     *
     * @param {*} [args]
     * @memberof PanelControlBase
     */
    public refresh(args?: any) {
        if (this.parentRef.refresh && this.parentRef.refresh instanceof Function) {
            this.parentRef.refresh(args);
        }
    }

    /**
     * 设置面板编辑项值变更
     *
     * @param data 面板数据
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof PanelControlBase
     */
    public onPanelItemValueChange(data: any, $event: { name: string; value: any }): void {
        if (!$event) {
            return;
        }
        if (!$event.name || Object.is($event.name, '') || !data.hasOwnProperty($event.name)) {
            return;
        }
        data[$event.name] = $event.value;
        this.panelEditItemChange(data, $event.name, $event.value);
    }

    /**
     * 面板编辑项值变化
     *
     * @public
     * @param data 面板数据
     * @param property 编辑项名
     * @param value 编辑项值
     * @returns {void}
     * @memberof PanelControlBase
     */
    public panelEditItemChange(data: any, property: string, value: any) {
        // 面板数据变化事件
        if (this.dataModel.getDataItems instanceof Function && this.dataModel.getDataItems().length > 0) {
            let modelitem = this.dataModel.getDataItems().find((item: any) => {
                return item.name === property;
            });
            if (modelitem) {
                this.$emit('panelDataChange', { [modelitem.prop]: value });
            }
        }
    }

    /**
     * 计算面板按钮权限状态
     *
     * @param {*} data
     * @memberof PanelControlBase
     */
    public computeButtonState(data: any) {
        // 若为项布局面板，存在parentRef
        if (this.parentRef) {
            const targetData: any = this.parentRef.transformData(data);
            if (this.detailsModel && Object.keys(this.detailsModel).length > 0) {
                Object.keys(this.detailsModel).forEach((name: any) => {
                    const model = this.detailsModel[name];
                    if (
                        model &&
                        model.uiaction &&
                        model.uiaction.dataaccaction &&
                        Object.is(model.itemType, 'BUTTON')
                    ) {
                        model.isPower = true;
                        const tempUIAction: any = JSON.parse(JSON.stringify(model.uiaction));
                        const result: any[] = ViewTool.calcActionItemAuthState(
                            targetData,
                            [tempUIAction],
                            this.appUIService ? this.appUIService : null
                        );
                        model.visible = tempUIAction.visible;
                        model.disabled = tempUIAction.disabled;
                        model.isPower = result[0] === 1 ? true : false;
                    }
                });
            }
        }
    }
}
