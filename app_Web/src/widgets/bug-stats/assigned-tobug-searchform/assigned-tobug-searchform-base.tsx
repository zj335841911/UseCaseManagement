import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import BugStatsService from '@/service/bug-stats/bug-stats-service';
import AssignedTOBugService from './assigned-tobug-searchform-service';
import BugStatsUIService from '@/uiservice/bug-stats/bug-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {AssignedTOBugSearchFormBase}
 */
export class AssignedTOBugSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof AssignedTOBugSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {AssignedTOBugService}
     * @memberof AssignedTOBugSearchFormBase
     */
    public service: AssignedTOBugService = new AssignedTOBugService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugStatsService}
     * @memberof AssignedTOBugSearchFormBase
     */
    public appEntityService: BugStatsService = new BugStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssignedTOBugSearchFormBase
     */
    protected appDeName: string = 'bugstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof AssignedTOBugSearchFormBase
     */
    protected appDeLogicName: string = 'Bug统计';

    /**
     * 界面UI服务对象
     *
     * @type {BugStatsUIService}
     * @memberof AssignedTOBugBase
     */  
    public appUIService: BugStatsUIService = new BugStatsUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof AssignedTOBugSearchFormBase
     */
    public data: any = {
        n_product_eq: null,
        n_assignedto_eq: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof AssignedTOBugSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        n_product_eq: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'n_product_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_assignedto_eq: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'n_assignedto_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof AssignedTOBugBase
     */
    public createDefault(){                    
    }
}