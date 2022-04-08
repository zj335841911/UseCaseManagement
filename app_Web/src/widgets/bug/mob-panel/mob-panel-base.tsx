import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import MobService from './mob-panel-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import MobModel from './mob-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * buglayoutpanel部件基类
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
     * @type {BugService}
     * @memberof MobPanelBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobPanelBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MobPanelBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof MobBase
     */  
    public appUIService: BugUIService = new BugUIService(this.$store);


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Mob
     */
    public detailsModel: any = {
        pri: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'pri', panel: this })
,
        title: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'title', panel: this })
,
        status: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'status', panel: this })
,
        resolution: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'resolution', panel: this })
,
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: false, disabled: false, name: 'rawitem2', panel: this })
,
        rawitem3: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: false, disabled: false, name: 'rawitem3', panel: this })
,
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: false, disabled: false, name: 'rawitem1', panel: this })
,
        assignedto: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'assignedto', panel: this })
,
        container2: new PanelContainerModel({ caption: '', itemType: 'CONTAINER',visible: true, disabled: false, name: 'container2', panel: this })
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
                




        if (Object.is(name, '') || Object.is(name, 'assignedto')) {
            let ret = false;
            const _assignedto = this.data.assignedto;
            if (this.$verify.testCond(_assignedto, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.rawitem2.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'assignedto')) {
            let ret = false;
            const _assignedto = this.data.assignedto;
            if (this.$verify.testCond(_assignedto, 'EQ', 'closed')) {
                ret = true;
            }
            this.detailsModel.rawitem3.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'assignedto')) {
            let ret = false;
            const _assignedto = this.data.assignedto;
            if (this.$verify.testCond(_assignedto, 'NOTEQ', 'closed') && this.$verify.testCond(_assignedto, 'ISNOTNULL', '')) {
                ret = true;
            }
            this.detailsModel.rawitem1.setVisible(ret);
        }



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