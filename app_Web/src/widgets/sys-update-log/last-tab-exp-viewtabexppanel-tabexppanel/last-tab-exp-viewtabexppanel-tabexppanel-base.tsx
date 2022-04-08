import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import SysUpdateLogService from '@/service/sys-update-log/sys-update-log-service';
import LastTabExpViewtabexppanelService from './last-tab-exp-viewtabexppanel-tabexppanel-service';
import SysUpdateLogUIService from '@/uiservice/sys-update-log/sys-update-log-ui-service';
import SysUpdateLogAuthService from '@/authservice/sys-update-log/sys-update-log-auth-service';
import { Environment } from '@/environments/environment';

/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {LastTabExpViewtabexppanelTabexppanelBase}
 */
export class LastTabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof LastTabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {LastTabExpViewtabexppanelService}
     * @memberof LastTabExpViewtabexppanelTabexppanelBase
     */
    public service: LastTabExpViewtabexppanelService = new LastTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SysUpdateLogService}
     * @memberof LastTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: SysUpdateLogService = new SysUpdateLogService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof LastTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'sysupdatelog';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof LastTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '系统更新日志';

    /**
     * 界面UI服务对象
     *
     * @type {SysUpdateLogUIService}
     * @memberof LastTabExpViewtabexppanelBase
     */  
    public appUIService: SysUpdateLogUIService = new SysUpdateLogUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof LastTabExpViewtabexppanelBase
     */
    protected isInit: any = {
        tabviewpanel2:  true ,
        tabviewpanel:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof LastTabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel2';

    /**
     * 实体权限服务对象
     *
     * @protected
     * @type SysUpdateLogAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    protected appAuthService: SysUpdateLogAuthService = new SysUpdateLogAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @protected
     * @type {*}
     * @memberof LastTabExpViewtabexppanelBase
     */
    protected authResourceObject:any = {'tabviewpanel2':{resourcetag:null,visible: true,disabled: false},'tabviewpanel':{resourcetag:null,visible: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof LastTabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.sysupdatelog) {
            Object.assign(this.context, { srfparentdename: 'SysUpdateLog', srfparentkey: this.context.sysupdatelog });
        }
        super.ctrlCreated();
    }
}