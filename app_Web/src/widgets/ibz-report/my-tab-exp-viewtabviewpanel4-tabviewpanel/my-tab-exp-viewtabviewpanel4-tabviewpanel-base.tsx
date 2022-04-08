import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import IbzReportService from '@/service/ibz-report/ibz-report-service';
import MyTabExpViewtabviewpanel4Service from './my-tab-exp-viewtabviewpanel4-tabviewpanel-service';
import IbzReportUIService from '@/uiservice/ibz-report/ibz-report-ui-service';

/**
 * tabviewpanel4部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MyTabExpViewtabviewpanel4TabviewpanelBase}
 */
export class MyTabExpViewtabviewpanel4TabviewpanelBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MyTabExpViewtabviewpanel4TabviewpanelBase
     */
    protected controlType: string = 'TABVIEWPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MyTabExpViewtabviewpanel4Service}
     * @memberof MyTabExpViewtabviewpanel4TabviewpanelBase
     */
    public service: MyTabExpViewtabviewpanel4Service = new MyTabExpViewtabviewpanel4Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzReportService}
     * @memberof MyTabExpViewtabviewpanel4TabviewpanelBase
     */
    public appEntityService: IbzReportService = new IbzReportService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyTabExpViewtabviewpanel4TabviewpanelBase
     */
    protected appDeName: string = 'ibzreport';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MyTabExpViewtabviewpanel4TabviewpanelBase
     */
    protected appDeLogicName: string = '汇报';

    /**
     * 界面UI服务对象
     *
     * @type {IbzReportUIService}
     * @memberof MyTabExpViewtabviewpanel4Base
     */  
    public appUIService: IbzReportUIService = new IbzReportUIService(this.$store);


    /**
     * 导航模式下项是否激活
     *
     * @type {*}
     * @memberof MyTabExpViewtabviewpanel4
     */
    @Prop()
    public expActive!: any;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MyTabExpViewtabviewpanel4
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MyTabExpViewtabviewpanel4
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof MyTabExpViewtabviewpanel4
     */
    public isActivied: boolean = true;

    /**
     * 局部上下文
     *
     * @type {*}
     * @memberof MyTabExpViewtabviewpanel4
     */
    public localContext: any = null;

    /**
     * 局部视图参数
     *
     * @type {*}
     * @memberof MyTabExpViewtabviewpanel4
     */
    public localViewParam: any = null;

    /**
     * 传入上下文
     *
     * @type {string}
     * @memberof TabExpViewtabviewpanel
     */
    public viewdata: string = JSON.stringify(this.context);

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof PickupViewpickupviewpanel
     */
    public viewparam: string = JSON.stringify(this.viewparams);

    /**
     * 视图面板过滤项
     *
     * @type {string}
     * @memberof MyTabExpViewtabviewpanel4
     */
    public navfilter: string = "";
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MyTabExpViewtabviewpanel4
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MyTabExpViewtabviewpanel4
     */    
    public afterCreated(){
        this.initNavParam();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.context.clearAll();
                Object.assign(this.context, data);
                this.$forceUpdate();
                this.initNavParam();
            });
        }
    }

    /**
     * 初始化导航参数
     *
     * @memberof MyTabExpViewtabviewpanel4
     */
    public initNavParam(){
        if(!Object.is(this.navfilter,"")){
            Object.assign(this.viewparams,{[this.navfilter]:this.context['majorentity']})
        }
        if(this.localContext && Object.keys(this.localContext).length >0){
            let _context:any = this.$util.computedNavData({},this.context,this.viewparams,this.localContext);
            Object.assign(this.context,_context);
        }
        if(this.localViewParam && Object.keys(this.localViewParam).length >0){
            let _param:any = this.$util.computedNavData({},this.context,this.viewparams,this.localViewParam);
            Object.assign(this.viewparams,_param);
        }
        this.viewdata =JSON.stringify(this.context);
        this.viewparam = JSON.stringify(this.viewparams);
    }

    /**
     * 视图数据变化
     *
     * @memberof  MyTabExpViewtabviewpanel4
     */
    public viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof MyTabExpViewtabviewpanel4
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MyTabExpViewtabviewpanel4
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }
}