import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductMainToolbarService from './product-main-toolbar-portlet-service';
import ProductUIService from '@/uiservice/product/product-ui-service';
import { Environment } from '@/environments/environment';
import UIService from '@/uiservice/ui-service';

/**
 * dashboard_sysportlet5部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ProductMainToolbarPortletBase}
 */
export class ProductMainToolbarPortletBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductMainToolbarPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {ProductMainToolbarService}
     * @memberof ProductMainToolbarPortletBase
     */
    public service: ProductMainToolbarService = new ProductMainToolbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductMainToolbarPortletBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductMainToolbarPortletBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductMainToolbarPortletBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof ProductMainToolbarBase
     */  
    public appUIService: ProductUIService = new ProductUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_ub8a0b43_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_CloseProduct(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u7de7460_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_OpenQuickCfgView(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u68f0e17_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_delete(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }


    /**
     * 长度
     *
     * @type {number}
     * @memberof ProductMainToolbar
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ProductMainToolbar
     */
    @Prop() public width?: number;

    /**
     * 门户部件类型
     *
     * @type {number}
     * @memberof ProductMainToolbarBase
     */
    public portletType: string = 'actionbar';

    /**
     * 界面行为模型数据
     *
     * @memberof ProductMainToolbarBase
     */
    public uiactionModel: any = {
        closeproduct: {name: 'closeproduct', actiontarget: 'SINGLEKEY', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__PROD_CLOSED_BUT', uiaction: { tag: 'CloseProduct', target: 'SINGLEKEY' } },
        openquickcfgview: {name: 'openquickcfgview', actiontarget: 'SINGLEKEY',  disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__PROD_EDIT_BUT', uiaction: { tag: 'OpenQuickCfgView', target: 'SINGLEKEY' } },
        delete: {name: 'delete', actiontarget: 'SINGLEKEY',  disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: 'SRFUR__PROD_DELETE_BUT', uiaction: { tag: 'delete', target: 'SINGLEKEY' } },
    }

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof ProductMainToolbarBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet5_ub8a0b43_click",
        text: "关闭",
        iconcls: "power",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__PROD_CLOSED_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u7de7460_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__PROD_EDIT_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        },
        { viewlogicname:"dashboard_sysportlet5_u68f0e17_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        noprivdisplaymode: 2,
        dataaccaction:'SRFUR__PROD_DELETE_BUT',
        actiontarget:'SINGLEKEY',
        visible:true,
        disabled:false
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof ProductMainToolbarBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet5_ub8a0b43_click')){
            this.dashboard_sysportlet5_ub8a0b43_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u7de7460_click')){
            this.dashboard_sysportlet5_u7de7460_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u68f0e17_click')){
            this.dashboard_sysportlet5_u68f0e17_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ProductMainToolbarBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProductMainToolbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProductMainToolbarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof ProductMainToolbarBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return 'auto';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductMainToolbarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProductMainToolbarBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if(Object.is(tag, "all-portlet") && Object.is(action,'loadmodel')){
                   this.calcUIActionAuthState(data);
                }
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductMainToolbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProductMainToolbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计算界面行为权限
     *
     * @memberof ProductMainToolbarBase
     */
    public calcUIActionAuthState(data:any = {}) {
        //  如果是操作栏，不计算权限
        if(this.portletType && Object.is('actionbar', this.portletType)) {
            return;
        }
        let _this: any = this;
        let uiservice: any = _this.appUIService ? _this.appUIService : new UIService(_this.$store);
        if(_this.uiactionModel){
            ViewTool.calcActionItemAuthState(data,_this.uiactionModel,uiservice);
        }
    }


    /**
     * 刷新
     *
     * @memberof ProductMainToolbarBase
     */
    public refresh(args?: any) {
      this.$emit('refresh',args);
    }

}
