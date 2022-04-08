import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import ProjectStatsModel from './project-stats-treeview-model';
import CodeListService from '@service/app/codelist-service';
import i18n from '@/locale';


/**
 * ProjectStats 部件服务对象
 *
 * @export
 * @class ProjectStatsService
 */
export default class ProjectStatsService extends ControlService {

    /**
     * 我的地盘服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof ProjectStatsService
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProjectStatsService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProjectStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof ProjectStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProjectStatsModel();
    }


    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof ProjectStatsService
     */
    public codeListService:CodeListService = new CodeListService({ $store: this.getStore() });


    /**
     * 节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
    public TREENODE_SEPARATOR: string = ';';

    /**
     * bug类型统计节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_BUGTYPE: string = 'BugType';

    /**
     * 任务类型统计节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_TASKTYPECOUNT: string = 'TaskTypeCount';

    /**
     * bug状态统计节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_BUGSTATUSCOUNT: string = 'BugStatusCount';

    /**
     * 任务状态统计节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_TASKSTATUSCOUNT: string = 'TaskStatusCount';

    /**
     * 项目质量表节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_PROJECTQUALITY: string = 'ProjectQuality';

    /**
     * 项目需求阶段分布表节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_PROJECTSTORYSTAGESTATS: string = 'ProjectStoryStageStats';

    /**
     * 项目投入统计表节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_PROJECTINPUTSTATS: string = 'ProjectInputStats';

    /**
     * 项目进展表节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_PROJECTPROGRESS: string = 'ProjectProgress';

    /**
     * 默认根节点节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_ROOT: string = 'ROOT';

    /**
     * bug解决方案统计节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_BUGRESOLUTIONCOUNT: string = 'BugResolutionCount';

    /**
     * 项目需求状态分布表节点分隔符号
     *
     * @public
     * @type {string}
     * @memberof ProjectStatsService
     */
	public TREENODE_PROJECTSTORYSTATUSSTATS: string = 'ProjectStoryStatusStats';

