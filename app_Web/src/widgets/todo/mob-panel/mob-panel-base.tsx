import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, PanelControlBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import MobService from './mob-panel-service';
import TodoUIService from '@/uiservice/todo/todo-ui-service';
import { PanelDetailModel,PanelRawitemModel,PanelTabPanelModel,PanelTabPageModel,PanelFieldModel,PanelContainerModel,PanelControlModel,PanelUserControlModel,PanelButtonModel } from '@/model/panel-detail';
import MobModel from './mob-panel-model';
import CodeListService from "@service/app/codelist-service";

/**
 * todolayoutpanel部件基类
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
     * @type {TodoService}
     * @memberof MobPanelBase
     */
    public appEntityService: TodoService = new TodoService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobPanelBase
     */
    protected appDeName: string = 'todo';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MobPanelBase
     */
    protected appDeLogicName: string = '待办事宜表';

    /**
     * 界面UI服务对象
     *
     * @type {TodoUIService}
     * @memberof MobBase
     */  
    public appUIService: TodoUIService = new TodoUIService(this.$store);


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
        date1: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'date1', panel: this })
,
        begin: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'begin', panel: this })
,
        status: new PanelFieldModel({ caption: '', itemType: 'FIELD',visible: true, disabled: false, name: 'status', panel: this })
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