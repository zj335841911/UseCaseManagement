import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import ProductStoryKanBanService from './product-story-kan-ban-panel-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import ProductStoryKanBanModel from './product-story-kan-ban-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * itemlayoutpanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {ProductStoryKanBanPanelBase}
 */
export class ProductStoryKanBanPanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductStoryKanBanPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {ProductStoryKanBanService}
     * @memberof ProductStoryKanBanPanelBase
     */
    public service: ProductStoryKanBanService = new ProductStoryKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof ProductStoryKanBanPanelBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStoryKanBanPanelBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStoryKanBanPanelBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof ProductStoryKanBanBase
     */  
    public appUIService: StoryUIService = new StoryUIService(this.$store);


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ProductStoryKanBan
     */
    public detailsModel: any = {
        title: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'title', panel: this })
,
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem1', panel: this })
,
        pri: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'pri', panel: this })
,
        status: new PanelFieldModel({ caption: '状态', itemType: 'FIELD',visible: true, disabled: false, name: 'status', panel: this })
,
        estimate: new PanelFieldModel({ caption: 'h', itemType: 'FIELD',visible: true, disabled: false, name: 'estimate', panel: this })
,
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem2', panel: this })
,
        container2: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container2', panel: this })
,
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container1', panel: this })
,
        srfkey: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'srfkey', panel: this })
,
        stage: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'stage', panel: this })
,
        story: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'story', panel: this })
,
        isfavorites: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'isfavorites', panel: this })
,
        ischild: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'ischild', panel: this })
,
        container3: new PanelContainerModel({ caption: '隐藏项', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container3', panel: this })
,
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof ProductStoryKanBan
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                














    }

    /**
     * 数据模型对象
     *
     * @type {ProductStoryKanBanModel}
     * @memberof ProductStoryKanBan
     */
    public dataModel: ProductStoryKanBanModel = new ProductStoryKanBanModel();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof ProductStoryKanBan
     */
    public actionList:Array<any> = [];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof ProductStoryKanBan
     */
    public uiAction(row: any, tag: any, $event: any) {
    }
}