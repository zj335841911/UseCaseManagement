import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import CaseStatsService from '@/service/case-stats/case-stats-service';
import TestCaseStatsService from './test-case-stats-searchform-service';
import CaseStatsUIService from '@/uiservice/case-stats/case-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {TestCaseStatsSearchFormBase}
 */
export class TestCaseStatsSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestCaseStatsSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {TestCaseStatsService}
     * @memberof TestCaseStatsSearchFormBase
     */
    public service: TestCaseStatsService = new TestCaseStatsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseStatsService}
     * @memberof TestCaseStatsSearchFormBase
     */
    public appEntityService: CaseStatsService = new CaseStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestCaseStatsSearchFormBase
     */
    protected appDeName: string = 'casestats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestCaseStatsSearchFormBase
     */
    protected appDeLogicName: string = '测试用例统计';

    /**
     * 界面UI服务对象
     *
     * @type {CaseStatsUIService}
     * @memberof TestCaseStatsBase
     */  
    public appUIService: CaseStatsUIService = new CaseStatsUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof TestCaseStatsSearchFormBase
     */
    public data: any = {
        product: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof TestCaseStatsSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        product: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof TestCaseStatsBase
     */
    public createDefault(){                    
    }
}