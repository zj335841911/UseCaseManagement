import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import IbzFavoritesService from '@/service/ibz-favorites/ibz-favorites-service';
import TabExpViewtabexppanelService from './tab-exp-viewtabexppanel-tabexppanel-service';
import IbzFavoritesUIService from '@/uiservice/ibz-favorites/ibz-favorites-ui-service';
import IbzFavoritesAuthService from '@/authservice/ibz-favorites/ibz-favorites-auth-service';
import { Environment } from '@/environments/environment';

/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {TabExpViewtabexppanelTabexppanelBase}
 */
export class TabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {TabExpViewtabexppanelService}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    public service: TabExpViewtabexppanelService = new TabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzFavoritesService}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: IbzFavoritesService = new IbzFavoritesService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'ibzfavorites';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '收藏';

    /**
     * 界面UI服务对象
     *
     * @type {IbzFavoritesUIService}
     * @memberof TabExpViewtabexppanelBase
     */  
    public appUIService: IbzFavoritesUIService = new IbzFavoritesUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof TabExpViewtabexppanelBase
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel4:  false ,
        tabviewpanel3:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 实体权限服务对象
     *
     * @protected
     * @type IbzFavoritesAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    protected appAuthService: IbzFavoritesAuthService = new IbzFavoritesAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @protected
     * @type {*}
     * @memberof TabExpViewtabexppanelBase
     */
    protected authResourceObject:any = {'tabviewpanel':{resourcetag:null,visible: true,disabled: false},'tabviewpanel2':{resourcetag:null,visible: true,disabled: false},'tabviewpanel4':{resourcetag:null,visible: true,disabled: false},'tabviewpanel3':{resourcetag:null,visible: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof TabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.ibzfavorites) {
            Object.assign(this.context, { srfparentdename: 'IbzFavorites', srfparentkey: this.context.ibzfavorites });
        }
        super.ctrlCreated();
    }
}