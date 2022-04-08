import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import ProjectModuleService from '@/service/project-module/project-module-service';
import ProjectModuleAuthService from '@/authservice/project-module/project-module-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import ProjectModuleUIService from '@/uiservice/project-module/project-module-ui-service';

/**
 * 任务模块树导航视图视图基类
 *
 * @export
 * @class ProjectModuleTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class ProjectModuleTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleTreeExpViewBase
     */
    protected appDeName: string = 'projectmodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleTreeExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProjectModuleService}
     * @memberof ProjectModuleTreeExpViewBase
     */
    protected appEntityService: ProjectModuleService = new ProjectModuleService;

    /**
     * 实体权限服务对象
     *
     * @type ProjectModuleUIService
     * @memberof ProjectModuleTreeExpViewBase
     */
    public appUIService: ProjectModuleUIService = new ProjectModuleUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectModuleTreeExpViewBase
	 */
    protected customViewNavContexts: any = {
        'MODULETYPE': {
            isRawValue: true,
            value: 'task',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof ProjectModuleTreeExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectModuleTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.projectmodule.views.treeexpview.caption',
        srfTitle: 'entities.projectmodule.views.treeexpview.title',
        srfSubTitle: 'entities.projectmodule.views.treeexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectModuleTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: {
            name: 'treeexpbar',
            type: 'TREEEXPBAR',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProjectModuleTreeExpView
     */
    public treeexpviewtreeexpbar_toolbarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: 'entities.projectmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction1.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.projectmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction1.tip', iconcls: 'fa fa-wrench', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'Fix', target: 'NONE', class: '' } },

        deuiaction2: { name: 'deuiaction2', caption: 'entities.projectmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction2.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.projectmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction2.tip', iconcls: 'fa fa-refresh', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'RefreshAll', target: '', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleTreeExpViewBase
     */
	protected viewtag: string = '568ff596b43788b813249f6aa22443c0';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleTreeExpViewBase
     */ 
    protected viewName: string = 'ProjectModuleTreeExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectModuleTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProjectModuleTreeExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectModuleTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'projectmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleTreeExpViewBase
     */
    public treeexpbar_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProjectModuleTreeExpView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProjectModuleTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof ProjectModuleTreeExpView
     */
    public viewUID: string = 'ibiz-project-module-tree-exp-view';


}