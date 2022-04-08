import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectModuleService from '@/service/project-module/project-module-service';
import TaskModuleExpService from './task-module-exp-treeview-service';
import ProjectModuleUIService from '@/uiservice/project-module/project-module-ui-service';

/**
 * treeexpbar_tree部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TaskModuleExpTreeBase}
 */
export class TaskModuleExpTreeBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TaskModuleExpTreeBase
     */
    protected controlType: string = 'TREEVIEW';

    /**
     * 建构部件服务对象
     *
     * @type {TaskModuleExpService}
     * @memberof TaskModuleExpTreeBase
     */
    public service: TaskModuleExpService = new TaskModuleExpService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectModuleService}
     * @memberof TaskModuleExpTreeBase
     */
    public appEntityService: ProjectModuleService = new ProjectModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskModuleExpTreeBase
     */
    protected appDeName: string = 'projectmodule';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TaskModuleExpTreeBase
     */
    protected appDeLogicName: string = '任务模块';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectModuleUIService}
     * @memberof TaskModuleExpBase
     */  
    public appUIService: ProjectModuleUIService = new ProjectModuleUIService(this.$store);

    /**
     * zt_product_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExpTreeBase
     */
    public zt_product_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.zt_product_cm_deuiaction1_click(null, 'zt_product_cm', $event2);
        }
    }

    /**
     * branchs_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExpTreeBase
     */
    public branchs_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.branchs_cm_deuiaction1_click(null, 'branchs_cm', $event2);
        }
    }

    /**
     * productnotroot_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExpTreeBase
     */
    public productnotroot_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.productnotroot_cm_deuiaction1_click(null, 'productnotroot_cm', $event2);
        }
    }

    /**
     * all_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExpTreeBase
     */
    public all_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.all_cm_deuiaction1_click(null, 'all_cm', $event2);
        }
    }

    /**
     * module_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExpTreeBase
     */
    public module_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.module_cm_deuiaction1_click(null, 'module_cm', $event2);
        }
    }

    /**
     * rootmodule_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExpTreeBase
     */
    public rootmodule_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.rootmodule_cm_deuiaction1_click(null, 'rootmodule_cm', $event2);
        }
    }

    /**
     * root_nobranch_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExpTreeBase
     */
    public root_nobranch_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.root_nobranch_cm_deuiaction1_click(null, 'root_nobranch_cm', $event2);
        }
    }

    /**
     * projectmodule_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExpTreeBase
     */
    public projectmodule_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.projectmodule_cm_deuiaction1_click(null, 'projectmodule_cm', $event2);
        }
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public all_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public branchs_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public zt_product_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public projectmodule_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public rootmodule_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public productnotroot_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public module_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public root_nobranch_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 刷新
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProjectTaskTreeExpViewBase
     */
    public RefreshParent(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        if (xData && xData.refresh_parent && xData.refresh_parent instanceof Function) {
            xData.refresh_parent();
            return;
        }
        const _this: any = this;
        if (_this.refresh_parent && _this.refresh_parent instanceof Function) {
            _this.refresh_parent();
            return;
        }
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TaskModuleExpBase
     */
    public getDatas(): any[] {
        return [this.currentselectedNode];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TaskModuleExpBase
     */
    public getData(): any {
        return this.currentselectedNode;
    }

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof TaskModuleExpBase
     */
    @Prop({ default: true }) public isSingleSelect!: boolean;

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof TaskModuleExpBase
     */
    @Prop({ default: false }) public isSelectFirstDefault!: boolean;

    /**
     * 枝干节点是否可用（具有数据能力，可抛出）
     *
     * @type {string}
     * @memberof TaskModuleExpBase
     */
    @Prop({default:true}) public isBranchAvailable!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof TaskModuleExpBase
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 初始化完成
     *
     * @type {boolean}
     * @memberof TaskModuleExpBase
     */
    public inited: boolean = false;

    /**
     * 已选中数据集合
     *
     * @type {*}
     * @memberof TaskModuleExpBase
     */
    public selectedNodes: any = [];

    /**
     * 当前选中数据项
     *
     * @type {*}
     * @memberof TaskModuleExpBase
     */
    public currentselectedNode: any = {};

    /**
     * 选中数据字符串
     *
     * @type {string}
     * @memberof TaskModuleExpBase
     */
    @Prop() public selectedData!: string;

    /**
     * 备份行为模型
     * 
     * @type any
     * @memberof TaskModuleExpBase
     */
    public copyActionModel: any = {};

    /**
     * 选中值变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TaskModuleExpBase
     */
    @Watch('selectedData')
    public onValueChange(newVal: any, oldVal: any) {
        this.echoselectedNodes = newVal ? this.isSingleSelect ? JSON.parse(newVal)[0] : JSON.parse(newVal) : [];
        this.selectedNodes = [];
        if(this.echoselectedNodes.length > 0){
            let AllnodesObj = (this.$refs.treeexpbar_tree as any).store.nodesMap;
            let AllnodesArray : any[] = [];
            for (const key in AllnodesObj) {
              if (AllnodesObj.hasOwnProperty(key)) {
                AllnodesArray.push(AllnodesObj[key].data);
              }
            }
            this.setDefaultSelection(AllnodesArray);
        }
    }

    /**
     * 回显选中数据集合
     *
     * @type {*}
     * @memberof TaskModuleExpBase
     */
    public echoselectedNodes:any[] = this.selectedData ? ( this.isSingleSelect ? [JSON.parse(this.selectedData)[0]] : JSON.parse(this.selectedData)) : [];

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof TaskModuleExpBase
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof TaskModuleExpBase
     */
    @Prop() public fetchAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof TaskModuleExpBase
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof TaskModuleExpBase
     */
    @Prop() public loadAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof TaskModuleExpBase
     */
    @Prop() public createAction!: string;

    /**
     * 过滤属性
     *
     * @type {string}
     * @memberof TaskModuleExpBase
     */
    public srfnodefilter: string = '';

    /**
     * 默认输出图标
     *
     * @type {boolean}
     * @memberof TaskModuleExpBase
     */
    public isOutputIconDefault: boolean = false;


    /**
     * 数据展开主键
     *
     * @type {string[]}
     * @memberof TaskModuleExpBase
     */
    @Provide()
    public expandedKeys: string[] = [];

    /**
     * 树节点上下文菜单集合
     *
     * @type {string[]}
     * @memberof TaskModuleExpBase
     */
     public actionModel: any = {
        ZT_PRODUCT_deuiaction1: {name:'deuiaction1',nodeOwner:'ZT_PRODUCT',type: 'DEUIACTION', tag: 'RefreshParent', noprivdisplaymode:2, visible: true, disabled: false},
        BRANCHS_deuiaction1: {name:'deuiaction1',nodeOwner:'BRANCHS',type: 'DEUIACTION', tag: 'RefreshParent', noprivdisplaymode:2, visible: true, disabled: false},
        productNotRoot_deuiaction1: {name:'deuiaction1',nodeOwner:'productNotRoot',type: 'DEUIACTION', tag: 'RefreshParent', noprivdisplaymode:2, visible: true, disabled: false},
        ALL_deuiaction1: {name:'deuiaction1',nodeOwner:'ALL',type: 'DEUIACTION', tag: 'RefreshParent', noprivdisplaymode:2, visible: true, disabled: false},
        MODULE_deuiaction1: {name:'deuiaction1',nodeOwner:'MODULE',type: 'DEUIACTION', tag: 'RefreshParent', noprivdisplaymode:2, visible: true, disabled: false},
        ROOTMODULE_deuiaction1: {name:'deuiaction1',nodeOwner:'ROOTMODULE',type: 'DEUIACTION', tag: 'RefreshParent', noprivdisplaymode:2, visible: true, disabled: false},
        Root_NoBranch_deuiaction1: {name:'deuiaction1',nodeOwner:'Root_NoBranch',type: 'DEUIACTION', tag: 'RefreshParent', noprivdisplaymode:2, visible: true, disabled: false},
        ProjectModule_deuiaction1: {name:'deuiaction1',nodeOwner:'ProjectModule',type: 'DEUIACTION', tag: 'RefreshParent', noprivdisplaymode:2, visible: true, disabled: false},
    }

    /**
     * 选中数据变更事件
     *
     * @public
     * @param {*} data
     * @param {*} data 当前节点对应传入对象
     * @param {*} checkedState 树目前选中状态对象
     * @memberof TaskModuleExpBase
     */
    public onCheck(data: any, checkedState: any) {
        // 处理多选数据
        if(!this.isSingleSelect){
            let leafNodes = checkedState.checkedNodes.filter((item:any) => item.leaf);
            this.selectedNodes = JSON.parse(JSON.stringify(leafNodes));
            this.$emit('selectionchange', this.selectedNodes);
        }
    }

    /**
     * 选中数据变更事件
     *
     * @public
     * @param {*} data 节点对应传入对象
     * @param {*} node 节点对应node对象
     * @memberof TaskModuleExpBase
     */
    public selectionChange(data: any, node: any) {
        // 禁用项处理
        if (data.disabled){
            node.isCurrent = false;
            return;
        }
        // 只处理最底层子节点
        if(this.isBranchAvailable || data.leaf){
            this.currentselectedNode = JSON.parse(JSON.stringify(data));
            // 单选直接替换
            if(this.isSingleSelect){
                this.selectedNodes = [this.currentselectedNode];
                this.$emit('selectionchange', this.selectedNodes);
            }
            // 多选用check方法
        }
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof TaskModuleExpBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TaskModuleExpBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.inited = false;
                    this.$nextTick(() => {
                        this.inited = true;
                    });
                }
                if (Object.is('filter', action)) {
                    this.srfnodefilter  = data.srfnodefilter;
                    this.refresh_all();
                }
                if (Object.is('refresh_parent', action)) {
                    this.refresh_parent();
                }
                if (Object.is('refresh_current', action)) {
                    this.refresh_current();
                }
            });
        }
    }

    /**
     * 对树节点进行筛选操作
     * @memberof OrderTree
     */
    public filterNode(value:any, data:any) {
        if (!value) return true;
        return data.text.indexOf(value) !== -1;
    }


    /**
     * vue 生命周期
     *
     * @memberof TaskModuleExpBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TaskModuleExpBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 刷新数据
     *
     * @memberof TaskModuleExpBase
     */
    public refresh_all(): void {
        this.inited = false;
        this.$nextTick(() => {
            this.inited = true;
        });
    }

    /**
     * 刷新当前
     *
     * @memberof ModuleExpBase
     */
    public refresh_current(): void {
        if (Object.keys(this.currentselectedNode).length === 0) {
            return;
        }
        const tree: any = this.$refs.treeexpbar_tree;
        const node: any = tree.getNode(this.currentselectedNode.id);
        if (!node || !node.parent) {
            return;
        }
        let curNode:any = {}; 
        curNode = this.$util.deepObjectMerge(curNode,node);
        let tempContext:any = {};
        if(curNode.data && curNode.data.srfappctx){
            Object.assign(tempContext,curNode.data.srfappctx);
        }else{
            Object.assign(tempContext,this.context);
        }
        const id: string = node.key ? node.key : '#';
        const param: any = { srfnodeid: id };
        this.refresh_node(tempContext,param, false);
    }

    /**
     * 刷新父节点
     *
     * @memberof TaskModuleExpBase
     */
    public refresh_parent(): void {
        if (Object.keys(this.currentselectedNode).length === 0) {
            return;
        }
        const tree: any = this.$refs.treeexpbar_tree;
        const node: any = tree.getNode(this.currentselectedNode.id);
        if (!node || !node.parent) {
            return;
        }
        let curNode:any = {}; 
        const { parent: _parent } = node;
        curNode = this.$util.deepObjectMerge(curNode,_parent);
        let tempContext:any = {};
        if(curNode.data && curNode.data.srfappctx){
            Object.assign(tempContext,curNode.data.srfappctx);
        }else{
            Object.assign(tempContext,this.context);
        }
        const id: string = _parent.key ? _parent.key : '#';
        const param: any = { srfnodeid: id };
        this.refresh_node(tempContext,param, true);
    }

    /**
     * 数据加载
     *
     * @param {*} node
     * @memberof TaskModuleExpBase
     */
    public load(node: any = {}, resolve?: any) {
        if (node.data && node.data.children) {
            resolve(node.data.children);
            return;
        }
        const params: any = {
            srfnodeid: node.data && node.data.id ? node.data.id : "#",
            srfnodefilter: this.srfnodefilter
        };
        let tempViewParams:any = JSON.parse(JSON.stringify(this.viewparams));
        let curNode:any = {}; 
        curNode = this.$util.deepObjectMerge(curNode,node);
        let tempContext:any = this.computecurNodeContext(curNode);
        if(curNode.data && curNode.data.srfparentdename){
            Object.assign(tempContext,{srfparentdename:curNode.data.srfparentdename});
            Object.assign(tempViewParams,{srfparentdename:curNode.data.srfparentdename});
        }
        if(curNode.data && curNode.data.srfparentkey){
            Object.assign(tempContext,{srfparentkey:curNode.data.srfparentkey});
            Object.assign(tempViewParams,{srfparentkey:curNode.data.srfparentkey});
        }
        Object.assign(params,{viewparams:tempViewParams});
        this.service.getNodes(tempContext,params).then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
                resolve([]);
                return;
            }
            const _items = response.data;
            this.formatExpanded(_items);
            resolve([..._items]);
            let isRoot = Object.is(node.level,0);
            let isSelectedAll = node.checked;
            this.setDefaultSelection(_items, isRoot, isSelectedAll);
            this.$emit("load", _items);
        }).catch((response: any) => {
            resolve([]);
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
        });
    }

    /**
     * 计算当前节点的上下文
     *
     * @param {*} curNode 当前节点
     * @memberof TaskModuleExpBase
     */
    public computecurNodeContext(curNode:any){
        let tempContext:any = {};
        if(curNode && curNode.data && curNode.data.srfappctx){
            tempContext = JSON.parse(JSON.stringify(curNode.data.srfappctx));
        }else{
            tempContext = JSON.parse(JSON.stringify(this.context));
        }
        return tempContext;
    }

    /**
     * 刷新功能
     *
     * @param {any[]} args
     * @memberof TaskModuleExpBase
     */
    public refresh(args: any[]): void {
        this.refresh_all();
    }

    /**
     * 刷新节点
     *
     * @public
     * @param {*} [curContext] 当前节点上下文
     * @param {*} [arg={}] 当前节点附加参数
     * @param {boolean} parentnode 是否是刷新父节点
     * @memberof TaskModuleExpBase
     */
    public refresh_node(curContext:any,arg: any = {}, parentnode: boolean): void {
        const { srfnodeid: id } = arg;
        Object.assign(arg,{viewparams:this.viewparams});
        const get: Promise<any> = this.service.getNodes(JSON.parse(JSON.stringify(curContext)),arg);
        get.then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
                return;
            }
            const _items = [...response.data];
            this.formatExpanded(_items);
            const tree: any = this.$refs.treeexpbar_tree;
            tree.updateKeyChildren(id, _items);
            if (parentnode) {
                this.currentselectedNode = {};
            }
            this.$forceUpdate();
            this.setDefaultSelection(_items);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
        });
    }

    /**
     * 默认展开节点
     *
     * @public
     * @param {any[]} items
     * @returns {any[]}
     * @memberof TaskModuleExpBase
     */
    public formatExpanded(items: any[]): any[] {
        const data: any[] = [];
        items.forEach((item) => {
            if (item.expanded || (item.children && item.children.length > 0)) {
                this.expandedKeys.push(item.id);
            }
        });
        return data;
    }

    /**
     * 设置默认选中,回显数项，选中所有子节点
     *
     * @param {any[]} items 当前节点所有子节点集合
     * @param {boolean} isRoot 是否是加载根节点
     * @param {boolean} isSelectedAll 是否选中所有子节点
     * @memberof TaskModuleExpBase
     */
    public setDefaultSelection(items: any[], isRoot: boolean = false, isSelectedAll: boolean = false): void {
        if(items.length == 0){
            return;
        }
        let defaultData: any;
        // 导航中选中第一条配置的默认选中,没有选中第一条
        if(this.isSelectFirstDefault){
            if(this.isSingleSelect){
                let index = items.findIndex((item: any) => item.selected);
                if(index === -1) {
                    if(isRoot){
                        index = 0;
                    }else{
                        return;
                    }
                }
                defaultData = items[index];
                this.setTreeNodeHighLight(defaultData);
                this.currentselectedNode = JSON.parse(JSON.stringify(defaultData));
                if(this.isBranchAvailable || defaultData.leaf){
                    this.selectedNodes = [this.currentselectedNode];
                    this.$emit('selectionchange', this.selectedNodes);
                } 
            }
        }
        // 已选数据的回显
        if(this.echoselectedNodes && this.echoselectedNodes.length > 0){
            let checkedNodes = items.filter((item:any)=>{
                return this.echoselectedNodes.some((val:any)=> {
                    if(Object.is(item.srfkey,val.srfkey) && Object.is(item.srfmajortext,val.srfmajortext)){
                        val.used = true;
                        return true;
                    }
                });
            });
            if(checkedNodes.length > 0){
                this.echoselectedNodes = this.echoselectedNodes.filter((item:any)=> !item.used);
                // 父节点选中时，不需要执行这段，会选中所有子节点
                if(!isSelectedAll){
                    if(this.isSingleSelect){
                        this.setTreeNodeHighLight(checkedNodes[0]);
                        this.currentselectedNode = JSON.parse(JSON.stringify(checkedNodes[0]));
                        this.selectedNodes = [this.currentselectedNode];
                    }else{
                        this.selectedNodes = this.selectedNodes.concat(checkedNodes);
                        const tree: any = this.$refs.treeexpbar_tree;
                        tree.setCheckedNodes(this.selectedNodes);
                    }
                }
            }
        }
        // 父节点选中时，选中所有子节点
        if(isSelectedAll){
            let leafNodes = items.filter((item:any) => item.leaf);
            this.selectedNodes = this.selectedNodes.concat(leafNodes);
            this.$emit('selectionchange', this.selectedNodes);
        }
    } 

    /**
     * 绘制右击菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExpBase
     */
    public renderContextMenu(node: any) {
        let content;
        if (node && node.data) {
            const data: any = JSON.parse(JSON.stringify(node.data));
            this.currentselectedNode = { ...data };
            const tags: string[] = data.id.split(';');
            if (tags[0] === "ZT_PRODUCT") {
                content = this.renderContextMenuZt_product();
            }
            if (tags[0] === "BRANCHS") {
                content = this.renderContextMenuBranchs();
            }
            if (tags[0] === "productNotRoot") {
                content = this.renderContextMenuProductnotroot();
            }
            if (tags[0] === "ALL") {
                content = this.renderContextMenuAll();
            }
            if (tags[0] === "MODULE") {
                content = this.renderContextMenuModule();
            }
            if (tags[0] === "ROOTMODULE") {
                content = this.renderContextMenuRootmodule();
            }
            if (tags[0] === "Root_NoBranch") {
                content = this.renderContextMenuRoot_nobranch();
            }
            if (tags[0] === "ProjectModule") {
                content = this.renderContextMenuProjectmodule();
            }
        }
        return content;
    }

    /**
     * 绘制ZT_PRODUCT类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExpBase
     */
    public renderContextMenuZt_product() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.zt_product_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1" v-show={this.copyActionModel['deuiaction1']?.visible} disabled={this.copyActionModel['deuiaction1']?.disabled}>
                        <i class="fa fa-refresh"></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制BRANCHS类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExpBase
     */
    public renderContextMenuBranchs() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.branchs_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1" v-show={this.copyActionModel['deuiaction1']?.visible} disabled={this.copyActionModel['deuiaction1']?.disabled}>
                        <i class="fa fa-refresh"></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制productNotRoot类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExpBase
     */
    public renderContextMenuProductnotroot() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.productnotroot_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1" v-show={this.copyActionModel['deuiaction1']?.visible} disabled={this.copyActionModel['deuiaction1']?.disabled}>
                        <i class="fa fa-refresh"></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制ALL类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExpBase
     */
    public renderContextMenuAll() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.all_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1" v-show={this.copyActionModel['deuiaction1']?.visible} disabled={this.copyActionModel['deuiaction1']?.disabled}>
                        <i class="fa fa-refresh"></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制MODULE类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExpBase
     */
    public renderContextMenuModule() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.module_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1" v-show={this.copyActionModel['deuiaction1']?.visible} disabled={this.copyActionModel['deuiaction1']?.disabled}>
                        <i class="fa fa-refresh"></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制ROOTMODULE类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExpBase
     */
    public renderContextMenuRootmodule() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.rootmodule_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1" v-show={this.copyActionModel['deuiaction1']?.visible} disabled={this.copyActionModel['deuiaction1']?.disabled}>
                        <i class="fa fa-refresh"></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制Root_NoBranch类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExpBase
     */
    public renderContextMenuRoot_nobranch() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.root_nobranch_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1" v-show={this.copyActionModel['deuiaction1']?.visible} disabled={this.copyActionModel['deuiaction1']?.disabled}>
                        <i class="fa fa-refresh"></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制ProjectModule类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExpBase
     */
    public renderContextMenuProjectmodule() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.projectmodule_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1" v-show={this.copyActionModel['deuiaction1']?.visible} disabled={this.copyActionModel['deuiaction1']?.disabled}>
                        <i class="fa fa-refresh"></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 设置选中高亮
     *
     * @param {*} data
     * @memberof TaskModuleExpBase
     */
    public setTreeNodeHighLight(data: any): void {
        const tree: any = this.$refs.treeexpbar_tree;
        tree.setCurrentKey(data.id);
    }

    /**
     * 执行默认界面行为
     *
     * @param {*} node
     * @memberof TaskModuleExpBase
     */
    public doDefaultAction(node: any) {
        if (node && node.data) {
            const data: any = node.data;
            const tags: string[] = data.id.split(';');
        }
        this.$emit('nodedblclick', this.selectedNodes);
    }

    /**
     * 显示上下文菜单
     * 
     * @param data 节点数据
     * @param event 事件源
     * @memberof TaskModuleExpBase
     */
    public showContext(data:any,event:any){
        let _this:any = this;
        this.copyActionModel = {};
        const tags: string[] = data.id.split(';');
        Object.values(this.actionModel).forEach((item:any) =>{
            if(Object.is(item.nodeOwner,tags[0])){
                this.copyActionModel[item.name] = item;
            }
        })
        if(Object.keys(this.copyActionModel).length === 0){
            return;
        }
        this.computeNodeState(data,data.nodeType,data.appEntityName).then((result:any) => {
            let flag:boolean = false;
            if(Object.values(result).length>0){
                flag =Object.values(result).some((item:any) =>{
                    return item.visible === true;
                })
            }
            if(flag){
                (_this.$refs[data.id] as any).showContextMenu(event.clientX, event.clientY);
            }
        });
    }

    /**
     * 计算节点右键权限
     *
     * @param {*} node 节点数据
     * @param {*} nodeType 节点类型
     * @param {*} appEntityName 应用实体名称  
     * @returns
     * @memberof TaskModuleExpBase
     */
    public async computeNodeState(node:any,nodeType:string,appEntityName:string) {
        if(Object.is(nodeType,"STATIC")){
            return this.copyActionModel;
        }
        if(this.copyActionModel && Object.keys(this.copyActionModel).length > 0) {
            let uiservice:any = await this.appUIService.getService(appEntityName);
            let result: any[] = ViewTool.calcActionItemAuthState(node.curData,this.copyActionModel,uiservice);
            return this.copyActionModel;  
        }
    }

}