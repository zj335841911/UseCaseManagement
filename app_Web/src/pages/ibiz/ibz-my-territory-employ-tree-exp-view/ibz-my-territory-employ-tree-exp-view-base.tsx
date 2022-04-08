import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import IbzMyTerritoryAuthService from '@/authservice/ibz-my-territory/ibz-my-territory-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';

/**
 * 我的地盘树导航视图（员工负载计）视图基类
 *
 * @export
 * @class IbzMyTerritoryEmployTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class IbzMyTerritoryEmployTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    protected appDeMajor: string = 'realname';

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService;

    /**
     * 实体权限服务对象
     *
     * @type IbzMyTerritoryUIService
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzmyterritory.views.employtreeexpview.caption',
        srfTitle: 'entities.ibzmyterritory.views.employtreeexpview.title',
        srfSubTitle: 'entities.ibzmyterritory.views.employtreeexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: {
            name: 'treeexpbar',
            type: 'TREEEXPBAR',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
	protected viewtag: string = 'f7c85815755a8e1ab174b1214a0ea7cf';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */ 
    protected viewName: string = 'IbzMyTerritoryEmployTreeExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'ibzmyterritory',
            majorPSDEField: 'realname',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryEmployTreeExpViewBase
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
     * @memberof IbzMyTerritoryEmployTreeExpView
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
     * @memberof IbzMyTerritoryEmployTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof IbzMyTerritoryEmployTreeExpView
     */
    public viewUID: string = 'ibiz-ibz-my-territory-employ-tree-exp-view';


}