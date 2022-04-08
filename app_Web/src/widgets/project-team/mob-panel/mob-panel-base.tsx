import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import ProjectTeamService from '@/service/project-team/project-team-service';
import MobService from './mob-panel-service';
import ProjectTeamUIService from '@/uiservice/project-team/project-team-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import MobModel from './mob-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * testtasklayoutpanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {MobPanelBase}
 */
export class MobPanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MobPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MobService}
     * @memberof MobPanelBase
     */
    public service: MobService = new MobService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectTeamService}
     * @memberof MobPanelBase
     */
    public appEntityService: ProjectTeamService = new ProjectTeamService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobPanelBase
     */
    protected appDeName: string = 'projectteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MobPanelBase
     */
    protected appDeLogicName: string = '项目团队';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectTeamUIService}
     * @memberof MobBase
     */  
    public appUIService: ProjectTeamUIService = new ProjectTeamUIService(this.$store);


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Mob
     */
    public detailsModel: any = {
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem1', panel: this })
,
        account: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'account', panel: this })
,
        role: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'role', panel: this })
,
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container1', panel: this })
,
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Mob
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                




    }

    /**
     * 数据模型对象
     *
     * @type {MobModel}
     * @memberof Mob
     */
    public dataModel: MobModel = new MobModel();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof Mob
     */
    public actionList:Array<any> = [];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof Mob
     */
    public uiAction(row: any, tag: any, $event: any) {
    }
}