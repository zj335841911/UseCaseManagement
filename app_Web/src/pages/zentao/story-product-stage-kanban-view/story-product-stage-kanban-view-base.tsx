

import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { KanBanViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryAuthService from '@/authservice/story/story-auth-service';
import KanBanViewEngine from '@engine/view/kan-ban-view-engine';
import StoryUIService from '@/uiservice/story/story-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 需求看板视图视图基类
 *
 * @export
 * @class StoryProductStageKanbanViewBase
 * @extends {KanBanViewBase}
 */
export class StoryProductStageKanbanViewBase extends KanBanViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryProductStageKanbanViewBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof StoryProductStageKanbanViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof StoryProductStageKanbanViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof StoryProductStageKanbanViewBase
     */ 
    protected dataControl: string = 'kanban';

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryProductStageKanbanViewBase
     */
    protected appEntityService: StoryService = new StoryService;

    /**
     * 实体权限服务对象
     *
     * @type StoryUIService
     * @memberof StoryProductStageKanbanViewBase
     */
    public appUIService: StoryUIService = new StoryUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof StoryProductStageKanbanViewBase
     */
    protected model: any = {
        srfCaption: 'entities.story.views.productstagekanbanview.caption',
        srfTitle: 'entities.story.views.productstagekanbanview.title',
        srfSubTitle: 'entities.story.views.productstagekanbanview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof StoryProductStageKanbanViewBase
     */
    protected containerModel: any = {
        view_toolbar: {
            name: 'toolbar',
            type: 'TOOLBAR',
        },
        view_kanban: {
            name: 'kanban',
            type: 'KANBAN',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof StoryProductStageKanbanView
     */
    public toolBarModels: any = {
        deuiaction1_refresh: { name: 'deuiaction1_refresh', caption: 'entities.story.productstagekanbanviewtoolbar_toolbar.deuiaction1_refresh.caption', 'isShowCaption': false, 'isShowIcon': true, tooltip: 'entities.story.productstagekanbanviewtoolbar_toolbar.deuiaction1_refresh.tip', iconcls: 'fa fa-refresh', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'Refresh', target: '', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof StoryProductStageKanbanViewBase
     */
	protected viewtag: string = 'bfa6b267c1c868a41b419be350e681e9';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof StoryProductStageKanbanViewBase
     */ 
    protected viewName: string = 'StoryProductStageKanbanView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof StoryProductStageKanbanViewBase
     */
    public engine: KanBanViewEngine = new KanBanViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof StoryProductStageKanbanViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof StoryProductStageKanbanViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            kanban: this.$refs.kanban,
            opendata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.opendata(args, fullargs, params, $event, xData);
            },
            newdata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.newdata(args, fullargs, params, $event, xData);
            },
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryProductStageKanbanViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1_refresh')) {
            this.toolbar_deuiaction1_refresh_click(null, '', $event2);
        }
    }

    /**
     * kanban 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryProductStageKanbanViewBase
     */
    public kanban_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'selectionchange', $event);
    }

    /**
     * kanban 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryProductStageKanbanViewBase
     */
    public kanban_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'beforeload', $event);
    }

    /**
     * kanban 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryProductStageKanbanViewBase
     */
    public kanban_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'rowdblclick', $event);
    }

    /**
     * kanban 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryProductStageKanbanViewBase
     */
    public kanban_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'remove', $event);
    }

    /**
     * kanban 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryProductStageKanbanViewBase
     */
    public kanban_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('kanban', 'load', $event);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_refresh_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.kanban;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.Refresh(datas, contextJO,paramJO,  $event, xData,this,"Story");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof StoryProductStageKanbanView
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
        delete tempContext.story;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'story-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.story.views.editview.title'),
            placement: 'DRAWER_RIGHT',
        };
        openDrawer(view, data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof StoryProductStageKanbanView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.product && true){
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'story-main-view', 
            height: 850, 
            width: 1400,  
            title: this.$t('entities.story.views.mainview.title'),
            placement: 'DRAWER_TOP',
        };
        openDrawer(view, data);
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
     * @memberof StoryProductStageKanbanViewBase
     */
    public Refresh(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.refresh && xData.refresh instanceof Function) {
            xData.refresh(args);
        } else if (_this.refresh && _this.refresh instanceof Function) {
            _this.refresh(args);
        }
    }

    /**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof StoryProductStageKanbanView
     */
    protected viewUID: string = 'zentao-story-product-stage-kanban-view';
}