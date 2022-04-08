import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import MyWork2Service from './my-work2-panel-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import MyWork2Model from './my-work2-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * list_itempanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {MyWork2PanelBase}
 */
export class MyWork2PanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MyWork2PanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MyWork2Service}
     * @memberof MyWork2PanelBase
     */
    public service: MyWork2Service = new MyWork2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MyWork2PanelBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyWork2PanelBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MyWork2PanelBase
     */
    protected appDeLogicName: string = '我的地盘';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof MyWork2Base
     */  
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MyWork2
     */
    public detailsModel: any = {
        account: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'account', panel: this })
,
        container2: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container2', panel: this })
,
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem1', panel: this })
,
        container9: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container9', panel: this })
,
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem2', panel: this })
,
        mytasks: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'mytasks', panel: this })
,
        myetasks: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'myetasks', panel: this })
,
        container4: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container4', panel: this })
,
        rawitem3: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem3', panel: this })
,
        mybugs: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'mybugs', panel: this })
,
        myebugs: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'myebugs', panel: this })
,
        container5: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container5', panel: this })
,
        rawitem4: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem4', panel: this })
,
        mystorys: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'mystorys', panel: this })
,
        rawitem7: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem7', panel: this })
,
        container6: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container6', panel: this })
,
        rawitem5: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem5', panel: this })
,
        projects: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'projects', panel: this })
,
        eprojects: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'eprojects', panel: this })
,
        container7: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container7', panel: this })
,
        rawitem6: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem6', panel: this })
,
        products: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'products', panel: this })
,
        rawitem8: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem8', panel: this })
,
        container8: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container8', panel: this })
,
        container10: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container10', panel: this })
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
     * @memberof MyWork2
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                



























    }

    /**
     * 数据模型对象
     *
     * @type {MyWork2Model}
     * @memberof MyWork2
     */
    public dataModel: MyWork2Model = new MyWork2Model();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof MyWork2
     */
    public actionList:Array<any> = [];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof MyWork2
     */
    public uiAction(row: any, tag: any, $event: any) {
    }
}