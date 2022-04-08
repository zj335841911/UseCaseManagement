import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import CustomService from './custom-searchbar-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';
import moment from 'moment';

/**
 * searchbar部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {CustomSearchbarBase}
 */
export class CustomSearchbarBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected controlType: string = 'SEARCHBAR';

    /**
     * 建构部件服务对象
     *
     * @type {CustomService}
     * @memberof CustomSearchbarBase
     */
    public service: CustomService = new CustomService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof CustomSearchbarBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected appDeLogicName: string = '项目';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof CustomBase
     */  
    public appUIService: ProjectUIService = new ProjectUIService(this.$store);


    /**
     * 过滤属性集合
     *
     * @type {*}
     * @memberof CustomBase
     */
    get filterFields() {
        return Object.values(this.detailsModel);
    }

    /**
     * 过滤属性模型集合
     *
     * @type {*}
     * @memberof CustomBase
     */
    public detailsModel: any = {
        'ideq': {
            label: '项目编号',
            localetag: 'entities.project.fields.id',
            name: 'ideq',
            prop: 'id',
            mode: 'EQ',
            disabled: false
        },
        'idnoteq': {
            label: '项目编号',
            localetag: 'entities.project.fields.id',
            name: 'idnoteq',
            prop: 'id',
            mode: 'NOTEQ',
            disabled: false
        },
        'namelike': {
            label: '项目名称',
            localetag: 'entities.project.fields.name',
            name: 'namelike',
            prop: 'name',
            mode: 'LIKE',
            disabled: false
        },
        'typeeq': {
            label: '项目类型',
            localetag: 'entities.project.fields.type',
            name: 'typeeq',
            prop: 'type',
            mode: 'EQ',
            disabled: false
        },
        'statuseq': {
            label: '项目状态',
            localetag: 'entities.project.fields.status',
            name: 'statuseq',
            prop: 'status',
            mode: 'EQ',
            disabled: false
        },
        'statusnoteq': {
            label: '项目状态',
            localetag: 'entities.project.fields.status',
            name: 'statusnoteq',
            prop: 'status',
            mode: 'NOTEQ',
            disabled: false
        },
        'accounteq': {
            label: '项目团队成员',
            localetag: 'entities.project.fields.account',
            name: 'accounteq',
            prop: 'account',
            mode: 'EQ',
            disabled: false
        },
        'acleq': {
            label: '访问控制',
            localetag: 'entities.project.fields.acl',
            name: 'acleq',
            prop: 'acl',
            mode: 'EQ',
            disabled: false
        },
        'depteq': {
            label: '选择部门',
            localetag: 'entities.project.fields.dept',
            name: 'depteq',
            prop: 'dept',
            mode: 'EQ',
            disabled: false
        },
        'iscateq': {
            label: 'isCat',
            localetag: 'entities.project.fields.iscat',
            name: 'iscateq',
            prop: 'iscat',
            mode: 'EQ',
            disabled: false
        },
        'managememberseq': {
            label: '复制团队',
            localetag: 'entities.project.fields.managemembers',
            name: 'managememberseq',
            prop: 'managemembers',
            mode: 'EQ',
            disabled: false
        },
        'parentnameeq': {
            label: 'parent',
            localetag: 'entities.project.fields.parentname',
            name: 'parentnameeq',
            prop: 'parentname',
            mode: 'EQ',
            disabled: false
        },
        'parentnamelike': {
            label: 'parent',
            localetag: 'entities.project.fields.parentname',
            name: 'parentnamelike',
            prop: 'parentname',
            mode: 'LIKE',
            disabled: false
        },
        'periodeq': {
            label: '时间段',
            localetag: 'entities.project.fields.period',
            name: 'periodeq',
            prop: 'period',
            mode: 'EQ',
            disabled: false
        },
        'pmeq': {
            label: '项目负责人',
            localetag: 'entities.project.fields.pm',
            name: 'pmeq',
            prop: 'pm',
            mode: 'EQ',
            disabled: false
        },
        'poeq': {
            label: '产品负责人',
            localetag: 'entities.project.fields.po',
            name: 'poeq',
            prop: 'po',
            mode: 'EQ',
            disabled: false
        },
        'prieq': {
            label: '优先级',
            localetag: 'entities.project.fields.pri',
            name: 'prieq',
            prop: 'pri',
            mode: 'EQ',
            disabled: false
        },
        'qdeq': {
            label: '测试负责人',
            localetag: 'entities.project.fields.qd',
            name: 'qdeq',
            prop: 'qd',
            mode: 'EQ',
            disabled: false
        },
        'rdeq': {
            label: '发布负责人',
            localetag: 'entities.project.fields.rd',
            name: 'rdeq',
            prop: 'rd',
            mode: 'EQ',
            disabled: false
        },
        'statgeeq': {
            label: 'statge',
            localetag: 'entities.project.fields.statge',
            name: 'statgeeq',
            prop: 'statge',
            mode: 'EQ',
            disabled: false
        },
    };

    /**
     * 过滤项集合
     *
     * @type {*}
     * @memberof CustomBase
     */
    public filterItems: any[] = [];

    /**
     * 应用实体名称
     *
     * @type {string}
     * @memberof CustomBase
     */
    public appdeName: string = 'Project';

    /**
     * modleId
     *
     * @type {string}
     * @memberof CustomBase
     */
    public modelId: string = "searchbar_project_custom";

    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof CustomBase
     */
    public utilServiceName: string = "";

    /**
     * 历史记录
     *
     * @type {string}
     * @memberof CustomBase
     */
    protected historyItems: any[] = [];

    /**
     * 选中记录
     *
     * @type {string}
     * @memberof CustomBase
     */
    protected selectItem: any = null;

    /**
     * 存储项名称
     *
     * @type {string}
     * @memberof CustomBase
     */
    protected saveItemName: string = '';

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof CustomBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof CustomBase
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
     * @memberof CustomBase
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
     * @memberof CustomBase
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
     * @memberof CustomBase
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
     * @memberof CustomBase
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
     * @memberof CustomBase
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
     * @memberof CustomBase
     */
    public onRemove(index: number) {
        this.filterItems.splice(index, 1);
    } 

    /**
     * 搜索
     *
     * @return {*}
     * @memberof CustomBase
     */
    public onSearch() {
        this.$emit('search', this.getData());
    }

    /**
     * 保存
     *
     * @return {*}
     * @memberof CustomBase
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
     * @memberof CustomBase
     */
    public onReset() {
        this.filterItems = [];
    }

    /**
     * 加载
     *
     * @return {*}
     * @memberof CustomBase
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
     * @memberof CustomBase
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
     * @memberof CustomBase
     */
    public openPoper() {
        this.saveItemName = '';
    }

    /**
     * 确定
     *
     * @return {*}
     * @memberof CustomBase
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
     * @memberof CustomBase
     */
    public onCancel() {
        let propip: any = this.$refs.propip;
        propip.handleMouseleave();
        this.onSave();
    }
}