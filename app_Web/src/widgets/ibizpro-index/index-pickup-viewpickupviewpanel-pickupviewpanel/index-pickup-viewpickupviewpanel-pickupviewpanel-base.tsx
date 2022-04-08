import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import IbizproIndexService from '@/service/ibizpro-index/ibizpro-index-service';
import IndexPickupViewpickupviewpanelService from './index-pickup-viewpickupviewpanel-pickupviewpanel-service';
import IbizproIndexUIService from '@/uiservice/ibizpro-index/ibizpro-index-ui-service';
import IndexPickupViewpickupviewpanelModel from './index-pickup-viewpickupviewpanel-pickupviewpanel-model';

/**
 * pickupviewpanel部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {IndexPickupViewpickupviewpanelPickupviewpanelBase}
 */
export class IndexPickupViewpickupviewpanelPickupviewpanelBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof IndexPickupViewpickupviewpanelPickupviewpanelBase
     */
    protected controlType: string = 'PICKUPVIEWPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {IndexPickupViewpickupviewpanelService}
     * @memberof IndexPickupViewpickupviewpanelPickupviewpanelBase
     */
    public service: IndexPickupViewpickupviewpanelService = new IndexPickupViewpickupviewpanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbizproIndexService}
     * @memberof IndexPickupViewpickupviewpanelPickupviewpanelBase
     */
    public appEntityService: IbizproIndexService = new IbizproIndexService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IndexPickupViewpickupviewpanelPickupviewpanelBase
     */
    protected appDeName: string = 'ibizproindex';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof IndexPickupViewpickupviewpanelPickupviewpanelBase
     */
    protected appDeLogicName: string = '索引检索';

    /**
     * 界面UI服务对象
     *
     * @type {IbizproIndexUIService}
     * @memberof IndexPickupViewpickupviewpanelBase
     */  
    public appUIService: IbizproIndexUIService = new IbizproIndexUIService(this.$store);



    /**
     * 选中数据字符串
     *
     * @type {string}
     * @memberof IndexPickupViewpickupviewpanel
     */
    @Prop() public selectedData?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof IndexPickupViewpickupviewpanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof IndexPickupViewpickupviewpanel
     */
    public getData(): any {
        return {};
    }

    /**
     * 视图名称
     *
     * @type {*}
     * @memberof IndexPickupViewpickupviewpanel
     */
    public view: any = {
        viewname: 'ibizpro-index-index-pickup-data-view',
        data: {},
    }

    /**
     * 局部上下文
     *
     * @type {*}
     * @memberof IndexPickupViewpickupviewpanel
     */
    public localContext: any = null;

    /**
     * 局部视图参数
     *
     * @type {*}
     * @memberof PickupViewpickupviewpanel
     */
    public localViewParam: any = null;

    /**
     * 视图数据
     *
     * @type {*}
     * @memberof IndexPickupViewpickupviewpanel
     */
    public viewdata: string  = JSON.stringify(this.context);

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof PickupViewpickupviewpanel
     */
    public viewparam: string  = JSON.stringify(this.viewparams);

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof IndexPickupViewpickupviewpanel
     */
    @Prop({default: true}) public isShowButton!: boolean;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof IndexPickupViewpickupviewpanel
     */
    @Prop() public isSingleSelect?: boolean;

    /**
     * 初始化完成
     *
     * @type {boolean}
     * @memberof IndexPickupViewpickupviewpanel
     */
    public inited: boolean = false;

    /**
     * 视图数据变化
     *
     * @param {*} $event
     * @memberof IndexPickupViewpickupviewpanel
     */
    public onViewDatasChange($event: any): void {
        if($event.length>0){
          $event.forEach((item:any,index:any) => {
              let srfmajortext = item['indexname'];
              if(srfmajortext){
                Object.assign($event[index],{srfmajortext: srfmajortext});
              }
          });
        }
        this.$emit('selectionchange', $event);
    }

    /**
     * 视图数据被激活
     *
     * @param {*} $event
     * @memberof IndexPickupViewpickupviewpanel
     */
    public viewDatasActivated($event: any): void {
        this.$emit('activated', $event);
    }

    /**
     * 视图加载完成
     *
     * @param {*} $event
     * @memberof IndexPickupViewpickupviewpanel
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }

    /**
     * vue 生命周期
     *
     * @memberof IndexPickupViewpickupviewpanel
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof IndexPickupViewpickupviewpanel
     */    
    public afterCreated(){
        this.initNavParam();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.viewdata = JSON.stringify(this.context);
                    this.viewparam = JSON.stringify(Object.assign(data, this.viewparams));
                    this.inited = true;
                }
            });
        }
    }

    /**
     * 初始化导航参数
     *
     *  @memberof IndexPickupViewpickupviewpanel
     */  
    public initNavParam(){
        if(this.localContext && Object.keys(this.localContext).length >0){
            let _context:any = this.$util.computedNavData({},this.context,this.viewparams,this.localContext);
            Object.assign(this.context,_context);
        }
        if(this.localViewParam && Object.keys(this.localViewParam).length >0){
            let _param:any = this.$util.computedNavData({},this.context,this.viewparams,this.localViewParam);
            Object.assign(this.viewparams,_param);
        }
        this.viewdata = JSON.stringify(this.context);
        this.viewparam = JSON.stringify(this.viewparams);
    }


    /**
     * vue 生命周期
     *
     * @memberof IndexPickupViewpickupviewpanel
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof IndexPickupViewpickupviewpanel
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}