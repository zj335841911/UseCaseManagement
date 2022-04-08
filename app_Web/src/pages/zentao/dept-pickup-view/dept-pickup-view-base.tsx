import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { PickupViewBase } from '@/studio-core';
import DeptService from '@/service/dept/dept-service';
import DeptAuthService from '@/authservice/dept/dept-auth-service';
import PickupViewEngine from '@engine/view/pickup-view-engine';
import DeptUIService from '@/uiservice/dept/dept-ui-service';

/**
 * 部门数据选择视图视图基类
 *
 * @export
 * @class DeptPickupViewBase
 * @extends {PickupViewBase}
 */
export class DeptPickupViewBase extends PickupViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DeptPickupViewBase
     */
    protected appDeName: string = 'dept';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DeptPickupViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DeptPickupViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {DeptService}
     * @memberof DeptPickupViewBase
     */
    protected appEntityService: DeptService = new DeptService;

    /**
     * 实体权限服务对象
     *
     * @type DeptUIService
     * @memberof DeptPickupViewBase
     */
    public appUIService: DeptUIService = new DeptUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DeptPickupViewBase
     */
    protected model: any = {
        srfCaption: 'entities.dept.views.pickupview.caption',
        srfTitle: 'entities.dept.views.pickupview.title',
        srfSubTitle: 'entities.dept.views.pickupview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DeptPickupViewBase
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
     * @memberof DeptPickupViewBase
     */
	protected viewtag: string = '16b54862dad958907853dc7eb084a0c0';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DeptPickupViewBase
     */ 
    protected viewName:string = "DeptPickupView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DeptPickupViewBase
     */
    public engine: PickupViewEngine = new PickupViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DeptPickupViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DeptPickupViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'dept',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupViewBase
     */
    public pickupviewpanel_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupViewBase
     */
    public pickupviewpanel_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'activated', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptPickupViewBase
     */
    public pickupviewpanel_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }


}