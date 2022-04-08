import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import CustomService from './custom-searchbar-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
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
     * @type {StoryService}
     * @memberof CustomSearchbarBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CustomSearchbarBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof CustomBase
     */  
    public appUIService: StoryUIService = new StoryUIService(this.$store);


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
            label: '编号',
            localetag: 'entities.story.fields.id',
            name: 'ideq',
            prop: 'id',
            mode: 'EQ',
            disabled: false
        },
        'idnoteq': {
            label: '编号',
            localetag: 'entities.story.fields.id',
            name: 'idnoteq',
            prop: 'id',
            mode: 'NOTEQ',
            disabled: false
        },
        'pri': {
            label: '优先级',
            localetag: 'entities.story.fields.pri',
            name: 'pri',
            prop: 'pri',
            mode: 'EQ',
            disabled: false
        },
        'prigteq': {
            label: '优先级',
            localetag: 'entities.story.fields.pri',
            name: 'prigteq',
            prop: 'pri',
            mode: 'GTANDEQ',
            disabled: false
        },
        'prilteq': {
            label: '优先级',
            localetag: 'entities.story.fields.pri',
            name: 'prilteq',
            prop: 'pri',
            mode: 'LTANDEQ',
            disabled: false
        },
        'stageeq': {
            label: '所处阶段',
            localetag: 'entities.story.fields.stage',
            name: 'stageeq',
            prop: 'stage',
            mode: 'EQ',
            disabled: false
        },
        'stagenoteq': {
            label: '所处阶段',
            localetag: 'entities.story.fields.stage',
            name: 'stagenoteq',
            prop: 'stage',
            mode: 'NOTEQ',
            disabled: false
        },
        'titlelike': {
            label: '需求名称',
            localetag: 'entities.story.fields.title',
            name: 'titlelike',
            prop: 'title',
            mode: 'LIKE',
            disabled: false
        },
        'statuseq': {
            label: '当前状态',
            localetag: 'entities.story.fields.status',
            name: 'statuseq',
            prop: 'status',
            mode: 'EQ',
            disabled: false
        },
        'statusnoteq': {
            label: '当前状态',
            localetag: 'entities.story.fields.status',
            name: 'statusnoteq',
            prop: 'status',
            mode: 'NOTEQ',
            disabled: false
        },
        'keywords': {
            label: '关键词',
            localetag: 'entities.story.fields.keywords',
            name: 'keywords',
            prop: 'keywords',
            mode: 'LIKE',
            disabled: false
        },
        'assignedtoeq': {
            label: '指派给',
            localetag: 'entities.story.fields.assignedto',
            name: 'assignedtoeq',
            prop: 'assignedto',
            mode: 'EQ',
            disabled: false
        },
        'branchnameeq': {
            label: '平台/分支',
            localetag: 'entities.story.fields.branchname',
            name: 'branchnameeq',
            prop: 'branchname',
            mode: 'EQ',
            disabled: false
        },
        'branchnamelike': {
            label: '平台/分支',
            localetag: 'entities.story.fields.branchname',
            name: 'branchnamelike',
            prop: 'branchname',
            mode: 'LIKE',
            disabled: false
        },
        'closedbyeq': {
            label: '由谁关闭',
            localetag: 'entities.story.fields.closedby',
            name: 'closedbyeq',
            prop: 'closedby',
            mode: 'EQ',
            disabled: false
        },
        'closedreasoneq': {
            label: '关闭原因',
            localetag: 'entities.story.fields.closedreason',
            name: 'closedreasoneq',
            prop: 'closedreason',
            mode: 'EQ',
            disabled: false
        },
        'coloreq': {
            label: '标题颜色',
            localetag: 'entities.story.fields.color',
            name: 'coloreq',
            prop: 'color',
            mode: 'EQ',
            disabled: false
        },
        'duplicatestoryeq': {
            label: '重复需求ID',
            localetag: 'entities.story.fields.duplicatestory',
            name: 'duplicatestoryeq',
            prop: 'duplicatestory',
            mode: 'EQ',
            disabled: false
        },
        'frombugeq': {
            label: '来源Bug',
            localetag: 'entities.story.fields.frombug',
            name: 'frombugeq',
            prop: 'frombug',
            mode: 'EQ',
            disabled: false
        },
        'lasteditedbyeq': {
            label: '最后修改',
            localetag: 'entities.story.fields.lasteditedby',
            name: 'lasteditedbyeq',
            prop: 'lasteditedby',
            mode: 'EQ',
            disabled: false
        },
        'modulenameeq': {
            label: '所属模块名称',
            localetag: 'entities.story.fields.modulename',
            name: 'modulenameeq',
            prop: 'modulename',
            mode: 'EQ',
            disabled: false
        },
        'modulenamelike': {
            label: '所属模块名称',
            localetag: 'entities.story.fields.modulename',
            name: 'modulenamelike',
            prop: 'modulename',
            mode: 'LIKE',
            disabled: false
        },
        'openedbyeq': {
            label: '由谁创建',
            localetag: 'entities.story.fields.openedby',
            name: 'openedbyeq',
            prop: 'openedby',
            mode: 'EQ',
            disabled: false
        },
        'parenteq': {
            label: '父需求',
            localetag: 'entities.story.fields.parent',
            name: 'parenteq',
            prop: 'parent',
            mode: 'EQ',
            disabled: false
        },
        'parentgteq': {
            label: '父需求',
            localetag: 'entities.story.fields.parent',
            name: 'parentgteq',
            prop: 'parent',
            mode: 'GTANDEQ',
            disabled: false
        },
        'parentnameeq': {
            label: '父需求名称',
            localetag: 'entities.story.fields.parentname',
            name: 'parentnameeq',
            prop: 'parentname',
            mode: 'EQ',
            disabled: false
        },
        'parentnamelike': {
            label: '父需求名称',
            localetag: 'entities.story.fields.parentname',
            name: 'parentnamelike',
            prop: 'parentname',
            mode: 'LIKE',
            disabled: false
        },
        'pathlike': {
            label: '模块路径',
            localetag: 'entities.story.fields.path',
            name: 'pathlike',
            prop: 'path',
            mode: 'LIKE',
            disabled: false
        },
        'planeq': {
            label: '所属计划',
            localetag: 'entities.story.fields.plan',
            name: 'planeq',
            prop: 'plan',
            mode: 'EQ',
            disabled: false
        },
        'preversioneq': {
            label: '之前的版本',
            localetag: 'entities.story.fields.preversion',
            name: 'preversioneq',
            prop: 'preversion',
            mode: 'EQ',
            disabled: false
        },
        'productnameeq': {
            label: '产品名称',
            localetag: 'entities.story.fields.productname',
            name: 'productnameeq',
            prop: 'productname',
            mode: 'EQ',
            disabled: false
        },
        'productnamelike': {
            label: '产品名称',
            localetag: 'entities.story.fields.productname',
            name: 'productnamelike',
            prop: 'productname',
            mode: 'LIKE',
            disabled: false
        },
        'resulteq': {
            label: '评审结果',
            localetag: 'entities.story.fields.result',
            name: 'resulteq',
            prop: 'result',
            mode: 'EQ',
            disabled: false
        },
        'reviewedbyeq': {
            label: '由谁评审',
            localetag: 'entities.story.fields.reviewedby',
            name: 'reviewedbyeq',
            prop: 'reviewedby',
            mode: 'EQ',
            disabled: false
        },
        'sourceeq': {
            label: '需求来源',
            localetag: 'entities.story.fields.source',
            name: 'sourceeq',
            prop: 'source',
            mode: 'EQ',
            disabled: false
        },
        'stagedbyeq': {
            label: '设置阶段者',
            localetag: 'entities.story.fields.stagedby',
            name: 'stagedbyeq',
            prop: 'stagedby',
            mode: 'EQ',
            disabled: false
        },
        'tobugeq': {
            label: '转Bug',
            localetag: 'entities.story.fields.tobug',
            name: 'tobugeq',
            prop: 'tobug',
            mode: 'EQ',
            disabled: false
        },
        'typeeq': {
            label: '需求类型',
            localetag: 'entities.story.fields.type',
            name: 'typeeq',
            prop: 'type',
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
    public appdeName: string = 'Story';

    /**
     * modleId
     *
     * @type {string}
     * @memberof CustomBase
     */
    public modelId: string = "searchbar_story_custom";

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