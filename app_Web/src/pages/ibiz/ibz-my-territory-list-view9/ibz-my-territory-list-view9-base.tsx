
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { ListView9Base } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import IbzMyTerritoryAuthService from '@/authservice/ibz-my-territory/ibz-my-territory-auth-service';
import ListView9Engine from '@engine/view/list-view9-engine';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 我的工作视图基类
 *
 * @export
 * @class IbzMyTerritoryListView9Base
 * @extends {ListView9Base}
 */
export class IbzMyTerritoryListView9Base extends ListView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryListView9Base
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryListView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryListView9Base
     */
    protected appDeMajor: string = 'realname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryListView9Base
     */ 
    protected dataControl: string = 'list';

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof IbzMyTerritoryListView9Base
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService;

    /**
     * 实体权限服务对象
     *
     * @type IbzMyTerritoryUIService
     * @memberof IbzMyTerritoryListView9Base
     */
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzMyTerritoryListView9Base
	 */
    protected customViewParams: any = {
        'n_account_eq': {
            isRawValue: false,
            value: 'srfloginname',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryListView9Base
     */
    protected model: any = {
        srfCaption: 'entities.ibzmyterritory.views.listview9.caption',
        srfTitle: 'entities.ibzmyterritory.views.listview9.title',
        srfSubTitle: 'entities.ibzmyterritory.views.listview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryListView9Base
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
     * @memberof IbzMyTerritoryListView9Base
     */
	protected viewtag: string = 'ecc0369834ef12678e1c34ca782aad23';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryListView9Base
     */ 
    protected viewName: string = 'IbzMyTerritoryListView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzMyTerritoryListView9Base
     */
    public engine: ListView9Engine = new ListView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzMyTerritoryListView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzMyTerritoryListView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            list: this.$refs.list,
            keyPSDEField: 'ibzmyterritory',
            majorPSDEField: 'realname',
            isLoadDefault: true,
        });
    }

    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryListView9Base
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryListView9Base
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryListView9Base
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryListView9Base
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMyTerritoryListView9Base
     */
    public list_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'load', $event);
    }

}