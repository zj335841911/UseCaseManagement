import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import PRODUCTTEAMService from '@/service/productteam/productteam-service';
import ProductTeamSearchFormService from './product-team-search-form-searchform-service';
import PRODUCTTEAMUIService from '@/uiservice/productteam/productteam-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {ProductTeamSearchFormSearchFormBase}
 */
export class ProductTeamSearchFormSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamSearchFormSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {ProductTeamSearchFormService}
     * @memberof ProductTeamSearchFormSearchFormBase
     */
    public service: ProductTeamSearchFormService = new ProductTeamSearchFormService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {PRODUCTTEAMService}
     * @memberof ProductTeamSearchFormSearchFormBase
     */
    public appEntityService: PRODUCTTEAMService = new PRODUCTTEAMService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamSearchFormSearchFormBase
     */
    protected appDeName: string = 'productteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamSearchFormSearchFormBase
     */
    protected appDeLogicName: string = '产品团队';

    /**
     * 界面UI服务对象
     *
     * @type {PRODUCTTEAMUIService}
     * @memberof ProductTeamSearchFormBase
     */  
    public appUIService: PRODUCTTEAMUIService = new PRODUCTTEAMUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ProductTeamSearchFormSearchFormBase
     */
    public data: any = {
        dept: null,
        teams: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ProductTeamSearchFormSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        dept: new FormItemModel({ caption: '选择部门', detailType: 'FORMITEM', name: 'dept', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        teams: new FormItemModel({ caption: '复制团队', detailType: 'FORMITEM', name: 'teams', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof ProductTeamSearchFormBase
     */
    public createDefault(){                    
    }
}