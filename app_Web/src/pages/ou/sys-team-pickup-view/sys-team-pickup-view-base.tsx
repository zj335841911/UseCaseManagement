import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { PickupViewBase } from '@/studio-core';
import SysTeamService from '@/service/sys-team/sys-team-service';
import SysTeamAuthService from '@/authservice/sys-team/sys-team-auth-service';
import PickupViewEngine from '@engine/view/pickup-view-engine';
import SysTeamUIService from '@/uiservice/sys-team/sys-team-ui-service';

/**
 * 组数据选择视图视图基类
 *
 * @export
 * @class SysTeamPickupViewBase
 * @extends {PickupViewBase}
 */
export class SysTeamPickupViewBase extends PickupViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupViewBase
     */
    protected appDeName: string = 'systeam';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupViewBase
     */
    protected appDeKey: string = 'teamid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupViewBase
     */
    protected appDeMajor: string = 'teamname';

    /**
     * 实体服务对象
     *
     * @type {SysTeamService}
     * @memberof SysTeamPickupViewBase
     */
    protected appEntityService: SysTeamService = new SysTeamService;

    /**
     * 实体权限服务对象
     *
     * @type SysTeamUIService
     * @memberof SysTeamPickupViewBase
     */
    public appUIService: SysTeamUIService = new SysTeamUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysTeamPickupViewBase
     */
    protected model: any = {
        srfCaption: 'entities.systeam.views.pickupview.caption',
        srfTitle: 'entities.systeam.views.pickupview.title',
        srfSubTitle: 'entities.systeam.views.pickupview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysTeamPickupViewBase
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
     * @memberof SysTeamPickupViewBase
     */
	protected viewtag: string = '5f7840c73c7dd18acccfaa5bb67468aa';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysTeamPickupViewBase
     */ 
    protected viewName: string = 'SysTeamPickupView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysTeamPickupViewBase
     */
    public engine: PickupViewEngine = new PickupViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysTeamPickupViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysTeamPickupViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'systeam',
            majorPSDEField: 'teamname',
            isLoadDefault: true,
        });
    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupViewBase
     */
    public pickupviewpanel_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupViewBase
     */
    public pickupviewpanel_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'activated', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysTeamPickupViewBase
     */
    public pickupviewpanel_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }


}