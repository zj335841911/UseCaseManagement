
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { ListView9Base } from '@/studio-core';
import ActionService from '@/service/action/action-service';
import ActionAuthService from '@/authservice/action/action-auth-service';
import ListView9Engine from '@engine/view/list-view9-engine';
import ActionUIService from '@/uiservice/action/action-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 产品动态视图基类
 *
 * @export
 * @class ActionProductTrendsListView9Base
 * @extends {ListView9Base}
 */
export class ActionProductTrendsListView9Base extends ListView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ActionProductTrendsListView9Base
     */
    protected appDeName: string = 'action';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ActionProductTrendsListView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ActionProductTrendsListView9Base
     */
    protected appDeMajor: string = 'comment';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ActionProductTrendsListView9Base
     */ 
    protected dataControl: string = 'list';

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof ActionProductTrendsListView9Base
     */
    protected appEntityService: ActionService = new ActionService;

    /**
     * 实体权限服务对象
     *
     * @type ActionUIService
     * @memberof ActionProductTrendsListView9Base
     */
    public appUIService: ActionUIService = new ActionUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ActionProductTrendsListView9Base
     */
    protected model: any = {
        srfCaption: 'entities.action.views.producttrendslistview9.caption',
        srfTitle: 'entities.action.views.producttrendslistview9.title',
        srfSubTitle: 'entities.action.views.producttrendslistview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ActionProductTrendsListView9Base
     */
    protected containerModel: any = {
        view_list: {
            name: 'list',
            type: 'LIST',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ActionProductTrendsListView9Base
     */
	protected viewtag: string = '97af408e6a6cb088c824cacd1807f353';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ActionProductTrendsListView9Base
     */ 
    protected viewName: string = 'ActionProductTrendsListView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ActionProductTrendsListView9Base
     */
    public engine: ListView9Engine = new ListView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ActionProductTrendsListView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ActionProductTrendsListView9Base
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
            keyPSDEField: 'action',
            majorPSDEField: 'comment',
            isLoadDefault: true,
        });
    }

    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListView9Base
     */
    public list_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ActionProductTrendsListView9
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
        delete tempContext.action;
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'actions', parameterName: 'action' },
        ];
        const _this: any = this;
        const openPopupModal = (view: any, data: any) => {
            let container: Subject<any> = this.$appmodal.openModal(view, tempContext, data);
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
            viewname: 'action-edit-view', 
            height: 0, 
            width: 800,  
            title: this.$t('entities.action.views.editview.title'),
        };
        openPopupModal(view, data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ActionProductTrendsListView9
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
            { pathName: 'actions', parameterName: 'action' },
        ];
        const _this: any = this;
        const openPopupModal = (view: any, data: any) => {
            let container: Subject<any> = this.$appmodal.openModal(view, tempContext, data);
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
            viewname: 'action-edit-view', 
            height: 0, 
            width: 800,  
            title: this.$t('entities.action.views.editview.title'),
        };
        openPopupModal(view, data);
    }


}