import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import ProjectStatsService from '@/service/project-stats/project-stats-service';
import ProjectStatusService from './project-status-searchform-service';
import ProjectStatsUIService from '@/uiservice/project-stats/project-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {ProjectStatusSearchFormBase}
 */
export class ProjectStatusSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatusSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {ProjectStatusService}
     * @memberof ProjectStatusSearchFormBase
     */
    public service: ProjectStatusService = new ProjectStatusService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectStatsService}
     * @memberof ProjectStatusSearchFormBase
     */
    public appEntityService: ProjectStatsService = new ProjectStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatusSearchFormBase
     */
    protected appDeName: string = 'projectstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatusSearchFormBase
     */
    protected appDeLogicName: string = '项目统计';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectStatsUIService}
     * @memberof ProjectStatusBase
     */  
    public appUIService: ProjectStatsUIService = new ProjectStatsUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ProjectStatusSearchFormBase
     */
    public data: any = {
        n_status_eq: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ProjectStatusSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        n_status_eq: new FormItemModel({ caption: '项目状态', detailType: 'FORMITEM', name: 'n_status_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof ProjectStatusBase
     */
    public createDefault(){                    
    }
}