import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import ProjectStatsService from '@/service/project-stats/project-stats-service';
import ProjectTaskTypeCountService from './project-task-type-count-searchform-service';
import ProjectStatsUIService from '@/uiservice/project-stats/project-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {ProjectTaskTypeCountSearchFormBase}
 */
export class ProjectTaskTypeCountSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProjectTaskTypeCountSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {ProjectTaskTypeCountService}
     * @memberof ProjectTaskTypeCountSearchFormBase
     */
    public service: ProjectTaskTypeCountService = new ProjectTaskTypeCountService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectStatsService}
     * @memberof ProjectTaskTypeCountSearchFormBase
     */
    public appEntityService: ProjectStatsService = new ProjectStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTaskTypeCountSearchFormBase
     */
    protected appDeName: string = 'projectstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTaskTypeCountSearchFormBase
     */
    protected appDeLogicName: string = '项目统计';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectStatsUIService}
     * @memberof ProjectTaskTypeCountBase
     */  
    public appUIService: ProjectStatsUIService = new ProjectStatsUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ProjectTaskTypeCountSearchFormBase
     */
    public data: any = {
        n_status_eq: null,
        n_begin_gtandeq: null,
        n_end_ltandeq: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ProjectTaskTypeCountSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        n_status_eq: new FormItemModel({ caption: '项目状态', detailType: 'FORMITEM', name: 'n_status_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_begin_gtandeq: new FormItemModel({ caption: '项目起始时间', detailType: 'FORMITEM', name: 'n_begin_gtandeq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_end_ltandeq: new FormItemModel({ caption: '至', detailType: 'FORMITEM', name: 'n_end_ltandeq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof ProjectTaskTypeCountBase
     */
    public createDefault(){                    
    }
}