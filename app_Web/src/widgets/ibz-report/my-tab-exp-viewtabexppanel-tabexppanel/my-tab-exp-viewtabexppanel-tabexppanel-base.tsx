import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import  MyReportCounterCounterService  from '@/counter/my-report-counter/my-report-counter-counter';
import IbzReportService from '@/service/ibz-report/ibz-report-service';
import MyTabExpViewtabexppanelService from './my-tab-exp-viewtabexppanel-tabexppanel-service';
import IbzReportUIService from '@/uiservice/ibz-report/ibz-report-ui-service';
import IbzReportAuthService from '@/authservice/ibz-report/ibz-report-auth-service';
import { Environment } from '@/environments/environment';

/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {MyTabExpViewtabexppanelTabexppanelBase}
 */
export class MyTabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MyTabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';
    
    /**
     * MyReportCounterCounterService计数器服务对象
     *
     * @type {MyReportCounterCounterService}
     * @memberof MyTabExpViewtabexppanelTabexppanelBase
     */
    public myreportcountercounterservice: MyReportCounterCounterService = new MyReportCounterCounterService({$store: this.$store,context:this.context,viewparams:this.viewparams});

    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MyTabExpViewtabexppanelTabexppanelBase
     */    
    public counterServiceArray: Array<any> = [this.myreportcountercounterservice];

    /**
     * 建构部件服务对象
     *
     * @type {MyTabExpViewtabexppanelService}
     * @memberof MyTabExpViewtabexppanelTabexppanelBase
     */
    public service: MyTabExpViewtabexppanelService = new MyTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzReportService}
     * @memberof MyTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: IbzReportService = new IbzReportService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'ibzreport';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MyTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '汇报';

    /**
     * 界面UI服务对象
     *
     * @type {IbzReportUIService}
     * @memberof MyTabExpViewtabexppanelBase
     */  
    public appUIService: IbzReportUIService = new IbzReportUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MyTabExpViewtabexppanelBase
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
     * @memberof MyTabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 实体权限服务对象
     *
     * @protected
     * @type IbzReportAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    protected appAuthService: IbzReportAuthService = new IbzReportAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @protected
     * @type {*}
     * @memberof MyTabExpViewtabexppanelBase
     */
    protected authResourceObject:any = {'tabviewpanel':{resourcetag:null,visible: true,disabled: false},'tabviewpanel2':{resourcetag:null,visible: true,disabled: false},'tabviewpanel3':{resourcetag:null,visible: true,disabled: false},'tabviewpanel4':{resourcetag:null,visible: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MyTabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.ibzreport) {
            Object.assign(this.context, { srfparentdename: 'IbzReport', srfparentkey: this.context.ibzreport });
        }
        super.ctrlCreated();
    }
}