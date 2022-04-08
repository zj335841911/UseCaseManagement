import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibAuthService from '@/authservice/doc-lib/doc-lib-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * 文档库分页导航视图（文档）视图基类
 *
 * @export
 * @class DocLibLibTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class DocLibLibTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibLibTabExpViewBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocLibLibTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocLibLibTabExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibLibTabExpViewBase
     */
    protected appEntityService: DocLibService = new DocLibService;

    /**
     * 实体权限服务对象
     *
     * @type DocLibUIService
     * @memberof DocLibLibTabExpViewBase
     */
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof DocLibLibTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocLibLibTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doclib.views.libtabexpview.caption',
        srfTitle: 'entities.doclib.views.libtabexpview.title',
        srfSubTitle: 'entities.doclib.views.libtabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocLibLibTabExpViewBase
     */
    protected containerModel: any = {
        view_toolbar: {
            name: 'toolbar',
            type: 'TOOLBAR',
        },
        view_tabexppanel: {
            name: 'tabexppanel',
            type: 'TABEXPPANEL',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof DocLibLibTabExpView
     */
    public toolBarModels: any = {
        items1: { name: 'items1', caption: '快速访问', disabled: false, type: 'ITEMS', visible: true, dataaccaction: '',
    model: {
        deuiaction1: { name: 'deuiaction1', caption: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction1.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction1.tip', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'RecentUpdateQuickAccess', target: 'NONE', class: '' } },

        deuiaction2: { name: 'deuiaction2', caption: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction2.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction2.tip', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'MyDocQuickAccess', target: 'NONE', class: '' } },

        deuiaction3: { name: 'deuiaction3', caption: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction3.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction3.tip', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'MyFavouriteQuickAccess', target: 'NONE', class: '' } },

    }
}, 
        deuiaction4: { name: 'deuiaction4', caption: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction4.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction4.tip', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'Create', target: 'NONE', class: '' } },

        deuiaction6: { name: 'deuiaction6', caption: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction6.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.doclib.libtabexpviewtoolbar_toolbar.deuiaction6.tip', iconcls: 'fa fa-plus', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'CreateFile', target: 'NONE', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof DocLibLibTabExpViewBase
     */
	protected viewtag: string = '7cfc48856417e4a8740c3d82334f88c9';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibLibTabExpViewBase
     */ 
    protected viewName: string = 'DocLibLibTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocLibLibTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocLibLibTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocLibLibTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'doclib',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibLibTabExpViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.toolbar_deuiaction1_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.toolbar_deuiaction2_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.toolbar_deuiaction3_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.toolbar_deuiaction4_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction6')) {
            this.toolbar_deuiaction6_click(null, '', $event2);
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
    public toolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_RecentUpdateQuickAccess(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_MyDocQuickAccess(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_MyFavouriteQuickAccess(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_Create(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction6_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_CreateFile(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }


}