import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import ProductSumService from '@/service/product-sum/product-sum-service';
import ProductStorySumService from './product-story-sum-searchform-service';
import ProductSumUIService from '@/uiservice/product-sum/product-sum-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {ProductStorySumSearchFormBase}
 */
export class ProductStorySumSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductStorySumSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {ProductStorySumService}
     * @memberof ProductStorySumSearchFormBase
     */
    public service: ProductStorySumService = new ProductStorySumService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductSumService}
     * @memberof ProductStorySumSearchFormBase
     */
    public appEntityService: ProductSumService = new ProductSumService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStorySumSearchFormBase
     */
    protected appDeName: string = 'productsum';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStorySumSearchFormBase
     */
    protected appDeLogicName: string = '产品汇总表';

    /**
     * 界面UI服务对象
     *
     * @type {ProductSumUIService}
     * @memberof ProductStorySumBase
     */  
    public appUIService: ProductSumUIService = new ProductSumUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ProductStorySumSearchFormBase
     */
    public data: any = {
        closed: null,
        n_id_eq: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ProductStorySumSearchFormBase
     */
    public detailsModel: any = {
        rawitem1: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem1', visible: true, isShowCaption: true, form: this })
, 
        formpage1: new FormPageModel({ caption: '常规条件', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        closed: new FormItemModel({ caption: '关闭产品', detailType: 'FORMITEM', name: 'closed', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_id_eq: new FormItemModel({ caption: '产品', detailType: 'FORMITEM', name: 'n_id_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof ProductStorySumBase
     */
    public createDefault(){                    
    }
}