import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import TaskTreeExpViewtreeexpbarService from './task-tree-exp-viewtreeexpbar-treeexpbar-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {TaskTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class TaskTreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {TaskTreeExpViewtreeexpbarService}
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: TaskTreeExpViewtreeexpbarService = new TaskTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '项目';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */  
    public appUIService: ProjectUIService = new ProjectUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'PROJECTMODULE')) {
            return {  
                viewname: 'task-main-grid-view-by-module', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'ROOT_NOBRANCH')) {
            return {  
                viewname: 'task-main-grid-view-by-module', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'MODULE')) {
            return {  
                viewname: 'task-main-grid-view-by-module', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'PRODUCTNOTROOT')) {
            return {  
                viewname: 'task-main-grid-view-by-module', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'ROOTMODULE')) {
            return {  
                viewname: 'task-main-grid-view-by-module', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'ZT_PRODUCT')) {
            return {  
                viewname: 'task-main-grid-view', 
                parentdata: {"srfparentdefname":"n_product_eq"},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'ALL')) {
            return {  
                viewname: 'task-main-grid-view', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof TaskTreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("tasktreeexpviewtreeexpbar") as any).offsetWidth;
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
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}