import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import ProjectTeamService from '@/service/project-team/project-team-service';
import ProjectTeamPcService from './project-team-pc-list-service';
import ProjectTeamUIService from '@/uiservice/project-team/project-team-ui-service';

/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {ProjectTeamPcListBase}
 */
export class ProjectTeamPcListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamPcListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {ProjectTeamPcService}
     * @memberof ProjectTeamPcListBase
     */
    public service: ProjectTeamPcService = new ProjectTeamPcService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectTeamService}
     * @memberof ProjectTeamPcListBase
     */
    public appEntityService: ProjectTeamService = new ProjectTeamService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamPcListBase
     */
    protected appDeName: string = 'projectteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamPcListBase
     */
    protected appDeLogicName: string = '项目团队';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectTeamUIService}
     * @memberof ProjectTeamPcBase
     */  
    public appUIService: ProjectTeamUIService = new ProjectTeamUIService(this.$store);


    /**
     * 分页条数
     *
     * @type {number}
     * @memberof ProjectTeamPcListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof ProjectTeamPcListBase
     */
    public minorSortDir: string = '';




}