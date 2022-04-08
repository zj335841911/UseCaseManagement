import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { GanttViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务甘特视图视图基类
 *
 * @export
 * @class TaskTaskTypeGanttViewBase
 * @extends {GanttViewBase}
 */
export class TaskTaskTypeGanttViewBase extends GanttViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTaskTypeGanttViewBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskTaskTypeGanttViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskTaskTypeGanttViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTaskTypeGanttViewBase
     */ 
    protected dataControl: string = 'gantt';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskTaskTypeGanttViewBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskTaskTypeGanttViewBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TaskTaskTypeGanttViewBase
	 */
    protected customViewParams: any = {
        'project': {
            isRawValue: false,
            value: 'project',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskTaskTypeGanttViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.tasktypeganttview.caption',
        srfTitle: 'entities.task.views.tasktypeganttview.title',
        srfSubTitle: 'entities.task.views.tasktypeganttview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskTaskTypeGanttViewBase
     */
    protected containerModel: any = {
        view_gantt: {
            name: 'gantt',
            type: 'GANTT',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof TaskTaskTypeGanttViewBase
     */
	protected viewtag: string = '5ef23f01b2cffa48351b3272dfeeaf14';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTaskTypeGanttViewBase
     */ 
    protected viewName: string = 'TaskTaskTypeGanttView';



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskTaskTypeGanttViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskTaskTypeGanttViewBase
     */
    public engineInit(): void {
    }


}