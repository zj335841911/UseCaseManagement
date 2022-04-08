import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryKanBanService from './story-kan-ban-panel-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import StoryKanBanModel from './story-kan-ban-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * itemlayoutpanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {StoryKanBanPanelBase}
 */
export class StoryKanBanPanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof StoryKanBanPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {StoryKanBanService}
     * @memberof StoryKanBanPanelBase
     */
    public service: StoryKanBanService = new StoryKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryKanBanPanelBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryKanBanPanelBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof StoryKanBanPanelBase
     */
    protected appDeLogicName: string = '需求';

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof StoryKanBanBase
     */  
    public appUIService: StoryUIService = new StoryUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public itemlayoutpanel_button1_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ProjectUnlinkStory(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof StoryKanBan
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
        button1: new PanelButtonModel({ caption: '移除', itemType: 'BUTTON',visible: true, disabled: false, name: 'button1', panel: this, uiaction: { type: 'DEUIACTION', tag: 'ProjectUnlinkStory',actiontarget: 'SINGLEKEY',noprivdisplaymode:1,dataaccaction:'SRFUR__STORY_UNLP_BUT',visible: true,disabled: false} })
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
     * @memberof StoryKanBan
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                















    }

    /**
     * 数据模型对象
     *
     * @type {StoryKanBanModel}
     * @memberof StoryKanBan
     */
    public dataModel: StoryKanBanModel = new StoryKanBanModel();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof StoryKanBan
     */
    public actionList:Array<any> = ['ProjectUnlinkStory'];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof StoryKanBan
     */
    public uiAction(row: any, tag: any, $event: any) {
        if(Object.is('ProjectUnlinkStory', tag)) {
            this.itemlayoutpanel_button1_click(row, tag, $event);
        }
    }
}