import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * 任务分页导航视图（更多）视图基类
 *
 * @export
 * @class TaskMoreTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class TaskMoreTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskMoreTabExpViewBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TaskMoreTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TaskMoreTabExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskMoreTabExpViewBase
     */
    protected appEntityService: TaskService = new TaskService;

    /**
     * 实体权限服务对象
     *
     * @type TaskUIService
     * @memberof TaskMoreTabExpViewBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof TaskMoreTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TaskMoreTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.task.views.moretabexpview.caption',
        srfTitle: 'entities.task.views.moretabexpview.title',
        srfSubTitle: 'entities.task.views.moretabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TaskMoreTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: {
            name: 'tabexppanel',
            type: 'TABEXPPANEL',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof TaskMoreTabExpViewBase
     */
	protected viewtag: string = 'c85d9b5e8fda56f19059573f794d31c6';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TaskMoreTabExpViewBase
     */ 
    protected viewName: string = 'TaskMoreTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TaskMoreTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskMoreTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TaskMoreTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}