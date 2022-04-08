import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import IBIZPRO_INDEXService from '@/service/ibizpro-index/ibizpro-index-service';
import IndexMob2Service from './index-mob2-panel-service';
import IBIZPRO_INDEXUIService from '@/uiservice/ibizpro-index/ibizpro-index-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import IndexMob2Model from './index-mob2-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * list_itempanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {IndexMob2PanelBase}
 */
export class IndexMob2PanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof IndexMob2PanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {IndexMob2Service}
     * @memberof IndexMob2PanelBase
     */
    public service: IndexMob2Service = new IndexMob2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IBIZPRO_INDEXService}
     * @memberof IndexMob2PanelBase
     */
    public appEntityService: IBIZPRO_INDEXService = new IBIZPRO_INDEXService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IndexMob2PanelBase
     */
    protected appDeName: string = 'ibizpro_index';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof IndexMob2PanelBase
     */
    protected appDeLogicName: string = '索引检索';

    /**
     * 界面UI服务对象
     *
     * @type {IBIZPRO_INDEXUIService}
     * @memberof IndexMob2Base
     */  
    public appUIService: IBIZPRO_INDEXUIService = new IBIZPRO_INDEXUIService(this.$store);


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof IndexMob2
     */
    public detailsModel: any = {
        indextype: new PanelFieldModel({ caption: '类型', itemType: 'FIELD',visible: true, disabled: false, name: 'indextype', panel: this })
,
        indexid: new PanelFieldModel({ caption: '编号', itemType: 'FIELD',visible: true, disabled: false, name: 'indexid', panel: this })
,
        indexname: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'indexname', panel: this })
,
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof IndexMob2
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                



    }

    /**
     * 数据模型对象
     *
     * @type {IndexMob2Model}
     * @memberof IndexMob2
     */
    public dataModel: IndexMob2Model = new IndexMob2Model();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof IndexMob2
     */
    public actionList:Array<any> = [];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof IndexMob2
     */
    public uiAction(row: any, tag: any, $event: any) {
    }
}