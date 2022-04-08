import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import EmployTreeExpViewtreeexpbarService from './employ-tree-exp-viewtreeexpbar-treeexpbar-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {EmployTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class EmployTreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof EmployTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {EmployTreeExpViewtreeexpbarService}
     * @memberof EmployTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: EmployTreeExpViewtreeexpbarService = new EmployTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof EmployTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof EmployTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof EmployTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '我的地盘';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof EmployTreeExpViewtreeexpbarBase
     */  
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof EmployTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof EmployTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof EmployTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof EmployTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'COMPANYDYNAMICSTATS')) {
            return {  
                viewname: 'company-stats-company-dynamic-stats-grid-view', 
                parentdata: {},
                deKeyField:'companystats'
			};
        }
        if (Object.is(expmode, 'TASKFINISH')) {
            return {  
                viewname: 'task-stats-user-finish-task-grid-view', 
                parentdata: {},
                deKeyField:'taskstats'
			};
        }
        if (Object.is(expmode, 'BUGRESOLVED')) {
            return {  
                viewname: 'bug-stats-bug-resolved-by-grid-view-zu-zhi', 
                parentdata: {},
                deKeyField:'bugstats'
			};
        }
        if (Object.is(expmode, 'EMPLOYEELOAD')) {
            return {  
                viewname: 'emp-loyeeload-grid-view', 
                parentdata: {},
                deKeyField:'employeeload'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof EmployTreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("employtreeexpviewtreeexpbar") as any).offsetWidth;
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
     * @memberof EmployTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}