import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import MoreTabExpViewtabexppanelService from './more-tab-exp-viewtabexppanel-tabexppanel-service';
import TaskUIService from '@/uiservice/task/task-ui-service';
import TaskAuthService from '@/authservice/task/task-auth-service';
import { Environment } from '@/environments/environment';

/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {MoreTabExpViewtabexppanelTabexppanelBase}
 */
export class MoreTabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MoreTabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MoreTabExpViewtabexppanelService}
     * @memberof MoreTabExpViewtabexppanelTabexppanelBase
     */
    public service: MoreTabExpViewtabexppanelService = new MoreTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof MoreTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MoreTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MoreTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '任务';

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof MoreTabExpViewtabexppanelBase
     */  
    public appUIService: TaskUIService = new TaskUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MoreTabExpViewtabexppanelBase
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof MoreTabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 实体权限服务对象
     *
     * @protected
     * @type TaskAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    protected appAuthService: TaskAuthService = new TaskAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @protected
     * @type {*}
     * @memberof MoreTabExpViewtabexppanelBase
     */
    protected authResourceObject:any = {'tabviewpanel':{resourcetag:null,visible: true,disabled: false},'tabviewpanel2':{resourcetag:null,visible: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MoreTabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.task) {
            Object.assign(this.context, { srfparentdename: 'Task', srfparentkey: this.context.task });
        }
        super.ctrlCreated();
    }
}