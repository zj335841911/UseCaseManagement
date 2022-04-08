import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import BugStatsService from '@/service/bug-stats/bug-stats-service';
import BugResolvedGirdService from './bug-resolved-gird-searchform-service';
import BugStatsUIService from '@/uiservice/bug-stats/bug-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {BugResolvedGirdSearchFormBase}
 */
export class BugResolvedGirdSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof BugResolvedGirdSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {BugResolvedGirdService}
     * @memberof BugResolvedGirdSearchFormBase
     */
    public service: BugResolvedGirdService = new BugResolvedGirdService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugStatsService}
     * @memberof BugResolvedGirdSearchFormBase
     */
    public appEntityService: BugStatsService = new BugStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugResolvedGirdSearchFormBase
     */
    protected appDeName: string = 'bugstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof BugResolvedGirdSearchFormBase
     */
    protected appDeLogicName: string = 'Bug统计';

    /**
     * 界面UI服务对象
     *
     * @type {BugStatsUIService}
     * @memberof BugResolvedGirdBase
     */  
    public appUIService: BugStatsUIService = new BugStatsUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof BugResolvedGirdSearchFormBase
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
     * @memberof BugResolvedGirdSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        n_dept_eq: new FormItemModel({ caption: '部门', detailType: 'FORMITEM', name: 'n_dept_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_begin_gtandeq: new FormItemModel({ caption: 'bug解决日期', detailType: 'FORMITEM', name: 'n_begin_gtandeq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_end_ltandeq: new FormItemModel({ caption: '至', detailType: 'FORMITEM', name: 'n_end_ltandeq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof BugResolvedGirdBase
     */
    public createDefault(){                    
        if (this.data.hasOwnProperty('n_dept_eq')) {
            this.data['n_dept_eq'] = this.context['srforgsectorid'];
        }
    }
}