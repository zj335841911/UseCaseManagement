import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import PRODUCTTEAMService from '@/service/productteam/productteam-service';
import ProductTeamPcService from './product-team-pc-panel-service';
import PRODUCTTEAMUIService from '@/uiservice/productteam/productteam-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import ProductTeamPcModel from './product-team-pc-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * list_itempanel部件基类
 *
 * @export
 * @class PanelControlBase
 * @extends {ProductTeamPcPanelBase}
 */
export class ProductTeamPcPanelBase extends PanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamPcPanelBase
     */
    protected controlType: string = 'PANEL';

    /**
     * 建构部件服务对象
     *
     * @type {ProductTeamPcService}
     * @memberof ProductTeamPcPanelBase
     */
    public service: ProductTeamPcService = new ProductTeamPcService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {PRODUCTTEAMService}
     * @memberof ProductTeamPcPanelBase
     */
    public appEntityService: PRODUCTTEAMService = new PRODUCTTEAMService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamPcPanelBase
     */
    protected appDeName: string = 'productteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductTeamPcPanelBase
     */
    protected appDeLogicName: string = '产品团队';

    /**
     * 界面UI服务对象
     *
     * @type {PRODUCTTEAMUIService}
     * @memberof ProductTeamPcBase
     */  
    public appUIService: PRODUCTTEAMUIService = new PRODUCTTEAMUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public list_itempanel_button1_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:PRODUCTTEAMUIService  = new PRODUCTTEAMUIService();
        curUIService.PRODUCTTEAM_RemoveMember(datas,contextJO, paramJO,  $event, xData,this,"PRODUCTTEAM");
    }


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ProductTeamPc
     */
    public detailsModel: any = {
        account: new PanelFieldModel({ caption: '用户名', itemType: 'FIELD',visible: true, disabled: false, name: 'account', panel: this })
,
        role: new PanelFieldModel({ caption: '角色', itemType: 'FIELD',visible: false, disabled: false, name: 'role', panel: this })
,
        rawitem5: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: false, disabled: false, name: 'rawitem5', panel: this })
,
        container2: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container2', panel: this })
,
        rawitem4: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem4', panel: this })
,
        join: new PanelFieldModel({ caption: '加盟日', itemType: 'FIELD',visible: true, disabled: false, name: 'join', panel: this })
,
        rawitem6: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem6', panel: this })
,
        days: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'days', panel: this })
,
        container4: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container4', panel: this })
,
        rawitem7: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem7', panel: this })
,
        hours: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'hours', panel: this })
,
        rawitem8: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem8', panel: this })
,
        total: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'total', panel: this })
,
        container5: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container5', panel: this })
,
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem1', panel: this })
,
        consumed: new PanelFieldModel({ caption: '消耗', itemType: 'FIELD',visible: true, disabled: false, name: 'consumed', panel: this })
,
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem2', panel: this })
,
        left: new PanelFieldModel({ caption: '剩余工时', itemType: 'FIELD',visible: true, disabled: false, name: 'left', panel: this })
,
        rawitem3: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: true, disabled: false, name: 'rawitem3', panel: this })
,
        estimate: new PanelFieldModel({ caption: '最初预计', itemType: 'FIELD',visible: true, disabled: false, name: 'estimate', panel: this })
,
        button1: new PanelButtonModel({ caption: '移除', itemType: 'BUTTON',visible: true, disabled: false, name: 'button1', panel: this, uiaction: { type: 'DEUIACTION', tag: 'RemoveMember',actiontarget: 'SINGLEKEY',noprivdisplaymode:1,dataaccaction:'SRFUR__PROJT_TM_BUT',visible: true,disabled: false} })
,
        container3: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container3', panel: this })
,
        id: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'id', panel: this })
,
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container1', panel: this })
,
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof ProductTeamPc
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                

        if (Object.is(name, '') || Object.is(name, 'role')) {
            let ret = false;
            const _role = this.data.role;
            if (this.$verify.testCond(_role, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.role.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'role')) {
            let ret = false;
            const _role = this.data.role;
            if (this.$verify.testCond(_role, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.rawitem5.setVisible(ret);
        }






















    }

    /**
     * 数据模型对象
     *
     * @type {ProductTeamPcModel}
     * @memberof ProductTeamPc
     */
    public dataModel: ProductTeamPcModel = new ProductTeamPcModel();

    /**
     * 界面行为标识数组
     *
     * @type {Array<any>}
     * @memberof ProductTeamPc
     */
    public actionList:Array<any> = ['RemoveMember'];

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof ProductTeamPc
     */
    public uiAction(row: any, tag: any, $event: any) {
        if(Object.is('RemoveMember', tag)) {
            this.list_itempanel_button1_click(row, tag, $event);
        }
    }
}