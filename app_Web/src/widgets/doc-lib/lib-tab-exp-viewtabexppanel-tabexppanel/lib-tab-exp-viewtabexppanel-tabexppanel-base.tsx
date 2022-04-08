import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import LibTabExpViewtabexppanelService from './lib-tab-exp-viewtabexppanel-tabexppanel-service';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';
import DocLibAuthService from '@/authservice/doc-lib/doc-lib-auth-service';
import { Environment } from '@/environments/environment';

/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {LibTabExpViewtabexppanelTabexppanelBase}
 */
export class LibTabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof LibTabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {LibTabExpViewtabexppanelService}
     * @memberof LibTabExpViewtabexppanelTabexppanelBase
     */
    public service: LibTabExpViewtabexppanelService = new LibTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof LibTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof LibTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof LibTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '文档库';

    /**
     * 界面UI服务对象
     *
     * @type {DocLibUIService}
     * @memberof LibTabExpViewtabexppanelBase
     */  
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof LibTabExpViewtabexppanelBase
     */
    protected isInit: any = {
        tabviewpanel4:  true ,
        tabviewpanel:  false ,
        tabviewpanel2:  false ,
        tabviewpanel3:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof LibTabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel4';

    /**
     * 实体权限服务对象
     *
     * @protected
     * @type DocLibAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    protected appAuthService: DocLibAuthService = new DocLibAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @protected
     * @type {*}
     * @memberof LibTabExpViewtabexppanelBase
     */
    protected authResourceObject:any = {'tabviewpanel4':{resourcetag:null,visible: true,disabled: false},'tabviewpanel':{resourcetag:null,visible: true,disabled: false},'tabviewpanel2':{resourcetag:null,visible: true,disabled: false},'tabviewpanel3':{resourcetag:null,visible: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof LibTabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.doclib) {
            Object.assign(this.context, { srfparentdename: 'DocLib', srfparentkey: this.context.doclib });
        }
        super.ctrlCreated();
    }
}