import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import TaskService from '@/service/task/task-service';
import TypeGanttModel from './type-gantt-gantt-model';
import CodeListService from '@service/app/codelist-service';
import i18n from '@/locale';


/**
 * TypeGantt 部件服务对象
 *
 * @export
 * @class TypeGanttService
 */
export default class TypeGanttService extends ControlService {

    /**
     * 任务服务对象
     *
     * @type {TaskService}
     * @memberof TypeGanttService
     */
    public appEntityService: TaskService = new TaskService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof TypeGanttService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of TypeGanttService.
     * 
     * @param {*} [opts={}]
     * @memberof TypeGanttService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new TypeGanttModel();
    }


    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof TypeGanttService
     */
    public codeListService:CodeListService = new CodeListService({ $store: this.getStore() });


    /**
     * 节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof TypeGanttService
     */
    public TREENODE_SEPARATOR: string = ';';

    /**
     * 任务类型节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof TypeGanttService
     */
	public TREENODE_TASKTYPES: string = 'TaskTypes';

    /**
     * 默认根节点节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof TypeGanttService
     */
	public TREENODE_ROOT: string = 'ROOT';

    /**
     * 子任务节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof TypeGanttService
     */
	public TREENODE_CHILDTASKS: string = 'ChildTasks';

    /**
     * 根任务节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof TypeGanttService
     */
	public TREENODE_TASKS: string = 'Tasks';

    /**
     * 商品类别节点分隔符号
     *
     * @public
     * @type {*}
     * @memberof TypeGanttService
     */
    public dataModel: any = {
        TaskTypes: {
            end: {
                prop: 'deadline',
                default: null
            },
            assignedto: {
                prop: 'assignedto',
                default: null
            },
            start: {
                prop: 'eststarted',
                default: null
            },
            text: {
                prop: 'type',
                default: null
            },
            taskduration: {
                prop: 'duration',
                default: null
            },
        },
        ROOT: {
        },
        ChildTasks: {
            taskduration: {
                prop: 'duration',
                default: null
            },
            text: {
                prop: 'name',
                default: null
            },
            end: {
                prop: 'deadline',
                default: null
            },
            assignedto: {
                prop: 'assignedto',
                default: null
            },
            start: {
                prop: 'eststarted',
                default: null
            },
        },
        Tasks: {
            assignedto: {
                prop: 'assignedto',
                default: null
            },
            start: {
                prop: 'eststarted',
                default: null
            },
            taskduration: {
                prop: 'duration',
                default: null
            },
            text: {
                prop: 'name',
                default: null
            },
            end: {
                prop: 'deadline',
                default: null
            },
        },
    }

    /**
     * 获取节点数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TypeGanttService
     */
    @Errorlog
    public async getNodes(context:any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let { srfparentkey, srfcat, srfnodeid, srfnodefilter, query }: { srfparentkey: string, srfcat: string, srfnodeid: string, srfnodefilter: string, query:string } = data;
        srfnodefilter = query ? query : srfnodefilter;
        let list: any[] = [];
        let filter: any = {};
        let srfotherkey: string = '';

        if (!srfnodeid || Object.is(srfnodeid, '#')) {
            srfnodeid = this.TREENODE_ROOT;
        } else {
            srfotherkey = srfnodeid;
            srfnodeid = srfnodeid.split('_#_')[0];
        }

        let strTreeNodeId: string = srfnodeid;
        let strRealNodeId: string = '';
        let bRootSelect: boolean = false;
        let strNodeType: string | null = null;
        let strRootSelectNode: string = '';

        if (Object.is(strTreeNodeId, this.TREENODE_ROOT)) {
            strNodeType = this.TREENODE_ROOT;
            if (srfparentkey) {
                strRealNodeId = srfparentkey;
            }
        } else {
            let nPos = strTreeNodeId.indexOf(this.TREENODE_SEPARATOR);
            if (nPos === -1) {
                return Promise.reject({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
            }
            strNodeType = strTreeNodeId.substring(0, nPos);
			strRealNodeId = strTreeNodeId.substring(nPos + 1);
        }

        Object.assign(filter,
            {
                srfparentkey: srfparentkey,
                srfcat: srfcat,
                srfnodefilter: srfnodefilter,
                strRealNodeId: strRealNodeId,
                srfnodeid: srfnodeid,
                srfotherkey: srfotherkey,
                strNodeType: strNodeType,
                viewparams: JSON.parse(JSON.stringify(data)).viewparams
            }
        );

        // 分解节点标识
        let nodeid: string[] = strRealNodeId.split(this.TREENODE_SEPARATOR);
        for (let i = 0; i < nodeid.length; i++) {
            switch (i) {
                case 0:
                    Object.assign(filter, { nodeid: nodeid[0] });
                    break;
                case 1:
                    Object.assign(filter, { nodeid2: nodeid[1] });
                    break;
                case 2:
                    Object.assign(filter, { nodeid3: nodeid[2] });
                    break;
                case 3:
                    Object.assign(filter, { nodeid4: nodeid[3] });
                    break;
                default:
                    break;
            }
        }

        if (Object.is(strNodeType, this.TREENODE_TASKTYPES)) {
            await this.fillTasktypesNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ROOT)) {
            await this.fillRootNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_CHILDTASKS)) {
            await this.fillChildtasksNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_TASKS)) {
            await this.fillTasksNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        return Promise.resolve({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
    }

    /**
     * 填充 树视图节点[任务类型]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof TypeGanttService
     */
    @Errorlog
    public fillTasktypesNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchTasktypes(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.type;
                        let strText: string = entity.type;
                        Object.assign(treeNode,{srfparentdename:'Task',srfparentkey:entity.type});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'Task',srfparentkey:entity.type,task:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'task':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'TaskTypes';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId + '_#_' + filter.srfnodeid });
                        Object.assign(treeNode, { collapsed: true });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        if(!Object.is(filter.srfnodeid, this.TREENODE_ROOT)) {
                            Object.assign(treeNode, { parentId: filter.srfotherkey });
                        }
                        for(let key in this.dataModel.TaskTypes) {
                            let item = this.dataModel.TaskTypes[key];
                            let propVal: any = entity[item.prop];
                            try {
                                let def: any = JSON.parse(item.default);
                                propVal = propVal != null ? propVal : def.value;
                                if (def.hasOwnProperty('bkcolor')) {
                                    Object.assign(treeNode.style, { base: { fill: def.bkcolor, stroke: def.bkcolor }});
                                }
                                if (def.hasOwnProperty('color')) {
                                    Object.assign(treeNode.style, { text: { color: def.color }});
                                }
                            } catch(e) {
                                propVal = propVal != null ? propVal : item.default
                            }
                            treeNode[key] = propVal
                        }
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    public searchTasktypes(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.appEntityService;
            let list: any[] = [];
            if (_appEntityService['FetchTypeGroup'] && _appEntityService['FetchTypeGroup'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchTypeGroup'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchTypeGroup数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchTypeGroup数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[任务类型]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof TypeGanttService
     */
    @Errorlog
    public async fillTasktypesNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充根任务
            let TasksRsNavContext:any = {};
            let TasksRsNavParams:any = {};
            let TasksRsParams:any = {};
			await this.fillTasksNodes(context, filter, list ,TasksRsNavContext,TasksRsNavParams,TasksRsParams);
		} else {
			// 填充根任务
            let TasksRsNavContext:any = {};
            let TasksRsNavParams:any = {};
            let TasksRsParams:any = {};
			await this.fillTasksNodes(context, filter, list ,TasksRsNavContext,TasksRsNavParams,TasksRsParams);
		}
	}

    /**
     * 填充 树视图节点[默认根节点]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof TypeGanttService
     */
    @Errorlog
    public fillRootNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: 'entities.task.typegantt_gantt.nodes.root' });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ROOT';

            Object.assign(treeNode, { srfkey: 'root' });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += 'root';

            Object.assign(treeNode, { id: strNodeId + '_#_' + filter.srfnodeid });

            Object.assign(treeNode, { collapsed: true });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { navparams: '{}' });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            if(!Object.is(filter.srfnodeid, this.TREENODE_ROOT)) {
                Object.assign(treeNode, { parentId: filter.srfotherkey });
            }
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[默认根节点]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof TypeGanttService
     */
    @Errorlog
    public async fillRootNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充任务类型
            let TasktypesRsNavContext:any = {};
            let TasktypesRsNavParams:any = {};
            let TasktypesRsParams:any = {};
			await this.fillTasktypesNodes(context, filter, list ,TasktypesRsNavContext,TasktypesRsNavParams,TasktypesRsParams);
		} else {
			// 填充任务类型
            let TasktypesRsNavContext:any = {};
            let TasktypesRsNavParams:any = {};
            let TasktypesRsParams:any = {};
			await this.fillTasktypesNodes(context, filter, list ,TasktypesRsNavContext,TasktypesRsNavParams,TasktypesRsParams);
		}
	}

    /**
     * 填充 树视图节点[子任务]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof TypeGanttService
     */
    @Errorlog
    public fillChildtasksNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            if (Object.is(filter.strNodeType, this.TREENODE_TASKS)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchChildtasks(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'Task',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'Task',srfparentkey:entity.id,task:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'task':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'ChildTasks';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId + '_#_' + filter.srfnodeid });
                        Object.assign(treeNode, { collapsed: true });
                        Object.assign(treeNode, { leaf: true });
                        let objLeafFlag = entity.isleaf;
                        if (objLeafFlag != null ) {
                            let strLeafFlag: string = objLeafFlag.toString().toLowerCase();
                            if (Object.is(strLeafFlag, '1') || Object.is(strLeafFlag, 'true')){
                                Object.assign(treeNode, { leaf: true });
                            }
                        }
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        if(!Object.is(filter.srfnodeid, this.TREENODE_ROOT)) {
                            Object.assign(treeNode, { parentId: filter.srfotherkey });
                        }
                        for(let key in this.dataModel.ChildTasks) {
                            let item = this.dataModel.ChildTasks[key];
                            let propVal: any = entity[item.prop];
                            try {
                                let def: any = JSON.parse(item.default);
                                propVal = propVal != null ? propVal : def.value;
                                if (def.hasOwnProperty('bkcolor')) {
                                    Object.assign(treeNode.style, { base: { fill: def.bkcolor, stroke: def.bkcolor }});
                                }
                                if (def.hasOwnProperty('color')) {
                                    Object.assign(treeNode.style, { text: { color: def.color }});
                                }
                            } catch(e) {
                                propVal = propVal != null ? propVal : item.default
                            }
                            treeNode[key] = propVal
                        }
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    public searchChildtasks(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.appEntityService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDefault数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[子任务]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof TypeGanttService
     */
    @Errorlog
    public async fillChildtasksNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[根任务]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof TypeGanttService
     */
    @Errorlog
    public fillTasksNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_TASKTYPES)) {
                Object.assign(searchFilter, { n_type_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchTasks(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'Task',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'Task',srfparentkey:entity.id,task:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'task':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'Tasks';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId + '_#_' + filter.srfnodeid });
                        Object.assign(treeNode, { collapsed: true });
                        Object.assign(treeNode, { leaf: false });
                        let objLeafFlag = entity.isleaf;
                        if (objLeafFlag != null ) {
                            let strLeafFlag: string = objLeafFlag.toString().toLowerCase();
                            if (Object.is(strLeafFlag, '1') || Object.is(strLeafFlag, 'true')){
                                Object.assign(treeNode, { leaf: true });
                            }
                        }
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        if(!Object.is(filter.srfnodeid, this.TREENODE_ROOT)) {
                            Object.assign(treeNode, { parentId: filter.srfotherkey });
                        }
                        for(let key in this.dataModel.Tasks) {
                            let item = this.dataModel.Tasks[key];
                            let propVal: any = entity[item.prop];
                            try {
                                let def: any = JSON.parse(item.default);
                                propVal = propVal != null ? propVal : def.value;
                                if (def.hasOwnProperty('bkcolor')) {
                                    Object.assign(treeNode.style, { base: { fill: def.bkcolor, stroke: def.bkcolor }});
                                }
                                if (def.hasOwnProperty('color')) {
                                    Object.assign(treeNode.style, { text: { color: def.color }});
                                }
                            } catch(e) {
                                propVal = propVal != null ? propVal : item.default
                            }
                            treeNode[key] = propVal
                        }
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @public
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    public searchTasks(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            if(context && context.srfparentdename){
                Object.assign(searchFilter,{srfparentdename:JSON.parse(JSON.stringify(context)).srfparentdename});
            }
            if(context && context.srfparentkey){
                Object.assign(searchFilter,{srfparentkey:JSON.parse(JSON.stringify(context)).srfparentkey});
            }
            const _appEntityService: any = this.appEntityService;
            let list: any[] = [];
            if (_appEntityService['FetchRootTask'] && _appEntityService['FetchRootTask'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchRootTask'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchRootTask数据集异常!');
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchRootTask数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[根任务]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof TypeGanttService
     */
    @Errorlog
    public async fillTasksNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充子任务
            let ChildtasksRsNavContext:any = {};
            let ChildtasksRsNavParams:any = {};
            let ChildtasksRsParams:any = {};
			await this.fillChildtasksNodes(context, filter, list ,ChildtasksRsNavContext,ChildtasksRsNavParams,ChildtasksRsParams);
		} else {
			// 填充子任务
            let ChildtasksRsNavContext:any = {};
            let ChildtasksRsNavParams:any = {};
            let ChildtasksRsParams:any = {};
			await this.fillChildtasksNodes(context, filter, list ,ChildtasksRsNavContext,ChildtasksRsNavParams,ChildtasksRsParams);
		}
	}


    /**
     * 处理代码表返回数据(树状结构)
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof TypeGanttService
     */
    public handleDataSet(result:Array<any>,context:any,callBack:any){
        let list:Array<any> = [];
        if(result.length === 0){
            return list;
        }
        result.forEach((codeItem:any) =>{
            if(!codeItem.pvalue){
                let valueField:string = codeItem.value;
                this.setChildCodeItems(valueField,result,codeItem);
                list.push(codeItem);
            }
        })
        this.setNodeData(list,context,callBack);
        return list;
    }

    /**
     * 处理非根节点数据
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof TypeGanttService
     */
    public setChildCodeItems(pValue:string,result:Array<any>,codeItem:any){
        result.forEach((item:any) =>{
            if(item.pvalue == pValue){
                let valueField:string = item.value;
                this.setChildCodeItems(valueField,result,item);
                if(!codeItem.children){
                    codeItem.children = [];
                }
                codeItem.children.push(item);
            }
        })
    }

    /**
     * 设置节点UI数据
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof TypeGanttService
     */
    public setNodeData(result:Array<any>,context:any,callBack:any){
        result.forEach((item:any) =>{
            if(item.children){
                item.leaf = false;
                this.setNodeData(item.children,context,callBack);
            }else{
                item.leaf = true;
            }
            callBack(context,item);
        })
    }

    /**
     * 处理节点关系导航上下文
     *
     * @param context 应用上下文
     * @param filter 参数 
     * @param resNavContext 节点关系导航上下文
     *
     * @memberof TypeGanttService
     */
    public handleResNavContext(context:any,filter:any,resNavContext:any){
        if(resNavContext && Object.keys(resNavContext).length > 0){
            let tempContextData:any = JSON.parse(JSON.stringify(context));
            let tempViewParams:any = {};
            if(filter && filter.viewparams){
                tempViewParams = filter.viewparams;
            }
            Object.keys(resNavContext).forEach((item:any) =>{
                let curDataObj:any = resNavContext[item];
                this.handleCustomDataLogic(context,tempViewParams,curDataObj,tempContextData,item);
            })
            return tempContextData;
        }else{
            return context;
        }
    }

    /**
     * 处理关系导航参数
     *
     * @param context 应用上下文
     * @param filter 参数 
     * @param resNavParams 节点关系导航参数
     * @param resParams 节点关系参数
     *
     * @memberof TypeGanttService
     */
	public handleResNavParams(context:any,filter:any,resNavParams:any,resParams:any){
        if((resNavParams && Object.keys(resNavParams).length >0) || (resParams && Object.keys(resParams).length >0)){
            let tempViewParamData:any = {};
            let tempViewParams:any = {};
            if(filter && filter.viewparams){
                tempViewParams = filter.viewparams;
                tempViewParamData = JSON.parse(JSON.stringify(filter.viewparams));
            }
            if( Object.keys(resNavParams).length > 0){
                Object.keys(resNavParams).forEach((item:any) =>{
                    let curDataObj:any = resNavParams[item];
                    this.handleCustomDataLogic(context,tempViewParams,curDataObj,tempViewParamData,item);
                })
            }
            if( Object.keys(resParams).length > 0){
                Object.keys(resParams).forEach((item:any) =>{
                    let curDataObj:any = resParams[item];
                    tempViewParamData[item.toLowerCase()] = curDataObj.value;
                })
            }
            Object.assign(filter,{viewparams:tempViewParamData});
            return filter;
        }else{
            return filter;
        }
    }
    
    /**
     * 处理自定义节点关系导航数据
     * 
     * @param context 应用上下文
     * @param viewparams 参数 
     * @param curNavData 节点关系导航参数对象
     * @param tempData 返回数据
     * @param item 节点关系导航参数键值
     *
     * @memberof TypeGanttService
     */
	public handleCustomDataLogic(context:any,viewparams:any,curNavData:any,tempData:any,item:string){
		// 直接值直接赋值
		if(curNavData.isRawValue){
			if(Object.is(curNavData.value,"null") || Object.is(curNavData.value,"")){
                Object.defineProperty(tempData, item.toLowerCase(), {
                    value: null,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }else{
                Object.defineProperty(tempData, item.toLowerCase(), {
                    value: curNavData.value,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }
		}else{
			// 先从导航上下文取数，没有再从导航参数（URL）取数，如果导航上下文和导航参数都没有则为null
			if(context[(curNavData.value).toLowerCase()]){
				Object.defineProperty(tempData, item.toLowerCase(), {
					value: context[(curNavData.value).toLowerCase()],
					writable : true,
					enumerable : true,
					configurable : true
				});
			}else{
				if(viewparams[(curNavData.value).toLowerCase()]){
					Object.defineProperty(tempData, item.toLowerCase(), {
						value: viewparams[(curNavData.value).toLowerCase()],
						writable : true,
						enumerable : true,
						configurable : true
					});
				}else{
					Object.defineProperty(tempData, item.toLowerCase(), {
						value: null,
						writable : true,
						enumerable : true,
						configurable : true
					});
				}
			}
		}
	}

}