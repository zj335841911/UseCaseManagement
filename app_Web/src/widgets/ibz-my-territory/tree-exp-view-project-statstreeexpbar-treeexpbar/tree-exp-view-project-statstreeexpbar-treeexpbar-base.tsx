import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import TreeExpViewProjectStatstreeexpbarService from './tree-exp-view-project-statstreeexpbar-treeexpbar-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {TreeExpViewProjectStatstreeexpbarTreeExpBarBase}
 */
export class TreeExpViewProjectStatstreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewProjectStatstreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {TreeExpViewProjectStatstreeexpbarService}
     * @memberof TreeExpViewProjectStatstreeexpbarTreeExpBarBase
     */
    public service: TreeExpViewProjectStatstreeexpbarService = new TreeExpViewProjectStatstreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof TreeExpViewProjectStatstreeexpbarTreeExpBarBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewProjectStatstreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewProjectStatstreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '我的地盘';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof TreeExpViewProjectStatstreeexpbarBase
     */  
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TreeExpViewProjectStatstreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TreeExpViewProjectStatstreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof TreeExpViewProjectStatstreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof TreeExpViewProjectStatstreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'PROJECTPROGRESS')) {
            return {  
                viewname: 'project-stats-project-progress-usr2-grid-view', 
                parentdata: {},
                deKeyField:'projectstats'
			};
        }
        if (Object.is(expmode, 'TASKSTATUSCOUNT')) {
            return {  
                viewname: 'project-stats-usr2-grid-view-task-status-count', 
                parentdata: {},
                deKeyField:'projectstats'
			};
        }
        if (Object.is(expmode, 'BUGTYPE')) {
            return {  
                viewname: 'project-stats-project-bug-type-sum-usr2-grid-view', 
                parentdata: {},
                deKeyField:'projectstats'
			};
        }
        if (Object.is(expmode, 'PROJECTSTORYSTAGESTATS')) {
            return {  
                viewname: 'project-stats-project-story-stage-status-grid-view', 
                parentdata: {},
                deKeyField:'projectstats'
			};
        }
        if (Object.is(expmode, 'TASKTYPECOUNT')) {
            return {  
                viewname: 'project-stats-usr2-grid-view-task-type-count', 
                parentdata: {},
                deKeyField:'projectstats'
			};
        }
        if (Object.is(expmode, 'PROJECTINPUTSTATS')) {
            return {  
                viewname: 'project-stats-project-input-stats-grid-view', 
                parentdata: {},
                deKeyField:'projectstats'
			};
        }
        if (Object.is(expmode, 'PROJECTQUALITY')) {
            return {  
                viewname: 'project-stats-project-quality-usr2-grid-view', 
                parentdata: {},
                deKeyField:'projectstats'
			};
        }
        if (Object.is(expmode, 'BUGRESOLUTIONCOUNT')) {
            return {  
                viewname: 'bug-stats-bugresolvetion', 
                parentdata: {},
                deKeyField:'bugstats'
			};
        }
        if (Object.is(expmode, 'PROJECTSTORYSTATUSSTATS')) {
            return {  
                viewname: 'project-stats-project-story-status-stats-grid-view', 
                parentdata: {},
                deKeyField:'projectstats'
			};
        }
        if (Object.is(expmode, 'BUGSTATUSCOUNT')) {
            return {  
                viewname: 'bug-stats-usr2-grid-view-project-bug-status-count', 
                parentdata: {},
                deKeyField:'bugstats'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof TreeExpViewProjectStatstreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("treeexpviewprojectstatstreeexpbar") as any).offsetWidth;
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
     * @memberof TreeExpViewProjectStatstreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}