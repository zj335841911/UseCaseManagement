import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { MPickupViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import MPickupViewEngine from '@engine/view/mpickup-view-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务数据多项选择视图（汇报）视图基类
 *
 * @export
 * @class TaskreportMPickupViewBase
 * @extends {MPickupViewBase}
 */
export class TaskreportMPickupViewBase extends MPickupViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskreportMPickupViewBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskreportMPickupViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskreportMPickupViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskreportMPickupViewBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskreportMPickupViewBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskreportMPickupViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.reportmpickupview.caption',
        srfTitle: 'entities.task.views.reportmpickupview.title',
        srfSubTitle: 'entities.task.views.reportmpickupview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskreportMPickupViewBase
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
     * @memberof TaskreportMPickupViewBase
     */
	protected viewtag: string = '9f39c37259c1dabb9f2e8769eea76642';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskreportMPickupViewBase
     */ 
    protected viewName: string = 'TaskreportMPickupView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskreportMPickupViewBase
     */
    public engine: MPickupViewEngine = new MPickupViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskreportMPickupViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskreportMPickupViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskreportMPickupViewBase
     */
    public pickupviewpanel_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskreportMPickupViewBase
     */
    public pickupviewpanel_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'activated', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskreportMPickupViewBase
     */
    public pickupviewpanel_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }



    /**
     * 添加左侧面板所有数据到右侧
     *
     * @memberof TaskreportMPickupView
     */
    public onCLickAllRight(): void {
        Object.values(this.containerModel).forEach((model: any) => {
            if (!Object.is(model.type, 'PICKUPVIEWPANEL')) {
                return;
            }
            if (model.datas.length > 0) {
                model.datas.forEach((data: any, index: any) => {
                    Object.assign(data, { srfmajortext: data['name'] });
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