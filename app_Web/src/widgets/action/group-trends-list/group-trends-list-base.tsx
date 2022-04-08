import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import ActionService from '@/service/action/action-service';
import GroupTrendsService from './group-trends-list-service';
import ActionUIService from '@/uiservice/action/action-ui-service';

/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {GroupTrendsListBase}
 */
export class GroupTrendsListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof GroupTrendsListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {GroupTrendsService}
     * @memberof GroupTrendsListBase
     */
    public service: GroupTrendsService = new GroupTrendsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof GroupTrendsListBase
     */
    public appEntityService: ActionService = new ActionService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof GroupTrendsListBase
     */
    protected appDeName: string = 'action';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof GroupTrendsListBase
     */
    protected appDeLogicName: string = '系统日志';

    /**
     * 界面UI服务对象
     *
     * @type {ActionUIService}
     * @memberof GroupTrendsBase
     */  
    public appUIService: ActionUIService = new ActionUIService(this.$store);

    

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof GroupTrendsListBase
     */
    public limit: number = 300;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof GroupTrendsListBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof GroupTrendsListBase
     */
    public minorSortPSDEF: string = 'date';




}