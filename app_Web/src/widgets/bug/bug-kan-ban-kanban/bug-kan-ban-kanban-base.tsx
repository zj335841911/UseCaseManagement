import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugKanBanService from './bug-kan-ban-kanban-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import draggable from "vuedraggable";

/**
 * kanban部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {BugKanBanKanbanBase}
 */
export class BugKanBanKanbanBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof BugKanBanKanbanBase
     */
    protected controlType: string = 'KANBAN';

    /**
     * 建构部件服务对象
     *
     * @type {BugKanBanService}
     * @memberof BugKanBanKanbanBase
     */
    public service: BugKanBanService = new BugKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugKanBanKanbanBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugKanBanKanbanBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof BugKanBanKanbanBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof BugKanBanBase
     */  
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof BugKanBanBase
     */
    public getDatas(): any[] {
        return this.selections;
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof BugKanBanBase
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof BugKanBanBase
     */
    @Prop({ default: false }) public isSelectFirstDefault!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof BugKanBanBase
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof BugKanBanBase
     */
    @Prop() public createAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof BugKanBanBase
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof BugKanBanBase
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof BugKanBanBase
     */
    @Prop() public fetchAction!: string;

    /**
     * 部件行为--updateGroup
     *
     * @type {string}
     * @memberof BugKanBanBase
     */
    @Prop() public updateGroupAction!: string;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof BugKanBanBase
     */
    @Prop() public isSingleSelect?: boolean;

    /**
     * 数据
     *
     * @type {any[]}
     * @memberof BugKanBanBase
     */
    public items: any[] = [];

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof BugKanBanBase
     */
    public isEnablePagingBar: boolean = true;;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof BugKanBanBase
     */
    public totalRecord: number = 0;

    /**
     * 加载的数据是否附加在items之后
     *
     * @type {boolean}
     * @memberof BugKanBanBase
     */
    public isAddBehind:boolean = false;

    /**
     * 选中数组
     * @type {Array<any>}
     * @memberof BugKanBanBase
     */
    public selections: Array<any> = [];

    /**
     * 当前页
     *
     * @type {number}
     * @memberof BugKanBanBase
     */
    public curPage: number = 1;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof BugKanBanBase
     */
    public limit: number = 100;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof BugKanBanBase
     */    
    public sortDir:string = 'desc';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof BugKanBanBase
     */    
    public sortField: string = 'id';

    /**
     * 是否分组
     *
     * @type {string}
     * @memberof BugKanBanBase
     */   
    public isGroup: boolean = true;
    /**
     * 分组集合
     *
     * @type {string}
     * @memberof BugKanBanBase
     */ 
    public groups: any[] = [];
    /**
     * 分组属性名称
     *
     * @type {string}
     * @memberof BugKanBanBase
     */ 
    public groupField: string = 'status';
    /**
     * 分组模式
     *
     * @type {string}
     * @memberof BugKanBanBase
     */ 
    public groupMode: string = 'CODELIST'
    /**
     * 分组模式
     *
     * @type {string}
     * @memberof BugKanBanBase
     */ 
    public groupCodelist: string = 'Bug__status'

    /**
     * Vue声明周期，组件挂载完毕
     *
     * @memberof BugKanBanBase
     */
    public mounted () {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     *
     *  @memberof BugKanBanBase
     */    
    public afterMounted(){
    }

    /**
     * Vue声明周期，组件创建完毕
     *
     * @memberof BugKanBanBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof BugKanBanBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(this.name, tag)) {
                    return;
                }
                if (Object.is(action,'load')) {
                    this.refresh(data)
                }
                if (Object.is(action,'filter')) {
                    this.refresh(data)
                }
            });
        }
    }

    /**
	 * 加载更多
	 *
	 * @memberof BugKanBanBase
	 */
    public loadMore(){
        if(this.totalRecord>this.items.length)
        {
            this.curPage = ++this.curPage;
            this.isAddBehind = true;
            this.load({});
        }
    }

    /**
     * 刷新
     *
     * @param {*} [opt={}]
     * @memberof BugKanBanBase
     */
    public refresh(opt: any = {}) {
        this.curPage = 1;
        this.load(opt, true);
    }

    /**
     * vue 生命周期
     *
     * @memberof BugKanBanBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof BugKanBanBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 表格数据加载
     *
     * @public
     * @param {*} [arg={}]
     * @param {boolean} [isReset=false] 是否重置items
     * @memberof BugKanBanBase
     */
    public load(opt: any = {}, isReset: boolean = false): void {
        if(!this.fetchAction){
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: 'BugBugKanbanView' + (this.$t('app.kanban.notConfig.fetchAction') as string) });
            return;
        }      
        const arg: any = {...opt};
        const page: any = {};
        if (this.isEnablePagingBar) {
            Object.assign(page, { page: this.curPage-1, size: this.limit });
        }
        // 设置排序
        if (!Object.is(this.sortDir, '') && !Object.is(this.sortField, '')) {
          const sort: string = this.sortField+","+this.sortDir;
            Object.assign(page, { sort: sort });
        }
        Object.assign(arg, page);
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        let tempViewParams:any = parentdata.viewparams?parentdata.viewparams:{};
        Object.assign(tempViewParams,JSON.parse(JSON.stringify(this.viewparams)));
        Object.assign(arg,{viewparams:tempViewParams});
        const post: Promise<any> = this.service.search(this.fetchAction,JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
                }
                return;
            }
            const data: any = response.data;
            if(!this.isAddBehind){
                this.items = [];
            }
            if (Object.keys(data).length > 0) {
                let datas = JSON.parse(JSON.stringify(data));
                datas.map((item: any) => {
                    Object.assign(item, { isselected: false });
                });
                this.totalRecord = response.total;
                if(isReset){
                    this.items = datas;
                }else{
                    this.items.push(...datas);
                }
            }
            this.isAddBehind = false;
            this.setGroups();
            this.$emit('load', this.items);
            if(this.isSelectFirstDefault){
                this.handleClick(this.items[0]);
            }
        }, (response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
        });
    }

    /**
     * 删除
     *
     * @param {any[]} datas
     * @returns {Promise<any>}
     * @memberof BugKanBanBase
     */
    public async remove(datas: any[]): Promise<any> {
        if(!this.removeAction){
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: 'BugBugKanbanView' + (this.$t('app.kanban.notConfig.removeAction') as string) });
            return;
        }
        let _datas:any[] = [];
        datas.forEach((record: any, index: number) => {
            if (Object.is(record.srfuf, '0')) {
                this.items.some((val: any, num: number) =>{
                    if(JSON.stringify(val) == JSON.stringify(record)){
                        this.items.splice(num,1);
                        return true;
                    }
                }); 
            }else{
               _datas.push(datas[index]);
            }
        });
        if (_datas.length === 0) {
            return;
        }
        let dataInfo = '';
        _datas.forEach((record: any, index: number) => {
            let srfmajortext = record.srfmajortext;
            if (index < 5) {
                if (!Object.is(dataInfo, '')) {
                    dataInfo += '、';
                }
                dataInfo += srfmajortext;
            } else {
                return false;
            }
        });

        if (_datas.length < 5) {
            dataInfo = dataInfo + ' 共' + _datas.length + '条数据';
        } else {
            dataInfo = dataInfo + '...' + ' 共' + _datas.length + '条数据';
        }

        const removeData = () => {
            let keys: any[] = [];
            _datas.forEach((data: any) => {
                keys.push(data.srfkey);
            });
            let _removeAction = keys.length > 1 ? 'removeBatch' : this.removeAction ;
            const context:any = JSON.parse(JSON.stringify(this.context));
            const post: Promise<any> = this.service.delete(_removeAction,Object.assign(context,{ bug: keys.join(';') }),Object.assign({ bug: keys.join(';') },{viewparams:this.viewparams}), this.showBusyIndicator);
            return new Promise((resolve: any, reject: any) => {
                post.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: (this.$t('app.commonWords.delDataFail') as string) + ',' + response.info });
                        return;
                    } else {
                        this.$Notice.success({ title: '', desc: (this.$t('app.commonWords.deleteSuccess') as string) });
                    }
                    //删除items中已删除的项
                    _datas.forEach((data: any) => {
                      this.items.some((item:any,index:number)=>{
                        if(Object.is(item.srfkey,data.srfkey)){
                          this.items.splice(index,1);
                                return true;
                            }
                        });
                    });
                    this.$emit('remove', null);
                    this.selections = [];
                    resolve(response);
                }).catch((response: any) => {
                    if (response && response.status === 401) {
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: (this.$t('app.commonWords.sysException') as string) });
                        reject(response);
                        return;
                    }
                    reject(response);
                });
            });
        }

        dataInfo = dataInfo.replace(/[null]/g, '').replace(/[undefined]/g, '').replace(/[ ]/g, '');
        this.$Modal.confirm({
            title: (this.$t('app.commonWords.warning') as string),
            content: (this.$t('app.kanban.delete1') as string) + dataInfo + '，' + (this.$t('app.kanban.delete2') as string),
            onOk: () => {
                removeData();
            },
            onCancel: () => { }
        });
        return removeData;
    }

    /**
     * 设置分组集合
     *
     * @param {*}
     * @memberof BugKanBanBase
     */
    public updateData(opt: any) {
        const arg: any = { ...opt };
        Object.assign(arg, { viewparams: this.viewparams });
        let _context = JSON.parse(JSON.stringify(this.context));
        Object.assign(_context, { bug: opt.bug });
        const post: Promise<any> = this.service.update(this.updateGroupAction, _context, arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.data) {
                    this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.data.message });
                }
                this.setGroups();
                return;
            }
            let item = this.items.find((item: any) => Object.is(item.srfkey, response.data.srfkey));
            Object.assign(item, response.data);
            this.setGroups();
            this.$emit('update', this.items);
        }).catch((response: any) => {
            if (response && response.status  && response.data) {
                this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: (this.$t('app.commonWords.sysException') as string) });
                return;
            }
        });
    }

    /**
     * 设置分组集合
     *
     * @param {}
     * @memberof BugKanBanBase
     */
    public setGroups() {
        if(!this.isGroup || !this.groupField || Object.is(this.groupMode, 'NONE')) {
            return;
        }
        if(Object.is(this.groupMode, 'AUTO')) {
            this.groups = [];
            this.items.forEach(item => {
                let group: any = this.groups.find((group: any) => Object.is(group.name, item[this.groupField]));
                if(!group) {
                    this.groups.push({
                        name: item[this.groupField],
                        items: this.getGroupItems(item[this.groupField])
                    })
                }
            });
        }
        if(Object.is(this.groupMode, 'CODELIST') && this.groupCodelist) {
            this.groups = [];
            let codelist: any = this.$store.getters.getCodeList(this.groupCodelist);
            if(codelist) {
                codelist.items.forEach((item: any) => {
                    this.groups.push({
                        name: item.value,
                        items: this.getGroupItems(item.value)
                    })
                })
            }
        }
    }

    /**
     * 设置分组集合
     *
     * @param {string} name
     * @memberof BugKanBanBase
     */
    public getGroupItems(name: string) {
        let datas: any = [];
        this.items.forEach(item => {
            if(Object.is(item[this.groupField], name)) {
                datas.push(item);
            }
        })
        return datas;
    }

    /**
     * 设置分组集合
     *
     * @param {string} name
     * @memberof BugKanBanBase
     */
    public getGroupText(name: string) {
        if(Object.is(this.groupMode, 'CODELIST') && this.groupCodelist) {
            let codelist: any = this.$store.getters.getCodeList(this.groupCodelist);
            if(codelist) {
                if(!name) {
                    return codelist.emptytext;
                }
                let item = codelist.items.find((item: any) => Object.is(item.value, name));
                if(item) {
                    return item.text;
                }
            }
        }
        return name;
    }

    /**
     * 选择数据
     * @memberof BugKanBanBase
     *
     */
    public handleClick(args: any) {
        args.isselected = !args.isselected;
        this.items.forEach((item:any) =>{
            if(item.srfkey !== args.srfkey){
                item.isselected =false;
            }
        })
        this.selectchange();
    }

    /**
     * 双击数据
     * @memberof BugKanBanBase
     *
     */
    public handleDblClick(args: any) {
        args.isselected = true;
        this.items.forEach((item:any) =>{
            if(item.srfkey !== args.srfkey){
                item.isselected =false;
            }
        })
        this.$emit('rowdblclick', args);
    }

    /**
     * 触发事件
     * @memberof BugKanBanBase
     *
     */
    public selectchange() {
        this.selections = [];
        this.items.map((item: any) => {
            if (item.isselected) {
                this.selections.push(item);
            }
        });
        this.$emit('selectionchange', this.selections);
    }

    /**
     * 界面行为
     *
     * @param {*} tag
     * @param {*} $event
     * @memberof BugKanBanBase
     */
	public uiAction(tag: any, $event: any) {
        let row = this.selections.length > 0 ? this.selections[0] : {};
    }

    /**
     * 拖拽变化
     *
     * @param {*} evt
     * @param {*} name
     * @memberof BugKanBanBase
     */
    public onDragChange(evt: any, name: string) {
        if(evt && evt.added && evt.added.element) {
            let item: any = JSON.parse(JSON.stringify(evt.added.element));
            if(this.getUpdateView(name)) {
                const view: any = this.getUpdateView(name);
                const _context: any = JSON.parse(JSON.stringify(this.context));
                const _param: any = JSON.parse(JSON.stringify(this.viewparams));
                Object.assign(_context, { bug: item.srfkey });
                let container: Subject<any>;
                if (view.placement && !Object.is(view.placement, '') && Object.is(view.placement, 'DRAWER')) {
                    container = this.$appdrawer.openDrawer(view, _context, _param);
                } else {
                    container = this.$appmodal.openModal(view, _context, _param);
                }
                container.subscribe((result: any) => {
                    if (!result || !Object.is(result.ret, 'OK')) {
                        return;
                    }
                    this.refresh();
                });
            } else {
                item[this.groupField] = name;
                this.updateData(item);
            }
        }
    }

    /**
     * 拖拽更新页面
     *
     * @param {*} evt
     * @param {*} name
     * @memberof BugKanBanBase
     */
    public getUpdateView(group: any) {
        switch(group) {
            case 'resolved': 
                return {
                    viewname: 'bug-resolve-view',
                    title: this.$t('entities.bug.views.resolveview.title'),
                    width: 800,
                    height: 600,
                    placement:'POPUPMODAL'
                };
            case 'active': 
                return {
                    viewname: 'task-activation-task-view',
                    title: this.$t('entities.task.views.activationtaskview.title'),
                    width: 800,
                    height: 600,
                    placement:'POPUPMODAL'
                };
            case 'closed': 
                return {
                    viewname: 'bug-close-view',
                    title: this.$t('entities.bug.views.closeview.title'),
                    width: 800,
                    height: 600,
                    placement:'POPUPMODAL'
                };
            default:
                return null;
        }
    }

    /**
     * 获取头部样式
     *
     * @param {*} evt
     * @param {*} name
     * @memberof BugKanBan
     */
    public getHeaderStyle(name: string) {
        let style = { 'text-align': 'center' };
        if(Object.is(this.groupMode, 'CODELIST') && this.groupCodelist) {
            let codelist: any = this.$store.getters.getCodeList(this.groupCodelist);
            if(codelist) {
                let item = codelist.items.find((item: any) => Object.is(item.value, name));
                if(item) {
                    Object.assign(style, {
                        'border-color': item.color,
                        'border-width': '3px'
                    })
                }
            }
        }
        return style;
    }

}