import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import ProductSumTreeExpViewtreeexpbarService from './product-sum-tree-exp-viewtreeexpbar-treeexpbar-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {ProductSumTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class ProductSumTreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductSumTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {ProductSumTreeExpViewtreeexpbarService}
     * @memberof ProductSumTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: ProductSumTreeExpViewtreeexpbarService = new ProductSumTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof ProductSumTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductSumTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductSumTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '我的地盘';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof ProductSumTreeExpViewtreeexpbarBase
     */  
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductSumTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductSumTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof ProductSumTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof ProductSumTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'PRODUCTBUGTYPESUM')) {
            return {  
                viewname: 'product-sum-product-bug-type-sum-usr4-grid-view', 
                parentdata: {},
                deKeyField:'productsum'
			};
        }
        if (Object.is(expmode, 'PRODUCTSUM')) {
            return {  
                viewname: 'product-sum-grid-view', 
                parentdata: {},
                deKeyField:'productsum'
			};
        }
        if (Object.is(expmode, 'PRODUCTSTORYSUM')) {
            return {  
                viewname: 'product-sum-story-sum-grid-view', 
                parentdata: {},
                deKeyField:'productsum'
			};
        }
        if (Object.is(expmode, 'STORYHOURSSUM')) {
            return {  
                viewname: 'product-sum-story-hours-sum-grid-view', 
                parentdata: {},
                deKeyField:'productsum'
			};
        }
        if (Object.is(expmode, 'PRODUCTINPUTTABLE')) {
            return {  
                viewname: 'product-stats-grid-view-producnt-input-table', 
                parentdata: {},
                deKeyField:'productstats'
			};
        }
        if (Object.is(expmode, 'PRODUCTCOMPLETETABLE')) {
            return {  
                viewname: 'product-stats-usr2-grid-view-product-complete', 
                parentdata: {},
                deKeyField:'productstats'
			};
        }
        if (Object.is(expmode, 'PRODUCTQUANTITY')) {
            return {  
                viewname: 'product-stats-grid-view', 
                parentdata: {},
                deKeyField:'productstats'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof ProductSumTreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("productsumtreeexpviewtreeexpbar") as any).offsetWidth;
            if(this.ctrlWidth){
                    this.split = this.ctrlWidth/containerWidth;
            }
            this.$store.commit("setViewSplit",{viewUID:this.viewUID,viewSplit:this.split}); 
        }  
    }

    /**
     * 视图数据加载完成
     *
     * @param {*} $event
     * @memberof ProductSumTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}