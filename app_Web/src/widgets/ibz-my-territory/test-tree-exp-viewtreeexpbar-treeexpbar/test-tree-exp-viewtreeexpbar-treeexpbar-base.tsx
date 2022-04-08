import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import TestTreeExpViewtreeexpbarService from './test-tree-exp-viewtreeexpbar-treeexpbar-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {TestTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class TestTreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {TestTreeExpViewtreeexpbarService}
     * @memberof TestTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: TestTreeExpViewtreeexpbarService = new TestTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof TestTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '我的地盘';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof TestTreeExpViewtreeexpbarBase
     */  
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof TestTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof TestTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'BUGASSIGNEDTO')) {
            return {  
                viewname: 'bug-stats-assignto-grid-view', 
                parentdata: {},
                deKeyField:'bugstats'
			};
        }
        if (Object.is(expmode, 'TESTCASESTATS')) {
            return {  
                viewname: 'case-stats-test-case-stats-grid-view', 
                parentdata: {},
                deKeyField:'casestats'
			};
        }
        if (Object.is(expmode, 'BUGRESOLVEDBY')) {
            return {  
                viewname: 'bug-stats-bug-resolved-by-grid-view', 
                parentdata: {},
                deKeyField:'bugstats'
			};
        }
        if (Object.is(expmode, 'BUGOPENENDBY')) {
            return {  
                viewname: 'bug-stats-grid-view', 
                parentdata: {},
                deKeyField:'bugstats'
			};
        }
        if (Object.is(expmode, 'PRODUCTBUGSTATUSSUM')) {
            return {  
                viewname: 'bug-stats-product-bug-status-grid-view', 
                parentdata: {},
                deKeyField:'bugstats'
			};
        }
        if (Object.is(expmode, 'PRODUCTBUGRESOLUTIONSTATS')) {
            return {  
                viewname: 'bug-stats-product-bug-resolution-grid-view', 
                parentdata: {},
                deKeyField:'bugstats'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof TestTreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("testtreeexpviewtreeexpbar") as any).offsetWidth;
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
     * @memberof TestTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}