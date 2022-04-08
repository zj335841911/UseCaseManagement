import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import GroupTreeExpViewtreeexpbarService from './group-tree-exp-viewtreeexpbar-treeexpbar-service';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {GroupTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class GroupTreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof GroupTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {GroupTreeExpViewtreeexpbarService}
     * @memberof GroupTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: GroupTreeExpViewtreeexpbarService = new GroupTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof GroupTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof GroupTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof GroupTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '任务';

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof GroupTreeExpViewtreeexpbarBase
     */  
    public appUIService: TaskUIService = new TaskUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof GroupTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof GroupTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof GroupTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof GroupTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'ASSIGNEDTOGROUP')) {
            return {  
                viewname: 'task-assignedto-task-group-grid-view', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'TYPEGROUP')) {
            return {  
                viewname: 'task-type-task-group-grid-view', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'PRIGROUP')) {
            return {  
                viewname: 'task-pri-task-group-grid-view', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'STORYGROUP')) {
            return {  
                viewname: 'task-story-task-group-grid-view', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'STATUSGROUP')) {
            return {  
                viewname: 'task-task-group-grid-view', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof GroupTreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("grouptreeexpviewtreeexpbar") as any).offsetWidth;
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
     * @memberof GroupTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}