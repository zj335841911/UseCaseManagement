import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibTreeProjectModel from './doc-lib-tree-project-treeview-model';
import CodeListService from '@service/app/codelist-service';
import i18n from '@/locale';
import FileService from '@service/file/file-service';
import DocLibModuleService from '@service/doc-lib-module/doc-lib-module-service';
import DocService from '@service/doc/doc-service';


/**
 * DocLibTreeProject 部件服务对象
 *
 * @export
 * @class DocLibTreeProjectService
 */
export default class DocLibTreeProjectService extends ControlService {

    /**
     * 文档库服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibTreeProjectService
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof DocLibTreeProjectService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of DocLibTreeProjectService.
     * 
     * @param {*} [opts={}]
     * @memberof DocLibTreeProjectService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new DocLibTreeProjectModel();
    }


    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof DocLibTreeProjectService
     */
    public codeListService:CodeListService = new CodeListService({ $store: this.getStore() });


    /**
     * 附件服务对象
     *
     * @type {FileService}
     * @memberof DocLibTreeProjectService
     */
    public fileService: FileService = new FileService({ $store: this.getStore() });

    /**
     * 文档库分类服务对象
     *
     * @type {DocLibModuleService}
     * @memberof DocLibTreeProjectService
     */
    public doclibmoduleService: DocLibModuleService = new DocLibModuleService({ $store: this.getStore() });

    /**
     * 文档服务对象
     *
     * @type {DocService}
     * @memberof DocLibTreeProjectService
     */
    public docService: DocService = new DocService({ $store: this.getStore() });

    /**
     * 节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof DocLibTreeProjectService
     */
    public TREENODE_SEPARATOR: string = ';';

    /**
     * 附件库节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof DocLibTreeProjectService
     */
	public TREENODE_FILES: string = 'Files';

    /**
     * 附件节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof DocLibTreeProjectService
     */
	public TREENODE_FILE: string = 'File';

    /**
     * 文档库根模块节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof DocLibTreeProjectService
     */
	public TREENODE_DOCLIBMODULE: string = 'DocLibModule';

    /**
     * 文档库子模块节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof DocLibTreeProjectService
     */
	public TREENODE_CHILDDOCLIBMODULE: string = 'ChildDocLibModule';

    /**
     * 文档库下文档节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof DocLibTreeProjectService
     */
	public TREENODE_DOCLIBDOC: string = 'DocLibDoc';

    /**
     * 文档库节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof DocLibTreeProjectService
     */
	public TREENODE_DOCLIB: string = 'DocLib';

    /**
     * 分类下文档节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof DocLibTreeProjectService
     */
	public TREENODE_MODULEDOC: string = 'ModuleDoc';

    /**
     * 默认根节点节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof DocLibTreeProjectService
     */
	public TREENODE_ROOT: string = 'ROOT';

