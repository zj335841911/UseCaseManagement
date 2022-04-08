import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import FileService from '@/service/file/file-service';
import ListService from './list-list-service';
import FileUIService from '@/uiservice/file/file-ui-service';

/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {ListListBase}
 */
export class ListListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ListListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {ListService}
     * @memberof ListListBase
     */
    public service: ListService = new ListService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {FileService}
     * @memberof ListListBase
     */
    public appEntityService: FileService = new FileService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ListListBase
     */
    protected appDeName: string = 'file';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ListListBase
     */
    protected appDeLogicName: string = '附件';

    /**
     * 界面UI服务对象
     *
     * @type {FileUIService}
     * @memberof ListBase
     */  
    public appUIService: FileUIService = new FileUIService(this.$store);

    

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof ListListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof ListListBase
     */
    public minorSortDir: string = '';




}