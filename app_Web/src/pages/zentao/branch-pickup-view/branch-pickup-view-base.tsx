import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { PickupViewBase } from '@/studio-core';
import BranchService from '@/service/branch/branch-service';
import BranchAuthService from '@/authservice/branch/branch-auth-service';
import PickupViewEngine from '@engine/view/pickup-view-engine';
import BranchUIService from '@/uiservice/branch/branch-ui-service';

/**
 * 平台数据选择视图视图基类
 *
 * @export
 * @class BranchPickupViewBase
 * @extends {PickupViewBase}
 */
export class BranchPickupViewBase extends PickupViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupViewBase
     */
    protected appDeName: string = 'branch';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {BranchService}
     * @memberof BranchPickupViewBase
     */
    protected appEntityService: BranchService = new BranchService;

    /**
     * 实体权限服务对象
     *
     * @type BranchUIService
     * @memberof BranchPickupViewBase
     */
    public appUIService: BranchUIService = new BranchUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BranchPickupViewBase
     */
    protected model: any = {
        srfCaption: 'entities.branch.views.pickupview.caption',
        srfTitle: 'entities.branch.views.pickupview.title',
        srfSubTitle: 'entities.branch.views.pickupview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BranchPickupViewBase
     */
    protected containerModel: any = {
        view_pickupviewpanel: { name: 'pickupviewpanel', type: 'PICKUPVIEWPANEL' },
        view_okbtn: { name: 'okbtn', type: 'button', text: '确定', disabled: true },
        view_cancelbtn: { name: 'cancelbtn', type: 'button', text: '取消', disabled: false },
        view_leftbtn: { name: 'leftbtn', type: 'button', text: '左移', disabled: true },
        view_rightbtn: { name: 'rightbtn', type: 'button', text: '右移', disabled: true },
        view_allleftbtn: { name: 'allleftbtn', type: 'button', text: '全部左移', disabled: true },
        view_allrightbtn: { name: 'allrightbtn', type: 'button', text: '全部右移', disabled: true },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupViewBase
     */
	protected viewtag: string = 'd0851a0acfe0e92a6a5ba34b1552bc66';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BranchPickupViewBase
     */ 
    protected viewName:string = "BranchPickupView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BranchPickupViewBase
     */
    public engine: PickupViewEngine = new PickupViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BranchPickupViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BranchPickupViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'branch',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupViewBase
     */
    public pickupviewpanel_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupViewBase
     */
    public pickupviewpanel_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'activated', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPickupViewBase
     */
    public pickupviewpanel_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }


}