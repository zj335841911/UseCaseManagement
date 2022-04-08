import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import DefaultService from './default-searchform-service';
import ProductUIService from '@/uiservice/product/product-ui-service';
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
     * @type {ProductService}
     * @memberof DefaultSearchFormBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DefaultSearchFormBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof DefaultBase
     */  
    public appUIService: ProductUIService = new ProductUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof DefaultSearchFormBase
     */
    public data: any = {
        n_acl_eq: null,
        n_line_eq: null,
        n_linename_like: null,
        n_linename_eq: null,
        n_name_like: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof DefaultSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '常规条件', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        n_acl_eq: new FormItemModel({ caption: '访问控制(等于(=))', detailType: 'FORMITEM', name: 'n_acl_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_line_eq: new FormItemModel({ caption: '产品线(等于(=))', detailType: 'FORMITEM', name: 'n_line_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_linename_like: new FormItemModel({ caption: '产品线(文本包含(%))', detailType: 'FORMITEM', name: 'n_linename_like', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_linename_eq: new FormItemModel({ caption: '产品线(等于(=))', detailType: 'FORMITEM', name: 'n_linename_eq', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        n_name_like: new FormItemModel({ caption: '产品名称(文本包含(%))', detailType: 'FORMITEM', name: 'n_name_like', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 新建默认值
     * @memberof DefaultBase
     */
    public createDefault(){                    
    }
}