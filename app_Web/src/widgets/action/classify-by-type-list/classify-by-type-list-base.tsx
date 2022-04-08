import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import ActionService from '@/service/action/action-service';
import ClassifyByTypeService from './classify-by-type-list-service';
import ActionUIService from '@/uiservice/action/action-ui-service';
import DEFAULTService from '@/widgets/history/default-list/default-list-service';

/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {ClassifyByTypeListBase}
 */
export class ClassifyByTypeListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ClassifyByTypeListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {ClassifyByTypeService}
     * @memberof ClassifyByTypeListBase
     */
    public service: ClassifyByTypeService = new ClassifyByTypeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof ClassifyByTypeListBase
     */
    public appEntityService: ActionService = new ActionService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ClassifyByTypeListBase
     */
    protected appDeName: string = 'action';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ClassifyByTypeListBase
     */
    protected appDeLogicName: string = '系统日志';

    /**
     * 界面UI服务对象
     *
     * @type {ActionUIService}
     * @memberof ClassifyByTypeBase
     */  
    public appUIService: ActionUIService = new ActionUIService(this.$store);


    /**
     * 分页条数
     *
     * @type {number}
     * @memberof ClassifyByTypeListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof ClassifyByTypeListBase
     */
    public minorSortDir: string = 'ASC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof ClassifyByTypeListBase
     */
    public minorSortPSDEF: string = 'date';


    /**
     * 建构部件服务对象
     *
     * @type {DEFAULTService}
     * @memberof ClassifyByType
     */
    public historyService: DEFAULTService = new DEFAULTService({ $store: this.$store });

    /**
     * 列表数据加载
     *
     * @public
     * @param {*} [item={}]
     * @returns {Promise<any>}
     * @memberof ClassifyByType
     */
    protected async loadChildren(item: any = {}): Promise<any> {       
        const arg: any = {
            viewparams: this.viewparams
        };
        const context = this.context || {};
        context.action = item.id;
        let items: any[] = [];
        try {
            const response = await this.historyService.search(this.fetchAction, {...context}, arg, this.showBusyIndicator);
            if (response && response.status === 200) {
                items = response.data || [];
            }
        } catch (error) {
            console.log(error);
        } finally {
            return items;
        }
    }

    /**
     * 动态模型
     *
     * @type {*}
     * @memberof ClassifyByType
     */
    public dynaModel: any = [
  {
  	objecttype: "bug",
	action: "resolved",
	othertext: "方案为",
	codelistId: 'Bug__resolution'
  }
];
}