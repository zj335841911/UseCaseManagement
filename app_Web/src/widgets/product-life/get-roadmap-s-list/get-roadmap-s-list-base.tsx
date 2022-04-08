import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import ProductLifeService from '@/service/product-life/product-life-service';
import GetRoadmapSService from './get-roadmap-s-list-service';
import ProductLifeUIService from '@/uiservice/product-life/product-life-ui-service';

/**
 * list2部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {GetRoadmapSListBase}
 */
export class GetRoadmapSListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof GetRoadmapSListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {GetRoadmapSService}
     * @memberof GetRoadmapSListBase
     */
    public service: GetRoadmapSService = new GetRoadmapSService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductLifeService}
     * @memberof GetRoadmapSListBase
     */
    public appEntityService: ProductLifeService = new ProductLifeService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof GetRoadmapSListBase
     */
    protected appDeName: string = 'productlife';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof GetRoadmapSListBase
     */
    protected appDeLogicName: string = '产品生命周期';

    /**
     * 界面UI服务对象
     *
     * @type {ProductLifeUIService}
     * @memberof GetRoadmapSBase
     */  
    public appUIService: ProductLifeUIService = new ProductLifeUIService(this.$store);


    /**
     * 分页条数
     *
     * @type {number}
     * @memberof GetRoadmapSListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof GetRoadmapSListBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof GetRoadmapSListBase
     */
    public minorSortPSDEF: string = 'begin';




}