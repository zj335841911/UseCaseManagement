import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import PRODUCTTEAMService from '@/service/productteam/productteam-service';
import ProductTeamService from './product-team-panel-service';
import PRODUCTTEAMUIService from '@/uiservice/productteam/productteam-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import ProductTeamModel from './product-team-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * list_itempanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {ProductTeamPanelBase}
 */
export class ProductTeamPanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {ProductTeamService}
     * @memberof ProductTeamPanelBase
     */
    public service: ProductTeamService = new ProductTeamService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {PRODUCTTEAMService}
     * @memberof ProductTeamPanelBase
     */
    public appEntityService: PRODUCTTEAMService = new PRODUCTTEAMService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamPanelBase
     */
    protected appDeName: string = 'productteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamPanelBase
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
     * 详情模型集合
     *
     * @type {*}
     * @memberof ProductTeam
     */
    public detailsModel: any = {
        account: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'account', panel: this })
,
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container1', panel: this })
,
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof ProductTeam
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                


    }

    /**
     * 数据模型对象
     *
     * @type {ProductTeamModel}
     * @memberof ProductTeam
     */
    public dataModel: ProductTeamModel = new ProductTeamModel();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof ProductTeam
     */
    public actionList:Array<any> = [];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof ProductTeam
     */
    public uiAction(row: any, tag: any, $event: any) {
    }
}