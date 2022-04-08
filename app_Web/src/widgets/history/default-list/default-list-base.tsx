import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import HistoryService from '@/service/history/history-service';
import DEFAULTService from './default-list-service';
import HistoryUIService from '@/uiservice/history/history-ui-service';

/**
 * history部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {DEFAULTListBase}
 */
export class DEFAULTListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DEFAULTListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {DEFAULTService}
     * @memberof DEFAULTListBase
     */
    public service: DEFAULTService = new DEFAULTService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {HistoryService}
     * @memberof DEFAULTListBase
     */
    public appEntityService: HistoryService = new HistoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DEFAULTListBase
     */
    protected appDeName: string = 'history';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DEFAULTListBase
     */
    protected appDeLogicName: string = '操作历史';

    /**
     * 界面UI服务对象
     *
     * @type {HistoryUIService}
     * @memberof DEFAULTBase
     */  
    public appUIService: HistoryUIService = new HistoryUIService(this.$store);


    /**
     * 分页条数
     *
     * @type {number}
     * @memberof DEFAULTListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof DEFAULTListBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof DEFAULTListBase
     */
    public minorSortPSDEF: string = 'id';




}