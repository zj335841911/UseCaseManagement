import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import BurnService from '@/service/burn/burn-service';
import QuicksearchformService from './quicksearchform-searchform-service';
import BurnUIService from '@/uiservice/burn/burn-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


/**
 * quicksearchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {QuicksearchformSearchFormBase}
 */
export class QuicksearchformSearchFormBase extends SearchFormControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof QuicksearchformSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {QuicksearchformService}
     * @memberof QuicksearchformSearchFormBase
     */
    public service: QuicksearchformService = new QuicksearchformService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BurnService}
     * @memberof QuicksearchformSearchFormBase
     */
    public appEntityService: BurnService = new BurnService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof QuicksearchformSearchFormBase
     */
    protected appDeName: string = 'burn';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof QuicksearchformSearchFormBase
     */
    protected appDeLogicName: string = 'burn';

    /**
     * 界面UI服务对象
     *
     * @type {BurnUIService}
     * @memberof QuicksearchformBase
     */  
    public appUIService:BurnUIService = new BurnUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof QuicksearchformSearchFormBase
     */
    public data: any = {
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof QuicksearchformSearchFormBase
     */
    public detailsModel: any = {
        quicksearchform: new FormTabPanelModel({ caption: 'quicksearchform', detailType: 'TABPANEL', name: 'quicksearchform', visible: true, isShowCaption: true, form: this, tabPages: [] }),
    };

    /**
     * 新建默认值
     * @memberof QuicksearchformBase
     */
    public createDefault(){                    
    }
}