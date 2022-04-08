import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';
import MainTabExpViewtabexppanelService from './main-tab-exp-viewtabexppanel-tabexppanel-service';
import ReleaseUIService from '@/uiservice/release/release-ui-service';
import ReleaseAuthService from '@/authservice/release/release-auth-service';
import { Environment } from '@/environments/environment';

/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {MainTabExpViewtabexppanelTabexppanelBase}
 */
export class MainTabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabexppanelService}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    public service: MainTabExpViewtabexppanelService = new MainTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: ReleaseService = new ReleaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'release';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '发布';

    /**
     * 界面UI服务对象
     *
     * @type {ReleaseUIService}
     * @memberof MainTabExpViewtabexppanelBase
     */  
    public appUIService: ReleaseUIService = new ReleaseUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MainTabExpViewtabexppanelBase
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 实体权限服务对象
     *
     * @protected
     * @type ReleaseAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    protected appAuthService: ReleaseAuthService = new ReleaseAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @protected
     * @type {*}
     * @memberof MainTabExpViewtabexppanelBase
     */
    protected authResourceObject:any = {'tabviewpanel':{resourcetag:null,visible: true,disabled: false},'tabviewpanel2':{resourcetag:null,visible: true,disabled: false},'tabviewpanel3':{resourcetag:null,visible: true,disabled: false},'tabviewpanel4':{resourcetag:null,visible: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MainTabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.release) {
            Object.assign(this.context, { srfparentdename: 'Release', srfparentkey: this.context.release });
        }
        super.ctrlCreated();
    }
}