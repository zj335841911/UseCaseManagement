
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { GridViewBase } from '@/studio-core';
import SysTeamMemberService from '@/service/sys-team-member/sys-team-member-service';
import SysTeamMemberAuthService from '@/authservice/sys-team-member/sys-team-member-auth-service';
import GridViewEngine from '@engine/view/grid-view-engine';
import SysTeamMemberUIService from '@/uiservice/sys-team-member/sys-team-member-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 组成员表格视图视图基类
 *
 * @export
 * @class SysTeamMemberUsr2GridViewPostMembersBase
 * @extends {GridViewBase}
 */
export class SysTeamMemberUsr2GridViewPostMembersBase extends GridViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    protected appDeName: string = 'systeammember';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    protected appDeKey: string = 'teammemberid';
// 应用实体「SysTeamMember」未设置主文本属性

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */ 
    protected dataControl: string = 'grid';

    /**
     * 实体服务对象
     *
     * @type {SysTeamMemberService}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    protected appEntityService: SysTeamMemberService = new SysTeamMemberService;

    /**
     * 实体权限服务对象
     *
     * @type SysTeamMemberUIService
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public appUIService: SysTeamMemberUIService = new SysTeamMemberUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof SysTeamMemberUsr2GridViewPostMembersBase
	 */
    protected customViewParams: any = {
        'n_postid_eq': {
            isRawValue: false,
            value: 'postid',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    protected model: any = {
        srfCaption: 'entities.systeammember.views.usr2gridviewpostmembers.caption',
        srfTitle: 'entities.systeammember.views.usr2gridviewpostmembers.title',
        srfSubTitle: 'entities.systeammember.views.usr2gridviewpostmembers.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    protected containerModel: any = {
        view_toolbar: {
            name: 'toolbar',
            type: 'TOOLBAR',
        },
        view_grid: {
            name: 'grid',
            type: 'GRID',
        },
        view_searchform: {
            name: 'searchform',
            type: 'SEARCHFORM',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof SysTeamMemberUsr2GridViewPostMembers
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
	protected viewtag: string = 'a34f1835a2bc3fef24cf0c7be698e4cf';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */ 
    protected viewName: string = 'SysTeamMemberUsr2GridViewPostMembers';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public engine: GridViewEngine = new GridViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            opendata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.opendata(args, fullargs, params, $event, xData);
            },
            newdata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.newdata(args, fullargs, params, $event, xData);
            },
            grid: this.$refs.grid,
            searchform: this.$refs.searchform,
            keyPSDEField: 'systeammember',
            isLoadDefault: true,
        });
    }

    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public grid_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }

    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public grid_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }

    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public grid_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }

    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public grid_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }

    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public grid_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamMemberUsr2GridViewPostMembersBase
     */
    public searchform_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof SysTeamMemberUsr2GridViewPostMembers
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        if(args[0].srfsourcekey){
            data.srfsourcekey = args[0].srfsourcekey;
        }
        if(fullargs && (fullargs as any).copymode) {
            Object.assign(data, { copymode: (fullargs as any).copymode });
        }
        let tempContext = JSON.parse(JSON.stringify(this.context));
        delete tempContext.systeammember;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'systeammembers', parameterName: 'systeammember' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const _data: any = { w: (new Date().getTime()) };
            Object.assign(_data, data);
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, _data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof SysTeamMemberUsr2GridViewPostMembers
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'systeammembers', parameterName: 'systeammember' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


}