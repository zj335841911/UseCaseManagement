import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import OtherCustomService from './other-custom-searchbar-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import moment from 'moment';

/**
 * searchbar部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {OtherCustomSearchbarBase}
 */
export class OtherCustomSearchbarBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof OtherCustomSearchbarBase
     */
    protected controlType: string = 'SEARCHBAR';

    /**
     * 建构部件服务对象
     *
     * @type {OtherCustomService}
     * @memberof OtherCustomSearchbarBase
     */
    public service: OtherCustomService = new OtherCustomService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof OtherCustomSearchbarBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof OtherCustomSearchbarBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof OtherCustomSearchbarBase
     */
    protected appDeLogicName: string = '测试用例';

    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof OtherCustomBase
     */  
    public appUIService: CaseUIService = new CaseUIService(this.$store);


    /**
     * 过滤属性集合
     *
     * @type {*}
     * @memberof OtherCustomBase
     */
    get filterFields() {
        return Object.values(this.detailsModel);
    }

    /**
     * 过滤属性模型集合
     *
     * @type {*}
     * @memberof OtherCustomBase
     */
    public detailsModel: any = {
        'titlelike': {
            label: '用例标题',
            localetag: 'entities.case.fields.title',
            name: 'titlelike',
            prop: 'title',
            mode: 'LIKE',
            disabled: false
        },
        'typeeq': {
            label: '用例类型',
            localetag: 'entities.case.fields.type',
            name: 'typeeq',
            prop: 'type',
            mode: 'EQ',
            disabled: false
        },
        'prieq': {
            label: '优先级',
            localetag: 'entities.case.fields.pri',
            name: 'prieq',
            prop: 'pri',
            mode: 'EQ',
            disabled: false
        },
        'status1eq': {
            label: '用例状态',
            localetag: 'entities.case.fields.status1',
            name: 'status1eq',
            prop: 'status1',
            mode: 'EQ',
            disabled: false
        },
        'assignedtoeq': {
            label: '指派给',
            localetag: 'entities.case.fields.assignedto',
            name: 'assignedtoeq',
            prop: 'assignedto',
            mode: 'EQ',
            disabled: false
        },
        'brancheq': {
            label: '平台/分支',
            localetag: 'entities.case.fields.branch',
            name: 'brancheq',
            prop: 'branch',
            mode: 'EQ',
            disabled: false
        },
        'coloreq': {
            label: '标题颜色',
            localetag: 'entities.case.fields.color',
            name: 'coloreq',
            prop: 'color',
            mode: 'EQ',
            disabled: false
        },
        'frameeq': {
            label: '工具/框架',
            localetag: 'entities.case.fields.frame',
            name: 'frameeq',
            prop: 'frame',
            mode: 'EQ',
            disabled: false
        },
        'frequencyeq': {
            label: 'frequency',
            localetag: 'entities.case.fields.frequency',
            name: 'frequencyeq',
            prop: 'frequency',
            mode: 'EQ',
            disabled: false
        },
        'frombugeq': {
            label: '来源Bug',
            localetag: 'entities.case.fields.frombug',
            name: 'frombugeq',
            prop: 'frombug',
            mode: 'EQ',
            disabled: false
        },
        'fromcaseideq': {
            label: '来源用例',
            localetag: 'entities.case.fields.fromcaseid',
            name: 'fromcaseideq',
            prop: 'fromcaseid',
            mode: 'EQ',
            disabled: false
        },
        'lastrunnereq': {
            label: '执行人',
            localetag: 'entities.case.fields.lastrunner',
            name: 'lastrunnereq',
            prop: 'lastrunner',
            mode: 'EQ',
            disabled: false
        },
        'lastrunresult1eq': {
            label: '测试用例结果',
            localetag: 'entities.case.fields.lastrunresult1',
            name: 'lastrunresult1eq',
            prop: 'lastrunresult1',
            mode: 'EQ',
            disabled: false
        },
        'libnameeq': {
            label: '用例库',
            localetag: 'entities.case.fields.libname',
            name: 'libnameeq',
            prop: 'libname',
            mode: 'EQ',
            disabled: false
        },
        'libnamelike': {
            label: '用例库',
            localetag: 'entities.case.fields.libname',
            name: 'libnamelike',
            prop: 'libname',
            mode: 'LIKE',
            disabled: false
        },
        'modulenameeq': {
            label: '模块名称',
            localetag: 'entities.case.fields.modulename',
            name: 'modulenameeq',
            prop: 'modulename',
            mode: 'EQ',
            disabled: false
        },
        'modulenamelike': {
            label: '模块名称',
            localetag: 'entities.case.fields.modulename',
            name: 'modulenamelike',
            prop: 'modulename',
            mode: 'LIKE',
            disabled: false
        },
        'openedbyeq': {
            label: '由谁创建',
            localetag: 'entities.case.fields.openedby',
            name: 'openedbyeq',
            prop: 'openedby',
            mode: 'EQ',
            disabled: false
        },
        'productnameeq': {
            label: '产品名称',
            localetag: 'entities.case.fields.productname',
            name: 'productnameeq',
            prop: 'productname',
            mode: 'EQ',
            disabled: false
        },
        'productnamelike': {
            label: '产品名称',
            localetag: 'entities.case.fields.productname',
            name: 'productnamelike',
            prop: 'productname',
            mode: 'LIKE',
            disabled: false
        },
        'storynameeq': {
            label: '需求名称',
            localetag: 'entities.case.fields.storyname',
            name: 'storynameeq',
            prop: 'storyname',
            mode: 'EQ',
            disabled: false
        },
        'storynamelike': {
            label: '需求名称',
            localetag: 'entities.case.fields.storyname',
            name: 'storynamelike',
            prop: 'storyname',
            mode: 'LIKE',
            disabled: false
        },
    };

    /**
     * 过滤项集合
     *
     * @type {*}
     * @memberof OtherCustomBase
     */
    public filterItems: any[] = [];

    /**
     * 应用实体名称
     *
     * @type {string}
     * @memberof OtherCustomBase
     */
    public appdeName: string = 'Case';

    /**
     * modleId
     *
     * @type {string}
     * @memberof OtherCustomBase
     */
    public modelId: string = "searchbar_case_othercustom";

    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof OtherCustomBase
     */
    public utilServiceName: string = "";

    /**
     * 历史记录
     *
     * @type {string}
     * @memberof OtherCustomBase
     */
    protected historyItems: any[] = [];

    /**
     * 选中记录
     *
     * @type {string}
     * @memberof OtherCustomBase
     */
    protected selectItem: any = null;

    /**
     * 存储项名称
     *
     * @type {string}
     * @memberof OtherCustomBase
     */
    protected saveItemName: string = '';

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof OtherCustomBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof OtherCustomBase
     */
    public getData(): any {
        let data: any = {};
        if(this.filterFields.length > 0) {
            let filter: any = this.getFilter();
            Object.assign(data, { filter: filter ? filter : null })
        }
        return data;
    }

    /**
     * 获取filter
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public getFilter(): any {
        if(this.filterItems.length === 0) {
            return null;
        }
        let ands: any[] = this.transformAnd(this.filterItems);
        this.transformResult(ands, '$and');
        if(ands.length === 0) {
            return null;
        }
        return { '$and': ands };
    }

    /**
     * 处理结果集
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public transformResult(datas: any[], pName: string) {
        let items: any[] = [];
        for(let i = datas.length - 1; i >= 0; i--) {
            let data: any = datas[i];
            let field: string = Object.is(pName, '$and') ? '$or' : '$and';
            if(data.hasOwnProperty(field)) {
                items.push(data);
                datas.splice(i, 1);
                this.transformResult(data[field], field);
            }

        }
        if(items.length > 0) {
            let item: any = {};
            item[pName] = items;
            datas.push(item);
        }
    }

    /**
     * 处理并且逻辑
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public transformAnd(datas: any[]): any {
        let result: any[] = [];
        datas.forEach((data: any) => {
            let item: any = {};
            if(data.field && data.mode) {
                item[data.field] = {};
                let valField: string = data.editor ? data.editor : data.field;
                item[data.field][data.mode] = (data[valField] == null  ? '' : data[valField]);
                result.push(item)
            } else if(Object.is(data.label, '$and')) {
                let items: any[] = this.transformAnd(data.children);
                result = [...result, ...items];
            } else if(Object.is(data.label, '$or')) {
                item[data.label] = this.transformOr(data.children);
                result.push(item)
            }
        })
        return result;
    }

    /**
     * 处理或逻辑
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public transformOr(datas: any[]) {
        let result: any[] = [];
        datas.forEach((data: any) => {
            let item: any = {};
            if(data.field && data.mode) {
                item[data.field] = {};
                let valField: string = data.editor ? data.editor : data.field;
                item[data.field][data.mode] = (data[valField] == null ? '' : data[valField]);
                result.push(item);
            } else if(Object.is(data.label, '$and')) {
                item[data.label] = this.transformAnd(data.children);
                result.push(item)
            } else if(Object.is(data.label, '$or')) {
                item[data.label] = this.transformOr(data.children);
                result.push(item);
            }
        })
        return result;
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof OtherCustomBase
     */
    public created(): void {
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (Object.is('load', action)) {
                    this.load(data);
                }
            });
        }
    }

    /**
     * 删除过滤项
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public onRemove(index: number) {
        this.filterItems.splice(index, 1);
    } 

    /**
     * 搜索
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public onSearch() {
        this.$emit('search', this.getData());
    }

    /**
     * 保存
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public onSave(name?: string) {
        let time = moment();
        this.historyItems.push({
            name: (name ? name : time.format('YYYY-MM-DD HH:mm:ss')),
            value: time.unix().toString(),
            data: JSON.parse(JSON.stringify(this.filterItems))
        })
        this.selectItem = time.unix().toString();

        let param: any = {};
		Object.assign(param, {
            model: JSON.parse(JSON.stringify(this.historyItems)),
            appdeName: this.appdeName,
            modelid: this.modelId,
            utilServiceName: this.utilServiceName,
			...this.viewparams
		});
		let post = this.service.saveModel(this.utilServiceName, this.context, param);
		post.then((response: any) => {
			this.$emit("save", response.data);
		}).catch((response: any) => {
			console.log(response);
		});
    }

    /**
     * 重置
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public onReset() {
        this.filterItems = [];
    }

    /**
     * 加载
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public load(data: any) {
        let param: any = {};
        Object.assign(param, {
            appdeName: this.appdeName,
            modelid: this.modelId,
            utilServiceName: this.utilServiceName,
            ...this.viewparams
        });
        let post = this.service.loadModel(this.utilServiceName, this.context, param);
		post.then((response: any) => {
			if(response.status == 200) {
                this.historyItems = response.data;
			}
		}).catch((response: any) => {
			console.log(response);
		});
    }

    /**
     * 改变过滤条件
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public onFilterChange(evt: any) {
        let item: any = this.historyItems.find((item: any) => Object.is(evt, item.value));
        if(item) {
            this.filterItems = JSON.parse(JSON.stringify(item.data));
        }
    }

    /**
     * 打开弹框
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public openPoper() {
        this.saveItemName = '';
    }

    /**
     * 确定
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public onOk() {
        let propip: any = this.$refs.propip;
        propip.handleMouseleave();
        this.onSave(this.saveItemName);
    }

    /**
     * 取消设置
     *
     * @return {*}
     * @memberof OtherCustomBase
     */
    public onCancel() {
        let propip: any = this.$refs.propip;
        propip.handleMouseleave();
        this.onSave();
    }
}