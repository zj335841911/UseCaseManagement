
import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListViewExpBarControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ListExpViewlistexpbarService from './list-exp-viewlistexpbar-listexpbar-service';
import ProductUIService from '@/uiservice/product/product-ui-service';
import CodeListService from "@service/app/codelist-service";

/**
 * listexpbar部件基类
 *
 * @export
 * @class ListViewExpBarControlBase
 * @extends {ListExpViewlistexpbarListexpbarBase}
 */
export class ListExpViewlistexpbarListexpbarBase extends ListViewExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    protected controlType: string = 'LISTEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {ListExpViewlistexpbarService}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    public service: ListExpViewlistexpbarService = new ListExpViewlistexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof ListExpViewlistexpbarBase
     */  
    public appUIService: ProductUIService = new ProductUIService(this.$store);

    /**
     * listexpbar_list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    public listexpbar_list_selectionchange($event: any, $event2?: any) {
        this.listexpbar_selectionchange($event, 'listexpbar_list', $event2);
    }

    /**
     * listexpbar_list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    public listexpbar_list_load($event: any, $event2?: any) {
        this.listexpbar_load($event, 'listexpbar_list', $event2);
    }


    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof ListExpViewlistexpbarBase
     */
    public navViewName: string = 'product-stats-edit-view9';

    /**
    * 刷新
    *
    * @memberof ListExpViewlistexpbarBase
    */
    public refresh(args?: any): void {
        const refs: any = this.$refs;
        if (refs && refs.listexpbar_list) {
            refs.listexpbar_list.refresh();
        }
    }



    /**
     * 搜索字段名称
     * 
     * @type {(string)}
     * @memberof ListExpViewlistexpbarBase
     */
    public placeholder = (this.$t('entities.product.fields.name') as string)+"，"+(this.$t('entities.product.fields.id') as string)+"，"+(this.$t('entities.product.fields.code') as string);

    /**
     * 呈现模式，可选值：horizontal或者vertical
     * 
     * @public
     * @type {(string)}
     * @memberof ListExpViewlistexpbarBase
     */
    public showMode:string ="horizontal";

    /**
     * 控件高度
     *
     * @type {number}
     * @memberof ListExpViewlistexpbarBase
     */
    public ctrlHeight: number = 0;
    
    /**
     * listexpbar的选中数据事件
     * 
     * @memberof ListExpViewlistexpbarBase
     */
    public listexpbar_selectionchange(args: any [], tag?: string, $event2?: any): void {
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
        Object.assign(tempContext,{'product':arg['product']});
        Object.assign(tempContext,{srfparentdename:'Product',srfparentkey:arg['product']});
        if(this.navFilter && !Object.is(this.navFilter,"")){
            Object.assign(tempViewParam,{[this.navFilter]:arg['product']});
        }
        if(this.navPSDer && !Object.is(this.navPSDer,"")){
            Object.assign(tempViewParam,{[this.navPSDer]:arg['product']});
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
        Object.assign(this.selection, { view: { viewname: this.navViewName },context:tempContext,viewparam:tempViewParam});
        this.$forceUpdate();
    }

    /**
     * listexpbar的load完成事件
     * 
     * @memberof ListExpViewlistexpbarBase
     */
    public listexpbar_load(args:any, tag?: string, $event2?: any){
        this.$emit('load',args);
    }

    /**
    * 执行搜索
    *
    * @memberof ListExpViewlistexpbarBase
    */
    public onSearch($event:any) {
        this.viewState.next({ tag: 'listexpbar_list', action: "load", data: {query : this.searchText}});
    }

}