import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import PersonInfoMianBanService from './person-info-mian-ban-panel-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import PersonInfoMianBanModel from './person-info-mian-ban-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * list_itempanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {PersonInfoMianBanPanelBase}
 */
export class PersonInfoMianBanPanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof PersonInfoMianBanPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {PersonInfoMianBanService}
     * @memberof PersonInfoMianBanPanelBase
     */
    public service: PersonInfoMianBanService = new PersonInfoMianBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof PersonInfoMianBanPanelBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof PersonInfoMianBanPanelBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof PersonInfoMianBanPanelBase
     */
    protected appDeLogicName: string = '我的地盘';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof PersonInfoMianBanBase
     */  
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof PersonInfoMianBan
     */
    public detailsModel: any = {
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem1', panel: this })
,
        container9: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container9', panel: this })
,
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem2', panel: this })
,
        mytodocnt: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'mytodocnt', panel: this })
,
        container4: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container4', panel: this })
,
        rawitem3: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem3', panel: this })
,
        mystorys: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'mystorys', panel: this })
,
        container5: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container5', panel: this })
,
        rawitem4: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem4', panel: this })
,
        mytasks: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'mytasks', panel: this })
,
        container6: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container6', panel: this })
,
        container10: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container10', panel: this })
,
        rawitem5: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem5', panel: this })
,
        mybugs: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'mybugs', panel: this })
,
        container7: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container7', panel: this })
,
        rawitem6: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem6', panel: this })
,
        myfavoritebugs: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'myfavoritebugs', panel: this })
,
        container8: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container8', panel: this })
,
        container11: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container11', panel: this })
,
        container3: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container3', panel: this })
,
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container1', panel: this })
,
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof PersonInfoMianBan
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                





















    }

    /**
     * 数据模型对象
     *
     * @type {PersonInfoMianBanModel}
     * @memberof PersonInfoMianBan
     */
    public dataModel: PersonInfoMianBanModel = new PersonInfoMianBanModel();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof PersonInfoMianBan
     */
    public actionList:Array<any> = [];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof PersonInfoMianBan
     */
    public uiAction(row: any, tag: any, $event: any) {
    }
}