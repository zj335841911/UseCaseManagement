import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import BugStatsService from '@/service/bug-stats/bug-stats-service';
import DefaultService from './default-searchform-service';
import BugStatsUIService from '@/uiservice/bug-stats/bug-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {DefaultSearchFormBase}
 */
export class DefaultSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {DefaultService}
     * @memberof DefaultSearchFormBase
     */
    public service: DefaultService = new DefaultService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugStatsService}
     * @memberof DefaultSearchFormBase
     */
    public appEntityService: BugStatsService = new BugStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected appDeName: string = 'bugstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected appDeLogicName: string = 'Bug统计';

    /**
     * 界面UI服务对象
     *
     * @type {BugStatsUIService}
     * @memberof DefaultBase
     */  
    public appUIService: BugStatsUIService = new BugStatsUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DefaultSearchFormBase
     */
    public data: any = {
        openeddatelt: null,
        openeddategt: null,
        producteq: null,
        projecteq: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DefaultSearchFormBase
     */
    public detailsModel: any = {
        grouppanel1: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.bugstats.default_searchform', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.bugstats.default_searchform', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '常规条件', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        openeddatelt: new FormItemModel({ caption: 'Bug创建时间', detailType: 'FORMITEM', name: 'openeddatelt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openeddategt: new FormItemModel({ caption: '至', detailType: 'FORMITEM', name: 'openeddategt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        producteq: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'producteq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        projecteq: new FormItemModel({ caption: '项目', detailType: 'FORMITEM', name: 'projecteq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof DefaultBase
     */
    public createDefault(){                    
    }
}