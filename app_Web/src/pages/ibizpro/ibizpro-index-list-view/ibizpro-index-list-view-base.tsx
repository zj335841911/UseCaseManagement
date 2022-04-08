
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { ListViewBase } from '@/studio-core';
import IbizproIndexService from '@/service/ibizpro-index/ibizpro-index-service';
import IbizproIndexAuthService from '@/authservice/ibizpro-index/ibizpro-index-auth-service';
import ListViewEngine from '@engine/view/list-view-engine';
import IbizproIndexUIService from '@/uiservice/ibizpro-index/ibizpro-index-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 索引检索列表视图视图基类
 *
 * @export
 * @class IbizproIndexListViewBase
 * @extends {ListViewBase}
 */
export class IbizproIndexListViewBase extends ListViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexListViewBase
     */
    protected appDeName: string = 'ibizproindex';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexListViewBase
     */
    protected appDeKey: string = 'indexid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexListViewBase
     */
    protected appDeMajor: string = 'indexname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexListViewBase
     */ 
    protected dataControl: string = 'list';

    /**
     * 实体服务对象
     *
     * @type {IbizproIndexService}
     * @memberof IbizproIndexListViewBase
     */
    protected appEntityService: IbizproIndexService = new IbizproIndexService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproIndexUIService
     * @memberof IbizproIndexListViewBase
     */
    public appUIService: IbizproIndexUIService = new IbizproIndexUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproIndexListViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproindex.views.listview.caption',
        srfTitle: 'entities.ibizproindex.views.listview.title',
        srfSubTitle: 'entities.ibizproindex.views.listview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproIndexListViewBase
     */
    protected containerModel: any = {
        view_list: {
            name: 'list',
            type: 'LIST',
        },
        view_searchform: {
            name: 'searchform',
            type: 'SEARCHFORM',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexListViewBase
     */
	protected viewtag: string = '50f82495ceeaf8439cd7626c264176a4';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexListViewBase
     */ 
    protected viewName: string = 'IbizproIndexListView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproIndexListViewBase
     */
    public engine: ListViewEngine = new ListViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproIndexListViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproIndexListViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            list: this.$refs.list,
            opendata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.opendata(args, fullargs, params, $event, xData);
            },
            newdata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.newdata(args, fullargs, params, $event, xData);
            },
            searchform: this.$refs.searchform,
            keyPSDEField: 'ibizproindex',
            majorPSDEField: 'indexname',
            isLoadDefault: true,
        });
    }

    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexListViewBase
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexListViewBase
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexListViewBase
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexListViewBase
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexListViewBase
     */
    public list_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'load', $event);
    }

    /**
     * searchform 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexListViewBase
     */
    public searchform_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'save', $event);
    }

    /**
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexListViewBase
     */
    public searchform_search($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexListViewBase
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
     * @memberof IbizproIndexListView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        let wizardAppView:any = {viewname:'ibizpro-index-index-pickup-view',height: 0,width: 0,title: '索引检索数据选择视图'};
        let container: Subject<any> = this.$appmodal.openModal(wizardAppView, JSON.parse(JSON.stringify(this.context)), args[0]);
        container.subscribe((result: any) => {
            if (!result || !Object.is(result.ret, 'OK')) {
                return;
            }
            if(result && result.datas && result.datas.length >0 ){
                let targetkey:string = result.datas[0].srfkey;
                let newDataAppViews:any ={
                story:[{ pathName: 'stories', parameterName: 'story' },{ pathName: 'editview', parameterName: 'editview' }],
                product:[{ pathName: 'products', parameterName: 'product' },{ pathName: 'editview', parameterName: 'editview' }],
                project:[{ pathName: 'projects', parameterName: 'project' },{ pathName: 'editview', parameterName: 'editview' }],
                bug:[{ pathName: 'bugs', parameterName: 'bug' },{ pathName: 'editview', parameterName: 'editview' }],
                case:[{ pathName: 'cases', parameterName: 'case' },{ pathName: 'editview', parameterName: 'editview' }]
                };
                const data: any = {};
                if(args[0].srfsourcekey) data.srfsourcekey = args[0].srfsourcekey;
                let tempContext = JSON.parse(JSON.stringify(this.context));
                const openIndexViewTab = (data: any) => {
                    const _data: any = { w: (new Date().getTime()) };
                    Object.assign(_data, data);
                    const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, [], newDataAppViews[targetkey], args, _data);
                    this.$router.push(routePath);
                }
                openIndexViewTab(data);
            }
        })
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IbizproIndexListView
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
            { pathName: 'ibizproindices', parameterName: 'ibizproindex' },
            { pathName: 'redirectview', parameterName: 'redirectview' },
        ];
        this.appUIService.getService('ibizproindex').then((service) => {
            if(!service) {
                this.$Notice.error({desc: '重定向服务不存在！'})
                return;
            }
            const srfkey: any = tempContext.ibizproindex;
            service.getRDAppView(srfkey,false).then((res:any) =>{
                if(res){
                    this.$openViewService.openView(res, tempContext, { ...this.viewparams, srfkey });
                }else{
                    console.error("未查找到重定向视图")
                }
            })
        })
    }


}