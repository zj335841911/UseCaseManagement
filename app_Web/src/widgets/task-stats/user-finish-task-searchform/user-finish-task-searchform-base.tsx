import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import TaskStatsService from '@/service/task-stats/task-stats-service';
import UserFinishTaskService from './user-finish-task-searchform-service';
import TaskStatsUIService from '@/uiservice/task-stats/task-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {UserFinishTaskSearchFormBase}
 */
export class UserFinishTaskSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof UserFinishTaskSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {UserFinishTaskService}
     * @memberof UserFinishTaskSearchFormBase
     */
    public service: UserFinishTaskService = new UserFinishTaskService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskStatsService}
     * @memberof UserFinishTaskSearchFormBase
     */
    public appEntityService: TaskStatsService = new TaskStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserFinishTaskSearchFormBase
     */
    protected appDeName: string = 'taskstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof UserFinishTaskSearchFormBase
     */
    protected appDeLogicName: string = '任务统计';

    /**
     * 界面UI服务对象
     *
     * @type {TaskStatsUIService}
     * @memberof UserFinishTaskBase
     */  
    public appUIService: TaskStatsUIService = new TaskStatsUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof UserFinishTaskSearchFormBase
     */
    public data: any = {
        n_project_eq: null,
        n_finishedby_eq: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof UserFinishTaskSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        n_project_eq: new FormItemModel({ caption: '项目', detailType: 'FORMITEM', name: 'n_project_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_finishedby_eq: new FormItemModel({ caption: '完成者', detailType: 'FORMITEM', name: 'n_finishedby_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof UserFinishTaskBase
     */
    public createDefault(){                    
    }
}