import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import CompanyStatsService from '@/service/company-stats/company-stats-service';
import CompanyDynamicStaticService from './company-dynamic-static-searchform-service';
import CompanyStatsUIService from '@/uiservice/company-stats/company-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {CompanyDynamicStaticSearchFormBase}
 */
export class CompanyDynamicStaticSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CompanyDynamicStaticSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {CompanyDynamicStaticService}
     * @memberof CompanyDynamicStaticSearchFormBase
     */
    public service: CompanyDynamicStaticService = new CompanyDynamicStaticService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CompanyStatsService}
     * @memberof CompanyDynamicStaticSearchFormBase
     */
    public appEntityService: CompanyStatsService = new CompanyStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CompanyDynamicStaticSearchFormBase
     */
    protected appDeName: string = 'companystats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CompanyDynamicStaticSearchFormBase
     */
    protected appDeLogicName: string = '公司动态汇总';

    /**
     * 界面UI服务对象
     *
     * @type {CompanyStatsUIService}
     * @memberof CompanyDynamicStaticBase
     */  
    public appUIService: CompanyStatsUIService = new CompanyStatsUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof CompanyDynamicStaticSearchFormBase
     */
    public data: any = {
        begin: null,
        end: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof CompanyDynamicStaticSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        begin: new FormItemModel({ caption: '起始日期', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        end: new FormItemModel({ caption: '结束日期', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof CompanyDynamicStaticBase
     */
    public createDefault(){                    
    }
}