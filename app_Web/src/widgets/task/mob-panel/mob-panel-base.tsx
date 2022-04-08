import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import MobService from './mob-panel-service';
import TaskUIService from '@/uiservice/task/task-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import MobModel from './mob-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * tasklayoutpanel部件基类
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
     * @type {TaskService}
     * @memberof MobPanelBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobPanelBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MobPanelBase
     */
    protected appDeLogicName: string = '任务';

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof MobBase
     */  
    public appUIService: TaskUIService = new TaskUIService(this.$store);


    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Mob
     */
    public detailsModel: any = {
        pri: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'pri', panel: this })
,
        name: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'name', panel: this })
,
        status: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'status', panel: this })
,
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: false, disabled: false, name: 'rawitem1', panel: this })
,
        rawitem3: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: false, disabled: false, name: 'rawitem3', panel: this })
,
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM',visible: false, disabled: false, name: 'rawitem2', panel: this })
,
        assignedto: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'assignedto', panel: this })
,
        left: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'left', panel: this })
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
                



        if (Object.is(name, '') || Object.is(name, 'assignedto')) {
            let ret = false;
            const _assignedto = this.data.assignedto;
            if (this.$verify.testCond(_assignedto, 'ISNOTNULL', '') && this.$verify.testCond(_assignedto, 'NOTEQ', 'closed')) {
                ret = true;
            }
            this.detailsModel.rawitem1.setVisible(ret);
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
            if (this.$verify.testCond(_assignedto, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.rawitem2.setVisible(ret);
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