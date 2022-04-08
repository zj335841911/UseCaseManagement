import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridExpBarControlBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import ProductGridExpViewgridexpbarService from './product-grid-exp-viewgridexpbar-gridexpbar-service';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';
import CodeListService from "@service/app/codelist-service";


/**
 * gridexpbar部件基类
 *
 * @export
 * @class GridExpBarControlBase
 * @extends {ProductGridExpViewgridexpbarGridexpbarBase}
 */
export class ProductGridExpViewgridexpbarGridexpbarBase extends GridExpBarControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductGridExpViewgridexpbarGridexpbarBase
     */
    protected controlType: string = 'GRIDEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {ProductGridExpViewgridexpbarService}
     * @memberof ProductGridExpViewgridexpbarGridexpbarBase
     */
    public service: ProductGridExpViewgridexpbarService = new ProductGridExpViewgridexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof ProductGridExpViewgridexpbarGridexpbarBase
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductGridExpViewgridexpbarGridexpbarBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductGridExpViewgridexpbarGridexpbarBase
     */
    protected appDeLogicName: string = '文档库';

    /**
     * 界面UI服务对象
     *
     * @type {DocLibUIService}
     * @memberof ProductGridExpViewgridexpbarBase
     */  
    public appUIService:DocLibUIService = new DocLibUIService(this.$store);

    /**
     * gridexpbar_grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductGridExpViewgridexpbarGridexpbarBase
     */
    public gridexpbar_grid_selectionchange($event: any, $event2?: any) {
        this.gridexpbar_selectionchange($event, 'gridexpbar_grid', $event2);
    }

    /**
     * gridexpbar_grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductGridExpViewgridexpbarGridexpbarBase
     */
    public gridexpbar_grid_load($event: any, $event2?: any) {
        this.gridexpbar_load($event, 'gridexpbar_grid', $event2);
    }


    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof ProductGridExpViewgridexpbarBase
     */
    public navViewName: string = 'doc-grid-view-look-doc';

    /**
     * 导航过滤项
     *
     * @type {string}
     * @memberof ProductGridExpViewgridexpbarBase
     */
    public navFilter: string = 'srfroot';

    /**
     * 导航关系
     *
     * @type {string}
     * @memberof ProductGridExpViewgridexpbarBase
     */
    public navPSDer: string = 'n_lib_eq';

    /**
     * 导航上下文参数
     *
     * @type {*}
     * @memberof ProductGridExpViewgridexpbarBase
     */
    public navigateContext: any = {DOCLIBTYPE:"%doclibtype%",PARENT:"0",PRODUCT:"%product%"};

    /**
     * 导航视图参数
     *
     * @type {*}
     * @memberof ProductGridExpViewgridexpbarBase
     */
    public navigateParams:any = {product:"%product%",parent:"0"};

    /**
    * 刷新
    *
    * @memberof ProductGridExpViewgridexpbarBase
    */
    public refresh(args?: any): void {
        const refs: any = this.$refs;
        if (refs && refs.gridexpbar_grid) {
            refs.gridexpbar_grid.refresh();
        }
    }


    /**
     * gridexpbar的选中数据事件
     * 
     * @memberof ProductGridExpViewgridexpbarBase
     */
    public gridexpbar_selectionchange(args: any [], tag?: string, $event2?: any): void {
        let tempContext:any = {};
        let tempViewParam:any = {};
        if (args.length === 0) {
            this.selection = {};
            return ;
        }
        const arg:any = args[0];
        if(this.context){
            Object.assign(tempContext,JSON.parse(JSON.stringify(this.context)));
        }
        Object.assign(tempContext,{'doclib':arg['doclib']});
        Object.assign(tempContext,{srfparentdename:'DocLib',srfparentkey:arg['doclib']});
        if(this.navFilter && !Object.is(this.navFilter,"")){
            Object.assign(tempViewParam,{[this.navFilter]:arg['doclib']});
        }
        if(this.navPSDer && !Object.is(this.navPSDer,"")){
            Object.assign(tempViewParam,{[this.navPSDer]:arg['doclib']});
        }
        if(this.navigateContext && Object.keys(this.navigateContext).length >0){
            let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navigateContext);
            Object.assign(tempContext,_context);
        }
        if(this.navigateParams && Object.keys(this.navigateParams).length >0){
            let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navigateParams);
            Object.assign(tempViewParam,_params);
        }
        this.selection = {};
        Object.assign(this.selection, { view: { viewname: this.navViewName },  context:tempContext,viewparam:tempViewParam });
        this.$forceUpdate();
    }
}