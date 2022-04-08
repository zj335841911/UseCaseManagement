import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import TaskStatsService from '@/service/task-stats/task-stats-service';
import TaskFinshSearchGirdService from './task-finsh-search-gird-searchform-service';
import TaskStatsUIService from '@/uiservice/task-stats/task-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {TaskFinshSearchGirdSearchFormBase}
 */
export class TaskFinshSearchGirdSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TaskFinshSearchGirdSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {TaskFinshSearchGirdService}
     * @memberof TaskFinshSearchGirdSearchFormBase
     */
    public service: TaskFinshSearchGirdService = new TaskFinshSearchGirdService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskStatsService}
     * @memberof TaskFinshSearchGirdSearchFormBase
     */
    public appEntityService: TaskStatsService = new TaskStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskFinshSearchGirdSearchFormBase
     */
    protected appDeName: string = 'taskstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TaskFinshSearchGirdSearchFormBase
     */
    protected appDeLogicName: string = '任务统计';

    /**
     * 界面UI服务对象
     *
     * @type {TaskStatsUIService}
     * @memberof TaskFinshSearchGirdBase
     */  
    public appUIService: TaskStatsUIService = new TaskStatsUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof TaskFinshSearchGirdSearchFormBase
     */
    public data: any = {
        n_dept_eq: null,
        n_begin_gtandeq: null,
        n_end_ltandeq: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof TaskFinshSearchGirdSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        n_dept_eq: new FormItemModel({ caption: '部门', detailType: 'FORMITEM', name: 'n_dept_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_begin_gtandeq: new FormItemModel({ caption: '完成时间', detailType: 'FORMITEM', name: 'n_begin_gtandeq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_end_ltandeq: new FormItemModel({ caption: '至', detailType: 'FORMITEM', name: 'n_end_ltandeq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof TaskFinshSearchGirdBase
     */
    public createDefault(){                    
        if (this.data.hasOwnProperty('n_dept_eq')) {
            this.data['n_dept_eq'] = this.context['srforgsectorid'];
        }
    }
}