    /**
     * 获取节点数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
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

        if (Object.is(strNodeType, this.TREENODE_BUGTYPE)) {
            await this.fillBugtypeNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_TASKTYPECOUNT)) {
            await this.fillTasktypecountNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_BUGSTATUSCOUNT)) {
            await this.fillBugstatuscountNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_TASKSTATUSCOUNT)) {
            await this.fillTaskstatuscountNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_PROJECTQUALITY)) {
            await this.fillProjectqualityNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_PROJECTSTORYSTAGESTATS)) {
            await this.fillProjectstorystagestatsNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_PROJECTINPUTSTATS)) {
            await this.fillProjectinputstatsNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_PROJECTPROGRESS)) {
            await this.fillProjectprogressNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ROOT)) {
            await this.fillRootNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_BUGRESOLUTIONCOUNT)) {
            await this.fillBugresolutioncountNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_PROJECTSTORYSTATUSSTATS)) {
            await this.fillProjectstorystatusstatsNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        return Promise.resolve({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
    }

    /**
     * 填充 树视图节点[bug类型统计]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillBugtypeNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.bugtype') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'BugType';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[bug类型统计]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillBugtypeNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[任务类型统计]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillTasktypecountNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.tasktypecount') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'TaskTypeCount';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[任务类型统计]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillTasktypecountNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[bug状态统计]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillBugstatuscountNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.bugstatuscount') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'BugStatusCount';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[bug状态统计]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillBugstatuscountNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[任务状态统计]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillTaskstatuscountNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.taskstatuscount') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'TaskStatusCount';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[任务状态统计]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillTaskstatuscountNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[项目质量表]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillProjectqualityNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.projectquality') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ProjectQuality';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[项目质量表]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillProjectqualityNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[项目需求阶段分布表]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillProjectstorystagestatsNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.projectstorystagestats') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ProjectStoryStageStats';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[项目需求阶段分布表]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillProjectstorystagestatsNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[项目投入统计表]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillProjectinputstatsNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.projectinputstats') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ProjectInputStats';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[项目投入统计表]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillProjectinputstatsNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[项目进展表]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillProjectprogressNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.projectprogress') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ProjectProgress';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[项目进展表]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillProjectprogressNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
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
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillRootNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.root') });
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
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillRootNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充bug状态统计
            let BugstatuscountRsNavContext:any = {};
            let BugstatuscountRsNavParams:any = {};
            let BugstatuscountRsParams:any = {};
			await this.fillBugstatuscountNodes(context, filter, list ,BugstatuscountRsNavContext,BugstatuscountRsNavParams,BugstatuscountRsParams);
			// 填充bug解决方案统计
            let BugresolutioncountRsNavContext:any = {};
            let BugresolutioncountRsNavParams:any = {};
            let BugresolutioncountRsParams:any = {};
			await this.fillBugresolutioncountNodes(context, filter, list ,BugresolutioncountRsNavContext,BugresolutioncountRsNavParams,BugresolutioncountRsParams);
			// 填充任务状态统计
            let TaskstatuscountRsNavContext:any = {};
            let TaskstatuscountRsNavParams:any = {};
            let TaskstatuscountRsParams:any = {};
			await this.fillTaskstatuscountNodes(context, filter, list ,TaskstatuscountRsNavContext,TaskstatuscountRsNavParams,TaskstatuscountRsParams);
			// 填充任务类型统计
            let TasktypecountRsNavContext:any = {};
            let TasktypecountRsNavParams:any = {};
            let TasktypecountRsParams:any = {};
			await this.fillTasktypecountNodes(context, filter, list ,TasktypecountRsNavContext,TasktypecountRsNavParams,TasktypecountRsParams);
			// 填充项目质量表
            let ProjectqualityRsNavContext:any = {};
            let ProjectqualityRsNavParams:any = {};
            let ProjectqualityRsParams:any = {};
			await this.fillProjectqualityNodes(context, filter, list ,ProjectqualityRsNavContext,ProjectqualityRsNavParams,ProjectqualityRsParams);
			// 填充bug类型统计
            let BugtypeRsNavContext:any = {};
            let BugtypeRsNavParams:any = {};
            let BugtypeRsParams:any = {};
			await this.fillBugtypeNodes(context, filter, list ,BugtypeRsNavContext,BugtypeRsNavParams,BugtypeRsParams);
			// 填充项目投入统计表
            let ProjectinputstatsRsNavContext:any = {};
            let ProjectinputstatsRsNavParams:any = {};
            let ProjectinputstatsRsParams:any = {};
			await this.fillProjectinputstatsNodes(context, filter, list ,ProjectinputstatsRsNavContext,ProjectinputstatsRsNavParams,ProjectinputstatsRsParams);
			// 填充项目进展表
            let ProjectprogressRsNavContext:any = {};
            let ProjectprogressRsNavParams:any = {};
            let ProjectprogressRsParams:any = {};
			await this.fillProjectprogressNodes(context, filter, list ,ProjectprogressRsNavContext,ProjectprogressRsNavParams,ProjectprogressRsParams);
			// 填充项目需求状态分布表
            let ProjectstorystatusstatsRsNavContext:any = {};
            let ProjectstorystatusstatsRsNavParams:any = {};
            let ProjectstorystatusstatsRsParams:any = {};
			await this.fillProjectstorystatusstatsNodes(context, filter, list ,ProjectstorystatusstatsRsNavContext,ProjectstorystatusstatsRsNavParams,ProjectstorystatusstatsRsParams);
			// 填充项目需求阶段分布表
            let ProjectstorystagestatsRsNavContext:any = {};
            let ProjectstorystagestatsRsNavParams:any = {};
            let ProjectstorystagestatsRsParams:any = {};
			await this.fillProjectstorystagestatsNodes(context, filter, list ,ProjectstorystagestatsRsNavContext,ProjectstorystagestatsRsNavParams,ProjectstorystagestatsRsParams);
		} else {
			// 填充bug状态统计
            let BugstatuscountRsNavContext:any = {};
            let BugstatuscountRsNavParams:any = {};
            let BugstatuscountRsParams:any = {};
			await this.fillBugstatuscountNodes(context, filter, list ,BugstatuscountRsNavContext,BugstatuscountRsNavParams,BugstatuscountRsParams);
			// 填充bug解决方案统计
            let BugresolutioncountRsNavContext:any = {};
            let BugresolutioncountRsNavParams:any = {};
            let BugresolutioncountRsParams:any = {};
			await this.fillBugresolutioncountNodes(context, filter, list ,BugresolutioncountRsNavContext,BugresolutioncountRsNavParams,BugresolutioncountRsParams);
			// 填充任务状态统计
            let TaskstatuscountRsNavContext:any = {};
            let TaskstatuscountRsNavParams:any = {};
            let TaskstatuscountRsParams:any = {};
			await this.fillTaskstatuscountNodes(context, filter, list ,TaskstatuscountRsNavContext,TaskstatuscountRsNavParams,TaskstatuscountRsParams);
			// 填充任务类型统计
            let TasktypecountRsNavContext:any = {};
            let TasktypecountRsNavParams:any = {};
            let TasktypecountRsParams:any = {};
			await this.fillTasktypecountNodes(context, filter, list ,TasktypecountRsNavContext,TasktypecountRsNavParams,TasktypecountRsParams);
			// 填充项目质量表
            let ProjectqualityRsNavContext:any = {};
            let ProjectqualityRsNavParams:any = {};
            let ProjectqualityRsParams:any = {};
			await this.fillProjectqualityNodes(context, filter, list ,ProjectqualityRsNavContext,ProjectqualityRsNavParams,ProjectqualityRsParams);
			// 填充bug类型统计
            let BugtypeRsNavContext:any = {};
            let BugtypeRsNavParams:any = {};
            let BugtypeRsParams:any = {};
			await this.fillBugtypeNodes(context, filter, list ,BugtypeRsNavContext,BugtypeRsNavParams,BugtypeRsParams);
			// 填充项目投入统计表
            let ProjectinputstatsRsNavContext:any = {};
            let ProjectinputstatsRsNavParams:any = {};
            let ProjectinputstatsRsParams:any = {};
			await this.fillProjectinputstatsNodes(context, filter, list ,ProjectinputstatsRsNavContext,ProjectinputstatsRsNavParams,ProjectinputstatsRsParams);
			// 填充项目进展表
            let ProjectprogressRsNavContext:any = {};
            let ProjectprogressRsNavParams:any = {};
            let ProjectprogressRsParams:any = {};
			await this.fillProjectprogressNodes(context, filter, list ,ProjectprogressRsNavContext,ProjectprogressRsNavParams,ProjectprogressRsParams);
			// 填充项目需求状态分布表
            let ProjectstorystatusstatsRsNavContext:any = {};
            let ProjectstorystatusstatsRsNavParams:any = {};
            let ProjectstorystatusstatsRsParams:any = {};
			await this.fillProjectstorystatusstatsNodes(context, filter, list ,ProjectstorystatusstatsRsNavContext,ProjectstorystatusstatsRsNavParams,ProjectstorystatusstatsRsParams);
			// 填充项目需求阶段分布表
            let ProjectstorystagestatsRsNavContext:any = {};
            let ProjectstorystagestatsRsNavParams:any = {};
            let ProjectstorystagestatsRsParams:any = {};
			await this.fillProjectstorystagestatsNodes(context, filter, list ,ProjectstorystagestatsRsNavContext,ProjectstorystagestatsRsNavParams,ProjectstorystagestatsRsParams);
		}
	}

    /**
     * 填充 树视图节点[bug解决方案统计]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillBugresolutioncountNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.bugresolutioncount') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'BugResolutionCount';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[bug解决方案统计]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillBugresolutioncountNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}

    /**
     * 填充 树视图节点[项目需求状态分布表]
     *
     * @public
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @param {*} rsNavContext   
     * @param {*} rsNavParams
     * @param {*} rsParams
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public fillProjectstorystatusstatsNodes(context:any={},filter: any, list: any[],rsNavContext?:any,rsNavParams?:any,rsParams?:any): Promise<any> {
        context = this.handleResNavContext(context,filter,rsNavContext);
        filter = this.handleResNavParams(context,filter,rsNavParams,rsParams);
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: i18n.t('entities.ibzmyterritory.projectstats_treeview.nodes.projectstorystatusstats') });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ProjectStoryStatusStats';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: true });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            Object.assign(treeNode, { nodeType: "STATIC" });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[项目需求状态分布表]子节点
     *
     * @public
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProjectStatsService
     */
    @Errorlog
    public async fillProjectstorystatusstatsNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}


    /**
     * 处理代码表返回数据(树状结构)
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof ProjectStatsService
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
     * @memberof ProjectStatsService
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
     * @memberof ProjectStatsService
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
     * @memberof ProjectStatsService
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
     * @memberof ProjectStatsService
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
     * @memberof ProjectStatsService
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