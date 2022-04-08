import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 取消任务视图基类
 *
 * @export
 * @class TaskCancelTaskViewBase
 * @extends {OptionViewBase}
 */
export class TaskCancelTaskViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskCancelTaskViewBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskCancelTaskViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskCancelTaskViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TaskCancelTaskViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskCancelTaskViewBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskCancelTaskViewBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskCancelTaskViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'task',
        },
        'SRFPARENTKEY': {
            isRawValue: false,
            value: 'task',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof TaskCancelTaskViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskCancelTaskViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.canceltaskview.caption',
        srfTitle: 'entities.task.views.canceltaskview.title',
        srfSubTitle: 'entities.task.views.canceltaskview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskCancelTaskViewBase
     */
    protected containerModel: any = {
        view_form: {
            name: 'form',
            type: 'FORM',
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
     * @memberof TaskCancelTaskViewBase
     */
	protected viewtag: string = '6e1e2145a5e4622fb1936fe37f6d07e7';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskCancelTaskViewBase
     */ 
    protected viewName: string = 'TaskCancelTaskView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskCancelTaskViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskCancelTaskViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskCancelTaskViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskCancelTaskViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskCancelTaskViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskCancelTaskViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}