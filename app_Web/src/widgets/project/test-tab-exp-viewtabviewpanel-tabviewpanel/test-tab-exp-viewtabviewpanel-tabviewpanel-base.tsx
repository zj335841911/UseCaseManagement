import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import TestTabExpViewtabviewpanelService from './test-tab-exp-viewtabviewpanel-tabviewpanel-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';

/**
 * tabviewpanel部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TestTabExpViewtabviewpanelTabviewpanelBase}
 */
export class TestTabExpViewtabviewpanelTabviewpanelBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestTabExpViewtabviewpanelTabviewpanelBase
     */
    protected controlType: string = 'TABVIEWPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {TestTabExpViewtabviewpanelService}
     * @memberof TestTabExpViewtabviewpanelTabviewpanelBase
     */
    public service: TestTabExpViewtabviewpanelService = new TestTabExpViewtabviewpanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof TestTabExpViewtabviewpanelTabviewpanelBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestTabExpViewtabviewpanelTabviewpanelBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestTabExpViewtabviewpanelTabviewpanelBase
     */
    protected appDeLogicName: string = '项目';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof TestTabExpViewtabviewpanelBase
     */  
    public appUIService: ProjectUIService = new ProjectUIService(this.$store);


    /**
     * 导航模式下项是否激活
     *
     * @type {*}
     * @memberof TestTabExpViewtabviewpanel
     */
    @Prop()
    public expActive!: any;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestTabExpViewtabviewpanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestTabExpViewtabviewpanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof TestTabExpViewtabviewpanel
     */
    public isActivied: boolean = true;

    /**
     * 局部上下文
     *
     * @type {*}
     * @memberof TestTabExpViewtabviewpanel
     */
    public localContext: any = null;

    /**
     * 局部视图参数
     *
     * @type {*}
     * @memberof TestTabExpViewtabviewpanel
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
     * @memberof TestTabExpViewtabviewpanel
     */
    public navfilter: string = "";
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof TestTabExpViewtabviewpanel
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TestTabExpViewtabviewpanel
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
     * @memberof TestTabExpViewtabviewpanel
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
     * @memberof  TestTabExpViewtabviewpanel
     */
    public viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof TestTabExpViewtabviewpanel
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestTabExpViewtabviewpanel
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }
}