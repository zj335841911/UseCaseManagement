import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import PRODUCTTEAMService from '@/service/productteam/productteam-service';
import ProductTeamService from './product-team-list-service';
import PRODUCTTEAMUIService from '@/uiservice/productteam/productteam-ui-service';

/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {ProductTeamListBase}
 */
export class ProductTeamListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {ProductTeamService}
     * @memberof ProductTeamListBase
     */
    public service: ProductTeamService = new ProductTeamService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {PRODUCTTEAMService}
     * @memberof ProductTeamListBase
     */
    public appEntityService: PRODUCTTEAMService = new PRODUCTTEAMService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamListBase
     */
    protected appDeName: string = 'productteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamListBase
     */
    protected appDeLogicName: string = '产品团队';

    /**
     * 界面UI服务对象
     *
     * @type {PRODUCTTEAMUIService}
     * @memberof ProductTeamBase
     */  
    public appUIService: PRODUCTTEAMUIService = new PRODUCTTEAMUIService(this.$store);


    /**
     * 分页条数
     *
     * @type {number}
     * @memberof ProductTeamListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof ProductTeamListBase
     */
    public minorSortDir: string = '';




}