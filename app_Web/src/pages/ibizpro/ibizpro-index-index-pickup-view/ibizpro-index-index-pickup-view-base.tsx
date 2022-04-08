import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { PickupViewBase } from '@/studio-core';
import IbizproIndexService from '@/service/ibizpro-index/ibizpro-index-service';
import IbizproIndexAuthService from '@/authservice/ibizpro-index/ibizpro-index-auth-service';
import PickupViewEngine from '@engine/view/pickup-view-engine';
import IbizproIndexUIService from '@/uiservice/ibizpro-index/ibizpro-index-ui-service';

/**
 * 索引检索数据选择视图视图基类
 *
 * @export
 * @class IbizproIndexIndexPickupViewBase
 * @extends {PickupViewBase}
 */
export class IbizproIndexIndexPickupViewBase extends PickupViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexIndexPickupViewBase
     */
    protected appDeName: string = 'ibizproindex';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexIndexPickupViewBase
     */
    protected appDeKey: string = 'indexid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexIndexPickupViewBase
     */
    protected appDeMajor: string = 'indexname';

    /**
     * 实体服务对象
     *
     * @type {IbizproIndexService}
     * @memberof IbizproIndexIndexPickupViewBase
     */
    protected appEntityService: IbizproIndexService = new IbizproIndexService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproIndexUIService
     * @memberof IbizproIndexIndexPickupViewBase
     */
    public appUIService: IbizproIndexUIService = new IbizproIndexUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproIndexIndexPickupViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproindex.views.indexpickupview.caption',
        srfTitle: 'entities.ibizproindex.views.indexpickupview.title',
        srfSubTitle: 'entities.ibizproindex.views.indexpickupview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproIndexIndexPickupViewBase
     */
    protected containerModel: any = {
        view_pickupviewpanel: {
            name: 'pickupviewpanel',
            type: 'PICKUPVIEWPANEL',
        },
        view_okbtn: {
            name: 'okbtn',
            type: 'button',
            text: '确定',
            disabled: true,
        },
        view_cancelbtn: {
            name: 'cancelbtn',
            type: 'button',
            text: '取消',
            disabled: false,
        },
        view_leftbtn: {
            name: 'leftbtn',
            type: 'button',
            text: '左移',
            disabled: true,
        },
        view_rightbtn: {
            name: 'rightbtn',
            type: 'button',
            text: '右移',
            disabled: true,},
        view_allleftbtn: {
            name: 'allleftbtn',
            type: 'button',
            text: '全部左移',
            disabled: true,
        },
        view_allrightbtn: {
            name: 'allrightbtn',
            type: 'button',
            text: '全部右移',
            disabled: true,
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexIndexPickupViewBase
     */
	protected viewtag: string = '6dec69ecabb41af1b4fffe82c077724a';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproIndexIndexPickupViewBase
     */ 
    protected viewName: string = 'IbizproIndexIndexPickupView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproIndexIndexPickupViewBase
     */
    public engine: PickupViewEngine = new PickupViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproIndexIndexPickupViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproIndexIndexPickupViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'ibizproindex',
            majorPSDEField: 'indexname',
            isLoadDefault: true,
        });
    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexIndexPickupViewBase
     */
    public pickupviewpanel_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexIndexPickupViewBase
     */
    public pickupviewpanel_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'activated', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproIndexIndexPickupViewBase
     */
    public pickupviewpanel_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }


}