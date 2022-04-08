import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { MPickupViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugAuthService from '@/authservice/bug/bug-auth-service';
import MPickupViewEngine from '@engine/view/mpickup-view-engine';
import BugUIService from '@/uiservice/bug/bug-ui-service';

/**
 * 关联Bug视图基类
 *
 * @export
 * @class BugMPickupView5Base
 * @extends {MPickupViewBase}
 */
export class BugMPickupView5Base extends MPickupViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugMPickupView5Base
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugMPickupView5Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugMPickupView5Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugMPickupView5Base
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugMPickupView5Base
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugMPickupView5Base
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.mpickupview5.caption',
        srfTitle: 'entities.bug.views.mpickupview5.title',
        srfSubTitle: 'entities.bug.views.mpickupview5.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugMPickupView5Base
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
     * @memberof BugMPickupView5Base
     */
	protected viewtag: string = '061236c487f882bb6b17d4e6e44fcc3f';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BugMPickupView5Base
     */ 
    protected viewName: string = 'BugMPickupView5';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugMPickupView5Base
     */
    public engine: MPickupViewEngine = new MPickupViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BugMPickupView5Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugMPickupView5Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMPickupView5Base
     */
    public pickupviewpanel_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMPickupView5Base
     */
    public pickupviewpanel_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'activated', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugMPickupView5Base
     */
    public pickupviewpanel_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }



    /**
     * 添加左侧面板所有数据到右侧
     *
     * @memberof BugMPickupView5
     */
    public onCLickAllRight(): void {
        Object.values(this.containerModel).forEach((model: any) => {
            if (!Object.is(model.type, 'PICKUPVIEWPANEL')) {
                return;
            }
            if (model.datas.length > 0) {
                model.datas.forEach((data: any, index: any) => {
                    Object.assign(data, { srfmajortext: data['title'] });
                })
            }
            model.datas.forEach((item: any) => {
                const index: number = this.viewSelections.findIndex((selection: any) => Object.is(item.srfkey, selection.srfkey));
                if (index === -1) {
                    item._select = false;
                    this.viewSelections.push(item);
                }
            });
        });
        this.selectedData = JSON.stringify(this.viewSelections);
    }


}