    /**
     * 获取节点数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public async getNodes(context:any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let { srfparentkey, srfcat, srfnodeid, srfnodefilter, query }: { srfparentkey: string, srfcat: string, srfnodeid: string, srfnodefilter: string, query:string } = data;
        srfnodefilter = query ? query : srfnodefilter;
        let list: any[] = [];
        let filter: any = {};


        if (!srfnodeid || Object.is(srfnodeid, '#')) {
            srfnodeid = this.TREENODE_ROOT;
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

        if (Object.is(strNodeType, this.TREENODE_FILES)) {
            await this.fillFilesNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_FILE)) {
            await this.fillFileNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_DOCLIBMODULE)) {
            await this.fillDoclibmoduleNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_CHILDDOCLIBMODULE)) {
            await this.fillChilddoclibmoduleNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_DOCLIBDOC)) {
            await this.fillDoclibdocNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_DOCLIB)) {
            await this.fillDoclibNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_MODULEDOC)) {
            await this.fillModuledocNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ROOT)) {
            await this.fillRootNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        return Promise.resolve({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
    }

    /**
     * 填充 树视图节点[附件库]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public fillFilesNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.doclib.doclibtreeproject_treeview.nodes.files') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'Files';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[附件库]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public async fillFilesNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充附件
            let FileRsNavContext:any = {};
            let FileRsNavParams:any = {};
            let FileRsParams:any = {};
			await this.fillFileNodes(context, filter, list ,FileRsNavContext,FileRsNavParams,FileRsParams);
		} else {
			// 填充附件
            let FileRsNavContext:any = {};
            let FileRsNavParams:any = {};
            let FileRsParams:any = {};
			await this.fillFileNodes(context, filter, list ,FileRsNavContext,FileRsNavParams,FileRsParams);
		}
	}

    /**
     * 填充 树视图节点[附件]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public fillFileNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_FILES)) {
                Object.assign(searchFilter, { n_project_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchFile(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.title;
                        Object.assign(treeNode,{srfparentdename:'File',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'File',srfparentkey:entity.id,file:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'file':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'File';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: true });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"file" });
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
    public searchFile(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(filter.srfnodefilter){
                Object.assign(searchFilter,{query:filter.srfnodefilter});
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
            const _appEntityService: any = this.fileService;
            let list: any[] = [];
            if (_appEntityService['FetchDocLibFile'] && _appEntityService['FetchDocLibFile'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDocLibFile'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchDocLibFile数据集异常!');
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
                        console.error('查询FetchDocLibFile数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[附件]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public async fillFileNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[文档库根模块]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public fillDoclibmoduleNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_DOCLIB)) {
                Object.assign(searchFilter, { n_root_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchDoclibmodule(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'DocLibModule',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'DocLibModule',srfparentkey:entity.id,doclibmodule:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'doclibmodule':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'DocLibModule';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"doclibmodule" });
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
    public searchDoclibmodule(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(filter.srfnodefilter){
                Object.assign(searchFilter,{query:filter.srfnodefilter});
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
            const _appEntityService: any = this.doclibmoduleService;
            let list: any[] = [];
            if (_appEntityService['FetchRootModuleMuLu'] && _appEntityService['FetchRootModuleMuLu'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchRootModuleMuLu'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchRootModuleMuLu数据集异常!');
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
                        console.error('查询FetchRootModuleMuLu数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[文档库根模块]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public async fillDoclibmoduleNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充文档库子模块
            let ChilddoclibmoduleRsNavContext:any = {};
            let ChilddoclibmoduleRsNavParams:any = {};
            let ChilddoclibmoduleRsParams:any = {};
			await this.fillChilddoclibmoduleNodes(context, filter, list ,ChilddoclibmoduleRsNavContext,ChilddoclibmoduleRsNavParams,ChilddoclibmoduleRsParams);
			// 填充分类下文档
            let ModuledocRsNavContext:any = {};
            let ModuledocRsNavParams:any = {};
            let ModuledocRsParams:any = {};
			await this.fillModuledocNodes(context, filter, list ,ModuledocRsNavContext,ModuledocRsNavParams,ModuledocRsParams);
		} else {
			// 填充文档库子模块
            let ChilddoclibmoduleRsNavContext:any = {};
            let ChilddoclibmoduleRsNavParams:any = {};
            let ChilddoclibmoduleRsParams:any = {};
			await this.fillChilddoclibmoduleNodes(context, filter, list ,ChilddoclibmoduleRsNavContext,ChilddoclibmoduleRsNavParams,ChilddoclibmoduleRsParams);
			// 填充分类下文档
            let ModuledocRsNavContext:any = {};
            let ModuledocRsNavParams:any = {};
            let ModuledocRsParams:any = {};
			await this.fillModuledocNodes(context, filter, list ,ModuledocRsNavContext,ModuledocRsNavParams,ModuledocRsParams);
		}
	}

    /**
     * 填充 树视图节点[文档库子模块]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public fillChilddoclibmoduleNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_DOCLIBMODULE)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }


            if (Object.is(filter.strNodeType, this.TREENODE_CHILDDOCLIBMODULE)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchChilddoclibmodule(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'DocLibModule',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'DocLibModule',srfparentkey:entity.id,doclibmodule:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'doclibmodule':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'ChildDocLibModule';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"doclibmodule" });
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
    public searchChilddoclibmodule(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(filter.srfnodefilter){
                Object.assign(searchFilter,{query:filter.srfnodefilter});
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
            const _appEntityService: any = this.doclibmoduleService;
            let list: any[] = [];
            if (_appEntityService['FetchAllDoclibModule'] && _appEntityService['FetchAllDoclibModule'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchAllDoclibModule'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchAllDoclibModule数据集异常!');
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
                        console.error('查询FetchAllDoclibModule数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[文档库子模块]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public async fillChilddoclibmoduleNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充文档库子模块
            let ChilddoclibmoduleRsNavContext:any = {};
            let ChilddoclibmoduleRsNavParams:any = {};
            let ChilddoclibmoduleRsParams:any = {};
			await this.fillChilddoclibmoduleNodes(context, filter, list ,ChilddoclibmoduleRsNavContext,ChilddoclibmoduleRsNavParams,ChilddoclibmoduleRsParams);
			// 填充分类下文档
            let ModuledocRsNavContext:any = {};
            let ModuledocRsNavParams:any = {};
            let ModuledocRsParams:any = {};
			await this.fillModuledocNodes(context, filter, list ,ModuledocRsNavContext,ModuledocRsNavParams,ModuledocRsParams);
		} else {
			// 填充文档库子模块
            let ChilddoclibmoduleRsNavContext:any = {};
            let ChilddoclibmoduleRsNavParams:any = {};
            let ChilddoclibmoduleRsParams:any = {};
			await this.fillChilddoclibmoduleNodes(context, filter, list ,ChilddoclibmoduleRsNavContext,ChilddoclibmoduleRsNavParams,ChilddoclibmoduleRsParams);
			// 填充分类下文档
            let ModuledocRsNavContext:any = {};
            let ModuledocRsNavParams:any = {};
            let ModuledocRsParams:any = {};
			await this.fillModuledocNodes(context, filter, list ,ModuledocRsNavContext,ModuledocRsNavParams,ModuledocRsParams);
		}
	}

    /**
     * 填充 树视图节点[文档库下文档]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public fillDoclibdocNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_DOCLIB)) {
                Object.assign(searchFilter, { n_lib_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchDoclibdoc(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.title;
                        Object.assign(treeNode,{srfparentdename:'Doc',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'Doc',srfparentkey:entity.id,doc:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'doc':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'DocLibDoc';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: true });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"doc" });
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
    public searchDoclibdoc(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(filter.srfnodefilter){
                Object.assign(searchFilter,{query:filter.srfnodefilter});
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
            const _appEntityService: any = this.docService;
            let list: any[] = [];
            if (_appEntityService['FetchRootDoc'] && _appEntityService['FetchRootDoc'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchRootDoc'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchRootDoc数据集异常!');
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
                        console.error('查询FetchRootDoc数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[文档库下文档]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public async fillDoclibdocNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[文档库]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public fillDoclibNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchDoclib(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'DocLib',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'DocLib',srfparentkey:entity.id,doclib:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'doclib':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'DocLib';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: bFirst });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"doclib" });
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
    public searchDoclib(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(filter.srfnodefilter){
                Object.assign(searchFilter,{query:filter.srfnodefilter});
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
            if (_appEntityService['FetchByProjectNotFiles'] && _appEntityService['FetchByProjectNotFiles'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchByProjectNotFiles'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        resolve([]);
                        console.log(JSON.stringify(context));
                        console.error('查询FetchByProjectNotFiles数据集异常!');
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
                        console.error('查询FetchByProjectNotFiles数据集异常!');
                });
            }
        })
    }

    /**
     * 填充 树视图节点[文档库]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public async fillDoclibNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充文档库根模块
            let DoclibmoduleRsNavContext:any = {};
            let DoclibmoduleRsNavParams:any = {};
            let DoclibmoduleRsParams:any = {};
			await this.fillDoclibmoduleNodes(context, filter, list ,DoclibmoduleRsNavContext,DoclibmoduleRsNavParams,DoclibmoduleRsParams);
			// 填充文档库下文档
            let DoclibdocRsNavContext:any = {};
            let DoclibdocRsNavParams:any = {};
            let DoclibdocRsParams:any = {};
			await this.fillDoclibdocNodes(context, filter, list ,DoclibdocRsNavContext,DoclibdocRsNavParams,DoclibdocRsParams);
		} else {
			// 填充文档库根模块
            let DoclibmoduleRsNavContext:any = {};
            let DoclibmoduleRsNavParams:any = {};
            let DoclibmoduleRsParams:any = {};
			await this.fillDoclibmoduleNodes(context, filter, list ,DoclibmoduleRsNavContext,DoclibmoduleRsNavParams,DoclibmoduleRsParams);
			// 填充文档库下文档
            let DoclibdocRsNavContext:any = {};
            let DoclibdocRsNavParams:any = {};
            let DoclibdocRsParams:any = {};
			await this.fillDoclibdocNodes(context, filter, list ,DoclibdocRsNavContext,DoclibdocRsNavParams,DoclibdocRsParams);
		}
	}

    /**
     * 填充 树视图节点[分类下文档]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public fillModuledocNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_DOCLIBMODULE)) {
                Object.assign(searchFilter, { n_module_eq: filter.nodeid });
            }


            if (Object.is(filter.strNodeType, this.TREENODE_CHILDDOCLIBMODULE)) {
                Object.assign(searchFilter, { n_module_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchModuledoc(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.title;
                        Object.assign(treeNode,{srfparentdename:'Doc',srfparentkey:entity.id});
                        let tempContext:any = JSON.parse(JSON.stringify(context));
                        Object.assign(tempContext,{srfparentdename:'Doc',srfparentkey:entity.id,doc:strId})
                        Object.assign(treeNode,{srfappctx:tempContext});
                        Object.assign(treeNode,{'doc':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'ModuleDoc';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: true });
                        Object.assign(treeNode, { curData: entity });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        Object.assign(treeNode, { nodeType: "DE",appEntityName:"doc" });
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
    public searchModuledoc(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(filter.viewparams){
                Object.assign(searchFilter,filter.viewparams);
            }
            if(filter.srfnodefilter){
                Object.assign(searchFilter,{query:filter.srfnodefilter});
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
            const _appEntityService: any = this.docService;
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
     * 填充 树视图节点[分类下文档]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public async fillModuledocNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
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
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public fillRootNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.doclib.doclibtreeproject_treeview.nodes.root') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ROOT';

            Object.assign(treeNode, { srfkey: 'root' });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += 'root';

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
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
     * @memberof DocLibTreeProjectService
     */
    @Errorlog
    public async fillRootNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充文档库
            let DoclibRsNavContext:any = {};
            let DoclibRsNavParams:any = {};
            let DoclibRsParams:any = {};
			await this.fillDoclibNodes(context, filter, list ,DoclibRsNavContext,DoclibRsNavParams,DoclibRsParams);
			// 填充附件库
            let FilesRsNavContext:any = {};
            let FilesRsNavParams:any = {};
            let FilesRsParams:any = {};
			await this.fillFilesNodes(context, filter, list ,FilesRsNavContext,FilesRsNavParams,FilesRsParams);
		} else {
			// 填充文档库
            let DoclibRsNavContext:any = {};
            let DoclibRsNavParams:any = {};
            let DoclibRsParams:any = {};
			await this.fillDoclibNodes(context, filter, list ,DoclibRsNavContext,DoclibRsNavParams,DoclibRsParams);
			// 填充附件库
            let FilesRsNavContext:any = {};
            let FilesRsNavParams:any = {};
            let FilesRsParams:any = {};
			await this.fillFilesNodes(context, filter, list ,FilesRsNavContext,FilesRsNavParams,FilesRsParams);
		}
	}


    /**
     * 处理代码表返回数据(树状结构)
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof DocLibTreeProjectService
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
     * @memberof DocLibTreeProjectService
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
     * @memberof DocLibTreeProjectService
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
     * @memberof DocLibTreeProjectService
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
     * @memberof DocLibTreeProjectService
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
     * @memberof DocLibTreeProjectService
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
			if(context[(curNavData.value).toLowerCase()] != null){
				Object.defineProperty(tempData, item.toLowerCase(), {
					value: context[(curNavData.value).toLowerCase()],
					writable : true,
					enumerable : true,
					configurable : true
				});
			}else{
				if(viewparams[(curNavData.value).toLowerCase()] != null){
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